import { Link } from "@tanstack/react-router";

const base = "https://amrelbusaily.vercel.app";

type GrowthMarketingPageProps = { lang: "ar" | "en" };

export function GrowthMarketingPage({ lang }: GrowthMarketingPageProps) {
  const isArabic = lang === "ar";
  const copy = isArabic
    ? {
        home: "الرئيسية",
        service: "Growth Marketing",
        english: "English",
        breadcrumb: "خدمة Growth Marketing",
        eyebrow: "Growth marketing · Services & B2B",
        title: "كبّر شركتك بنظام نمو يربط التسويق بالمبيعات.",
        intro: "Growth Marketing لشركات الخدمات وB2B مش مجرد حملات أو زيارات. هو نظام يربط توليد الطلب، المحتوى، SEO، الـfunnel، تأهيل العملاء، الـCRM، ودورة حياة العميل بقياس واضح.",
        primary: "اطلب خطة نمو",
        secondary: "اقرأ المقالات",
        sectionEyebrow: "ما الذي نبنيه؟",
        sectionTitle: "من أول سؤال العميل لحد الإيراد.",
        cards: [
          ["Demand generation", "نحدد مصادر الطلب والرسائل والموضوعات التي تجذب العملاء المناسبين، ثم نربطها بصفحات وخطوات قابلة للقياس."],
          ["Funnel & lifecycle", "نبني مسارًا واضحًا من الوعي إلى المقارنة ثم الطلب، مع رسائل وعمليات متابعة تناسب دورة شراء B2B الطويلة."],
          ["Sales alignment", "نوحّد SEO والمحتوى والتسويق والمبيعات حول تعريف العميل المؤهل، الـhandoff، والبيانات التي تساعد على قرار أفضل."],
          ["Measurement", "نتابع جودة الـleads، معدل التحويل، CAC، LTV، سرعة إغلاق الفرص، ومصادر الطلب بدل الاعتماد على عدد الزيارات فقط."],
        ],
        fitEyebrow: "مناسب لـ",
        fitTitle: "شركات الخدمات والفرق التي تبيع حلولًا معقدة.",
        fitText: "الخدمة مناسبة لشركات الاستشارات والوكالات، SaaS، الخدمات المهنية، التعليم، الرعاية الصحية، العقارات، وموردي B2B الذين يحتاجون طلبًا مؤهلًا وليس traffic فقط.",
        faqEyebrow: "أسئلة شائعة",
        faqTitle: "إجابات قبل بداية التعاون.",
        faq: [
          ["ما الفرق بين Growth Marketing وDigital Marketing؟", "Growth Marketing يركز على نظام النمو كاملًا: الطلب، التحويل، الاحتفاظ، القياس والتجارب. Digital Marketing هو المظلة الأوسع للقنوات والتكتيكات."],
          ["هل Growth Marketing مناسب لشركات الخدمات وB2B؟", "نعم عندما تكون دورة البيع أطول أو تحتاج الشركة إلى عملاء مؤهلين. نبدأ بفهم العميل والـfunnel ونقاط التسليم بين التسويق والمبيعات."],
          ["هل تبدأون بالإعلانات؟", "ليس بالضرورة. نحدد أولًا العرض والرسالة والصفحات والقياس، ثم نختار مزيج SEO والمحتوى والبريد والقنوات المدفوعة حسب الهدف والاقتصاديات."],
          ["كيف نقيس نجاح الخطة؟", "بجودة العملاء والطلبات ومعدل التحويل وCAC وLTV وسرعة انتقال الفرصة، مع استخدام الزيارات والانطباعات كمؤشرات مساعدة لا كنتيجة وحيدة."],
        ],
        ctaTitle: "عندك خدمة قوية لكن الطلب غير منتظم؟",
        ctaText: "نبدأ بمراجعة الوضع الحالي، ثم نحدد أكبر فجوة بين الظهور والطلب والمبيعات ونحوّلها إلى خطة تنفيذ.",
        cta: "ابدأ بمراجعة Growth Marketing",
      }
    : {
        home: "Home",
        service: "Growth Marketing",
        english: "العربية",
        breadcrumb: "Growth Marketing service",
        eyebrow: "Growth marketing · Services & B2B",
        title: "Grow the company with a system that connects marketing to sales.",
        intro: "Growth Marketing for service companies and B2B teams is more than campaigns or visits. It connects demand generation, content, SEO, funnels, lead qualification, CRM, lifecycle marketing and measurement.",
        primary: "Request a growth plan",
        secondary: "Explore the articles",
        sectionEyebrow: "What we build",
        sectionTitle: "From the first customer question to revenue.",
        cards: [
          ["Demand generation", "Identify the demand sources, messages and topics that attract the right buyers, then connect them to measurable pages and next steps."],
          ["Funnel & lifecycle", "Build a clear path from awareness to comparison to enquiry, with messaging and follow-up that fit longer B2B buying cycles."],
          ["Sales alignment", "Align SEO, content, marketing and sales around qualified-lead definitions, handoffs and data that supports better decisions."],
          ["Measurement", "Track lead quality, conversion rate, CAC, LTV, sales velocity and demand sources instead of relying on traffic volume alone."],
        ],
        fitEyebrow: "Best for",
        fitTitle: "Service companies and teams selling considered solutions.",
        fitText: "This is a fit for consultancies and agencies, SaaS, professional services, education, healthcare, real estate and B2B providers that need qualified demand—not traffic alone.",
        faqEyebrow: "Frequently asked questions",
        faqTitle: "Clear answers before we start.",
        faq: [
          ["How is Growth Marketing different from Digital Marketing?", "Growth Marketing looks at the complete growth system: demand, conversion, retention, measurement and experimentation. Digital Marketing is the broader umbrella for channels and tactics."],
          ["Is Growth Marketing suitable for service companies and B2B?", "Yes, especially when the buying cycle is longer or lead quality matters. We start with the buyer, funnel and marketing-to-sales handoffs."],
          ["Do you start with paid advertising?", "Not necessarily. We first clarify the offer, message, pages and measurement, then choose the right mix of SEO, content, email and paid channels."],
          ["How do you measure success?", "By lead quality, enquiries, conversion rate, CAC, LTV and sales velocity, with visits and impressions used as supporting signals rather than the only outcome."],
        ],
        ctaTitle: "Strong service, inconsistent demand?",
        ctaText: "We review the current system, identify the largest gap between visibility, demand and sales, then turn it into an executable plan.",
        cta: "Start a Growth Marketing review",
      };

  const url = isArabic ? `${base}/ar/growth-marketing` : `${base}/growth-marketing`;
  const alternateUrl = isArabic ? `${base}/growth-marketing` : `${base}/ar/growth-marketing`;

  return (
    <div className="min-h-screen" dir={isArabic ? "rtl" : "ltr"} lang={lang}>
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"><Link to={isArabic ? "/ar" : "/"} className="flex items-center gap-2 font-display font-semibold"><span className="grid h-8 w-8 place-items-center rounded-md bg-primary font-mono text-sm text-primary-foreground">AE</span><span>Amr Elbusaily</span></Link><nav className="flex items-center gap-4 text-sm text-muted-foreground"><Link to={isArabic ? "/ar" : "/"} className="hover:text-foreground">{copy.home}</Link><Link to={isArabic ? "/ar/course" : "/course"} className="hover:text-foreground">SEO Course</Link><Link to={isArabic ? "/course" : "/ar/course"} className="hover:text-foreground">{copy.english}</Link></nav></div>
      </header>
      <main>
        <section className="relative overflow-hidden border-b border-border"><div className="absolute inset-0 grid-bg" aria-hidden="true" /><div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28"><div className="max-w-3xl"><div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{copy.eyebrow}</div><h1 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">{copy.title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{copy.intro}</p><div className="mt-8 flex flex-wrap gap-3"><Link to={isArabic ? "/ar/free-consultation" : "/free-consultation"} className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground glow-primary">{copy.primary}</Link><Link to="/blog" className="rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium hover:border-primary hover:text-primary">{copy.secondary}</Link></div></div></div></section>
        <section className="mx-auto max-w-6xl px-6 py-20"><div className="max-w-2xl"><div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{copy.sectionEyebrow}</div><h2 className="mt-3 text-3xl font-semibold md:text-4xl">{copy.sectionTitle}</h2></div><div className="mt-10 grid gap-5 md:grid-cols-2">{copy.cards.map(([title, text]) => <article key={title} className="rounded-2xl border border-border bg-surface p-6"><h3 className="text-xl font-semibold">{title}</h3><p className="mt-3 leading-8 text-muted-foreground">{text}</p></article>)}</div></section>
        <section className="border-y border-border bg-surface/30"><div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:items-center"><div><div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{copy.fitEyebrow}</div><h2 className="mt-3 text-3xl font-semibold">{copy.fitTitle}</h2></div><p className="text-lg leading-8 text-muted-foreground">{copy.fitText}</p></div></section>
        <section className="mx-auto max-w-3xl px-6 py-20"><div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{copy.faqEyebrow}</div><h2 className="mt-3 text-3xl font-semibold">{copy.faqTitle}</h2><div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-surface">{copy.faq.map(([question, answer]) => <details key={question} className="group p-5"><summary className="cursor-pointer list-none pe-8 font-medium group-open:text-primary">{question}</summary><p className="mt-3 text-sm leading-7 text-muted-foreground">{answer}</p></details>)}</div></section>
        <section className="border-t border-border"><div className="mx-auto max-w-6xl px-6 py-20"><div className="rounded-2xl border border-primary/40 bg-primary/10 p-8 md:p-12"><div className="max-w-2xl"><h2 className="text-3xl font-semibold">{copy.ctaTitle}</h2><p className="mt-4 leading-8 text-muted-foreground">{copy.ctaText}</p><Link to={isArabic ? "/ar/free-consultation" : "/free-consultation"} className="mt-6 inline-flex rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">{copy.cta}</Link></div></div></div></section>
      </main>
      <footer className="border-t border-border"><div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 px-6 py-8 text-sm text-muted-foreground"><span>© {new Date().getFullYear()} Amr Elbusaily</span><span>SEO · Growth Marketing · AI Growth · B2B</span></div></footer>
    </div>
  );
}

export function growthMarketingHead(lang: "ar" | "en") {
  const isArabic = lang === "ar";
  const title = isArabic ? "Growth Marketing لشركات الخدمات وB2B | عمرو البصيلي" : "Growth Marketing for Service Companies & B2B | Amr Elbusaily";
  const description = isArabic ? "خدمة Growth Marketing لشركات الخدمات وB2B: توليد الطلب، الـfunnel، SEO، المحتوى، CRM، الأتمتة وقياس CAC وLTV." : "Growth Marketing for service companies and B2B teams: demand generation, funnels, SEO, content, CRM, automation and CAC/LTV measurement.";
  const url = isArabic ? `${base}/ar/growth-marketing` : `${base}/growth-marketing`;
  const alternateUrl = isArabic ? `${base}/growth-marketing` : `${base}/ar/growth-marketing`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "keywords", content: isArabic ? "Growth Marketing، تسويق B2B، توليد الطلب، نمو شركات الخدمات، استراتيجية Funnel، CRM" : "Growth Marketing, B2B marketing, demand generation, service business growth, funnel strategy, CRM" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:locale", content: isArabic ? "ar_EG" : "en_US" },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: lang, href: url },
      { rel: "alternate", hrefLang: isArabic ? "en" : "ar", href: alternateUrl },
      { rel: "alternate", hrefLang: "x-default", href: alternateUrl },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: title, description, url, serviceType: "Growth Marketing", areaServed: ["Egypt", "Saudi Arabia", "United Arab Emirates", "Kuwait", "Qatar"], provider: { "@type": "Person", name: "Amr Elbusaily", url: `${base}/` }, availableLanguage: ["Arabic", "English"] }) }],
  };
}
