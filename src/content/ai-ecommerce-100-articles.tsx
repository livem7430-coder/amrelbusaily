import type { ComponentType } from "react";
import { aiEcommerce100Data, type GeneratedArticle } from "@/content/ai-ecommerce-100-data";

type Variant = GeneratedArticle["ar"];

const serviceLinks = {
  ecommerce: { ar: "/ar/services/ecommerce-seo-growth", en: "/services/ecommerce-seo-growth" },
  seo: { ar: "/ar/services/seo-strategy-consulting", en: "/services/seo-strategy-consulting" },
  digital: { ar: "/ar/services/analytics-measurement", en: "/services/analytics-measurement" },
  ai: { ar: "/ar/services/ai-seo-aeo-geo", en: "/services/ai-seo-aeo-geo" },
} as const;

const serviceLabels = {
  ecommerce: { ar: "استكشف خدمات SEO للتجارة الإلكترونية", en: "Explore e-commerce SEO services" },
  seo: { ar: "استكشف خدمات SEO والاستراتيجية", en: "Explore SEO strategy services" },
  digital: { ar: "استكشف خدمات القياس والنمو للمنتجات الرقمية", en: "Explore digital product growth services" },
  ai: { ar: "استكشف خدمات AI SEO وAEO/GEO", en: "Explore AI SEO, AEO and GEO services" },
} as const;

function GeneratedArticle({ article, category, lang }: { article: Variant; category: GeneratedArticle["category"]; lang: "ar" | "en" }) {
  const service = serviceLinks[category as keyof typeof serviceLinks] ?? serviceLinks.seo;
  const label = serviceLabels[category as keyof typeof serviceLabels] ?? serviceLabels.seo;
  return (
    <>
      <p><strong>{lang === "ar" ? "الإجابة المختصرة:" : "Direct answer:"}</strong> {article.directAnswer}</p>
      {article.sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {section.bullets.length > 0 && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
        </section>
      ))}
      <section>
        <h2>{lang === "ar" ? "الأسئلة الشائعة" : "Frequently asked questions"}</h2>
        {article.faq.map((item) => (
          <div key={item.q}>
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </div>
        ))}
      </section>
      <p>
        <a href={service[lang]}>{label[lang]}</a>
      </p>
    </>
  );
}

export const aiEcommerce100ArticleRegistry: Record<string, ComponentType> = Object.fromEntries(
  aiEcommerce100Data.flatMap((item) => [
    [`${item.slug}-ar`, () => <GeneratedArticle article={item.ar} category={item.category} lang="ar" />],
    [`${item.slug}-en`, () => <GeneratedArticle article={item.en} category={item.category} lang="en" />],
  ]),
);
