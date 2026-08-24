import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { blogPosts } from "@/lib/blog-posts";
import { BLOG_CATEGORIES, getBlogCategory, getBlogCategoryLabel, type BlogCategoryId } from "@/lib/blog-taxonomy";
import { ARTICLE_ROADMAP_SIZE } from "@/lib/article-roadmap";

const base = "https://amrelbusaily.vercel.app";
const sortedPosts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));

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
      { property: "og:url", content: `${base}/blog` },
      { property: "og:locale", content: "ar_EG" },
    ],
    links: [
      { rel: "canonical", href: `${base}/blog` },
      { rel: "alternate", hrefLang: "ar", href: `${base}/blog` },
      { rel: "alternate", hrefLang: "en", href: `${base}/blog` },
      { rel: "alternate", hrefLang: "x-default", href: `${base}/blog` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "مدونة عمرو البصيلي",
          url: `${base}/blog`,
          inLanguage: ["ar", "en"],
          author: { "@type": "Person", name: "Amr Elbusaily", url: `${base}/` },
        }),
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<BlogCategoryId>("all");
  const [language, setLanguage] = useState<"all" | "ar" | "en">("all");
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const filteredPosts = useMemo(
    () => sortedPosts.filter((post) => {
      const matchesCategory = category === "all" || getBlogCategory(post) === category;
      const matchesLanguage = language === "all" || post.lang === language;
      const matchesQuery = !normalizedQuery || `${post.title} ${post.description} ${post.slug}`.toLocaleLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesLanguage && matchesQuery;
    }),
    [category, language, normalizedQuery],
  );
  const featured = filteredPosts.slice(0, 3);
  const remaining = filteredPosts.slice(3);

  return (
    <div className="min-h-screen" dir="rtl" lang="ar">
      <header className="sticky top-0 z-40 border-b border-border/60 backdrop-blur-md bg-background/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2 font-display font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground font-mono text-sm">AE</span>
            <span>Amr Elbusaily</span>
          </Link>
          <nav className="flex items-center gap-4 text-sm text-muted-foreground" aria-label="التنقل الرئيسي">
            <Link to="/ar" className="hover:text-foreground">النسخة العربية</Link>
            <Link to="/course" className="hover:text-foreground">SEO Course</Link>
            <Link to="/" className="hover:text-foreground">EN</Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 grid-bg" aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-24">
            <div className="max-w-3xl">
              <div className="font-mono text-xs uppercase tracking-[0.22em] text-primary">Content hub · SEO / AI / Growth</div>
              <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">مقالات SEO والتسويق الرقمي وAI ونمو التجارة الإلكترونية.</h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">أدلة عملية بالعربي والإنجليزي عن السيو التقني والمحلي، سيو المتاجر، استراتيجية المحتوى، AI SEO، AEO/GEO وأتمتة النمو — مرتبة حسب نية البحث عشان توصل للمعلومة أو الخطوة المناسبة أسرع.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/course" className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground glow-primary transition hover:opacity-90">ابدأ كورس SEO</Link>
                <Link to="/free-consultation" className="rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium transition hover:border-primary hover:text-primary">اطلب أوديت للموقع</Link>
              </div>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <Stat value={`${blogPosts.length}+`} label="مقال منشور الآن" />
              <Stat value={`${ARTICLE_ROADMAP_SIZE}`} label="موضوعًا في خريطة التوسع" />
              <Stat value="AR / EN" label="لغات المحتوى" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-12" aria-label="البحث والتصفية">
          <div className="rounded-2xl border border-border bg-surface/50 p-5 md:p-6">
            <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
              <label className="block">
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-primary">ابحث داخل المحتوى</span>
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  type="search"
                  placeholder="مثال: Technical SEO أو سيو المتاجر"
                  className="mt-3 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                  aria-label="البحث في مقالات المدونة"
                />
              </label>
              <div className="flex rounded-lg border border-border p-1" role="group" aria-label="لغة المقالات">
                {(["all", "ar", "en"] as const).map((option) => (
                  <button key={option} type="button" onClick={() => setLanguage(option)} className={`rounded-md px-3 py-2 text-xs font-mono transition ${language === option ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`} aria-pressed={language === option}>
                    {option === "all" ? "الكل" : option.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="تصنيفات المحتوى">
              {BLOG_CATEGORIES.map((item) => (
                <button key={item.id} type="button" onClick={() => setCategory(item.id)} className={`rounded-full border px-3 py-2 text-xs transition ${category === item.id ? "border-primary bg-primary/15 text-primary" : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"}`} aria-pressed={category === item.id}>
                  {item.labelAr}
                </button>
              ))}
            </div>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground" aria-live="polite"><span>عرض {filteredPosts.length} من {blogPosts.length} مقالًا</span><Link to="/blog/content-plan" className="font-medium text-primary hover:underline">شوف خريطة الـ500 موضوع ←</Link></div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          {featured.length > 0 && (
            <div className="grid gap-5 md:grid-cols-3">
              {featured.map((post, index) => <BlogCard key={post.slug} post={post} featured={index === 0} />)}
            </div>
          )}
          {remaining.length > 0 && (
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {remaining.map((post) => <BlogCard key={post.slug} post={post} />)}
            </div>
          )}
          {filteredPosts.length === 0 && (
            <div className="rounded-2xl border border-dashed border-border p-10 text-center text-muted-foreground">مفيش مقال مطابق للبحث الحالي. جرّب كلمة أوسع أو اختار تصنيفًا مختلفًا.</div>
          )}
        </section>

        <section className="border-t border-border bg-surface/30">
          <div className="mx-auto grid max-w-6xl gap-5 px-6 py-16 md:grid-cols-3">
            <PathCard eyebrow="تعلم منظم" title="SEO Course" text="منهج ثنائي اللغة من الأساسيات حتى التنفيذ الاحترافي، في خريطة قابلة للتوسع إلى 500 درس." href="/course" cta="افتح الكورس" />
            <PathCard eyebrow="قرار أفضل" title="SEO Audit" text="لو محتاج تعرف أولويات موقعك بدل قراءة نصائح عامة، ابدأ بتدقيق تقني ومحتوى قابل للتنفيذ." href="/free-consultation" cta="اطلب مراجعة" />
            <PathCard eyebrow="نمو محلي" title="Egypt & Gulf SEO" text="محتوى عن مصر والسعودية والخليج مع توضيح النية والسوق بدون صفحات جغرافية مكررة." href="/blog" cta="استكشف العناقيد" />
          </div>
        </section>
      </main>

      <footer className="border-t border-border"><div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 px-6 py-8 text-sm text-muted-foreground"><span>© {new Date().getFullYear()} Amr Elbusaily</span><span>SEO · Digital Marketing · AI Growth · E-commerce</span></div></footer>
    </div>
  );
}

function BlogCard({ post, featured = false }: { post: (typeof blogPosts)[number]; featured?: boolean }) {
  return (
    <Link to="/blog/$slug" params={{ slug: post.slug }} dir={post.lang === "ar" ? "rtl" : "ltr"} lang={post.lang} className={`group block rounded-2xl border border-border bg-surface p-6 transition hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-[0_12px_40px_rgba(94,242,135,0.08)] ${featured ? "md:col-span-2 md:p-8" : ""}`}>
      <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-muted-foreground">
        <span className="rounded border border-primary/40 bg-primary/10 px-2 py-0.5 uppercase text-primary">{post.lang}</span>
        <span className="rounded border border-border px-2 py-0.5">{getBlogCategoryLabel(post, post.lang)}</span>
        <span>{post.date} · {post.readTime}</span>
      </div>
      <h2 className={`mt-4 font-semibold leading-tight group-hover:text-primary ${featured ? "text-2xl md:text-3xl" : "text-xl"}`}>{post.title}</h2>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">{post.description}</p>
      <span className="mt-5 inline-block text-sm font-medium text-primary">اقرأ الدليل ←</span>
    </Link>
  );
}

function PathCard({ eyebrow, title, text, href, cta }: { eyebrow: string; title: string; text: string; href: string; cta: string }) {
  return <div className="rounded-2xl border border-border bg-surface p-6"><div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{eyebrow}</div><h2 className="mt-3 text-2xl font-semibold">{title}</h2><p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p><a href={href} className="mt-5 inline-block text-sm font-medium text-primary hover:underline">{cta} →</a></div>;
}

function Stat({ value, label }: { value: string; label: string }) {
  return <div className="rounded-xl border border-border bg-surface/70 p-5"><div className="font-mono text-2xl text-primary">{value}</div><div className="mt-2 text-sm text-muted-foreground">{label}</div></div>;
}
