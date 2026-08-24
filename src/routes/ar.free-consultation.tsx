import { createFileRoute, Link } from "@tanstack/react-router";
import amrPortrait from "@/assets/amr-portrait.jpg.asset.json";
import { Portrait } from "@/components/Portrait";

const url = "https://amrelbusaily.vercel.app/ar/free-consultation";
const title = "استشارة SEO مجانية — صدقة جارية على روح والدي | Amr Elbusaily";
const description =
  "خطة نمو SEO تقنية كاملة مجاناً كصدقة جارية: Technical Deep Dive، Keyword & Competitor Gap، Authority Map، وخارطة طريق 90 يوم لأصحاب مواقع E-commerce وSaaS.";

export const Route = createFileRoute("/ar/free-consultation")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { property: "og:title", content: "استشارة SEO مجانية — صدقة جارية على روح والدي" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:locale", content: "ar_EG" },
      { property: "og:image", content: `https://amrelbusaily.vercel.app${amrPortrait.url}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "استشارة SEO مجانية — Free Technical SEO Growth Plan" },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: `https://amrelbusaily.vercel.app${amrPortrait.url}` },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "ar", href: url },
      { rel: "alternate", hrefLang: "en", href: "https://amrelbusaily.vercel.app/free-consultation" },
      { rel: "alternate", hrefLang: "x-default", href: "https://amrelbusaily.vercel.app/free-consultation" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Free Technical SEO Growth Plan",
          serviceType: "Technical SEO audit & growth roadmap",
          inLanguage: "ar",
          url,
          provider: {
            "@type": "Person",
            name: "Amr Elbusaily",
            url: "https://amrelbusaily.vercel.app/",
          },
          areaServed: "Worldwide",
          audience: {
            "@type": "Audience",
            audienceType: "E-commerce & SaaS website owners with 5K+ monthly visits",
          },
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "EGP",
            availability: "https://schema.org/InStock",
            description: "استشارة وخطة نمو SEO مجانية بالكامل كصدقة جارية.",
          },
        }),
      },
    ],
  }),
  component: FreeConsultationAr,
});

const pillars = [
  {
    n: "01",
    title: "Technical Deep Dive",
    body: "Crawl Budget، Index Bloat، Core Web Vitals، وSchema Markup — فحص تقني كامل لكل اللي بيمنع جوجل إنه يزحف ويفهرس موقعك صح.",
  },
  {
    n: "02",
    title: "Keyword & Competitor Gap",
    body: "بحث كلمات مفتاحية + تحليل فجوات المحتوى مقابل أقوى 3 منافسين في السوق بتاعك.",
  },
  {
    n: "03",
    title: "Authority Map",
    body: "الروابط الداخلية، الـTopical Clusters، والصفحات اليتيمة (Orphan Pages) — خريطة كاملة لتوزيع قوة الموقع.",
  },
  {
    n: "04",
    title: "90 Day Roadmap",
    body: "أهم 10 مهام مرتبة حسب الـImpact على الزيارات والمبيعات، جاهزة للتنفيذ خطوة بخطوة.",
  },
];

function FreeConsultationAr() {
  return (
    <div className="min-h-screen" dir="rtl" lang="ar">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/ar" className="flex items-center gap-2 font-display font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-primary font-mono text-sm text-primary-foreground">
              AE
            </span>
            <span>عمرو البصيلي</span>
          </Link>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link to="/blog" className="hover:text-foreground">المدونة</Link>
            <Link to="/free-consultation" className="hover:text-foreground">English version</Link>
            <Link to="/" className="font-mono text-xs hover:text-foreground">EN</Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.4fr_1fr] md:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 font-mono text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              صدقة جارية على روح والدي · Free Technical SEO Growth Plan
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.15] md:text-5xl">
              <span className="text-gradient">استشارة SEO مجانية</span>
              <br />
              وخطة نمو تقنية كاملة
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-9 text-muted-foreground">
              والدي — الله يرحمه — كان بيحب العلم ويساعد الناس. فقررت أقدّم تحليل وخطة نمو SEO
              مجانية كاملة كصدقة جارية على روحه.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:amreelbasily@gmail.com?subject=GROWTH"
                className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground glow-primary transition hover:opacity-90"
              >
                احجز استشارتك — ابعت GROWTH
              </a>
            </div>
            <p className="mt-4 font-mono text-xs text-muted-foreground">
              ابعتلي كلمة <span className="text-primary">GROWTH</span> + رابط الموقع
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-primary/10 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-surface">
              <Portrait alt="عمرو البصيلي، خبير سيو" />
              <div className="grid grid-cols-2 divide-x divide-border border-t border-border font-mono text-xs">
                <div className="p-4">
                  <div className="text-muted-foreground">الاستشارة</div>
                  <div className="mt-1 text-foreground">مجانية 100%</div>
                </div>
                <div className="p-4">
                  <div className="text-muted-foreground">التسليم</div>
                  <div className="mt-1 text-foreground">خطة 90 يوم</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="border-t border-border bg-surface/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-widest text-primary">
              هساعدك في
            </div>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              4 محاور بتغطي موقعك من الألف للياء
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {pillars.map((p) => (
              <div
                key={p.n}
                className="rounded-xl border border-border bg-surface p-6 transition hover:border-primary/50"
              >
                <div className="font-mono text-xs text-primary">{p.n}</div>
                <h3 className="mt-3 text-lg font-semibold" dir="ltr">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOAL + AUDIENCE */}
      <section className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-8">
            <div className="font-mono text-xs uppercase tracking-widest text-primary">الهدف</div>
            <p className="mt-4 text-lg leading-9">
              تعرف بالظبط تشتغل على إيه عشان موقعك يطلع في Google — بدون تخمين ولا رغي.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-8">
            <div className="font-mono text-xs uppercase tracking-widest text-primary">
              مين اللي هيستفيد؟
            </div>
            <p className="mt-4 text-lg leading-9">
              أصحاب مواقع الـ<strong>E-commerce</strong> والـ<strong>SaaS</strong> اللي عندهم{" "}
              <strong>+5K زيارة شهرياً</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-surface/30">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="rounded-2xl border border-border bg-surface p-10 text-center md:p-14">
            <h2 className="text-3xl font-semibold md:text-4xl">احجز استشارتك المجانية دلوقتي</h2>
            <p className="mt-4 text-muted-foreground">
              ابعتلي كلمة <span className="font-mono text-primary">GROWTH</span> + رابط موقعك على
              الإيميل أو الواتساب.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:amreelbasily@gmail.com?subject=GROWTH"
                className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
              >
                amreelbasily@gmail.com
              </a>
            </div>
            <p className="mt-10 text-sm leading-8 text-muted-foreground">
              اللهم تقبل هذا العمل صدقة جارية واجعله علماً يُنتفع به.
            </p>
            <div className="mt-4 font-mono text-xs text-muted-foreground">
              #TechnicalSEO #SEO #KeywordResearch #Ecommerce #SaaS #صدقة_جارية
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Amr Elbusaily
        </div>
      </footer>
    </div>
  );
}
