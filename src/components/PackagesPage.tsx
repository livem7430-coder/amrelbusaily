import type { ReactNode } from "react";
import { Check, Search, Megaphone, Rocket } from "lucide-react";

const base = "https://amrelbusaily.vercel.app";
type Lang = "ar" | "en";

type PackageTier = {
  icon: "search" | "megaphone" | "rocket";
  name: string;
  tag: string;
  priceSar: string;
  priceEgp: string;
  priceNote: string;
  description: string;
  fit: string;
  includes: string[];
  featured?: boolean;
  cta: string;
};

type Faq = { q: string; a: string };

const content = {
  ar: {
    lang: "ar" as const,
    dir: "rtl",
    home: "/ar",
    other: "/packages",
    blog: "/blog/ar",
    services: "/ar/services",
    offers: "/ar/offers",
    packagesLabel: "الباقات",
    title: "باقاتي — باقات SEO والإعلانات والنمو بأسعار واضحة | عمرو البصيلي",
    description: "باقات شهرية واضحة السعر بالريال السعودي والجنيه المصري: تأسيس SEO، إدارة إعلانات Google وMeta، وباقة نمو شاملة تشمل AEO/GEO والمحتوى وتحسين التحويل. ابدأ من 1,500 ريال أو 15,000 جنيه.",
    ogTitle: "باقاتي — باقات SEO والإعلانات والنمو",
    ogDescription: "ثلاث باقات شهرية بأسعار واضحة بالريال والجنيه: تأسيس SEO، السيو والإعلانات المدفوعة، والنمو الشامل. اختر الباقة المناسبة لمرحلة مشروعك.",
    eyebrow: "PACKAGES · باقات العمل",
    h1: "باقاتي.\nأسعار واضحة، وشغل أوضح.",
    intro: "ثلاث باقات شهرية تغطي ما أعمل عليه فعلًا كل يوم: السيو، الإعلانات المدفوعة على Google وMeta، وتسويق المتاجر الإلكترونية. كل باقة مسمّاة على اسم الشغل اللي فيها، والسعر معلن بالريال السعودي والجنيه المصري من غير مفاجآت.",
    currencyNote: "الأسعار شهرية — بالريال السعودي أو ما يعادلها بالجنيه المصري",
    heroPrimaryCta: "اختار باقتك",
    heroSecondaryCta: "استشارة مجانية قبل ما تختار",
    tiersLabel: "الباقات الثلاث",
    tiersTitle: "اختار على قد مرحلة مشروعك — مش على قد الضغط عليك",
    tiersSubtitle: "كل باقة تبني على اللي قبلها. لو محتار، الباقة الوسطى هي اللي بيختارها أغلب العملاء.",
    mostPopular: "الأكثر طلبًا",
    perMonth: "شهريًا",
    sarLabel: "ريال سعودي",
    egpEquivalent: "أو ما يعادلها",
    egpLabel: "جنيه مصري",
    bestFor: "مناسبة لـ",
    whatsIncluded: "اللي بتحصل عليه",
    startNow: "ابدأ بالباقة دي",
    tiers: [
      {
        icon: "search",
        name: "باقة تأسيس السيو",
        tag: "SEO Foundation",
        priceSar: "1,500",
        priceEgp: "15,000",
        priceNote: "يبدأ من",
        description: "بناء الأساس الصح: تدقيق تقني، بحث كلمات، وتحسين الصفحات اللي تستاهل تظهر الأول.",
        fit: "المواقع والمتاجر اللي لسه بتبدأ، أو اللي عندها محتوى كتير من غير ترتيب يستاهله.",
        includes: [
          "تدقيق تقني شامل للموقع (زحف، فهرسة، سرعة)",
          "بحث كلمات مفتاحية وخريطة صفحات بنية الشراء",
          "تحسين On-page للصفحات الأساسية",
          "إصلاح مشاكل الفهرسة والعناوين والوصف",
          "ربط Google Search Console والتحليلات",
          "تقرير شهري واضح باللي اتعمل والجاي",
        ],
        cta: "ابدأ التأسيس",
      },
      {
        icon: "megaphone",
        name: "باقة السيو والإعلانات",
        tag: "SEO + Paid Ads",
        priceSar: "2,500",
        priceEgp: "25,000",
        priceNote: "",
        description: "قناتين مع بعض: ظهور مجاني بيكبر على المدى الطويل، وإعلانات مدفوعة بتجيب نتائج من الأسبوع الأول.",
        fit: "المشاريع اللي عايزة مبيعات دلوقتي مش بس بعد شهور — متاجر وخدمات محلية وشركات ناشئة.",
        includes: [
          "كل اللي في باقة تأسيس السيو",
          "إدارة حملات Google Ads (بحث وشوبينج)",
          "إدارة حملات Meta Ads (فيسبوك وإنستجرام)",
          "تحسين صفحات الهبوط لمعدل تحويل أعلى",
          "متابعة أسبوعية للحملات وتعديل الميزانيات",
          "تقرير شهري مجمع: زيارات + إعلانات + مبيعات",
        ],
        featured: true,
        cta: "ابدأ النمو",
      },
      {
        icon: "rocket",
        name: "باقة النمو الشامل",
        tag: "Full Growth",
        priceSar: "5,000",
        priceEgp: "50,000",
        priceNote: "",
        description: "فريق نمو كامل في باقة واحدة: سيو، ظهور في نتائج الذكاء الاصطناعي، إعلانات، محتوى، وتحسين تحويل.",
        fit: "المتاجر والشركات الجادة اللي عايزة حد يمسك النمو كله من الألف للياء — زي ما عملت مع 50+ مشروع.",
        includes: [
          "كل اللي في باقة السيو والإعلانات",
          "AEO/GEO: تجهيز موقعك للظهور في إجابات ChatGPT وGemini",
          "استراتيجية محتوى كاملة ومقالات شهرية",
          "CRO: تحسين تجربة المستخدم ومعدل التحويل",
          "لوحة متابعة مباشرة بالأرقام المهمة",
          "اجتماع شهري لمراجعة النتائج وخطة الشهر الجاي",
        ],
        cta: "ابدأ النمو الشامل",
      },
    ] as PackageTier[],
    honestyLabel: "مشمول وغير مشمول",
    honestyTitle: "وضوح كامل قبل ما تدفع جنيه واحد",
    honestyCards: [
      { title: "ميزانية الإعلانات عليك", body: "أسعار الباقات هي أتعاب الإدارة والتنفيذ. ميزانية الإعلانات نفسها بتتحاسب من حسابك الإعلاني مباشرة — وبتحددها انت على حسب قدرتك، وأنا بوصّل كل جنيه لأقصى نتيجة." },
      { title: "مفيش وعود مضروبة", body: "محدش يقدر يضمن ترتيب أول على جوجل أو رقم مبيعات ثابت، وأي حد بيقول كده بيضحك عليك. اللي أقدر أضمنه: شغل صح، تقارير واضحة، وتحسن تقيسه بنفسك شهر بعد شهر." },
      { title: "مفيش التزام طويل", body: "الباقات شهرية وتقدر توقف في آخر أي شهر. السيو بياخد وقت (غالبًا 3-6 شهور للنتائج القوية)، بس القرار دايمًا قرارك." },
    ],
    processLabel: "إزاي نبدأ",
    processTitle: "من الرسالة للشغل في 3 خطوات",
    process: [
      ["01", "ابعتلي موقعك", "راسلني على واتساب أو إيميل برابط الموقع أو المتجر، وسوقك المستهدف، وهدفك الأساسي."],
      ["02", "مراجعة مجانية سريعة", "ببص على الموقع وبقولك بصراحة أنهي باقة مناسبة ليك — أو لو مشروعك محتاج حاجة مختلفة خالص."],
      ["03", "نبدأ الشغل", "أول أسبوع: تدقيق وخطة واضحة. من تاني أسبوع: تنفيذ، ومتابعة، وتقارير تفهمها من غير ترجمان."],
    ],
    faqLabel: "أسئلة شائعة",
    faqTitle: "قبل ما تختار باقتك",
    faqs: [
      ["هل الأسعار دي شهرية فعلًا؟", "أيوه، كل باقة اشتراك شهري: شغل مستمر ومتابعة وتقارير. السيو والإعلانات شغل تراكمي — شهر واحد بيبني على اللي قبله."],
      ["هل ميزانية الإعلانات جوه السعر؟", "لأ. سعر الباقة هو أتعاب إدارة وتنفيذ الحملات. ميزانية الإعلانات بتدفعها انت مباشرة لجوجل وميتا من حسابك، وبتفضل تحت سيطرتك الكاملة."],
      ["أقدر أوقف الاشتراك في أي وقت؟", "أيوه. مفيش عقود طويلة ولا غرامات. بتجدد كل شهر بس لو شايف قيمة في الشغل."],
      ["أنهي باقة أنسب لمتجر إلكتروني؟", "لو المتجر جديد ابدأ بباقة تأسيس السيو. لو عندك ميزانية إعلانات وعايز مبيعات أسرع، باقة السيو والإعلانات هي الأنسب لأغلب المتاجر."],
      ["إيه الفرق بين السيو و AEO/GEO؟", "السيو بيخليك تظهر في نتائج جوجل. AEO/GEO بيجهز موقعك يظهر في إجابات محركات الذكاء الاصطناعي زي ChatGPT وGemini — وهو جزء من باقة النمو الشامل."],
      ["بتحسب بالريال ولا بالجنيه؟", "الاتنين نفس الباقة. للعملاء في السعودية والخليج بالريال السعودي، وللعملاء في مصر بالجنيه المصري — اختار اللي يناسبك."],
      ["هل في خصم للالتزام الأطول؟", "للعملاء اللي بيلتزموا 3 شهور أو أكتر في ترتيبات مريحة — اسألني عنها في رسالتك."],
    ] as [string, string][],
    nextTitle: "لسه محتار أنهي باقة؟",
    nextBody: "ابعتلي رابط موقعك في رسالة واحدة، وهرجعلك بترشيح صريح — حتى لو الترشيح إنك تستنى أو تبدأ بحاجة أصغر. الاستشارة الأولى مجانية.",
    emailSubject: "باقاتي — اختيار باقة",
    whatsapp: "https://api.whatsapp.com/send/?text&username=amrelbusaily&type=username&app_absent=0",
    footer: "SEO · Paid Ads · E-commerce Growth · AEO/GEO",
    freeConsultation: "/ar/free-consultation",
  },
  en: {
    lang: "en" as const,
    dir: "ltr",
    home: "/",
    other: "/ar/packages",
    blog: "/blog/en",
    services: "/services",
    offers: "/offers",
    packagesLabel: "Packages",
    title: "My Packages — SEO, Ads & Growth Packages with Clear Pricing | Amr Elbusaily",
    description: "Monthly packages with clear pricing in Saudi Riyal and Egyptian Pounds: SEO foundation, Google & Meta ads management, and a full growth package covering AEO/GEO, content and CRO. Starting at 1,500 SAR / 15,000 EGP.",
    ogTitle: "My Packages — SEO, Ads & Growth Packages",
    ogDescription: "Three monthly packages with clear pricing in SAR and EGP: SEO foundation, SEO + paid ads, and full growth. Pick the package that fits your stage.",
    eyebrow: "PACKAGES · MY PACKAGES",
    h1: "My packages.\nClear prices, clearer work.",
    intro: "Three monthly packages covering what I actually do every day: SEO, paid ads on Google and Meta, and e-commerce marketing. Each package is named after the work inside it, priced openly in Saudi Riyal and Egyptian Pounds.",
    currencyNote: "Monthly pricing — in Saudi Riyal or the Egyptian Pound equivalent",
    heroPrimaryCta: "Pick your package",
    heroSecondaryCta: "Free consultation first",
    tiersLabel: "The three packages",
    tiersTitle: "Choose based on your stage — not on pressure",
    tiersSubtitle: "Each package builds on the one before it. If you are unsure, the middle package is what most clients pick.",
    mostPopular: "Most popular",
    perMonth: "/month",
    sarLabel: "SAR",
    egpEquivalent: "or",
    egpLabel: "EGP",
    bestFor: "Best for",
    whatsIncluded: "What you get",
    startNow: "Start with this package",
    tiers: [
      {
        icon: "search",
        name: "SEO Foundation Package",
        tag: "SEO Foundation",
        priceSar: "1,500",
        priceEgp: "15,000",
        priceNote: "from",
        description: "Build the right foundation: technical audit, keyword research, and on-page work on the pages that deserve to rank first.",
        fit: "Sites and stores just starting out, or with plenty of content but no rankings to show for it.",
        includes: [
          "Full technical audit (crawl, indexation, speed)",
          "Keyword research and a buyer-intent page map",
          "On-page optimization of core pages",
          "Indexation, title, and meta description fixes",
          "Google Search Console and analytics setup",
          "Clear monthly report: done and next",
        ],
        cta: "Start the foundation",
      },
      {
        icon: "megaphone",
        name: "SEO + Paid Ads Package",
        tag: "SEO + Paid Ads",
        priceSar: "2,500",
        priceEgp: "25,000",
        priceNote: "",
        description: "Two channels together: organic visibility that compounds long-term, and paid ads that bring results from week one.",
        fit: "Businesses that need sales now, not only months from now — stores, local services, and startups.",
        includes: [
          "Everything in the SEO Foundation package",
          "Google Ads management (Search and Shopping)",
          "Meta Ads management (Facebook and Instagram)",
          "Landing page optimization for higher conversion",
          "Weekly campaign reviews and budget tuning",
          "One combined monthly report: traffic, ads, sales",
        ],
        featured: true,
        cta: "Start growing",
      },
      {
        icon: "rocket",
        name: "Full Growth Package",
        tag: "Full Growth",
        priceSar: "5,000",
        priceEgp: "50,000",
        priceNote: "",
        description: "A full growth team in one package: SEO, AI-search visibility, ads, content, and conversion optimization.",
        fit: "Stores and companies that want one person owning growth end to end — the same way I ran 50+ projects.",
        includes: [
          "Everything in the SEO + Paid Ads package",
          "AEO/GEO: visibility in ChatGPT and Gemini answers",
          "Full content strategy and monthly articles",
          "CRO: user experience and conversion optimization",
          "Live dashboard with the numbers that matter",
          "Monthly call to review results and plan ahead",
        ],
        cta: "Start full growth",
      },
    ] as PackageTier[],
    honestyLabel: "Included and not included",
    honestyTitle: "Full clarity before you pay a single pound",
    honestyCards: [
      { title: "Ad spend is on you", body: "Package prices cover management and execution. Ad spend itself is billed directly from your own ad account — you set the budget, I make every pound work as hard as possible." },
      { title: "No fake promises", body: "Nobody can guarantee a #1 ranking or a fixed sales number, and anyone who says otherwise is bluffing. What I can guarantee: honest work, clear reports, and improvement you can measure month over month." },
      { title: "No long lock-in", body: "Packages are monthly and you can stop at the end of any month. SEO takes time (usually 3-6 months for strong results), but the decision is always yours." },
    ],
    processLabel: "How we start",
    processTitle: "From message to work in 3 steps",
    process: [
      ["01", "Send me your site", "Message me on WhatsApp or email with your site or store URL, your target market, and your main goal."],
      ["02", "Quick free review", "I look at the site and tell you honestly which package fits — or if you need something different entirely."],
      ["03", "Work begins", "Week one: audit and a clear plan. From week two: execution, monitoring, and reports you actually understand."],
    ],
    faqLabel: "FAQ",
    faqTitle: "Before you pick a package",
    faqs: [
      ["Are these really monthly prices?", "Yes. Each package is a monthly subscription: ongoing work, monitoring, and reports. SEO and ads are cumulative — each month builds on the one before."],
      ["Is ad spend included in the price?", "No. The package price covers campaign management and execution. Ad spend is paid by you directly to Google and Meta from your own account, and stays fully under your control."],
      ["Can I cancel anytime?", "Yes. No long contracts and no penalties. You renew each month only if you see value in the work."],
      ["Which package fits an online store?", "New stores should start with the SEO Foundation package. If you have an ad budget and want faster sales, the SEO + Paid Ads package fits most stores best."],
      ["What is the difference between SEO and AEO/GEO?", "SEO gets you into Google results. AEO/GEO prepares your site to appear in AI answers like ChatGPT and Gemini — it is part of the Full Growth package."],
      ["Do you bill in SAR or EGP?", "Both are the same package. Clients in Saudi Arabia and the Gulf pay in Saudi Riyal; clients in Egypt pay in Egyptian Pounds — pick what suits you."],
      ["Is there a discount for longer commitments?", "For clients committing to 3 months or more, there are comfortable arrangements — ask me about it in your message."],
    ] as [string, string][],
    nextTitle: "Still not sure which package?",
    nextBody: "Send me your site URL in one message and I will reply with an honest recommendation — even if the recommendation is to wait or start smaller. The first consultation is free.",
    emailSubject: "Packages inquiry",
    whatsapp: "https://api.whatsapp.com/send/?text&username=amrelbusaily&type=username&app_absent=0",
    footer: "SEO · Paid Ads · E-commerce Growth · AEO/GEO",
    freeConsultation: "/free-consultation",
  },
} as const;

function ActionLink({ href, children, primary = false, className = "" }: { href: string; children: ReactNode; primary?: boolean; className?: string }) {
  return (
    <a
      href={href}
      className={
        primary
          ? `inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground glow-primary hover:opacity-90 ${className}`
          : `inline-flex items-center justify-center rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium hover:border-primary hover:text-primary ${className}`
      }
    >
      {children}
    </a>
  );
}

function TierIcon({ icon, className }: { icon: PackageTier["icon"]; className?: string }) {
  if (icon === "megaphone") return <Megaphone className={className} aria-hidden="true" />;
  if (icon === "rocket") return <Rocket className={className} aria-hidden="true" />;
  return <Search className={className} aria-hidden="true" />;
}

function makeSchema(data: (typeof content)[Lang]) {
  const url = `${base}${data.lang === "ar" ? "/ar/packages" : "/packages"}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "CollectionPage", "@id": `${url}#webpage`, url, name: data.ogTitle, description: data.description, inLanguage: data.lang, isPartOf: { "@id": `${base}/#website` }, about: { "@id": `${base}/#person` } },
      { "@type": "Person", "@id": `${base}/#person`, name: data.lang === "ar" ? "عمرو البصيلي" : "Amr Elbusaily", url: `${base}${data.home}` },
      { "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: data.lang === "ar" ? "الرئيسية" : "Home", item: `${base}${data.home}` }, { "@type": "ListItem", position: 2, name: data.lang === "ar" ? "باقاتي" : "Packages", item: url }] },
      {
        "@type": "ItemList",
        "@id": `${url}#packages`,
        itemListElement: data.tiers.map((tier, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Offer",
            name: tier.name,
            description: tier.description,
            url,
            seller: { "@id": `${base}/#person` },
            priceSpecification: [
              { "@type": "UnitPriceSpecification", price: tier.priceSar.replace(",", ""), priceCurrency: "SAR", unitText: data.lang === "ar" ? "شهريًا" : "per month" },
              { "@type": "UnitPriceSpecification", price: tier.priceEgp.replace(",", ""), priceCurrency: "EGP", unitText: data.lang === "ar" ? "شهريًا" : "per month" },
            ],
          },
        })),
      },
      { "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: data.faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
    ],
  };
}

export function packagesHead(lang: Lang) {
  const data = content[lang];
  const url = `${base}${lang === "ar" ? "/ar/packages" : "/packages"}`;
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
      { rel: "alternate", hrefLang: "ar", href: `${base}/ar/packages` },
      { rel: "alternate", hrefLang: "en", href: `${base}/packages` },
      { rel: "alternate", hrefLang: "x-default", href: `${base}/packages` },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(makeSchema(data)) }],
  };
}

export function PackagesPage({ lang }: { lang: Lang }) {
  const data = content[lang];
  const isArabic = lang === "ar";
  return (
    <div className="min-h-screen" dir={data.dir} lang={data.lang}>
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href={data.home} className="flex items-center gap-2 font-display font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-primary font-mono text-sm text-primary-foreground">AE</span>
            <span>{isArabic ? "عمرو البصيلي" : "Amr Elbusaily"}</span>
          </a>
          <nav className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href={data.services} className="hover:text-foreground">{isArabic ? "الخدمات" : "Services"}</a>
            <a href={data.offers} className="hover:text-foreground">{isArabic ? "العروض" : "Offers"}</a>
            <a href={data.blog} className="hidden hover:text-foreground sm:inline">{isArabic ? "المقالات" : "Articles"}</a>
            <a href={data.other} className="font-mono text-xs hover:text-foreground">{isArabic ? "EN" : "AR"}</a>
          </nav>
        </div>
      </header>
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 grid-bg" aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl px-6 py-20 text-center md:py-28">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{data.eyebrow}</div>
            <h1 className="mx-auto mt-5 max-w-4xl whitespace-pre-line text-4xl font-semibold leading-tight md:text-6xl">{data.h1}</h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-muted-foreground">{data.intro}</p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
              <span className="inline-block h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
              {data.currencyNote}
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ActionLink href="#packages" primary>{data.heroPrimaryCta}</ActionLink>
              <ActionLink href={data.freeConsultation}>{data.heroSecondaryCta}</ActionLink>
            </div>
          </div>
        </section>

        {/* Pricing tiers */}
        <section id="packages" className="border-b border-border bg-surface/30">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="mx-auto max-w-3xl text-center">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{data.tiersLabel}</div>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{data.tiersTitle}</h2>
              <p className="mt-4 leading-8 text-muted-foreground">{data.tiersSubtitle}</p>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:items-stretch">
              {data.tiers.map((tier) => (
                <article
                  key={tier.name}
                  className={
                    tier.featured
                      ? "relative flex flex-col rounded-2xl border-2 border-primary bg-surface p-8 shadow-[0_0_50px_-12px_var(--primary-glow)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_0_70px_-10px_var(--primary-glow)] lg:scale-[1.04]"
                      : "relative flex flex-col rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-[0_0_40px_-14px_var(--primary-glow)]"
                  }
                >
                  {tier.featured && (
                    <span className="absolute -top-3.5 start-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground shadow-lg rtl:translate-x-1/2">
                      {data.mostPopular}
                    </span>
                  )}
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-primary">
                      <TierIcon icon={tier.icon} className="h-4 w-4" />
                      {tier.tag}
                    </span>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold leading-snug">{tier.name}</h3>
                  <div className="mt-5 border-y border-border/70 py-5">
                    {tier.priceNote && <div className="text-xs text-muted-foreground">{tier.priceNote}</div>}
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="font-display text-5xl font-bold tracking-tight text-primary">{tier.priceSar}</span>
                      <span className="text-sm font-medium text-foreground">{data.sarLabel}</span>
                      <span className="text-sm text-muted-foreground">{data.perMonth}</span>
                    </div>
                    <div className="mt-2 text-sm text-muted-foreground">
                      {data.egpEquivalent} <span className="font-semibold text-foreground">{tier.priceEgp}</span> {data.egpLabel} {data.perMonth}
                    </div>
                  </div>
                  <p className="mt-5 leading-8 text-muted-foreground">{tier.description}</p>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    <strong className="text-foreground">{data.bestFor}: </strong>
                    {tier.fit}
                  </p>
                  <div className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-primary">{data.whatsIncluded}</div>
                  <ul className="mt-4 flex-1 space-y-3 text-sm leading-7">
                    {tier.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <ActionLink
                      href={`mailto:amreelbasily@gmail.com?subject=${encodeURIComponent(`${data.emailSubject} — ${tier.name}`)}`}
                      primary={!!tier.featured}
                      className="w-full"
                    >
                      {tier.cta}
                    </ActionLink>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Honesty / clarity cards */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{data.honestyLabel}</div>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{data.honestyTitle}</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {data.honestyCards.map((card) => (
              <article key={card.title} className="rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="mt-3 leading-8 text-muted-foreground">{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="border-y border-border bg-surface/30">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="max-w-3xl">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{data.processLabel}</div>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{data.processTitle}</h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {data.process.map(([number, title, body]) => (
                <article key={number} className="rounded-2xl border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                  <div className="font-mono text-sm text-primary">{number}</div>
                  <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 leading-8 text-muted-foreground">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{data.faqLabel}</div>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{data.faqTitle}</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {data.faqs.map(([q, a]) => (
              <details key={q} className="group rounded-xl border border-border bg-surface p-6 transition-colors hover:border-primary/40">
                <summary className="cursor-pointer list-none text-lg font-semibold marker:hidden">{q}</summary>
                <p className="mt-4 leading-8 text-muted-foreground">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-surface p-8 md:p-12">
              <div className="absolute inset-0 grid-bg" aria-hidden="true" />
              <div className="relative">
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{isArabic ? "الخطوة التالية" : "Next step"}</div>
                <h2 className="mt-4 text-3xl font-semibold md:text-4xl">{data.nextTitle}</h2>
                <p className="mt-4 max-w-2xl leading-8 text-muted-foreground">{data.nextBody}</p>
                <div className="mt-7 flex flex-wrap gap-4">
                  <ActionLink href={`mailto:amreelbasily@gmail.com?subject=${encodeURIComponent(data.emailSubject)}`} primary>
                    {isArabic ? "ابعتلي موقعك على الإيميل" : "Email me your site"}
                  </ActionLink>
                  <ActionLink href={data.whatsapp}>WhatsApp</ActionLink>
                  <ActionLink href={data.freeConsultation}>{isArabic ? "استشارة مجانية" : "Free consultation"}</ActionLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 px-6 py-8 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} {isArabic ? "عمرو البصيلي" : "Amr Elbusaily"}</span>
          <span>{data.footer}</span>
        </div>
      </footer>
    </div>
  );
}
