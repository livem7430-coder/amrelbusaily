import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { blogPosts } from "@/lib/blog-posts";
import { BLOG_CATEGORIES, getBlogCategory, getBlogCategoryLabel, type BlogCategoryId } from "@/lib/blog-taxonomy";
import { ARTICLE_ROADMAP_SIZE } from "@/lib/article-roadmap";

type BlogLanguage = "ar" | "en";

const base = "https://amrelbusaily.vercel.app";
const publishedPosts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));

const copy = {
  ar: {
    direction: "rtl",
    home: "الرئيسية",
    switchLabel: "English",
    switchHref: "/blog/en",
    course: "كورس SEO",
    title: "مقالات SEO بالعربي",
    eyebrow: "Arabic content hub · SEO / AI / Growth",
    description: "أدلة عربية عملية عن السيو التقني والمحلي، المتاجر، المحتوى، AI SEO، AEO/GEO، Growth Marketing ونمو الأعمال — مرتبة حسب الموضوع والنية.",
    courseCta: "ابدأ كورس SEO",
    auditCta: "اطلب أوديت للموقع",
    searchEyebrow: "ابحث في المقالات العربية",
    placeholder: "مثال: سيو تقني أو متاجر إلكترونية أو GEO",
    all: "كل المقالات",
    results: (shown: number, total: number) => `عرض ${shown} من ${total} مقالًا عربيًا`,
    roadmap: "شوف خريطة الـ500 موضوع ←",
    empty: "مفيش مقال عربي مطابق. جرّب كلمة أوسع أو تصنيفًا مختلفًا.",
    read: "اقرأ الدليل ←",
    roadmapEyebrow: "توسع منظم",
    roadmapTitle: "خريطة الكلمات والمقالات",
    roadmapText: "500 موضوعًا مخططًا بعناقيد ونوايا وأسواق، مع نشر تدريجي للمقالات المكتملة فقط.",
    roadmapCta: "افتح الخريطة",
    auditEyebrow: "جاهز للتنفيذ",
    auditTitle: "SEO Audit واستراتيجية",
    auditText: "حوّل القراءة إلى خطة مرتبة حسب الأولوية لموقعك أو متجرك أو منتجك الرقمي.",
    auditLink: "اطلب مراجعة",
    countLabel: "مقال عربي منشور الآن",
    languageLabel: "لغة المحتوى",
  },
  en: {
    direction: "ltr",
    home: "Home",
    switchLabel: "العربية",
    switchHref: "/blog/ar",
    course: "SEO Course",
    title: "SEO articles in English",
    eyebrow: "English content hub · SEO / AI / Growth",
    description: "Practical English guides on technical and local SEO, e-commerce, content, AI SEO, AEO/GEO, Growth Marketing and business growth — organized by topic and search intent.",
    courseCta: "Start the SEO Course",
    auditCta: "Request an SEO audit",
    searchEyebrow: "Search English articles",
    placeholder: "Example: technical SEO, e-commerce or GEO",
    all: "All articles",
    results: (shown: number, total: number) => `Showing ${shown} of ${total} English articles`,
    roadmap: "View the 500-topic roadmap →",
    empty: "No English article matches that search. Try a broader term or another topic.",
    read: "Read the guide →",
    roadmapEyebrow: "Structured expansion",
    roadmapTitle: "Keyword and content roadmap",
    roadmapText: "500 planned topics organized by clusters, intent and markets, with completed articles published in stages.",
    roadmapCta: "Open the roadmap",
    auditEyebrow: "Ready to act",
    auditTitle: "SEO audit and strategy",
    auditText: "Turn reading into a prioritized plan for your website, store or digital product.",
    auditLink: "Request a review",
    countLabel: "English articles live now",
    languageLabel: "Content language",
  },
} as const;

export function BlogLanguageHub({ lang }: { lang: BlogLanguage }) {
  const t = copy[lang];
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<BlogCategoryId>("all");
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const languagePosts = useMemo(() => publishedPosts.filter((post) => post.lang === lang), [lang]);
  const filteredPosts = useMemo(
    () => languagePosts.filter((post) => {
      const matchesCategory = category === "all" || getBlogCategory(post) === category;
      const matchesQuery = !normalizedQuery || `${post.title} ${post.description} ${post.slug}`.toLocaleLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    }),
    [category, languagePosts, normalizedQuery],
  );
  const featured = filteredPosts.slice(0, 3);
  const remaining = filteredPosts.slice(3);

  return (
    <div className="min-h-screen" dir={t.direction} lang={lang}>
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <Link to={lang === "ar" ? "/ar" : "/"} className="flex items-center gap-2 font-display font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground font-mono text-sm">AE</span>
            <span>Amr Elbusaily</span>
          </Link>
          <nav className="flex items-center gap-4 text-sm text-muted-foreground" aria-label={lang === "ar" ? "التنقل الرئيسي" : "Primary navigation"}>
            <Link to={lang === "ar" ? "/ar" : "/"} className="hover:text-foreground">{t.home}</Link>
            <Link to={lang === "ar" ? "/ar/course" : "/course"} className="hover:text-foreground">{t.course}</Link>
            <Link to={t.switchHref} className="hover:text-foreground">{t.switchLabel}</Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 grid-bg" aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
            <div className="max-w-3xl">
              <div className="font-mono text-xs uppercase tracking-[0.22em] text-primary">{t.eyebrow}</div>
              <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">{t.title}</h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">{t.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to={lang === "ar" ? "/ar/course" : "/course"} className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90">{t.courseCta}</Link>
                <Link to={lang === "ar" ? "/ar/free-consultation" : "/free-consultation"} className="rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium transition hover:border-primary hover:text-primary">{t.auditCta}</Link>
              </div>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <Stat value={`${languagePosts.length}`} label={t.countLabel} />
              <Stat value={`${ARTICLE_ROADMAP_SIZE}`} label={lang === "ar" ? "موضوع في خريطة التوسع" : "topics in the roadmap"} />
              <Stat value={lang === "ar" ? "عربي" : "English"} label={t.languageLabel} />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-12" aria-label={lang === "ar" ? "البحث والتصفية" : "Search and filters"}>
          <div className="rounded-2xl border border-border bg-surface/50 p-5 md:p-6">
            <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
              <label className="block">
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-primary">{t.searchEyebrow}</span>
                <input value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder={t.placeholder} className="mt-3 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20" aria-label={t.searchEyebrow} />
              </label>
              <span className="rounded-lg border border-primary/30 bg-primary/10 px-3 py-2 text-xs font-mono text-primary">{lang.toUpperCase()}</span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label={lang === "ar" ? "تصنيفات المحتوى" : "Content categories"}>
              {BLOG_CATEGORIES.map((item) => (
                <button key={item.id} type="button" onClick={() => setCategory(item.id)} className={`rounded-full border px-3 py-2 text-xs transition ${category === item.id ? "border-primary bg-primary/15 text-primary" : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"}`} aria-pressed={category === item.id}>
                  {item.id === "all" ? t.all : (lang === "ar" ? item.labelAr : item.labelEn)}
                </button>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground" aria-live="polite">
              <span>{t.results(filteredPosts.length, languagePosts.length)}</span>
              <Link to="/blog/content-plan" className="font-medium text-primary hover:underline">{t.roadmap}</Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          {featured.length > 0 && <div className="grid gap-5 md:grid-cols-3">{featured.map((post, index) => <BlogCard key={post.slug} post={post} featured={index === 0} lang={lang} readLabel={t.read} />)}</div>}
          {remaining.length > 0 && <div className="mt-5 grid gap-5 md:grid-cols-2">{remaining.map((post) => <BlogCard key={post.slug} post={post} lang={lang} readLabel={t.read} />)}</div>}
          {filteredPosts.length === 0 && <div className="rounded-2xl border border-dashed border-border p-10 text-center text-muted-foreground">{t.empty}</div>}
        </section>

        <section className="border-t border-border bg-surface/30">
          <div className="mx-auto grid max-w-6xl gap-5 px-6 py-16 md:grid-cols-2">
            <PathCard eyebrow={t.roadmapEyebrow} title={t.roadmapTitle} text={t.roadmapText} href="/blog/content-plan" cta={t.roadmapCta} />
            <PathCard eyebrow={t.auditEyebrow} title={t.auditTitle} text={t.auditText} href={lang === "ar" ? "/ar/free-consultation" : "/free-consultation"} cta={t.auditLink} />
          </div>
        </section>
      </main>
      <footer className="border-t border-border"><div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 px-6 py-8 text-sm text-muted-foreground"><span>© {new Date().getFullYear()} Amr Elbusaily</span><span>SEO · Digital Marketing · AI Growth · E-commerce</span></div></footer>
    </div>
  );
}

function BlogCard({ post, featured = false, lang, readLabel }: { post: (typeof blogPosts)[number]; featured?: boolean; lang: BlogLanguage; readLabel: string }) {
  return <Link to="/blog/$slug" params={{ slug: post.slug }} dir={post.lang === "ar" ? "rtl" : "ltr"} lang={post.lang} className={`group block rounded-2xl border border-border bg-surface p-6 transition hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-[0_12px_40px_rgba(94,242,135,0.08)] ${featured ? "md:col-span-2 md:p-8" : ""}`}>
    <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-muted-foreground"><span className="rounded border border-primary/40 bg-primary/10 px-2 py-0.5 uppercase text-primary">{lang}</span><span className="rounded border border-border px-2 py-0.5">{getBlogCategoryLabel(post, lang)}</span><span>{post.date} · {post.readTime}</span></div>
    <h2 className={`mt-4 font-semibold leading-tight group-hover:text-primary ${featured ? "text-2xl md:text-3xl" : "text-xl"}`}>{post.title}</h2>
    <p className="mt-3 text-sm leading-7 text-muted-foreground">{post.description}</p>
    <span className="mt-5 inline-block text-sm font-medium text-primary">{readLabel}</span>
  </Link>;
}

function PathCard({ eyebrow, title, text, href, cta }: { eyebrow: string; title: string; text: string; href: string; cta: string }) {
  return <div className="rounded-2xl border border-border bg-surface p-6"><div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{eyebrow}</div><h2 className="mt-3 text-2xl font-semibold">{title}</h2><p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p><a href={href} className="mt-5 inline-block text-sm font-medium text-primary hover:underline">{cta} →</a></div>;
}

function Stat({ value, label }: { value: string; label: string }) {
  return <div className="rounded-xl border border-border bg-surface/70 p-5"><div className="font-mono text-2xl text-primary">{value}</div><div className="mt-2 text-sm text-muted-foreground">{label}</div></div>;
}

export function blogLanguageHead(lang: BlogLanguage) {
  const isArabic = lang === "ar";
  const path = isArabic ? "/blog/ar" : "/blog/en";
  return {
    meta: [
      { title: isArabic ? "مقالات SEO بالعربي | عمرو البصيلي" : "SEO Articles in English | Amr Elbusaily" },
      { name: "description", content: isArabic ? copy.ar.description : copy.en.description },
      { name: "author", content: "Amr Elbusaily (عمرو البصيلي)" },
      { property: "og:title", content: isArabic ? "مقالات SEO بالعربي | عمرو البصيلي" : "SEO Articles in English | Amr Elbusaily" },
      { property: "og:description", content: isArabic ? copy.ar.description : copy.en.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${base}${path}` },
      { property: "og:locale", content: isArabic ? "ar_EG" : "en_US" },
    ],
    links: [
      { rel: "canonical", href: `${base}${path}` },
      { rel: "alternate", hrefLang: "ar", href: `${base}/blog/ar` },
      { rel: "alternate", hrefLang: "en", href: `${base}/blog/en` },
      { rel: "alternate", hrefLang: "x-default", href: `${base}/blog/en` },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Blog",
        "@id": `${base}${path}#blog`,
        name: isArabic ? "مدونة SEO بالعربي — عمرو البصيلي" : "SEO Blog — Amr Elbusaily",
        url: `${base}${path}`,
        inLanguage: lang,
        author: { "@type": "Person", "@id": `${base}/#person`, name: "Amr Elbusaily", alternateName: "عمرو البصيلي", url: `${base}/` },
      }) },
      { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: isArabic ? "الرئيسية" : "Home", item: `${base}${isArabic ? "/ar" : "/"}` },
          { "@type": "ListItem", position: 2, name: isArabic ? "المدونة" : "Blog", item: `${base}${path}` },
        ],
      }) },
    ],
  };
}
