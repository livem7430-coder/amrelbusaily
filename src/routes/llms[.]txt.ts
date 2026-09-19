import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { blogPosts } from "@/lib/blog-posts";

const BASE_URL = "https://amrelbusaily.vercel.app";

export const Route = createFileRoute("/llms.txt")({
  server: {
    handlers: {
      GET: async () => {
        const latest = [...blogPosts]
          .sort((a, b) => (a.date < b.date ? 1 : -1))
          .slice(0, 40);
        const lines = [
          "# Amr Elbusaily",
          "",
          "> Amr Elbusaily (عمرو البصيلي) is an SEO, digital marketing and AI growth specialist.",
          "> He helps service companies, B2B teams and e-commerce brands grow qualified demand",
          "> through technical SEO, content, funnels, CRM, automation and AI search optimization (AEO/GEO).",
          "> The site is bilingual: English and Egyptian Arabic.",
          "",
          "## Main pages",
          "",
          `- [Homepage (EN)](${BASE_URL}/)`,
          `- [Homepage (AR)](${BASE_URL}/ar)`,
          `- [Services](${BASE_URL}/services)`,
          `- [خدمات SEO بالعربي](${BASE_URL}/ar/services)`,
          `- [SEO Expert](${BASE_URL}/seo-expert)`,
          `- [E-commerce SEO](${BASE_URL}/ecommerce-seo)`,
          `- [Growth Marketing](${BASE_URL}/growth-marketing)`,
          `- [Free consultation](${BASE_URL}/free-consultation)`,
          `- [SEO course (500 lessons)](${BASE_URL}/course)`,
          "",
          "## Blog",
          "",
          `- [All articles](${BASE_URL}/blog)`,
          `- [مقالات بالعربي](${BASE_URL}/blog/ar)`,
          `- [English articles](${BASE_URL}/blog/en)`,
          "",
          "## Latest articles",
          "",
          ...latest.map((p) => `- [${p.title}](${BASE_URL}/blog/${p.slug}): ${p.description}`),
          "",
          "## Contact",
          "",
          `- Free consultation: ${BASE_URL}/free-consultation`,
          "",
        ];
        return new Response(lines.join("\n"), {
          headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
