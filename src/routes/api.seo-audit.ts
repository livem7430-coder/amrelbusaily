import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

// Best-effort in-memory limiter (resets per serverless instance). No data is stored.
const hits = new Map<string, number[]>();

export const Route = createFileRoute("/api/seo-audit")({
  server: {
    handlers: {
      POST: async ({ request }: { request: Request }) => {
        const json = (body: unknown, status = 200) =>
          new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" } });
        const ip = (request.headers.get("x-forwarded-for") ?? "unknown").split(",")[0].trim();
        const now = Date.now();
        const recent = (hits.get(ip) ?? []).filter((t) => now - t < 60_000);
        if (recent.length >= 6) return json({ ok: false, error: "rate_limited" }, 429);
        recent.push(now);
        hits.set(ip, recent);
        if (hits.size > 2000) hits.clear();
        let url = "";
        try {
          const b = (await request.json()) as { url?: unknown };
          url = typeof b.url === "string" ? b.url : "";
        } catch {
          return json({ ok: false, error: "invalid_url" }, 400);
        }
        const { runAudit } = await import("@/lib/seo-audit.server");
        const r = await runAudit(url);
        return json(r, r.ok ? 200 : r.error === "invalid_url" ? 400 : 422);
      },
    },
  },
});
