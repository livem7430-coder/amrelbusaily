import type { ReactNode } from "react";

type SeoLanguage = "ar" | "en";
type SeoPageMode = "expert" | "company" | "services";

type SeoCopy = {
  title: string;
  description: string;
  eyebrow: string;
  heading: ReactNode;
  intro: string;
  answer: string;
  audienceTitle: string;
  audience: string[];
  deliverablesTitle: string;
  deliverables: { title: string; body: string }[];
  processTitle: string;
  process: { number: string; title: string; body: string }[];
  fitTitle: string;
  fitBody: string;
  trustTitle: string;
  trustBody: string;
  faqTitle: string;
  faq: { q: string; a: string }[];
  ctaTitle: string;
  ctaBody: string;
  cta: string;
  related: { label: string; href: string }[];
};

const base = "https://amrelbusaily.vercel.app";

function getCopy(lang: SeoLanguage, mode: SeoPageMode): SeoCopy {
  const ar = lang === "ar";
  if (ar) {
    const common = {
      audience: [
        "شركات الخدمات التي تحتاج طلبات استشارة أو عروض أسعار مؤهلة.",
        "فرق B2B وSaaS التي تريد ربط المحتوى بالمبيعات والـCRM.",
        "المتاجر الإلكترونية التي تحتاج نموًا من صفحات الفئات والمنتجات.",
        "علامات تخدم جمهورًا عربيًا وإنجليزيًا وتحتاج بنية لغات واضحة.",
      ],
      deliverables: [
        { title: "تشخيص قبل التنفيذ", body: "نبدأ من الصفحات والاستعلامات ومسار التحويل، ثم نحدد ما يمنع الظهور أو يضعف جودة الطلب. لا نبيع قائمة مهام عامة منفصلة عن هدف المشروع." },
        { title: "خريطة كلمات وصفحات", body: "نربط الكلمات بنية البحث والصفحة المناسبة، ونمنع التنافس الداخلي بين مقالات أو صفحات خدمات متشابهة. الخريطة تشمل العربي والإنجليزي عند الحاجة." },
        { title: "محتوى يستحق القراءة", body: "المقال أو صفحة الخدمة يبدأ بإجابة واضحة، ثم يشرح القرار والأمثلة والحدود والأسئلة الشائعة. الهدف أن يفهم القارئ الخطوة التالية، لا أن يرى تكرارًا للكلمة." },
        { title: "قياس مرتبط بالبزنس", body: "نتابع الظهور والنقرات، لكننا نربطها أيضًا بالاستفسارات المؤهلة، المكالمات، طلبات التسعير، الإضافة للسلة، أو الإيراد المساعد عندما تتوفر البيانات." },
      ],
      process: [
        { number: "01", title: "فهم النشاط والعميل", body: "نحدد الخدمة أو المنتج، الأسواق، دورة الشراء، أسئلة المبيعات، والصفحات التي يجب أن تقرّب العميل من قرار واضح." },
        { number: "02", title: "فحص الفرص والمشكلات", body: "نراجع البنية، الفهرسة، السرعة، نية البحث، جودة المحتوى، الروابط الداخلية، والمنافسة في النتائج بدل الاعتماد على رقم واحد." },
        { number: "03", title: "خطة أولويات قابلة للتنفيذ", body: "كل توصية تتحول إلى مهمة بمالك وموعد ومؤشر نجاح. نبدأ بما يجمع بين أثر تجاري معقول ومجهود يمكن للفريق تحمله." },
        { number: "04", title: "إطلاق وتعلم", body: "نراجع ما تم إطلاقه، نراقب بيانات Search Console والتحليلات والـCRM، ثم نحسن الخريطة والمحتوى حسب ما يتعلمه المشروع." },
      ],
      related: [
        { label: "الأوديت التقني", href: "/blog/technical-seo-audit-ar" },
        { label: "خريطة الكلمات المفتاحية", href: "/blog/seo-keyword-mapping-ar" },
        { label: "بحث الكلمات المفتاحية", href: "/ar/keyword-research" },
        { label: "Content SEO", href: "/ar/content-seo" },
        { label: "International SEO", href: "/ar/international-seo" },
        { label: "SEO وGEO بطريقة مبسطة", href: "/ar/seo-geo-eli5" },
      ],
    };
    if (mode === "expert") {
      return {
        title: "خبير SEO واستشاري تحسين محركات البحث | Amr Elbusaily",
        description: "استشاري SEO يساعد شركات الخدمات وB2B والمتاجر على تحويل البحث والمحتوى والذكاء الاصطناعي إلى طلب مؤهل، من خلال استراتيجية قابلة للقياس وتنفيذ واضح.",
        eyebrow: "SEO EXPERT · STRATEGY · EXECUTION",
        heading: <>خبير SEO يحوّل <span className="text-gradient">الظهور إلى طلب مؤهل.</span></>,
        intro: "أنا عمرو البصيلي، استشاري SEO ونمو رقمي. أساعد العلامات الطموحة على بناء ظهور قابل للفهم والقياس، ثم ربطه بصفحات وخطوات تقرّب العميل من التواصل أو الشراء.",
        answer: "أفضل خبير SEO ليس من يَعِد بترتيب ثابت؛ هو من يفهم نشاطك، يحدد نية البحث، يكشف العوائق التقنية والمحتوى، ثم ينفذ خطة يمكن لفريقك مراجعتها وقياس أثرها. أعمل مع شركات الخدمات وB2B وSaaS والمتاجر، مع دعم المحتوى العربي والإنجليزي عندما يخدم السوق.",
        audienceTitle: "متى تحتاج إلى خبير SEO؟",
        audience: common.audience,
        deliverablesTitle: "ما الذي تحصل عليه من الاستشارة؟",
        deliverables: common.deliverables,
        processTitle: "من التشخيص إلى التحسين المستمر",
        process: common.process,
        fitTitle: "هل هذا مناسب لمشروعك؟",
        fitBody: "الخدمة مناسبة عندما تريد قرارًا واضحًا بدل نصائح عامة: أي صفحات نصلح أولًا، ما المحتوى الذي يستحق الإنتاج، وأي إشارة نراقبها. إذا كنت تبحث عن ضمان تصدر أو تغييرات بلا بيانات، فلن يكون ذلك وعدًا مهنيًا يمكن تقديمه.",
        trustTitle: "خبرة عملية بدون مبالغة",
        trustBody: "أعمل على SEO التقني، المحتوى، الـAEO/GEO، Growth Marketing، وتحسين المتاجر. نوضح الافتراضات وحدود البيانات ونفصل بين الظهور، جودة الزيارات، والتحويلات. أي نتيجة تُعرض بسياقها ولا تُنسب إلى موقع أو فترة مختلفة بلا دليل.",
        faqTitle: "أسئلة قبل اختيار خبير SEO",
        faq: [
          { q: "ما الفرق بين خبير SEO ووكالة SEO؟", a: "الخبير غالبًا يقود التشخيص والاستراتيجية مباشرة، بينما الوكالة قد توفر فريقًا أوسع للتنفيذ. القرار يعتمد على حجم العمل، سرعة الفريق الداخلي، وحاجتك للمحتوى أو التطوير، وليس على المسمى وحده." },
          { q: "هل تضمن الوصول إلى الصفحة الأولى؟", a: "لا توجد ضمانة مهنية ثابتة للترتيب. يمكن وضع خطة وقياس مؤشرات مبكرة وتحسين الصفحات، لكن النتيجة تتأثر بالمنافسة، الموقع، جودة التنفيذ، وتغيرات محرك البحث." },
          { q: "هل تعمل مع المواقع العربية والإنجليزية؟", a: "نعم، بشرط بناء صفحات منفصلة لكل لغة عند الحاجة، مع أمثلة وصياغة مناسبة للجمهور وربط hreflang وcanonical بشكل صحيح. الترجمة الحرفية وحدها ليست استراتيجية دولية." },
          { q: "كيف تبدأ الاستشارة؟", a: "نبدأ بفهم النشاط والصفحات ذات القيمة ثم نحدد البيانات المتاحة. بعد ذلك نخرج بالأولويات والمهام ومؤشرات القياس بدل تقرير طويل لا يعرف الفريق كيف ينفذه." },
        ],
        ctaTitle: "ناقش فرصة النمو قبل أن تبدأ",
        ctaBody: "أرسل رابط الموقع ووصفًا مختصرًا لهدفك، وسنحدد ما إذا كان SEO أو المحتوى أو تحسين التحويل هو نقطة البداية الأنسب.",
        cta: "اطلب مراجعة SEO",
        related: common.related,
      };
    }
    if (mode === "company") {
      return {
        title: "أفضل شركة SEO؟ كيف تختار شريكًا مناسبًا | Amr Elbusaily",
        description: "دليل عملي لاختيار شركة أو وكالة SEO مناسبة لشركات الخدمات وB2B والمتاجر، مع معايير شفافة للتقارير والتنفيذ والقياس بدون وعود تصدر ثابتة.",
        eyebrow: "SEO COMPANY · AGENCY · PARTNER",
        heading: <>شركة SEO مناسبة تبدأ من <span className="text-gradient">فهم البزنس.</span></>,
        intro: "لو بتقارن بين أفضل شركة SEO أو أفضل وكالة سيو، لا تبدأ بعدد الكلمات أو وعود الصفحة الأولى. ابدأ بالسؤال: هل يفهم الفريق دورة الشراء، الصفحات التي تجلب عملاء، والموارد المطلوبة لتنفيذ التوصيات؟",
        answer: "شركة SEO الجيدة لا تبيع ترتيبًا مضمونًا؛ تبني نظامًا من التشخيص والاستراتيجية والتنفيذ والقياس. اطلب أن يوضح مقدم الخدمة ما الذي سيفعله، من يملكه، ما البيانات المطلوبة، وكيف ستعرف أن العمل يضيف قيمة للموقع أو المتجر.",
        audienceTitle: "لمن تناسب شراكة SEO؟",
        audience: common.audience,
        deliverablesTitle: "مكونات شراكة SEO واضحة",
        deliverables: common.deliverables,
        processTitle: "كيف نقارن عروض SEO؟",
        process: [
          { number: "01", title: "قارن الفهم قبل السعر", body: "هل العرض يشرح المشكلة والفرصة والصفحات المستهدفة؟ العرض العام الذي يصلح لكل نشاط غالبًا لا يوضح ما سيحدث فعليًا." },
          { number: "02", title: "راجع نطاق التنفيذ", body: "اسأل عن المحتوى، التطوير، التحليلات، المراجعات، ومن يوافق على النشر. معرفة ما هو خارج النطاق تمنع مفاجآت منتصف المشروع." },
          { number: "03", title: "اطلب نموذج تقرير", body: "التقرير الجيد يربط العمل بالمؤشرات والقرارات التالية، لا يملأ الصفحات بانطباعات أو ترتيب كلمات بلا سياق." },
          { number: "04", title: "اختبر طريقة التواصل", body: "حدد صاحب القرار، إيقاع الاجتماعات، زمن الرد، ومسار التصعيد. نجاح SEO يحتاج تعاونًا بين التسويق والمحتوى والتطوير والمبيعات." },
        ],
        fitTitle: "ما الذي يجعل الشراكة شفافة؟",
        fitBody: "نوضح الأولويات والاعتمادات والقياس قبل التنفيذ، ونفصل بين ما نملكه وما يحتاج فريقك أو مزودًا آخر. لا نستخدم أسماء عملاء أو أرقامًا من مواقع وفترات مختلفة لإثبات نتيجة لا تخص مشروعك.",
        trustTitle: "وكالة أم شريك تنفيذ؟",
        trustBody: "A2M Digital Marketing Agency يقود استراتيجية SEO والنمو مع إمكانية العمل مع فرق داخلية وشركاء تطوير ومحتوى. الهدف ليس احتكار التنفيذ، بل ترك نظام واضح يستطيع فريقك فهمه واستكماله.",
        faqTitle: "أسئلة قبل التعاقد مع شركة SEO",
        faq: [
          { q: "كيف أختار أفضل شركة SEO؟", a: "اختَر بناءً على فهمها لنشاطك، وضوح النطاق، جودة خطة القياس، أمثلة موثقة بسياقها، وطريقة التعاون. لا تجعل كلمة أفضل أو ضمان الصفحة الأولى معيار القرار الوحيد." },
          { q: "كم تكلفة شركة SEO؟", a: "التكلفة تتغير حسب حجم الموقع، عدد اللغات والأسواق، كمية المحتوى، احتياجات التطوير، وسرعة الفريق الداخلي. اطلب نطاق عمل مفصلًا بدل سعر ثابت بلا تفاصيل." },
          { q: "هل الشركة تكتب المحتوى وتنفذ التعديلات؟", a: "يختلف ذلك حسب العرض. يجب أن يوضح العقد هل يشمل الاستراتيجية فقط، الكتابة، النشر، التطوير، التحليلات، والمراجعة. الغموض في هذه النقاط يسبب تأخيرًا أكثر من السعر نفسه." },
          { q: "متى أستبدل مزود SEO الحالي؟", a: "راجع جودة التواصل والشفافية والقدرة على التعلم قبل الحكم على الترتيب وحده. إذا لم تحصل على خطة مفهومة أو تقارير تربط العمل بالنتائج، اطلب تصحيح النطاق ثم قيّم الاستمرار." },
        ],
        ctaTitle: "قارن شراكة SEO على أساس واضح",
        ctaBody: "أرسل نوع نشاطك، السوق الذي تستهدفه، ورابط الموقع. سنحدد نطاقًا واقعيًا وما تحتاجه قبل أي التزام.",
        cta: "ناقش عرض SEO",
        related: common.related,
      };
    }
    return {
      title: "خدمات SEO وتحسين محركات البحث | Amr Elbusaily",
      description: "خدمات SEO تشمل الاستراتيجية، الأوديت التقني، المحتوى، AEO/GEO، المتاجر، وتحسين التحويل لشركات الخدمات وB2B والأسواق العربية والإنجليزية.",
      eyebrow: "SEO SERVICES · AUDIT · GROWTH",
      heading: <>خدمات SEO مبنية على <span className="text-gradient">نية حقيقية.</span></>,
      intro: "خدمات SEO ليست قائمة كلمات مفتاحية فقط. هي طريقة لفهم كيف يبحث العميل، كيف يصل إلى الصفحة، ولماذا يتواصل أو يترك الموقع. نربط التقنية والمحتوى وتجربة المستخدم بهدف تجاري قابل للقياس.",
      answer: "تشمل خدمات SEO الاحترافية الأوديت، بحث الكلمات، خريطة الصفحات، تحسين المحتوى، الروابط الداخلية، التقنية، SEO للمتاجر، السيو المحلي والدولي، وقياس التحويل. نختار منها ما يناسب المشكلة بدل تنفيذ كل شيء بنفس الأولوية.",
      audienceTitle: "خدمات تناسب مراحل مختلفة",
      audience: common.audience,
      deliverablesTitle: "مجالات العمل",
      deliverables: [
        { title: "SEO Strategy & Audit", body: "خريطة أولويات تكشف مشكلات الزحف والفهرسة والمحتوى والفرص التجارية، مع خطة تنفيذ بدل ملف ملاحظات فقط." },
        { title: "Content & On-Page SEO", body: "تحسين صفحات الخدمات والمنتجات والمقالات حسب نية البحث، مع عناوين واضحة وFAQ وروابط داخلية وتجربة قراءة جيدة." },
        { title: "Technical & International SEO", body: "مراجعة السرعة، JavaScript، Schema، URL structure، canonical، hreflang، وإعادة التصميم أو النقل عندما تكون جزءًا من المشكلة." },
        { title: "AI Search & Growth", body: "تهيئة الإجابات والكيانات والمحتوى للاستخدام في البحث التوليدي، وربط SEO بالنمو والتحويل والـCRM عندما تتوفر البيانات." },
      ],
      processTitle: "طريقة العمل",
      process: common.process,
      fitTitle: "نقيس أكثر من الترتيب",
      fitBody: "الظهور والنقرات مهمة، لكنها لا تكفي. نراجع جودة الزيارات، الطلبات، المكالمات، الإضافة للسلة، والصفحات التي تساهم في رحلة العميل. إذا لم تتوفر بيانات كافية، نبدأ ببناء خط أساس واضح بدل اختراع رقم.",
      trustTitle: "تنفيذ عربي وإنجليزي بدون خلط",
      trustBody: "عندما يستهدف المشروع أكثر من لغة، نستخدم مراكز ومقالات وصفحات منفصلة بصياغة مناسبة لكل جمهور. نربط النسخ بطريقة صحيحة ونمنع إنشاء صفحات مدن أو أسواق متشابهة بلا قيمة مستقلة.",
      faqTitle: "أسئلة عن خدمات SEO",
      faq: [
        { q: "ما الذي تشمله خدمات SEO؟", a: "تبدأ من الأوديت وتحديد الأولويات، وقد تشمل التقنية، الكلمات، المحتوى، الروابط الداخلية، المتاجر، SEO المحلي أو الدولي، القياس، وتحسين التحويل حسب احتياج الموقع." },
        { q: "هل SEO مناسب لشركة خدمات صغيرة؟", a: "نعم إذا تم اختيار صفحات ونوايا قريبة من العميل بدل محاولة تغطية كل كلمة. أحيانًا تكون صفحة خدمة قوية وخريطة محتوى صغيرة أفضل من عشرات المقالات العامة." },
        { q: "هل أحتاج SEO عربيًا وإنجليزيًا؟", a: "تحتاج اللغتين عندما يبحث جمهورك ويقرر بهما. لا تنشر ترجمة آلية لكل شيء؛ ابدأ بالصفحات التي لها طلب وقيمة، ثم وسّع بناءً على البيانات." },
        { q: "هل يمكن أن تضمنوا التصدر؟", a: "لا. نضمن وضوح المنهج وما يتم تسليمه ومراجعته، لكن الترتيب يتأثر بالمنافسة وجودة الموقع والتغيرات الخارجية. نقيس التقدم ونعدّل الخطة بدل بيع وعد ثابت." },
      ],
      ctaTitle: "ابدأ من المشكلة الحقيقية",
      ctaBody: "شارك رابط موقعك وهدفك التجاري، وسنقترح نقطة البداية: أوديت، محتوى، تقنية، متجر، أو تحسين تحويل.",
      cta: "اطلب خطة SEO",
      related: common.related,
    };
  }

  const common = {
    audience: [
      "Service companies that need qualified consultation or quote requests.",
      "B2B and SaaS teams that want to connect content with sales and CRM data.",
      "E-commerce stores that need category and product pages to earn demand.",
      "Brands serving Arabic and English audiences with a clean language architecture.",
    ],
    deliverables: [
      { title: "Diagnosis before delivery", body: "We start with valuable pages, queries and conversion paths, then identify what limits visibility or lead quality. The work is not a generic checklist detached from the business." },
      { title: "Keyword-to-page mapping", body: "Queries are mapped to intent and a logical destination, reducing cannibalization between similar service pages and articles. Arabic and English are separated when the audience requires it." },
      { title: "Content worth reading", body: "Each guide or service page answers the question early, then explains decisions, examples, limits and next steps. The goal is usefulness, not repetition." },
      { title: "Business-linked measurement", body: "We monitor impressions and clicks, then connect them to qualified enquiries, calls, quote requests, add-to-cart actions or assisted revenue when the data exists." },
    ],
    process: [
      { number: "01", title: "Understand the business", body: "We clarify the offer, audience, markets, buying cycle, sales questions and pages that should move a visitor toward a decision." },
      { number: "02", title: "Find opportunities and blockers", body: "We review architecture, indexability, speed, search intent, content quality, internal links and the actual search landscape instead of one isolated score." },
      { number: "03", title: "Prioritized implementation", body: "Every recommendation becomes a task with an owner, timing and success signal. We begin with work that balances commercial impact and team capacity." },
      { number: "04", title: "Launch and learn", body: "We review releases, monitor Search Console, analytics and CRM signals, then improve the map and content based on evidence from the project." },
    ],
      related: [
        { label: "Technical SEO audit", href: "/blog/technical-seo-audit-en" },
        { label: "Keyword mapping guide", href: "/blog/seo-keyword-mapping-en" },
        { label: "Keyword Research service", href: "/keyword-research" },
        { label: "Content SEO service", href: "/content-seo" },
        { label: "International SEO", href: "/international-seo" },
        { label: "SEO and GEO explained simply", href: "/seo-geo-eli5" },
      ],
  };
  if (mode === "expert") {
    return {
      title: "SEO Expert and Search Strategy Consultant | Amr Elbusaily",
      description: "An SEO consultant helping service companies, B2B teams and e-commerce brands turn search, content and AI into qualified demand through measurable strategy and execution.",
      eyebrow: "SEO EXPERT · STRATEGY · EXECUTION",
      heading: <>An SEO expert who turns <span className="text-gradient">visibility into demand.</span></>,
      intro: "I’m Amr Elbusaily, an SEO and digital growth strategist. I help ambitious brands build search visibility that is understandable and measurable, then connect it to pages and actions that move buyers closer to a conversation or purchase.",
      answer: "The right SEO expert does not promise a fixed position. They understand your business, map search intent, uncover technical and content blockers, and deliver a plan your team can inspect and measure. I work with service companies, B2B, SaaS and e-commerce, including Arabic and English content when it serves the market.",
      audienceTitle: "When do you need an SEO expert?",
      audience: common.audience,
      deliverablesTitle: "What the engagement includes",
      deliverables: common.deliverables,
      processTitle: "From diagnosis to iteration",
      process: common.process,
      fitTitle: "Is this a fit?",
      fitBody: "This is a fit when you need clear decisions instead of generic advice: which pages to fix first, what content deserves production, and which signals to monitor. If you need a guaranteed ranking or changes without evidence, that is not a professional promise we can make.",
      trustTitle: "Practical experience without inflated claims",
      trustBody: "The work spans technical SEO, content, AEO/GEO, growth marketing and e-commerce optimization. Assumptions and data limits are explicit, and visibility, traffic quality and conversion are kept distinct. Results are never detached from their site and period.",
      faqTitle: "Questions before choosing an SEO expert",
      faq: [
        { q: "What is the difference between an SEO expert and an SEO agency?", a: "An expert often leads diagnosis and strategy directly, while an agency may provide a larger delivery team. The right choice depends on scope, internal capacity and content or development needs—not the label alone." },
        { q: "Can you guarantee page-one rankings?", a: "No professional can promise a fixed position. We can define the work, track early signals and improve pages, but competition, site quality, implementation and search changes affect outcomes." },
        { q: "Do you work with Arabic and English websites?", a: "Yes, when the audience requires it. Each language needs appropriate examples and copy, with correct canonical and hreflang signals. Literal translation is not an international strategy." },
        { q: "How does an engagement start?", a: "We start with the business, valuable pages and available evidence. Then we turn findings into priorities and measurable tasks instead of a report the team cannot execute." },
      ],
      ctaTitle: "Discuss the growth opportunity first",
      ctaBody: "Share your website and a short description of the goal. We will identify whether SEO, content or conversion is the right starting point.",
      cta: "Request an SEO review",
      related: common.related,
    };
  }
  if (mode === "company") {
    return {
      title: "Best SEO Company? How to Choose the Right Partner | Amr Elbusaily",
      description: "A transparent guide to choosing an SEO company or agency for service businesses, B2B teams and e-commerce, covering scope, reporting, delivery and measurement without fixed ranking promises.",
      eyebrow: "SEO COMPANY · AGENCY · PARTNER",
      heading: <>The right SEO company starts with <span className="text-gradient">business understanding.</span></>,
      intro: "If you are comparing the best SEO company or best SEO agency, do not start with keyword counts or page-one promises. Ask whether the team understands your buying cycle, valuable pages and the resources needed to ship the work.",
      answer: "A good SEO company builds a system of diagnosis, strategy, implementation and measurement rather than selling a guaranteed position. Ask what will be delivered, who owns it, which data is needed and how you will know whether the work adds value to the website or store.",
      audienceTitle: "Who benefits from an SEO partner?",
      audience: common.audience,
      deliverablesTitle: "What a clear SEO partnership contains",
      deliverables: common.deliverables,
      processTitle: "How to compare SEO proposals",
      process: [
        { number: "01", title: "Compare understanding before price", body: "Does the proposal explain your problem, opportunity and target pages? A generic proposal that fits every business rarely tells you what will actually happen." },
        { number: "02", title: "Review the delivery scope", body: "Ask about content, development, analytics, reviews and publishing ownership. Knowing what is out of scope prevents mid-project surprises." },
        { number: "03", title: "Request a reporting sample", body: "A useful report connects shipped work to decisions and next actions, not a list of rankings without business context." },
        { number: "04", title: "Test the communication model", body: "Define the owner, meeting rhythm, response expectations and escalation path. SEO needs cooperation between marketing, content, development and sales." },
      ],
      fitTitle: "What makes the partnership transparent?",
      fitBody: "We state priorities, dependencies and measurement before delivery, and separate what we own from work that requires your team or another provider. We do not use client names or unrelated numbers to imply a result for your project.",
      trustTitle: "Agency or delivery partner?",
      trustBody: "A2M Digital Marketing Agency leads SEO and growth strategy while working with internal teams and specialist partners when needed. The goal is a system your team can understand and continue—not dependency for its own sake.",
      faqTitle: "Questions before hiring an SEO company",
      faq: [
        { q: "How do I choose the best SEO company?", a: "Choose on business understanding, scope clarity, measurement quality, contextual proof and collaboration. Do not make the word best or a page-one promise your only decision criterion." },
        { q: "How much does an SEO company cost?", a: "Cost varies with site size, languages and markets, content volume, development needs and internal capacity. Request a detailed scope instead of a fixed price with no assumptions." },
        { q: "Will the company write content and implement changes?", a: "It depends on the proposal. The agreement should state whether it covers strategy, writing, publishing, development, analytics and review. Unclear ownership often causes more delay than price." },
        { q: "When should I replace my SEO provider?", a: "Review communication, transparency and learning before judging rankings alone. If you cannot get a clear plan or reports connected to work, request a scope correction and then evaluate the partnership." },
      ],
      ctaTitle: "Compare an SEO partnership on clear terms",
      ctaBody: "Share your business type, target market and website. We will outline a realistic scope and what needs to be in place before commitment.",
      cta: "Discuss an SEO proposal",
      related: common.related,
    };
  }
  return {
    title: "SEO Services and Search Engine Optimization | Amr Elbusaily",
    description: "SEO services covering strategy, technical audits, content, AEO/GEO, e-commerce and conversion improvement for service companies, B2B teams and Arabic or English markets.",
    eyebrow: "SEO SERVICES · AUDIT · GROWTH",
    heading: <>SEO services built around <span className="text-gradient">real intent.</span></>,
    intro: "SEO services are not a list of keywords. They are a way to understand how buyers search, how they reach a page and why they contact a business or leave. We connect technical foundations, content and experience to a measurable business goal.",
    answer: "Professional SEO services can include audits, keyword research, page mapping, content optimization, internal links, technical SEO, e-commerce, local and international SEO, and conversion measurement. We choose what fits the problem instead of treating every task as equally urgent.",
    audienceTitle: "Services for different growth stages",
    audience: common.audience,
    deliverablesTitle: "Areas of work",
    deliverables: [
      { title: "SEO strategy and audits", body: "A prioritized map of crawl, indexing, content and commercial opportunities, with implementation tasks rather than a notes-only report." },
      { title: "Content and on-page SEO", body: "Service pages, product pages and articles improved around intent, clear headings, FAQs, internal links and a useful reading experience." },
      { title: "Technical and international SEO", body: "Reviews of speed, JavaScript, schema, URL structure, canonicals, hreflang, redesigns and migrations when they are part of the problem." },
      { title: "AI search and growth", body: "Answer-ready content, entity clarity, AI search visibility and alignment between SEO, growth, conversion and CRM when the data supports it." },
    ],
    processTitle: "How we work",
    process: common.process,
    fitTitle: "We measure more than rankings",
    fitBody: "Visibility and clicks matter, but they are not enough. We review lead quality, calls, enquiries, add-to-cart actions and assisted revenue where the data exists. When it does not, we build a useful baseline rather than inventing a number.",
    trustTitle: "Arabic and English without mixing the experience",
    trustBody: "When a project serves more than one language, we use separate pages and content hubs with audience-appropriate copy. We connect versions correctly and avoid low-value city or country pages that only swap a place name.",
    faqTitle: "Questions about SEO services",
    faq: [
      { q: "What do SEO services include?", a: "They can include audits, prioritization, technical work, keyword research, content, internal links, e-commerce, local or international SEO, reporting and conversion improvements depending on the site." },
      { q: "Is SEO useful for a small service company?", a: "Yes, when the plan focuses on realistic, high-value intent instead of every keyword. One strong service page and a focused content map can beat dozens of generic articles." },
      { q: "Do I need Arabic and English SEO?", a: "You need both when your audiences search and decide in both languages. Do not translate everything automatically; start with pages that show demand and business value, then expand from evidence." },
      { q: "Can you guarantee rankings?", a: "No. We can make the method, deliverables and review process clear, but rankings depend on competition, site quality and external changes. We measure progress and adapt the plan instead of selling a fixed promise." },
    ],
    ctaTitle: "Start with the real problem",
    ctaBody: "Share your website and business goal. We will suggest the right starting point: audit, content, technical SEO, e-commerce or conversion.",
    cta: "Request an SEO plan",
    related: common.related,
  };
}

export function seoAuthorityHead(lang: SeoLanguage, mode: SeoPageMode) {
  const copy = getCopy(lang, mode);
  const path = mode === "expert" ? "seo-expert" : mode === "company" ? "seo-company" : "seo-services";
  const arPath = `ar/${path}`;
  const url = `${base}/${lang === "ar" ? arPath : path}`;
  const alternate = `${base}/${lang === "ar" ? path : arPath}`;
  return {
    meta: [
      { title: copy.title },
      { name: "description", content: copy.description },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { property: "og:title", content: copy.title },
      { property: "og:description", content: copy.description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: url },
      { property: "og:locale", content: lang === "ar" ? "ar_EG" : "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: lang === "ar" ? "ar" : "en", href: url },
      { rel: "alternate", hrefLang: lang === "ar" ? "en" : "ar", href: alternate },
      { rel: "alternate", hrefLang: "x-default", href: `${base}/${path}` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: copy.title,
          description: copy.description,
          url,
          inLanguage: lang,
          provider: {
            "@type": "Person",
            name: "Amr Elbusaily",
            url: base,
            jobTitle: "SEO and digital growth strategist",
          },
          areaServed: ["Worldwide", "MENA", "United States", "Europe"],
          serviceType: "SEO strategy and search engine optimization",
        }),
      },
    ],
  };
}

export function SeoAuthorityPage({ lang, mode }: { lang: SeoLanguage; mode: SeoPageMode }) {
  const copy = getCopy(lang, mode);
  const isAr = lang === "ar";
  return (
    <div className="min-h-screen" dir={isAr ? "rtl" : "ltr"} lang={lang}>
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href={isAr ? "/ar" : "/"} className="flex items-center gap-2 font-display font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-primary font-mono text-sm text-primary-foreground">AE</span>
            <span>Amr Elbusaily</span>
          </a>
          <nav className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href={isAr ? "/blog/ar" : "/blog/en"} className="hover:text-foreground">{isAr ? "المقالات" : "Articles"}</a>
            <a href={isAr ? "/ar/seo-expert" : "/seo-expert"} className="hover:text-foreground">{isAr ? "خبير SEO" : "SEO Expert"}</a>
            <a href={isAr ? "/" : "/ar"} className="font-mono text-xs hover:text-foreground">{isAr ? "EN" : "AR"}</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 grid-bg" aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
            <div className="max-w-4xl">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{copy.eyebrow}</div>
              <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">{copy.heading}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-9 text-muted-foreground">{copy.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="mailto:amreelbasily@gmail.com?subject=SEO%20strategy" className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground glow-primary">{copy.cta}</a>
                <a href={isAr ? "/ar/seo-geo-eli5" : "/seo-geo-eli5"} className="rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium hover:border-primary hover:text-primary">{isAr ? "افهم SEO وGEO" : "Understand SEO and GEO"}</a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface/30">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-7 md:p-10">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{isAr ? "الإجابة المباشرة" : "The direct answer"}</div>
              <p className="mt-4 max-w-4xl text-xl leading-9 text-foreground">{copy.answer}</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{isAr ? "من نخدم" : "Who we help"}</div>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{copy.audienceTitle}</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {copy.audience.map((item) => <div key={item} className="rounded-xl border border-border bg-surface p-6 text-base leading-8 text-muted-foreground">{item}</div>)}
          </div>
        </section>

        <section className="border-y border-border bg-surface/30">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="max-w-2xl">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{isAr ? "نطاق العمل" : "Scope of work"}</div>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{copy.deliverablesTitle}</h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {copy.deliverables.map((item, index) => (
                <article key={item.title} className="rounded-2xl border border-border bg-surface p-7">
                  <div className="font-mono text-xs text-primary">{String(index + 1).padStart(2, "0")}</div>
                  <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-8 text-muted-foreground">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{isAr ? "طريقة التنفيذ" : "Delivery method"}</div>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{copy.processTitle}</h2>
          </div>
          <div className="mt-10 grid gap-0 border-y border-border">
            {copy.process.map((item) => (
              <div key={item.number} className="grid gap-4 border-b border-border py-7 last:border-b-0 md:grid-cols-[80px_1fr_1.5fr] md:items-start md:gap-8">
                <div className="font-mono text-sm text-primary">{item.number}</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="leading-8 text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-border bg-surface/30">
          <div className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-8">
              <h2 className="text-2xl font-semibold">{copy.fitTitle}</h2>
              <p className="mt-4 leading-8 text-muted-foreground">{copy.fitBody}</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-8">
              <h2 className="text-2xl font-semibold">{copy.trustTitle}</h2>
              <p className="mt-4 leading-8 text-muted-foreground">{copy.trustBody}</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">FAQ</div>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{copy.faqTitle}</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {copy.faq.map((item) => (
              <details key={item.q} className="group rounded-xl border border-border bg-surface p-6">
                <summary className="cursor-pointer list-none pr-6 text-lg font-semibold marker:hidden">{item.q}</summary>
                <p className="mt-4 leading-8 text-muted-foreground">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="border-t border-border bg-surface/30">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="rounded-2xl border border-border bg-surface p-8 md:p-12">
              <h2 className="text-3xl font-semibold md:text-4xl">{copy.ctaTitle}</h2>
              <p className="mt-4 max-w-2xl leading-8 text-muted-foreground">{copy.ctaBody}</p>
              <div className="mt-7 flex flex-wrap gap-4">
                <a href="mailto:amreelbasily@gmail.com?subject=SEO%20strategy" className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">{copy.cta}</a>
                {copy.related.map((item) => <a key={item.href} href={item.href} className="rounded-md border border-border px-5 py-3 text-sm text-muted-foreground hover:border-primary hover:text-primary">{item.label}</a>)}
              </div>
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
