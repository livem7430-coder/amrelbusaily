import type { ReactNode } from "react";

type Language = "ar" | "en";

type Copy = {
  title: string;
  description: string;
  eyebrow: string;
  heading: ReactNode;
  intro: string;
  answer: string;
  pillarsTitle: string;
  pillars: { title: string; body: string }[];
  processTitle: string;
  process: { number: string; title: string; body: string }[];
  fitTitle: string;
  fitBody: string;
  faqTitle: string;
  faq: { q: string; a: string }[];
  ctaTitle: string;
  ctaBody: string;
  cta: string;
};

const base = "https://amrelbusaily.vercel.app";

function getCopy(lang: Language): Copy {
  if (lang === "ar") {
    return {
      title: "خدمات International SEO للأسواق الأمريكية والأوروبية | Amr Elbusaily",
      description: "استراتيجية International SEO للمواقع التي تستهدف أمريكا وأوروبا والأسواق متعددة اللغات، مع بحث نية محلي وبنية hreflang ومحتوى قابل للقياس.",
      eyebrow: "INTERNATIONAL SEO · US · EUROPE",
      heading: <>استراتيجية SEO دولية تصل <span className="text-gradient">للسوق المناسب.</span></>,
      intro: "الظهور في أمريكا وأوروبا لا يتحقق بإضافة اسم دولة إلى صفحة عامة. تحتاج كل سوق إلى فهم مختلف للغة العميل، المنافسة، العرض، الثقة، والصفحات التي يمكنها تحويل الزيارة إلى فرصة.",
      answer: "خدمة International SEO تبني أساسًا إنجليزيًا صالحًا لأمريكا وأوروبا، ثم تحدد متى تحتاج الدولة أو اللغة إلى نسخة مستقلة فعلًا. نربط بحث الكلمات بنية الشراء، نراجع بنية الموقع وhreflang وcanonical، ونبني محتوى إنجليزيًا يخاطب الجمهور دون ادعاء مكتب محلي أو خبرة ميدانية غير موثقة.",
      pillarsTitle: "ما الذي تحتاجه استراتيجية SEO دولية؟",
      pillars: [
        { title: "صفحة إنجليزية عامة قوية", body: "نبدأ بنسخة إنجليزية واضحة تصلح كـcatch-all للمستخدمين في الولايات المتحدة وأوروبا، بدل تشتيت السلطة على نسخ دول كثيرة لا تقدم اختلافًا حقيقيًا." },
        { title: "بحث حسب السوق والنية", body: "نراجع اللغة المستخدمة في كل سوق، نوع النتائج، المنافسين، مراحل القرار، والاختلاف بين استعلام تجاري في أمريكا وآخر في المملكة المتحدة أو أوروبا." },
        { title: "Localization لا تبديل أسماء", body: "الاختلاف قد يكون في العملة، طريقة التواصل، الأمثلة، المصطلحات، الـCTA أو شروط الخدمة. تغيير كلمة USA إلى Germany داخل نص واحد ليس توطينًا كافيًا." },
        { title: "بنية تقنية مفهومة", body: "نستخدم URL architecture واضحة، canonical مناسبًا، hreflang ثنائي الاتجاه عند وجود نسخ مقابلة، وx-default للنسخة العامة عندما تكون هي fallback المنطقي." },
        { title: "محتوى إنجليزي تجاري وتعليمي", body: "نربط صفحات الخدمات بالمقالات والدراسات والأمثلة، ونفصل بين نية من يبحث عن International SEO Consultant ونية من يتعلم International SEO أو Multilingual SEO." },
        { title: "قياس حسب البلد واللغة", body: "نقسم Search Console والتحليلات حسب البلد واللغة والصفحة والاستعلام، ثم نراجع جودة الطلب لا الزيارات وحدها. لا نخلط نمو سوق بآخر في رقم إجمالي." },
      ],
      processTitle: "من التوسع إلى التنفيذ",
      process: [
        { number: "01", title: "تحديد السوق القابل للخدمة", body: "نحدد هل الأولوية الولايات المتحدة، المملكة المتحدة، أيرلندا، أو أسواق أوروبية أخرى، وما الخدمة والقدرة واللغة التي يمكن دعمها فعليًا." },
        { number: "02", title: "تدقيق البنية والصفحات", body: "نراجع النسخة الإنجليزية، الصفحات التجارية، الروابط، السرعة، الفهرسة، canonical، hreflang، وتجربة التحويل قبل إنتاج URLs جديدة." },
        { number: "03", title: "خريطة موضوع وسوق", body: "كل كلمة تحصل على صفحة أو مجموعة منطقية، مع تحديد ما هو عالمي وما يحتاج توطينًا. نمنع تكرار صفحة واحدة لكل دولة بلا اختلاف حقيقي." },
        { number: "04", title: "إطلاق وقياس وتعلم", body: "نطلق الأولويات، نراقب الظهور والنقرات والطلبات حسب السوق، ثم نوسع فقط عندما تظهر إشارة وبيانات وقدرة تنفيذ مناسبة." },
      ],
      fitTitle: "لمن تناسب الخدمة؟",
      fitBody: "تناسب شركة أو منتجًا رقميًا أو SaaS أو متجرًا يريد جذب عملاء من أمريكا أو أوروبا، أو مشروعًا عربيًا يوسع لغته، بشرط وجود عرض يمكن تقديمه عن بُعد وبيانات أو قدرة لتخصيص التجربة.",
      faqTitle: "أسئلة عن International SEO",
      faq: [
        { q: "هل ستنشئون صفحة لكل دولة أوروبية؟", a: "ليس تلقائيًا. ننشئ نسخة دولة عندما يوجد اختلاف حقيقي في اللغة أو العرض أو الأمثلة أو السوق. غير ذلك قد يخلق صفحات متشابهة ضعيفة القيمة." },
        { q: "هل الصفحة الإنجليزية تستهدف أمريكا وأوروبا معًا؟", a: "يمكن أن تكون الصفحة الإنجليزية العامة نقطة بداية للمستخدمين غير المحددين جغرافيًا. نضيف نسخًا إقليمية فقط عندما تستحقها البيانات والاختلافات الفعلية." },
        { q: "هل وجود hreflang يضمن الظهور في الدولة؟", a: "لا. hreflang يساعد محركات البحث على فهم النسخ البديلة، لكنه لا يضمن ترتيبًا. جودة المحتوى والملاءمة والمنافسة والروابط والتنفيذ عوامل أخرى مهمة." },
        { q: "هل تدّعون أن لديكم مكتبًا في أمريكا أو أوروبا؟", a: "لا. نعرض نموذج العمل عن بُعد بوضوح، ولا ننسب وجودًا محليًا أو خبرة ميدانية في دولة إلا إذا كانت موثقة ومصرحًا بها." },
      ],
      ctaTitle: "اختبر قابلية مشروعك للتوسع الدولي",
      ctaBody: "شارك الموقع والسوق والخدمة واللغة والهدف التجاري، وسنحدد هل تبدأ بنسخة إنجليزية عامة أو بخطة توطين محددة.",
      cta: "ناقش خطة International SEO",
    };
  }
  return {
    title: "International SEO Services for the US and European Markets | Amr Elbusaily",
    description: "International SEO strategy for brands targeting the United States, Europe and multilingual markets, with localized intent research, hreflang architecture and measurable content.",
    eyebrow: "INTERNATIONAL SEO · US · EUROPE",
    heading: <>International SEO that reaches <span className="text-gradient">the right market.</span></>,
    intro: "Visibility in the United States and Europe does not come from adding a country name to a generic page. Each market has different customer language, competition, offers, trust signals and conversion paths.",
    answer: "An International SEO engagement builds a strong English foundation for the US and Europe, then decides when a country or language needs a genuinely distinct version. We connect keyword research to buying intent, review URL architecture, hreflang and canonicals, and create English content without claiming a local office or unverified field experience.",
    pillarsTitle: "What an international SEO strategy needs",
    pillars: [
      { title: "A strong English catch-all", body: "We start with a clear English version that can serve users across the United States and Europe, rather than splitting authority across country pages that offer no meaningful difference." },
      { title: "Market and intent research", body: "We review language, result types, competitors, buying stages and the difference between a commercial query in the US and one in the UK or another European market." },
      { title: "Localization, not name swapping", body: "Differences may include currency, communication, examples, terminology, CTAs or service terms. Replacing USA with Germany in the same copy is not sufficient localization." },
      { title: "Understandable technical architecture", body: "We use a clear URL structure, appropriate canonicals, bidirectional hreflang when alternate pages exist, and x-default when the generic page is the sensible fallback." },
      { title: "Commercial and educational content", body: "Service pages connect to guides, examples and proof, while intent is separated between an International SEO Consultant query and an informational Multilingual SEO query." },
      { title: "Measurement by country and language", body: "Search Console and analytics are segmented by country, language, page and query. We review lead quality instead of combining every market into one traffic number." },
    ],
    processTitle: "From expansion to execution",
    process: [
      { number: "01", title: "Choose a serviceable market", body: "We clarify whether the priority is the US, UK, Ireland or another European market, and which offer, language and delivery capacity can actually support it." },
      { number: "02", title: "Audit the current foundation", body: "We review English content, commercial pages, links, speed, indexability, canonicals, hreflang and conversion paths before adding new URLs." },
      { number: "03", title: "Map topic and market", body: "Each query receives a page or logical cluster, with a decision about what is universal and what requires localization. We avoid one near-identical page per country." },
      { number: "04", title: "Launch, measure and learn", body: "We launch priorities, monitor visibility, clicks and enquiries by market, then expand only when evidence and delivery capacity support the next step." },
    ],
    fitTitle: "Who is this for?",
    fitBody: "It fits service companies, digital products, SaaS and e-commerce brands seeking demand from the US or Europe, or an Arabic-first project expanding its language—provided the offer can be delivered remotely and supported with real capacity.",
    faqTitle: "Questions about International SEO",
    faq: [
      { q: "Will you create a page for every European country?", a: "Not automatically. A country version should have a genuine difference in language, offer, examples or market context. Otherwise, similar pages can add little value." },
      { q: "Can one English page target the US and Europe?", a: "A generic English page can be a sensible starting point for users without a specific regional match. Regional versions should be added only when evidence and real differences justify them." },
      { q: "Does hreflang guarantee visibility in a country?", a: "No. It helps search engines understand alternate versions, but it is not a ranking guarantee. Content quality, relevance, competition, links and implementation also matter." },
      { q: "Do you claim to have a local office in the US or Europe?", a: "No. The remote-first delivery model is stated clearly, and local presence or field experience is not implied unless it is documented and authorized." },
    ],
    ctaTitle: "Test your project’s international readiness",
    ctaBody: "Share your website, market, offer, language and commercial goal. We will identify whether an English foundation or a localized plan is the right starting point.",
    cta: "Discuss an International SEO plan",
  };
}

export function internationalSeoHead(lang: Language) {
  const data = getCopy(lang);
  const url = `${base}/${lang === "ar" ? "ar/international-seo" : "international-seo"}`;
  const alternate = `${base}/${lang === "ar" ? "international-seo" : "ar/international-seo"}`;
  return {
    meta: [
      { title: data.title },
      { name: "description", content: data.description },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { property: "og:title", content: data.title },
      { property: "og:description", content: data.description },
      { property: "og:type", content: "service" },
      { property: "og:url", content: url },
      { property: "og:locale", content: lang === "ar" ? "ar_EG" : "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: lang === "ar" ? "ar" : "en", href: url },
      { rel: "alternate", hrefLang: lang === "ar" ? "en" : "ar", href: alternate },
      { rel: "alternate", hrefLang: "x-default", href: `${base}/international-seo` },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: data.title,
        description: data.description,
        url,
        inLanguage: lang,
        serviceType: "International SEO",
        provider: { "@type": "Person", name: "Amr Elbusaily", url: base, jobTitle: "SEO and digital growth strategist" },
        areaServed: ["United States", "Europe", "United Kingdom", "Ireland", "Worldwide"],
      }),
    }],
  };
}

export function InternationalSeoPage({ lang }: { lang: Language }) {
  const ar = lang === "ar";
  const data = getCopy(lang);
  const related = ar
    ? [{ label: "خبير SEO", href: "/ar/seo-expert" }, { label: "بحث الكلمات", href: "/ar/keyword-research" }, { label: "Content SEO", href: "/ar/content-seo" }, { label: "SEO وGEO", href: "/ar/seo-geo-eli5" }]
    : [{ label: "SEO expert", href: "/seo-expert" }, { label: "Keyword Research", href: "/keyword-research" }, { label: "Content SEO", href: "/content-seo" }, { label: "SEO and GEO", href: "/seo-geo-eli5" }];
  return (
    <div className="min-h-screen" dir={ar ? "rtl" : "ltr"} lang={lang}>
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md"><div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"><a href={ar ? "/ar" : "/"} className="flex items-center gap-2 font-display font-semibold"><span className="grid h-8 w-8 place-items-center rounded-md bg-primary font-mono text-sm text-primary-foreground">AE</span><span>Amr Elbusaily</span></a><nav className="flex items-center gap-4 text-sm text-muted-foreground"><a href={ar ? "/blog/ar" : "/blog/en"} className="hover:text-foreground">{ar ? "المقالات" : "Articles"}</a><a href={ar ? "/ar/seo-services" : "/seo-services"} className="hover:text-foreground">{ar ? "خدمات SEO" : "SEO services"}</a><a href={ar ? "/" : "/ar"} className="font-mono text-xs hover:text-foreground">{ar ? "EN" : "AR"}</a></nav></div></header>
      <main>
        <section className="relative overflow-hidden border-b border-border"><div className="absolute inset-0 grid-bg" aria-hidden="true" /><div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28"><div className="max-w-4xl"><div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{data.eyebrow}</div><h1 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">{data.heading}</h1><p className="mt-6 max-w-3xl text-lg leading-9 text-muted-foreground">{data.intro}</p><div className="mt-8 flex flex-wrap gap-3"><a href="mailto:amreelbasily@gmail.com?subject=International%20SEO%20strategy" className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground glow-primary">{data.cta}</a><a href={ar ? "/ar/seo-expert" : "/seo-expert"} className="rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium hover:border-primary hover:text-primary">{ar ? "ناقش استراتيجية SEO" : "Discuss SEO strategy"}</a></div></div></div></section>
        <section className="border-b border-border bg-surface/30"><div className="mx-auto max-w-6xl px-6 py-16"><div className="rounded-2xl border border-primary/30 bg-primary/5 p-7 md:p-10"><div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{ar ? "الإجابة المباشرة" : "The direct answer"}</div><p className="mt-4 max-w-4xl text-xl leading-9">{data.answer}</p></div></div></section>
        <section className="mx-auto max-w-6xl px-6 py-20"><div className="max-w-2xl"><div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{ar ? "نطاق العمل" : "Scope of work"}</div><h2 className="mt-3 text-3xl font-semibold md:text-4xl">{data.pillarsTitle}</h2></div><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{data.pillars.map((pillar, i) => <article key={pillar.title} className="rounded-2xl border border-border bg-surface p-7"><div className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</div><h3 className="mt-4 text-xl font-semibold">{pillar.title}</h3><p className="mt-3 leading-8 text-muted-foreground">{pillar.body}</p></article>)}</div></section>
        <section className="border-y border-border bg-surface/30"><div className="mx-auto max-w-6xl px-6 py-20"><div className="max-w-2xl"><div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{ar ? "طريقة العمل" : "How it works"}</div><h2 className="mt-3 text-3xl font-semibold md:text-4xl">{data.processTitle}</h2></div><div className="mt-10 grid gap-0 border-y border-border">{data.process.map((step) => <div key={step.number} className="grid gap-4 border-b border-border py-7 last:border-b-0 md:grid-cols-[80px_1fr_1.5fr] md:items-start md:gap-8"><div className="font-mono text-sm text-primary">{step.number}</div><h3 className="text-xl font-semibold">{step.title}</h3><p className="leading-8 text-muted-foreground">{step.body}</p></div>)}</div></div></section>
        <section className="mx-auto max-w-6xl px-6 py-20"><div className="grid gap-6 md:grid-cols-2"><div className="rounded-2xl border border-border bg-surface p-8"><h2 className="text-2xl font-semibold">{data.fitTitle}</h2><p className="mt-4 leading-8 text-muted-foreground">{data.fitBody}</p></div><div className="rounded-2xl border border-border bg-surface p-8"><h2 className="text-2xl font-semibold">{ar ? "الأساس التقني" : "Technical foundation"}</h2><p className="mt-4 leading-8 text-muted-foreground">{ar ? "نربط النسخ واللغات بوضوح، ونبني القرار حول المحتوى الرئيسي والاختلاف الحقيقي في السوق. راجع أيضًا إرشادات Google عن النسخ المحلية عند تجهيز توسع متعدد اللغات." : "We connect language versions clearly and base the decision on meaningful market differences. See Google’s guidance on localized versions when preparing a multilingual expansion."} <a className="text-primary hover:underline" href="https://developers.google.com/search/docs/specialty/international/localized-versions" target="_blank" rel="noreferrer">Google Search Central</a>.</p></div></div></section>
        <section className="border-y border-border bg-surface/30"><div className="mx-auto max-w-6xl px-6 py-20"><div className="max-w-2xl"><div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">FAQ</div><h2 className="mt-3 text-3xl font-semibold md:text-4xl">{data.faqTitle}</h2></div><div className="mt-10 grid gap-4 md:grid-cols-2">{data.faq.map((item) => <details key={item.q} className="group rounded-xl border border-border bg-surface p-6"><summary className="cursor-pointer list-none text-lg font-semibold">{item.q}</summary><p className="mt-4 leading-8 text-muted-foreground">{item.a}</p></details>)}</div></div></section>
        <section className="border-t border-border"><div className="mx-auto max-w-6xl px-6 py-20"><div className="rounded-2xl border border-border bg-surface p-8 md:p-12"><h2 className="text-3xl font-semibold md:text-4xl">{data.ctaTitle}</h2><p className="mt-4 max-w-2xl leading-8 text-muted-foreground">{data.ctaBody}</p><div className="mt-7 flex flex-wrap gap-4"><a href="mailto:amreelbasily@gmail.com?subject=International%20SEO%20strategy" className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">{data.cta}</a>{related.map((link) => <a key={link.href} href={link.href} className="rounded-md border border-border px-5 py-3 text-sm text-muted-foreground hover:border-primary hover:text-primary">{link.label}</a>)}</div></div></div></section>
      </main>
      <footer className="border-t border-border"><div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 px-6 py-8 text-sm text-muted-foreground"><span>© {new Date().getFullYear()} Amr Elbusaily</span><span>SEO · Digital Marketing · AI Growth · E-commerce</span></div></footer>
    </div>
  );
}
