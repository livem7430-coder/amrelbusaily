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
    slug: "keyword-research-ar",
    title: "بحث الكلمات المفتاحية: الطريقة اللي بتنجح فعلاً",
    description:
      "منهجية عمرو البصيلي في بحث الكلمات: نية البحث، Long-tail، أدوات Ahrefs وSEMrush، وخريطة محتوى تجيب ترافيك حقيقي.",
    date: "2026-01-28",
    readTime: "9 دقائق",
    lang: "ar",
  },
];
