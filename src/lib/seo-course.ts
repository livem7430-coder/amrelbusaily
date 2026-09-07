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

type StageBlueprint = {
  titleEn: string;
  titleAr: string;
  angleEn: string;
  angleAr: string;
  stepsEn: string[];
  stepsAr: string[];
  qualityEn: string[];
  qualityAr: string[];
};

const lessonStages: StageBlueprint[] = [
  {
    titleEn: "Orientation & vocabulary",
    titleAr: "التعريف والمصطلحات",
    angleEn: "Before any tactic, you need shared language. This lesson defines the terms used in this module and shows how each one maps to a real decision on a real page.",
    angleAr: "قبل أي تكتيك لازم يكون فيه لغة مشتركة. الدرس ده بيعرّف مصطلحات الوحدة ويوضح كل مصطلح بيقابل قرار حقيقي على صفحة حقيقية.",
    stepsEn: ["List the 10 terms you will use most in this module", "Write a one-line definition for each in your own words", "Attach one real page or report to every term"],
    stepsAr: ["اكتب أهم 10 مصطلحات هتستخدمها في الوحدة", "عرّف كل مصطلح في سطر بكلماتك", "اربط كل مصطلح بصفحة أو تقرير حقيقي"],
    qualityEn: ["No term stays abstract", "Every definition ends in an action", "Your team uses the same words"],
    qualityAr: ["مفيش مصطلح فاضي بدون مثال", "كل تعريف ينتهي بإجراء", "الفريق كله بيستخدم نفس الكلمات"],
  },
  {
    titleEn: "Core concepts",
    titleAr: "المفاهيم الأساسية",
    angleEn: "The mechanics behind the module: what actually happens, in what order, and which part you can influence.",
    angleAr: "الميكانيكا وراء الوحدة: بيحصل إيه بالظبط، بأي ترتيب، وإيه الجزء اللي تقدر تأثر فيه.",
    stepsEn: ["Draw the process end to end on one page", "Mark the steps you control and the ones you only observe", "Pick the single step with the highest leverage"],
    stepsAr: ["ارسم العملية كاملة في صفحة واحدة", "حدد الخطوات اللي تتحكم فيها والخطوات اللي بتراقبها بس", "اختر الخطوة صاحبة أكبر أثر"],
    qualityEn: ["The diagram fits on one screen", "Each step names an input and an output", "You can explain it to a non-specialist"],
    qualityAr: ["الرسم في شاشة واحدة", "كل خطوة ليها مدخل ومخرج واضح", "تقدر تشرحها لشخص غير متخصص"],
  },
  {
    titleEn: "The working framework",
    titleAr: "الإطار العملي",
    angleEn: "A repeatable frame turns knowledge into delivery: diagnose, prioritise, implement, verify.",
    angleAr: "الإطار المتكرر بيحوّل المعرفة لتنفيذ: تشخيص، أولويات، تنفيذ، تحقق.",
    stepsEn: ["Define the baseline before touching anything", "Write the hypothesis in one sentence", "Choose the smallest change that tests it", "Set the verification date in advance"],
    stepsAr: ["حدد خط الأساس قبل ما تغيّر أي حاجة", "اكتب الفرضية في جملة واحدة", "اختر أصغر تغيير يختبرها", "حدد تاريخ التحقق مقدمًا"],
    qualityEn: ["Baseline recorded with a screenshot or export", "One hypothesis per change", "A named owner and a date"],
    qualityAr: ["خط الأساس متسجل بصورة أو ملف", "فرضية واحدة لكل تغيير", "مالك محدد وتاريخ محدد"],
  },
  {
    titleEn: "Research workflow",
    titleAr: "منهج البحث",
    angleEn: "Research is not collecting data; it is reducing uncertainty about the next decision.",
    angleAr: "البحث مش تجميع بيانات، البحث تقليل الغموض حوالين القرار الجاي.",
    stepsEn: ["Write the question the research must answer", "Use at least two independent sources", "Separate facts, estimates, and assumptions", "End with a recommendation, not a spreadsheet"],
    stepsAr: ["اكتب السؤال اللي البحث لازم يجاوبه", "استخدم مصدرين مستقلين على الأقل", "افصل بين الحقائق والتقديرات والافتراضات", "اختم بتوصية مش بجدول"],
    qualityEn: ["Sources are dated and linked", "Assumptions are labelled", "The recommendation is actionable this week"],
    qualityAr: ["المصادر بتواريخ وروابط", "الافتراضات متعلّمة بوضوح", "التوصية قابلة للتنفيذ الأسبوع ده"],
  },
  {
    titleEn: "Implementation foundations",
    titleAr: "أساسيات التنفيذ",
    angleEn: "How the work actually ships: who touches what, in which environment, and how you avoid breaking live pages.",
    angleAr: "إزاي الشغل بينزل فعلًا: مين بيلمس إيه، في أي بيئة، وإزاي تتجنب كسر صفحات شغالة.",
    stepsEn: ["Write the change as a ticket with acceptance criteria", "Test on staging or on one page first", "Deploy in small batches", "Log the release date next to the metric"],
    stepsAr: ["اكتب التغيير كتذكرة بمعايير قبول", "جرّب على staging أو صفحة واحدة الأول", "انشر على دفعات صغيرة", "سجل تاريخ النشر جنب المؤشر"],
    qualityEn: ["No silent changes", "Rollback path is known", "Release log is up to date"],
    qualityAr: ["مفيش تغييرات بدون توثيق", "فيه طريقة تراجع معروفة", "سجل الإصدارات محدث"],
  },
  {
    titleEn: "Checklist and quality gates",
    titleAr: "قائمة الفحص ومعايير الجودة",
    angleEn: "A checklist protects quality when the work scales beyond one person.",
    angleAr: "قائمة الفحص بتحمي الجودة لما الشغل يكبر على شخص واحد.",
    stepsEn: ["Turn every recurring mistake into a check", "Split checks into blocking and advisory", "Review the checklist monthly and delete dead items"],
    stepsAr: ["حوّل كل خطأ متكرر لبند فحص", "قسّم البنود إلى مانعة ونصائح", "راجع القائمة شهريًا واحذف البنود الميتة"],
    qualityEn: ["Under 20 items", "Each item is pass or fail, not an opinion", "Someone signs the gate"],
    qualityAr: ["أقل من 20 بند", "كل بند نجاح أو رسوب مش رأي", "فيه حد بيعتمد المراجعة"],
  },
  {
    titleEn: "Common mistakes",
    titleAr: "الأخطاء الشائعة",
    angleEn: "Most losses in this area come from a short list of avoidable errors, not from missing advanced tactics.",
    angleAr: "أغلب الخسائر هنا سببها أخطاء بسيطة متكررة، مش نقص تكتيكات متقدمة.",
    stepsEn: ["Copying competitors without understanding their context", "Optimising a page that has no demand behind it", "Changing many variables at once", "Reporting activity instead of outcomes"],
    stepsAr: ["تقليد المنافسين بدون فهم سياقهم", "تحسين صفحة مفيش عليها طلب أصلًا", "تغيير عوامل كتير في نفس الوقت", "تقارير عن المجهود بدل النتيجة"],
    qualityEn: ["You can name why each mistake costs money", "You have a detection signal for each", "You fixed at least one this week"],
    qualityAr: ["تعرف كل خطأ بيكلّف إيه", "عندك إشارة تكشف كل خطأ", "صلحت واحد منهم الأسبوع ده على الأقل"],
  },
  {
    titleEn: "Tools and evidence",
    titleAr: "الأدوات والأدلة",
    angleEn: "Tools do not make decisions. This lesson shows which tool answers which question and where each one lies to you.",
    angleAr: "الأدوات مش بتاخد قرارات. الدرس بيوضح كل أداة بتجاوب على أنهي سؤال وفين بتضللك.",
    stepsEn: ["Match every recurring question to one primary tool", "Cross-check any surprising number in a second tool", "Export evidence before you change anything"],
    stepsAr: ["اربط كل سؤال متكرر بأداة أساسية واحدة", "راجع أي رقم غريب في أداة تانية", "احفظ الدليل قبل أي تغيير"],
    qualityEn: ["Screenshots carry a date", "Sampling limits are understood", "No decision rests on one tool alone"],
    qualityAr: ["الصور عليها تاريخ", "حدود العينة مفهومة", "مفيش قرار على أداة واحدة بس"],
  },
  {
    titleEn: "Measurement model",
    titleAr: "نموذج القياس",
    angleEn: "If you cannot state the metric, the baseline, and the review date, you are not measuring — you are hoping.",
    angleAr: "لو مش قادر تحدد المؤشر وخط الأساس وتاريخ المراجعة، فأنت مش بتقيس، أنت بتتمنى.",
    stepsEn: ["Pick one leading and one lagging indicator", "Record the baseline value and window", "Define what a real improvement looks like", "Book the review before you start"],
    stepsAr: ["اختر مؤشر مبكر ومؤشر نهائي", "سجل قيمة خط الأساس والفترة", "حدد شكل التحسن الحقيقي", "احجز المراجعة قبل ما تبدأ"],
    qualityEn: ["Numbers tie back to revenue or qualified demand", "Seasonality is accounted for", "The report fits on one slide"],
    qualityAr: ["الأرقام مرتبطة بالإيراد أو الطلب المؤهل", "الموسمية متحسوبة", "التقرير في شريحة واحدة"],
  },
  {
    titleEn: "Advanced patterns",
    titleAr: "الأنماط المتقدمة",
    angleEn: "Once the basics hold, patterns let you move faster: templates, clusters, systems instead of one-off fixes.",
    angleAr: "لما الأساسيات تتظبط، الأنماط بتخليك أسرع: قوالب وعناقيد وأنظمة بدل إصلاحات فردية.",
    stepsEn: ["Find work you repeated three times and turn it into a pattern", "Document the input, the rule, and the exception", "Pilot the pattern on a small set before scaling"],
    stepsAr: ["دوّر على شغل كررته 3 مرات وحوّله لنمط", "وثّق المدخل والقاعدة والاستثناء", "جرّب النمط على عينة صغيرة قبل التوسع"],
    qualityEn: ["The pattern has an explicit exit condition", "Quality does not drop when volume rises", "Someone else can run it"],
    qualityAr: ["النمط ليه شرط إيقاف واضح", "الجودة ما بتقلش لما الحجم يزيد", "حد تاني يقدر ينفذه"],
  },
  {
    titleEn: "Local market application",
    titleAr: "التطبيق على سوق محلي",
    angleEn: "Applying the module to Egypt, Saudi Arabia, and the Gulf: language, intent, and trust signals behave differently here.",
    angleAr: "تطبيق الوحدة على مصر والسعودية والخليج: اللغة والنية وإشارات الثقة مختلفة هنا.",
    stepsEn: ["Check how the audience phrases the query in Arabic and in dialect", "Review the local SERP, not the global one", "Add trust signals buyers here actually look for"],
    stepsAr: ["شوف الجمهور بيكتب السؤال إزاي بالعربي وباللهجة", "راجع نتائج البحث المحلية مش العالمية", "ضيف إشارات الثقة اللي المشتري هنا بيدور عليها"],
    qualityEn: ["Arabic copy is written, not translated", "Contact and pricing expectations match the market", "Examples are local and verifiable"],
    qualityAr: ["المحتوى العربي مكتوب مش مترجم", "التواصل والتسعير مناسبين للسوق", "الأمثلة محلية وقابلة للتحقق"],
  },
  {
    titleEn: "E-commerce application",
    titleAr: "التطبيق على متجر إلكتروني",
    angleEn: "How this module behaves at store scale: categories, products, filters, stock, and revenue per session.",
    angleAr: "الوحدة دي على مستوى متجر: تصنيفات، منتجات، فلاتر، مخزون، وإيراد لكل جلسة.",
    stepsEn: ["Apply the idea to one category and one product page", "Check the effect on filters and duplicate URLs", "Track revenue, not just sessions"],
    stepsAr: ["طبّق الفكرة على صفحة تصنيف وصفحة منتج", "راجع الأثر على الفلاتر والروابط المكررة", "تابع الإيراد مش الزيارات بس"],
    qualityEn: ["Out-of-stock handling is defined", "No index bloat created", "Product data stays accurate"],
    qualityAr: ["فيه تعامل واضح مع المنتج غير المتوفر", "مفيش تضخم في الفهرس", "بيانات المنتج دقيقة"],
  },
  {
    titleEn: "SaaS application",
    titleAr: "التطبيق على SaaS",
    angleEn: "For software and subscription products the goal is qualified signups, so the module connects to activation, not clicks.",
    angleAr: "في المنتجات البرمجية والاشتراكات الهدف تسجيلات مؤهلة، فالوحدة بتتربط بالتفعيل مش بالنقرات.",
    stepsEn: ["Map the topic to a use case, not a feature", "Add comparison and alternatives coverage", "Connect the page to a trial or demo step"],
    stepsAr: ["اربط الموضوع بحالة استخدام مش بميزة", "غطي المقارنات والبدائل", "اربط الصفحة بخطوة تجربة أو ديمو"],
    qualityEn: ["Signup quality is measured", "Docs and marketing do not compete for the same query", "Churn-relevant content exists too"],
    qualityAr: ["جودة التسجيل متقاسة", "التوثيق والتسويق مش بيتنافسوا على نفس الكلمة", "فيه محتوى بيقلل الانسحاب"],
  },
  {
    titleEn: "AI-assisted workflow",
    titleAr: "سير عمل بمساعدة AI",
    angleEn: "AI speeds up research, structuring, and drafting. It does not replace judgement, evidence, or first-hand experience.",
    angleAr: "الذكاء الاصطناعي بيسرّع البحث والهيكلة والمسودات، لكنه مش بديل عن الحكم والدليل والخبرة الحقيقية.",
    stepsEn: ["Give the model your data, not just the topic", "Ask for structure and gaps before prose", "Fact-check every claim, number, and source", "Add the experience only you have"],
    stepsAr: ["ادي الموديل بياناتك مش الموضوع بس", "اطلب هيكل وفجوات قبل الصياغة", "راجع كل ادعاء ورقم ومصدر", "ضيف الخبرة اللي عندك أنت بس"],
    qualityEn: ["No unverified statistics ship", "Voice matches the brand", "A human signs off before publishing"],
    qualityAr: ["مفيش أرقام غير متحقق منها بتتنشر", "الأسلوب متسق مع العلامة", "فيه مراجعة بشرية قبل النشر"],
  },
  {
    titleEn: "Template and brief",
    titleAr: "القالب والـbrief",
    angleEn: "A good brief removes rework. It tells the executor what to produce, for whom, and how success is judged.",
    angleAr: "الـbrief الكويس بيمنع إعادة الشغل. بيقول للمنفذ ينتج إيه، لمين، وإزاي هنحكم على النجاح.",
    stepsEn: ["State the target query and intent", "List required sections and evidence", "Define length, tone, and internal links", "Add the acceptance criteria"],
    stepsAr: ["حدد الكلمة والنية المستهدفة", "اكتب الأقسام والأدلة المطلوبة", "حدد الطول والأسلوب والروابط الداخلية", "ضيف معايير القبول"],
    qualityEn: ["One page maximum", "Reusable next time", "No open questions left for the writer"],
    qualityAr: ["صفحة واحدة كحد أقصى", "قابل لإعادة الاستخدام", "مفيش أسئلة معلقة للكاتب"],
  },
  {
    titleEn: "Audit workshop",
    titleAr: "ورشة أوديت",
    angleEn: "A guided audit of a real site through the lens of this module, ending with a findings table.",
    angleAr: "أوديت موجّه لموقع حقيقي من زاوية الوحدة دي، وينتهي بجدول نتائج.",
    stepsEn: ["Collect the data set before forming an opinion", "Record issue, evidence, impact, effort, owner", "Separate symptoms from root causes"],
    stepsAr: ["اجمع البيانات قبل ما تكوّن رأي", "سجل: المشكلة، الدليل، الأثر، الجهد، المالك", "افصل بين العرض والسبب الجذري"],
    qualityEn: ["Every finding has evidence attached", "Nothing is listed twice", "The table is sortable by impact"],
    qualityAr: ["كل نتيجة معاها دليل", "مفيش تكرار في البنود", "الجدول مرتب حسب الأثر"],
  },
  {
    titleEn: "Prioritization and impact",
    titleAr: "ترتيب الأولويات والأثر",
    angleEn: "Everything cannot be first. Priority is a function of expected impact, effort, confidence, and dependency.",
    angleAr: "مش كل حاجة تبقى أول. الأولوية = الأثر المتوقع × الثقة ÷ الجهد، مع مراعاة الاعتماديات.",
    stepsEn: ["Score each item on impact, effort, confidence", "Push blocked items to a dependency list", "Commit to the top five only"],
    stepsAr: ["قيّم كل بند بالأثر والجهد والثقة", "حط البنود المعطلة في قائمة اعتماديات", "التزم بأعلى خمس بنود بس"],
    qualityEn: ["Scores are written before discussion", "The list has an owner per item", "Anything below the line is visibly deferred"],
    qualityAr: ["الدرجات مكتوبة قبل النقاش", "كل بند ليه مالك", "اللي تحت الخط مؤجل بوضوح"],
  },
  {
    titleEn: "Experiment design",
    titleAr: "تصميم التجارب",
    angleEn: "Treat uncertain changes as experiments with a hypothesis, a control, and a decision rule.",
    angleAr: "تعامل مع التغييرات غير المؤكدة كتجارب بفرضية ومجموعة ضابطة وقاعدة قرار.",
    stepsEn: ["Write: if we change X, then Y will move because Z", "Choose control pages that match in traffic and intent", "Set the runtime and the decision rule up front"],
    stepsAr: ["اكتب: لو غيّرنا X هيتحرك Y بسبب Z", "اختر صفحات ضابطة مشابهة في الترافيك والنية", "حدد مدة التجربة وقاعدة القرار مقدمًا"],
    qualityEn: ["No mid-test changes", "Result is documented even when negative", "Learning is reusable"],
    qualityAr: ["مفيش تعديل أثناء التجربة", "النتيجة متوثقة حتى لو سلبية", "التعلم قابل لإعادة الاستخدام"],
  },
  {
    titleEn: "Troubleshooting",
    titleAr: "حل المشاكل",
    angleEn: "When results drop, diagnose in order: measurement, indexing, content, competition, then algorithm.",
    angleAr: "لما النتائج تقع، شخّص بالترتيب: القياس، الفهرسة، المحتوى، المنافسة، وأخيرًا التحديثات.",
    stepsEn: ["Confirm the drop is real and not a tracking break", "Isolate by page group, device, and country", "Compare against the release log", "Only then look at external causes"],
    stepsAr: ["اتأكد إن الانخفاض حقيقي مش عطل في التتبع", "افصل حسب مجموعة الصفحات والجهاز والدولة", "قارن بسجل الإصدارات", "بعد كده بس شوف الأسباب الخارجية"],
    qualityEn: ["One cause proven, not five guessed", "Fix has a verification date", "Post-mortem written in one page"],
    qualityAr: ["سبب واحد مثبت مش خمسة تخمين", "الإصلاح ليه تاريخ تحقق", "تقرير مختصر في صفحة واحدة"],
  },
  {
    titleEn: "Reporting to stakeholders",
    titleAr: "التقرير لأصحاب القرار",
    angleEn: "Decision makers need outcomes, risks, and the next ask — not a list of tasks.",
    angleAr: "صاحب القرار عايز النتائج والمخاطر والطلب الجاي، مش قائمة مهام.",
    stepsEn: ["Open with the business result", "Show the trend with the baseline visible", "Name the blocker and what you need", "Close with next month's commitment"],
    stepsAr: ["ابدأ بالنتيجة التجارية", "اعرض الاتجاه مع خط الأساس", "حدد العائق واللي محتاجه", "اختم بالتزام الشهر الجاي"],
    qualityEn: ["No unexplained jargon", "Every chart has a takeaway line", "Under five minutes to read"],
    qualityAr: ["مفيش مصطلحات بدون شرح", "كل رسم بياني معاه خلاصة سطر", "يتقرأ في أقل من 5 دقائق"],
  },
  {
    titleEn: "Team and agency workflow",
    titleAr: "سير عمل الفريق والوكالة",
    angleEn: "Delivering this module with more than one person: roles, handovers, and review points.",
    angleAr: "تنفيذ الوحدة دي بأكتر من شخص: أدوار، تسليمات، ونقاط مراجعة.",
    stepsEn: ["Write a simple RACI for the workflow", "Define the handover artefact between roles", "Set one weekly review with a fixed agenda"],
    stepsAr: ["اكتب RACI بسيط للعملية", "حدد المخرج المسلَّم بين كل دورين", "اعمل مراجعة أسبوعية بأجندة ثابتة"],
    qualityEn: ["No task without an owner", "Handover is a file, not a conversation", "Capacity is realistic"],
    qualityAr: ["مفيش مهمة بدون مالك", "التسليم ملف مش كلام", "السعة واقعية"],
  },
  {
    titleEn: "Automation opportunity",
    titleAr: "فرصة الأتمتة",
    angleEn: "Automate the detection and reporting, keep the judgement human. n8n, scripts, and scheduled exports do the boring half.",
    angleAr: "أتمت الكشف والتقارير وسيب الحكم للبشر. n8n والسكربتات والتصدير المجدول بيعملوا النص الممل.",
    stepsEn: ["Pick a check you run manually every week", "Define the trigger, the data source, and the alert", "Send it to where the team already works", "Add a human approval step before any change"],
    stepsAr: ["اختر فحص بتعمله يدوي كل أسبوع", "حدد المُشغل ومصدر البيانات والتنبيه", "ابعته على المكان اللي الفريق شغال فيه", "ضيف موافقة بشرية قبل أي تغيير"],
    qualityEn: ["Alerts are rare and meaningful", "Failure of the automation is visible", "Nothing publishes without review"],
    qualityAr: ["التنبيهات نادرة ومفيدة", "عطل الأتمتة بيبان", "مفيش نشر بدون مراجعة"],
  },
  {
    titleEn: "Capstone brief",
    titleAr: "brief مشروع التخرج",
    angleEn: "Define the project you will deliver for this module: the site, the goal, the constraints, and the deliverable.",
    angleAr: "حدد المشروع اللي هتسلمه في الوحدة دي: الموقع، الهدف، القيود، والمخرج.",
    stepsEn: ["Choose a real site you can access data for", "State the single goal for 90 days", "List constraints: budget, dev time, content capacity"],
    stepsAr: ["اختر موقع حقيقي عندك بياناته", "حدد هدف واحد لـ90 يوم", "اكتب القيود: ميزانية، وقت تطوير، قدرة إنتاج محتوى"],
    qualityEn: ["Scope fits the available capacity", "Success is defined numerically", "Stakeholder agreed before you start"],
    qualityAr: ["النطاق مناسب للقدرة المتاحة", "النجاح معرّف برقم", "صاحب القرار موافق قبل البدء"],
  },
  {
    titleEn: "Capstone execution",
    titleAr: "تنفيذ مشروع التخرج",
    angleEn: "Ship the plan in waves, verify each wave, and keep a visible log of what changed and what moved.",
    angleAr: "نفّذ الخطة على موجات، تحقق من كل موجة، واحتفظ بسجل واضح لإيه اللي اتغير وإيه اللي اتحرك.",
    stepsEn: ["Wave 1: blockers and measurement", "Wave 2: highest-impact pages", "Wave 3: scale and internal linking", "Verify after each wave before starting the next"],
    stepsAr: ["الموجة 1: العوائق والقياس", "الموجة 2: أعلى الصفحات أثرًا", "الموجة 3: التوسع والربط الداخلي", "تحقق بعد كل موجة قبل اللي بعدها"],
    qualityEn: ["Each wave has a date and an owner", "Nothing ships without verification", "The log is shared with the client"],
    qualityAr: ["كل موجة ليها تاريخ ومالك", "مفيش تنفيذ بدون تحقق", "السجل متشارك مع العميل"],
  },
  {
    titleEn: "Professional review",
    titleAr: "المراجعة الاحترافية",
    angleEn: "Close the module by reviewing your own work the way a senior consultant would, then decide what to keep in your system.",
    angleAr: "اقفل الوحدة بمراجعة شغلك زي ما مستشار كبير هيعمل، وبعدها قرر إيه اللي هيدخل نظامك الدائم.",
    stepsEn: ["Compare the result with the original hypothesis", "Name what worked, what failed, and why", "Update your checklist and templates", "Write the one-line lesson you will not forget"],
    stepsAr: ["قارن النتيجة بالفرضية الأصلية", "حدد إيه اللي نجح وإيه اللي فشل وليه", "حدّث قائمة الفحص والقوالب", "اكتب الخلاصة في سطر واحد مش هتنساه"],
    qualityEn: ["Honest about failures", "Templates actually updated", "Next module starts with a cleaner system"],
    qualityAr: ["صريح في الفشل", "القوالب اتحدثت فعلًا", "الوحدة الجاية بتبدأ بنظام أنضف"],
  },
];

function createSections(module: CourseModule, stage: StageBlueprint, lessonNumber: number): CourseSection[] {
  return [
    {
      headingAr: `لماذا هذا الدرس؟ — ${stage.titleAr}`,
      headingEn: `Why this lesson — ${stage.titleEn}`,
      bodyAr: `${stage.angleAr} داخل وحدة "${module.titleAr}": ${module.descriptionAr}`,
      bodyEn: `${stage.angleEn} Inside the "${module.titleEn}" module: ${module.descriptionEn}`,
      bulletsAr: [
        `المستوى: ${module.levelAr}`,
        `الدرس رقم ${lessonNumber} من 25 داخل الوحدة`,
        "ابدأ بالمشكلة قبل اختيار التكتيك",
      ],
      bulletsEn: [
        `Level: ${module.levelEn}`,
        `Lesson ${lessonNumber} of 25 inside this module`,
        "Start from the problem before choosing a tactic",
      ],
    },
    {
      headingAr: "خطوات التنفيذ",
      headingEn: "How to do it, step by step",
      bodyAr: "نفّذ الخطوات بالترتيب على مشروع حقيقي، ومتنتقلش لخطوة قبل ما تخلص اللي قبلها.",
      bodyEn: "Run these steps in order on a real project, and do not jump ahead before the previous step is done.",
      bulletsAr: stage.stepsAr,
      bulletsEn: stage.stepsEn,
    },
    {
      headingAr: "معايير الجودة قبل ما تعتبر الدرس منتهي",
      headingEn: "Quality bar before you call this done",
      bodyAr: "لو بند من دول مش متحقق، الشغل لسه مش جاهز للتسليم أو النشر.",
      bodyEn: "If one of these is missing, the work is not ready to ship or to hand over.",
      bulletsAr: stage.qualityAr,
      bulletsEn: stage.qualityEn,
    },
    {
      headingAr: "تطبيق عملي",
      headingEn: "Practical assignment",
      bodyAr: `${module.practiceAr} طبّقه من زاوية هذا الدرس تحديدًا: ${stage.titleAr}.`,
      bodyEn: `${module.practiceEn} Apply it specifically through this lesson's lens: ${stage.titleEn}.`,
      bulletsAr: ["اكتب المخرج في صفحة واحدة", "حدد ما ستقيسه ومتى", "حدد الخطوة التالية ومسؤولها"],
      bulletsEn: ["Keep the output to one page", "State what you will measure and when", "Define the next step and its owner"],
    },
  ];
}

export const courseLessons: CourseLesson[] = courseModules.flatMap((module) =>
  lessonStages.map((stage, index) => {
    const order = (module.order - 1) * lessonStages.length + index + 1;
    const id = `lesson-${String(order).padStart(3, "0")}`;
    return {
      id,
      order,
      moduleId: module.id,
      lessonInModule: index + 1,
      titleAr: `${module.titleAr}: ${stage.titleAr}`,
      titleEn: `${module.titleEn}: ${stage.titleEn}`,
      descriptionAr: `${stage.angleAr} ضمن وحدة ${module.titleAr} في مسار SEO من البداية حتى التنفيذ الاحترافي.`,
      descriptionEn: `${stage.angleEn} Part of the ${module.titleEn} module in a complete path from SEO fundamentals to professional delivery.`,
      duration: "10 min",
      published: true,
      sections: createSections(module, stage, index + 1),
    } satisfies CourseLesson;
  }),
);

export function getCourseLesson(id: string) {
  return courseLessons.find((lesson) => lesson.id === id);
}

export function getCourseModule(id: string) {
  return courseModules.find((module) => module.id === id);
}

export function getModuleLessons(moduleId: string) {
  return courseLessons.filter((lesson) => lesson.moduleId === moduleId);
}

export const publishedCourseLessons = courseLessons.filter((lesson) => lesson.published);
export const COURSE_UPDATED = "2026-09-07";

