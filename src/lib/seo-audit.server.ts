// Real technical SEO checks on a fetched page. Every finding is measured from the response; nothing is estimated.
export type Status = "pass" | "warn" | "fail";
export type Check = { id: string; status: Status; kind: "measured" | "guideline"; data: Record<string, string | number | boolean | null> };
export type AuditResult = {
  ok: true;
  url: string;
  finalUrl: string;
  lang: "ar" | "en";
  score: number;
  counts: { pass: number; warn: number; fail: number };
  checks: Check[];
  facts: { title: string; platform: string | null; fetchedAt: string };
};
export type AuditError = { ok: false; error: "invalid_url" | "blocked" | "unreachable" | "not_html" | "rate_limited" | "timeout"; detail?: string };

const UA = "Mozilla/5.0 (compatible; AmrSEOAuditBot/1.0; +https://amrelbusaily.vercel.app/seo-audit)";
const MAX_BYTES = 1_500_000;

/* ---------- address safety (fail closed) ---------- */
function v4Blocked(a: number, b: number, c: number): boolean {
  return (
    a === 0 || a === 10 || a === 127 || a >= 224 ||
    (a === 100 && b >= 64 && b <= 127) ||
    (a === 169 && b === 254) ||
    (a === 172 && b >= 16 && b <= 31) ||
    (a === 192 && b === 0 && (c === 0 || c === 2)) ||
    (a === 192 && b === 168) ||
    (a === 198 && (b === 18 || b === 19)) ||
    (a === 198 && b === 51 && c === 100) ||
    (a === 203 && b === 0 && c === 113)
  );
}
function parseV6(ip: string): number[] | null {
  let s = ip.toLowerCase().split("%")[0];
  const dotted = s.match(/(\d+)\.(\d+)\.(\d+)\.(\d+)$/);
  if (dotted) {
    const p = dotted.slice(1).map(Number);
    if (p.some((n) => n > 255)) return null;
    s = s.slice(0, dotted.index) + ((p[0] << 8) | p[1]).toString(16) + ":" + ((p[2] << 8) | p[3]).toString(16);
  }
  const halves = s.split("::");
  if (halves.length > 2) return null;
  const head = halves[0] ? halves[0].split(":") : [];
  const tail = halves.length === 2 && halves[1] ? halves[1].split(":") : [];
  const fill = halves.length === 2 ? 8 - head.length - tail.length : 0;
  if (fill < 0 || (halves.length === 1 && head.length !== 8)) return null;
  const groups = [...head, ...Array(fill).fill("0"), ...tail];
  if (groups.length !== 8) return null;
  const out: number[] = [];
  for (const g of groups) {
    if (!/^[0-9a-f]{1,4}$/.test(g)) return null;
    const n = parseInt(g, 16);
    out.push(n >> 8, n & 255);
  }
  return out;
}
export function isBlockedIp(ip: string): boolean {
  const m4 = ip.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
  if (m4) {
    const [a, b, c, d] = m4.slice(1).map(Number);
    if ([a, b, c, d].some((n) => n > 255)) return true;
    return v4Blocked(a, b, c);
  }
  const x = parseV6(ip);
  if (!x) return true; // unparseable: block
  const allZeroUntil = (n: number) => x.slice(0, n).every((v) => v === 0);
  if (allZeroUntil(16)) return true; // ::
  if (allZeroUntil(15) && x[15] === 1) return true; // ::1
  if (allZeroUntil(10) && x[10] === 0xff && x[11] === 0xff) return v4Blocked(x[12], x[13], x[14]); // ::ffff:a.b.c.d
  if (allZeroUntil(12)) return true; // deprecated IPv4-compatible
  if (x[0] === 0 && x[1] === 0x64 && x[2] === 0xff && x[3] === 0x9b && x.slice(4, 12).every((v) => v === 0)) return v4Blocked(x[12], x[13], x[14]); // 64:ff9b::/96 NAT64
  if (x[0] === 0x20 && x[1] === 0x02) return v4Blocked(x[2], x[3], x[4]); // 6to4
  if (x[0] === 0x20 && x[1] === 0x01 && x[2] === 0 && x[3] === 0) return true; // teredo
  if (x[0] === 0x20 && x[1] === 0x01 && x[2] === 0x0d && x[3] === 0xb8) return true; // documentation
  if ((x[0] & 0xfe) === 0xfc) return true; // fc00::/7 unique local
  if (x[0] === 0xfe && (x[1] & 0xc0) === 0x80) return true; // fe80::/10 link local
  if (x[0] === 0xfe && (x[1] & 0xc0) === 0xc0) return true; // fec0::/10 site local
  if (x[0] === 0xff) return true; // multicast
  if (x[0] === 0x01 && x[1] === 0 && x.slice(2, 8).every((v) => v === 0)) return true; // 100::/64 discard
  return false;
}

export function normalizeUrl(input: string): URL | null {
  let s = input.trim();
  if (!s || s.length > 300) return null;
  if (!/^https?:\/\//i.test(s)) s = "https://" + s;
  try {
    const u = new URL(s);
    if (u.protocol !== "http:" && u.protocol !== "https:") return null;
    if (u.username || u.password) return null;
    if (u.port && u.port !== "80" && u.port !== "443") return null;
    return u;
  } catch {
    return null;
  }
}

type Resp = { status: number; headers: Record<string, string>; body: string; bytes: number; ttfb: number; ms: number; finalUrl: URL; hops: number };
type Fail = "blocked" | "timeout" | "unreachable";

/**
 * One request. The destination address is validated inside the socket's own DNS lookup, so the
 * address that is checked is the address that is connected to (no separate check-then-fetch gap).
 * Any DNS error, empty answer or non-public address fails closed.
 */
async function oneRequest(url: URL, method: "GET" | "HEAD", timeoutMs: number, maxBytes: number): Promise<Omit<Resp, "finalUrl" | "hops"> | Fail> {
  const [{ default: https }, { default: http }, dns, net, zlib] = await Promise.all([
    import("node:https"), import("node:http"), import("node:dns"), import("node:net"), import("node:zlib"),
  ]);
  const host = url.hostname.replace(/^\[|\]$/g, "");
  if (net.isIP(host) && isBlockedIp(host)) return "blocked";
  if (!net.isIP(host) && (host === "localhost" || host.endsWith(".localhost") || host.endsWith(".local") || host.endsWith(".internal") || !host.includes("."))) return "blocked";
  const lib = url.protocol === "https:" ? https : http;
  const t0 = Date.now();
  return await new Promise((resolve) => {
    let blocked = false;
    let settled = false;
    const done = (v: Omit<Resp, "finalUrl" | "hops"> | Fail) => { if (!settled) { settled = true; resolve(v); } };
    const lookup = (hostname: string, opts: { all?: boolean }, cb: (...a: unknown[]) => void) => {
      dns.lookup(hostname, { all: true, verbatim: true }, (err, addrs) => {
        if (err || !addrs || addrs.length === 0) return cb(err ?? new Error("dns"));
        if (addrs.some((a) => isBlockedIp(a.address))) { blocked = true; return cb(new Error("blocked_address")); }
        if (opts && opts.all) return cb(null, addrs);
        cb(null, addrs[0].address, addrs[0].family);
      });
    };
    const req = lib.request(
      url,
      { method, lookup: lookup as never, headers: { "user-agent": UA, accept: "text/html,application/xhtml+xml,application/xml;q=0.9,text/plain;q=0.8,*/*;q=0.5", "accept-language": "ar,en;q=0.8", "accept-encoding": "gzip, br, deflate" } },
      (res) => {
        const ttfb = Date.now() - t0;
        const headers: Record<string, string> = {};
        for (const [k, v] of Object.entries(res.headers)) headers[k] = Array.isArray(v) ? v.join(", ") : String(v ?? "");
        const enc = (headers["content-encoding"] ?? "").toLowerCase();
        let stream: NodeJS.ReadableStream = res;
        if (method === "GET") {
          if (enc === "gzip") stream = res.pipe(zlib.createGunzip());
          else if (enc === "br") stream = res.pipe(zlib.createBrotliDecompress());
          else if (enc === "deflate") stream = res.pipe(zlib.createInflate());
        }
        const chunks: Buffer[] = [];
        let n = 0;
        const finish = () => {
          const buf = Buffer.concat(chunks);
          done({ status: res.statusCode ?? 0, headers, body: buf.toString("utf-8"), bytes: n, ttfb, ms: Date.now() - t0 });
        };
        if (method === "HEAD") { res.resume(); res.on("end", finish); res.on("close", finish); return; }
        stream.on("data", (c: Buffer) => {
          n += c.length;
          if (n <= maxBytes) chunks.push(c);
          if (n > maxBytes) { finish(); req.destroy(); }
        });
        stream.on("end", finish);
        stream.on("error", finish);
      },
    );
    req.setTimeout(timeoutMs, () => { req.destroy(); done("timeout"); });
    req.on("error", () => done(blocked ? "blocked" : "unreachable"));
    req.end();
  });
}

async function fetchFollow(start: URL, timeoutMs: number, opts: { follow?: boolean; method?: "GET" | "HEAD"; maxBytes?: number } = {}): Promise<Resp | Fail> {
  const follow = opts.follow !== false;
  let url = start;
  for (let hops = 0; hops <= 5; hops++) {
    const r = await oneRequest(url, opts.method ?? "GET", timeoutMs, opts.maxBytes ?? MAX_BYTES);
    if (typeof r === "string") return r;
    const loc = r.headers["location"];
    if (follow && r.status >= 300 && r.status < 400 && loc) {
      try { url = new URL(loc, url); } catch { return "unreachable"; }
      if ((url.protocol !== "http:" && url.protocol !== "https:") || (url.port && url.port !== "80" && url.port !== "443")) return "blocked";
      continue; // next hop is fully re-validated inside oneRequest
    }
    return { ...r, finalUrl: url, hops };
  }
  return "unreachable";
}

/* ---------- HTML helpers ---------- */
function attr(tag: string, name: string): string | null {
  const m = tag.match(new RegExp(`\\b${name}\\s*=\\s*("([^"]*)"|'([^']*)'|([^\\s>]+))`, "i"));
  return m ? (m[2] ?? m[3] ?? m[4] ?? "") : null;
}
function decode(s: string): string {
  return s.replace(/&ndash;/g, "-").replace(/&mdash;/g, "-").replace(/&nbsp;/g, " ").replace(/&hellip;/g, "...").replace(/&[lr]squo;/g, "'").replace(/&[lr]dquo;/g, '"').replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n))).replace(/\s+/g, " ").trim();
}
function strip(html: string): string {
  return decode(html.replace(/<!--[\s\S]*?-->/g, " ").replace(/<(script|style|noscript|svg|template)[\s\S]*?<\/\1>/gi, " ").replace(/<[^>]+>/g, " "));
}
function metaContent(html: string, key: string, by: "name" | "property" = "name"): string | null {
  for (const m of html.matchAll(/<meta\b[^>]*>/gi)) {
    const k = attr(m[0], by);
    if (k && k.toLowerCase() === key) return decode(attr(m[0], "content") ?? "");
  }
  return null;
}
type Json = Record<string, unknown>;
function walk(node: unknown, fn: (o: Json) => void) {
  if (Array.isArray(node)) return node.forEach((n) => walk(n, fn));
  if (!node || typeof node !== "object") return;
  fn(node as Json);
  for (const v of Object.values(node as Json)) walk(v, fn);
}
const typesOf = (o: Json): string[] => { const t = o["@type"]; return typeof t === "string" ? [t] : Array.isArray(t) ? t.filter((x): x is string => typeof x === "string") : []; };

function detectPlatform(html: string, headers: Record<string, string>): string | null {
  const h = html.slice(0, 400_000).toLowerCase();
  if (h.includes("cdn.shopify.com") || headers["x-shopify-stage"]) return "Shopify";
  if (h.includes("cdn.salla.network") || (h.includes("salla.sa") && h.includes("salla"))) return "Salla";
  if (h.includes("zid.store") || h.includes("cdn.zid.sa") || h.includes("zidcdn")) return "Zid";
  if (h.includes("/wp-content/") && h.includes("woocommerce")) return "WooCommerce";
  if (h.includes("/wp-content/")) return "WordPress";
  return null;
}

const GENERIC_ANCHOR = /^(click here|here|read more|more|learn more|link|this|اضغط هنا|هنا|المزيد|اقرأ المزيد|اقرا المزيد|اعرف المزيد|تفاصيل)$/i;
const ASSET_EXT = /\.(jpe?g|png|gif|webp|avif|svg|ico|css|js|pdf|zip|mp4|mp3|woff2?|xml|json)(\?|$)/i;

/* ---------- audit ---------- */
export async function runAudit(input: string): Promise<AuditResult | AuditError> {
  const start = normalizeUrl(input);
  if (!start) return { ok: false, error: "invalid_url" };
  const page = await fetchFollow(start, 9000);
  if (typeof page === "string") return { ok: false, error: page === "blocked" ? "blocked" : page === "timeout" ? "timeout" : "unreachable" };
  const { headers, ttfb, ms, finalUrl, hops, body: html, status } = page;
  const ctype = headers["content-type"] ?? "";
  if (status < 400 && !/html|xml/i.test(ctype) && html.length > 0 && !/<html|<!doctype/i.test(html.slice(0, 2000))) return { ok: false, error: "not_html" };

  const checks: Check[] = [];
  // Facts that are directly observable. Everything else is a guideline threshold and can never be a "fail".
  const MEASURED = new Set(["status", "redirects", "indexable", "canonical", "robots", "sitemap", "softFourOhFour", "https", "httpToHttps", "hsts", "mixedContent", "charset", "h1", "htmlLang", "hreflang", "brokenLinks", "viewport", "compression", "schema", "productSchema", "duplicateTags"]);
  const HARD_FAIL_OK = new Set(["title", "description"]); // a missing tag is a fact; its length is a guideline
  const add = (id: string, st: Status, data: Check["data"] = {}) => {
    const kind = MEASURED.has(id) ? "measured" : "guideline";
    const status: Status = kind === "guideline" && st === "fail" && !(HARD_FAIL_OK.has(id) && Number(data.length ?? 0) === 0) ? "warn" : st;
    checks.push({ id, status, kind, data });
  };
  const origin = finalUrl.origin;
  const isHttps = finalUrl.protocol === "https:";

  // anchors (needed for link sampling before network fan-out)
  const anchors = [...html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)].map((m) => {
    const tag = `<a ${m[1]}>`;
    const href = attr(tag, "href");
    const inner = m[2];
    const text = decode(inner.replace(/<[^>]+>/g, " "));
    const imgAlt = inner.match(/<img\b[^>]*>/i) ? (attr(inner.match(/<img\b[^>]*>/i)![0], "alt") ?? "") : "";
    const label = text || decode(imgAlt) || decode(attr(tag, "aria-label") ?? "") || decode(attr(tag, "title") ?? "");
    return { href, text, label, rel: (attr(tag, "rel") ?? "").toLowerCase(), hasImg: /<img\b/i.test(inner) };
  });
  const internalSet = new Map<string, string>();
  let internalCount = 0, nofollowInternal = 0, jsLinks = 0, emptyAnchors = 0, genericAnchors = 0;
  for (const a of anchors) {
    if (!a.href) continue;
    const h = a.href.trim();
    if (h === "#" || /^javascript:/i.test(h)) { jsLinks++; continue; }
    if (h.startsWith("#") || /^(mailto:|tel:|sms:|whatsapp:)/i.test(h)) continue;
    let u: URL;
    try { u = new URL(h, finalUrl); } catch { continue; }
    if (u.hostname !== finalUrl.hostname) continue;
    internalCount++;
    if (a.rel.split(/\s+/).includes("nofollow")) nofollowInternal++;
    if (!a.label) emptyAnchors++;
    else if (GENERIC_ANCHOR.test(a.text.trim())) genericAnchors++;
    u.hash = "";
    const key = u.toString();
    if (key !== finalUrl.toString() && !ASSET_EXT.test(u.pathname) && !internalSet.has(key)) internalSet.set(key, a.label);
  }
  const sample = [...internalSet.keys()].slice(0, 8);

  // robots.txt, sitemap, http->https, soft-404 probe and link sample run in parallel
  const rand = Math.random().toString(36).slice(2, 10);
  const robotsP = fetchFollow(new URL("/robots.txt", origin), 6000, { maxBytes: 200_000 });
  const httpP = isHttps ? fetchFollow(new URL("http://" + finalUrl.host + "/"), 6000, { follow: false, method: "HEAD" }) : Promise.resolve("unreachable" as Fail);
  const probeP = fetchFollow(new URL(`/seo-check-${rand}`, origin), 6000, { maxBytes: 20_000 });
  const linkP = Promise.all(sample.map(async (l) => {
    const h = await fetchFollow(new URL(l), 5000, { follow: false, method: "HEAD" });
    if (typeof h !== "string" && (h.status === 405 || h.status === 403 || h.status === 501)) {
      const g = await fetchFollow(new URL(l), 5000, { follow: false, maxBytes: 2000 });
      return typeof g === "string" ? null : g.status;
    }
    return typeof h === "string" ? null : h.status;
  }));
  const [robotsR, httpR, probeR, linkStatuses] = await Promise.all([robotsP, httpP, probeP, linkP]);

  const robotsTxt = typeof robotsR === "object" && robotsR.status === 200 && !/<html/i.test(robotsR.body.slice(0, 500)) ? robotsR.body : null;
  let sitemapUrl = new URL("/sitemap.xml", origin);
  if (robotsTxt) {
    const m = robotsTxt.match(/^\s*sitemap:\s*(\S+)/im);
    if (m) { try { sitemapUrl = new URL(m[1], origin); } catch { /* keep default */ } }
  }
  const sitemapR = sitemapUrl.hostname === finalUrl.hostname ? await fetchFollow(sitemapUrl, 7000, { maxBytes: 1_000_000 }) : "unreachable";

  // language
  const htmlTag = html.match(/<html\b[^>]*>/i)?.[0] ?? "";
  const langAttr = (attr(htmlTag, "lang") ?? "").toLowerCase();
  const text = strip(html);
  const smp = text.slice(0, 3000);
  const arChars = (smp.match(/[\u0600-\u06FF]/g) ?? []).length;
  const letters = (smp.match(/[A-Za-z\u0600-\u06FF]/g) ?? []).length || 1;
  const lang: "ar" | "en" = langAttr.startsWith("ar") || arChars / letters > 0.4 ? "ar" : "en";

  /* crawl and index */
  add("status", status === 200 ? "pass" : status < 400 ? "warn" : "fail", { code: status });
  if (hops > 0) add("redirects", hops <= 1 ? "pass" : hops <= 2 ? "warn" : "fail", { hops });
  const metaNames = ["robots", "googlebot"].map((n) => (metaContent(html, n) ?? "").toLowerCase()).join(",");
  const xRobots = (headers["x-robots-tag"] ?? "").toLowerCase();
  const directives = `${metaNames},${xRobots}`;
  const noindex = /\bnoindex\b|\bnone\b/.test(directives);
  // robots.txt: pick the Googlebot group if present, else *, then apply longest-match Allow/Disallow to this URL
  const robotsState: "ok" | "missing" | "error" = robotsTxt ? "ok" : typeof robotsR === "object" && robotsR.status >= 500 ? "error" : typeof robotsR === "string" ? "error" : "missing";
  let blockedByRobots = false;
  if (robotsTxt) {
    const groups: { agents: string[]; rules: { allow: boolean; pat: string }[] }[] = [];
    let cur: (typeof groups)[number] | null = null;
    let lastWasAgent = false;
    for (const raw of robotsTxt.split(/\r?\n/)) {
      const line = raw.replace(/#.*/, "").trim();
      const ua = line.match(/^user-agent:\s*(.+)$/i);
      if (ua) { if (!cur || !lastWasAgent) { cur = { agents: [], rules: [] }; groups.push(cur); } cur.agents.push(ua[1].trim().toLowerCase()); lastWasAgent = true; continue; }
      const rule = line.match(/^(allow|disallow):\s*(.*)$/i);
      if (rule && cur) { lastWasAgent = false; if (rule[2]) cur.rules.push({ allow: rule[1].toLowerCase() === "allow", pat: rule[2] }); }
      else if (line) lastWasAgent = false;
    }
    const pick = groups.filter((g) => g.agents.some((a) => a === "googlebot"));
    const use = pick.length ? pick : groups.filter((g) => g.agents.includes("*"));
    const target = finalUrl.pathname + finalUrl.search;
    let best = { len: -1, allow: true };
    for (const g of use) for (const r of g.rules) {
      const re = new RegExp("^" + r.pat.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*").replace(/\\\$$/, "$"));
      if (re.test(target)) { const len = r.pat.length; if (len > best.len || (len === best.len && r.allow)) best = { len, allow: r.allow }; }
    }
    blockedByRobots = !best.allow;
  }
  add("indexable", noindex || blockedByRobots ? "fail" : robotsState === "error" ? "warn" : "pass", { noindex, blockedByRobots, robotsState });
  let canonical: string | null = null;
  let canonicalCount = 0;
  for (const m of html.matchAll(/<link\b[^>]*>/gi)) {
    if ((attr(m[0], "rel") ?? "").toLowerCase().split(/\s+/).includes("canonical")) { canonicalCount++; canonical ??= attr(m[0], "href"); }
  }
  let canonicalOther = false;
  if (canonical) { try { canonicalOther = new URL(canonical, finalUrl).hostname !== finalUrl.hostname; } catch { /* ignore */ } }
  add("canonical", !canonical ? "warn" : canonicalOther || canonicalCount > 1 ? "warn" : "pass", { other: canonicalOther, count: canonicalCount });
  add("robots", robotsTxt ? (/^\s*sitemap:/im.test(robotsTxt) ? "pass" : "warn") : "warn", { found: !!robotsTxt, hasSitemap: !!robotsTxt && /^\s*sitemap:/im.test(robotsTxt) });
  let sitemapEntries = 0, sitemapOk = false;
  if (typeof sitemapR === "object" && sitemapR.status === 200 && /<(urlset|sitemapindex)/i.test(sitemapR.body)) { sitemapOk = true; sitemapEntries = (sitemapR.body.match(/<loc>/gi) ?? []).length; }
  add("sitemap", sitemapOk ? "pass" : "warn", { found: sitemapOk, entries: sitemapEntries });
  if (typeof probeR === "object") add("softFourOhFour", probeR.status === 404 || probeR.status === 410 ? "pass" : probeR.status === 200 ? "warn" : "pass", { code: probeR.status });
  let pathBad = 0;
  const p = finalUrl.pathname;
  if (finalUrl.toString().length > 115) pathBad++;
  if (/[A-Z]/.test(p)) pathBad++;
  if (p.includes("_")) pathBad++;
  if ([...finalUrl.searchParams.keys()].length > 2) pathBad++;
  add("urlStructure", pathBad === 0 ? "pass" : "warn", { issues: pathBad, length: finalUrl.toString().length });

  /* security and transport */
  add("https", isHttps ? "pass" : "fail");
  if (isHttps && typeof httpR === "object") {
    const toHttps = httpR.status >= 300 && httpR.status < 400 && /^https:/i.test(httpR.headers["location"] ?? "");
    add("httpToHttps", toHttps ? "pass" : "warn", { code: httpR.status });
  }
  if (isHttps) add("hsts", headers["strict-transport-security"] ? "pass" : "warn");
  if (isHttps) {
    const mixed = [...html.matchAll(/<(img|script|iframe|source|video|audio|link)\b[^>]*\b(src|href)\s*=\s*["']?(http:\/\/[^"'\s>]+)/gi)].filter((m) => m[1].toLowerCase() !== "link" || /stylesheet|icon/i.test(m[0])).length;
    add("mixedContent", mixed === 0 ? "pass" : "fail", { count: mixed });
  }
  const charset = /charset=/i.test(ctype) || /<meta\b[^>]*charset/i.test(html);
  add("charset", charset ? "pass" : "warn");

  /* on-page */
  const titles = [...html.matchAll(/<title\b[^>]*>([\s\S]*?)<\/title>/gi)];
  const title = titles[0] ? decode(titles[0][1].replace(/<[^>]+>/g, "")) : "";
  add("title", !title ? "fail" : title.length < 25 || title.length > 65 ? "warn" : "pass", { length: title.length, value: title.slice(0, 120) });
  const descTags = [...html.matchAll(/<meta\b[^>]*>/gi)].filter((m) => (attr(m[0], "name") ?? "").toLowerCase() === "description");
  const desc = metaContent(html, "description");
  add("description", !desc ? "fail" : desc.length < 70 || desc.length > 165 ? "warn" : "pass", { length: desc?.length ?? 0 });
  const dup = (titles.length > 1 ? 1 : 0) + (descTags.length > 1 ? 1 : 0);
  if (dup) add("duplicateTags", "warn", { titles: titles.length, descriptions: descTags.length });
  const h1s = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) => decode(m[1].replace(/<[^>]+>/g, ""))).filter(Boolean);
  add("h1", h1s.length === 0 ? "fail" : h1s.length > 1 ? "warn" : "pass", { count: h1s.length, value: h1s[0]?.slice(0, 100) ?? null });
  const h2count = (html.match(/<h2\b/gi) ?? []).length;
  add("h2", h2count === 0 ? "warn" : "pass", { count: h2count });
  const words = (text.match(/[\p{L}\p{N}]+/gu) ?? []).length;
  add("content", words < 120 ? "fail" : words < 300 ? "warn" : "pass", { words });
  add("htmlLang", langAttr ? "pass" : "warn");
  const hreflangs = [...html.matchAll(/<link\b[^>]*>/gi)].filter((m) => (attr(m[0], "rel") ?? "").toLowerCase() === "alternate" && attr(m[0], "hreflang")).map((m) => ({ l: (attr(m[0], "hreflang") ?? "").toLowerCase(), h: attr(m[0], "href") ?? "" }));
  if (hreflangs.length > 0) {
    const badCode = hreflangs.filter((x) => x.l !== "x-default" && !/^[a-z]{2,3}(-[a-z0-9]{2,8})*$/.test(x.l)).length;
    const self = hreflangs.some((x) => { try { const u = new URL(x.h, finalUrl); return u.hostname === finalUrl.hostname && u.pathname.replace(/\/$/, "") === finalUrl.pathname.replace(/\/$/, ""); } catch { return false; } });
    add("hreflang", badCode > 0 || !self ? "warn" : "pass", { count: hreflangs.length, badCode, selfRef: self });
  }

  /* links */
  add("internalLinks", internalCount < 5 ? "warn" : "pass", { count: internalCount });
  const checked = linkStatuses.filter((s): s is number => s !== null);
  if (checked.length > 0) {
    const broken = checked.filter((s) => s >= 400).length;
    const redirected = checked.filter((s) => s >= 300 && s < 400).length;
    add("brokenLinks", broken > 0 ? "fail" : redirected > Math.ceil(checked.length / 2) ? "warn" : "pass", { sampled: checked.length, broken, redirected });
  }
  const anchorBad = emptyAnchors + genericAnchors;
  add("anchorText", anchorBad === 0 ? "pass" : "warn", { empty: emptyAnchors, generic: genericAnchors });
  add("crawlableLinks", jsLinks === 0 ? "pass" : jsLinks > 5 ? "fail" : "warn", { count: jsLinks });
  if (nofollowInternal > 0) add("nofollowInternal", "warn", { count: nofollowInternal });

  /* page experience basics (measurable proxies only) */
  const viewport = metaContent(html, "viewport");
  add("viewport", viewport && /width\s*=\s*device-width/i.test(viewport) ? "pass" : "fail");
  add("speed", ttfb < 800 ? "pass" : ttfb < 1800 ? "warn" : "fail", { ms: ttfb });
  const enc = (headers["content-encoding"] ?? "").toLowerCase();
  add("compression", /gzip|br|zstd|deflate/.test(enc) ? "pass" : "warn", { encoding: enc || "none" });
  const kb = Math.round(Buffer.byteLength(html) / 1024);
  add("htmlSize", kb > 900 ? "fail" : kb > 400 ? "warn" : "pass", { kb, truncated: page.bytes > MAX_BYTES });
  const scriptTags = [...html.matchAll(/<script\b[^>]*>/gi)].map((m) => m[0]);
  const ext = scriptTags.filter((t) => /\bsrc\s*=/i.test(t)).length;
  add("scripts", ext > 40 ? "fail" : ext > 20 ? "warn" : "pass", { count: ext });
  const head = html.match(/<head\b[\s\S]*?<\/head>/i)?.[0] ?? "";
  const blocking = [...head.matchAll(/<script\b[^>]*>/gi)].map((m) => m[0]).filter((t) => /\bsrc\s*=/i.test(t) && !/\b(async|defer)\b/i.test(t) && !/type\s*=\s*["']?module/i.test(t)).length;
  add("renderBlocking", blocking === 0 ? "pass" : blocking <= 2 ? "warn" : "fail", { count: blocking });
  const imgs = [...html.matchAll(/<img\b[^>]*>/gi)].map((m) => m[0]);
  if (imgs.length > 0) {
    const noAlt = imgs.filter((t) => { const a = attr(t, "alt"); return a === null || a.trim() === ""; }).length;
    const r = noAlt / imgs.length;
    add("imageAlt", r === 0 ? "pass" : r <= 0.2 ? "warn" : "fail", { total: imgs.length, missing: noAlt });
    const noDim = imgs.filter((t) => !(attr(t, "width") && attr(t, "height")) && !/aspect-ratio/i.test(attr(t, "style") ?? "")).length;
    add("imageDimensions", noDim === 0 ? "pass" : noDim / imgs.length <= 0.2 ? "warn" : "fail", { total: imgs.length, missing: noDim });
    if (imgs.length >= 6) {
      const lazy = imgs.filter((t) => /loading\s*=\s*["']?lazy/i.test(t)).length;
      add("lazyImages", lazy > 0 ? "pass" : "warn", { lazy, total: imgs.length });
    }
    const withExt = imgs.map((t) => (attr(t, "src") ?? attr(t, "data-src") ?? "").split("?")[0].toLowerCase()).filter((s) => /\.(jpe?g|png|gif|webp|avif)$/.test(s));
    if (withExt.length >= 5) {
      const modern = withExt.filter((s) => /\.(webp|avif)$/.test(s)).length;
      add("imageFormats", modern > 0 ? "pass" : "warn", { total: withExt.length, modern });
    }
  }

  /* structured data */
  const types = new Set<string>();
  const products: Json[] = [];
  let ldBlocks = 0, ldInvalid = 0;
  for (const m of html.matchAll(/<script\b[^>]*type\s*=\s*["']?application\/ld\+json["']?[^>]*>([\s\S]*?)<\/script>/gi)) {
    ldBlocks++;
    try { walk(JSON.parse(m[1].trim()), (o) => { typesOf(o).forEach((t) => types.add(t)); if (typesOf(o).includes("Product")) products.push(o); }); } catch { ldInvalid++; }
  }
  const hasMicrodata = /itemtype\s*=\s*["']https?:\/\/schema\.org\/Product/i.test(html);
  add("schema", types.size === 0 ? "warn" : ldInvalid > 0 ? "warn" : "pass", { blocks: ldBlocks, invalid: ldInvalid, types: [...types].slice(0, 8).join(", ") });
  if (products.length > 0) {
    const pr = products[0];
    const offers: Json[] = [];
    walk(pr["offers"], (o) => { if (o["price"] !== undefined || o["lowPrice"] !== undefined || o["priceCurrency"] !== undefined || o["availability"] !== undefined) offers.push(o); });
    const has = (k: string) => pr[k] !== undefined && pr[k] !== "";
    const missing: string[] = [];
    if (!has("name")) missing.push("name");
    if (!has("image")) missing.push("image");
    if (!offers.some((o) => o["price"] !== undefined || o["lowPrice"] !== undefined)) missing.push("offers.price");
    if (!offers.some((o) => o["priceCurrency"] !== undefined)) missing.push("offers.priceCurrency");
    const rec: string[] = [];
    if (!offers.some((o) => o["availability"] !== undefined)) rec.push("offers.availability");
    if (!has("description")) rec.push("description");
    if (!has("brand")) rec.push("brand");
    if (!has("sku") && !has("gtin") && !has("gtin13") && !has("mpn")) rec.push("sku/gtin/mpn");
    if (!has("aggregateRating") && !has("review")) rec.push("aggregateRating/review");
    add("productSchema", missing.length ? "fail" : rec.length ? "warn" : "pass", { missing: missing.join(", "), recommended: rec.join(", ") });
  } else if (hasMicrodata) {
    add("productSchema", "pass", { missing: "", recommended: "", microdata: true });
  } else if (/\/(products?|p|item|items|product-page)\/|\/p\d+|\/(المنتج|منتج)/i.test(finalUrl.pathname)) {
    add("productSchema", "warn", { missing: "Product", recommended: "", microdata: false });
  }
  const orgOk = types.has("Organization") || types.has("Store") || types.has("LocalBusiness") || types.has("WebSite");
  add("orgSchema", orgOk ? "pass" : "warn");
  if (finalUrl.pathname !== "/" && finalUrl.pathname !== "") add("breadcrumb", types.has("BreadcrumbList") ? "pass" : "warn");
  const og = ["og:title", "og:description", "og:image"].filter((k) => !metaContent(html, k, "property"));
  add("openGraph", og.length === 0 ? "pass" : og.length === 3 ? "fail" : "warn", { missing: og.join(", ") });
  const icon = [...html.matchAll(/<link\b[^>]*>/gi)].some((m) => /\bicon\b/i.test(attr(m[0], "rel") ?? ""));
  add("favicon", icon ? "pass" : "warn");

  /* trust signals (technical, page-level; Google has no single E-E-A-T score) */
  const all = anchors.map((a) => `${a.href ?? ""} ${a.text}`.toLowerCase());
  const found = (re: RegExp) => all.some((s) => re.test(s));
  const trust = {
    about: found(/about|من نحن|عن المتجر|عنا|من-نحن/),
    contact: found(/contact|اتصل|تواصل|اتصال/),
    privacy: found(/privacy|الخصوصية|خصوصية/),
    policies: found(/return|refund|shipping|delivery|terms|policy|policies|الاسترجاع|الاستبدال|الشحن|التوصيل|الشروط|السياسة|سياسة/),
  };
  const trustCount = Object.values(trust).filter(Boolean).length;
  add("trustPages", trustCount >= 3 ? "pass" : trustCount >= 1 ? "warn" : "fail", { count: trustCount, about: trust.about, contact: trust.contact, privacy: trust.privacy, policies: trust.policies });
  const contactInfo = /href\s*=\s*["'](tel:|mailto:)/i.test(html) || /wa\.me\/|api\.whatsapp\.com\//i.test(html);
  add("contactInfo", contactInfo ? "pass" : "warn");

  const counts = { pass: 0, warn: 0, fail: 0 };
  for (const c of checks) counts[c.status]++;
  const score = Math.round(((counts.pass + counts.warn * 0.5) / checks.length) * 100);
  return {
    ok: true,
    url: start.toString(),
    finalUrl: finalUrl.toString(),
    lang,
    score,
    counts,
    checks,
    facts: { title: title.slice(0, 120), platform: detectPlatform(html, headers), fetchedAt: new Date().toISOString() },
  };
}

/* ---------- full-site URL discovery (sitemap first, then homepage links) ---------- */
export async function discoverUrls(input: string, max = 25): Promise<{ ok: true; origin: string; urls: string[]; source: "sitemap" | "homepage" | "both" } | AuditError> {
  const start = normalizeUrl(input);
  if (!start) return { ok: false, error: "invalid_url" };
  const home = await fetchFollow(new URL("/", start), 9000);
  if (typeof home === "string") return { ok: false, error: home === "blocked" ? "blocked" : home === "timeout" ? "timeout" : "unreachable" };
  const host = home.finalUrl.hostname.replace(/^www\./, "");
  const origin = home.finalUrl.origin;
  const same = (u: URL) => (u.protocol === "http:" || u.protocol === "https:") && u.hostname.replace(/^www\./, "") === host;
  const clean = (u: URL) => { u.hash = ""; return u.href.replace(/\/$/, "") || u.href; };
  const out = new Map<string, true>();
  const add = (raw: string, base: URL) => {
    try { const u = new URL(raw.trim(), base); if (same(u) && !ASSET_EXT.test(u.pathname) && !/\.(md|txt|php)$/i.test(u.pathname)) out.set(clean(u), true); } catch { /* skip */ }
  };
  out.set(clean(new URL(home.finalUrl.href)), true);
  let fromSitemap = 0;
  const robots = await fetchFollow(new URL("/robots.txt", origin), 6000, { maxBytes: 200_000 });
  let smUrl = new URL("/sitemap.xml", origin);
  if (typeof robots === "object" && robots.status === 200) {
    const m = robots.body.match(/^\s*sitemap:\s*(\S+)/im);
    if (m) { try { const u = new URL(m[1], origin); if (same(u)) smUrl = u; } catch { /* default */ } }
  }
  const queue = [smUrl];
  const seenMaps = new Set<string>();
  while (queue.length && seenMaps.size < 4 && out.size < max * 3) {
    const u = queue.shift()!;
    if (seenMaps.has(u.href)) continue;
    seenMaps.add(u.href);
    const r = await fetchFollow(u, 7000, { maxBytes: 1_500_000 });
    if (typeof r === "string" || r.status !== 200) continue;
    const locs = [...r.body.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/gi)].map((m) => decode(m[1]));
    for (const l of locs) {
      if (/\.xml(\.gz)?(\?|$)/i.test(l)) { try { const s = new URL(l, u); if (same(s)) queue.push(s); } catch { /* skip */ } }
      else { const before = out.size; add(l, u); if (out.size > before) fromSitemap++; }
    }
  }
  let fromHome = 0;
  for (const m of home.body.matchAll(/<a\b[^>]*\bhref\s*=\s*["']([^"'#][^"']*)["']/gi)) {
    if (/^(mailto|tel|javascript):/i.test(m[1])) continue;
    const before = out.size; add(decode(m[1]), home.finalUrl); if (out.size > before) fromHome++;
  }
  const list = [...out.keys()];
  // keep the homepage first, then spread the rest by shortest path (top-level pages first)
  const first = list[0];
  const rest = list.slice(1).sort((a, b) => a.split("/").length - b.split("/").length);
  const urls = [first, ...rest].slice(0, max);
  return { ok: true, origin, urls, source: fromSitemap && fromHome ? "both" : fromSitemap ? "sitemap" : "homepage" };
}

/* ---------- page facts for the SEO Suite (what is on the page now, nothing inferred) ---------- */
export type PageFacts = {
  ok: true; url: string; finalUrl: string; lang: "ar" | "en";
  title: string; description: string; h1: string[]; text: string; schemaTypes: string[];
  product: { name: string; price: string | null; currency: string | null; image: string | null; sku: string | null; brand: string | null; availability: string | null; description: string | null } | null;
  images: Array<{ src: string; alt: string | null }>;
};
export async function extractPage(input: string): Promise<PageFacts | AuditError> {
  const start = normalizeUrl(input);
  if (!start) return { ok: false, error: "invalid_url" };
  const page = await fetchFollow(start, 9000);
  if (typeof page === "string") return { ok: false, error: page === "blocked" ? "blocked" : page === "timeout" ? "timeout" : "unreachable" };
  const html = page.body;
  if (!/<html|<!doctype/i.test(html.slice(0, 2000)) && !/html/i.test(page.headers["content-type"] ?? "")) return { ok: false, error: "not_html" };
  const finalUrl = page.finalUrl;
  const title = decode(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? "").slice(0, 300);
  const description = (metaContent(html, "description") ?? "").slice(0, 500);
  const h1 = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) => strip(m[1])).filter(Boolean).slice(0, 3).map((s) => s.slice(0, 200));
  const body = html.match(/<main\b[\s\S]*?<\/main>/i)?.[0] ?? html.match(/<body\b[\s\S]*?<\/body>/i)?.[0] ?? html;
  const pageText = strip(body.replace(/<(header|footer|nav)\b[\s\S]*?<\/\1>/gi, " ")).slice(0, 900);
  const schemaTypes = new Set<string>();
  let product: PageFacts["product"] = null;
  for (const m of html.matchAll(/<script\b[^>]*type\s*=\s*["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    let j: unknown; try { j = JSON.parse(m[1]); } catch { continue; }
    walk(j, (o) => {
      for (const t of typesOf(o)) schemaTypes.add(t);
      if (!product && typesOf(o).includes("Product") && typeof o.name === "string") {
        const offer = (Array.isArray(o.offers) ? o.offers[0] : o.offers) as Json | undefined;
        const img = Array.isArray(o.image) ? o.image[0] : o.image;
        const brand = o.brand && typeof o.brand === "object" ? (o.brand as Json).name : o.brand;
        const s = (v: unknown) => (typeof v === "string" || typeof v === "number" ? String(v).slice(0, 300) : null);
        product = { name: o.name.slice(0, 200), price: s(offer?.price), currency: s(offer?.priceCurrency), image: typeof img === "string" ? img.slice(0, 500) : null, sku: s(o.sku), brand: s(brand), availability: s(offer?.availability), description: s(o.description) };
      }
    });
  }
  const seen = new Set<string>();
  const images: PageFacts["images"] = [];
  for (const m of html.matchAll(/<img\b[^>]*>/gi)) {
    const raw = attr(m[0], "src") ?? attr(m[0], "data-src") ?? "";
    if (!raw || raw.startsWith("data:")) continue;
    let abs: string; try { abs = new URL(raw, finalUrl).href; } catch { continue; }
    if (seen.has(abs) || /\.(svg|gif)(\?|$)/i.test(abs)) continue;
    seen.add(abs);
    const alt = attr(m[0], "alt");
    images.push({ src: abs.slice(0, 500), alt: alt === null ? null : decode(alt).slice(0, 200) });
    if (images.length >= 12) break;
  }
  const htmlLang = (html.match(/<html\b[^>]*\blang\s*=\s*["']?([a-zA-Z-]+)/i)?.[1] ?? "").toLowerCase();
  const pd = (product as unknown as { description?: string | null } | null)?.description ?? "";
  const text = pd.length >= 80 ? pd.slice(0, 900) : pageText;
  const lang: "ar" | "en" = htmlLang.startsWith("ar") || (/[\u0600-\u06FF]/.test(title + text) && !/[a-zA-Z]{4}/.test(title)) ? "ar" : "en";
  return { ok: true, url: start.href, finalUrl: finalUrl.href, lang, title, description, h1, text, schemaTypes: [...schemaTypes].slice(0, 20), product, images };
}
