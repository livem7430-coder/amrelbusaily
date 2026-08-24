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
    title: "التسويق الرقمي بالأداء في مصر: كيف تبني حملات تنمو بربحية",
    description: "دليل عملي للتسويق الرقمي بالأداء: القياس، الجمهور، اختبار الرسائل، تكلفة اكتساب العميل، ودمج القنوات مع SEO.",
    date: "2026-08-24",
    readTime: "10 دقائق",
    lang: "ar",
    altSlug: "media-buying-guide-en",
    faq: [
      {
        q: "ما الفرق بين التسويق الرقمي بالأداء وتشغيل إعلان؟",
        a: "التسويق الرقمي بالأداء يشمل الاستراتيجية والقياس واختيار الجمهور واختبار الرسائل وتحسين الربحية، وليس تشغيل إعلان فقط.",
      },
      {
        q: "ما أهم مؤشرات قياس الحملات؟",
        a: "راقب تكلفة اكتساب العميل ومعدل التحويل وقيمة الطلب والعائد على الإنفاق مع ربطها بجودة العميل والهامش.",
      },
    ],
  },
  {
    slug: "media-buying-guide-en",
    title: "Performance Digital Marketing: How to Build Profitable Growth Campaigns",
    description: "A practical performance marketing guide covering measurement, audiences, message testing, customer acquisition cost and the SEO connection.",
    date: "2026-08-24",
    readTime: "10 min read",
    lang: "en",
    altSlug: "media-buying-guide-ar",
    faq: [
      {
        q: "What is the difference between performance digital marketing and running an ad?",
        a: "Performance digital marketing includes strategy, measurement, audience selection, testing and profit optimization—not just launching an ad.",
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
    slug: "local-seo-egypt-ar",
    title: "السيو المحلي في مصر: كيف تظهر أمام عملاء القاهرة؟",
    description: "دليل عملي لـ Local SEO في مصر: Google Business Profile، صفحات الخدمات المحلية، المراجعات، والإشارات التي تجلب مكالمات وعملاء.",
    date: "2026-08-24",
    readTime: "9 دقائق",
    lang: "ar",
    altSlug: "local-seo-egypt-en",
    faq: [
      { q: "ما هو السيو المحلي؟", a: "هو تحسين ظهور النشاط التجاري أمام الأشخاص الذين يبحثون عن خدمة في مدينة أو منطقة محددة مثل القاهرة أو مصر." },
      { q: "هل يكفي إنشاء Google Business Profile؟", a: "لا. الملف نقطة بداية ويحتاج إلى بيانات دقيقة وصفحات خدمات ومراجعات حقيقية وتجربة موقع جيدة." },
    ],
  },
  {
    slug: "local-seo-egypt-en",
    title: "Local SEO in Egypt: How to Reach Customers in Cairo",
    description: "A practical local SEO guide for Egypt covering Google Business Profile, local service pages, reviews and signals that generate qualified leads.",
    date: "2026-08-24",
    readTime: "9 min read",
    lang: "en",
    altSlug: "local-seo-egypt-ar",
    faq: [
      { q: "What is local SEO?", a: "Local SEO improves a business presence for people searching for a service in a specific city or area such as Cairo or Egypt." },
      { q: "Is a Google Business Profile enough?", a: "No. It is a starting point that needs accurate details, useful service pages, genuine reviews and a strong website experience." },
    ],
  },
  {
    slug: "seo-vs-google-ads-ar",
    title: "SEO ولا Google Ads؟ مقارنة عملية لاختيار قناة النمو المناسبة",
    description: "مقارنة عملية بين SEO وGoogle Ads: سرعة النتائج، التكلفة، نية البحث، الربحية، وكيف تستخدم القناتين معًا لنمو مشروعك.",
    date: "2026-08-24",
    readTime: "10 دقائق",
    lang: "ar",
    altSlug: "seo-vs-google-ads-en",
    faq: [
      { q: "هل SEO أفضل من Google Ads؟", a: "لا توجد قناة أفضل دائمًا؛ القرار يعتمد على الهدف والميزانية وسرعة النتائج وهامش الربح وقدرة المشروع على بناء محتوى." },
      { q: "هل يمكن استخدام SEO وGoogle Ads معًا؟", a: "نعم، يمكن استخدام الإعلانات لاختبار الرسائل والطلب، بينما يبني SEO قناة تراكمية للزيارات العضوية." },
    ],
  },
  {
    slug: "seo-vs-google-ads-en",
    title: "SEO vs Google Ads: A Practical Guide to Choosing the Right Growth Channel",
    description: "A practical comparison of SEO and Google Ads covering speed, cost, intent, profitability and how both channels can work together.",
    date: "2026-08-24",
    readTime: "10 min read",
    lang: "en",
    altSlug: "seo-vs-google-ads-ar",
    faq: [
      { q: "Is SEO better than Google Ads?", a: "There is no universal winner. The right choice depends on goals, budget, speed, margins and the ability to build useful content." },
      { q: "Can SEO and Google Ads work together?", a: "Yes. Ads can test messages and demand while SEO builds a compounding source of organic traffic." },
    ],
  },
  {
    slug: "ecommerce-technical-seo-ar",
    title: "السيو التقني للمتاجر الإلكترونية: حل مشاكل المنتجات والفلاتر والفهرسة",
    description: "دليل سيو تقني للمتاجر الإلكترونية عن روابط الفلاتر، المنتجات غير المتاحة، Product Schema، وهيكل المتجر القابل للفهرسة.",
    date: "2026-08-24",
    readTime: "10 دقائق",
    lang: "ar",
    altSlug: "ecommerce-technical-seo-en",
    faq: [
      { q: "هل كل منتج في المتجر يجب أن يكون مفهرسًا؟", a: "ليس بالضرورة؛ الصفحة تستحق الفهرسة عندما تقدم قيمة فريدة ولها فرصة حقيقية لجذب طلب." },
      { q: "ما أشهر مشكلة تقنية في المتاجر؟", a: "الروابط المكررة الناتجة عن الفلاتر والبحث، إلى جانب صفحات منتجات ضعيفة أو غير متاحة بلا بدائل واضحة." },
    ],
  },
  {
    slug: "ecommerce-technical-seo-en",
    title: "Technical SEO for E-commerce: Products, Filters and Indexing",
    description: "A technical e-commerce SEO guide covering filter URLs, unavailable products, Product schema and indexable store architecture.",
    date: "2026-08-24",
    readTime: "10 min read",
    lang: "en",
    altSlug: "ecommerce-technical-seo-ar",
    faq: [
      { q: "Does every product need to be indexed?", a: "Not necessarily. A page should be indexable when it offers unique value and a realistic opportunity to attract demand." },
      { q: "What is a common technical issue in stores?", a: "Duplicate URLs from filters and search, along with weak or unavailable product pages without clear alternatives." },
    ],
  },
  {
    slug: "seo-content-brief-ar",
    title: "كيف تكتب Content Brief لمقال SEO يخدم AEO وGEO؟",
    description: "طريقة كتابة خطة محتوى SEO تحدد نية البحث والأسئلة والإجابة المباشرة والسياق المحلي لتصنع مقالات مفيدة لمحركات البحث والذكاء الاصطناعي.",
    date: "2026-08-24",
    readTime: "8 دقائق",
    lang: "ar",
    altSlug: "seo-content-brief-en",
    faq: [
      { q: "ما هو Content Brief؟", a: "هو مخطط يحدد الجمهور وهدف البحث والأسئلة والمحاور والنتيجة التي يجب أن يخرج بها القارئ قبل كتابة المقال." },
      { q: "كيف يخدم Content Brief الـAEO؟", a: "بتحديد أسئلة حقيقية وإجابات مباشرة وعناوين واضحة تسهّل فهم المحتوى واقتباسه في إجابات البحث." },
    ],
  },
  {
    slug: "seo-content-brief-en",
    title: "How to Write an SEO Content Brief for AEO and GEO",
    description: "A practical content brief framework covering search intent, real questions, direct answers and regional context for search and AI systems.",
    date: "2026-08-24",
    readTime: "8 min read",
    lang: "en",
    altSlug: "seo-content-brief-ar",
    faq: [
      { q: "What is an SEO content brief?", a: "It is a plan that defines the audience, search intent, questions, coverage and reader outcome before writing begins." },
      { q: "How does a brief support AEO?", a: "It identifies real questions, direct answers and clear headings that make content easier for answer systems to understand." },
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
