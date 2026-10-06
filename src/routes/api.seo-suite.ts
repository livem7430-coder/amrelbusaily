import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

// Paid Suite API. License verification fails closed; successful verdicts are cached for two minutes.
// Nothing is stored. AI use is capped per run and per day; without AI the deterministic fix pack is returned.
const ipHits = new Map<string, number[]>();
const keyHits = new Map<string, number[]>();
const aiKeyHits = new Map<string, number[]>();
const okCache = new Map<string, number>();
let day = "", dayCount = 0;
const AI_DAILY_CAP = 120; // best-effort per instance, not a global quota guarantee

const json = (b: unknown, s = 200) => new Response(JSON.stringify(b), { status: s, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" } });
function limited(map: Map<string, number[]>, id: string, max: number, windowMs: number) {
  const now = Date.now();
  const r = (map.get(id) ?? []).filter((t) => now - t < windowMs);
  if (r.length >= max) { map.set(id, r); return true; }
  r.push(now); map.set(id, r);
  if (map.size > 3000) map.clear();
  return false;
}
async function sha(s: string) {
  const b = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
  return [...new Uint8Array(b)].map((x) => x.toString(16).padStart(2, "0")).join("");
}
type Verdict = "valid" | "invalid" | "refunded" | "unavailable" | "not_configured";
async function verifyLicense(key: string): Promise<Verdict> {
  const productId = process.env.GUMROAD_SUITE_PRODUCT_ID;
  if (!productId) return "not_configured";
  if (!/^[A-Za-z0-9-]{8,80}$/.test(key)) return "invalid";
  const h = await sha(key + productId);
  const until = okCache.get(h);
  if (until && until > Date.now()) return "valid";
  try {
    const res = await fetch("https://api.gumroad.com/v2/licenses/verify", {
      method: "POST", headers: { "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ product_id: productId, license_key: key, increment_uses_count: "false" }), signal: AbortSignal.timeout(7000),
    });
    if (res.status === 404) return "invalid";
    if (!res.ok) return "unavailable";
    const j = (await res.json()) as { success?: boolean; purchase?: { refunded?: boolean; chargebacked?: boolean; disputed?: boolean; product_id?: string } };
    if (!j.success) return "invalid";
    if (j.purchase?.product_id && j.purchase.product_id !== productId) return "invalid";
    if (j.purchase?.refunded || j.purchase?.chargebacked || j.purchase?.disputed) return "refunded";
    okCache.set(h, Date.now() + 120_000);
    if (okCache.size > 2000) okCache.clear();
    return "valid";
  } catch { return "unavailable"; }
}

async function callGemini(prompt: string): Promise<unknown[] | null> {
  const key = process.env.GEMINI_API_KEY, model = process.env.GEMINI_MODEL;
  if (!key || process.env.GEMINI_AI_ENABLED !== "true" || !model || !/^[a-zA-Z0-9.-]{1,100}$/.test(model)) return null;
  const today = new Date().toISOString().slice(0, 10);
  if (day !== today) { day = today; dayCount = 0; }
  if (dayCount >= AI_DAILY_CAP) return null;
  for (let attempt = 0; attempt < 2; attempt++) {
    dayCount++;
    try {
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
        method: "POST", signal: AbortSignal.timeout(20000), headers: { "content-type": "application/json", "x-goog-api-key": key },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }], generationConfig: { responseMimeType: "application/json", temperature: 0.4, maxOutputTokens: 3000 } }),
      });
      if (res.status === 429) { dayCount = AI_DAILY_CAP; return null; }
      if (res.status === 503 && attempt === 0) { await new Promise((r) => setTimeout(r, 1500)); continue; }
      if (!res.ok) return null;
      const d = (await res.json()) as { candidates?: { content?: { parts?: { text?: string }[] } }[] };
      const parsed = JSON.parse(d.candidates?.[0]?.content?.parts?.map((p) => p.text ?? "").join("") ?? "");
      return Array.isArray(parsed) ? parsed : null;
    } catch { return null; }
  }
  return null;
}

// Treat browser-supplied facts as untrusted input. Keep the same bounded shape as extraction.
function safeFacts(pages: unknown[]): import("@/lib/seo-audit.server").PageFacts[] | null {
  const out: import("@/lib/seo-audit.server").PageFacts[] = [];
  const str = (v: unknown, n: number) => typeof v === "string" ? v.slice(0, n) : "";
  for (const raw of pages) {
    if (!raw || typeof raw !== "object" || Array.isArray(raw)) return null;
    const p = raw as Record<string, unknown>;
    if (typeof p.finalUrl !== "string" || typeof p.title !== "string" || typeof p.description !== "string" || typeof p.text !== "string" || !Array.isArray(p.h1) || !Array.isArray(p.images)) return null;
    try { if (!["http:", "https:"].includes(new URL(p.finalUrl).protocol)) return null; } catch { return null; }
    const prod = p.product && typeof p.product === "object" && !Array.isArray(p.product) ? p.product as Record<string, unknown> : null;
    const nullable = (v: unknown, n = 300) => typeof v === "string" ? v.slice(0, n) : null;
    out.push({ok:true,url:str(p.url,2000),finalUrl:str(p.finalUrl,2000),lang:p.lang==="ar"?"ar":"en",title:str(p.title,300),description:str(p.description,500),text:str(p.text,900),h1:p.h1.filter((x):x is string=>typeof x==="string").slice(0,3).map(x=>x.slice(0,200)),schemaTypes:[],images:p.images.filter(x=>x && typeof x==="object" && typeof x.src==="string").slice(0,12).map(x=>({src:str(x.src,500),alt:nullable(x.alt,200)})),product:prod&&typeof prod.name==="string"?{name:str(prod.name,200),price:nullable(prod.price),currency:nullable(prod.currency),image:nullable(prod.image,500),sku:nullable(prod.sku),brand:nullable(prod.brand),availability:nullable(prod.availability),description:nullable(prod.description)}:null});
  }
  return out;
}

export const Route = createFileRoute("/api/seo-suite")({
  server: {
    handlers: {
      POST: async ({ request }: { request: Request }) => {
        const ip = (request.headers.get("x-forwarded-for") ?? "unknown").split(",")[0].trim();
        if (limited(ipHits, ip, 120, 60_000)) return json({ ok: false, error: "rate_limited" }, 429);
        let b: { action?: unknown; key?: unknown; url?: unknown; pages?: unknown; urls?: unknown };
        try { const raw = await request.text(); if (raw.length > 120_000) return json({ ok: false, error: "bad_request" }, 400); const p = JSON.parse(raw); if (!p || typeof p !== "object" || Array.isArray(p)) return json({ ok: false, error: "bad_request" }, 400); b = p; } catch { return json({ ok: false, error: "bad_request" }, 400); }
        const key = typeof b.key === "string" ? b.key.trim() : "";
        if (!key) return json({ ok: false, error: "license_required" }, 401);
        if (limited(keyHits, await sha(key), 220, 600_000)) return json({ ok: false, error: "rate_limited" }, 429);
        const v = await verifyLicense(key);
        if (v === "not_configured") return json({ ok: false, error: "not_configured" }, 503);
        if (v === "unavailable") return json({ ok: false, error: "license_unavailable" }, 503);
        if (v !== "valid") return json({ ok: false, error: v === "refunded" ? "license_refunded" : "license_invalid" }, 401);
        const url = typeof b.url === "string" ? b.url : "";
        const s = await import("@/lib/seo-audit.server");
        const st = (r: { ok: boolean; error?: string }) => (r.ok ? 200 : r.error === "invalid_url" ? 400 : 422);
        switch (b.action) {
          case "verify": return json({ ok: true });
          case "discover": { const r = await s.discoverUrls(url, 25); return json(r, st(r)); }
          case "page": { const r = await s.runAudit(url); return json(r, st(r)); }
          case "extract": { const r = await s.extractPage(url); return json(r, st(r)); }
          case "fixes": {
            if (!Array.isArray(b.pages) || b.pages.length < 1 || b.pages.length > 4) return json({ ok: false, error: "bad_request" }, 400);
            const t = await import("@/lib/seo-suite.server");
            const facts = safeFacts(b.pages);
            if (!facts) return json({ ok: false, error: "bad_request" }, 400);
            for (const f of facts) if (!f || typeof f.finalUrl !== "string" || typeof f.title !== "string" || !Array.isArray(f.images) || !Array.isArray(f.h1)) return json({ ok: false, error: "bad_request" }, 400);
            let fixes = facts.map((f) => t.templateFix(f));
            let ai = false;
            if (!limited(aiKeyHits, await sha(key), 8, 600_000)) {
              const out = await callGemini(t.aiPrompt(facts, fixes));
              if (out) { fixes = t.mergeAi(fixes, facts, out as never[]); ai = true; }
            }
            return json({ ok: true, ai, fixes });
          }
          case "images": {
            if (!Array.isArray(b.urls) || b.urls.length < 1 || b.urls.length > 24 || b.urls.some((x) => typeof x !== "string")) return json({ ok: false, error: "bad_request" }, 400);
            return json({ ok: true, images: await s.imageWeights(b.urls as string[]) });
          }
          case "keywords": {
            if (!Array.isArray(b.pages) || b.pages.length < 1 || b.pages.length > 4) return json({ ok: false, error: "bad_request" }, 400);
            const t = await import("@/lib/seo-suite.server");
            const facts = safeFacts(b.pages);
            if (!facts) return json({ ok: false, error: "bad_request" }, 400);
            for (const f of facts) if (!f || typeof f.finalUrl !== "string" || typeof f.title !== "string" || typeof f.text !== "string" || !Array.isArray(f.h1)) return json({ ok: false, error: "bad_request" }, 400);
            if (limited(aiKeyHits, await sha(key), 8, 600_000)) return json({ ok: true, ai: false, keywords: facts.map(() => null) });
            const out = await callGemini(t.kwPrompt(facts));
            return json({ ok: true, ai: !!out, keywords: out ? t.mergeKw(facts, out as never[]) : facts.map(() => null) });
          }
          default: return json({ ok: false, error: "bad_request" }, 400);
        }
      },
    },
  },
});
