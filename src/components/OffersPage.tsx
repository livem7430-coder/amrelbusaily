import type { ReactNode } from "react";

const base = "https://amrelbusaily.vercel.app";
type Lang = "ar" | "en";

type Offer = {
  name: string;
  tag: string;
  description: string;
  fit: string;
  includes: string[];
  href: string;
};

type Faq = { q: string; a: string };

const content = {
  ar: {
    lang: "ar" as const,
    dir: "rtl",
    home: "/ar",
    other: "/offers",
    blog: "/blog/ar",
    title: "عروض SEO والمتاجر الإلكترونية وAI Growth | عمرو البصيلي",
    description: "صفحة عروض عملية لخدمات SEO، نمو المتاجر الإلكترونية، AI SEO وAEO/GEO، المحتوى والقياس. نطاق واضح لكل عرض وتحديد مخصص حسب المشروع.",
    ogTitle: "عروض SEO والمتاجر الإلكترونية وAI Growth",
    ogDescription: "اختر نقطة البداية المناسبة لمشروعك: تأسيس SEO، نمو متجر إلكتروني، AI SEO، المحتوى أو الاستشارات التسويقية.",
    eyebrow: "SELECT YOUR GROWTH TRACK",
    h1: "عروض واضحة لبناء\nظهور ونمو يمكن قياسه.",
    intro: "مجموعة عروض مرنة تجمع بين الاستراتيجية والتنفيذ والمراجعة، لمساعدة المواقع والمتاجر والمنتجات الرقمية على الوصول إلى العملاء المناسبين دون وعود بترتيب أو مبيعات مضمونة.",
    primaryCta: "اطلب عرضًا مخصصًا",
    secondaryCta: "شاهد كل الخدمات",
    directLabel: "كيف تختار؟",
    directTitle: "ابدأ من أكبر عائق أمام النمو",
    directBody: "إذا كانت المشكلة في الأساس التقني فابدأ بالتدقيق. إذا كان المتجر يحتاج إلى بنية وصفحات فئات ومنتجات أقوى فاختر مسار E-commerce. وإذا كنت تريد ربط SEO بالمحتوى وتجارب البحث المدعومة بالذكاء الاصطناعي فابدأ بمسار AI SEO. بعد فهم النطاق يمكن تحديد عرض مخصص يناسب كل مشروع.",
    offersLabel: "العروض الأساسية",
    offersTitle: "مسارات مختلفة، ونظام عمل واحد: وضوح ثم أولوية ثم قياس",
    offers: [
      { name: "SEO Foundation", tag: "للأساسيات", description: "بناء خارطة أولويات لتحسين قابلية الزحف والفهرسة والصفحات التي تستحق الاستثمار أولًا.", fit: "مناسب للمواقع التي لا تعرف أين تبدأ أو لديها مشاكل تقنية ومحتوى غير مترابط.", includes: ["مراجعة تقنية وأولويات", "خريطة نية وكلمات وصفحات", "توصيات روابط داخلية", "مؤشرات قياس للمرحلة التالية"], href: "/ar/services/seo-strategy-consulting" },
      { name: "E-commerce Growth", tag: "للمتاجر", description: "تحسين بنية المتجر وصفحات الفئات والمنتجات والمحتوى ومسار البحث إلى الشراء.", fit: "مناسب للمتاجر التي تريد تنظيم الكتالوج وتحسين الظهور والرحلة التجارية دون التركيز على الزيارات فقط.", includes: ["هندسة الفئات والمنتجات", "مراجعة الزحف والفلاتر", "محتوى صفحات تجارية", "قياس الظهور والتحويلات"], href: "/ar/services/ecommerce-seo-growth" },
      { name: "AI SEO · AEO · GEO", tag: "للبحث الحديث", description: "ربط SEO التقني ووضوح الكيان والمحتوى النصي بتجارب البحث والإجابة المدعومة بالذكاء الاصطناعي.", fit: "مناسب للبراندات التي تريد أن يكون محتواها واضحًا وقابلًا للفهم، لا مجرد إضافة كلمات AI إلى الصفحات.", includes: ["وضوح الكيان والموضوع", "إجابات وأسئلة ذات قيمة", "مراجعة جودة محتوى AI", "قياس البحث التقليدي وتجارب الظهور"], href: "/ar/services/ai-seo-aeo-geo" },
      { name: "Content & Authority", tag: "للمحتوى", description: "تحويل الطلب والموضوعات المهمة إلى صفحات ومقالات مترابطة تخدم القارئ والخطوة التجارية التالية.", fit: "مناسب للمواقع التي لديها محتوى كثير أو تحتاج إلى خريطة نشر مرتبطة بالخدمات والمنتجات.", includes: ["استراتيجية موضوعات", "Content briefs وصفحات أساسية", "ربط المقالات بالخدمات", "مراجعة الجودة والنية"], href: "/ar/services/content-seo-copywriting" },
      { name: "Technical Rescue", tag: "للمشاكل العاجلة", description: "فحص عملي لمشاكل الفهرسة والأداء والنسخ المكررة والروابط التي تعطل الصفحات المهمة.", fit: "مناسب للمواقع بعد migration أو redesign أو التي ترى فرقًا بين حجم المحتوى والصفحات المفهرسة.", includes: ["Crawl وindexation review", "Canonical وrobots وsitemap", "أولويات Core Web Vitals", "خطة إصلاح قابلة للتسليم"], href: "/ar/services/technical-seo-audits" },
      { name: "Growth Advisory", tag: "للقرارات", description: "استشارة تربط SEO والمحتوى والإعلانات والتحويل والقياس داخل خارطة نمو واحدة.", fit: "مناسب للفرق التي تحتاج إلى قرار وأولوية ونظام متابعة أكثر من قائمة مهام عامة.", includes: ["جلسة تشخيص وأهداف", "اختيارات القنوات والرسائل", "خارطة تنفيذ ومسؤوليات", "إيقاع مراجعة قائم على البيانات"], href: "/ar/services/marketing-consulting" },
    ] as Offer[],
    processLabel: "طريقة العمل",
    processTitle: "كل عرض يبدأ بتحديد النطاق قبل التنفيذ",
    process: [["01", "أرسل السياق", "شارك رابط الموقع أو المتجر، السوق، اللغة، الأهداف، وأكبر مشكلة تراها الآن."], ["02", "نحدد المسار", "نراجع ما هو متاح ونختار العرض الأقرب، أو نبني نطاقًا مخصصًا عندما لا تكفي باقة واحدة."], ["03", "ننفذ ونراجع", "نرتب الإصلاحات والمخرجات ونراجع الإشارات المتاحة بدل تقديم وعود عامة عن الترتيب أو المبيعات."]],
    faqLabel: "أسئلة شائعة",
    faqTitle: "قبل طلب العرض",
    faqs: [["كيف يتم تحديد نطاق العرض؟", "يختلف النطاق حسب حجم الموقع أو المتجر وعدد اللغات وحالة التقنية وعدد الصفحات والسوق المستهدف. بعد فهم المشروع يمكن تحديد المخرجات والمسؤوليات المناسبة بوضوح."], ["هل العرض يشمل تنفيذ التوصيات؟", "يعتمد ذلك على العرض والنطاق المتفق عليه. بعض المسارات تبدأ بتشخيص وخارطة، وبعضها يمكن أن يشمل محتوى أو تنفيذًا أو مراجعة، ويُحدد ذلك بوضوح قبل البدء."], ["هل تضمن العروض الوصول إلى الصفحة الأولى؟", "لا. لا يمكن ضمان ترتيب أو ظهور أو مبيعات. الهدف هو بناء تحسينات قابلة للفحص والقياس ترتبط بالنية والصفحات المهمة وتجربة المستخدم."], ["أي عرض مناسب لمتجر إلكتروني؟", "غالبًا يبدأ متجر التجارة الإلكترونية بمسار E-commerce Growth، وقد يحتاج إلى Technical Rescue أو Content & Authority حسب نتائج المراجعة."], ["هل توجد عروض للغة العربية والإنجليزية؟", "نعم، يمكن تصميم النطاق للغة واحدة أو تجربتين منفصلتين، مع مراعاة metadata والروابط الداخلية وhreflang عندما تكون النسخ متكافئة."], ["كيف أتواصل لطلب عرض؟", "يمكنك إرسال brief عبر البريد الإلكتروني أو استخدام زر WhatsApp في الصفحة لإرسال رسالة مباشرة، وسنحتاج إلى رابط الموقع والهدف والسوق واللغة."]],
    nextTitle: "لا تعرف أي عرض تختار؟ ابدأ بالتشخيص",
    nextBody: "أرسل رابط الموقع أو المتجر مع السوق والهدف وأكبر عائق. سنقترح نقطة بداية منطقية بدل دفعك إلى باقة لا تناسب المرحلة الحالية.",
    emailSubject: "Custom SEO and AI Growth offer",
    whatsapp: "https://api.whatsapp.com/send/?text&username=amrelbusaily&type=username&app_absent=0",
    allServices: "/ar/services",
    footer: "SEO · E-commerce · AI Growth · Digital Marketing",
  },
  en: {
    lang: "en" as const,
    dir: "ltr",
    home: "/",
    other: "/ar/offers",
    blog: "/blog/en",
    title: "SEO, Ecommerce & AI Growth Offers | Amr Elbusaily",
    description: "Practical offer tracks for SEO, ecommerce growth, AI SEO and AEO/GEO, content, technical audits, and marketing advisory—with scope shaped around the project.",
    ogTitle: "SEO, Ecommerce & AI Growth Offers",
    ogDescription: "Choose a useful starting point: SEO foundation, ecommerce growth, AI SEO, content, technical recovery, or growth advisory.",
    eyebrow: "SELECT YOUR GROWTH TRACK",
    h1: "Clear offers for building\nvisibility and measurable growth.",
    intro: "Flexible tracks that combine strategy, execution, and review for websites, stores, and digital products—without promises of guaranteed rankings or sales.",
    primaryCta: "Request a custom offer",
    secondaryCta: "View all services",
    directLabel: "How to choose",
    directTitle: "Start with the biggest growth constraint",
    directBody: "If the issue is technical, start with an audit. If the store needs stronger category, product, and commercial architecture, choose Ecommerce Growth. If you want to connect SEO with content and AI-assisted search experiences, start with AI SEO. Once the scope is clear, a custom offer is more useful than a generic package.",
    offersLabel: "Core offers",
    offersTitle: "Different tracks, one operating system: clarity, priority, measurement",
    offers: [
      { name: "SEO Foundation", tag: "For fundamentals", description: "Build a priority map for crawlability, indexation, and the pages worth investing in first.", fit: "For sites that are unsure where to start or have disconnected technical and content work.", includes: ["Technical review and priorities", "Intent, keyword, and page map", "Internal-linking recommendations", "Measurement signals for the next stage"], href: "/services/seo-strategy-consulting" },
      { name: "E-commerce Growth", tag: "For stores", description: "Improve store architecture, category and product pages, content, and the path from search to purchase.", fit: "For stores that need a clearer catalog and commercial journey—not just more visits.", includes: ["Category and product architecture", "Crawl and faceted-navigation review", "Commercial page content", "Visibility and conversion measurement"], href: "/services/ecommerce-seo-growth" },
      { name: "AI SEO · AEO · GEO", tag: "For modern search", description: "Connect technical SEO, entity clarity, and useful text with AI-assisted search and answer experiences.", fit: "For brands that want their content to be understandable and useful, not merely filled with AI keywords.", includes: ["Entity and topic clarity", "Useful questions and answers", "AI content quality review", "Traditional and AI-search measurement"], href: "/services/ai-seo-aeo-geo" },
      { name: "Content & Authority", tag: "For content", description: "Turn demand and important topics into connected pages and articles that serve readers and the next commercial step.", fit: "For sites with scattered content or a need for a service- and product-connected publishing map.", includes: ["Topic and content strategy", "Content briefs and core pages", "Article-to-service linking", "Quality and intent review"], href: "/services/content-seo-copywriting" },
      { name: "Technical Rescue", tag: "For urgent issues", description: "A practical review of indexation, performance, duplication, and linking problems that block priority pages.", fit: "For sites after a migration or redesign, or where indexed pages do not match content and business priorities.", includes: ["Crawl and indexation review", "Canonical, robots, and sitemap checks", "Core Web Vitals priorities", "A handoff-ready repair plan"], href: "/services/technical-seo-audits" },
      { name: "Growth Advisory", tag: "For decisions", description: "Connect SEO, content, paid acquisition, conversion, and measurement in one growth roadmap.", fit: "For teams that need decisions, priorities, and an operating cadence more than a generic task list.", includes: ["Diagnostic session and goals", "Channel and messaging choices", "Execution roadmap and ownership", "Evidence-led review cadence"], href: "/services/marketing-consulting" },
    ] as Offer[],
    processLabel: "The workflow",
    processTitle: "Every offer starts by defining scope",
    process: [["01", "Share context", "Send the site or store URL, market, language, goals, and the biggest issue you see today."], ["02", "Choose the track", "We review the context and select the closest offer, or shape a custom scope when one track is not enough."], ["03", "Deliver and review", "We prioritize outputs and review available signals instead of making generic ranking or sales promises."]],
    faqLabel: "FAQ",
    faqTitle: "Before requesting an offer",
    faqs: [["How is the offer scope defined?", "Scope varies by site or store size, languages, technical condition, page count, and target market. A suitable set of outputs and responsibilities can be prepared after reviewing the project."], ["Do offers include implementation?", "It depends on the selected track and agreed scope. Some start with diagnosis and a roadmap; others can include content, implementation, or review. The scope is clarified before work begins."], ["Do you guarantee page-one rankings?", "No. Rankings, visibility, and sales cannot be guaranteed. The objective is to build inspectable, measurable improvements connected to intent, priority pages, and user experience."], ["Which offer fits an ecommerce store?", "Most stores start with Ecommerce Growth and may add Technical Rescue or Content & Authority depending on the review findings."], ["Can the work cover Arabic and English?", "Yes. The scope can cover one language or separate language experiences, with appropriate metadata, internal links, and hreflang when both versions serve equivalent purposes."], ["How do I request an offer?", "Send a brief by email or use the WhatsApp button on the page. Include your URL, goal, market, and language so the first response can be relevant."]],
    nextTitle: "Not sure which offer fits? Start with diagnosis",
    nextBody: "Share your site or store URL, market, goal, and biggest constraint. We will suggest a sensible starting point rather than push a package that does not fit the current stage.",
    emailSubject: "Custom SEO and AI Growth offer",
    whatsapp: "https://api.whatsapp.com/send/?text&username=amrelbusaily&type=username&app_absent=0",
    allServices: "/services",
    footer: "SEO · E-commerce · AI Growth · Digital Marketing",
  },
} as const;

function ActionLink({ href, children, primary = false }: { href: string; children: ReactNode; primary?: boolean }) {
  return <a href={href} className={primary ? "rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground glow-primary" : "rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium hover:border-primary hover:text-primary"}>{children}</a>;
}

function makeSchema(data: (typeof content)[Lang]) {
  const url = `${base}${data.lang === "ar" ? "/ar/offers" : "/offers"}`;
  return { "@context": "https://schema.org", "@graph": [
    { "@type": "CollectionPage", "@id": `${url}#webpage`, url, name: data.ogTitle, description: data.description, inLanguage: data.lang, isPartOf: { "@id": `${base}/#website` }, about: { "@id": `${base}/#person` } },
    { "@type": "Person", "@id": `${base}/#person`, name: data.lang === "ar" ? "عمرو البصيلي" : "Amr Elbusaily", alternateName: data.lang === "ar" ? ["Amr Elbusaily", "Amro Elbusaily"] : ["عمرو البصيلي", "Amro Elbusaily"], url: `${base}${data.home}` },
    { "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: data.lang === "ar" ? "الرئيسية" : "Home", item: `${base}${data.home}` }, { "@type": "ListItem", position: 2, name: data.lang === "ar" ? "العروض" : "Offers", item: url }] },
    { "@type": "OfferCatalog", "@id": `${url}#catalog`, name: data.lang === "ar" ? "عروض SEO والنمو" : "SEO and growth offers", itemListElement: data.offers.map((offer, index) => ({ "@type": "ListItem", position: index + 1, item: { "@type": "Service", name: offer.name, description: offer.description, url: `${base}${offer.href}`, provider: { "@id": `${base}/#person` } } })) },
    { "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: data.faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
  ] };
}

export function offersHead(lang: Lang) {
  const data = content[lang];
  const url = `${base}${lang === "ar" ? "/ar/offers" : "/offers"}`;
  return { meta: [
    { title: data.title }, { name: "description", content: data.description }, { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
    { property: "og:title", content: data.ogTitle }, { property: "og:description", content: data.ogDescription }, { property: "og:type", content: "website" }, { property: "og:url", content: url }, { property: "og:locale", content: lang === "ar" ? "ar_EG" : "en_US" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [
    { rel: "canonical", href: url }, { rel: "alternate", hrefLang: "ar", href: `${base}/ar/offers` }, { rel: "alternate", hrefLang: "en", href: `${base}/offers` }, { rel: "alternate", hrefLang: "x-default", href: `${base}/offers` },
  ], scripts: [{ type: "application/ld+json", children: JSON.stringify(makeSchema(data)) }] };
}

export function OffersPage({ lang }: { lang: Lang }) {
  const data = content[lang];
  const isArabic = lang === "ar";
  return <div className="min-h-screen" dir={data.dir} lang={data.lang}>
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md"><div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"><a href={data.home} className="flex items-center gap-2 font-display font-semibold"><span className="grid h-8 w-8 place-items-center rounded-md bg-primary font-mono text-sm text-primary-foreground">AE</span><span>{isArabic ? "عمرو البصيلي" : "Amr Elbusaily"}</span></a><nav className="flex items-center gap-4 text-sm text-muted-foreground"><a href={data.blog} className="hover:text-foreground">{isArabic ? "المقالات" : "Articles"}</a><a href={data.allServices} className="hover:text-foreground">{isArabic ? "الخدمات" : "Services"}</a><a href={data.other} className="font-mono text-xs hover:text-foreground">{isArabic ? "EN" : "AR"}</a></nav></div></header>
    <main>
      <section className="relative overflow-hidden border-b border-border"><div className="absolute inset-0 grid-bg" aria-hidden="true" /><div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28"><div className="max-w-4xl"><div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{data.eyebrow}</div><h1 className="mt-5 whitespace-pre-line text-4xl font-semibold leading-tight md:text-6xl">{data.h1}</h1><p className="mt-6 max-w-3xl text-lg leading-9 text-muted-foreground">{data.intro}</p><div className="mt-8 flex flex-wrap gap-3"><ActionLink href={`mailto:amreelbasily@gmail.com?subject=${encodeURIComponent(data.emailSubject)}`} primary>{data.primaryCta}</ActionLink><ActionLink href={data.allServices}>{data.secondaryCta}</ActionLink></div></div></div></section>
      <section className="mx-auto max-w-6xl px-6 py-20"><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"><div><div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{data.directLabel}</div><h2 className="mt-3 text-3xl font-semibold md:text-4xl">{data.directTitle}</h2></div><p className="text-xl leading-10 text-muted-foreground">{data.directBody}</p></div></section>
      <section className="border-y border-border bg-surface/30"><div className="mx-auto max-w-6xl px-6 py-20"><div className="max-w-3xl"><div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{data.offersLabel}</div><h2 className="mt-3 text-3xl font-semibold md:text-4xl">{data.offersTitle}</h2></div><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{data.offers.map((offer, index) => <article key={offer.name} className={index === 1 || index === 2 ? "rounded-2xl border border-primary/30 bg-primary/5 p-7" : "rounded-2xl border border-border bg-surface p-7"}><div className="flex items-center justify-between gap-3"><span className="font-mono text-xs uppercase tracking-[0.12em] text-primary">{offer.tag}</span><span className="font-mono text-xs text-muted-foreground">0{index + 1}</span></div><h3 className="mt-5 text-2xl font-semibold">{offer.name}</h3><p className="mt-3 leading-8 text-muted-foreground">{offer.description}</p><p className="mt-5 border-t border-border/70 pt-5 text-sm leading-7 text-muted-foreground"><strong className="text-foreground">{isArabic ? "مناسب لـ: " : "Best for: "}</strong>{offer.fit}</p><ul className="mt-5 space-y-2 text-sm leading-7 text-muted-foreground">{offer.includes.map((item) => <li key={item} className="flex gap-2"><span className="text-primary" aria-hidden="true">✦</span><span>{item}</span></li>)}</ul><a href={offer.href} className="mt-6 inline-block text-sm font-medium text-primary hover:underline">{isArabic ? "اعرف تفاصيل الخدمة →" : "View service details →"}</a></article>)}</div></div></section>
      <section className="mx-auto max-w-6xl px-6 py-20"><div className="max-w-3xl"><div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{data.processLabel}</div><h2 className="mt-3 text-3xl font-semibold md:text-4xl">{data.processTitle}</h2></div><div className="mt-10 grid gap-5 md:grid-cols-3">{data.process.map(([number, title, body]) => <article key={number} className="rounded-2xl border border-border p-6"><div className="font-mono text-sm text-primary">{number}</div><h3 className="mt-5 text-xl font-semibold">{title}</h3><p className="mt-3 leading-8 text-muted-foreground">{body}</p></article>)}</div></section>
      <section className="border-y border-border bg-surface/30"><div className="mx-auto max-w-6xl px-6 py-20"><div className="max-w-3xl"><div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{data.faqLabel}</div><h2 className="mt-3 text-3xl font-semibold md:text-4xl">{data.faqTitle}</h2></div><div className="mt-10 grid gap-4 md:grid-cols-2">{data.faqs.map(([q, a]) => <details key={q} className="group rounded-xl border border-border bg-surface p-6"><summary className="cursor-pointer list-none pr-6 text-lg font-semibold marker:hidden">{q}</summary><p className="mt-4 leading-8 text-muted-foreground">{a}</p></details>)}</div></div></section>
      <section><div className="mx-auto max-w-6xl px-6 py-20"><div className="rounded-2xl border border-border bg-surface p-8 md:p-12"><div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{isArabic ? "الخطوة التالية" : "Next step"}</div><h2 className="mt-4 text-3xl font-semibold md:text-4xl">{data.nextTitle}</h2><p className="mt-4 max-w-2xl leading-8 text-muted-foreground">{data.nextBody}</p><div className="mt-7 flex flex-wrap gap-4"><ActionLink href={`mailto:amreelbasily@gmail.com?subject=${encodeURIComponent(data.emailSubject)}`} primary>{data.primaryCta}</ActionLink><ActionLink href={data.whatsapp}>WhatsApp</ActionLink><ActionLink href={data.allServices}>{data.secondaryCta}</ActionLink></div></div></div></section>
    </main>
    <footer className="border-t border-border"><div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 px-6 py-8 text-sm text-muted-foreground"><span>© {new Date().getFullYear()} {isArabic ? "عمرو البصيلي" : "Amr Elbusaily"}</span><span>{data.footer}</span></div></footer>
  </div>;
}
