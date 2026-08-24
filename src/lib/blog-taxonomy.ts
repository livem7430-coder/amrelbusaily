import type { BlogPost } from "@/lib/blog-posts";

export const BLOG_CATEGORIES = [
  { id: "all", labelAr: "كل المحتوى", labelEn: "All content" },
  { id: "technical", labelAr: "Technical SEO والأوديت", labelEn: "Technical SEO & audits" },
  { id: "content-ai", labelAr: "المحتوى وAI وAEO/GEO", labelEn: "Content, AI & AEO/GEO" },
  { id: "local", labelAr: "السيو المحلي والأسواق", labelEn: "Local & regional" },
  { id: "ecommerce", labelAr: "SEO للمتاجر", labelEn: "E-commerce SEO" },
  { id: "growth", labelAr: "النمو والتحليلات", labelEn: "Growth & analytics" },
] as const;

export type BlogCategoryId = (typeof BLOG_CATEGORIES)[number]["id"];

export function getBlogCategory(post: Pick<BlogPost, "slug" | "title" | "description">): BlogCategoryId {
  const text = `${post.slug} ${post.title} ${post.description}`.toLowerCase();
  if (/technical|audit|أوديت|تقني|core-web|سرعة|speed|index|فهرس|canonical|schema|structured/.test(text)) return "technical";
  if (/ecommerce|e-commerce|store|product|متجر|المتاجر|تجارة إلكترونية|منتج/.test(text)) return "ecommerce";
  if (/local|egypt|cairo|saudi|riyadh|jeddah|dubai|uae|kuwait|qatar|مصر|القاهرة|السعودية|الرياض|جدة|دبي|الإمارات|الكويت|قطر|محلي|خبير seo|seo expert|seo services/.test(text)) return "local";
  if (/growth|b2b|demand|funnel|cac|ltv|crm|توليد الطلب|نمو شركات|نمو الأعمال|مسار التحويل|تسويق النمو/.test(text)) return "growth";
  if (/ai|aeo|geo|content|محتوى|كتابة|تسويق بالمحتوى|ذكاء اصطناعي|search brief|marketing/.test(text)) return "content-ai";
  return "growth";
}

export function getBlogCategoryLabel(post: Pick<BlogPost, "slug" | "title" | "description">, lang: "ar" | "en") {
  const category = BLOG_CATEGORIES.find((item) => item.id === getBlogCategory(post));
  return lang === "ar" ? category?.labelAr : category?.labelEn;
}
