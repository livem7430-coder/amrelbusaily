// Client-safe aggregation of per-page audit results into a site-wide, priority-ordered issue list.
import type { AuditResult, Check } from "./seo-audit.server";
import { describe, type Lang } from "./seo-audit-copy";

// Checks that look at the whole site (robots.txt, sitemap, protocol), not one page. Counted once.
export const SITE_LEVEL = new Set(["robots", "sitemap", "httpToHttps", "hsts", "softFourOhFour", "https", "favicon", "trustPages", "contactInfo"]);

export type Issue = {
  id: string;
  level: "high" | "medium";
  scope: "site" | "page";
  title: string;
  why: string;
  sample: string; // measured message from the first affected page
  pages: string[]; // affected URLs
  failPages: number;
  warnPages: number;
  guideline: boolean;
  priority: number;
};
export type PageRow = { url: string; ok: boolean; score: number | null; fail: number; warn: number; title: string; error?: string };

export function aggregate(lang: Lang, pages: Array<{ url: string; r: AuditResult | null; error?: string }>) {
  const okPages = pages.filter((p) => p.r) as Array<{ url: string; r: AuditResult }>;
  const by = new Map<string, { c: Check; fail: string[]; warn: string[]; pass: number }>();
  for (const p of okPages) {
    for (const c of p.r.checks) {
      if (SITE_LEVEL.has(c.id) && p !== okPages[0]) continue; // site-level: read from the first page only
      const e = by.get(c.id) ?? { c, fail: [], warn: [], pass: 0 };
      if (c.status === "fail") { if (!e.fail.length) e.c = c; e.fail.push(p.url); }
      else if (c.status === "warn") { if (!e.fail.length && !e.warn.length) e.c = c; e.warn.push(p.url); }
      else e.pass++;
      by.set(c.id, e);
    }
  }
  const issues: Issue[] = [];
  for (const [id, e] of by) {
    if (!e.fail.length && !e.warn.length) continue;
    const site = SITE_LEVEL.has(id);
    const worst: Check = e.fail.length ? { ...e.c, status: "fail" } : { ...e.c, status: "warn" };
    const d = describe(lang, worst);
    const affected = [...e.fail, ...e.warn];
    const n = site ? 3 : affected.length;
    issues.push({
      id, level: e.fail.length ? "high" : "medium", scope: site ? "site" : "page",
      title: d.t, why: d.why, sample: d.msg, pages: affected, failPages: e.fail.length, warnPages: e.warn.length,
      guideline: e.c.kind === "guideline", priority: (e.fail.length ? 3 : 1) * n + (e.fail.length ? 100 : 0),
    });
  }
  issues.sort((a, b) => b.priority - a.priority);
  const rows: PageRow[] = pages.map((p) => ({
    url: p.url, ok: !!p.r, score: p.r?.score ?? null, fail: p.r?.counts.fail ?? 0, warn: p.r?.counts.warn ?? 0, title: p.r?.facts.title ?? "", error: p.error,
  }));
  const scores = okPages.map((p) => p.r.score);
  const score = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
  return { issues, rows, score, audited: okPages.length, failed: pages.length - okPages.length, platform: okPages[0]?.r.facts.platform ?? null };
}
