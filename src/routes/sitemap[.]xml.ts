import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { blogPosts } from "@/lib/blog-posts";
import { COURSE_UPDATED, publishedCourseLessons } from "@/lib/seo-course";
import { SERVICE_DETAIL_SLUGS } from "@/lib/service-details";

const BASE_URL = "https://amrelbusaily.vercel.app";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const today = new Date().toISOString().slice(0, 10);
        const entries: {
          path: string;
          changefreq: string;
          priority: string;
          lastmod: string;
        }[] = [
          { path: "/", changefreq: "weekly", priority: "1.0", lastmod: today },
          { path: "/ar", changefreq: "weekly", priority: "1.0", lastmod: today },
          { path: "/services", changefreq: "monthly", priority: "0.9", lastmod: today },
          { path: "/ar/services", changefreq: "monthly", priority: "0.9", lastmod: today },
          { path: "/seo-expert", changefreq: "monthly", priority: "0.9", lastmod: today },
          { path: "/ar/seo-expert", changefreq: "monthly", priority: "0.9", lastmod: today },
          { path: "/seo-company", changefreq: "monthly", priority: "0.9", lastmod: today },
          { path: "/ar/seo-company", changefreq: "monthly", priority: "0.9", lastmod: today },
          { path: "/seo-services", changefreq: "monthly", priority: "0.9", lastmod: today },
          { path: "/ar/seo-services", changefreq: "monthly", priority: "0.9", lastmod: today },
          { path: "/keyword-research", changefreq: "monthly", priority: "0.9", lastmod: today },
          { path: "/ar/keyword-research", changefreq: "monthly", priority: "0.9", lastmod: today },
          { path: "/content-seo", changefreq: "monthly", priority: "0.9", lastmod: today },
          { path: "/ar/content-seo", changefreq: "monthly", priority: "0.9", lastmod: today },
          { path: "/international-seo", changefreq: "monthly", priority: "0.9", lastmod: today },
          { path: "/ar/international-seo", changefreq: "monthly", priority: "0.9", lastmod: today },
          { path: "/content-strategy", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/ar/content-strategy", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/ar/ai-seo", changefreq: "monthly", priority: "0.9", lastmod: today },
          { path: "/offers", changefreq: "monthly", priority: "0.9", lastmod: today },
          { path: "/ar/offers", changefreq: "monthly", priority: "0.9", lastmod: today },
          { path: "/ecommerce-seo", changefreq: "monthly", priority: "0.9", lastmod: today },
          { path: "/ar/ecommerce-seo", changefreq: "monthly", priority: "0.9", lastmod: today },
          ...SERVICE_DETAIL_SLUGS.flatMap((slug) => [
            { path: `/services/${slug}`, changefreq: "monthly", priority: "0.8", lastmod: today },
            { path: `/ar/services/${slug}`, changefreq: "monthly", priority: "0.8", lastmod: today },
          ]),
          { path: "/blog", changefreq: "weekly", priority: "0.8", lastmod: today },
          { path: "/blog/ar", changefreq: "weekly", priority: "0.8", lastmod: today },
          { path: "/blog/en", changefreq: "weekly", priority: "0.8", lastmod: today },
          { path: "/blog/content-plan", changefreq: "monthly", priority: "0.7", lastmod: today },
          { path: "/blog/international-content-plan", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/course", changefreq: "weekly", priority: "0.8", lastmod: COURSE_UPDATED },
          { path: "/ar/course", changefreq: "weekly", priority: "0.8", lastmod: COURSE_UPDATED },
          { path: "/growth-marketing", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/ar/growth-marketing", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/seo-geo-eli5", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/ar/seo-geo-eli5", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/free-consultation", changefreq: "monthly", priority: "0.9", lastmod: today },
          { path: "/ar/free-consultation", changefreq: "monthly", priority: "0.9", lastmod: today },
          ...blogPosts.map((p) => ({
            path: `/blog/${p.slug}`,
            changefreq: "monthly",
            priority: "0.7",
            lastmod: p.date,
          })),
          ...publishedCourseLessons.flatMap((lesson) => [
            { path: `/course/${lesson.id}`, changefreq: "monthly", priority: "0.6", lastmod: COURSE_UPDATED },
            { path: `/ar/course/${lesson.id}`, changefreq: "monthly", priority: "0.6", lastmod: COURSE_UPDATED },
          ]),
        ];
        const known = new Set(entries.map((e) => e.path));
        const blogAlt = new Map<string, string>();
        for (const post of blogPosts) {
          if (post.altSlug) blogAlt.set(`/blog/${post.slug}`, `/blog/${post.altSlug}`);
        }
        const alternateOf = (path: string): string | null => {
          if (blogAlt.has(path)) return blogAlt.get(path)!;
          const counterpart =
            path === "/ar"
              ? "/"
              : path.startsWith("/ar/")
                ? path.slice(3)
                : path === "/"
                  ? "/ar"
                  : `/ar${path}`;
          return known.has(counterpart) ? counterpart : null;
        };
        const langOf = (path: string) =>
          path === "/ar" || path.startsWith("/ar/") || path.endsWith("-ar") ? "ar" : "en";

        const urls = entries.map((e) => {
          const alt = alternateOf(e.path);
          const lang = langOf(e.path);
          const alternates = alt
            ? [
                `    <xhtml:link rel="alternate" hreflang="${lang}" href="${BASE_URL}${e.path}" />`,
                `    <xhtml:link rel="alternate" hreflang="${lang === "ar" ? "en" : "ar"}" href="${BASE_URL}${alt}" />`,
                `    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}${lang === "ar" ? alt : e.path}" />`,
              ]
            : [];
          return [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            `    <lastmod>${e.lastmod}</lastmod>`,
            `    <changefreq>${e.changefreq}</changefreq>`,
            `    <priority>${e.priority}</priority>`,
            ...alternates,
            `  </url>`,
          ].join("\n");
        });
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
