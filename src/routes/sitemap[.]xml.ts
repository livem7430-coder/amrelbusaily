import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { blogPosts } from "@/lib/blog-posts";
import { COURSE_UPDATED, publishedCourseLessons } from "@/lib/seo-course";

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
          { path: "/blog", changefreq: "weekly", priority: "0.8", lastmod: today },
          { path: "/blog/content-plan", changefreq: "monthly", priority: "0.7", lastmod: today },
          { path: "/course", changefreq: "weekly", priority: "0.8", lastmod: COURSE_UPDATED },
          { path: "/ar/course", changefreq: "weekly", priority: "0.8", lastmod: COURSE_UPDATED },
          {
            path: "/free-consultation",
            changefreq: "monthly",
            priority: "0.9",
            lastmod: today,
          },
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
        const urls = entries.map(
          (e) =>
            `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
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
