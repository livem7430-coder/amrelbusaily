import { Link } from "@tanstack/react-router";
import type { CourseLanguage, CourseLesson } from "@/lib/seo-course";
import { courseLessons, getCourseModule } from "@/lib/seo-course";

export function CourseLessonLayout({ lesson, lang }: { lesson: CourseLesson; lang: CourseLanguage }) {
  const module = getCourseModule(lesson.moduleId);
  const previous = courseLessons[lesson.order - 2];
  const next = courseLessons[lesson.order];
  const isArabic = lang === "ar";
  const title = isArabic ? lesson.titleAr : lesson.titleEn;
  const description = isArabic ? lesson.descriptionAr : lesson.descriptionEn;
  const sections = lesson.sections ?? [];

  return (
    <div className="min-h-screen" dir={isArabic ? "rtl" : "ltr"} lang={lang}>
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-6 py-4">
          <Link to={isArabic ? "/ar" : "/"} className="flex items-center gap-2 font-display font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-primary font-mono text-sm text-primary-foreground">AE</span>
            <span>Amr Elbusaily</span>
          </Link>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link to={isArabic ? "/ar/course" : "/course"} className="hover:text-foreground">{isArabic ? "فهرس الكورس" : "Course index"}</Link>
            <Link to={isArabic ? "/course" : "/ar/course"} className="hover:text-foreground">{isArabic ? "English" : "العربية"}</Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <nav aria-label={isArabic ? "مسار التنقل" : "Breadcrumb"} className="mb-8 text-sm text-muted-foreground">
          <Link to={isArabic ? "/ar" : "/"} className="hover:text-primary">{isArabic ? "الرئيسية" : "Home"}</Link>
          <span className="mx-2">/</span>
          <Link to={isArabic ? "/ar/course" : "/course"} className="hover:text-primary">{isArabic ? "الكورس" : "Course"}</Link>
          <span className="mx-2">/</span>
          <span>{String(lesson.order).padStart(3, "0")}</span>
        </nav>

        <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
          {isArabic ? `الوحدة ${module?.order ?? ""} · الدرس ${String(lesson.order).padStart(3, "0")}` : `Module ${module?.order ?? ""} · Lesson ${String(lesson.order).padStart(3, "0")}`}
        </div>
        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">{title}</h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">{description}</p>

        {lesson.published ? (
          <>
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-muted-foreground">
              <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-primary">{isArabic ? "درس كامل" : "Full lesson"}</span>
              <span className="rounded-full border border-border px-3 py-1">{lesson.duration}</span>
              <span className="rounded-full border border-border px-3 py-1">{isArabic ? module?.levelAr : module?.levelEn}</span>
            </div>
            <div className="mt-12 space-y-10 text-base leading-8 text-foreground/90 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-foreground [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:ps-6 [&_strong]:text-foreground">
              {sections.map((section) => (
                <section key={section.headingEn}>
                  <h2>{isArabic ? section.headingAr : section.headingEn}</h2>
                  <p className="mt-4">{isArabic ? section.bodyAr : section.bodyEn}</p>
                  <ul className="mt-4">
                    {(isArabic ? section.bulletsAr : section.bulletsEn).map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                </section>
              ))}
            </div>
          </>
        ) : (
          <section className="mt-12 rounded-2xl border border-border bg-surface p-8">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{isArabic ? "ضمن خطة التوسع" : "Planned in the roadmap"}</div>
            <h2 className="mt-4 text-2xl font-semibold">{isArabic ? "هذا الدرس موجود في خريطة الـ500 درس." : "This lesson is part of the 500-lesson course map."}</h2>
            <p className="mt-4 leading-8 text-muted-foreground">
              {isArabic
                ? "العنوان والمسار التعليمي محددان. سيتم نشر الشرح الكامل بعد مراجعته وإضافة التطبيق العملي، حتى يظل كل درس مفيدًا وليس مجرد صفحة مكررة لمحركات البحث."
                : "The lesson title and learning path are mapped. Full teaching content will be released after review and practical examples are added, so every lesson remains useful rather than becoming a repetitive SEO page."}
            </p>
            <Link to={isArabic ? "/ar/course" : "/course"} className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">{isArabic ? "العودة إلى الفهرس" : "Back to course index"}</Link>
          </section>
        )}

        {lesson.published && (
          <section className="mt-16 rounded-2xl border border-border bg-surface p-8">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{isArabic ? "تطبيق الدرس" : "Apply this lesson"}</div>
            <h2 className="mt-3 text-2xl font-semibold">{isArabic ? "حوّل الفكرة إلى مخرج واضح." : "Turn the idea into a clear output."}</h2>
            <p className="mt-4 leading-8 text-muted-foreground">{isArabic ? module?.practiceAr : module?.practiceEn}</p>
            <Link to={isArabic ? "/ar/free-consultation" : "/free-consultation"} className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">{isArabic ? "اطلب مراجعة SEO" : "Request an SEO review"}</Link>
          </section>
        )}

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-sm">
          {previous ? <Link to={isArabic ? "/ar/course/$lessonId" : "/course/$lessonId"} params={{ lessonId: previous.id }} className="text-muted-foreground hover:text-primary">{isArabic ? `← الدرس السابق ${String(previous.order).padStart(3, "0")}` : `← Previous ${String(previous.order).padStart(3, "0")}`}</Link> : <span />}
          {next ? <Link to={isArabic ? "/ar/course/$lessonId" : "/course/$lessonId"} params={{ lessonId: next.id }} className="text-primary hover:underline">{isArabic ? `الدرس التالي ${String(next.order).padStart(3, "0")} →` : `Next ${String(next.order).padStart(3, "0")} →`}</Link> : <span />}
        </div>
      </main>

      <footer className="border-t border-border"><div className="mx-auto max-w-4xl px-6 py-8 text-sm text-muted-foreground">© {new Date().getFullYear()} Amr Elbusaily</div></footer>
    </div>
  );
}
