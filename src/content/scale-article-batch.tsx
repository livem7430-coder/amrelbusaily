import type { ComponentType } from "react";

type Section = { heading: string; paragraphs: string[] };
type Article = { title: string; directAnswer: string; sections: Section[]; faq: { q: string; a: string }[]; serviceHref: string; serviceLabel: string };

function ArticleView({ article, lang }: { article: Article; lang: "ar" | "en" }) {
  return (
    <>
      <p><strong>{lang === "ar" ? "الإجابة المختصرة:" : "Direct answer:"}</strong> {article.directAnswer}</p>
      {article.sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </section>
      ))}
      <section>
        <h2>{lang === "ar" ? "الأسئلة الشائعة" : "Frequently asked questions"}</h2>
        {article.faq.map((item) => <div key={item.q}><h3>{item.q}</h3><p>{item.a}</p></div>)}
      </section>
      <p><a href={article.serviceHref}>{article.serviceLabel}</a></p>
    </>
  );
}

const productPageAr: Article = {
  title: "تحسين صفحات المنتجات لمحركات البحث: كيف تكتب صفحة تبيع وتظهر؟",
  directAnswer: "صفحة المنتج القوية في SEO لا تكرر اسم المنتج فقط؛ بل تجيب عن نية الباحث، وتشرح الاستخدام والاختلافات والقيود بوضوح، وتسهّل اتخاذ قرار الشراء. ابدأ بمطابقة الصفحة مع ما يريد الزائر معرفته قبل إضافة الكلمات المفتاحية.",
  serviceHref: "/ar/services/ecommerce-seo-growth",
  serviceLabel: "استكشف خدمة SEO ونمو التجارة الإلكترونية",
  sections: [
    { heading: "ابدأ بنية الباحث وليس باسم المنتج", paragraphs: [
      "الباحث عن منتج قد يكون في مرحلة استكشاف، أو مقارنة، أو جاهزًا للشراء. هذه الحالات تحتاج إلى صفحات ومعلومات مختلفة. صفحة المنتج يجب أن تجيب عن الأسئلة التي تمنع القرار: لمن يناسب المنتج؟ ما الذي يميزه؟ ما البدائل؟ وما تفاصيل الشحن والإرجاع؟ عندما تكتب على هذا الأساس يصبح استخدام المصطلحات طبيعيًا بدل حشو الاسم في كل سطر.",
      "راجع نتائج البحث الفعلية قبل كتابة الصفحة. لاحظ نوع الصفحات الظاهرة، والأسئلة المتكررة، والخصائص التي تذكرها المتاجر المنافسة، لكن لا تنسخ الصياغة. اجمع ذلك مع معرفة فريق المبيعات وخدمة العملاء؛ فاعتراضات العملاء الحقيقية تكشف فجوات لا تظهر في أدوات الكلمات المفتاحية وحدها."
    ]},
    { heading: "ابنِ عنوانًا ووصفًا يصفان العرض بدقة", paragraphs: [
      "العنوان الجيد يضم اسم المنتج والعنصر الذي يفرّقه عندما يكون ذلك مفيدًا، مثل المقاس أو الفئة أو الاستخدام، من دون ادعاء لا يمكن إثباته. اجعل العنوان مفهومًا عند قراءته منفصلًا عن الموقع، وتجنب إضافة أسماء مدن أو كلمات تجارية لا علاقة لها بالمنتج.",
      "الوصف المختصر ليس مكانًا لتكرار العنوان. استخدمه لتوضيح الفائدة الأساسية أو حالة الاستخدام أو سبب المقارنة. لا تجعل الوصف يَعِد بنتيجة صحية أو مالية لا يضمنها المنتج، ولا تضع معلومات متغيرة مثل المخزون داخل نص ثابت إذا كان النظام قادرًا على عرضها بطريقة محدثة."
    ]},
    { heading: "اكتب وصفًا يساعد القرار بدل فقرة عامة", paragraphs: [
      "قسّم وصف المنتج إلى طبقات: ملخص سريع، ثم تفاصيل الاستخدام، ثم المواصفات، ثم ما يأتي مع المنتج، وأخيرًا القيود أو متطلبات الاستخدام. هذا الترتيب يخدم الزائر الذي يريد إجابة سريعة، ويمنح الباحث المتردد تفاصيل كافية للمقارنة من دون إجباره على قراءة كتلة نصية واحدة.",
      "استخدم لغة حسية وعملية عندما تستطيع: كيف يُستخدم المنتج؟ ما البيئة المناسبة له؟ ما الذي يحتاجه قبل التشغيل؟ إذا كانت هناك إصدارات أو مقاسات، اشرح الفروق التي تؤثر في الاختيار. التفاصيل الصغيرة تقلل أسئلة ما بعد الشراء وتزيد الثقة أكثر من عبارات مثل الأفضل أو رقم واحد يناسب الجميع."
    ]},
    { heading: "اربط الصفحة بالفئة والمنتجات ذات الصلة", paragraphs: [
      "الروابط الداخلية تساعد المستخدم ومحركات البحث على فهم مكان المنتج داخل المتجر. اربط إلى الفئة الرئيسية، والفئات الفرعية ذات الصلة، ودليل شراء مفيد عندما يكون موجودًا. استخدم نص رابط يصف الوجهة بدل عبارات عامة مثل اضغط هنا، واجعل الرابط جزءًا من سياق مفيد.",
      "المنتجات ذات الصلة يجب أن تكون منطقية وليست شبكة عشوائية. اقترح ملحقًا يحتاجه المشتري فعلًا، أو بديلًا في فئة سعرية أو استخدام مختلف، أو منتجًا يشتريه العملاء معًا إذا كانت البيانات تدعم ذلك. راقب ألا تؤدي التوصيات إلى إخفاء المنتج الأساسي أو تشتيت القرار."
    ]},
    { heading: "تعامل مع الصور والبيانات المنظمة كجزء من التجربة", paragraphs: [
      "الصورة الأساسية يجب أن تعرض المنتج بوضوح، والصور الإضافية يجب أن تجيب عن أسئلة حقيقية مثل الحجم أو طريقة الاستخدام أو المكونات. استخدم أسماء ملفات ووصفًا بديلًا دقيقًا، واضغط الصور واختر المقاس المناسب حتى لا تدفع الصفحة ثمن صور أكبر من حاجة الشاشة.",
      "استخدم Product structured data فقط عندما تطابق البيانات ما يراه المستخدم فعلًا، مثل الاسم والصورة والسعر والتوفر والمراجعات الحقيقية. البيانات المنظمة لا تعوّض صفحة ناقصة، ولا ينبغي استخدامها لإضافة تقييمات أو عروض غير ظاهرة. بعد التطبيق افحص الأخطاء والتغطية، ثم راقب التغييرات بدل افتراض ظهور النتيجة فورًا."
    ]},
    { heading: "قِس جودة الصفحة بعد الزيارة وليس النقر فقط", paragraphs: [
      "راقب مؤشرات منفصلة لكل مرحلة: ظهور الصفحة للاستعلامات المناسبة، النقرات، التفاعل مع الصور والاختيارات، الإضافة إلى السلة، ثم الشراء أو طلب التواصل. ارتفاع الزيارات وحده لا يثبت أن الصفحة ناجحة إذا كان الزائر يصل بنية مختلفة عن المنتج أو يغادر قبل فهم العرض.",
      "اختبر التحسينات واحدة في كل مرة عندما يكون ذلك ممكنًا. قد تبدأ بتحسين المعلومات الناقصة، ثم وضوح الشحن والإرجاع، ثم بنية العناوين والصور. احتفظ بخط أساس وفترة مقارنة واضحة، ولا تنسب تغير المبيعات إلى تعديل صفحة واحدة بلا النظر إلى الموسم والمخزون والحملات وتجربة الدفع."
    ]}
  ],
  faq: [
    { q: "هل يكفي وضع اسم المنتج في العنوان والوصف؟", a: "لا. الاسم نقطة بداية، لكن الصفحة تحتاج إلى معلومات الاستخدام والمواصفات والفروق والقيود والأسئلة التي تساعد الباحث على اتخاذ قرار." },
    { q: "هل يجب أن تكون صفحات المنتجات طويلة جدًا؟", a: "ليس الطول هدفًا مستقلًا. اجعل الصفحة كاملة بالنسبة لقرار الشراء، واستخدم طبقات وعناوين ومواصفات حتى يصل كل زائر إلى العمق الذي يحتاجه." },
    { q: "هل Product Schema يضمن ظهور النتائج الغنية؟", a: "لا. يجب أن تكون البيانات صحيحة ومطابقة للمحتوى الظاهر، وقد تختار محركات البحث إظهار النتائج أو عدم إظهارها حسب أنظمتها." }
  ]
};

const productPageEn: Article = {
  title: "Product Page SEO: How to Build Pages That Earn Visibility and Help People Buy",
  directAnswer: "A strong product page does more than repeat a product name. It matches the searcher’s intent, explains use cases and trade-offs, answers practical buying questions, and makes the next step easy. Start with decision-supporting information before optimizing keyword placement.",
  serviceHref: "/services/ecommerce-seo-growth",
  serviceLabel: "Explore e-commerce SEO and growth services",
  sections: [
    { heading: "Start with the searcher’s decision stage", paragraphs: [
      "A product search can represent discovery, comparison, or purchase intent. Each stage needs different information. A useful product page answers the questions that block a decision: who is it for, what makes it different, what are the limitations, and what happens after checkout? This produces natural relevance instead of repeating the product name in every paragraph.",
      "Review the actual search results before writing. Look for page types, recurring questions, and attributes competitors explain, but do not copy their wording. Combine that research with sales and support conversations. Real objections often reveal missing information that keyword tools cannot show on their own."
    ]},
    { heading: "Make the title and snippet accurately descriptive", paragraphs: [
      "A useful title includes the product name and a meaningful differentiator when it helps the user, such as size, category, or use case. It should still make sense outside the site. Avoid adding locations or commercial phrases that do not describe the product simply to capture extra searches.",
      "The description is not a place to repeat the title. Use it to explain the primary benefit, use case, or comparison point. Avoid unsupported health, financial, or performance promises. If stock changes frequently, let the interface expose current availability rather than embedding stale claims in static copy."
    ]},
    { heading: "Write for the decision, not for a word count", paragraphs: [
      "Layer the page: a short summary, practical use information, specifications, what is included, and constraints or requirements. This serves visitors who need a quick answer while giving comparison-minded shoppers enough detail without forcing everyone through one dense block of copy.",
      "Use concrete language whenever possible. Explain how the item is used, what environment it suits, and what is needed before it can be used. When variants exist, describe the differences that affect choice. Practical details reduce post-purchase questions and build more trust than broad claims such as best or one-size-fits-all."
    ]},
    { heading: "Connect the product to its commercial context", paragraphs: [
      "Internal links help users and search engines understand where a product belongs in the store. Link to the primary category, relevant subcategories, and a useful buying guide when one exists. Use descriptive anchor text and place each link in a sentence that explains why the destination matters.",
      "Related products should be genuinely useful rather than a random grid. Recommend a relevant accessory, an alternative for a different use or budget, or a complementary item when the data supports it. Make sure recommendations do not obscure the main product or create decision overload."
    ]},
    { heading: "Treat images and structured data as experience layers", paragraphs: [
      "The main image should make the item immediately understandable. Supporting images should answer real questions about size, use, materials, or included parts. Use accurate alternative text, sensible file sizes, and responsive dimensions so the page does not pay a performance cost for images larger than the user’s screen needs.",
      "Use Product structured data only when it matches what users can see, including name, image, price, availability, and genuine reviews where applicable. Structured data cannot repair an incomplete page and should not introduce offers or ratings that are not visible. Validate the markup and monitor coverage instead of assuming rich results are automatic."
    ]},
    { heading: "Measure the page beyond clicks", paragraphs: [
      "Separate the stages you measure: relevant impressions, clicks, engagement with images and variants, add-to-cart actions, and completed purchases or enquiries. More traffic does not prove success if visitors arrive with the wrong intent or leave before understanding the offer.",
      "Test improvements deliberately when possible. Start with missing information, then clarify shipping and returns, then refine headings or media. Keep a baseline and a defined comparison period. Do not attribute a revenue change to one page without considering seasonality, stock, campaigns, pricing, and checkout experience."
    ]}
  ],
  faq: [
    { q: "Is putting the product name in the title enough?", a: "No. The name is a starting point; the page also needs use information, specifications, differentiators, constraints, and answers that support the buying decision." },
    { q: "Do product pages need to be very long?", a: "Length is not the goal. Make the page complete for the decision and use layers, headings, and specifications so visitors can reach the depth they need." },
    { q: "Does Product structured data guarantee rich results?", a: "No. It must be accurate and match visible content, and search engines may or may not show enhanced results under their own systems." }
  ]
};

const facetsAr: Article = {
  title: "التنقل الموجّه في المتاجر: كيف تمنع فلاتر المنتجات من إهدار الزحف؟",
  directAnswer: "فلاتر المتجر لا تحتاج إلى أن تتحول كلها إلى صفحات قابلة للفهرسة. القرار الصحيح يبدأ بتحديد الفلاتر التي تمثل طلبًا حقيقيًا وله قيمة بحثية، ثم تصميم روابط ومسارات واضحة لها، بينما تبقى التركيبات التي لا تضيف قيمة خارج نطاق الفهرسة المقصودة.",
  serviceHref: "/ar/services/technical-seo-audits",
  serviceLabel: "اطلب تدقيقًا تقنيًا لمتجرك",
  sections: [
    { heading: "لماذا تصبح الفلاتر مشكلة SEO؟", paragraphs: [
      "المتجر قد ينشئ عنوان URL جديدًا لكل لون ومقاس وترتيب ومزيج من الفلاتر. بعض هذه العناوين مفيد للزائر داخل الجلسة، لكنه لا يستحق أن يكون صفحة بحث مستقلة. إذا تعاملت مع كل تركيبة كصفحة قابلة للاكتشاف، قد يتضخم عدد العناوين وتتنافس صفحات متشابهة على الإشارات نفسها.",
      "المشكلة ليست في وجود الفلتر نفسه، بل في غياب سياسة واضحة. اسأل: هل لهذه المجموعة منتجات كافية؟ هل يبحث عنها الناس بصياغة مستقلة؟ هل يمكن كتابة عنوان ومحتوى ووصف فريد لها؟ وهل ستبقى الصفحة مفيدة عندما يتغير المخزون؟ الإجابة تحدد ما إذا كانت المجموعة تجربة تنقل أم صفحة هبوط."
    ]},
    { heading: "صنّف الفلاتر قبل لمس robots.txt", paragraphs: [
      "افصل بين الفلاتر التي تغيّر تجربة العرض فقط، والفلاتر التي تمثل فئة أو حالة استخدام لها معنى تجاري، والفلاتر المركبة التي لا تضيف معنى جديدًا. لا تبدأ بمنع الزحف قبل فهم ما تريد أن يكتشفه محرك البحث؛ فقد تمنع صفحات مهمة أو تبقي الروابط الداخلية بلا مسار واضح.",
      "استخدم بيانات البحث والمبيعات وسلوك المستخدم لتحديد الأولويات، مع مراجعة يدوية للفئات الحساسة. لا تجعل حجم البحث وحده معيارًا؛ الصفحة التي تجلب زيارات كثيرة لكنها لا تملك منتجات أو خدمة مستقرة قد تضر الثقة أكثر مما تنفع الظهور."
    ]},
    { heading: "صمّم بنية روابط قابلة للفهم", paragraphs: [
      "الفئات الأساسية يجب أن تكون قابلة للوصول من التنقل العادي، والصفحات المهمة يجب ألا تعتمد على حدث JavaScript أو جلسة مستخدم حتى تُكتشف. عندما توجد صفحة فئة مخصصة لفلتر مفيد، اربط إليها من الفئة أو دليل الشراء بنص واضح، ولا تنتظر أن يستنتج محرك البحث أهميتها من ملايين التركيبات.",
      "حافظ على نمط URL متسق، وتجنب معلمات بلا نهاية أو أسماء غير مفهومة. الاتساق يسهل التحليل والتقارير وإدارة التحويلات، لكنه لا يجعل كل URL صالحًا للفهرسة تلقائيًا. راجع canonical والروابط الداخلية وحالات pagination معًا؛ معالجة عنصر واحد لا تحل مسارًا متناقضًا بالكامل."
    ]},
    { heading: "استخدم إشارات الفهرسة بوعي", paragraphs: [
      "robots.txt مناسب للتحكم في طلبات الزحف على مسارات لا تريد استكشافها، لكنه ليس بديلًا عن قرار الفهرسة لكل صفحة ولا طريقة لإخفاء صفحة مهمة عن محرك البحث. إذا حجبت عنوانًا، قد لا يستطيع محرك البحث قراءة إشاراته أو اكتشاف الروابط الموجودة فيه.",
      "canonical يساعد عندما توجد نسخ متقاربة وتوجد صفحة مفضلة واضحة، لكنه ليس تصريحًا يضمن تجاهل كل النسخ. اجعل الصفحة الأساسية مفيدة بذاتها، واربط إليها داخليًا، وتأكد من ألا تشير canonical إلى صفحة مختلفة تمامًا في النية. اختبر الحالات الفعلية في Search Console وأداة الزحف."
    ]},
    { heading: "لا تفتح صفحة فهرسة بلا محتوى كافٍ", paragraphs: [
      "إذا قررت جعل فلتر معين صفحة قابلة للفهرسة، عامله كصفحة مقصودة حقيقية: عنوان يصف المجموعة، مقدمة قصيرة، منتجات متاحة، روابط للفئة الأصلية، وتجربة لا تنهار عندما ينخفض المخزون. لا تنشئ آلاف الصفحات ثم تملأها بنص متشابه فقط لتغطية كلمات إضافية.",
      "راقب الصفحات قليلة المنتجات والصفحات التي تتغير باستمرار. قد يكون الحل دمجها في فئة أوسع أو إبقاؤها كفلتر داخلي، لا كتابة محتوى أكثر. جودة الصفحة مرتبطة بقدرتها على خدمة الزائر في لحظة البحث، لا بعدد الحقول الموجودة في القالب."
    ]},
    { heading: "قِس الزحف والاكتشاف والنتيجة التجارية", paragraphs: [
      "استخدم سجلات الزحف أو أدوات التدقيق لمعرفة نسبة الوقت الذي يذهب إلى عناوين الفلاتر، ثم قارِن ذلك بالصفحات المهمة التي تريد اكتشافها. راقب أيضًا عدد العناوين الموجودة في sitemap والروابط الداخلية، وأخطاء التكرار، والصفحات التي ظهرت دون زيارات مفيدة.",
      "بعد التعديل، لا تحكم من يوم واحد. قارن الفهرسة والظهور والزيارات إلى الفئات والمنتجات خلال فترة مناسبة، ثم انظر إلى الإضافة للسلة والمبيعات أو الطلبات. الهدف ليس منع كل عنوان، بل توجيه الاكتشاف نحو الصفحات التي تستحق أن تمثل المتجر."
    ]}
  ],
  faq: [
    { q: "هل يجب منع كل روابط الفلاتر؟", a: "لا. بعض الفلاتر مفيد كتجربة تنقل أو كصفحة مقصودة، والقرار يعتمد على القيمة البحثية والتجارية واستقرار المنتجات." },
    { q: "هل canonical وحده يحل مشكلة الفلاتر؟", a: "لا. يحتاج المتجر إلى سياسة متكاملة تشمل البنية والروابط وsitemap وإشارات الفهرسة وقياس الزحف." },
    { q: "متى يصبح الفلتر صفحة SEO مستقلة؟", a: "عندما يمثل نية واضحة، وله عرض منتجات مستقر، ويمكن جعله مفيدًا وفريدًا للمستخدم وليس مجرد تركيبة تقنية." }
  ]
};

const facetsEn: Article = {
  title: "E-commerce Faceted Navigation SEO: Control Crawl Without Hiding Useful Pages",
  directAnswer: "Not every product filter should become an indexable search page. First identify filters that represent a real, stable demand and can support a useful landing page. Then give those pages clear architecture and links, while keeping low-value combinations out of the intended indexation path.",
  serviceHref: "/services/technical-seo-audits",
  serviceLabel: "Request a technical audit for your store",
  sections: [
    { heading: "Why filters create SEO complexity", paragraphs: [
      "A store can generate a new URL for every color, size, sort order, and filter combination. Some URLs are useful during a shopping session but do not deserve to be independent search pages. If every combination is discoverable and indexable, the URL set can grow rapidly and similar pages can compete for the same signals.",
      "The problem is not the filter itself; it is the absence of a policy. Ask whether the combination has stable products, independent demand, a clear title and description, and a useful experience when stock changes. Those answers tell you whether the URL is a navigation state or a landing page."
    ]},
    { heading: "Classify filters before changing robots.txt", paragraphs: [
      "Separate filters that only change the view from filters that represent a meaningful category or use case, and from combinations that add no new meaning. Do not start by blocking crawling before deciding what search engines should discover. A blanket rule can hide useful pages and leave important destinations without a clear path.",
      "Use search, sales, and user-behaviour data to set priorities, followed by manual review of important categories. Search volume alone is not enough. A page that attracts visits but has little inventory or an unstable offer can damage trust rather than improve visibility."
    ]},
    { heading: "Build a link architecture search engines can understand", paragraphs: [
      "Core categories should be reachable through ordinary navigation, and important pages should not depend on a user session or a JavaScript event for discovery. When a valuable filtered collection has its own landing page, link to it from the category or a buying guide with descriptive anchor text.",
      "Keep URL patterns consistent and avoid endless opaque parameters. Consistency supports analysis, reporting, and redirects, but it does not make every URL indexable. Review canonicals, internal links, and pagination together because fixing one signal rarely resolves a contradictory system."
    ]},
    { heading: "Use indexation signals deliberately", paragraphs: [
      "robots.txt can manage crawling of paths you do not want explored, but it is not a complete indexation strategy and should not be used to hide an important page. When a URL is blocked, a search engine may not be able to read its signals or discover links on it.",
      "A canonical can consolidate similar versions when there is a clear preferred page, but it is not a guarantee that every alternate will be ignored. Make the preferred page useful, link to it internally, and avoid pointing a canonical to a destination with a different intent. Test real cases with crawling tools and Search Console."
    ]},
    { heading: "Do not open thin indexable pages", paragraphs: [
      "If a filter deserves indexation, treat it as a real landing page: a descriptive title, a short introduction, available products, a path back to the parent category, and an experience that remains useful as inventory changes. Do not create thousands of pages and fill them with near-identical text to cover more phrases.",
      "Watch pages with very few products and pages whose inventory changes constantly. The right answer may be consolidating them into a wider category or keeping them as an internal filter. Quality depends on whether the page helps the shopper at the moment of search, not on how many template fields it contains."
    ]},
    { heading: "Measure crawling, discovery, and commercial value", paragraphs: [
      "Use crawl data or auditing tools to see how much discovery is spent on filter URLs, then compare it with the categories and products you want found. Monitor sitemap URL counts, internal links, duplication signals, and pages that appear in search without useful visits.",
      "Do not judge the change after one day. Compare indexation, impressions, traffic to categories and products, and commercial actions over an appropriate period. The goal is not to eliminate every filter URL; it is to direct discovery toward the pages that deserve to represent the store."
    ]}
  ],
  faq: [
    { q: "Should every filter URL be blocked?", a: "No. Some filters are useful navigation states or valuable landing pages. The decision depends on demand, commercial value, inventory stability, and page quality." },
    { q: "Can a canonical solve faceted navigation by itself?", a: "No. Stores need a coordinated approach across architecture, links, sitemaps, indexation signals, and crawl measurement." },
    { q: "When should a filter become an SEO landing page?", a: "When it represents clear demand, has a stable product set, and can provide a genuinely useful experience rather than a technical combination." }
  ]
};

export const scaleArticleRegistry: Record<string, ComponentType> = {
  "product-page-seo-ar": () => <ArticleView article={productPageAr} lang="ar" />,
  "product-page-seo-en": () => <ArticleView article={productPageEn} lang="en" />,
  "faceted-navigation-seo-ar": () => <ArticleView article={facetsAr} lang="ar" />,
  "faceted-navigation-seo-en": () => <ArticleView article={facetsEn} lang="en" />,
};

export const scaleArticlePosts = [
  { slug: "product-page-seo-ar", title: productPageAr.title, description: "منهج عملي لتحسين صفحات المنتجات: نية الباحث، الوصف، الصور، الروابط الداخلية، Product structured data، وقياس التحويل.", date: "2026-08-27", readTime: "12 دقيقة", lang: "ar" as const, altSlug: "product-page-seo-en", faq: productPageAr.faq },
  { slug: "product-page-seo-en", title: productPageEn.title, description: "A practical framework for product-page SEO covering intent, copy, images, internal links, Product structured data, and conversion measurement.", date: "2026-08-27", readTime: "12 min read", lang: "en" as const, altSlug: "product-page-seo-ar", faq: productPageEn.faq },
  { slug: "faceted-navigation-seo-ar", title: facetsAr.title, description: "كيف تدير فلاتر المتجر والتنقل الموجّه وتوجه الزحف نحو الصفحات المفيدة دون إنشاء صفحات رقيقة أو مكررة.", date: "2026-08-27", readTime: "12 دقيقة", lang: "ar" as const, altSlug: "faceted-navigation-seo-en", faq: facetsAr.faq },
  { slug: "faceted-navigation-seo-en", title: facetsEn.title, description: "How to manage faceted navigation and guide crawling toward useful store pages without creating thin or duplicate indexable URLs.", date: "2026-08-27", readTime: "12 min read", lang: "en" as const, altSlug: "faceted-navigation-seo-ar", faq: facetsEn.faq },
];
