import type { ReactNode } from "react";

const base = "https://amrelbusaily.vercel.app";
type Lang = "ar" | "en";
type LinkItem = { label: string; href: string; body: string };
type FaqItem = { q: string; a: string };

const content = {
  ar: {
    lang: "ar" as const,
    dir: "rtl",
    home: "/ar",
    blog: "/blog/ar",
    other: "/ecommerce-seo",
    serviceBase: "/ar/services",
    title: "SEO التجارة الإلكترونية: بنية أفضل، ظهور مؤهل، ومبيعات قابلة للقياس | عمرو البصيلي",
    description: "Hub Page عربية لتحسين SEO المتاجر الإلكترونية: بنية الفئات والمنتجات، الزحف والفهرسة، المحتوى، Product schema، التجارة الدولية، والقياس.",
    ogTitle: "SEO التجارة الإلكترونية | عمرو البصيلي",
    ogDescription: "دليل عملي لتحسين متجر إلكتروني من بنية الموقع وصفحات الفئات والمنتجات إلى المحتوى والبيانات والقياس.",
    eyebrow: "E-COMMERCE SEO · ORGANIC GROWTH",
    h1: "SEO التجارة الإلكترونية يبدأ من\nالصفحة التي يريد العميل الوصول إليها.",
    intro: "دليل عربي عملي لبناء متجر مفهوم لمحركات البحث وسهل الاستخدام للعميل، مع ربط صفحات الفئات والمنتجات والمحتوى بالنية الشرائية والنتيجة التجارية.",
    primaryCta: "اطلب مراجعة متجر",
    secondaryCta: "خدمات E-commerce SEO",
    directLabel: "الإجابة المختصرة",
    directTitle: "ما هو SEO التجارة الإلكترونية؟",
    directBody: "هو تحسين البنية التقنية والتنقل وصفحات الفئات والمنتجات والمحتوى والبيانات التجارية حتى يستطيع محرك البحث اكتشاف الصفحات المهمة وفهمها، ويستطيع العميل الانتقال من البحث إلى المقارنة ثم الشراء. لا يضمن SEO ترتيبًا أو مبيعات تلقائيًا؛ لكنه يبني نظامًا قابلًا للاكتشاف والقياس والتحسين.",
    pillarsLabel: "خريطة العمل",
    pillarsTitle: "ستة محاور تجعل SEO المتجر قابلًا للتنفيذ",
    pillars: [
      ["01", "بنية الفئات والمنتجات", "نظم التصنيفات والروابط الداخلية بحيث تصل الصفحات المهمة من القائمة إلى الفئة ثم المنتج دون الاعتماد على مربع البحث فقط."],
      ["02", "الزحف والفهرسة", "راجع canonical وrobots وsitemap وصفحات الترقيم والفلاتر والمنتجات غير المتاحة، وميّز بين URL مفيد للبحث ونسخة مكررة."],
      ["03", "صفحات المنتج والفئة", "اكتب عناوين ووصفًا ومحتوى يشرح الاختيار، ويجيب عن الاعتراضات، ويعرض المعلومات الحقيقية مثل السعر والتوفر والمقاسات عندما تكون موجودة."],
      ["04", "البيانات المنظمة", "استخدم BreadcrumbList وProduct أو Merchant listing على صفحات المنتجات فقط عندما تطابق البيانات ما يراه المستخدم، مع Organization للكيان التجاري عند الحاجة."],
      ["05", "المحتوى والطلب", "اربط أدلة الشراء والمقارنات والأسئلة الشائعة بصفحات تجميعية ومنتجات ذات صلة بدل نشر مقالات عامة لا تقرّب المستخدم من قرار مناسب."],
      ["06", "القياس والتحويل", "تابع الظهور والنقرات والزيارات ومعدلات إضافة المنتج للسلة والشراء أو الاستفسار، ثم فرّق بين أثر SEO وأثر القنوات الأخرى قبل اتخاذ قرار."],
    ],
    processLabel: "منهج التنفيذ",
    processTitle: "من التشخيص إلى صفحات تجارية أقوى",
    process: [
      ["01", "افهم الكتالوج والنية", "نحدد الأسواق واللغات والفئات والمنتجات والهوامش وحالات البحث التي تستحق صفحة مستقلة."],
      ["02", "ارسم الأولويات", "نربط البيانات التقنية مع الطلب والفرص التجارية ونضع خريطة صفحات وروابط داخلية قابلة للتنفيذ."],
      ["03", "حسّن ثم اختبر", "نُحسّن مجموعة صفحات ذات أولوية، نراجع ما يظهر وما يتحول، ثم نوسع العمل وفق البيانات بدل التخمين."],
    ],
    articlesLabel: "أدلة مرتبطة",
    articlesTitle: "مقالات عملية عن SEO المتاجر",
    articles: [
      ["SEO صفحات الفئات في المتاجر الإلكترونية", "/blog/ecommerce-category-page-seo-ar", "كيف تبني صفحة فئة تخدم التصفح والنية الشرائية بدل أن تكون قائمة منتجات بلا سياق."],
      ["SEO صفحات المنتجات", "/blog/ecommerce-product-page-seo-ar", "عناصر الصفحة التي تساعد العميل ومحرك البحث على فهم المنتج ومقارنته واتخاذ الخطوة التالية."],
      ["هندسة وبنية المتجر الإلكتروني", "/blog/ecommerce-site-architecture-ar", "طريقة تصميم التسلسل بين الصفحة الرئيسية والفئات والفئات الفرعية والمنتجات."],
      ["التنقل بالفلاتر وFaceted Navigation", "/blog/ecommerce-faceted-navigation-ar", "متى تكون الفلاتر مفيدة للمستخدم ومتى تنتج URLs منخفضة القيمة أو مكررة."],
      ["Product Schema للمتاجر", "/blog/ecommerce-product-schema-ar", "فهم الفرق بين Product snippets وMerchant listings وربط البيانات بالمعلومات الظاهرة."],
      ["المراجعة التقنية للمتجر", "/blog/ecommerce-technical-audit-ar", "قائمة عملية لفحص الزحف والفهرسة والأداء والروابط والصفحات التجارية المهمة."],
    ],
    servicesLabel: "الخدمات المرتبطة",
    servicesTitle: "نبدأ من المشكلة التجارية لا من قائمة أدوات",
    services: [
      ["E-commerce SEO & Growth", "/ar/services/ecommerce-seo-growth", "خطة شاملة للبنية والمنتجات والفئات والمحتوى والقياس لمتاجر التجارة الإلكترونية."],
      ["Technical SEO Audits", "/ar/services/technical-seo-audits", "تحديد عوائق الزحف والفهرسة والأداء والنسخ المكررة قبل توسيع المحتوى."],
      ["Content SEO & Copywriting", "/ar/services/content-seo-copywriting", "محتوى صفحات ومقالات يساعد العميل على الفهم والمقارنة ويخدم المرحلة التالية من الرحلة."],
    ],
    faqLabel: "أسئلة شائعة",
    faqTitle: "أسئلة عن SEO التجارة الإلكترونية",
    faqs: [
      ["هل أحتاج إلى تحسين كل منتج في المتجر؟", "ابدأ بالمنتجات والفئات التي لديها طلب أو هامش أو أولوية تجارية واضحة. المنتجات المتشابهة جدًا أو غير المتاحة قد تحتاج إلى سياسة فهرسة مختلفة، وليس من المفيد التعامل مع كل URL بالطريقة نفسها."],
      ["هل يجب فهرسة كل صفحات الفلاتر؟", "لا. اجعل صفحات الفلاتر قابلة للفهرسة عندما تستهدف نية مستقلة ولها قيمة حقيقية، وراجع الصفحات المكررة أو منخفضة القيمة باستخدام canonical أو noindex وفق الهدف التقني، مع عدم إنشاء قواعد عشوائية."],
      ["ما الفرق بين Product Schema وMerchant listings؟", "Product structured data يساعد على وصف المنتج. صفحات البيع المباشر قد تكون مناسبة لمتطلبات Merchant listings بمعلومات مثل السعر والتوفر والشحن والإرجاع، بشرط أن تطابق البيانات المنظمة ما هو ظاهر فعليًا."],
      ["هل يمكن أن يرفع SEO مبيعات المتجر فورًا؟", "لا يوجد توقيت أو ترتيب مضمون. SEO يحسن قابلية الاكتشاف والملاءمة والثقة، لكن المبيعات تتأثر أيضًا بالسعر والمخزون وتجربة الدفع والعروض والطلب والقنوات الأخرى. لذلك نقيس مراحل متعددة بدل وعد واحد."],
      ["كيف أتعامل مع المنتجات غير المتاحة؟", "القرار يعتمد على الحالة: منتج سيعود قريبًا، منتج توقف نهائيًا، أو URL له بديل. راجع إشارات الصفحة والروابط والبدائل وإشارات الفهرسة بدل حذف صفحات لها طلب أو روابط دون خطة."],
      ["هل تعمل الاستراتيجية بالعربي والإنجليزي؟", "نعم، مع صفحات وتجارب منفصلة لكل لغة، وmetadata وروابط داخلية مناسبة للجمهور، وhreflang متبادل فقط عندما تكون النسختان موجودتين ومتكافئتين في الغرض."],
    ],
    nextLabel: "الخطوة التالية",
    nextTitle: "حوّل كتالوجك إلى مسار بحث وشراء أوضح",
    nextBody: "أرسل رابط المتجر، السوق المستهدف، أهم الفئات، والمنصة المستخدمة. نبدأ بتحديد ما يمنع الصفحات المهمة من الظهور أو التحول، ثم نرتب الإصلاحات حسب أثرها المتوقع وقابلية تنفيذها.",
    emailSubject: "E-commerce SEO strategy",
    footer: "SEO · Digital Marketing · AI Growth · E-commerce",
  },
  en: {
    lang: "en" as const,
    dir: "ltr",
    home: "/",
    blog: "/blog/en",
    other: "/ar/ecommerce-seo",
    serviceBase: "/services",
    title: "Ecommerce SEO: Stronger Architecture, Qualified Visibility & Measurable Growth | Amr Elbusaily",
    description: "An ecommerce SEO hub covering category and product architecture, crawlability, content, product structured data, international stores, and measurement.",
    ogTitle: "Ecommerce SEO | Amr Elbusaily",
    ogDescription: "A practical guide to improving an online store from site structure and category pages to product content, structured data, and measurement.",
    eyebrow: "E-COMMERCE SEO · ORGANIC GROWTH",
    h1: "Ecommerce SEO starts with\nthe page your customer needs to find.",
    intro: "A practical guide to building an online store that search engines can understand and customers can use, connecting categories, products, and content to buying intent and measurable outcomes.",
    primaryCta: "Request a store review",
    secondaryCta: "Ecommerce SEO services",
    directLabel: "The short answer",
    directTitle: "What is ecommerce SEO?",
    directBody: "Ecommerce SEO improves technical architecture, navigation, category pages, product pages, content, and commercial data so search engines can discover important URLs and shoppers can move from discovery to comparison and purchase. It does not guarantee rankings or sales; it builds a system that can be found, measured, and improved.",
    pillarsLabel: "The framework",
    pillarsTitle: "Six pillars that make store SEO actionable",
    pillars: [
      ["01", "Category and product architecture", "Organize taxonomy and internal links so important pages are reachable from the menu to category, subcategory, and product without relying only on site search."],
      ["02", "Crawlability and indexation", "Review canonicals, robots rules, sitemaps, pagination, facets, and unavailable products while separating useful search URLs from duplicates."],
      ["03", "Category and product pages", "Write titles, descriptions, and supporting content that explain choice, answer objections, and show real information such as price, availability, and sizing when applicable."],
      ["04", "Structured data", "Use BreadcrumbList and Product or merchant listing markup on product pages only when it matches visible information, with Organization markup where it accurately represents the business."],
      ["05", "Content and demand", "Connect buying guides, comparisons, and questions to relevant category and product pages instead of publishing generic articles with no useful next step."],
      ["06", "Measurement and conversion", "Track impressions, clicks, visits, add-to-cart, purchase, or enquiry signals, then separate SEO impact from other channels before making decisions."],
    ],
    processLabel: "The process",
    processTitle: "From diagnosis to stronger commercial pages",
    process: [
      ["01", "Understand catalog and intent", "Map markets, languages, categories, products, margins, and search situations that deserve a dedicated page."],
      ["02", "Set priorities", "Combine technical evidence with demand and commercial opportunity to create an executable page and internal-linking map."],
      ["03", "Improve and validate", "Optimize a priority set of pages, review visibility and conversion signals, and expand from evidence rather than assumptions."],
    ],
    articlesLabel: "Related guides",
    articlesTitle: "Practical ecommerce SEO articles",
    articles: [
      ["Ecommerce category page SEO", "/blog/ecommerce-category-page-seo-en", "How to build category pages that serve browsing and buying intent instead of becoming context-free product lists."],
      ["Ecommerce product page SEO", "/blog/ecommerce-product-page-seo-en", "Page elements that help shoppers and search engines understand, compare, and act on a product."],
      ["Ecommerce site architecture", "/blog/ecommerce-site-architecture-en", "How to design the relationship between the homepage, categories, subcategories, and products."],
      ["Faceted navigation and SEO", "/blog/ecommerce-faceted-navigation-en", "When filters help shoppers and when they create low-value or duplicate URLs."],
      ["Product structured data for ecommerce", "/blog/ecommerce-product-schema-en", "The difference between Product snippets and merchant listings, and why markup must match visible data."],
      ["Ecommerce technical SEO audit", "/blog/ecommerce-technical-audit-en", "A practical review of crawlability, indexation, performance, links, and priority commercial pages."],
    ],
    servicesLabel: "Related services",
    servicesTitle: "Start with the commercial problem, not a tool checklist",
    services: [
      ["E-commerce SEO & Growth", "/services/ecommerce-seo-growth", "A full framework for architecture, products, categories, content, and measurement for ecommerce businesses."],
      ["Technical SEO Audits", "/services/technical-seo-audits", "Find crawl, indexation, performance, and duplication barriers before scaling content."],
      ["Content SEO & Copywriting", "/services/content-seo-copywriting", "Page and editorial content that helps customers understand and compare while serving the next step."],
    ],
    faqLabel: "FAQ",
    faqTitle: "Ecommerce SEO questions",
    faqs: [
      ["Do I need to optimize every product in the store?", "Start with products and categories that have clear demand, margin, or commercial priority. Very similar or unavailable products may need a different indexation policy; every URL should not be treated the same way."],
      ["Should every filter page be indexed?", "No. Index filter pages when they target distinct intent and provide real value. Review duplicate or low-value combinations with canonical or noindex according to the technical objective, rather than applying arbitrary rules."],
      ["What is the difference between Product structured data and merchant listings?", "Product structured data describes product information. Pages where customers can buy may fit merchant listing requirements with details such as price, availability, shipping, and returns, provided the markup matches what users can see."],
      ["Can ecommerce SEO increase sales immediately?", "There is no guaranteed ranking or timeline. SEO improves discoverability, relevance, and clarity, while sales also depend on price, inventory, checkout, offers, demand, and other channels. Measure multiple stages instead of promising one outcome."],
      ["How should I handle unavailable products?", "The right decision depends on whether the product will return, has been discontinued, or has a suitable replacement. Review page signals, links, alternatives, and indexation rather than deleting a page with demand or links without a plan."],
      ["Does this strategy work in Arabic and English?", "Yes, with separate language experiences, audience-appropriate metadata and internal links, and reciprocal hreflang only when both pages exist and serve equivalent purposes."],
    ],
    nextLabel: "Next step",
    nextTitle: "Turn your catalog into a clearer search-to-purchase path",
    nextBody: "Share your store URL, target market, priority categories, and platform. We start by identifying what prevents important pages from being discovered or converting, then prioritize fixes by likely impact and feasibility.",
    emailSubject: "Ecommerce SEO strategy",
    footer: "SEO · Digital Marketing · AI Growth · E-commerce",
  },
} as const;

function ActionLink({ href, children, primary = false }: { href: string; children: ReactNode; primary?: boolean }) {
  return <a href={href} className={primary ? "rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground glow-primary" : "rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium hover:border-primary hover:text-primary"}>{children}</a>;
}

function makeSchema(data: (typeof content)[Lang]) {
  const url = `${base}${data.lang === "ar" ? "/ar/ecommerce-seo" : "/ecommerce-seo"}`;
  const items = data.articles.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item[0], url: `${base}${item[1]}` }));
  const services = data.services.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item[0], url: `${base}${item[1]}` }));
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "CollectionPage", "@id": `${url}#webpage`, url, name: data.ogTitle, description: data.description, inLanguage: data.lang, isPartOf: { "@id": `${base}/#website` }, about: { "@id": `${base}/#person` } },
      { "@type": "Person", "@id": `${base}/#person`, name: data.lang === "ar" ? "عمرو البصيلي" : "Amr Elbusaily", alternateName: data.lang === "ar" ? ["Amr Elbusaily", "Amro Elbusaily"] : ["عمرو البصيلي", "Amro Elbusaily"], url: `${base}${data.home}` },
      { "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: data.lang === "ar" ? "الرئيسية" : "Home", item: `${base}${data.home}` }, { "@type": "ListItem", position: 2, name: data.lang === "ar" ? "SEO التجارة الإلكترونية" : "Ecommerce SEO", item: url }] },
      { "@type": "ItemList", "@id": `${url}#articles`, name: data.articlesLabel, itemListElement: items },
      { "@type": "ItemList", "@id": `${url}#services`, name: data.servicesLabel, itemListElement: services },
      { "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: data.faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
    ],
  };
}

export function ecommerceSeoHubHead(lang: Lang) {
  const data = content[lang];
  const url = `${base}${lang === "ar" ? "/ar/ecommerce-seo" : "/ecommerce-seo"}`;
  const alternate = lang === "ar" ? `${base}/ecommerce-seo` : `${base}/ar/ecommerce-seo`;
  return {
    meta: [
      { title: data.title },
      { name: "description", content: data.description },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { property: "og:title", content: data.ogTitle },
      { property: "og:description", content: data.ogDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:locale", content: lang === "ar" ? "ar_EG" : "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "ar", href: `${base}/ar/ecommerce-seo` },
      { rel: "alternate", hrefLang: "en", href: `${base}/ecommerce-seo` },
      { rel: "alternate", hrefLang: "x-default", href: alternate },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(makeSchema(data)) }],
  };
}

export function EcommerceSeoHubPage({ lang }: { lang: Lang }) {
  const data = content[lang];
  const isArabic = lang === "ar";
  return (
    <div className="min-h-screen" dir={data.dir} lang={data.lang}>
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href={data.home} className="flex items-center gap-2 font-display font-semibold"><span className="grid h-8 w-8 place-items-center rounded-md bg-primary font-mono text-sm text-primary-foreground">AE</span><span>{isArabic ? "عمرو البصيلي" : "Amr Elbusaily"}</span></a>
          <nav className="flex items-center gap-4 text-sm text-muted-foreground"><a href={data.blog} className="hover:text-foreground">{isArabic ? "المقالات" : "Articles"}</a><a href={`${data.serviceBase}/ecommerce-seo-growth`} className="hover:text-foreground">{isArabic ? "خدمة E-commerce SEO" : "E-commerce SEO service"}</a><a href={data.other} className="font-mono text-xs hover:text-foreground">{isArabic ? "EN" : "AR"}</a></nav>
        </div>
      </header>
      <main>
        <section className="relative overflow-hidden border-b border-border"><div className="absolute inset-0 grid-bg" aria-hidden="true" /><div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28"><div className="max-w-4xl"><div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{data.eyebrow}</div><h1 className="mt-5 whitespace-pre-line text-4xl font-semibold leading-tight md:text-6xl">{data.h1}</h1><p className="mt-6 max-w-3xl text-lg leading-9 text-muted-foreground">{data.intro}</p><div className="mt-8 flex flex-wrap gap-3"><ActionLink href={`mailto:amreelbasily@gmail.com?subject=${encodeURIComponent(data.emailSubject)}`} primary>{data.primaryCta}</ActionLink><ActionLink href={`${data.serviceBase}/ecommerce-seo-growth`}>{data.secondaryCta}</ActionLink></div></div></div></section>
        <section className="mx-auto max-w-6xl px-6 py-20"><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"><div><div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{data.directLabel}</div><h2 className="mt-3 text-3xl font-semibold md:text-4xl">{data.directTitle}</h2></div><p className="text-xl leading-10 text-muted-foreground">{data.directBody}</p></div></section>
        <section className="border-y border-border bg-surface/30"><div className="mx-auto max-w-6xl px-6 py-20"><div className="max-w-3xl"><div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{data.pillarsLabel}</div><h2 className="mt-3 text-3xl font-semibold md:text-4xl">{data.pillarsTitle}</h2></div><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{data.pillars.map(([number, title, body]) => <article key={number} className="rounded-2xl border border-border bg-surface p-6"><div className="font-mono text-sm text-primary">{number}</div><h3 className="mt-5 text-xl font-semibold">{title}</h3><p className="mt-3 leading-8 text-muted-foreground">{body}</p></article>)}</div></div></section>
        <section className="mx-auto max-w-6xl px-6 py-20"><div className="max-w-3xl"><div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{data.processLabel}</div><h2 className="mt-3 text-3xl font-semibold md:text-4xl">{data.processTitle}</h2></div><div className="mt-10 grid gap-5 md:grid-cols-3">{data.process.map(([number, title, body]) => <article key={number} className="rounded-2xl border border-border p-6"><div className="font-mono text-sm text-primary">{number}</div><h3 className="mt-5 text-xl font-semibold">{title}</h3><p className="mt-3 leading-8 text-muted-foreground">{body}</p></article>)}</div></section>
        <section className="border-y border-border bg-surface/30"><div className="mx-auto max-w-6xl px-6 py-20"><div className="max-w-3xl"><div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{data.articlesLabel}</div><h2 className="mt-3 text-3xl font-semibold md:text-4xl">{data.articlesTitle}</h2></div><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{data.articles.map(([label, href, body]) => <a key={href} href={href} className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary"><h3 className="text-xl font-semibold">{label}</h3><p className="mt-3 leading-8 text-muted-foreground">{body}</p><span className="mt-5 inline-block text-sm text-primary">{isArabic ? "اقرأ الدليل ←" : "Read the guide →"}</span></a>)}</div></div></section>
        <section className="mx-auto max-w-6xl px-6 py-20"><div className="max-w-3xl"><div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{data.servicesLabel}</div><h2 className="mt-3 text-3xl font-semibold md:text-4xl">{data.servicesTitle}</h2></div><div className="mt-10 grid gap-5 md:grid-cols-3">{data.services.map(([label, href, body], index) => <a key={href} href={href} className={index === 0 ? "rounded-2xl border border-primary/30 bg-primary/5 p-8" : "rounded-2xl border border-border bg-surface p-8"}><h3 className="text-2xl font-semibold">{label}</h3><p className="mt-4 leading-8 text-muted-foreground">{body}</p></a>)}</div></section>
        <section className="border-y border-border bg-surface/30"><div className="mx-auto max-w-6xl px-6 py-20"><div className="max-w-3xl"><div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{data.faqLabel}</div><h2 className="mt-3 text-3xl font-semibold md:text-4xl">{data.faqTitle}</h2></div><div className="mt-10 grid gap-4 md:grid-cols-2">{data.faqs.map(([q, a]) => <details key={q} className="group rounded-xl border border-border bg-surface p-6"><summary className="cursor-pointer list-none pr-6 text-lg font-semibold marker:hidden">{q}</summary><p className="mt-4 leading-8 text-muted-foreground">{a}</p></details>)}</div></div></section>
        <section><div className="mx-auto max-w-6xl px-6 py-20"><div className="rounded-2xl border border-border bg-surface p-8 md:p-12"><div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{data.nextLabel}</div><h2 className="mt-4 text-3xl font-semibold md:text-4xl">{data.nextTitle}</h2><p className="mt-4 max-w-2xl leading-8 text-muted-foreground">{data.nextBody}</p><div className="mt-7 flex flex-wrap gap-4"><ActionLink href={`mailto:amreelbasily@gmail.com?subject=${encodeURIComponent(data.emailSubject)}`} primary>{data.primaryCta}</ActionLink><ActionLink href={`${data.serviceBase}/ecommerce-seo-growth`}>{data.secondaryCta}</ActionLink><ActionLink href={data.home}>{isArabic ? "الصفحة الرئيسية" : "Homepage"}</ActionLink></div></div></div></section>
      </main>
      <footer className="border-t border-border"><div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 px-6 py-8 text-sm text-muted-foreground"><span>© {new Date().getFullYear()} {isArabic ? "عمرو البصيلي" : "Amr Elbusaily"}</span><span>{data.footer}</span></div></footer>
    </div>
  );
}
