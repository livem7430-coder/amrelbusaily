import { createFileRoute, Link } from "@tanstack/react-router";
import { courseLessons, courseModules, COURSE_UPDATED, publishedCourseLessons } from "@/lib/seo-course";

const base = "https://amrelbusaily.vercel.app";

export const Route = createFileRoute("/course/")({
  head: () => ({
    meta: [
      { title: "SEO Course — From Beginner to Professional | Amr Elbusaily" },
      {
        name: "description",
        content:
          "A bilingual Arabic and English SEO course roadmap with 500 structured lessons covering technical SEO, content, local, e-commerce, AI SEO, analytics, and professional delivery.",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "SEO Course — 500-Lesson Bilingual Roadmap" },
      {
        property: "og:description",
        content: "Learn SEO from foundations to professional execution in Arabic and English, with practical assignments and a scalable 500-lesson curriculum.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${base}/course` },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: `${base}/course` },
      { rel: "alternate", hrefLang: "en", href: `${base}/course` },
      { rel: "alternate", hrefLang: "ar", href: `${base}/ar/course` },
      { rel: "alternate", hrefLang: "x-default", href: `${base}/course` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "SEO Course: From Beginner to Professional",
          description: "A bilingual 500-lesson SEO curriculum covering strategy, technical SEO, content, local, e-commerce, AI SEO, analytics, and growth.",
          url: `${base}/course`,
          inLanguage: ["en", "ar"],
          provider: { "@type": "Person", name: "Amr Elbusaily", url: `${base}/` },
          numberOfCredits: 500,
          educationalLevel: "Beginner to professional",
          hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: "online",
            courseWorkload: "Self-paced",
          },
        }),
      },
    ],
  }),
  component: CourseIndex,
});

function CourseIndex() {
  return (
    <div className="min-h-screen" dir="ltr" lang="en">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2 font-display font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-primary font-mono text-sm text-primary-foreground">AE</span>
            <span>Amr Elbusaily</span>
          </Link>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link to="/ar/course" className="hover:text-foreground">العربية</Link>
            <Link to="/blog" className="hover:text-foreground">Blog</Link>
            <Link to="/" className="hover:text-foreground">Home</Link>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 grid-bg" aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
            <div className="max-w-3xl">
              <div className="font-mono text-xs uppercase tracking-[0.24em] text-primary">SEO COURSE · EN / AR</div>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.08] md:text-6xl">
                Learn SEO from first principles to professional execution.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                A structured bilingual curriculum designed for marketers, founders, freelancers, and in-house teams. Learn how to diagnose search demand, build useful pages, improve technical foundations, and connect organic visibility to growth.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/course/$lessonId" params={{ lessonId: publishedCourseLessons[0].id }} className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground glow-primary transition hover:opacity-90">
                  Start lesson 001
                </Link>
                <Link to="/ar/course" className="rounded-md border border-border px-5 py-3 text-sm font-medium transition hover:border-primary hover:text-primary">
                  ابدأ بالعربي
                </Link>
              </div>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-3">
              <Stat value="500" label="planned lessons" />
              <Stat value="20" label="learning modules" />
              <Stat value={`${publishedCourseLessons.length}`} label="fully written now" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.24em] text-primary">Curriculum map</div>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">A path that compounds, not a pile of tips.</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-muted-foreground">
              Every module moves from concepts to workflow, application, measurement, and professional delivery. The inventory is designed to grow to 500 lessons without publishing repetitive pages.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {courseModules.map((module) => {
              const lessons = courseLessons.filter((lesson) => lesson.moduleId === module.id);
              const published = lessons.filter((lesson) => lesson.published).length;
              return (
                <article key={module.id} className="rounded-2xl border border-border bg-surface p-6 transition hover:border-primary/50">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-mono text-xs text-primary">{String(module.order).padStart(2, "0")} · {module.levelEn}</div>
                      <h3 className="mt-3 text-xl font-semibold">{module.titleEn}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{module.titleAr}</p>
                    </div>
                    <div className="rounded-md border border-border px-2 py-1 font-mono text-xs text-muted-foreground">{published}/{lessons.length}</div>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-muted-foreground">{module.descriptionEn}</p>
                  <div className="mt-5 flex items-center justify-between gap-4 border-t border-border pt-4 text-xs text-muted-foreground">
                    <span>Lessons {lessons[0].order}–{lessons[lessons.length - 1].order}</span>
                    {published > 0 ? (
                      <Link to="/course/$lessonId" params={{ lessonId: lessons[0].id }} className="font-medium text-primary hover:underline">Open module →</Link>
                    ) : (
                      <span>Roadmap scheduled</span>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="border-y border-border bg-surface/30">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.24em] text-primary">Built for practice</div>
              <h2 className="mt-3 text-3xl font-semibold">The output is a better SEO decision.</h2>
              <p className="mt-5 max-w-2xl text-muted-foreground leading-8">
                Each complete lesson includes a plain-language explanation, a working method, and an assignment. The course is intentionally bilingual so you can learn in Arabic and use the professional vocabulary used in international SEO teams.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-6">
              <div className="font-mono text-xs text-primary">Release note · {COURSE_UPDATED}</div>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                The first lesson in every module is live now. The remaining 480 lessons are mapped, titled, and reserved for high-quality expansion instead of thin auto-generated content.
              </p>
              <Link to="/course/$lessonId" params={{ lessonId: publishedCourseLessons[0].id }} className="mt-5 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">View the first lesson</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 px-6 py-8 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} Amr Elbusaily</span>
          <span>SEO · Digital Marketing · AI Growth · E-commerce</span>
        </div>
      </footer>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-border bg-surface/70 p-5">
      <div className="font-mono text-3xl text-primary">{value}</div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}
