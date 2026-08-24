import { createFileRoute, Link } from "@tanstack/react-router";
import { ARTICLE_ROADMAP_CLUSTERS, ARTICLE_ROADMAP_PAIRS, ARTICLE_ROADMAP_SIZE, getRoadmapClusterCount } from "@/lib/article-roadmap";

const base = "https://amrelbusaily.vercel.app";

export const Route = createFileRoute("/blog/content-plan")({
  head: () => ({
    meta: [
      { title: "خريطة 500 مقال SEO بالعربي والإنجليزي | عمرو البصيلي" },
      { name: "description", content: "خريطة تحريرية قابلة للتوسع إلى 500 مقال SEO ثنائي اللغة، موزعة حسب نية البحث والخدمة والسوق والأسئلة الشائعة." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "خريطة 500 مقال SEO بالعربي والإنجليزي" },
      { property: "og:description", content: "25 عنقودًا موضوعيًا يغطي SEO التقني والمحلي والمتاجر وAI وAEO/GEO والنمو في مصر والخليج." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${base}/blog/content-plan` },
      { property: "og:locale", content: "ar_EG" },
    ],
    links: [
      { rel: "canonical", href: `${base}/blog/content-plan` },
      { rel: "alternate", hrefLang: "ar", href: `${base}/blog/content-plan` },
      { rel: "alternate", hrefLang: "x-default", href: `${base}/blog/content-plan` },
    ],
  }),
  component: ContentPlan,
});

function ContentPlan() {
  return (
    <div className="min-h-screen" dir="rtl" lang="ar">
      <header className="sticky top-0 z-40 border-b border-border/60 backdrop-blur-md bg-background/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2 font-display font-semibold"><span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground font-mono text-sm">AE</span><span>Amr Elbusaily</span></Link>
          <nav className="flex items-center gap-4 text-sm text-muted-foreground"><Link to="/blog" className="hover:text-foreground">المدونة</Link><Link to="/course" className="hover:text-foreground">SEO Course</Link><Link to="/" className="hover:text-foreground">الرئيسية</Link></nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-border"><div className="absolute inset-0 grid-bg" aria-hidden="true" /><div className="relative mx-auto max-w-6xl px-6 py-20 md:py-24"><div className="max-w-3xl"><div className="font-mono text-xs uppercase tracking-[0.22em] text-primary">Editorial roadmap · AR / EN</div><h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">خريطة 500 مقال SEO، مبنية على نية حقيقية.</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">مش هدفنا نكرر نفس المقال باسم مدينة أو كلمة مختلفة. الخريطة بتقسم المحتوى إلى عناقيد، وكل عنقود فيه موضوعات تعليمية وتجارية ومحلية وأسئلة شائعة تساعد القارئ ياخد خطوة واضحة.</p><div className="mt-8 flex flex-wrap gap-3"><Link to="/blog" className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground glow-primary">اقرأ المقالات المنشورة</Link><Link to="/free-consultation" className="rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium hover:border-primary hover:text-primary">اطلب خطة محتوى</Link></div></div><div className="mt-12 grid gap-4 sm:grid-cols-3"><Stat value={`${ARTICLE_ROADMAP_SIZE}`} label="مقالًا مخططًا" /><Stat value={`${ARTICLE_ROADMAP_PAIRS}`} label="زوجًا عربيًا / إنجليزيًا" /><Stat value={`${ARTICLE_ROADMAP_CLUSTERS.length}`} label="عنقودًا موضوعيًا" /></div></div></section>

        <section className="mx-auto max-w-6xl px-6 py-16"><div className="mb-8 max-w-2xl"><div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Keyword architecture</div><h2 className="mt-3 text-3xl font-semibold">من الكلمات الأساسية إلى أسئلة العميل.</h2><p className="mt-4 leading-8 text-muted-foreground">كل صف يمثل عنقودًا قابلًا للتنفيذ. عناقيد الأولوية تحتوي على 10 موضوعات بالعربي و10 بالإنجليزي، والعناقيد المتخصصة تحتوي على 4 موضوعات بالعربي و4 بالإنجليزي، مع keyword أساسي وكلمات مساندة وFAQ قابلة للتوسيع عند كتابة المقال الكامل.</p></div><div className="overflow-hidden rounded-2xl border border-border"><div className="hidden grid-cols-[60px_1.2fr_1fr_1fr_100px] gap-4 border-b border-border bg-surface p-4 text-xs font-mono text-muted-foreground md:grid"><span>#</span><span>العنقود</span><span>السوق</span><span>النية</span><span>الحجم</span></div>{ARTICLE_ROADMAP_CLUSTERS.map((cluster, index) => <div key={cluster.id} className="grid gap-3 border-b border-border p-5 last:border-b-0 md:grid-cols-[60px_1.2fr_1fr_1fr_100px] md:items-center md:gap-4"><span className="font-mono text-sm text-primary">{String(index + 1).padStart(2, "0")}</span><div><div className="font-semibold">{cluster.labelAr}</div><div className="mt-1 text-sm text-muted-foreground">{cluster.labelEn}</div></div><div className="text-sm text-muted-foreground">{cluster.market}</div><div className="text-sm text-muted-foreground">{cluster.intent}</div><div className="font-mono text-sm text-primary">{getRoadmapClusterCount(cluster.id)} مقالًا</div></div>)}</div></section>

        <section className="border-y border-border bg-surface/30"><div className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-3"><InfoCard title="FAQ حقيقي" text="كل موضوع في الخريطة له 3 أسئلة مبدئية بالعربي والإنجليزي، تُراجع وتُوسع داخل المقال بدل حشو Schema." /><InfoCard title="سوق واضح" text="مصر والخليج لهم عناقيد منفصلة وسياق مختلف، مع شفافية كاملة حول تقديم الخدمة عن بعد وحسب السوق المستهدف." /><InfoCard title="نشر تدريجي" text="لا ننشر 500 صفحة رقيقة. كل دفعة تُكتب وتُراجع ثم تُفهرس بعد اكتمال قيمتها للقارئ." /></div></section>
      </main>
      <footer className="border-t border-border"><div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 px-6 py-8 text-sm text-muted-foreground"><span>© {new Date().getFullYear()} Amr Elbusaily</span><span>SEO · Digital Marketing · AI Growth · E-commerce</span></div></footer>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) { return <div className="rounded-xl border border-border bg-surface/70 p-5"><div className="font-mono text-2xl text-primary">{value}</div><div className="mt-2 text-sm text-muted-foreground">{label}</div></div>; }
function InfoCard({ title, text }: { title: string; text: string }) { return <div className="rounded-2xl border border-border bg-surface p-6"><h2 className="text-xl font-semibold">{title}</h2><p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p></div>; }
