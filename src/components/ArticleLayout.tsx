import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function ArticleLayout({
  title,
  description,
  date,
  readTime,
  children,
  dir = "rtl",
  lang = "ar",
}: {
  title: string;
  description: string;
  date: string;
  readTime: string;
  children: ReactNode;
  dir?: "rtl" | "ltr";
  lang?: string;
}) {
  return (
    <div className="min-h-screen" dir={dir} lang={lang}>
      <header className="sticky top-0 z-40 border-b border-border/60 backdrop-blur-md bg-background/70">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2 font-display font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground font-mono text-sm">
              AE
            </span>
            <span>Amr Elbusaily</span>
          </Link>
          <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground">
            {lang === "ar" ? "كل المقالات" : "All articles"}
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-16">
        <div className="font-mono text-xs uppercase tracking-widest text-primary">
          {date} · {readTime}
        </div>
        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">{title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        <div className="mt-10 space-y-6 text-base leading-8 text-foreground/90 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-semibold [&_ul]:list-disc [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ul]:ps-6 [&_ol]:ps-6 [&_a]:text-primary [&_a]:underline [&_strong]:text-foreground">
          {children}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-surface p-8">
          <div className="font-mono text-xs uppercase text-primary">
            {lang === "ar" ? "محتاج استشارة سيو؟" : "Need an SEO consult?"}
          </div>
          <h3 className="mt-3 text-2xl font-semibold">
            {lang === "ar"
              ? "خلي عمرو البصيلي يراجع موقعك"
              : "Have Amr Elbusaily audit your site"}
          </h3>
          <a
            href="mailto:amreelbasily@gmail.com"
            className="mt-5 inline-block rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
          >
            {lang === "ar" ? "تواصل الآن" : "Get in touch"}
          </a>
        </div>
      </article>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-4xl px-6 py-8 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Amr Elbusaily
        </div>
      </footer>
    </div>
  );
}

export function articleHead({
  title,
  description,
  slug,
  lang = "ar",
  datePublished,
  altSlug,
  faq,
}: {
  title: string;
  description: string;
  slug: string;
  lang?: string;
  datePublished: string;
  altSlug?: string;
  faq?: { q: string; a: string }[];
}) {
  const base = "https://amrelbusaily.lovable.app";
  const url = `${base}/blog/${slug}`;
  const links: { rel: string; href: string; hrefLang?: string }[] = [
    { rel: "canonical", href: url },
  ];
  if (altSlug) {
    const altLang = lang === "ar" ? "en" : "ar";
    links.push(
      { rel: "alternate", hrefLang: lang, href: url },
      { rel: "alternate", hrefLang: altLang, href: `${base}/blog/${altSlug}` },
      { rel: "alternate", hrefLang: "x-default", href: `${base}/blog/${altSlug}` },
    );
  }
  const scripts = [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        inLanguage: lang,
        datePublished,
        dateModified: datePublished,
        author: {
          "@type": "Person",
          name: "Amr Elbusaily",
          url: "https://amrelbusaily.lovable.app/",
        },
        publisher: { "@type": "Person", name: "Amr Elbusaily" },
        mainEntityOfPage: url,
      }),
    },
  ];
  if (faq?.length) {
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        inLanguage: lang,
        mainEntity: faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    });
  }
  return {
    meta: [
      { title: `${title} | Amr Elbusaily` },
      { name: "description", content: description },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: url },
      { property: "og:locale", content: lang === "ar" ? "ar_EG" : "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links,
    scripts,
  };
}
