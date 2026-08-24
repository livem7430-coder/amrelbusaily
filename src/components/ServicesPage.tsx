import type { ReactNode } from "react";

type Language = "ar" | "en";
type ServiceItem = { title: string; label: string; description: string; href: string; link: string };
type Copy = {
  title: string;
  description: string;
  eyebrow: string;
  heading: ReactNode;
  intro: string;
  answer: string;
  servicesTitle: string;
  services: ServiceItem[];
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
      title: "خدمات SEO والتسويق الرقمي والنمو | عمرو البصيلي",
      description: "كل خدمات عمرو البصيلي في SEO والتسويق الرقمي وAI Growth والتجارة الإلكترونية وGrowth Marketing لشركات الخدمات وB2B في صفحة واحدة.",
      eyebrow: "SERVICES · SEO · AI · GROWTH · E-COMMERCE",
      heading: <>خدمات متصلة تبني <span className="text-gradient">نموًا قابلًا للقياس.</span></>,
      intro: "بدل التعامل مع SEO والمحتوى والتحليلات والنمو كجزر منفصلة، تجمع هذه الصفحة الخدمات التي تساعد المشروع على الانتقال من الظهور إلى الطلب والعملاء والإيرادات.",
      answer: "أقدم استراتيجية واستشارات SEO، بحث الكلمات، السيو التقني والداخلي والخارجي، Content SEO، International SEO، AI SEO وAEO/GEO، التجارة الإلكترونية، Growth Marketing، B2B demand generation، CRO، Analytics، وMarketing Automation. يتم اختيار المزيج حسب هدف المشروع ومرحلته، وليس شراء كل الخدمات بلا ترتيب.",
      servicesTitle: "كل الخدمات في منظومة واحدة",
      services: [
        { label: "01 · SEO", title: "استراتيجية واستشارات SEO", description: "خطة بحث وتشخيص وتنفيذ تربط الكلمات والصفحات والمحتوى والقياس بالهدف التجاري.", href: "/ar/seo-services", link: "استكشف خدمات SEO ←" },
        { label: "02 · Research", title: "Keyword Research & Strategy", description: "بحث الكلمات، تحليل المنافسين، Search Intent، Keyword Mapping وClustering لبناء خريطة صفحات قابلة للتنفيذ.", href: "/ar/keyword-research", link: "خدمة بحث الكلمات ←" },
        { label: "03 · Technical", title: "Technical SEO & Audits", description: "فحص الزحف والفهرسة والسرعة والروابط والـSchema والـcanonical ومشاكل JavaScript وعمليات النقل.", href: "/ar/seo-services", link: "ابدأ من صفحة SEO ←" },
        { label: "04 · Content", title: "Content SEO & SEO Copywriting", description: "محتوى يجيب عن السؤال مبكرًا، يشرح بعمق، يخدم نية البحث، ويربط القارئ بالصفحة أو الخدمة التالية.", href: "/ar/content-seo", link: "استكشف Content SEO ←" },
        { label: "05 · International", title: "International & Multilingual SEO", description: "توسّع منظم للأسواق واللغات مع Localization وhreflang وبنية دولية دون صفحات مدن مكررة أو ادعاء وجود محلي.", href: "/ar/international-seo", link: "استكشف International SEO ←" },
        { label: "06 · AI Search", title: "AI SEO, AEO & GEO", description: "تحسين قابلية الفهم والإجابة للبحث التقليدي ومحركات الإجابة والأنظمة التوليدية مع الحفاظ على جودة المحتوى.", href: "/ar/seo-geo-eli5", link: "افهم SEO وGEO ←" },
        { label: "07 · E-commerce", title: "E-commerce SEO & Growth", description: "هيكل المتجر، صفحات التصنيفات والمنتجات، Product Schema، التحويل، التحليلات ومسارات الشراء العضوية.", href: "/ar/seo-company", link: "ناقش نمو المتجر ←" },
        { label: "08 · Growth", title: "Growth Marketing", description: "Demand generation، Funnels، CRM، Lifecycle، تأهيل العملاء ومحتوى متوافق مع المبيعات لشركات الخدمات وB2B.", href: "/ar/growth-marketing", link: "استكشف Growth Marketing ←" },
        { label: "09 · Authority", title: "Off-Page SEO & Digital PR", description: "استراتيجية بناء سلطة واكتساب روابط وDigital PR بطريقة مرتبطة بالموضوع والسمعة، لا شراء روابط عشوائية.", href: "/ar/seo-services", link: "راجع منظومة SEO ←" },
        { label: "10 · Local", title: "Local & Mobile SEO", description: "تحسين الظهور المحلي وتجربة الجوال وGoogle Business Profile عندما يكون الموقع أو السوق المحلي جزءًا حقيقيًا من العرض.", href: "/ar/seo-services", link: "استكشف خدمات SEO ←" },
        { label: "11 · Measurement", title: "Analytics, GA4 & Search Console", description: "تقارير تربط الظهور والنقرات والصفحات وجودة الزيارات والاستفسارات بدل الاكتفاء بترتيب كلمة واحدة.", href: "/ar/seo-services", link: "ناقش القياس ←" },
        { label: "12 · Operations", title: "CRO & Marketing Automation", description: "تحسين الخطوة التالية، تنظيم الـleads، وأتمتة عمليات التسويق وn8n عندما تخدم العملية هدفًا واضحًا.", href: "/ar/growth-marketing", link: "ناقش منظومة النمو ←" },
      ],
      processTitle: "كيف نختار نقطة البداية؟",
      process: [
        { number: "01", title: "نفهم العرض والطلب", body: "نحدد الخدمة أو المنتج، العميل الأنسب، السوق، دورة القرار، وماذا يعني النجاح للمشروع." },
        { number: "02", title: "نفحص الأساس الحالي", body: "نراجع الموقع والمحتوى والبيانات والصفحات والقياس قبل اقتراح مزيد من الصفحات أو الأدوات." },
        { number: "03", title: "نرتب الأولويات", body: "نختار أقل مجموعة أعمال قادرة على تحريك الهدف: إصلاح تقني، خريطة كلمات، صفحة خدمة، محتوى، أو مسار تحويل." },
        { number: "04", title: "ننشر ونتعلم", body: "نقيس ما حدث، نوثق القرارات، ونوسع البرنامج عندما تظهر بيانات وقدرة تنفيذ، لا لمجرد زيادة عدد المهام." },
      ],
      fitTitle: "لمن تناسب هذه الخدمات؟",
      fitBody: "تناسب شركات الخدمات وB2B وSaaS والمتاجر والمنتجات الرقمية التي تريد نظامًا متصلًا بين الظهور والمحتوى والتحويل والنمو، مع تنفيذ Remote-first وشفافية حول ما تم قياسه وما لم يتم قياسه.",
      faqTitle: "أسئلة عن الخدمات",
      faq: [
        { q: "هل أحتاج إلى كل الخدمات؟", a: "لا. تبدأ الخطة من عنق الزجاجة والهدف التجاري. قد تحتاج أولًا إلى أوديت أو بحث كلمات أو صفحة خدمة قبل توسيع المحتوى أو الأتمتة." },
        { q: "هل الخدمات مناسبة لأمريكا وأوروبا؟", a: "نعم عندما يكون العرض قابلًا للتقديم هناك. توجد صفحة International SEO للتوسع الدولي، بينما تُختار الصفحات واللغات حسب اختلاف حقيقي وبيانات مناسبة." },
        { q: "هل تضمن الخدمات الصفحة الأولى؟", a: "لا توجد ضمانة مسؤولة لترتيب ثابت. يتم العمل على الملاءمة التقنية والمحتوى والنية والروابط والقياس، مع مراجعة النتائج وتعديل الأولويات." },
        { q: "هل يمكن الجمع بين SEO وAI وGrowth Marketing؟", a: "نعم، عندما تكون العلاقة واضحة: SEO يجلب الطلب، المحتوى يشرحه، AI يساعد في العمليات والفهم، وGrowth Marketing يحسن انتقال الطلب إلى فرصة." },
      ],
      ctaTitle: "اختر الخدمات التي يحتاجها مشروعك فعلًا",
      ctaBody: "شارك الموقع والخدمة والسوق والهدف التجاري. سنحدد نقطة البداية والصفحات والأعمال التي تستحق الأولوية بدل تقديم قائمة عامة بلا ترتيب.",
      cta: "ناقش احتياج مشروعك",
    };
  }
  return {
    title: "SEO, Digital Marketing and Growth Services | Amr Elbusaily",
    description: "Explore Amr Elbusaily’s SEO, digital marketing, AI Growth, e-commerce and Growth Marketing services for service businesses, B2B, SaaS and online brands.",
    eyebrow: "SERVICES · SEO · AI · GROWTH · E-COMMERCE",
    heading: <>Connected services for <span className="text-gradient">measurable growth.</span></>,
    intro: "SEO, content, analytics and growth work better when they are connected. This page brings the full service system together, from search demand to qualified enquiries, customers and revenue.",
    answer: "Services include SEO strategy and consulting, keyword research, technical, on-page and off-page SEO, Content SEO, International SEO, AI SEO and AEO/GEO, e-commerce growth, Growth Marketing, B2B demand generation, CRO, analytics and marketing automation. The right mix depends on the business constraint and commercial goal—not on buying every service at once.",
    servicesTitle: "The full service system",
    services: [
      { label: "01 · SEO", title: "SEO Strategy & Consulting", description: "Research, diagnosis and execution that connect keywords, pages, content and measurement to a commercial goal.", href: "/seo-services", link: "Explore SEO services →" },
      { label: "02 · Research", title: "Keyword Research & Strategy", description: "Keyword research, competitor analysis, search intent, keyword mapping and clustering for an actionable page plan.", href: "/keyword-research", link: "Explore Keyword Research →" },
      { label: "03 · Technical", title: "Technical SEO & Audits", description: "Crawlability, indexing, speed, links, schema, canonical, JavaScript SEO and migration diagnostics.", href: "/seo-services", link: "Start with SEO →" },
      { label: "04 · Content", title: "Content SEO & SEO Copywriting", description: "Content that answers early, explains deeply, matches intent and guides a reader to the next useful page or service.", href: "/content-seo", link: "Explore Content SEO →" },
      { label: "05 · International", title: "International & Multilingual SEO", description: "Structured expansion across languages and markets with localization, hreflang and honest market positioning.", href: "/international-seo", link: "Explore International SEO →" },
      { label: "06 · AI Search", title: "AI SEO, AEO & GEO", description: "Improve how content is understood and answered across search engines, answer engines and generative systems without lowering quality.", href: "/seo-geo-eli5", link: "Explore SEO and GEO →" },
      { label: "07 · E-commerce", title: "E-commerce SEO & Growth", description: "Store architecture, category and product pages, product schema, conversion paths, analytics and organic buying journeys.", href: "/seo-company", link: "Discuss store growth →" },
      { label: "08 · Growth", title: "Growth Marketing", description: "Demand generation, funnels, CRM, lifecycle, lead qualification and sales-aligned content for services and B2B.", href: "/growth-marketing", link: "Explore Growth Marketing →" },
      { label: "09 · Authority", title: "Off-Page SEO & Digital PR", description: "Reputation and link-earning strategies tied to relevance and authority, not random link purchases.", href: "/seo-services", link: "Review the SEO system →" },
      { label: "10 · Local", title: "Local & Mobile SEO", description: "Local visibility, mobile experience and Google Business Profile improvements when local demand is genuinely part of the offer.", href: "/seo-services", link: "Explore SEO services →" },
      { label: "11 · Measurement", title: "Analytics, GA4 & Search Console", description: "Reporting that connects visibility, clicks, pages, visit quality and enquiries instead of one keyword position.", href: "/seo-services", link: "Discuss measurement →" },
      { label: "12 · Operations", title: "CRO & Marketing Automation", description: "Improve the next step, organize leads and automate marketing operations with n8n when the process has a clear purpose.", href: "/growth-marketing", link: "Discuss growth operations →" },
    ],
    processTitle: "How we choose the starting point",
    process: [
      { number: "01", title: "Understand the offer and demand", body: "We clarify the product or service, ideal customer, market, buying cycle and what success means for the business." },
      { number: "02", title: "Review the current foundation", body: "We inspect the site, content, data, pages and measurement before recommending more URLs, tools or campaigns." },
      { number: "03", title: "Prioritize the constraint", body: "We choose the smallest useful set of work: a technical fix, keyword map, service page, content system or conversion path." },
      { number: "04", title: "Launch, measure and learn", body: "We document decisions, read the evidence and expand when capacity and data support it—not simply to increase task volume." },
    ],
    fitTitle: "Who are these services for?",
    fitBody: "They fit service businesses, B2B, SaaS, e-commerce and digital products that need a connected system between visibility, content, conversion and growth, delivered remote-first with clear evidence boundaries.",
    faqTitle: "Questions about the services",
    faq: [
      { q: "Do I need every service?", a: "No. The plan starts with the bottleneck and the commercial goal. You may need an audit, keyword research or a service page before expanding content or automation." },
      { q: "Can these services support the US and Europe?", a: "Yes, when the offer can be delivered there. International SEO handles the expansion question, while pages and languages are chosen around real differences and useful evidence." },
      { q: "Do you guarantee page-one rankings?", a: "No responsible provider can guarantee a fixed ranking. The work improves technical fit, content, intent, links and measurement, then adapts to evidence." },
      { q: "Can SEO, AI and Growth Marketing work together?", a: "Yes, when the connection is clear: SEO captures demand, content explains it, AI can support operations and understanding, and growth work improves the path to an opportunity." },
    ],
    ctaTitle: "Choose the work your business actually needs",
    ctaBody: "Share your website, offer, market and commercial goal. We will identify the starting point and priority pages instead of handing you an unranked list of services.",
    cta: "Discuss your project needs",
  };
}

export function servicesHead(lang: Language) {
  const data = getCopy(lang);
  const url = `${base}/${lang === "ar" ? "ar/services" : "services"}`;
  const alternate = `${base}/${lang === "ar" ? "services" : "ar/services"}`;
  return {
    meta: [
      { title: data.title },
      { name: "description", content: data.description },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { property: "og:title", content: data.title },
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
      { rel: "alternate", hrefLang: "x-default", href: `${base}/services` },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: data.title,
        description: data.description,
        url,
        inLanguage: lang,
        itemListElement: data.services.map((service, index) => ({ "@type": "ListItem", position: index + 1, name: service.title, url: `${base}${service.href}` })),
      }),
    }],
  };
}

export function ServicesPage({ lang }: { lang: Language }) {
  const ar = lang === "ar";
  const data = getCopy(lang);
  return (
    <div className="min-h-screen" dir={ar ? "rtl" : "ltr"} lang={lang}>
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md"><div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"><a href={ar ? "/ar" : "/"} className="flex items-center gap-2 font-display font-semibold"><span className="grid h-8 w-8 place-items-center rounded-md bg-primary font-mono text-sm text-primary-foreground">AE</span><span>Amr Elbusaily</span></a><nav className="flex items-center gap-4 text-sm text-muted-foreground"><a href={ar ? "/blog/ar" : "/blog/en"} className="hover:text-foreground">{ar ? "المقالات" : "Articles"}</a><a href={ar ? "/ar/international-seo" : "/international-seo"} className="hover:text-foreground">International SEO</a><a href={ar ? "/" : "/ar"} className="font-mono text-xs hover:text-foreground">{ar ? "EN" : "AR"}</a></nav></div></header>
      <main>
        <section className="relative overflow-hidden border-b border-border"><div className="absolute inset-0 grid-bg" aria-hidden="true" /><div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28"><div className="max-w-4xl"><div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{data.eyebrow}</div><h1 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">{data.heading}</h1><p className="mt-6 max-w-3xl text-lg leading-9 text-muted-foreground">{data.intro}</p><div className="mt-8 flex flex-wrap gap-3"><a href="mailto:amreelbasily@gmail.com?subject=SEO%20and%20growth%20services" className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground glow-primary">{data.cta}</a><a href={ar ? "/ar/seo-expert" : "/seo-expert"} className="rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium hover:border-primary hover:text-primary">{ar ? "ناقش استراتيجية SEO" : "Discuss SEO strategy"}</a></div></div></div></section>
        <section className="border-b border-border bg-surface/30"><div className="mx-auto max-w-6xl px-6 py-16"><div className="rounded-2xl border border-primary/30 bg-primary/5 p-7 md:p-10"><div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{ar ? "الإجابة المباشرة" : "The direct answer"}</div><p className="mt-4 max-w-4xl text-xl leading-9">{data.answer}</p></div></div></section>
        <section className="mx-auto max-w-6xl px-6 py-20"><div className="max-w-3xl"><div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{ar ? "الخدمات" : "Services"}</div><h2 className="mt-3 text-3xl font-semibold md:text-4xl">{data.servicesTitle}</h2></div><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{data.services.map((service) => <article key={service.title} className="group rounded-2xl border border-border bg-surface p-7 transition hover:-translate-y-0.5 hover:border-primary/50"><div className="font-mono text-xs uppercase tracking-[0.14em] text-primary">{service.label}</div><h3 className="mt-4 text-xl font-semibold">{service.title}</h3><p className="mt-3 leading-8 text-muted-foreground">{service.description}</p><a href={service.href} className="mt-5 inline-block text-sm text-primary hover:underline">{service.link}</a></article>)}</div></section>
        <section className="border-y border-border bg-surface/30"><div className="mx-auto max-w-6xl px-6 py-20"><div className="max-w-3xl"><div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{ar ? "طريقة العمل" : "How it works"}</div><h2 className="mt-3 text-3xl font-semibold md:text-4xl">{data.processTitle}</h2></div><div className="mt-10 grid gap-0 border-y border-border">{data.process.map((step) => <div key={step.number} className="grid gap-4 border-b border-border py-7 last:border-b-0 md:grid-cols-[80px_1fr_1.5fr] md:items-start md:gap-8"><div className="font-mono text-sm text-primary">{step.number}</div><h3 className="text-xl font-semibold">{step.title}</h3><p className="leading-8 text-muted-foreground">{step.body}</p></div>)}</div></div></section>
        <section className="mx-auto max-w-6xl px-6 py-20"><div className="grid gap-6 md:grid-cols-2"><div className="rounded-2xl border border-border bg-surface p-8"><h2 className="text-2xl font-semibold">{data.fitTitle}</h2><p className="mt-4 leading-8 text-muted-foreground">{data.fitBody}</p></div><div className="rounded-2xl border border-border bg-surface p-8"><h2 className="text-2xl font-semibold">{ar ? "الخدمات المرتبطة" : "Connected services"}</h2><p className="mt-4 leading-8 text-muted-foreground">{ar ? "ابدأ من الخدمة الأقرب للمشكلة، ثم استخدم الروابط داخل كل صفحة لبناء منظومة مناسبة بدل تشتيت الجهد." : "Start with the service closest to the constraint, then use the connected pages to build the right system without scattering effort."}</p><div className="mt-5 flex flex-wrap gap-3">{[{ label: ar ? "International SEO" : "International SEO", href: ar ? "/ar/international-seo" : "/international-seo" }, { label: ar ? "Keyword Research" : "Keyword Research", href: ar ? "/ar/keyword-research" : "/keyword-research" }, { label: ar ? "Content SEO" : "Content SEO", href: ar ? "/ar/content-seo" : "/content-seo" }].map((link) => <a key={link.href} href={link.href} className="text-sm text-primary hover:underline">{link.label} →</a>)}</div></div></div></section>
        <section className="border-y border-border bg-surface/30"><div className="mx-auto max-w-6xl px-6 py-20"><div className="max-w-3xl"><div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">FAQ</div><h2 className="mt-3 text-3xl font-semibold md:text-4xl">{data.faqTitle}</h2></div><div className="mt-10 grid gap-4 md:grid-cols-2">{data.faq.map((item) => <details key={item.q} className="group rounded-xl border border-border bg-surface p-6"><summary className="cursor-pointer list-none text-lg font-semibold">{item.q}</summary><p className="mt-4 leading-8 text-muted-foreground">{item.a}</p></details>)}</div></div></section>
        <section className="border-t border-border"><div className="mx-auto max-w-6xl px-6 py-20"><div className="rounded-2xl border border-border bg-surface p-8 md:p-12"><h2 className="text-3xl font-semibold md:text-4xl">{data.ctaTitle}</h2><p className="mt-4 max-w-3xl leading-8 text-muted-foreground">{data.ctaBody}</p><div className="mt-7 flex flex-wrap gap-4"><a href="mailto:amreelbasily@gmail.com?subject=SEO%20and%20growth%20services" className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">{data.cta}</a><a href={ar ? "/ar/seo-services" : "/seo-services"} className="rounded-md border border-border px-5 py-3 text-sm text-muted-foreground hover:border-primary hover:text-primary">{ar ? "SEO services" : "SEO services"}</a><a href={ar ? "/ar/growth-marketing" : "/growth-marketing"} className="rounded-md border border-border px-5 py-3 text-sm text-muted-foreground hover:border-primary hover:text-primary">Growth Marketing</a></div></div></div></section>
      </main>
      <footer className="border-t border-border"><div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 px-6 py-8 text-sm text-muted-foreground"><span>© {new Date().getFullYear()} Amr Elbusaily</span><span>SEO · Digital Marketing · AI Growth · E-commerce</span></div></footer>
    </div>
  );
}
