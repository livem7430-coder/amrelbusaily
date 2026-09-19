import { SeoAuthorityLayout, type SeoCopy, type SeoLanguage } from "@/components/SeoAuthorityPage";

export type SeoMarket = "saudi" | "uae";

const base = "https://amrelbusaily.vercel.app";

const marketPath: Record<SeoMarket, string> = {
  saudi: "seo-expert-saudi",
  uae: "seo-expert-uae",
};

const countryName: Record<SeoMarket, { ar: string; en: string }> = {
  saudi: { ar: "السعودية", en: "Saudi Arabia" },
  uae: { ar: "الإمارات", en: "the UAE" },
};

function getMarketCopy(lang: SeoLanguage, market: SeoMarket): SeoCopy {
  if (market === "saudi" && lang === "ar") {
    return {
      title: "خبير سيو في السعودية | عمرو البصيلي — SEO للمتاجر وشركات الخدمات",
      description:
        "خبير سيو في السعودية للمتاجر الإلكترونية وشركات الخدمات: سيو تقني لمنصات سلة وزد، محتوى عربي يتصدر، SEO محلي للرياض وجدة، وقياس مربوط بالمبيعات. استشارة مجانية.",
      eyebrow: "SEO للسوق السعودي",
      heading: "خبير سيو في السعودية يوصّل متجرك أو شركتك لأول نتيجة في جوجل.",
      intro:
        "السوق السعودي من أسرع أسواق التجارة الإلكترونية نموًا في المنطقة، والمنافسة على نتائج البحث في الرياض وجدة وباقي المدن بتزيد كل سنة. أنا عمرو البصيلي، خبير سيو بخبرة 7 سنين وأكثر من 50 مشروع، بشتغل مع متاجر وشركات سعودية عن بُعد بمنهجية واضحة: تشخيص صادق، خطة أولويات، وتنفيذ مرتبط بالمبيعات مش بأرقام الظهور بس.",
      answer:
        "لو بتدور على خبير سيو في السعودية: أنا بقدم أوديت تقني كامل، بحث كلمات للسوق السعودي، سيو محلي للرياض وجدة والدمام، وتحسين متاجر سلة وزد، مع تقارير شهرية توضح أثر الشغل على الطلبات والمبيعات — وكل ده عن بُعد وبتواصل مباشر معايا أنا، مش مع فريق مبيعات.",
      audienceTitle: "مين اللي بيستفيد من الشغل ده في السعودية؟",
      audience: [
        "متاجر إلكترونية على سلة وزد عايزة تزود الطلبات من البحث المجاني بدل الاعتماد الكامل على الإعلانات.",
        "شركات خدمات في الرياض وجدة والدمام — عيادات، مكاتب محاماة ومحاسبة، مقاولات، صيانة — محتاجة استفسارات مؤهلة مش زيارات فاضية.",
        "عيادات ومراكز تجميل وأسنان بتنافس على كلمات محلية عالية القيمة في مدنها.",
        "شركات عقار ومطورين عايزين يظهروا لما العميل يبحث عن مشاريع أو مناطق محددة.",
        "شركات B2B وSaaS سعودية عايزة محتوى عربي وإنجليزي مربوط بالـCRM والمبيعات.",
      ],
      deliverablesTitle: "إيه اللي هتستلمه فعليًا؟",
      deliverables: [
        { title: "أوديت سيو تقني شامل", body: "فحص الفهرسة والزحف والسرعة وCore Web Vitals والـSchema والروابط الداخلية — مع قائمة إصلاحات مرتبة بالأولوية والأثر، مش ملف تحذيرات طويل." },
        { title: "بحث كلمات للسوق السعودي", body: "خريطة كلمات مبنية على إزاي السعوديين فعلاً بيبحثوا: صيغ محلية، مدن، ونية شراء واضحة — موزعة على صفحات موقعك من غير تنافس داخلي." },
        { title: "سيو محلي للرياض وجدة", body: "تحسين Google Business Profile، صفحات مدن بمحتوى حقيقي مش نسخ ولزق، واتساق بيانات النشاط (NAP) عبر الدلائل السعودية المهمة." },
        { title: "تحسين متاجر سلة وزد", body: "معالجة القيود المعروفة للمنصات: بنية الروابط، صفحات الفئات، سرعة القوالب، والمحتوى التعريفي اللي بيفرق في الترتيب والتحويل." },
        { title: "محتوى عربي يتصدر", body: "مقالات وصفحات خدمات مكتوبة بعربي طبيعي يفهمه العميل السعودي — بإجابات مباشرة، أمثلة من السوق، وأسئلة شائعة مع FAQ Schema." },
        { title: "قياس مربوط بالمبيعات", body: "تقرير شهري يربط الكلمات والصفحات بالطلبات والاستفسارات والإيراد، بحيث تعرف كل ريال شغال فين." },
      ],
      processTitle: "بنشتغل إزاي؟",
      process: [
        { number: "01", title: "استشارة وفهم النشاط", body: "مكالمة قصيرة نفهم فيها نشاطك وسوقك ومنافسيك المباشرين في السعودية، ونحدد هدف واضح قابل للقياس." },
        { number: "02", title: "أوديت وتشخيص", body: "فحص كامل للموقع والظهور الحالي في نتائج البحث السعودية، وتحديد اللي بيمنعك من التصدر بالظبط." },
        { number: "03", title: "خطة وتنفيذ", body: "خطة 90 يوم بأولويات واضحة: إصلاحات تقنية، صفحات ومحتوى، وتحسين محلي — بتتنفذ بالترتيب اللي يجيب أثر أسرع." },
        { number: "04", title: "قياس وتحسين مستمر", body: "متابعة شهرية للكلمات والترافيك والتحويلات، وتعديل الخطة بناءً على البيانات — مش انطباعات." },
      ],
      fitTitle: "الشغل عن بُعد بجد؟",
      fitBody:
        "أيوه. كل شغلي مع عملاء الخليج عن بُعد: مكالمات مجدولة، تقارير مكتوبة، وتواصل مباشر واتساب. الأوديت والمحتوى والتحليلات كلها شغل رقمي بطبيعته — واللي بيفرق هو جودة التشخيص والتنفيذ، مش مكان المكتب.",
      trustTitle: "ليه تشتغل معايا أنا مش وكالة؟",
      trustBody:
        "لأنك بتتكلم مع اللي بينفذ فعلاً. 7 سنين خبرة وأكثر من 50 مشروع في متاجر وخدمات وSaaS، والنتايج موثقة بلقطات من Search Console وأدوات التحليلات على موقعي. مفيش طبقات حسابات ولا تقارير معادة — تشخيص صادق حتى لو الإجابة إن السيو مش أولويتك دلوقتي.",
      faqTitle: "أسئلة بتتسأل كتير من السعودية",
      faq: [
        { q: "بتقدم خدمات السيو للسعودية عن بُعد إزاي؟", a: "كل الشغل رقمي: أوديت، محتوى، تقارير، ومكالمات مجدولة. التواصل مباشر معايا على واتساب، والتقارير الشهرية توضح الكلمات والصفحات والتحويلات. مكان العميل مش بيفرق في جودة التنفيذ." },
        { q: "كم أسعار خدمات السيو للسوق السعودي؟", a: "السعر بيعتمد على حجم الموقع والمنافسة في مجالك والمدينة المستهدفة. الأوديت الأولي والاستشارة مجانية، وبعدها بقدم عرض واضح بنطاق محدد — من غير التزامات طويلة مجبرية." },
        { q: "قد إيه وقت عشان تظهر النتايج؟", a: "عادة من 3 لـ6 شهور للنتايج الواضحة، حسب قوة الدومين والمنافسة. الكلمات المحلية الطويلة (زي خدمة + حي أو مدينة) بتتحرك أسرع من الكلمات العامة." },
        { q: "بتشتغل مع متاجر سلة وزد؟", a: "أيوه، عندي خبرة عملية بقيود المنصتين: بنية الروابط، صفحات الفئات، سرعة القوالب، وإزاي تعوض بالمحتوى والسيو الخارجي اللي المنصة متديكش تحكم كامل فيه." },
        { q: "إيه الفرق بينك وبين وكالة تسويق سعودية؟", a: "التواصل المباشر مع المنفذ، تقارير صادقة بلا تجميل، وتكلفة أقل من الوكالات الكبيرة لأن مفيش طبقات إدارة. وفي المقابل: أنا شخص واحد، فلو محتاج فريق كامل لإدارة كل قنوات التسويق مرة واحدة، هقولك ده بصراحة." },
      ],
      ctaTitle: "جاهز تتصدر نتائج البحث في السعودية؟",
      ctaBody:
        "احجز استشارة مجانية: هراجع موقعك وظهورك الحالي في نتائج البحث السعودية، وأقولك بصراحة إيه اللي محتاج يتعمل وإيه اللي متستاهلش تصرف عليه دلوقتي.",
      cta: "احجز استشارتك المجانية",
      related: [
        { label: "سيو الرياض", href: "/blog/seo-riyadh-ar" },
        { label: "سيو جدة", href: "/blog/seo-jeddah-ar" },
        { label: "خدمات السيو في السعودية", href: "/blog/seo-services-saudi-ar" },
        { label: "إزاي تختار خبير سيو", href: "/blog/best-seo-expert-saudi-ar" },
        { label: "سيو المتاجر الإلكترونية", href: "/ar/ecommerce-seo" },
      ],
    };
  }
  if (market === "saudi") {
    return {
      title: "SEO Expert in Saudi Arabia | Amr Elbusaily — E-commerce & Services SEO",
      description:
        "SEO expert serving Saudi Arabia: technical SEO for Salla and Zid stores, Arabic content that ranks, local SEO for Riyadh and Jeddah, and revenue-tied reporting. Free consultation.",
      eyebrow: "SEO for the Saudi market",
      heading: "An SEO expert for Saudi Arabia who gets your store or company to the top of Google.",
      intro:
        "Saudi Arabia is one of the fastest-growing e-commerce markets in the region, and competition for search visibility in Riyadh, Jeddah and beyond rises every year. I am Amr Elbusaily, an SEO specialist with 7 years of experience across 50+ projects, working remotely with Saudi stores and service companies through a clear method: honest diagnosis, prioritized plan, and execution tied to sales rather than vanity metrics.",
      answer:
        "If you are looking for an SEO expert in Saudi Arabia: I deliver a full technical audit, Saudi-market keyword research, local SEO for Riyadh and Jeddah, and Salla/Zid store optimization, with monthly reporting that ties the work to orders and revenue - all remote, and you talk directly to me, not a sales team.",
      audienceTitle: "Who benefits from this work in Saudi Arabia?",
      audience: [
        "Salla and Zid stores that want more orders from organic search instead of relying fully on paid ads.",
        "Service companies in Riyadh, Jeddah and Dammam - clinics, law and accounting firms, contractors, maintenance - that need qualified inquiries, not empty visits.",
        "Dental, cosmetic and medical clinics competing for high-value local keywords in their cities.",
        "Real estate developers who want to appear when buyers search for specific projects or districts.",
        "Saudi B2B and SaaS companies that need Arabic and English content tied to CRM and sales.",
      ],
      deliverablesTitle: "What do you actually receive?",
      deliverables: [
        { title: "Full technical SEO audit", body: "Indexing, crawlability, speed, Core Web Vitals, schema and internal links - with a fix list ranked by priority and impact, not a long warning export." },
        { title: "Saudi-market keyword research", body: "A keyword map built on how people in Saudi Arabia actually search: local phrasing, city modifiers and clear buying intent, mapped to your pages without internal competition." },
        { title: "Local SEO for Riyadh and Jeddah", body: "Google Business Profile optimization, genuine city pages instead of copy-paste, and consistent business data across the Saudi directories that matter." },
        { title: "Salla and Zid store optimization", body: "Hands-on work around the known platform constraints: link architecture, category pages, theme speed, and the descriptive content that moves rankings and conversion." },
        { title: "Arabic content that ranks", body: "Articles and service pages written in natural Arabic your Saudi customers actually read - direct answers, market examples, and FAQs with FAQ schema." },
        { title: "Revenue-tied measurement", body: "A monthly report connecting keywords and pages to orders, inquiries and revenue, so you know where every riyal of effort goes." },
      ],
      processTitle: "How do we work?",
      process: [
        { number: "01", title: "Consultation and discovery", body: "A short call to understand your business, your Saudi market and direct competitors, and to set one measurable goal." },
        { number: "02", title: "Audit and diagnosis", body: "A full review of the site and your current visibility in Saudi search results, identifying exactly what is blocking you from ranking." },
        { number: "03", title: "Plan and execution", body: "A 90-day plan with clear priorities: technical fixes, pages and content, and local optimization - executed in the order that brings impact fastest." },
        { number: "04", title: "Measure and iterate", body: "Monthly tracking of keywords, traffic and conversions, adjusting the plan based on data rather than impressions." },
      ],
      fitTitle: "Does remote work actually work?",
      fitBody:
        "Yes. All my Gulf client work is remote: scheduled calls, written reports, and direct WhatsApp contact. Audits, content and analytics are digital by nature - what makes the difference is the quality of diagnosis and execution, not an office location.",
      trustTitle: "Why work with me instead of an agency?",
      trustBody:
        "Because you talk to the person who does the work. 7 years of experience and 50+ projects across e-commerce, services and SaaS, with results documented through Search Console and analytics snapshots on this site. No account layers and no recycled reports - honest diagnosis, even when the answer is that SEO is not your priority right now.",
      faqTitle: "Questions I get from Saudi clients",
      faq: [
        { q: "How do you deliver SEO for Saudi Arabia remotely?", a: "Everything is digital: audit, content, reports and scheduled calls. You talk to me directly on WhatsApp, and the monthly report shows keywords, pages and conversions. Client location does not change execution quality." },
        { q: "What does SEO cost for the Saudi market?", a: "Pricing depends on site size, competition in your niche and the target city. The initial audit and consultation are free, after which I send a clear scoped offer - no forced long-term commitments." },
        { q: "How long until results show?", a: "Usually 3 to 6 months for meaningful results, depending on domain strength and competition. Long-tail local keywords (service plus district or city) move faster than broad terms." },
        { q: "Do you work with Salla and Zid stores?", a: "Yes, I have hands-on experience with both platforms' constraints: link architecture, category pages, theme speed, and how to compensate with content and off-page SEO for what the platform does not expose." },
        { q: "What is the difference between you and a Saudi marketing agency?", a: "Direct contact with the person executing, honest reporting without polish, and lower cost than large agencies because there are no management layers. In return: I am one person, so if you need a full team running every marketing channel at once, I will tell you that honestly." },
      ],
      ctaTitle: "Ready to rank in Saudi search results?",
      ctaBody:
        "Book a free consultation: I will review your site and your current visibility in Saudi search results, and tell you honestly what needs doing and what is not worth spending on yet.",
      cta: "Book your free consultation",
      related: [
        { label: "SEO in Riyadh", href: "/blog/seo-riyadh-en" },
        { label: "SEO in Jeddah", href: "/blog/seo-jeddah-en" },
        { label: "SEO services in Saudi Arabia", href: "/blog/seo-services-saudi-en" },
        { label: "How to choose an SEO expert", href: "/blog/best-seo-expert-saudi-en" },
        { label: "E-commerce SEO", href: "/ecommerce-seo" },
      ],
    };
  }
  if (lang === "ar") {
    return {
      title: "خبير سيو في الإمارات | عمرو البصيلي — SEO لدبي وأبوظبي",
      description:
        "خبير سيو في الإمارات للمتاجر وشركات الخدمات: سيو ثنائي اللغة عربي/إنجليزي، SEO محلي لدبي وأبوظبي، سيو تقني ومحتوى، وتقارير مربوطة بالإيراد. استشارة مجانية.",
      eyebrow: "SEO للسوق الإماراتي",
      heading: "خبير سيو في الإمارات يساعد شركتك تتصدر في سوق ثنائي اللغة.",
      intro:
        "السوق الإماراتي مختلف: جمهور عربي وإنجليزي في نفس المدينة، منافسة وكالات عالية في دبي وأبوظبي، وقطاعات زي العقار والعيادات والخدمات المالية بتدفع مبالغ كبيرة عشان تتصدر. أنا عمرو البصيلي، خبير سيو بخبرة 7 سنين وأكثر من 50 مشروع، بشتغل مع شركات إماراتية عن بُعد بمنهجية واحدة: تشخيص صادق، خطة أولويات، وتنفيذ مرتبط بالإيراد.",
      answer:
        "لو بتدور على خبير سيو في الإمارات: أنا بقدم أوديت تقني كامل، استراتيجية ثنائية اللغة (عربي/إنجليزي) ببنية hreflang سليمة، SEO محلي لدبي وأبوظبي، ومحتوى يتصدر في السوقين — مع تقارير شهرية تربط الشغل بالاستفسارات والمبيعات، وكل ده عن بُعد وبتواصل مباشر معايا.",
      audienceTitle: "مين اللي بيستفيد من الشغل ده في الإمارات؟",
      audience: [
        "شركات خدمات في دبي وأبوظبي — عيادات، مكاتب قانونية ومحاسبية، خدمات منزلية — محتاجة استفسارات مؤهلة من البحث المجاني.",
        "متاجر إلكترونية بتستهدف الإمارات وعايزة تقلل اعتمادها على الإعلانات المدفوعة غالية التكلفة.",
        "شركات عقار ووساطة بتنافس على كلمات مشاريع ومناطق في دبي.",
        "أنشطة بتخدم جمهورين عربي وإنجليزي ومحتاجة بنية لغات صح من غير محتوى مكرر.",
        "شركات B2B وSaaS في الإمارات عايزة محتوى مربوط بالمبيعات والـCRM.",
      ],
      deliverablesTitle: "إيه اللي هتستلمه فعليًا؟",
      deliverables: [
        { title: "أوديت سيو تقني شامل", body: "فحص الفهرسة والزحف والسرعة وCore Web Vitals والـSchema — مع قائمة إصلاحات مرتبة بالأولوية والأثر على السوق الإماراتي تحديدًا." },
        { title: "استراتيجية ثنائية اللغة", body: "بنية عربي/إنجليزي سليمة: hreflang مظبوط، منع المحتوى المكرر، وخريطة كلمات تفصل نية البحث العربية عن الإنجليزية بدل ترجمة حرفية." },
        { title: "SEO محلي لدبي وأبوظبي", body: "تحسين Google Business Profile، صفحات مناطق بمحتوى حقيقي، واتساق بيانات النشاط عبر الدلائل الإماراتية المهمة." },
        { title: "بحث كلمات للسوق الإماراتي", body: "خريطة كلمات مبنية على المنافسة الفعلية في نتائج البحث الإماراتية، موزعة على الصفحات من غير تنافس داخلي." },
        { title: "محتوى يتصدر باللغتين", body: "مقالات وصفحات خدمات بإجابات مباشرة وأمثلة من السوق الإماراتي وأسئلة شائعة مع FAQ Schema." },
        { title: "قياس مربوط بالإيراد", body: "تقرير شهري يربط الكلمات والصفحات بالاستفسارات والمبيعات، منفصل حسب اللغة والإمارة عند الحاجة." },
      ],
      processTitle: "بنشتغل إزاي؟",
      process: [
        { number: "01", title: "استشارة وفهم النشاط", body: "مكالمة قصيرة نفهم فيها نشاطك ومنافسيك المباشرين في الإمارات، ونحدد هدف واضح قابل للقياس." },
        { number: "02", title: "أوديت وتشخيص", body: "فحص كامل للموقع والظهور الحالي في نتائج البحث الإماراتية باللغتين، وتحديد اللي بيمنعك من التصدر بالظبط." },
        { number: "03", title: "خطة وتنفيذ", body: "خطة 90 يوم بأولويات واضحة: إصلاحات تقنية، بنية اللغات، صفحات ومحتوى، وتحسين محلي." },
        { number: "04", title: "قياس وتحسين مستمر", body: "متابعة شهرية للكلمات والترافيك والتحويلات باللغتين، وتعديل الخطة بناءً على البيانات." },
      ],
      fitTitle: "الشغل عن بُعد مناسب لسوق زي الإمارات؟",
      fitBody:
        "أيوه. الأوديت والمحتوى والتحليلات شغل رقمي بطبيعته، والسوق الإماراتي نفسه بيشتغل عن بُعد بشكل طبيعي. مكالمات مجدولة، تقارير مكتوبة، وتواصل مباشر واتساب — واللي بيفرق هو جودة التشخيص والتنفيذ.",
      trustTitle: "ليه تشتغل معايا أنا مش وكالة دبي؟",
      trustBody:
        "لأنك بتتكلم مع اللي بينفذ فعلاً. 7 سنين خبرة وأكثر من 50 مشروع، والنتايج موثقة بلقطات Search Console على موقعي. وكالات دبي الكبيرة بتحاسب بالطبقات — أنا بقدم نفس جودة التنفيذ بتكلفة أقل وتواصل مباشر، وبقولك بصراحة لو السيو مش أولويتك دلوقتي.",
      faqTitle: "أسئلة بتتسأل كتير من الإمارات",
      faq: [
        { q: "إزاي بتتعامل مع السوق ثنائي اللغة في الإمارات؟", a: "ببنية لغات سليمة من الأول: hreflang مظبوط، فصل نية البحث العربية عن الإنجليزية في خريطة الكلمات، ومحتوى مكتوب لكل جمهور مش مترجم حرفيًا — عشان ميحصلش محتوى مكرر ولا تنافس داخلي." },
        { q: "كم أسعار خدمات السيو للإمارات؟", a: "السعر بيعتمد على حجم الموقع والمنافسة في مجالك وعدد اللغات والإمارات المستهدفة. الأوديت الأولي والاستشارة مجانية، وبعدها بقدم عرض واضح بنطاق محدد." },
        { q: "قد إيه وقت عشان تظهر النتايج في دبي؟", a: "عادة من 3 لـ6 شهور، والمنافسة في دبي أعلى من أغلب أسواق المنطقة فالمدى بيعتمد على قوة الدومين والمجال. الكلمات الطويلة المحلية بتتحرك أسرع." },
        { q: "بتشتغل مع شركات العقارات في دبي؟", a: "أيوه، العقار من القطاعات اللي بيشتغل فيها السيو المحلي وكلمات المناطق والمشاريع بشكل قوي جدًا، وبشرط وجود محتوى حقيقي عن المناطق مش صفحات مولدة." },
        { q: "إيه الفرق بينك وبين الوكالات الإماراتية؟", a: "تواصل مباشر مع المنفذ، تقارير صادقة، وتكلفة أقل لأن مفيش طبقات إدارة. ولو محتاج فريق كامل لكل القنوات مرة واحدة، هقولك ده بصراحة من الأول." },
      ],
      ctaTitle: "جاهز تتصدر نتائج البحث في الإمارات؟",
      ctaBody:
        "احجز استشارة مجانية: هراجع موقعك وظهورك الحالي في نتائج البحث الإماراتية باللغتين، وأقولك بصراحة إيه اللي محتاج يتعمل الأول.",
      cta: "احجز استشارتك المجانية",
      related: [
        { label: "سيو دبي", href: "/blog/seo-dubai-ar" },
        { label: "خدمات السيو في الإمارات", href: "/blog/seo-services-uae-ar" },
        { label: "إزاي تختار خبير سيو في الإمارات", href: "/blog/best-seo-expert-uae-ar" },
        { label: "International SEO", href: "/ar/international-seo" },
        { label: "سيو المتاجر الإلكترونية", href: "/ar/ecommerce-seo" },
      ],
    };
  }
  return {
    title: "SEO Expert in the UAE | Amr Elbusaily — Dubai & Abu Dhabi SEO",
    description:
      "SEO expert serving the UAE: bilingual Arabic/English SEO, local SEO for Dubai and Abu Dhabi, technical audits and content, with revenue-tied reporting. Free consultation.",
    eyebrow: "SEO for the UAE market",
    heading: "An SEO expert for the UAE who helps your company rank in a bilingual market.",
    intro:
      "The UAE market is different: Arabic and English audiences in the same city, heavy agency competition in Dubai and Abu Dhabi, and sectors like real estate, clinics and financial services paying premium prices to rank. I am Amr Elbusaily, an SEO specialist with 7 years of experience across 50+ projects, working remotely with UAE companies through one method: honest diagnosis, a prioritized plan, and execution tied to revenue.",
    answer:
      "If you are looking for an SEO expert in the UAE: I deliver a full technical audit, a bilingual Arabic/English strategy with correct hreflang architecture, local SEO for Dubai and Abu Dhabi, and content that ranks in both markets - with monthly reporting that ties the work to inquiries and sales, all remote with direct contact.",
    audienceTitle: "Who benefits from this work in the UAE?",
    audience: [
      "Service companies in Dubai and Abu Dhabi - clinics, law and accounting firms, home services - that need qualified inquiries from organic search.",
      "E-commerce stores targeting the UAE that want to reduce reliance on expensive paid ads.",
      "Real estate and brokerage firms competing for project and district keywords in Dubai.",
      "Businesses serving both Arabic and English audiences that need clean language architecture without duplicate content.",
      "UAE B2B and SaaS companies that want content tied to sales and CRM.",
    ],
    deliverablesTitle: "What do you actually receive?",
    deliverables: [
      { title: "Full technical SEO audit", body: "Indexing, crawlability, speed, Core Web Vitals and schema - with a fix list ranked by priority and impact for the UAE market specifically." },
      { title: "Bilingual SEO strategy", body: "Clean Arabic/English architecture: correct hreflang, no duplicate content, and a keyword map that separates Arabic and English search intent instead of literal translation." },
      { title: "Local SEO for Dubai and Abu Dhabi", body: "Google Business Profile optimization, genuine area pages, and consistent business data across the UAE directories that matter." },
      { title: "UAE-market keyword research", body: "A keyword map built on real competition in UAE search results, distributed across pages without internal competition." },
      { title: "Content that ranks in both languages", body: "Articles and service pages with direct answers, UAE market examples, and FAQs with FAQ schema." },
      { title: "Revenue-tied measurement", body: "A monthly report connecting keywords and pages to inquiries and sales, split by language and emirate when needed." },
    ],
    processTitle: "How do we work?",
    process: [
      { number: "01", title: "Consultation and discovery", body: "A short call to understand your business and direct competitors in the UAE, and to set one measurable goal." },
      { number: "02", title: "Audit and diagnosis", body: "A full review of the site and your current visibility in UAE search results in both languages, identifying exactly what blocks you from ranking." },
      { number: "03", title: "Plan and execution", body: "A 90-day plan with clear priorities: technical fixes, language architecture, pages and content, and local optimization." },
      { number: "04", title: "Measure and iterate", body: "Monthly tracking of keywords, traffic and conversions in both languages, adjusting the plan based on data." },
    ],
    fitTitle: "Does remote work fit a market like the UAE?",
    fitBody:
      "Yes. Audits, content and analytics are digital by nature, and the UAE market itself works remotely as a norm. Scheduled calls, written reports and direct WhatsApp contact - what makes the difference is the quality of diagnosis and execution.",
    trustTitle: "Why work with me instead of a Dubai agency?",
    trustBody:
      "Because you talk to the person who does the work. 7 years of experience and 50+ projects, with results documented through Search Console snapshots on this site. Large Dubai agencies bill by layers - I deliver the same execution quality at lower cost with direct contact, and I will tell you honestly if SEO is not your priority right now.",
    faqTitle: "Questions I get from UAE clients",
    faq: [
      { q: "How do you handle the UAE's bilingual market?", a: "With clean language architecture from the start: correct hreflang, Arabic and English search intent separated in the keyword map, and content written for each audience rather than literally translated - so there is no duplicate content or internal competition." },
      { q: "What does SEO cost for the UAE?", a: "Pricing depends on site size, competition in your niche, and the number of languages and emirates targeted. The initial audit and consultation are free, after which I send a clear scoped offer." },
      { q: "How long until results show in Dubai?", a: "Usually 3 to 6 months. Dubai is more competitive than most regional markets, so the range depends on domain strength and niche. Long-tail local keywords move faster." },
      { q: "Do you work with Dubai real estate companies?", a: "Yes. Real estate is one of the sectors where local SEO and district/project keywords work extremely well, provided there is genuine area content rather than generated pages." },
      { q: "What is the difference between you and UAE agencies?", a: "Direct contact with the person executing, honest reporting, and lower cost because there are no management layers. If you need a full team running every channel at once, I will say that honestly from the start." },
    ],
    ctaTitle: "Ready to rank in UAE search results?",
    ctaBody:
      "Book a free consultation: I will review your site and your current visibility in UAE search results in both languages, and tell you honestly what needs doing first.",
    cta: "Book your free consultation",
    related: [
      { label: "SEO in Dubai", href: "/blog/seo-dubai-en" },
      { label: "SEO services in the UAE", href: "/blog/seo-services-uae-en" },
      { label: "How to choose an SEO expert in the UAE", href: "/blog/best-seo-expert-uae-en" },
      { label: "International SEO", href: "/international-seo" },
      { label: "E-commerce SEO", href: "/ecommerce-seo" },
    ],
  };
}

export function geoMarketHead(lang: SeoLanguage, market: SeoMarket) {
  const copy = getMarketCopy(lang, market);
  const path = marketPath[market];
  const url = `${base}/${lang === "ar" ? `ar/${path}` : path}`;
  const alternate = `${base}/${lang === "ar" ? path : `ar/${path}`}`;
  return {
    meta: [
      { title: copy.title },
      { name: "description", content: copy.description },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { property: "og:title", content: copy.title },
      { property: "og:description", content: copy.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:locale", content: lang === "ar" ? "ar_EG" : "en_US" },
      { property: "og:image", content: `${base}/og-image.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${base}/og-image.jpg` },
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
            alternateName: "عمرو البصيلي",
            url: base,
            jobTitle: "SEO and digital growth strategist",
          },
          areaServed: { "@type": "Country", name: market === "saudi" ? "Saudi Arabia" : "United Arab Emirates" },
          serviceType: "SEO strategy and search engine optimization",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: copy.faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }),
      },
    ],
  };
}

export function GeoSeoMarketPage({ lang, market }: { lang: SeoLanguage; market: SeoMarket }) {
  return <SeoAuthorityLayout lang={lang} copy={getMarketCopy(lang, market)} />;
}
