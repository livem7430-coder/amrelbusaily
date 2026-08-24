export type CourseLanguage = "ar" | "en";

export type CourseSection = {
  headingAr: string;
  headingEn: string;
  bodyAr: string;
  bodyEn: string;
  bulletsAr: string[];
  bulletsEn: string[];
};

export type CourseModule = {
  id: string;
  order: number;
  titleAr: string;
  titleEn: string;
  levelAr: string;
  levelEn: string;
  descriptionAr: string;
  descriptionEn: string;
  practiceAr: string;
  practiceEn: string;
};

export type CourseLesson = {
  id: string;
  order: number;
  moduleId: string;
  lessonInModule: number;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  duration: string;
  published: boolean;
  sections?: CourseSection[];
};

const moduleSeeds: Omit<CourseModule, "order">[] = [
  {
    id: "foundations",
    titleAr: "أساسيات SEO",
    titleEn: "SEO Foundations",
    levelAr: "مبتدئ",
    levelEn: "Beginner",
    descriptionAr: "افهم كيف تعمل محركات البحث، وما الذي يجعل استراتيجية SEO قابلة للقياس وليست مجرد مجموعة كلمات مفتاحية.",
    descriptionEn: "Understand how search engines work and what turns SEO into a measurable growth system rather than a list of keywords.",
    practiceAr: "اكتب تعريفًا واضحًا للـSEO وحدد هدفًا تجاريًا ومؤشرين لقياسه.",
    practiceEn: "Write a clear SEO definition, choose one business goal, and define two measurable indicators.",
  },
  {
    id: "search-behavior",
    titleAr: "كيف يفكر البحث والمستخدم",
    titleEn: "Search Behavior & User Needs",
    levelAr: "مبتدئ",
    levelEn: "Beginner",
    descriptionAr: "اربط بين رحلة المستخدم، نية البحث، شكل صفحة النتائج، والقرار الذي تريد من الزائر اتخاذه.",
    descriptionEn: "Connect the user journey, search intent, SERP formats, and the action you want a visitor to take.",
    practiceAr: "حلل صفحة نتائج واحدة وسجل الأسئلة والاعتراضات التي يجب أن يجيب عنها المحتوى.",
    practiceEn: "Analyze one search result page and record the questions and objections your content must answer.",
  },
  {
    id: "keyword-research",
    titleAr: "بحث الكلمات المفتاحية",
    titleEn: "Keyword Research",
    levelAr: "مبتدئ",
    levelEn: "Beginner",
    descriptionAr: "ابنِ خريطة كلمات مرتبطة بالطلب الحقيقي، والربحية، وصعوبة المنافسة، بدل مطاردة أرقام البحث فقط.",
    descriptionEn: "Build a keyword map tied to real demand, profitability, and competition instead of chasing search volume alone.",
    practiceAr: "كوّن قائمة كلمات أولية ثم صنفها حسب النية والمرحلة التجارية.",
    practiceEn: "Create a seed list and classify every term by intent and buying stage.",
  },
  {
    id: "audience-intent",
    titleAr: "الجمهور ونية البحث",
    titleEn: "Audience, Personas & Intent",
    levelAr: "مبتدئ",
    levelEn: "Beginner",
    descriptionAr: "حوّل شرائح الجمهور إلى صفحات ومحتوى يخدم لحظة السؤال والمقارنة والشراء.",
    descriptionEn: "Turn audience segments into pages and content that serve the moments of questioning, comparison, and purchase.",
    practiceAr: "أنشئ بطاقة نية بحث لصفحة خدمة واحدة تشمل المشكلة والنتيجة والاعتراضات.",
    practiceEn: "Create an intent brief for one service page covering the problem, desired outcome, and objections.",
  },
  {
    id: "on-page",
    titleAr: "On-Page SEO",
    titleEn: "On-Page SEO",
    levelAr: "متوسط",
    levelEn: "Intermediate",
    descriptionAr: "حسّن العناوين، الهيكل، الروابط، الوسائط، وتجربة القراءة بحيث يفهم المستخدم ومحرك البحث قيمة الصفحة.",
    descriptionEn: "Improve titles, structure, links, media, and reading experience so users and search engines understand page value.",
    practiceAr: "أعد كتابة عنوان ووصف وهيكل صفحة حقيقية مع الحفاظ على نية البحث.",
    practiceEn: "Rewrite the title, description, and structure of a real page while preserving search intent.",
  },
  {
    id: "content-strategy",
    titleAr: "استراتيجية المحتوى",
    titleEn: "Content Strategy & Editorial Systems",
    levelAr: "متوسط",
    levelEn: "Intermediate",
    descriptionAr: "صمم عناقيد موضوعية وخطة تحريرية تربط الوعي بالطلب المؤهل، مع معايير جودة ووضوح للمحررين.",
    descriptionEn: "Design topical clusters and editorial systems that connect awareness to qualified demand with clear quality standards.",
    practiceAr: "ابنِ عنقود محتوى حول خدمة واحدة وحدد الصفحة المحورية والصفحات الداعمة.",
    practiceEn: "Build a content cluster around one service and define its pillar and supporting pages.",
  },
  {
    id: "technical-foundations",
    titleAr: "أساسيات Technical SEO",
    titleEn: "Technical SEO Foundations",
    levelAr: "متوسط",
    levelEn: "Intermediate",
    descriptionAr: "افهم العلاقة بين بنية الموقع، الزحف، الفهرسة، الإشارات الأساسية، وجودة تجربة الصفحة.",
    descriptionEn: "Understand the relationship between site architecture, crawling, indexing, canonical signals, and page experience.",
    practiceAr: "أنشئ checklist تقنيًا أوليًا لموقع صغير من 20 صفحة.",
    practiceEn: "Create a first technical checklist for a small 20-page website.",
  },
  {
    id: "crawl-index",
    titleAr: "الزحف والفهرسة",
    titleEn: "Crawling, Indexing & Canonicals",
    levelAr: "متوسط",
    levelEn: "Intermediate",
    descriptionAr: "شخّص مشاكل robots وsitemap وcanonical وduplicate content التي تمنع وصول الصفحات الصحيحة إلى الفهرس.",
    descriptionEn: "Diagnose robots, sitemap, canonical, and duplicate-content issues that keep the right pages out of the index.",
    practiceAr: "ارسم مسار الزحف لموقع تجريبي وحدد الصفحات التي تحتاج توجيهًا أو استبعادًا.",
    practiceEn: "Map crawl paths for a sample site and identify pages that need guidance or exclusion.",
  },
  {
    id: "performance-mobile",
    titleAr: "السرعة والموبايل",
    titleEn: "Performance, Core Web Vitals & Mobile SEO",
    levelAr: "متوسط",
    levelEn: "Intermediate",
    descriptionAr: "اربط الأداء التقني بالتحويل، وابدأ من أكبر الاختناقات بدل تحسينات شكلية لا تغيّر تجربة المستخدم.",
    descriptionEn: "Connect technical performance to conversion and prioritize the largest bottlenecks over cosmetic optimizations.",
    practiceAr: "حدد ثلاث فرص لتحسين LCP أو INP أو CLS واكتب أثر كل فرصة.",
    practiceEn: "Identify three LCP, INP, or CLS opportunities and explain the impact of each.",
  },
  {
    id: "architecture-links",
    titleAr: "هندسة الموقع والروابط الداخلية",
    titleEn: "Information Architecture & Internal Linking",
    levelAr: "متوسط",
    levelEn: "Intermediate",
    descriptionAr: "صمّم بنية تسهّل الفهم والتنقل وتوزيع الأهمية بين الصفحات التجارية والمعلوماتية.",
    descriptionEn: "Design an architecture that improves understanding, navigation, and authority flow between commercial and informational pages.",
    practiceAr: "أنشئ خريطة ربط داخلي لعنقود من صفحة محورية وخمس صفحات داعمة.",
    practiceEn: "Create an internal-linking map for one pillar page and five supporting pages.",
  },
  {
    id: "schema-aeo-geo",
    titleAr: "Schema وAEO وGEO",
    titleEn: "Structured Data, AEO & GEO",
    levelAr: "متقدم",
    levelEn: "Advanced",
    descriptionAr: "اكتب إجابات مباشرة وبيانات منظمة تساعد محركات البحث وأنظمة الإجابة والذكاء الاصطناعي على فهم الكيان والمحتوى.",
    descriptionEn: "Create direct answers and structured data that help search engines, answer systems, and AI understand entities and content.",
    practiceAr: "حوّل فقرة خدمة إلى إجابة مباشرة مع FAQ وschema مناسبين بدون حشو كلمات.",
    practiceEn: "Turn a service paragraph into a direct answer with appropriate FAQ and schema without keyword stuffing.",
  },
  {
    id: "local-seo",
    titleAr: "Local SEO",
    titleEn: "Local SEO & Regional Growth",
    levelAr: "متقدم",
    levelEn: "Advanced",
    descriptionAr: "ابنِ حضورًا محليًا صادقًا لمصر والسعودية والخليج دون صفحات جغرافية متشابهة أو ادعاءات غير حقيقية.",
    descriptionEn: "Build honest local visibility across Egypt, Saudi Arabia, and the Gulf without duplicate city pages or unsupported claims.",
    practiceAr: "أنشئ صفحة محلية واحدة مرتبطة بخدمة حقيقية ومعلومات قابلة للتحقق.",
    practiceEn: "Create one local landing page tied to a real service and verifiable business information.",
  },
  {
    id: "ecommerce",
    titleAr: "SEO للمتاجر الإلكترونية",
    titleEn: "E-commerce SEO",
    levelAr: "متقدم",
    levelEn: "Advanced",
    descriptionAr: "حسّن التصنيفات والمنتجات والفلاتر والبيانات والتحويل بحيث يدعم SEO المبيعات لا الزيارات فقط.",
    descriptionEn: "Optimize categories, products, filters, data, and conversion so SEO supports revenue rather than traffic alone.",
    practiceAr: "راجع صفحة تصنيف وصفحة منتج وحدد ثلاث أولويات لكل واحدة.",
    practiceEn: "Audit one category and one product page and define three priorities for each.",
  },
  {
    id: "international-programmatic",
    titleAr: "International وProgrammatic SEO",
    titleEn: "International & Programmatic SEO",
    levelAr: "متقدم",
    levelEn: "Advanced",
    descriptionAr: "وسّع التغطية بلغات وأسواق متعددة مع تحكم في الجودة، hreflang، القوالب، ومخاطر المحتوى المتكرر.",
    descriptionEn: "Scale across languages and markets while controlling quality, hreflang, templates, and duplicate-content risks.",
    practiceAr: "صمم قواعد إطلاق صفحات قابلة للتوسع مع بوابات جودة وفهرسة واضحة.",
    practiceEn: "Design scalable page-launch rules with quality gates and explicit indexing controls.",
  },
  {
    id: "authority-pr",
    titleAr: "Authority وDigital PR",
    titleEn: "Authority, Link Building & Digital PR",
    levelAr: "متقدم",
    levelEn: "Advanced",
    descriptionAr: "ابنِ سلطة موضوعية وعلاقات تحريرية مستدامة بدل شراء روابط عشوائية أو حملات لا تضيف ثقة.",
    descriptionEn: "Build topical authority and durable editorial relationships instead of buying random links or running low-trust campaigns.",
    practiceAr: "اكتب فكرة Digital PR قابلة للعرض على صحفي أو شريك متخصص.",
    practiceEn: "Write one Digital PR idea that could earn coverage from a journalist or specialist partner.",
  },
  {
    id: "analytics",
    titleAr: "Analytics وSearch Console",
    titleEn: "Analytics, Search Console & Reporting",
    levelAr: "متقدم",
    levelEn: "Advanced",
    descriptionAr: "حوّل بيانات Search Console وGA4 إلى قرارات عن الصفحات والطلبات والإيرادات، مع تقارير يفهمها أصحاب القرار.",
    descriptionEn: "Turn Search Console and GA4 data into decisions about pages, demand, and revenue with reports stakeholders understand.",
    practiceAr: "أنشئ لوحة قياس بسيطة تربط الظهور بالنقرات والتحويلات والفرص.",
    practiceEn: "Create a simple scorecard connecting visibility, clicks, conversions, and opportunities.",
  },
  {
    id: "cro-growth",
    titleAr: "CRO ونمو الطلب",
    titleEn: "CRO, Conversion & Growth Loops",
    levelAr: "متقدم",
    levelEn: "Advanced",
    descriptionAr: "اجعل SEO جزءًا من منظومة نمو تتابع جودة الزيارة، الرسائل، التحويل، والتعلم من التجارب.",
    descriptionEn: "Make SEO part of a growth system that tracks visit quality, messaging, conversion, and learning from experiments.",
    practiceAr: "اقترح تجربة CRO واحدة مبنية على سؤال من بيانات البحث أو سلوك الصفحة.",
    practiceEn: "Propose one CRO experiment based on a search insight or on-page behavior signal.",
  },
  {
    id: "automation",
    titleAr: "الأتمتة وn8n",
    titleEn: "Marketing Automation & n8n",
    levelAr: "احترافي",
    levelEn: "Professional",
    descriptionAr: "أتمت جمع البيانات والتقارير والتنبيهات مع ضوابط تمنع النشر الآلي الرديء وتحافظ على المراجعة البشرية.",
    descriptionEn: "Automate data collection, reporting, and alerts with controls that prevent low-quality publishing and preserve human review.",
    practiceAr: "صمم workflow يلتقط مشكلة SEO ويرسلها إلى لوحة مهام مع دليل ومالك وأولوية.",
    practiceEn: "Design a workflow that captures an SEO issue and sends it to a task board with evidence, owner, and priority.",
  },
  {
    id: "ai-seo",
    titleAr: "AI SEO وتشغيل المحتوى",
    titleEn: "AI SEO & Content Operations",
    levelAr: "احترافي",
    levelEn: "Professional",
    descriptionAr: "استخدم الذكاء الاصطناعي للبحث والتحليل والهيكلة مع الحفاظ على الخبرة والدقة والتميّز التحريري.",
    descriptionEn: "Use AI for research, analysis, and structuring while preserving expertise, accuracy, and editorial differentiation.",
    practiceAr: "اكتب brief لعملية AI تشمل مصادر، معايير مراجعة، وقرار نشر واضح.",
    practiceEn: "Write an AI workflow brief covering sources, review criteria, and a clear publishing decision.",
  },
  {
    id: "agency-capstone",
    titleAr: "التنفيذ الاحترافي ومشروع التخرج",
    titleEn: "Professional Delivery & Capstone",
    levelAr: "احترافي",
    levelEn: "Professional",
    descriptionAr: "اجمع الاستراتيجية والتقنية والمحتوى والقياس في نظام تسليم يمكن شرحه وبيعه وتحسينه.",
    descriptionEn: "Combine strategy, technical SEO, content, and measurement into a delivery system you can explain, sell, and improve.",
    practiceAr: "أنشئ خطة 90 يوم لموقع حقيقي تشمل التشخيص والأولويات والمالكين ومؤشرات النجاح.",
    practiceEn: "Create a 90-day plan for a real site covering diagnosis, priorities, owners, and success metrics.",
  },
];

export const courseModules: CourseModule[] = moduleSeeds.map((module, index) => ({
  ...module,
  order: index + 1,
}));

const lessonStages = [
  ["Orientation & vocabulary", "التعريف والمصطلحات"],
  ["Core concepts", "المفاهيم الأساسية"],
  ["The working framework", "الإطار العملي"],
  ["Research workflow", "منهج البحث"],
  ["Implementation foundations", "أساسيات التنفيذ"],
  ["Checklist and quality gates", "قائمة الفحص ومعايير الجودة"],
  ["Common mistakes", "الأخطاء الشائعة"],
  ["Tools and evidence", "الأدوات والأدلة"],
  ["Measurement model", "نموذج القياس"],
  ["Advanced patterns", "الأنماط المتقدمة"],
  ["Local market application", "التطبيق على سوق محلي"],
  ["E-commerce application", "التطبيق على متجر إلكتروني"],
  ["SaaS application", "التطبيق على SaaS"],
  ["AI-assisted workflow", "سير عمل بمساعدة AI"],
  ["Template and brief", "القالب والـbrief"],
  ["Audit workshop", "ورشة أوديت"],
  ["Prioritization and impact", "ترتيب الأولويات والأثر"],
  ["Experiment design", "تصميم التجارب"],
  ["Troubleshooting", "حل المشاكل"],
  ["Reporting to stakeholders", "التقرير لأصحاب القرار"],
  ["Team and agency workflow", "سير عمل الفريق والوكالة"],
  ["Automation opportunity", "فرصة الأتمتة"],
  ["Capstone brief", "brief مشروع التخرج"],
  ["Capstone execution", "تنفيذ مشروع التخرج"],
  ["Professional review", "المراجعة الاحترافية"],
] as const;

function createFeaturedSections(module: CourseModule): CourseSection[] {
  return [
    {
      headingAr: "ماذا ستتقن في هذه الوحدة؟",
      headingEn: "What you will master",
      bodyAr: module.descriptionAr,
      bodyEn: module.descriptionEn,
      bulletsAr: ["فهم المشكلة قبل اختيار التكتيك", "ربط التوصية بهدف تجاري قابل للقياس", "تسجيل الدليل والافتراضات بوضوح"],
      bulletsEn: ["Understand the problem before choosing a tactic", "Connect every recommendation to a measurable business goal", "Document evidence and assumptions clearly"],
    },
    {
      headingAr: "طريقة العمل",
      headingEn: "The working method",
      bodyAr: "ابدأ بخط أساس واضح، ثم افصل بين ما تعرفه وما تفترضه وما تحتاج إلى اختباره. لا تطلق تغييرات كبيرة قبل معرفة الصفحة أو الجمهور أو الإشارة التي ستتأثر.",
      bodyEn: "Start with a clear baseline, then separate what you know from what you assume and what you need to test. Do not launch large changes before identifying the page, audience, or signal affected.",
      bulletsAr: ["اجمع البيانات من أكثر من مصدر", "رتب الفرص حسب الأثر والجهد", "راجع التنفيذ بعد النشر وليس قبله فقط"],
      bulletsEn: ["Collect evidence from more than one source", "Prioritize opportunities by impact and effort", "Review implementation after launch, not only before it"],
    },
    {
      headingAr: "تطبيق عملي",
      headingEn: "Practical assignment",
      bodyAr: module.practiceAr,
      bodyEn: module.practiceEn,
      bulletsAr: ["اكتب النتيجة في صفحة واحدة", "اذكر ما ستقيسه ومتى", "حدد خطوة تالية ومسؤولًا عنها"],
      bulletsEn: ["Keep the output to one page", "State what you will measure and when", "Define the next step and its owner"],
    },
  ];
}

export const courseLessons: CourseLesson[] = courseModules.flatMap((module) =>
  lessonStages.map(([titleEn, titleAr], index) => {
    const order = (module.order - 1) * lessonStages.length + index + 1;
    const id = `lesson-${String(order).padStart(3, "0")}`;
    const published = index === 0;
    return {
      id,
      order,
      moduleId: module.id,
      lessonInModule: index + 1,
      titleAr: `${module.titleAr}: ${titleAr}`,
      titleEn: `${module.titleEn}: ${titleEn}`,
      descriptionAr: `درس ${index + 1} من وحدة ${module.titleAr} يشرح ${titleAr.toLowerCase()} ضمن مسار SEO من البداية حتى التنفيذ الاحترافي.`,
      descriptionEn: `Lesson ${index + 1} in ${module.titleEn}, covering ${titleEn.toLowerCase()} within a complete path from SEO fundamentals to professional delivery.`,
      duration: published ? "12 min" : "Planned",
      published,
      sections: published ? createFeaturedSections(module) : undefined,
    } satisfies CourseLesson;
  }),
);

export function getCourseLesson(id: string) {
  return courseLessons.find((lesson) => lesson.id === id);
}

export function getCourseModule(id: string) {
  return courseModules.find((module) => module.id === id);
}

export const publishedCourseLessons = courseLessons.filter((lesson) => lesson.published);
export const COURSE_UPDATED = "2026-08-24";
