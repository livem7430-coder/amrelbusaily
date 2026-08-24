export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  lang: "ar" | "en";
  altSlug?: string;
  faq?: { q: string; a: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "will-ai-kill-seo-ar",
    title: "هل السيو هينتهي بسبب الذكاء الاصطناعي؟ الإجابة الكاملة 2026",
    description:
      "هل الـAI هيقتل السيو؟ تحليل عملي لتأثير AI Overviews وChatGPT وPerplexity على الترافيك، وإيه اللي بيتغير وإزاي تجهز موقعك في 2026.",
    date: "2026-08-17",
    readTime: "9 دقائق",
    lang: "ar",
    altSlug: "will-ai-kill-seo-en",
    faq: [
      {
        q: "هل السيو هينتهي بسبب الذكاء الاصطناعي؟",
        a: "لأ. السيو مش هينتهي لكنه بيتغير: محركات البحث بقت محركات إجابات، والمواقع اللي عندها محتوى موثوق ومنظم وسيو تقني سليم هي اللي بتظهر كمصدر في إجابات الـAI.",
      },
      {
        q: "هل AI Overviews بتقلل الترافيك؟",
        a: "بتقلل الكليكات على الاستعلامات المعلوماتية البسيطة فقط، لكن الاستعلامات التجارية والشرائية لسه بتجيب ترافيك عالي القيمة.",
      },
      {
        q: "إيه هو AEO؟",
        a: "AEO أو Answer Engine Optimization هو تحسين المحتوى عشان يتم اقتباسه كإجابة داخل ChatGPT وPerplexity وGoogle AI Overviews عبر محتوى منظم وFAQ Schema وE-E-A-T قوي.",
      },
    ],
  },
  {
    slug: "will-ai-kill-seo-en",
    title: "Will AI Kill SEO? The Honest 2026 Answer",
    description:
      "Is SEO dead because of AI? A practical breakdown of how AI Overviews, ChatGPT and Perplexity change search traffic — and how to future-proof your site in 2026.",
    date: "2026-08-17",
    readTime: "9 min read",
    lang: "en",
    altSlug: "will-ai-kill-seo-ar",
    faq: [
      {
        q: "Will AI kill SEO?",
        a: "No. SEO is not dying, it is shifting. Search engines became answer engines, and sites with trustworthy, well-structured content and solid technical SEO are the ones cited inside AI answers.",
      },
      {
        q: "Do AI Overviews reduce website traffic?",
        a: "They reduce clicks mainly on simple informational queries. Commercial and transactional queries still drive high-value traffic to websites.",
      },
      {
        q: "What is AEO?",
        a: "AEO (Answer Engine Optimization) is optimizing content so it gets cited as an answer by ChatGPT, Perplexity and Google AI Overviews, using structured content, FAQ schema and strong E-E-A-T.",
      },
    ],
  },

  {
    slug: "technical-seo-guide-ar",
    title: "دليل السيو التقني 2026: خطوة بخطوة لتصدر جوجل",
    description:
      "دليل عملي لأوديت سيو تقني كامل: Core Web Vitals، الفهرسة، robots.txt، sitemap، Schema، وسرعة الموقع — من واقع 7 سنين خبرة عمرو البصيلي.",
    date: "2026-03-01",
    readTime: "10 دقائق",
    lang: "ar",
  },
  {
    slug: "ecommerce-seo-ar",
    title: "سيو المتاجر الإلكترونية: كيف تضاعف مبيعاتك من جوجل",
    description:
      "خطة سيو كاملة للمتاجر الإلكترونية: هيكل الموقع، صفحات الفئات والمنتجات، الـSchema، والمحتوى — بنفس اللي طبقناه على +50 مشروع.",
    date: "2026-02-20",
    readTime: "12 دقيقة",
    lang: "ar",
  },
  {
    slug: "aeo-ai-search-ar",
    title: "AEO: كيف تتصدر إجابات ChatGPT وGoogle AI في 2026",
    description:
      "شرح Answer Engine Optimization: FAQ Schema، محتوى منظم، وE-E-A-T لتظهر في إجابات ChatGPT، Perplexity، وGoogle SGE.",
    date: "2026-02-10",
    readTime: "8 دقائق",
    lang: "ar",
  },
  {
    slug: "seo-audit-guide-ar",
    title: "أوديت SEO: قائمة فحص عملية لاكتشاف أخطاء الموقع وزيادة العملاء",
    description:
      "دليل عملي لعمل أوديت SEO للمواقع والمتاجر: الزحف والفهرسة، الروابط الداخلية، المحتوى، السرعة، صفحات الخدمات والتحويل.",
    date: "2026-08-24",
    readTime: "11 دقيقة",
    lang: "ar",
    altSlug: "seo-audit-guide-en",
    faq: [
      {
        q: "ما هو أوديت SEO؟",
        a: "هو مراجعة منظمة للتقنية والمحتوى والروابط وتجربة المستخدم لتحديد ما يمنع الموقع من الظهور والتحويل.",
      },
      {
        q: "ما الذي يجب فحصه أولًا في أوديت السيو؟",
        a: "ابدأ بقابلية الزحف والفهرسة، ثم الصفحات المهمة والعناوين والروابط الداخلية والقياس.",
      },
    ],
  },
  {
    slug: "seo-audit-guide-en",
    title: "SEO Audit Guide: A Practical Checklist for More Visibility and Leads",
    description:
      "A practical SEO audit checklist covering crawling, indexing, internal links, content, speed, service pages and conversion priorities.",
    date: "2026-08-24",
    readTime: "11 min read",
    lang: "en",
    altSlug: "seo-audit-guide-ar",
    faq: [
      {
        q: "What is an SEO audit?",
        a: "It is a structured review of technical SEO, content, links and user experience to find what limits visibility and conversion.",
      },
      {
        q: "What should an SEO audit check first?",
        a: "Start with crawling and indexing, then review important pages, titles, internal links and measurement.",
      },
    ],
  },
  {
    slug: "media-buying-guide-ar",
    title: "Media Buying في مصر: كيف تدير إعلانات Google وMeta بربحية",
    description:
      "دليل عملي لإدارة الإعلانات المدفوعة: القياس، الجمهور، اختبار الإعلانات، تكلفة اكتساب العميل، ودمج Media Buying مع SEO.",
    date: "2026-08-24",
    readTime: "10 دقائق",
    lang: "ar",
    altSlug: "media-buying-guide-en",
    faq: [
      {
        q: "ما الفرق بين Media Buying وتشغيل إعلان؟",
        a: "Media Buying يشمل الاستراتيجية والقياس واختيار الجمهور واختبار الإعلانات وتحسين الربحية، وليس تشغيل إعلان فقط.",
      },
      {
        q: "ما أهم مؤشرات قياس الحملات؟",
        a: "راقب تكلفة اكتساب العميل ومعدل التحويل وقيمة الطلب والعائد على الإنفاق مع ربطها بجودة العميل والهامش.",
      },
    ],
  },
  {
    slug: "media-buying-guide-en",
    title: "Media Buying Guide: How to Manage Google and Meta Ads for Profit",
    description:
      "A practical paid media guide covering measurement, audiences, creative testing, customer acquisition cost and the SEO connection.",
    date: "2026-08-24",
    readTime: "10 min read",
    lang: "en",
    altSlug: "media-buying-guide-ar",
    faq: [
      {
        q: "What is the difference between media buying and running an ad?",
        a: "Media buying includes strategy, measurement, audience selection, testing and profit optimization—not just launching an ad.",
      },
      {
        q: "Which metrics matter in paid campaigns?",
        a: "Track customer acquisition cost, conversion rate, order value and return on ad spend alongside lead quality and margin.",
      },
    ],
  },
  {
    slug: "ecommerce-growth-plan-ar",
    title: "خطة نمو التجارة الإلكترونية: SEO وإعلانات لزيادة مبيعات المتجر",
    description:
      "خطة عملية لنمو المتاجر الإلكترونية تشمل اقتصاديات المتجر، هيكل الفئات، صفحات المنتجات، المحتوى، الإعلانات وتحسين التحويل.",
    date: "2026-08-24",
    readTime: "12 دقيقة",
    lang: "ar",
    altSlug: "ecommerce-growth-plan-en",
    faq: [
      {
        q: "هل نمو المتجر يعتمد على الإعلانات فقط؟",
        a: "لا. النمو المستمر يحتاج إلى SEO وبنية متجر جيدة وصفحات منتجات مقنعة وتجربة شراء سهلة بالإضافة إلى الإعلانات.",
      },
      {
        q: "ما أول خطوة في خطة نمو متجر؟",
        a: "ابدأ بفهم هامش الربح ومتوسط قيمة الطلب ومعدل التحويل وتكلفة اكتساب العميل قبل زيادة الميزانية.",
      },
    ],
  },
  {
    slug: "ecommerce-growth-plan-en",
    title: "E-commerce Growth Plan: SEO and Paid Media for More Store Sales",
    description:
      "A practical e-commerce growth plan covering store economics, category structure, product pages, content, paid media and conversion optimization.",
    date: "2026-08-24",
    readTime: "12 min read",
    lang: "en",
    altSlug: "ecommerce-growth-plan-ar",
    faq: [
      {
        q: "Does e-commerce growth depend on ads alone?",
        a: "No. Sustainable growth combines SEO, strong store architecture, persuasive product pages, a smooth buying experience and paid media.",
      },
      {
        q: "What is the first step in an e-commerce growth plan?",
        a: "Start with margin, average order value, conversion rate and acquisition cost before increasing the media budget.",
      },
    ],
  },
  {
    slug: "keyword-research-ar",
    title: "بحث الكلمات المفتاحية: الطريقة اللي بتنجح فعلاً",
    description:
      "منهجية عمرو البصيلي في بحث الكلمات: نية البحث، Long-tail، أدوات Ahrefs وSEMrush، وخريطة محتوى تجيب ترافيك حقيقي.",
    date: "2026-01-28",
    readTime: "9 دقائق",
    lang: "ar",
  },
];
