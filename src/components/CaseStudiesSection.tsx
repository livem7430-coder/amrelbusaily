type Language = "ar" | "en";
type Mode = "keyword" | "content";

type CaseStudy = {
  label: string;
  title: string;
  context: string;
  work: string;
  lesson: string;
  image: string;
  alt: string;
};

const cases: Record<Language, Record<Mode, CaseStudy[]>> = {
  ar: {
    keyword: [
      { label: "لقطة أداء بحث", title: "من قائمة كلمات إلى لوحة قياس", context: "لقطة Search Console مقدمة ضمن نتائج مشاريع مختلفة، وتظهر 22.1 ألف ظهور و2.14 ألف نقرة وCTR بنسبة 9.7% ومتوسط موضع 8.4.", work: "المثال العملي هنا هو عدم قراءة الرقم منفردًا: نربط الاستعلام بالصفحة والنية، ثم نسأل أي مجموعة كلمات تحتاج تحسين العنوان أو المحتوى أو الربط الداخلي.", lesson: "النتيجة القابلة للتعلم ليست وعدًا بأن كل Keyword Research يعطي نفس الرقم؛ بل طريقة تحويل بيانات البحث إلى قرار صفحة قابل للمراجعة.", image: "/case-studies/performance-trend-amr-elbusaily.png", alt: "لقطة أداء بحث عليها علامة Amr Elbusaily" },
      { label: "مثال خدمة", title: "خريطة كلمات لموقع خدمات", context: "مثال تطبيقي على شركة خدمات: فصل كلمات المشكلة عن كلمات الخدمة وكلمات المقارنة، بدل إرسال كل الزيارات إلى الصفحة الرئيسية.", work: "ننشئ مجموعات، نحدد الصفحة المالكة لكل مجموعة، ونضيف أسئلة العملاء والروابط الداخلية قبل كتابة المحتوى. هذا يقلل التنافس الداخلي ويعطي الفريق brief واضحًا.", lesson: "نجاح الخريطة يقاس بجودة الصفحات والطلبات التي تدعمها، وليس بعدد الكلمات الموجودة في الملف.", image: "/case-studies/seo-readiness-amr-elbusaily.png", alt: "لقطة جاهزية SEO عليها علامة Amr Elbusaily" },
      { label: "لقطة وصول", title: "قراءة الحجم مع سياقه", context: "لقطة تحليلات مقدمة لموقع مختلف وتظهر 2.09 مليون من الجمهور و254 ألف زيارة كما وردا في المصدر.", work: "في أي مشروع Keyword Research نضع فترة القياس ونوع المنصة والموقع في التقرير، ثم نبحث عن الصفحات والاستعلامات التي ساهمت في الوصول بدل نسب الرقم للخدمة وحدها.", lesson: "السياق يحمي دراسة الحالة من المبالغة ويجعلها قابلة للمقارنة والتعلم.", image: "/case-studies/traffic-summary-amr-elbusaily.png", alt: "ملخص ترافيك عليه علامة Amr Elbusaily" },
    ],
    content: [
      { label: "لقطة أداء بحث", title: "تحسين المحتوى بعد ظهور البيانات", context: "لقطة Search Console مقدمة ضمن نتائج مشاريع مختلفة، وتظهر 22.1 ألف ظهور و2.14 ألف نقرة وCTR بنسبة 9.7% ومتوسط موضع 8.4.", work: "المثال العملي هو مراجعة العنوان والإجابة الأولى والأقسام والـFAQ والروابط عندما تكشف الاستعلامات فجوة بين ما يبحث عنه الناس وما تقوله الصفحة.", lesson: "لا ننسب اللقطة إلى كتابة المحتوى وحدها؛ نستخدمها لتوضيح دورة: نشر، قياس، فهم، ثم تحسين حقيقي.", image: "/case-studies/performance-trend-amr-elbusaily.png", alt: "لقطة أداء بحث عليها علامة Amr Elbusaily" },
      { label: "مثال خدمة", title: "مقال له وظيفة داخل العنقود", context: "مثال تطبيقي على تحويل موضوع عام إلى مقال يخدم مرحلة محددة من رحلة العميل ويدعم صفحة خدمة أو منتجًا مناسبًا.", work: "نكتب brief يحدد نية البحث، الإجابة المباشرة، الأمثلة، حدود النصيحة، الأسئلة الشائعة، والروابط التي تساعد القارئ على الخطوة التالية.", lesson: "المقال الجيد ليس الأطول دائمًا؛ هو الذي يجيب بوضوح ويضيف قيمة ويعرف أين يرسل القارئ بعد ذلك.", image: "/case-studies/seo-readiness-amr-elbusaily.png", alt: "لقطة جاهزية SEO عليها علامة Amr Elbusaily" },
      { label: "لقطة تحليلات", title: "قياس الوصول دون خلط الأرقام", context: "لقطة تحليلات مقدمة لموقع مختلف وتظهر 2.09 مليون من الجمهور و254 ألف زيارة كما وردا في المصدر.", work: "نستخدمها كمثال على ضرورة فصل الزيارات عن الظهور والنقرات والتحويلات، وتسجيل الموقع والفترة والمنصة قبل كتابة أي استنتاج.", lesson: "الأرقام تصبح مفيدة عندما تقود إلى قرار محتوى واضح، لا عندما تستخدم كدليل عام على نجاح كل صفحة.", image: "/case-studies/traffic-summary-amr-elbusaily.png", alt: "ملخص ترافيك عليه علامة Amr Elbusaily" },
    ],
  },
  en: {
    keyword: [
      { label: "Search snapshot", title: "From a keyword list to a measurement map", context: "A Search Console snapshot supplied among results from different properties shows 22.1K impressions, 2.14K clicks, 9.7% CTR and an 8.4 average position.", work: "The practical lesson is not to read one number alone: connect each query to a page and intent, then decide whether the group needs a better title, content or internal links.", lesson: "The useful outcome is a repeatable way to turn search data into a page decision—not a promise that every keyword project produces the same number.", image: "/case-studies/performance-trend-amr-elbusaily.png", alt: "Watermarked search performance snapshot" },
      { label: "Service example", title: "A keyword map for a service website", context: "A practical service-business example separates problem queries from service and comparison queries instead of sending every visitor to the homepage.", work: "We cluster queries, assign one destination page to each group, and add customer questions and internal links before writing. The result is a clear brief and less cannibalization.", lesson: "A map succeeds through the quality of the pages and demand they support, not the number of phrases in a spreadsheet.", image: "/case-studies/seo-readiness-amr-elbusaily.png", alt: "Watermarked SEO readiness snapshot" },
      { label: "Reach snapshot", title: "Reading scale with its context", context: "An analytics snapshot supplied for a different property shows 2.09M audience and 254K visits as displayed in the source.", work: "In keyword work, we record the property, platform and period, then identify which queries and pages contributed instead of attributing the number to the service alone.", lesson: "Context keeps a case study honest and makes the learning transferable.", image: "/case-studies/traffic-summary-amr-elbusaily.png", alt: "Watermarked traffic summary snapshot" },
    ],
    content: [
      { label: "Search snapshot", title: "Improving content after evidence appears", context: "A Search Console snapshot supplied among results from different properties shows 22.1K impressions, 2.14K clicks, 9.7% CTR and an 8.4 average position.", work: "The practical cycle is to review the title, opening answer, sections, FAQs and internal links when queries reveal a gap between what people ask and what the page says.", lesson: "We do not attribute the snapshot to writing alone; we use it to explain the cycle of publish, measure, understand and improve.", image: "/case-studies/performance-trend-amr-elbusaily.png", alt: "Watermarked search performance snapshot" },
      { label: "Service example", title: "A page with a job inside the cluster", context: "A practical example turns a broad topic into an article serving one stage of the customer journey and supporting a relevant service or product page.", work: "The brief defines intent, the direct answer, examples, limits, FAQs and the links that help a reader take the next step.", lesson: "The best article is not always the longest; it answers clearly, adds value and knows where the reader should go next.", image: "/case-studies/seo-readiness-amr-elbusaily.png", alt: "Watermarked SEO readiness snapshot" },
      { label: "Analytics snapshot", title: "Measuring reach without mixing metrics", context: "An analytics snapshot supplied for a different property shows 2.09M audience and 254K visits as displayed in the source.", work: "We use it to show why visits, impressions, clicks and conversions must remain separate, with property, period and platform recorded before drawing a conclusion.", lesson: "Numbers become useful when they lead to a clear content decision, not when they are used as universal proof for every page.", image: "/case-studies/traffic-summary-amr-elbusaily.png", alt: "Watermarked traffic summary snapshot" },
    ],
  },
};

export function CaseStudiesSection({ lang, mode }: { lang: Language; mode: Mode }) {
  const ar = lang === "ar";
  const items = cases[lang][mode];
  return (
    <section className="border-y border-border bg-surface/30">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{ar ? "CASE STUDIES · أمثلة موثقة" : "CASE STUDIES · DOCUMENTED EXAMPLES"}</div>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{ar ? "منهج عملي يمكن مراجعته، لا أرقام بلا سياق." : "A reviewable method, not numbers without context."}</h2>
          <p className="mt-4 leading-8 text-muted-foreground">{ar ? "هذه اللقطات والأمثلة تساعد على فهم طريقة التفكير. بعض اللقطات تخص مواقع وفترات مختلفة، لذلك لا ننسب رقمًا إلى Keyword Research أو Content SEO وحدهما ولا نستخدمه كوعد عام." : "These snapshots and examples show how the work is reasoned about. Some snapshots belong to different properties and periods, so no number is attributed to Keyword Research or Content SEO alone or used as a universal promise."}</p>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-2xl border border-border bg-surface">
              <img src={item.image} alt={item.alt} loading="lazy" className="aspect-[16/9] w-full object-cover" />
              <div className="p-7">
                <div className="font-mono text-xs uppercase tracking-[0.16em] text-primary">{item.label}</div>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.context}</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground"><strong className="text-foreground">{ar ? "التنفيذ: " : "How it works: "}</strong>{item.work}</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground"><strong className="text-foreground">{ar ? "الخلاصة: " : "Takeaway: "}</strong>{item.lesson}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-7 text-xs leading-6 text-muted-foreground">{ar ? "الأرقام من لقطات الشاشة المرسلة، مع اختلاف المواقع والفترات. علامة Amr Elbusaily ظاهرة على الأصول، ولا يتم استنتاج اسم عميل غير ظاهر." : "Figures come from the supplied screenshots, with properties and periods differing. The Amr Elbusaily watermark is visible on the assets; no unnamed client is inferred."}</p>
      </div>
    </section>
  );
}
