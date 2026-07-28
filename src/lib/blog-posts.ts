export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  lang: "ar" | "en";
}

export const blogPosts: BlogPost[] = [
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
