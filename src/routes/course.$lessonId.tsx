import { createFileRoute, notFound } from "@tanstack/react-router";
import { CourseLessonLayout } from "@/components/CourseLessonLayout";
import { COURSE_UPDATED, getCourseLesson, getCourseModule } from "@/lib/seo-course";

const base = "https://amrelbusaily.vercel.app";

export const Route = createFileRoute("/course/$lessonId")({
  loader: ({ params }) => {
    const lesson = getCourseLesson(params.lessonId);
    if (!lesson) throw notFound();
    return { lesson };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Course lesson not found" }, { name: "robots", content: "noindex" }] };
    const lesson = loaderData.lesson;
    const module = getCourseModule(lesson.moduleId);
    const title = lesson.titleEn;
    const description = lesson.descriptionEn;
    const url = `${base}/course/${params.lessonId}`;
    const alternateUrl = `${base}/ar/course/${params.lessonId}`;
    return {
      meta: [
        { title: `${title} | SEO Course | Amr Elbusaily` },
        { name: "description", content: description },
        { name: "robots", content: lesson.published ? "index, follow, max-image-preview:large" : "noindex, follow" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:locale", content: "en_US" },
        { name: "twitter:card", content: "summary" },
      ],
      links: [
        { rel: "canonical", href: url },
        { rel: "alternate", hrefLang: "en", href: url },
        { rel: "alternate", hrefLang: "ar", href: alternateUrl },
        { rel: "alternate", hrefLang: "x-default", href: url },
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
            inLanguage: "en",
            learningResourceType: "Lesson",
            educationalLevel: module?.levelEn,
            isPartOf: { "@type": "Course", name: "SEO Course: From Beginner to Professional", url: `${base}/course` },
            author: { "@type": "Person", name: "Amr Elbusaily", url: `${base}/` },
            dateModified: COURSE_UPDATED,
          }),
        },
      ],
    };
  },
  component: EnglishCourseLesson,
});

function EnglishCourseLesson() {
  const { lesson } = Route.useLoaderData();
  return <CourseLessonLayout lesson={lesson} lang="en" />;
}
