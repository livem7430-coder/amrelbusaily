import { createFileRoute, Link } from "@tanstack/react-router";
import { courseLessons, courseModules, COURSE_UPDATED, publishedCourseLessons } from "@/lib/seo-course";

const base = "https://amrelbusaily.vercel.app";

export const Route = createFileRoute("/ar/course/")({
  head: () => ({
    meta: [
      { title: "كورس SEO من البداية حتى الاحتراف — عمرو البصيلي" },
      {
        name: "description",
        content:
          "كورس سيو ثنائي اللغة بالعربي والإنجليزي في 500 درس منظم، يشمل SEO التقني والمحتوى والمحلي والمتاجر وAI SEO والتحليلات والتنفيذ الاحترافي.",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "كورس SEO — 500 درس من البداية حتى الاحتراف" },
      { property: "og:description", content: "منهج عملي ثنائي اللغة لتعلم السيو خطوة بخطوة مع تطبيقات وقوائم فحص ومشروع تخرج.", },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${base}/ar/course` },
      { property: "og:locale", content: "ar_EG" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: `${base}/ar/course` },
      { rel: "alternate", hrefLang: "ar", href: `${base}/ar/course` },
      { rel: "alternate", hrefLang: "en", href: `${base}/course` },
      { rel: "alternate", hrefLang: "x-default", href: `${base}/course` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "كورس SEO من البداية حتى الاحتراف",
          description: "منهج SEO ثنائي اللغة من 500 درس في الاستراتيجية والتقنية والمحتوى والسيو المحلي والمتاجر وAI والتحليلات.",
          url: `${base}/ar/course`,
          inLanguage: ["ar", "en"],
          provider: { "@type": "Person", name: "Amr Elbusaily", url: `${base}/` },
          numberOfCredits: 500,
          educationalLevel: "مبتدئ حتى محترف",
          hasCourseInstance: { "@type": "CourseInstance", courseMode: "online", courseWorkload: "Self-paced" },
        }),
      },
    ],
  }),
  component: ArabicCourseIndex,
});

function ArabicCourseIndex() {
  return (
    <div className="min-h-screen" dir="rtl" lang="ar">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/ar" className="flex items-center gap-2 font-display font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-primary font-mono text-sm text-primary-foreground">AE</span>
            <span>عمرو البصيلي</span>
          </Link>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link to="/course" className="hover:text-foreground">English</Link>
            <Link to="/blog" className="hover:text-foreground">المدونة</Link>
            <Link to="/ar" className="hover:text-foreground">الرئيسية</Link>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 grid-bg" aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
            <div className="max-w-3xl">
              <div className="font-mono text-xs uppercase tracking-[0.24em] text-primary">SEO COURSE · AR / EN</div>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.12] md:text-6xl">كورس SEO من البداية حتى الاحتراف.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-9 text-muted-foreground">
                منهج عملي ثنائي اللغة لأصحاب المشاريع والمسوقين والفريلانسرز وفرق العمل. هتتعلم تفهم نية البحث، تبني استراتيجية، تصلح الأساس التقني، تكتب محتوى مفيد، وتقيس أثر السيو على النمو والمبيعات.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/ar/course/$lessonId" params={{ lessonId: publishedCourseLessons[0].id }} className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground glow-primary transition hover:opacity-90">ابدأ الدرس 001</Link>
                <Link to="/course" className="rounded-md border border-border px-5 py-3 text-sm font-medium transition hover:border-primary hover:text-primary">English course</Link>
              </div>
            </div>
            <div className="mt-14 grid gap-4 sm:grid-cols-3">
              <Stat value="500" label="درس مخطط" />
              <Stat value="20" label="وحدة تعليمية" />
              <Stat value={`${publishedCourseLessons.length}`} label="درس مكتوب بالكامل الآن" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.24em] text-primary">خريطة المنهج</div>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">طريق متدرج، مش شوية نصائح متفرقة.</h2>
            </div>
            <p className="max-w-md text-sm leading-8 text-muted-foreground">كل وحدة بتتحرك من الفكرة للإطار العملي والتطبيق والقياس والتسليم الاحترافي. الفهرس مصمم يتوسع لـ500 درس من غير صفحات مكررة أو محتوى ضعيف.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {courseModules.map((module) => {
              const lessons = courseLessons.filter((lesson) => lesson.moduleId === module.id);
              const published = lessons.filter((lesson) => lesson.published).length;
              return (
                <article key={module.id} className="rounded-2xl border border-border bg-surface p-6 transition hover:border-primary/50">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-mono text-xs text-primary">{String(module.order).padStart(2, "0")} · {module.levelAr}</div>
                      <h3 className="mt-3 text-xl font-semibold">{module.titleAr}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{module.titleEn}</p>
                    </div>
                    <div className="rounded-md border border-border px-2 py-1 font-mono text-xs text-muted-foreground">{published}/{lessons.length}</div>
                  </div>
                  <p className="mt-5 text-sm leading-8 text-muted-foreground">{module.descriptionAr}</p>
                  <div className="mt-5 flex items-center justify-between gap-4 border-t border-border pt-4 text-xs text-muted-foreground">
                    <span>الدروس {lessons[0].order}–{lessons[lessons.length - 1].order}</span>
                    {published > 0 ? <Link to="/ar/course/$lessonId" params={{ lessonId: lessons[0].id }} className="font-medium text-primary hover:underline">افتح الوحدة ←</Link> : <span>ضمن خطة التوسع</span>}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="border-y border-border bg-surface/30">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.24em] text-primary">تعلم بالتطبيق</div>
              <h2 className="mt-3 text-3xl font-semibold">النتيجة: قرار SEO أحسن.</h2>
              <p className="mt-5 max-w-2xl leading-8 text-muted-foreground">كل درس كامل فيه شرح مبسط، طريقة شغل، وتكليف عملي. هتتعلم بالعربي وتتعامل مع المصطلحات الإنجليزية المستخدمة داخل فرق السيو العالمية.</p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-6">
              <div className="font-mono text-xs text-primary">تحديث المنهج · {COURSE_UPDATED}</div>
              <p className="mt-4 text-sm leading-8 text-muted-foreground">أول درس من كل وحدة منشور بالكامل الآن. باقي الـ480 درس متخططين بعناوين ومسارات واضحة للتوسع بجودة، بدل نشر صفحات آلية ضعيفة.</p>
              <Link to="/ar/course/$lessonId" params={{ lessonId: publishedCourseLessons[0].id }} className="mt-5 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">شوف أول درس</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border"><div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 px-6 py-8 text-sm text-muted-foreground"><span>© {new Date().getFullYear()} Amr Elbusaily</span><span>SEO · Digital Marketing · AI Growth · E-commerce</span></div></footer>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return <div className="rounded-xl border border-border bg-surface/70 p-5"><div className="font-mono text-3xl text-primary">{value}</div><div className="mt-2 text-sm text-muted-foreground">{label}</div></div>;
}
