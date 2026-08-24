import type { ServiceDetail, ServiceLanguage } from "@/lib/service-details";

const base = "https://amrelbusaily.vercel.app";

export function serviceDetailHead(service: ServiceDetail, lang: ServiceLanguage) {
  const data = service[lang];
  const url = `${base}/${lang === "ar" ? "ar/services" : "services"}/${service.slug}`;
  const alternate = `${base}/${lang === "ar" ? "services" : "ar/services"}/${service.slug}`;
  const serviceType = service.schemaType === "ConsultingService" ? "Service" : "ProfessionalService";
  return {
    meta: [
      { title: `${data.title} | Amr Elbusaily` },
      { name: "description", content: data.description },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { property: "og:title", content: `${data.title} | Amr Elbusaily` },
      { property: "og:description", content: data.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:locale", content: lang === "ar" ? "ar_EG" : "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: lang === "ar" ? "ar" : "en", href: url },
      { rel: "alternate", hrefLang: lang === "ar" ? "en" : "ar", href: alternate },
      { rel: "alternate", hrefLang: "x-default", href: `${base}/services/${service.slug}` },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": serviceType,
        name: data.title,
        description: data.description,
        url,
        inLanguage: lang,
        provider: { "@type": "Person", name: "Amr Elbusaily", url: base },
        areaServed: ["US", "Europe"],
        serviceType: data.title,
        subjectOf: {
          "@type": "FAQPage",
          mainEntity: data.faq.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
        },
      }),
    }],
  };
}

export function ServiceDetailPage({ service, lang }: { service: ServiceDetail; lang: ServiceLanguage }) {
  const ar = lang === "ar";
  const data = service[lang];
  const urlPrefix = ar ? "/ar/services" : "/services";
  const otherLang = ar ? "EN" : "AR";
  const otherHref = `${ar ? "/services" : "/ar/services"}/${service.slug}`;
  const related = ar
    ? [{ label: "كل الخدمات", href: "/ar/services" }, { label: "Keyword Research", href: "/ar/services/keyword-research-strategy" }, { label: "Content SEO", href: "/ar/services/content-seo-copywriting" }, { label: "International SEO", href: "/ar/services/international-multilingual-seo" }]
    : [{ label: "All services", href: "/services" }, { label: "Keyword Research", href: "/services/keyword-research-strategy" }, { label: "Content SEO", href: "/services/content-seo-copywriting" }, { label: "International SEO", href: "/services/international-multilingual-seo" }];
  return (
    <div className="min-h-screen" dir={ar ? "rtl" : "ltr"} lang={lang}>
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md"><div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"><a href={ar ? "/ar" : "/"} className="flex items-center gap-2 font-display font-semibold"><span className="grid h-8 w-8 place-items-center rounded-md bg-primary font-mono text-sm text-primary-foreground">AE</span><span>Amr Elbusaily</span></a><nav className="flex items-center gap-4 text-sm text-muted-foreground"><a href={ar ? "/ar/services" : "/services"} className="hover:text-foreground">{ar ? "كل الخدمات" : "All services"}</a><a href={ar ? "/blog/ar" : "/blog/en"} className="hover:text-foreground">{ar ? "المقالات" : "Articles"}</a><a href={otherHref} className="font-mono text-xs hover:text-foreground">{otherLang}</a></nav></div></header>
      <main>
        <section className="relative overflow-hidden border-b border-border"><div className="absolute inset-0 grid-bg" aria-hidden="true" /><div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28"><div className="max-w-4xl"><a href={urlPrefix} className="font-mono text-xs uppercase tracking-[0.2em] text-primary hover:underline">{ar ? "الخدمات" : "Services"} / {service.category[lang]}</a><h1 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">{data.title}</h1><p className="mt-6 max-w-3xl text-lg leading-9 text-muted-foreground">{data.description}</p><div className="mt-8 flex flex-wrap gap-3"><a href={`mailto:amreelbasily@gmail.com?subject=${encodeURIComponent(data.title)}`} className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground glow-primary">{ar ? "ناقش احتياجك" : "Discuss your needs"}</a><a href={ar ? "/ar/services" : "/services"} className="rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium hover:border-primary hover:text-primary">{ar ? "شاهد كل الخدمات" : "View all services"}</a></div></div></div></section>
        <section className="border-b border-border bg-surface/30"><div className="mx-auto max-w-6xl px-6 py-16"><div className="rounded-2xl border border-primary/30 bg-primary/5 p-7 md:p-10"><div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{ar ? "الإجابة المباشرة" : "The direct answer"}</div><p className="mt-4 max-w-4xl text-xl leading-9">{data.answer}</p></div></div></section>
        <section className="mx-auto max-w-6xl px-6 py-20"><div className="max-w-3xl"><div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{ar ? "ماذا تشمل الخدمة" : "What the service covers"}</div><h2 className="mt-3 text-3xl font-semibold md:text-4xl">{ar ? "ثلاثة محاور تحافظ على تركيز التنفيذ." : "Three pillars that keep the work focused."}</h2></div><div className="mt-10 grid gap-5 md:grid-cols-3">{data.pillars.map((pillar, index) => <article key={pillar.title} className="rounded-2xl border border-border bg-surface p-7"><div className="font-mono text-xs text-primary">{String(index + 1).padStart(2, "0")}</div><h3 className="mt-4 text-xl font-semibold">{pillar.title}</h3><p className="mt-3 leading-8 text-muted-foreground">{pillar.body}</p></article>)}</div></section>
        <section className="border-y border-border bg-surface/30"><div className="mx-auto max-w-6xl px-6 py-20"><div className="max-w-3xl"><div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{ar ? "حالة نجاح ودليل" : "Case study & evidence"}</div><h2 className="mt-3 text-3xl font-semibold md:text-4xl">{ar ? "أرقام نعرضها بسياقها، لا كوعود عامة." : "Numbers with context, not universal promises."}</h2><p className="mt-5 leading-8 text-muted-foreground">{ar ? "هذه الإشارة مأخوذة من النتائج أو الخبرة الموثقة المتاحة. عندما لا يكون الرقم معزولًا لهذه الخدمة وحدها، نوضح ذلك بدل نسبته بشكل غير دقيق." : "This evidence signal comes from the documented results and profile available. When a number is not isolated to this service alone, that boundary is stated instead of assigning it inaccurately."}</p></div><div className="mt-10 grid gap-5 md:grid-cols-[0.8fr_1.2fr]"><div className="rounded-2xl border border-primary/30 bg-primary/5 p-8"><div className="font-display text-5xl font-semibold text-primary">{service.evidence.metric}</div><div className="mt-4 text-xl font-semibold">{service.evidence.label[lang]}</div></div><div className="rounded-2xl border border-border bg-surface p-8"><div className="font-mono text-xs uppercase tracking-[0.16em] text-primary">{ar ? "حدود الدليل" : "Evidence boundary"}</div><p className="mt-4 leading-8 text-muted-foreground">{service.evidence.note[lang]}</p><p className="mt-5 text-sm leading-7 text-muted-foreground">{ar ? "لا تُستخدم هذه الإشارة لضمان ترتيب أو مبيعات أو عدد Leads جديد. يتم تقييم المشروع بحسب نقطة البداية والسوق والتنفيذ والفترة التي يمكن قياسها." : "This signal is not used to guarantee rankings, sales or a future lead count. Each engagement is evaluated against its starting point, market, implementation and measurable period."}</p></div></div></div></section>
        <section className="mx-auto max-w-6xl px-6 py-20"><div className="max-w-3xl"><div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{ar ? "طريقة التنفيذ" : "Delivery path"}</div><h2 className="mt-3 text-3xl font-semibold md:text-4xl">{ar ? "من التشخيص إلى خطوة قابلة للقياس." : "From diagnosis to a measurable next step."}</h2></div><div className="mt-10 grid gap-0 border-y border-border">{data.process.map((step, index) => <div key={step.title} className="grid gap-4 border-b border-border py-7 last:border-b-0 md:grid-cols-[80px_1fr_1.5fr] md:items-start md:gap-8"><div className="font-mono text-sm text-primary">{String(index + 1).padStart(2, "0")}</div><h3 className="text-xl font-semibold">{step.title}</h3><p className="leading-8 text-muted-foreground">{step.body}</p></div>)}</div></section>
        <section className="border-y border-border bg-surface/30"><div className="mx-auto max-w-6xl px-6 py-20"><div className="max-w-3xl"><div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">FAQ</div><h2 className="mt-3 text-3xl font-semibold md:text-4xl">{ar ? "أسئلة متكررة عن الخدمة" : "Questions about this service"}</h2></div><div className="mt-10 grid gap-4 md:grid-cols-3">{data.faq.map((item) => <details key={item.q} className="group rounded-xl border border-border bg-surface p-6"><summary className="cursor-pointer list-none text-lg font-semibold">{item.q}</summary><p className="mt-4 leading-8 text-muted-foreground">{item.a}</p></details>)}</div></div></section>
        <section className="border-t border-border"><div className="mx-auto max-w-6xl px-6 py-20"><div className="rounded-2xl border border-border bg-surface p-8 md:p-12"><h2 className="text-3xl font-semibold md:text-4xl">{ar ? "الخدمة لا تعمل وحدها." : "The service does not operate in isolation."}</h2><p className="mt-4 max-w-3xl leading-8 text-muted-foreground">{ar ? "استخدم الروابط التالية لبناء المزيج المناسب من الخدمات، أو ابدأ برسالة تشرح المشكلة والهدف والسوق." : "Use the connected pages to build the right service mix, or start with a message that explains the problem, goal and market."}</p><div className="mt-7 flex flex-wrap gap-4">{related.map((link) => <a key={link.href} href={link.href} className="rounded-md border border-border px-4 py-2 text-sm text-muted-foreground hover:border-primary hover:text-primary">{link.label} →</a>)}<a href={`mailto:amreelbasily@gmail.com?subject=${encodeURIComponent(data.title)}`} className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">{ar ? "ناقش احتياجك" : "Discuss your needs"}</a></div></div></div></section>
      </main>
      <footer className="border-t border-border"><div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 px-6 py-8 text-sm text-muted-foreground"><span>© {new Date().getFullYear()} Amr Elbusaily</span><span>SEO · Digital Marketing · AI Growth · E-commerce</span></div></footer>
    </div>
  );
}
