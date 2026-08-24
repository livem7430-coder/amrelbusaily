import { createFileRoute, notFound } from "@tanstack/react-router";
import { CourseLessonLayout } from "@/components/CourseLessonLayout";
import { COURSE_UPDATED, getCourseLesson, getCourseModule } from "@/lib/seo-course";

const base = "https://amrelbusaily.vercel.app";

export const Route = createFileRoute("/ar/course/$lessonId")({
  loader: ({ params }) => {
    const lesson = getCourseLesson(params.lessonId);
    if (!lesson) throw notFound();
    return { lesson };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) return { meta: [{ title: "درس الكورس غير موجود" }, { name: "robots", content: "noindex" }] };
    const lesson = loaderData.lesson;
    const module = getCourseModule(lesson.moduleId);
    const title = lesson.titleAr;
    const description = lesson.descriptionAr;
    const url = `${base}/ar/course/${params.lessonId}`;
    const alternateUrl = `${base}/course/${params.lessonId}`;
    return {
      meta: [
        { title: `${title} | كورس SEO | عمرو البصيلي` },
        { name: "description", content: description },
        { name: "robots", content: lesson.published ? "index, follow, max-image-preview:large" : "noindex, follow" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:locale", content: "ar_EG" },
        { name: "twitter:card", content: "summary" },
      ],
      links: [
        { rel: "canonical", href: url },
        { rel: "alternate", hrefLang: "ar", href: url },
        { rel: "alternate", hrefLang: "en", href: alternateUrl },
        { rel: "alternate", hrefLang: "x-default", href: alternateUrl },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LearningResource",
            name: title,
            description,
            url,
            inLanguage: "ar",
            learningResourceType: "Lesson",
            educationalLevel: module?.levelAr,
            isPartOf: { "@type": "Course", name: "كورس SEO من البداية حتى الاحتراف", url: `${base}/ar/course` },
            author: { "@type": "Person", name: "Amr Elbusaily", url: `${base}/` },
            dateModified: COURSE_UPDATED,
          }),
        },
      ],
    };
  },
  component: ArabicCourseLesson,
});

function ArabicCourseLesson() {
  const { lesson } = Route.useLoaderData();
  return <CourseLessonLayout lesson={lesson} lang="ar" />;
}
