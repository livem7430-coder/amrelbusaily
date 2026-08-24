import { createFileRoute, Link } from "@tanstack/react-router";
import { blogPosts } from "@/lib/blog-posts";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "مدونة عمرو البصيلي — SEO والتسويق الرقمي وAI Growth" },
      {
        name: "description",
        content:
          "مقالات عملية من عمرو البصيلي عن SEO، التسويق بالمحتوى، AI SEO، AEO/GEO، سيو المتاجر الإلكترونية ونمو المبيعات.",
      },
      { property: "og:title", content: "مدونة عمرو البصيلي — SEO والتسويق الرقمي وAI Growth" },
      { property: "og:description", content: "أدلة عملية بالعربي والإنجليزي عن SEO والتسويق الرقمي والذكاء الاصطناعي ونمو المتاجر." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://amrelbusaily.vercel.app/blog" },
      { property: "og:locale", content: "ar_EG" },
    ],
    links: [{ rel: "canonical", href: "https://amrelbusaily.vercel.app/blog" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "مدونة عمرو البصيلي",
          url: "https://amrelbusaily.vercel.app/blog",
          inLanguage: "ar",
          author: { "@type": "Person", name: "Amr Elbusaily" },
        }),
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <div className="min-h-screen" dir="rtl" lang="ar">
      <header className="sticky top-0 z-40 border-b border-border/60 backdrop-blur-md bg-background/70">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2 font-display font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground font-mono text-sm">
              AE
            </span>
            <span>Amr Elbusaily</span>
          </Link>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link to="/ar" className="hover:text-foreground">النسخة العربية</Link>
            <Link to="/" className="hover:text-foreground">EN</Link>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="font-mono text-xs uppercase tracking-widest text-primary">المدونة</div>
        <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
          مقالات SEO والتسويق الرقمي وAI ونمو التجارة الإلكترونية بالعربي والإنجليزي
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          أدلة عملية عن السيو التقني، السيو المحلي، سيو المتاجر، استراتيجية المحتوى، AI SEO، AEO/GEO وأتمتة النمو —
          مكتوبة عشان تساعدك تجيب زيارات مؤهلة وعملاء ومبيعات.
        </p>

        <div className="mt-12 grid gap-5">
          {[...blogPosts].sort((a, b) => b.date.localeCompare(a.date)).map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              dir={p.lang === "ar" ? "rtl" : "ltr"}
              lang={p.lang}
              className="group block rounded-xl border border-border bg-surface p-6 transition hover:border-primary/50"
            >
              <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
                <span className="rounded border border-border px-2 py-0.5 uppercase text-primary">
                  {p.lang}
                </span>
                <span>
                  {p.date} · {p.readTime}
                </span>
              </div>
              <h2 className="mt-3 text-xl font-semibold group-hover:text-primary md:text-2xl">
                {p.title}
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">{p.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-4xl px-6 py-8 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Amr Elbusaily
        </div>
      </footer>
    </div>
  );
}
