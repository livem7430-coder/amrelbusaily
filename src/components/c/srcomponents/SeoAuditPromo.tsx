import { ArrowRight, Check, Search } from "lucide-react";

const copy = {
  en: {
    dir: "ltr", href: "/seo-audit", eyebrow: "FREE TOOL FOR STORE OWNERS",
    title: "Free store SEO audit",
    text: "Paste your store link and get a technical SEO report on your live page in seconds: indexing signals, titles and headings, links, page-experience basics, product markup and trust signals. Arabic stores get the report in Arabic.",
    chips: ["Indexing signals", "On-page tags", "Links", "Page-experience basics", "Product markup", "Trust signals"],
    cta: "Audit my store", note: "No signup. The report is not saved.",
    placeholder: "yourstore.com", rows: ["Indexing and crawling", "Titles, headings, content", "Links and structure", "Structured data"],
  },
  ar: {
    dir: "rtl", href: "/ar/seo-audit", eyebrow: "أداة مجانية لأصحاب المتاجر",
    title: "فحص سيو مجاني لمتجرك",
    text: "الصق رابط متجرك واحصل خلال ثوانٍ على تقرير سيو تقني لصفحتك الحية: إشارات الأرشفة والعناوين والوسوم والروابط وأساسيات تجربة الصفحة وترميز المنتج وإشارات الثقة. المتاجر العربية تحصل على التقرير بالعربية.",
    chips: ["إشارات الأرشفة", "وسوم الصفحة", "الروابط", "أساسيات تجربة الصفحة", "ترميز المنتج", "إشارات الثقة"],
    cta: "افحص متجرك الآن", note: "بدون تسجيل. التقرير لا يُحفظ.",
    placeholder: "yourstore.com", rows: ["الأرشفة والزحف", "العناوين والمحتوى", "الروابط والبنية", "البيانات المنظمة"],
  },
};

export function SeoAuditPromo({ lang }: { lang: "en" | "ar" }) {
  const c = copy[lang];
  return (
    <section id="seo-audit-tool" aria-labelledby="seo-audit-heading" dir={c.dir} className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-surface">
          <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />
          <div className="relative grid items-center gap-10 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-14">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{c.eyebrow}</p>
              <h2 id="seo-audit-heading" className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">{c.title}</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">{c.text}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {c.chips.map((t) => (
                  <li key={t} className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground">{t}</li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href={c.href} className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-primary hover:opacity-90">
                  {c.cta}
                  <ArrowRight className={`h-4 w-4 ${lang === "ar" ? "rotate-180" : ""}`} aria-hidden="true" />
                </a>
                <span className="text-sm text-muted-foreground">{c.note}</span>
              </div>
            </div>
            <a href={c.href} aria-label={c.cta} className="group block" tabIndex={-1}>
              <div className="rounded-2xl border border-border bg-background/70 p-4 shadow-lg backdrop-blur transition group-hover:border-primary/60">
                <div className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3" dir="ltr">
                  <Search className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                  <span className="text-sm text-muted-foreground">{c.placeholder}</span>
                </div>
                <ul className="mt-4 space-y-3">
                  {c.rows.map((r, i) => (
                    <li key={r} className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/15 text-primary"><Check className="h-3.5 w-3.5" aria-hidden="true" /></span>
                      <span className="text-sm">{r}</span>
                      <span className="ms-auto h-1.5 rounded-full bg-primary/30" style={{ width: `${56 - i * 9}px` }} aria-hidden="true" />
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
    }
