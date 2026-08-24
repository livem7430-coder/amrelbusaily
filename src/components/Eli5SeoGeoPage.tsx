import { Link } from "@tanstack/react-router";

const base = "https://amrelbusaily.vercel.app";

type Eli5SeoGeoPageProps = { lang: "ar" | "en" };

type Copy = {
  home: string;
  course: string;
  switchLanguage: string;
  breadcrumb: string;
  eyebrow: string;
  title: string;
  intro: string;
  primary: string;
  secondary: string;
  visualTitle: string;
  visualSteps: Array<[string, string, string]>;
  planEyebrow: string;
  planTitle: string;
  plan: Array<[string, string, string]>;
  siteEyebrow: string;
  siteTitle: string;
  siteText: string;
  siteChecks: string[];
  faqEyebrow: string;
  faqTitle: string;
  faq: Array<[string, string]>;
  ctaTitle: string;
  ctaText: string;
  cta: string;
  note: string;
};

const copy: Record<"ar" | "en", Copy> = {
  ar: {
    home: "الرئيسية",
    course: "SEO Course",
    switchLanguage: "English",
    breadcrumb: "شرح SEO وGEO ببساطة",
    eyebrow: "ELI5 · SEO + GEO",
    title: "خلّي موقعك واضحًا لجوجل وللذكاء الاصطناعي.",
    intro: "تخيل أن موقعك محل جميل في شارع كبير. SEO يساعد الناس على العثور عليه، وGEO يساعد محركات الإجابة والذكاء الاصطناعي على فهمه واختيار معلوماته كمصدر موثوق.",
    primary: "طبّق الخطة على موقعي",
    secondary: "اقرأ المقالات",
    visualTitle: "الفكرة في 3 صور ذهنية",
    visualSteps: [
      ["01", "SEO = لافتة واضحة", "نضع اسمك وخدماتك في الأماكن التي يفهمها محرك البحث."],
      ["02", "المحتوى = إجابة مفيدة", "نجيب عن سؤال العميل بسرعة ثم نشرح التفاصيل بأمثلة."],
      ["03", "GEO = مصدر يمكن الوثوق به", "نجعل المعلومات واضحة ومترابطة وسهلة الفهم والاقتباس."],
    ],
    planEyebrow: "الخطة العملية",
    planTitle: "ماذا نفعل في موقع amrelbusaily؟",
    plan: [
      ["01", "نظبط الأساس", "نتأكد أن الصفحات قابلة للزحف والفهرسة، سريعة على الموبايل، لها عناوين واضحة، sitemap وcanonical وبيانات منظمة."],
      ["02", "نبني إجابات", "نربط خدمات SEO وGrowth Marketing وAI Growth وE-commerce بمقالات تجيب عن أسئلة العملاء قبل التواصل."],
      ["03", "نثبت الخبرة", "نوضح من يقدم الخدمة، نعرض نتائج موثقة، نستخدم FAQ، ونربط كل موضوع بصفحة أصلية وCTA مفهوم."],
      ["04", "نقيس ونتعلم", "نراجع Search Console وGA4: ما الذي ظهر؟ ما الذي جلب زيارة؟ وما الذي قرّب العميل من طلب الاستشارة؟"],
    ],
    siteEyebrow: "تطبيق على الموقع",
    siteTitle: "الزائر والروبوت يجب أن يفهما نفس القصة.",
    siteText: "صفحة البداية تقول بوضوح إن عمرو البصيلي يقدم SEO وGrowth Marketing وAI Growth. المدونة تشرح الأسئلة، والكورس يعلم الأساسيات، وصفحات الخدمة تحول الاهتمام إلى خطوة عملية.",
    siteChecks: [
      "الصفحة الرئيسية = من أنت وماذا تقدم؟",
      "صفحات الخدمات = لمن تساعد وكيف؟",
      "المقالات = إجابات وأسئلة مرتبطة بالنية",
      "النتائج = دليل بصري مع سياق واضح",
      "FAQ وSchema = معلومات منظمة وليست حشوًا",
      "الروابط الداخلية = طريق واضح من السؤال إلى الخدمة",
    ],
    faqEyebrow: "أسئلة شائعة",
    faqTitle: "شرح قصير قبل التفاصيل.",
    faq: [
      ["ما هو SEO بطريقة بسيطة؟", "SEO هو ترتيب موقعك ومحتواه بحيث يستطيع محرك البحث فهمه، ثم عرضه للشخص الذي يبحث عن الحل الذي تقدمه."],
      ["ما هو GEO؟", "GEO هو تحسين طريقة تقديم المعلومات حتى تفهمها محركات الإجابة والذكاء الاصطناعي، وتستطيع ربطها بمصدر واضح وموثوق. لا يضمن ذلك الاقتباس أو الظهور دائمًا."],
      ["هل GEO بديل عن SEO؟", "لا. SEO هو الأساس، وGEO طبقة إضافية تهتم بالوضوح والكيانات والإجابات والسياق والثقة."],
      ["ما أول شيء أفعله في موقعي؟", "ابدأ بأوديت تقني، ثم حدد أهم أسئلة العملاء، ثم أنشئ صفحات خدمة ومقالات تجيب عنها مع روابط داخلية وقياس واضح."],
    ],
    ctaTitle: "عايز تعرف موقعك محتاج إيه بالضبط؟",
    ctaText: "ابدأ من الأساس: نراجع قابلية الفهرسة، الرسائل، المحتوى، الـFAQ، الروابط والقياس، ثم نحول الملاحظات إلى خطوات مرتبة.",
    cta: "اطلب مراجعة SEO وGEO",
    note: "هذا شرح تعليمي مبسط مستوحى من منهج ELI5 العام: كلمات قليلة، صور ذهنية كبيرة، وتطبيق عملي. لا ينسخ محتوى المصدر الأصلي.",
  },
  en: {
    home: "Home",
    course: "SEO Course",
    switchLanguage: "العربية",
    breadcrumb: "SEO & GEO explained simply",
    eyebrow: "ELI5 · SEO + GEO",
    title: "Make your website easy for Google and AI to understand.",
    intro: "Imagine your website is a great shop on a very busy street. SEO helps people find the shop. GEO helps answer engines and AI understand the shop and recognize its information as a trustworthy source.",
    primary: "Apply the plan to my site",
    secondary: "Explore the articles",
    visualTitle: "The idea in three simple pictures",
    visualSteps: [
      ["01", "SEO = a clear sign", "Put your name and services where a search engine can understand them."],
      ["02", "Content = a useful answer", "Answer the customer question quickly, then add helpful detail and examples."],
      ["03", "GEO = a source people can trust", "Make information clear, connected and easy for answer engines to understand and cite."],
    ],
    planEyebrow: "The practical plan",
    planTitle: "What do we do on amrelbusaily?",
    plan: [
      ["01", "Fix the foundation", "Make pages crawlable and indexable, mobile-friendly and fast, with clear titles, sitemap, canonical links and structured data."],
      ["02", "Build useful answers", "Connect SEO, Growth Marketing, AI Growth and E-commerce services to articles that answer real buyer questions before contact."],
      ["03", "Show the expertise", "Explain who provides the service, present evidence with context, use FAQs and connect every topic to an original page and clear CTA."],
      ["04", "Measure and learn", "Review Search Console and GA4: what appeared, what earned a visit and what moved a qualified buyer toward an enquiry?"],
    ],
    siteEyebrow: "Applied to this site",
    siteTitle: "The visitor and the robot should understand the same story.",
    siteText: "The homepage says that Amr Elbusaily offers SEO, Growth Marketing and AI Growth. The blog answers questions, the course teaches the foundations and service pages turn interest into a practical next step.",
    siteChecks: [
      "Homepage = who you are and what you offer",
      "Service pages = who you help and how",
      "Articles = answers matched to intent",
      "Results = visual evidence with context",
      "FAQ and Schema = organized information, not filler",
      "Internal links = a clear path from question to service",
    ],
    faqEyebrow: "Frequently asked questions",
    faqTitle: "A short explanation before the details.",
    faq: [
      ["What is SEO in simple terms?", "SEO is organizing a website and its content so a search engine can understand it and show it to someone looking for the solution you offer."],
      ["What is GEO?", "GEO improves how information is presented so answer engines and AI can understand it, connect it to a clear source and use it with context. It does not guarantee citation or visibility."],
      ["Is GEO a replacement for SEO?", "No. SEO is the foundation. GEO adds attention to clarity, entities, direct answers, context and trust."],
      ["What should I do first on my site?", "Start with a technical audit, list the questions your buyers ask, then build service pages and helpful articles with internal links and measurement."],
    ],
    ctaTitle: "Want to know exactly what your site needs?",
    ctaText: "Start with the foundation: review indexability, messaging, content, FAQs, links and measurement, then turn the findings into prioritized steps.",
    cta: "Request an SEO & GEO review",
    note: "This is an original educational explanation adapted from the general ELI5 method: few words, large mental pictures and practical application. It does not copy the original source content.",
  },
};

export function Eli5SeoGeoPage({ lang }: Eli5SeoGeoPageProps) {
  const isArabic = lang === "ar";
  const t = copy[lang];
  const alternate = isArabic ? "/seo-geo-eli5" : "/ar/seo-geo-eli5";
  const consultation = isArabic ? "/ar/free-consultation" : "/free-consultation";

  return (
    <div className="min-h-screen" dir={isArabic ? "rtl" : "ltr"} lang={lang}>
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <Link to={isArabic ? "/ar" : "/"} className="flex items-center gap-2 font-display font-semibold"><span className="grid h-8 w-8 place-items-center rounded-md bg-primary font-mono text-sm text-primary-foreground">AE</span><span>Amr Elbusaily</span></Link>
          <nav className="flex items-center gap-4 text-sm text-muted-foreground"><Link to={isArabic ? "/ar" : "/"} className="hover:text-foreground">{t.home}</Link><Link to={isArabic ? "/ar/course" : "/course"} className="hover:text-foreground">{t.course}</Link><Link to={alternate} className="hover:text-foreground">{t.switchLanguage}</Link></nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-border"><div className="absolute inset-0 grid-bg" aria-hidden="true" /><div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28"><div className="max-w-3xl"><div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{t.eyebrow}</div><div className="mt-4 text-sm text-muted-foreground">{t.breadcrumb}</div><h1 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">{t.title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{t.intro}</p><div className="mt-8 flex flex-wrap gap-3"><Link to={consultation} className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground glow-primary">{t.primary}</Link><Link to="/blog" className="rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium hover:border-primary hover:text-primary">{t.secondary}</Link></div></div></div></section>

        <section className="mx-auto max-w-6xl px-6 py-20"><div className="max-w-2xl"><div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">ELI5</div><h2 className="mt-3 text-3xl font-semibold md:text-4xl">{t.visualTitle}</h2></div><div className="mt-10 grid gap-5 md:grid-cols-3">{t.visualSteps.map(([number, title, text]) => <article key={number} className="relative overflow-hidden rounded-2xl border border-border bg-surface p-7"><div className="text-6xl font-semibold tracking-tight text-primary/30">{number}</div><h3 className="mt-5 text-xl font-semibold">{title}</h3><p className="mt-3 leading-8 text-muted-foreground">{text}</p></article>)}</div></section>

        <section className="border-y border-border bg-surface/30"><div className="mx-auto max-w-6xl px-6 py-20"><div className="max-w-2xl"><div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{t.planEyebrow}</div><h2 className="mt-3 text-3xl font-semibold md:text-4xl">{t.planTitle}</h2></div><div className="mt-10 grid gap-5 md:grid-cols-2">{t.plan.map(([number, title, text]) => <article key={number} className="rounded-2xl border border-border bg-background p-6"><div className="font-mono text-sm text-primary">{number}</div><h3 className="mt-3 text-xl font-semibold">{title}</h3><p className="mt-3 leading-8 text-muted-foreground">{text}</p></article>)}</div></div></section>

        <section className="mx-auto max-w-6xl px-6 py-20"><div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-start"><div><div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{t.siteEyebrow}</div><h2 className="mt-3 text-3xl font-semibold md:text-4xl">{t.siteTitle}</h2><p className="mt-5 leading-8 text-muted-foreground">{t.siteText}</p></div><div className="grid gap-3 sm:grid-cols-2">{t.siteChecks.map((check, index) => <div key={check} className="flex gap-3 rounded-xl border border-border bg-surface p-5"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary/15 font-mono text-xs text-primary">{index + 1}</span><span className="text-sm leading-7">{check}</span></div>)}</div></div></section>

        <section className="mx-auto max-w-3xl px-6 py-20"><div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{t.faqEyebrow}</div><h2 className="mt-3 text-3xl font-semibold">{t.faqTitle}</h2><div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-surface">{t.faq.map(([question, answer]) => <details key={question} className="group p-5"><summary className="cursor-pointer list-none pe-8 font-medium group-open:text-primary">{question}</summary><p className="mt-3 text-sm leading-7 text-muted-foreground">{answer}</p></details>)}</div></section>

        <section className="border-t border-border"><div className="mx-auto max-w-6xl px-6 py-20"><div className="rounded-2xl border border-primary/40 bg-primary/10 p-8 md:p-12"><div className="max-w-2xl"><h2 className="text-3xl font-semibold">{t.ctaTitle}</h2><p className="mt-4 leading-8 text-muted-foreground">{t.ctaText}</p><Link to={consultation} className="mt-6 inline-flex rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">{t.cta}</Link></div></div><p className="mt-6 text-xs leading-6 text-muted-foreground">{t.note}</p></div></section>
      </main>

      <footer className="border-t border-border"><div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 px-6 py-8 text-sm text-muted-foreground"><span>© {new Date().getFullYear()} Amr Elbusaily</span><span>SEO · GEO · AEO · AI Growth</span></div></footer>
    </div>
  );
}

export function eli5SeoGeoHead(lang: "ar" | "en") {
  const isArabic = lang === "ar";
  const url = isArabic ? `${base}/ar/seo-geo-eli5` : `${base}/seo-geo-eli5`;
  const alternate = isArabic ? `${base}/seo-geo-eli5` : `${base}/ar/seo-geo-eli5`;
  const title = isArabic ? "شرح SEO وGEO ببساطة | عمرو البصيلي" : "SEO & GEO Explained Simply | Amr Elbusaily";
  const description = isArabic ? "شرح مبسط بأسلوب ELI5 لكيفية تحسين SEO وGEO لموقع amrelbusaily، مع خطة عملية للفهرسة والمحتوى وFAQ والثقة." : "An ELI5-style guide to improving SEO and GEO for amrelbusaily, with a practical plan for indexability, content, FAQs, trust and measurement.";
  const faq = copy[lang].faq.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } }));
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "keywords", content: isArabic ? "شرح SEO، شرح GEO، تحسين محركات البحث، تحسين الظهور في الذكاء الاصطناعي، ELI5 SEO" : "SEO explained simply, GEO explained, search engine optimization, generative engine optimization, ELI5 SEO" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: url },
      { property: "og:locale", content: isArabic ? "ar_EG" : "en_US" },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: lang, href: url },
      { rel: "alternate", hrefLang: isArabic ? "en" : "ar", href: alternate },
      { rel: "alternate", hrefLang: "x-default", href: alternate },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@graph": [{ "@type": "Article", headline: title, description, url, inLanguage: lang, author: { "@type": "Person", name: "Amr Elbusaily", url: `${base}/` }, publisher: { "@type": "Person", name: "Amr Elbusaily" } }, { "@type": "FAQPage", mainEntity: faq }] }) }],
  };
}
