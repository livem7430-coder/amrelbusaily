import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

// Paid audit. License verification fails closed; successful verdicts are cached for two minutes in memory.
const ipHits = new Map<string, number[]>();
const keyHits = new Map<string, number[]>();
const okCache = new Map<string, number>(); // key hash -> verified-until (short, limits Gumroad calls only)

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
  const productId = process.env.GUMROAD_PRODUCT_ID;
  if (!productId) return "not_configured";
  if (!/^[A-Za-z0-9-]{8,80}$/.test(key)) return "invalid";
  const h = await sha(key);
  const until = okCache.get(h);
  if (until && until > Date.now()) return "valid";
  try {
    const res = await fetch("https://api.gumroad.com/v2/licenses/verify", {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ product_id: productId, license_key: key, increment_uses_count: "false" }),
      signal: AbortSignal.timeout(7000),
    });
    if (res.status === 404) return "invalid";
    if (!res.ok) return "unavailable";
    const j = (await res.json()) as { success?: boolean; purchase?: { refunded?: boolean; chargebacked?: boolean; disputed?: boolean; subscription_cancelled_at?: string | null } };
    if (!j.success) return "invalid";
    const p = j.purchase ?? {};
    if (p.refunded || p.chargebacked || p.disputed) return "refunded";
    okCache.set(h, Date.now() + 120_000);
    if (okCache.size > 2000) okCache.clear();
    return "valid";
  } catch {
    return "unavailable";
  }
}

export const Route = createFileRoute("/api/seo-audit-full")({
  server: {
    handlers: {
      POST: async ({ request }: { request: Request }) => {
        const json = (body: unknown, status = 200) =>
          new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" } });
        const ip = (request.headers.get("x-forwarded-for") ?? "unknown").split(",")[0].trim();
        if (limited(ipHits, ip, 90, 60_000)) return json({ ok: false, error: "rate_limited" }, 429);
        let b: { action?: unknown; key?: unknown; url?: unknown };
        try { const raw = await request.text(); if (raw.length > 10_000) return json({ ok: false, error: "bad_request" }, 400); b = JSON.parse(raw); if (!b || typeof b !== "object" || Array.isArray(b)) return json({ ok: false, error: "bad_request" }, 400); } catch { return json({ ok: false, error: "bad_request" }, 400); }
        const key = typeof b.key === "string" ? b.key.trim() : "";
        if (!key) return json({ ok: false, error: "license_required" }, 401);
        if (limited(keyHits, await sha(key), 160, 600_000)) return json({ ok: false, error: "rate_limited" }, 429);
        const v = await verifyLicense(key);
        if (v === "not_configured") return json({ ok: false, error: "not_configured" }, 503);
        if (v === "unavailable") return json({ ok: false, error: "license_unavailable" }, 503);
        if (v !== "valid") return json({ ok: false, error: v === "refunded" ? "license_refunded" : "license_invalid" }, 401);
        const action = b.action;
        const url = typeof b.url === "string" ? b.url : "";
        if (action === "verify") return json({ ok: true });
        const s = await import("@/lib/seo-audit.server");
        if (action === "discover") {
          const r = await s.discoverUrls(url, 25);
          return json(r, r.ok ? 200 : r.error === "invalid_url" ? 400 : 422);
        }
        if (action === "page") {
          const r = await s.runAudit(url);
          return json(r, r.ok ? 200 : r.error === "invalid_url" ? 400 : 422);
        }
        return json({ ok: false, error: "bad_request" }, 400);
      },
    },
  },
});
