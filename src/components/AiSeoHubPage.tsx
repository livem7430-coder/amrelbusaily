import type { ReactNode } from "react";

const base = "https://amrelbusaily.vercel.app";

type LinkItem = { label: string; href: string; body: string };

const articles: LinkItem[] = [
  { label: "أساسيات تحسين البحث بالذكاء الاصطناعي", href: "/blog/ai-search-optimization-basics-ar", body: "مدخل عملي لفهم AI Search وما الذي يبقى من أساسيات SEO." },
  { label: "استراتيجية المحتوى لـAI Overviews وAI Mode", href: "/blog/ai-overviews-content-strategy-ar", body: "كيف تبني محتوى نصيًا واضحًا يدعم الاستكشاف والإجابة بدون وعود بالظهور." },
  { label: "GEO للبحث التوليدي", href: "/blog/geo-for-ai-search-ar", body: "إطار عملي لفهم الظهور في تجارب البحث التوليدي وربطه بجودة الصفحة." },
  { label: "محتوى الأسئلة والأجوبة وAEO", href: "/blog/aeo-question-answer-content-ar", body: "طريقة تنظيم الأسئلة والإجابات بحيث تخدم القارئ والصفحة التجارية." },
  { label: "ضوابط جودة محتوى AI", href: "/blog/ai-content-quality-controls-ar", body: "مراجعة الحقائق والمصادر والخبرة قبل نشر محتوى بمساعدة أدوات الذكاء الاصطناعي." },
  { label: "LLM SEO للـSaaS", href: "/blog/llm-seo-for-saas-ar", body: "ربط وضوح المنتج ومحتوى حالات الاستخدام بظهور منتجات SaaS في الإجابات." },
];

const faqs = [
  { q: "ما هو AI SEO؟", a: "AI SEO هو تحسين بنية الموقع ومحتواه ووضوح كيانه بحيث يفهمه المستخدم ومحركات البحث وتجارب البحث المدعومة بالذكاء الاصطناعي. لا يعني تكرار كلمة AI أو إضافة Schema سحري، بل يبدأ من SEO التقني والمحتوى المفيد والروابط الداخلية والبيانات المتسقة." },
  { q: "هل يوجد Schema خاص يضمن الظهور في إجابات الذكاء الاصطناعي؟", a: "لا يوجد Schema خاص يضمن الظهور في AI Overviews أو AI Mode. الأساس هو أن تكون الصفحة قابلة للزحف والفهرسة، ومحتواها النصي مفيدًا، وبياناتها المنظمة مطابقة للمعلومات الظاهرة. قد تساعد البيانات المنظمة على فهم الصفحة لكنها لا تضمن نتيجة محسّنة." },
  { q: "هل استخدام AI في كتابة المقالات يضر SEO؟", a: "استخدام AI للمساعدة في البحث أو التنظيم أو المسودة ليس المشكلة وحده. الخطر في نشر صفحات كثيرة بلا أصالة أو دقة أو قيمة مضافة. يجب مراجعة الحقائق والادعاءات وإضافة خبرة وأمثلة ومصادر حقيقية قبل النشر." },
  { q: "كيف أقيس نجاح AI SEO؟", a: "ابدأ بالظهور والنقرات والاستعلامات في Search Console، ثم راقب جودة الزيارات والتسجيلات والاستفسارات والتحويلات. لا تنسب كل نتيجة إلى AI SEO وحده إذا كانت الصفحة تستفيد أيضًا من الإعلانات أو الإحالات أو البحث عن العلامة." },
  { q: "هل AI SEO مناسب لشركات الخدمات وB2B؟", a: "نعم عندما يرتبط بالمشكلة ودورة الشراء، مثل صفحات حالات الاستخدام والمقارنات والأدلة والأسئلة التي يطرحها العميل قبل التواصل. لا يكفي نشر مقالات عامة عن AI إذا لم تقرّب القارئ من خدمة أو قرار حقيقي." },
  { q: "هل تعمل الاستراتيجية بالعربي والإنجليزي؟", a: "نعم، لكن كل لغة تحتاج تجربة ومحتوى مناسبين لجمهورها. نستخدم صفحات منفصلة وروابط hreflang صحيحة ونبدأ بالصفحات ذات الطلب والقيمة بدل ترجمة كل المحتوى آليًا دفعة واحدة." },
];

function ActionLink({ href, children, primary = false }: { href: string; children: ReactNode; primary?: boolean }) {
  return <a href={href} className={primary ? "rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground glow-primary" : "rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium hover:border-primary hover:text-primary"}>{children}</a>;
}

export function aiSeoHubHead() {
  const url = `${base}/ar/ai-seo`;
  return {
    meta: [
      { title: "AI SEO وAEO وGEO: دليل وخدمات تحسين البحث بالذكاء الاصطناعي | عمرو البصيلي" },
      { name: "description", content: "Hub Page عربية عن AI SEO وAEO وGEO: الأساس التقني، المحتوى، الكيانات، الأسئلة، القياس، وخدمات تحسين ظهور المواقع في البحث المدعوم بالذكاء الاصطناعي." },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { property: "og:title", content: "AI SEO وAEO وGEO | عمرو البصيلي" },
      { property: "og:description", content: "دليل عملي لتحسين المواقع للبحث التقليدي وتجارب البحث بالذكاء الاصطناعي، مع محتوى وخدمات وروابط تنفيذية." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:locale", content: "ar_EG" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "ar", href: url },
      { rel: "alternate", hrefLang: "x-default", href: url },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              "@id": `${url}#webpage`,
              url,
              name: "AI SEO وAEO وGEO",
              description: "دليل وخدمات ومقالات عربية عن تحسين البحث بالذكاء الاصطناعي.",
              inLanguage: "ar",
              isPartOf: { "@id": `${base}/#website` },
              about: { "@id": `${base}/#person` },
            },
            {
              "@type": "Person",
              "@id": `${base}/#person`,
              name: "عمرو البصيلي",
              alternateName: ["Amr Elbusaily", "Amro Elbusaily"],
              url: `${base}/ar`,
            },
            {
              "@type": "BreadcrumbList",
              "@id": `${url}#breadcrumb`,
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "الرئيسية", item: `${base}/ar` },
                { "@type": "ListItem", position: 2, name: "AI SEO وAEO وGEO", item: url },
              ],
            },
            {
              "@type": "ItemList",
              "@id": `${url}#articles`,
              name: "مقالات AI SEO المرتبطة",
              itemListElement: articles.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.label, url: `${base}${item.href}` })),
            },
            {
              "@type": "FAQPage",
              "@id": `${url}#faq`,
              mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
            },
          ],
        }),
      },
    ],
  };
}

export function AiSeoHubPage() {
  return (
    <div className="min-h-screen" dir="rtl" lang="ar">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/ar" className="flex items-center gap-2 font-display font-semibold"><span className="grid h-8 w-8 place-items-center rounded-md bg-primary font-mono text-sm text-primary-foreground">AE</span><span>عمرو البصيلي</span></a>
          <nav className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="/ar/blog" className="hover:text-foreground">المقالات</a>
            <a href="/ar/services/ai-seo-aeo-geo" className="hover:text-foreground">خدمة AI SEO</a>
            <a href="/ai-seo" className="font-mono text-xs hover:text-foreground">EN</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 grid-bg" aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
            <div className="max-w-4xl">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">AI SEO · AEO · GEO</div>
              <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">AI SEO يربط <span className="text-gradient">الفهم بالظهور.</span></h1>
              <p className="mt-6 max-w-3xl text-lg leading-9 text-muted-foreground">دليل عربي عملي لتحسين المواقع للبحث التقليدي وتجارب البحث المدعومة بالذكاء الاصطناعي، من الأساس التقني والمحتوى إلى وضوح الكيان والقياس والتحويل.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ActionLink href="/ar/services/ai-seo-aeo-geo" primary>اطلب خطة AI SEO</ActionLink>
                <ActionLink href="/ar/content-strategy">شاهد استراتيجية المحتوى</ActionLink>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface/30">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-7 md:p-10">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">الإجابة المباشرة</div>
              <p className="mt-4 max-w-4xl text-xl leading-9 text-foreground">AI SEO ليس مجموعة حيل منفصلة عن SEO. هو طريقة لتوضيح ما يقدمه الموقع، ولمن، وبأي دليل، ثم تقديمه في HTML قابل للزحف مع بنية روابط ومحتوى وأسئلة وبيانات منظمة تطابق ما يراه المستخدم. لا يوجد Schema يضمن الظهور في إجابات الذكاء الاصطناعي؛ الأساس هو صفحة مفيدة ومفهرسة وقابلة للفهم.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl"><div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">ما الذي يشمله AI SEO؟</div><h2 className="mt-3 text-3xl font-semibold md:text-4xl">ستة محاور تبني ظهورًا قابلًا للفهم</h2><p className="mt-5 leading-8 text-muted-foreground">الهدف ليس أن يبدو الموقع ذكيًا، بل أن يستطيع العميل ومحرك البحث فهم العلاقة بين المشكلة والمنتج أو الخدمة والدليل والخطوة التالية.</p></div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["01", "أساس تقني قابل للزحف", "راجع الفهرسة، JavaScript، السرعة، canonical، sitemap، وبنية HTML قبل إضافة طبقات محتوى جديدة."],
              ["02", "إجابات مباشرة ثم تفاصيل", "ابدأ كل صفحة بسؤال أو قرار واضح، ثم قدّم سياقًا وأمثلة وحدودًا تساعد القارئ على التقييم."],
              ["03", "وضوح الكيان والمؤلف", "اربط الموقع بالمؤلف والخدمة والمنتج بمعلومات متسقة، ولا تستخدم أسماء أو شهادات أو أرقامًا غير قابلة للتحقق."],
              ["04", "صفحات حالات الاستخدام", "حوّل الميزات إلى سيناريوهات حقيقية وقطاعات ومشكلات، مع تجنب نسخ نفس الصفحة وتغيير اسم الجمهور فقط."],
              ["05", "محتوى يستحق الاقتباس", "أضف تجربة أصلية ومصادر وأمثلة ومراجعة بشرية، واستخدم AI للمساعدة لا لإغراق الموقع بصفحات متشابهة."],
              ["06", "قياس من الظهور للتحويل", "تابع الاستعلامات والنقرات ثم التسجيل والاستفسار والتفعيل أو الإيراد عندما تسمح البيانات بذلك."],
            ].map(([number, title, body]) => <article key={number} className="rounded-2xl border border-border bg-surface p-7"><div className="font-mono text-xs text-primary">{number}</div><h3 className="mt-4 text-xl font-semibold">{title}</h3><p className="mt-3 leading-8 text-muted-foreground">{body}</p></article>)}
          </div>
        </section>

        <section className="border-y border-border bg-surface/30">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="max-w-3xl"><div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">منهج التنفيذ</div><h2 className="mt-3 text-3xl font-semibold md:text-4xl">من سؤال العميل إلى صفحة قابلة للقياس</h2></div>
            <div className="mt-10 grid gap-0 border-y border-border">
              {[
                ["01", "نحدد النية والسياق", "نجمع أسئلة المبيعات والعملاء ونحدد هل الصفحة تعليمية أم تجارية أم مخصصة لحالة استخدام أو مقارنة."],
                ["02", "نراجع الفهم التقني", "نتأكد أن الصفحة قابلة للوصول والزحف، وأن النص المهم موجود في HTML، وأن canonical وSchema يصفان المحتوى الظاهر."],
                ["03", "نبني المحتوى والروابط", "نربط المقال بصفحة الخدمة وبمقالات قليلة ذات صلة، ونستخدم Anchor Text يوضح الوجهة بدل تكرار عبارات عامة."],
                ["04", "نقيس ونتعلم", "نراجع Search Console والتحليلات والتحويلات، ثم نحدّث ما يحتاج إجابة أو دليلًا أفضل دون تغيير التاريخ بلا سبب."],
              ].map(([number, title, body]) => <div key={number} className="grid gap-4 border-b border-border py-7 last:border-b-0 md:grid-cols-[80px_1fr_1.5fr] md:items-start md:gap-8"><div className="font-mono text-sm text-primary">{number}</div><h3 className="text-xl font-semibold">{title}</h3><p className="leading-8 text-muted-foreground">{body}</p></div>)}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-5"><div className="max-w-3xl"><div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">مكتبة AI SEO</div><h2 className="mt-3 text-3xl font-semibold md:text-4xl">ابدأ من السؤال الأقرب لعملك</h2><p className="mt-5 leading-8 text-muted-foreground">هذه المقالات جزء من عنقود واحد، وكل مقال يقود إلى خطوة أو خدمة أكثر تحديدًا.</p></div><ActionLink href="/ar/blog">كل المقالات</ActionLink></div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{articles.map((item) => <a key={item.href} href={item.href} className="rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-primary"><h3 className="text-xl font-semibold leading-8">{item.label}</h3><p className="mt-3 leading-8 text-muted-foreground">{item.body}</p><span className="mt-5 inline-block text-sm text-primary">اقرأ المقال ←</span></a>)}</div>
        </section>

        <section className="border-y border-border bg-surface/30">
          <div className="mx-auto max-w-6xl px-6 py-20"><div className="grid gap-6 md:grid-cols-3"><a href="/ar/services/ai-seo-aeo-geo" className="rounded-2xl border border-primary/30 bg-primary/5 p-8"><h2 className="text-2xl font-semibold">خدمة AI SEO وAEO/GEO</h2><p className="mt-4 leading-8 text-muted-foreground">خطة مرتبطة بالبنية والمحتوى والكيان والقياس، لا مجرد قائمة أدوات.</p></a><a href="/ar/services/content-seo-copywriting" className="rounded-2xl border border-border bg-surface p-8"><h2 className="text-2xl font-semibold">Content SEO</h2><p className="mt-4 leading-8 text-muted-foreground">صياغة صفحات ومقالات تجيب عن نية البحث وتخدم الخطوة التجارية التالية.</p></a><a href="/ar/services/analytics-measurement" className="rounded-2xl border border-border bg-surface p-8"><h2 className="text-2xl font-semibold">Analytics & Measurement</h2><p className="mt-4 leading-8 text-muted-foreground">ربط الظهور والنقرات بجودة الزيارة والتسجيل والاستفسار عندما تتوفر البيانات.</p></a></div></div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20"><div className="max-w-3xl"><div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">FAQ</div><h2 className="mt-3 text-3xl font-semibold md:text-4xl">أسئلة شائعة عن AI SEO</h2></div><div className="mt-10 grid gap-4 md:grid-cols-2">{faqs.map((item) => <details key={item.q} className="group rounded-xl border border-border bg-surface p-6"><summary className="cursor-pointer list-none pr-6 text-lg font-semibold marker:hidden">{item.q}</summary><p className="mt-4 leading-8 text-muted-foreground">{item.a}</p></details>)}</div></section>

        <section className="border-t border-border bg-surface/30"><div className="mx-auto max-w-6xl px-6 py-20"><div className="rounded-2xl border border-border bg-surface p-8 md:p-12"><div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">الخطوة التالية</div><h2 className="mt-4 text-3xl font-semibold md:text-4xl">ابدأ من الصفحة التي تريد أن يفهمها العميل</h2><p className="mt-4 max-w-2xl leading-8 text-muted-foreground">أرسل رابط الموقع والهدف التجاري والسوق واللغة. سنحدد هل نقطة البداية هي الأوديت التقني، خريطة المحتوى، صفحة حالة استخدام، أو تحسين التحويل.</p><div className="mt-7 flex flex-wrap gap-4"><ActionLink href="mailto:amreelbasily@gmail.com?subject=AI%20SEO%20strategy" primary>اطلب خطة AI SEO</ActionLink><ActionLink href="/ar/services">كل الخدمات</ActionLink><ActionLink href="/ar">الصفحة الرئيسية</ActionLink></div></div></div></section>
      </main>

      <footer className="border-t border-border"><div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 px-6 py-8 text-sm text-muted-foreground"><span>© {new Date().getFullYear()} عمرو البصيلي</span><span>SEO · Digital Marketing · AI Growth · E-commerce</span></div></footer>
    </div>
  );
}
