import { Link } from "@tanstack/react-router";

type ResultsShowcaseProps = {
  lang: "ar" | "en";
};

const watermarkedImages = [
  {
    src: "/case-studies/traffic-summary-amr-elbusaily.png",
    alt: "Arabic analytics summary showing 2.09 million audience and 254 thousand visits with Amr Elbusaily watermark",
    className: "md:col-span-2",
  },
  {
    src: "/case-studies/performance-trend-amr-elbusaily.png",
    alt: "Arabic search performance chart showing 2.14 thousand clicks, 22.1 thousand impressions, 9.7 percent CTR and 8.4 average position with Amr Elbusaily watermark",
    className: "md:col-span-2",
  },
  {
    src: "/case-studies/search-console-amr-elbusaily.png",
    alt: "Arabic Search Console overview showing 202 thousand users, 1.5 million events and 389 thousand views with Amr Elbusaily watermark",
    className: "md:col-span-2",
  },
  {
    src: "/case-studies/analytics-overview-amr-elbusaily.png",
    alt: "Arabic analytics overview showing 511 thousand returning users and 518 thousand new users with Amr Elbusaily watermark",
    className: "md:col-span-2",
  },
  {
    src: "/case-studies/seo-readiness-amr-elbusaily.png",
    alt: "SEO readiness checklist and analytics card showing 142701 views and 131103 people with Amr Elbusaily watermark",
    className: "md:col-span-1 md:max-w-[390px]",
  },
];

const copy = {
  en: {
    eyebrow: "Selected results",
    title: "Numbers that make the work tangible.",
    intro:
      "A selection of performance snapshots from AI, service, SaaS, publishing and technology properties. The screenshots are presented as supplied, with the reporting period and property context kept separate rather than combined into one claim.",
    metrics: [
      { value: "2.09M", label: "Audience", detail: "+1,753% shown in the source snapshot" },
      { value: "254K", label: "Visits", detail: "+3,054% shown in the source snapshot" },
      { value: "22.1K", label: "Impressions", detail: "Search performance snapshot" },
      { value: "2.14K", label: "Clicks", detail: "Search performance snapshot" },
      { value: "9.7%", label: "CTR", detail: "Search performance snapshot" },
      { value: "8.4", label: "Average position", detail: "Search performance snapshot" },
      { value: "202K", label: "Active users", detail: "Search Console snapshot" },
      { value: "1.5M", label: "Events", detail: "Search Console snapshot" },
      { value: "142,701", label: "Views", detail: "Last 30 days shown in source" },
      { value: "131,103", label: "People", detail: "Last 30 days shown in source" },
    ],
    proofTitle: "What the snapshots show",
    proof: [
      "Search visibility can compound when technical readiness, content and discoverability work together.",
      "A strong result is not only a large number; it is a measurable movement in demand, engagement or qualified reach.",
      "Each case should be read with its own property, reporting window and analytics platform—not as a universal promise.",
    ],
    cta: "Discuss a growth plan",
    note: "Figures are transcribed from the supplied screenshots. Reporting windows and properties differ; no client or site name is inferred where it is not visible.",
  },
  ar: {
    eyebrow: "نتائج مختارة",
    title: "أرقام تجعل الشغل واضحًا وقابلًا للفهم.",
    intro:
      "مجموعة من لقطات الأداء لمواقع في الذكاء الاصطناعي والخدمات وSaaS والنشر والتكنولوجيا. تم عرض اللقطات كما وصلت، مع فصل كل فترة وكل موقع بدل دمج الأرقام في ادعاء واحد.",
    metrics: [
      { value: "2.09M", label: "عدد الجمهور", detail: "زيادة ظاهرة في اللقطة: 1,753%" },
      { value: "254K", label: "الزيارات", detail: "زيادة ظاهرة في اللقطة: 3,054%" },
      { value: "22.1K", label: "مرات الظهور", detail: "لقطة أداء البحث" },
      { value: "2.14K", label: "النقرات", detail: "لقطة أداء البحث" },
      { value: "9.7%", label: "نسبة النقر إلى الظهور", detail: "لقطة أداء البحث" },
      { value: "8.4", label: "متوسط الموضع", detail: "لقطة أداء البحث" },
      { value: "202K", label: "المستخدمون النشطون", detail: "لقطة Search Console" },
      { value: "1.5M", label: "الأحداث", detail: "لقطة Search Console" },
      { value: "142,701", label: "المشاهدات", detail: "آخر 30 يومًا كما تظهر في اللقطة" },
      { value: "131,103", label: "الأشخاص", detail: "آخر 30 يومًا كما تظهر في اللقطة" },
    ],
    proofTitle: "ماذا توضح اللقطات؟",
    proof: [
      "الظهور في البحث يمكن أن يتراكم عندما تعمل الجاهزية التقنية والمحتوى وقابلية الاكتشاف معًا.",
      "النتيجة القوية ليست رقمًا كبيرًا فقط؛ بل حركة قابلة للقياس في الطلب أو التفاعل أو الوصول المؤهل.",
      "كل دراسة تُقرأ مع موقعها وفترتها ومنصة التحليلات الخاصة بها، وليست وعدًا عامًا لكل مشروع.",
    ],
    cta: "ناقش خطة نمو",
    note: "تم نسخ الأرقام من لقطات الشاشة التي أرسلتها. الفترات والمواقع مختلفة، ولم يتم استنتاج اسم أي عميل أو موقع غير ظاهر في اللقطات.",
  },
} as const;

export function ResultsShowcase({ lang }: ResultsShowcaseProps) {
  const t = copy[lang];
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <section id="results" dir={dir} className="border-t border-border bg-surface/20">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{t.eyebrow}</div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">{t.title}</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">{t.intro}</p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {t.metrics.map((metric) => (
            <div key={`${metric.label}-${metric.value}`} className="rounded-xl border border-border bg-surface p-5 transition hover:-translate-y-0.5 hover:border-primary/50">
              <div className="text-3xl font-semibold tracking-tight text-primary md:text-4xl">{metric.value}</div>
              <div className="mt-3 text-sm font-medium text-foreground">{metric.label}</div>
              <div className="mt-1 text-xs leading-5 text-muted-foreground">{metric.detail}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="rounded-2xl border border-primary/25 bg-primary/[0.04] p-7">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{t.proofTitle}</div>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground">
              {t.proof.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to={lang === "ar" ? "/ar/growth-marketing" : "/growth-marketing"} className="mt-7 inline-flex rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110">
              {t.cta}
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {watermarkedImages.map((image) => (
              <figure key={image.src} className={`overflow-hidden rounded-xl border border-border bg-surface ${image.className}`}>
                <img src={image.src} alt={image.alt} loading="lazy" className="h-auto w-full object-cover" />
              </figure>
            ))}
          </div>
        </div>

        <p className="mt-8 max-w-4xl text-xs leading-6 text-muted-foreground">{t.note}</p>
      </div>
    </section>
  );
}
