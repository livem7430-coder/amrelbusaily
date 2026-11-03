import type { BlogPost } from "@/lib/blog-posts";
import type { ComponentType } from "react";

type Section = { heading: string; paragraphs: string[] };
type Article = { title: string; directAnswer: string; sections: Section[]; faq: { q: string; a: string }[]; serviceHref: string; serviceLabel: string; reviewedAr?: string; reviewedEn?: string };

const merchantSources = [
 ["Salla: setup and verification", "https://help.salla.sa/article/%D8%B1%D8%A8%D8%B7-%D8%AA%D8%AC%D8%A7%D8%B1%D8%AA%D9%83-%D9%85%D8%B9-%D9%85%D8%B1%D9%83%D8%B2-%D8%AC%D9%88%D8%AC%D9%84-%D9%84%D9%84%D8%A8%D9%8A%D8%B9-%D8%A8%D8%A7%D9%84%D8%AA%D8%AC%D8%B2%D8%A6%D8%A9-google-merchant-center/v25sqpe3tj6f99g3y5fl6p8b"],
 ["Salla: product feeds", "https://help.salla.sa/article/1272723726"],
 ["Zid: Merchant Center integration", "https://helpdesk.zid.sa/en/apps/google-merchant-center"],
 ["Google: product data specification", "https://support.google.com/merchants/answer/7052112?hl=en"],
 ["Google: availability mismatches", "https://support.google.com/merchants/answer/9773127?hl=en"],
];
const aiSources = [
 ["Google: generative AI optimization guide", "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide"],
 ["Google: Search generative AI control", "https://support.google.com/webmasters/answer/16908024?hl=en"],
 ["Google: generative AI performance report", "https://support.google.com/webmasters/answer/16984139?hl=en"],
 ["Zid: robots.txt editor and plan limits", "https://help.zid.sa/robots-txt/"],
 ["Salla: SEO and robots.txt settings", "http://help.salla.sa/article/118146924"],
 ["Google: updating hosted robots.txt", "https://developers.google.com/crawling/docs/robots-txt/submit-updated-robots-txt"],
 ["OpenAI: crawlers", "https://developers.openai.com/api/docs/bots"],
 ["Google: future shared AI training control", "https://developers.google.com/search/blog/2026/10/ai-training-control"],
];

const schemaSources = [
 ["Google: product structured data", "https://developers.google.com/search/docs/appearance/structured-data/product"],
 ["Google: intro to structured data", "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data"],
 ["Google: breadcrumb structured data", "https://developers.google.com/search/docs/appearance/structured-data/breadcrumb"],
 ["Salla: schema markup via Google Tag Manager", "https://help.salla.sa/article/576168598"],
 ["Zid: store SEO settings", "https://helpdesk.zid.sa/en/online-store/seo"],
 ["Google: Rich Results Test", "https://search.google.com/test/rich-results"],
 ["Schema.org: validator", "https://validator.schema.org/"],
 ["Google: Search documentation updates", "https://developers.google.com/search/updates"],
];

const speedSources = [
 ["web.dev: Core Web Vitals metrics and thresholds", "https://web.dev/articles/vitals"],
 ["Google: page experience in Search", "https://developers.google.com/search/docs/appearance/page-experience"],
 ["Google: PageSpeed Insights", "https://pagespeed.web.dev/"],
 ["Zid: store themes and supported-theme speed improvements", "https://helpdesk.zid.sa/en/online-store/themes"],
 ["Salla: themes journal", "https://help.salla.sa/article/596067432"],
];

const domainSources = [
 ["Zid: connect your own domain", "https://helpdesk.zid.sa/ar/store-settings/domains"],
 ["Salla: link an external domain", "https://help.salla.sa/article/%D8%B1%D8%A8%D8%B7-%D8%AF%D9%88%D9%85%D9%8A%D9%86-%D9%85%D9%86-%D8%AE%D8%A7%D8%B1%D8%AC-%D8%B3%D9%84%D8%A9/hqykbuouvfa47ecry8ikrsh0"],
 ["Salla: manage your store domain", "https://help.salla.sa/article/%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9-%D9%86%D8%B7%D8%A7%D9%82-%D8%AF%D9%88%D9%85%D9%8A%D9%86-%D9%85%D8%AA%D8%AC%D8%B1%D9%83-%D8%B9%D9%84%D9%89-%D8%B3%D9%84%D8%A9/bdk6c6zou6v5bm1xj93r8y4p"],
 ["Google: Search Console", "https://search.google.com/search-console"],
];

const sourcesFor = (article: Article) =>
  article === merchantCenterAr || article === merchantCenterEn
    ? merchantSources
    : article === structuredDataAr || article === structuredDataEn
      ? schemaSources
      : article === storeSpeedAr || article === storeSpeedEn
        ? speedSources
        : article === customDomainAr || article === customDomainEn
          ? domainSources
          : aiSources;

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
      <h2>{lang === "ar" ? "المصادر الرسمية" : "Official sources"}</h2>
      <p>{lang === "ar" ? (article.reviewedAr ?? "راجعت المصادر في 31 أكتوبر 2026. خطوات الفحص المقترحة ليست نتيجة عميل أو فحصًا لحسابك.") : (article.reviewedEn ?? "Sources reviewed October 31, 2026. Suggested checks are not a client result or an audit of your account.")}</p>
      <ul>{sourcesFor(article).map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}</ul>
      <p><a href={article.serviceHref}>{article.serviceLabel}</a>{" · "}<a href={lang === "ar" ? "/ar/packages" : "/packages"}>{lang === "ar" ? "الباقات" : "Packages"}</a></p>
    </>
  );
}

const merchantCenterAr: Article = {
  title: "ربط متجر سلة أو زد بـ Google Merchant Center: الدليل العملي خطوة بخطوة",
  directAnswer: "توفر سلة وزد طريقًا لإنشاء خلاصة منتجات (Feed) تربط متجرك بـ Google Merchant Center دون برمجة؛ في زد عبر تطبيق مجاني في سوق التطبيقات يولد رابط خلاصة، وفي سلة عبر ربط الحساب وإدارة الخلاصات. بعد الربط واجتياز فحص البيانات تصبح منتجاتك مؤهلة للظهور في النتائج المجانية وتبويب تسوق، مع تحديث السعر والتوفر تلقائيًا من الخلاصة.",
  sections: [
    { heading: "ماذا يقدم Merchant Center لمتجرك؟", paragraphs: [
      "Merchant Center هو المكان الذي يقرأ منه Google بيانات منتجاتك ليعرضها في نتائج البحث وتبويب تسوق والقوائم المجانية، ويربطها بحملات إعلانات التسوق إن شغلتها لاحقًا.",
      "الظهور في القوائم المجانية لا يكلف شيئًا، لكنه ليس ضمانًا لترتيب أو مبيعات؛ هو أهلية عرض تعتمد على اكتمال بياناتك وجودتها.",
      "الخلاصة ملف محدث يحمل منتجاتك وسماتها مثل العنوان والسعر والتوفر والصورة والرابط، ويتحدث من متجرك تلقائيًا بدل إدخال كل منتج يدويًا.",
    ]},
    { heading: "خطوات الربط في زد", paragraphs: [
      "من لوحة تحكم زد افتح التطبيقات ثم سوق التطبيقات وابحث عن Google Merchant Center؛ التطبيق مجاني ولا يحتاج إدخال أي كود.",
      "من صفحة التطبيق اطلب رابط الخلاصة، واختر Google كمنصة، ثم اللغة والعملة اللتين تبيع بهما، ثم أنشئ الرابط وانسخه.",
      "أضف الرابط في حسابك على Merchant Center كمصدر بيانات؛ تحافظ زد على تحديث الخلاصة فتبقى الأسعار وحالة التوفر متطابقة دون رفع يدوي.",
      "قبل أول جلب، راجع أن كل منتج له صورة وبياناته المطلوبة مكتملة؛ قد تُرفض المنتجات الناقصة؛ راجع كل مشكلة على مستوى المنتج أو الحساب بدل افتراض أن رفض عنصر يعني رفض الكتالوج كله.",
    ]},
    { heading: "خطوات الربط في سلة", paragraphs: [
      "بحسب دليل سلة، يحتاج الربط دومينًا خاصًا بالمتجر. من متجر تطبيقات سلة ثبّت تطبيق Google Merchant Center، ثم افتح إعداداته من خيارات التطبيق في التطبيقات المثبتة وانسخ رابط ملف المنتجات. لا تنسخ رابط أي متجر آخر.",
      "في Merchant Center أدخل بيانات النشاط، وأكمل التحقق من ملكية الموقع والمطالبة به. اضبط بلدان الشحن وتكاليفه حسب ما تقدمه فعلًا، ثم أضف مصدر منتجات من رابط ملف والصق رابط سلة. أسماء القوائم قد تتغير؛ دليل سلة المرتبط أدناه هو مرجع خطوات المنصة، ومساعدة Google هي مرجع حالة الحساب.",
      "حدد سمات كل منتج بدقة: بلد البيع واللغة والتوفر والسعر والوجهات التي تريد العرض فيها، فهذه السمات هي ما يستخدمه Google لتجميع منتجاتك وعرضها.",
    ]},
    { heading: "السمات التي يتوقف عليها قبول منتجاتك", paragraphs: [
      "وفق مواصفة بيانات المنتجات من Google، غياب أساسيات مثل معرف المنتج والعنوان والرابط والصورة والسعر وحالة التوفر يؤدي إلى رفض المنتج.",
      "اكتب عناوين تصف المنتج كما يبحث عنه الناس: النوع والعلامة والمقاس أو اللون، دون حشو كلمات أو عبارات ترويجية داخل العنوان.",
      "استخدم صورًا واضحة تظهر المنتج نفسه بخلفية نظيفة؛ الصورة شرط قبول وعامل نقر مهم في نتائج التسوق.",
    ]},
    { heading: "أخطاء شائعة بعد الربط وكيف تتجنبها", paragraphs: [
      "عدم تطابق السعر أو التوفر بين الخلاصة وصفحة المنتج من أشهر أسباب الرفض؛ Google يقارن الخلاصة بصفحة الهبوط ويعامل التعارض كبيانات غير دقيقة.",
      "تعديل السعر في المتجر مع خلاصة لا تتحدث تلقائيًا يسبب الرفض؛ تأكد أن جدولة التحديث تعمل بعد كل تغيير كبير في الأسعار أو المخزون.",
      "إنشاء خلاصات متعددة لنفس المنتجات بقواعد متعارضة يصعب التشخيص؛ ابدأ بخلاصة أساسية واحدة سليمة ثم وسعها تدريجيًا عند الحاجة.",
    ]},
    { heading: "ماذا بعد اعتماد المنتجات؟", paragraphs: [
      "راجع تقارير Merchant Center دوريًا: المنتجات المرفوضة، تحذيرات البيانات، وأداء القوائم المجانية.",
      "حسن بيانات المنتج نفسها من عناوين وصور ووصف، فهي ما يظهر في النتائج فعلًا، وليس مجرد وجود الخلاصة.",
      "ورقة تسليم الربط: رابط المتجر، مالك الحساب، بلد البيع، اللغة والعملة، رابط مصدر البيانات، تاريخ آخر جلب، عدد العناصر المعالجة، وعينة من معرفات المنتجات وحالتها. لا تشارك رمز التحقق أو كلمة المرور داخل الورقة؛ أعط المتخصص صلاحية مناسبة فقط.",
      "اختبار توضيحي قبل التسليم: اختر منتجًا بسيطًا وآخر له لون أو مقاس مختلف. قارن المعرف والرابط والسعر والعملة والتوفر في المصدر وفي الصفحة. بعد تعديل مخزون واحد، انتظر الجلب التالي وتحقق من القيمة المرسلة؛ لا تعتبر ظهور رابط المصدر وحده نجاحًا للمزامنة.",
      "إذا احتجت مراجعة شاملة لبيانات متجرك وظهوره في Google، فهذا جزء من خدمة تحسين متاجر سلة وزد التي نقدمها.",
    ]},
  ],
  faq: [
    { q: "هل الربط بـ Merchant Center مدفوع؟", a: "تطبيق الربط في سوق تطبيقات زد مجاني، وإنشاء حساب Merchant Center مجاني، والقوائم المجانية لا تكلف شيئًا؛ التكلفة تبدأ فقط إذا شغلت إعلانات تسوق مدفوعة لاحقًا." },
    { q: "هل تظهر المنتجات فور الربط؟", a: "لا؛ يحتاج Google إلى جلب الخلاصة وفحص المنتجات، وقد تُعتمد منتجات وتُرفض أخرى بحسب اكتمال بياناتها. الاعتماد يمنح أهلية الظهور ولا يضمنه." },
    { q: "هل يغني Merchant Center عن تحسين المتجر لمحركات البحث؟", a: "لا؛ هو قناة عرض إضافية لبيانات المنتجات، بينما يبقى تحسين الصفحات والمحتوى والبنية أساس الظهور في النتائج غير المدفوعة." },
  ],
  serviceHref: "/ar/services/ecommerce-store-services",
  serviceLabel: "تعرف على خدمة تحسين متاجر سلة وزد",
};

const merchantCenterEn: Article = {
  title: "Connect a Salla or Zid Store to Google Merchant Center: A Practical Walkthrough",
  directAnswer: "Both Salla and Zid let you generate a product feed that connects your store to Google Merchant Center without code: Zid through a free app in its App Market that creates a feed link, and Salla through account linking and feed management. Once connected and approved, your products become eligible for free listings and the Shopping tab, with price and availability kept in sync from the feed.",
  sections: [
    { heading: "What Merchant Center does for your store", paragraphs: [
      "Merchant Center is where Google reads your product data to show it in Search, the Shopping tab and free listings, and to connect it to Shopping ad campaigns if you run them later.",
      "Free listings cost nothing, but they are not a ranking or sales guarantee; they are an eligibility layer that depends on complete, accurate data.",
      "A feed is a regularly updated file carrying your products and their attributes - title, price, availability, image, link - so Google stays in sync without manual product entry.",
    ]},
    { heading: "Connecting in Zid", paragraphs: [
      "In the Zid dashboard open Apps, then App Market, and search for Google Merchant Center; the app is free and needs no code.",
      "On the app page request your feed link, choose Google as the platform, pick the language and currency you sell in, then generate and copy the link.",
      "Add that link in Merchant Center as a data source. Zid keeps the feed updated, so prices and stock status stay matched without manual uploads.",
      "Before the first fetch, make sure every product has an image and its required details; incomplete items may be disapproved. An item issue does not automatically mean the whole catalog is rejected.",
    ]},
    { heading: "Connecting in Salla", paragraphs: [
      "Salla documents a custom-domain requirement. Install Google Merchant Center from the Salla App Store, open its settings from the installed app options and copy your own product-file link.",
      "In Merchant Center complete business details, website verification and claiming, then configure the actual shipping countries and costs. Add a product data source from a file URL and paste the Salla link. Labels can change: use the linked Salla setup guide for its UI and current Google help for account requirements.",
      "Set each product's attributes accurately - sale country, language, availability, price and destinations - because Google uses these attributes to group and show your products.",
    ]},
    { heading: "The attributes that decide approval", paragraphs: [
      "Per Google's product data specification, missing basics such as product ID, title, link, image, price or availability leads to item rejection.",
      "Write titles the way people search: product type, brand, size or color, without keyword stuffing or promotional text inside the title.",
      "Use clear images that show the product itself against a clean background; the image is both an approval requirement and a click factor in Shopping results.",
    ]},
    { heading: "Common post-connection mistakes", paragraphs: [
      "Price or availability mismatches between the feed and the landing page are among the most common rejection reasons; Google compares the feed to the page and treats conflicts as inaccurate data.",
      "Editing a price in the store while the feed updates slowly causes rejections; confirm the automatic fetch schedule works after every major price or stock change.",
      "Creating multiple feeds for the same products with conflicting rules makes diagnosis hard; start with one healthy primary feed and extend gradually.",
    ]},
    { heading: "After your products are approved", paragraphs: [
      "Review Merchant Center reports regularly: disapproved items, data warnings and free listings performance.",
      "Improve the product data itself - titles, images, descriptions - because that is what actually appears in results, not the mere existence of a feed.",
      "Keep a handover record: store URL, account owner, selling country, language, currency, data-source URL, last fetch date, processed item count and sample product IDs with their status. Do not put passwords or verification codes in the record; use appropriate access permissions.",
      "Illustrative acceptance test: pick a simple product and a color or size variant. Compare ID, URL, price, currency and availability between source and landing page. Change one stock value and inspect the next fetch before calling synchronization complete. A visible feed link alone is not evidence of a successful sync.",
      "If you want a full review of your store data and Google visibility, that is part of our Salla and Zid store SEO service.",
    ]},
  ],
  faq: [
    { q: "Is the Merchant Center connection paid?", a: "The connection app in Zid's App Market is free, creating a Merchant Center account is free, and free listings cost nothing; spend only starts if you later run paid Shopping ads." },
    { q: "Do products appear right after connecting?", a: "No. Google needs to fetch the feed and review items, and some products may be approved while others are rejected based on data completeness. Approval grants eligibility, not guaranteed visibility." },
    { q: "Does Merchant Center replace store SEO?", a: "No. It is an additional display channel for product data, while improving pages, content and site structure remains the foundation of unpaid search visibility." },
  ],
  serviceHref: "/services/ecommerce-store-services",
  serviceLabel: "See the Salla and Zid store SEO service",
};

const aiVisibilityAr: Article = {
  title: "ظهور متجرك في إجابات الذكاء الاصطناعي: AI Overviews وChatGPT وGemini",
  directAnswer: "لا يوجد ملف أو ترميز يضمن الظهور في إجابات الذكاء الاصطناعي. وفق توثيق Google، ابدأ بصفحة مفهرسة ومؤهلة للمقتطفات ومحتوى مفيد، وراجع اختيار تضمين الموقع في ميزات البحث التوليدية داخل Search Console حسب دليل Google الأحدث. وفي بحث ChatGPT يعتمد ظهور المواقع على زاحف OAI-SearchBot. عملك الحقيقي: جودة المحتوى والبيانات وإتاحة الزواحف الصحيحة، دون تصديق وعود بظهور مضمون.",
  sections: [
    { heading: "كيف تختار أدوات الذكاء الاصطناعي ما تعرضه؟", paragraphs: [
      "في بحث Google تعرض AI Overviews وAI Mode روابط داعمة من صفحات مفهرسة ومؤهلة للمقتطفات. يضيف دليل التحسين الأحدث ضرورة تضمين الموقع في ميزات البحث التوليدية من Search Console. لا يحتاج ذلك إلى ترميز خاص، ولا نعرف حالة حساب متجرك دون فحصه بصلاحية مناسبة.",
      "في ChatGPT يزحف OAI-SearchBot لتظهر المواقع في نتائج البحث؛ حظره في robots.txt يعني عدم ظهور موقعك كمصدر في إجابات البحث، مع احتمال بقائه رابطًا تنقليًا في حالات محدودة.",
      "القاسم المشترك بين الأدوات: محتوى نصي واضح يجيب أسئلة حقيقية، وبيانات نشاطك محدثة في كل مكان تقرأ منه هذه الأنظمة.",
    ]},
    { heading: "ما الذي يؤثر فعلًا في فرص ظهورك؟", paragraphs: [
      "اجعل المحتوى المهم نصًا قابلًا للقراءة لا صورًا، واربط صفحاتك داخليًا حتى يصلها الزاحف، وحافظ على تجربة صفحة سريعة ومستقرة.",
      "طابق البيانات المنظمة مع المحتوى المرئي، وحدث بيانات Merchant Center وملف نشاطك التجاري؛ تذكر Google تحديثهما ضمن أساسيات الظهور في ميزات الذكاء الاصطناعي.",
      "للمتاجر تحديدًا: جودة بيانات المنتج من عناوين وأسعار وتوفر وتقييمات حقيقية هي ما تستند إليه الإجابات المتعلقة بالمنتجات والأسعار.",
    ]},
    { heading: "الزواحف والتحكم: ما الذي تسمح به وماذا تمنع؟", paragraphs: [
      "يفصل OpenAI بين الزواحف: OAI-SearchBot للبحث وGPTBot للتدريب، ويمكنك السماح بأحدهما وحظر الآخر، ويستغرق تطبيق تغيير robots.txt لديهم نحو 24 ساعة.",
      "لدى Google يكون التحكم في ميزات البحث بأدوات المقتطفات مثل nosnippet وdata-nosnippet وmax-snippet وnoindex، بينما يحد Google-Extended من استخدام المحتوى في التدريب والتأسيس في أنظمة أخرى دون التأثير على ظهور البحث.",
      "في أكتوبر 2026 أعلنت Google نيتها دعم إشارة تفضيل تدريب موحدة داخل robots.txt بالتعاون مع مزودي ذكاء اصطناعي آخرين باستهداف عام 2027؛ هذا مخطط مستقبلي لا أداة تعمل اليوم، فلا تبن عليه قرارات حالية.",
      "ملاحظة مهمة لتجار سلة وزد: صلاحيات تعديل robots.txt تختلف بحسب المنصة والإعدادات المتاحة؛ اسأل الدعم وافحص الملف الناتج بدل افتراض أنك تستطيع تعديل كل قاعدة بنفسك.",
    ]},
    { heading: "Gemini Apps ليست AI Overviews", paragraphs: [
      "ظهورك في Gemini Apps يختلف عن الظهور في ميزات بحث Google. إعلان Google في 30 أكتوبر يوضح أن المواقع التي تسمح صراحة بـ Google-Extended تكون مؤهلة للظهور بروابط عبر التأسيس في Gemini Apps؛ الأهلية لا تعني أن كل إجابة ستختار الموقع.",
      "لا تغيّر سياسة التدريب لمجرد الحصول على زيارة: Google-Extended يغطي استخدامات تدريب وتأسيس خارج البحث، بينما تضمين ميزات Search التوليدية له تحكم مستقل في Search Console. حدد الاستخدام الذي تريد السماح به قبل أي تعديل؛ هذه المقالة لا تغير إعدادات حسابك.",
    ]},
    { heading: "خرافات منتشرة عن الظهور في أدوات AI", paragraphs: [
      "لا يحتاج ظهورك في ميزات Google Search إلى ملفات مثل llms.txt أو ترميز schema خاص؛ هذا حكم يخص بحث Google، وليس وعدًا بكيفية عمل كل أداة AI.",
      "لا يوجد تسجيل رسمي لمتجرك داخل ChatGPT يضمن الاستشهاد، ولا باقة مدفوعة تشتري ظهورًا في الإجابات.",
      "البيانات المنظمة تساعد الأنظمة على الفهم وعلى الأهلية لميزات معينة، لكنها لا تضمن أن تستشهد بك أي أداة.",
    ]},
    { heading: "خطة عملية لهذا الشهر", paragraphs: [
      "اكتب محتوى يجيب أسئلة عملائك الفعلية بإجابة مباشرة في أول السطر ثم تفصيل بعدها.",
      "نظف بيانات منتجاتك: عناوين وصور وتوفر وسعر متطابقة بين المتجر والخلاصة.",
      "اجمع تقييمات حقيقية بإجراءات نظامية؛ أظهر مصدر التقييم وسياسة جمعه دون شراء آراء أو اختلاق تجربة.",
      "راجع robots.txt وإعدادات منصتك للتأكد من عدم حظر زواحف البحث عن غير قصد.",
    ]},
    { heading: "أين تفحص إعدادات سلة وزد؟", paragraphs: [
      "توثق سلة محرر Robots.txt داخل صفحة تحسين محركات البحث ثم الإعدادات العامة. وتوثق زد المسار: المتجر الإلكتروني، تحسين محركات البحث، ملف Robot.txt. يذكر دليل زد، المحدث في 25 أغسطس 2026، أن التخصيص متاح لباقة النمو والاحترافية. هذه معلومة عن واجهة المنصة، وليست تأكيدًا على باقة متجرك أو صلاحيات حسابك.",
      "قبل أي تعديل احتفظ بنسخة من الملف الحالي، وافحص مجموعة الزاحف المقصود والمسار الحقيقي للمنتج. السماح في robots.txt لا يثبت أن جدار الحماية يسمح بالطلب، ولا أن الصفحة مفهرسة. كذلك منع الزحف ليس طريقة مضمونة لإزالة رابط من الفهرس؛ لا تخلط بينه وبين noindex. لا تنشر قاعدة عامة على المتجر كله لعلاج صفحة واحدة.",
      "إذا لم تجد المحرر، أرسل للدعم اسم الزاحف ورابط صفحة عامة ونص المشكلة، دون كلمة مرور أو بيانات عميل. اطلب توضيح ما يمكن التحكم فيه في باقتك وما إذا كان الحظر في المنصة أو طبقة الحماية. لا تطلب السماح بكل الروبوتات بلا تمييز؛ قرار البحث والتدريب منفصل.",
    ]},
    { heading: "ورقة فحص صفحة منتج قبل طلب خدمة AI SEO", paragraphs: [
      "هذا نموذج عمل مقترح، لا نتيجة عميل. اختر منتجًا متاحًا وتصنيفًا ودليل شراء يخدمان أسئلة مختلفة. لكل صفحة سجل الرابط النهائي، وحالة HTTP، والعنوان، واللغة، والرابط الأساسي canonical، وهل معلومات المقاس والسعر والتوفر ظاهرة كنص. ضع اسم المسؤول والدليل وتاريخ الفحص بجوار كل ملاحظة، ولا تكتف بعبارة الموقع جاهز للذكاء الاصطناعي.",
      "مثال توضيحي: سؤال هل هذا الحذاء مناسب للمشي اليومي؟ يحتاج مواصفات واستخدامًا وحدودًا ومقاسات، لا فقرة تقول أفضل حذاء عشر مرات. اكتب ما تعرفه من بيانات المنتج، وما يحتاج الرجوع إلى الشركة المصنعة. إن لم تجرّب المنتج فلا تدّع تجربة شخصية، ولا تنقل تقييمًا غير موثق لتبدو الصفحة خبيرة.",
      "رتب الإصلاحات حسب العائق: صفحة لا تفتح أولًا، ثم منع الزحف أو الفهرسة، ثم نقص بيانات القرار، ثم الروابط الداخلية والتحديث. بعد الإصلاح أعد اختبار الصفحة نفسها. إنشاء عشر مقالات لا يصلح صفحة منتج محجوبة، وزيادة عدد الكلمات لا تعوض معلومة مقاس أو شحن ناقصة.",
    ]},
    { heading: "سجل استشهاد يمكن مراجعته بدل لقطة انتقائية", paragraphs: [
      "اكتب مجموعة صغيرة من أسئلة عملائك قبل الاختبار، منها سؤال مقارنة وسؤال استخدام وسؤال شراء، مع البلد واللغة. سجل السؤال كما كتبته، والأداة ووضع البحث والتاريخ، وهل ظهر رابطك فعلًا وما الرابط النهائي. ذكر اسم المتجر بلا رابط ليس زيارة ولا استشهادًا قابلاً للنقر، وظهورك عند البحث باسمك لا يساوي ظهورك لسؤال عام.",
      "إذا لم يظهر الموقع، سجل ذلك أيضًا. الإجابات قد تختلف بين الجلسات والأيام؛ لا تحول تجربة واحدة إلى نسبة ظهور عامة. عندما تتوفر صلاحية التحليلات، قارن الإحالات وصفحات الدخول والطلبات المؤهلة بالفترة السابقة، مع توثيق التغييرات الأخرى. تقرير Search Console لا يقيس كل أدوات AI، ولقطة ChatGPT لا تثبت ارتفاع المبيعات.",
    ]},
    { heading: "كيف تقيس دون أوهام؟", paragraphs: [
      "يوثق Google تقرير أداء الذكاء الاصطناعي التوليدي في Search Console لقياس مرات الظهور في AI Overviews وAI Mode حسب الصفحة والبلد والجهاز. قد لا يظهر التقرير إذا لم تتجمع مرات ظهور كافية. لا نقول إن التقرير متاح في حسابك دون فحصه، ولا نقيس Gemini Apps بهذا التقرير.",
      "اختبر أسئلة عملائك يدويًا في الأدوات كل فترة وسجل ما تراه بتاريخه، وتعامل مع أي خدمة تعدك بظهور مضمون كعلامة تحذير.",
    ]},
  ],
  faq: [
    { q: "هل أستطيع منع استخدام محتواي في التدريب مع البقاء في نتائج بحث ChatGPT؟", a: "نعم؛ اسمح لـ OAI-SearchBot واحظر GPTBot، فالتحكم مستقل بينهما. ولدى Google يبقى ظهور البحث منفصلًا عن Google-Extended الخاص بالتدريب." },
    { q: "هل يضمن اتباع هذه الخطوات ظهور متجري في الإجابات؟", a: "لا؛ لا تضمن Google ولا OpenAI عرض أي صفحة حتى مع استيفاء المتطلبات. الذي تملكه هو رفع الأهلية والجودة، لا قرار العرض." },
    { q: "هل أحتاج ملف llms.txt لأظهر في AI Overviews؟", a: "لا؛ تنص Google على عدم حاجتك لإنشاء ملفات جديدة أو ترميز خاص للظهور في ميزات الذكاء الاصطناعي." },
  ],
  serviceHref: "/ar/services/ecommerce-store-services",
  serviceLabel: "تعرف على خدمة تحسين متاجر سلة وزد",
};

const aiVisibilityEn: Article = {
  title: "Getting Your Store Into AI Answers: AI Overviews, ChatGPT and Gemini",
  directAnswer: "No file or markup can guarantee inclusion in AI answers. Start with indexed, snippet-eligible pages and useful content, then check inclusion in Search generative AI features in Search Console, as described in Google's newer optimization guide. In ChatGPT search, site visibility depends on the OAI-SearchBot crawler. The real work is content and data quality plus allowing the right crawlers - while rejecting anyone who promises guaranteed inclusion.",
  sections: [
    { heading: "How AI tools choose what to show", paragraphs: [
      "In Google Search, AI Overviews and AI Mode surface supporting links from indexed, snippet-eligible pages; Google's newer optimization guide also requires inclusion in Search generative AI features in Search Console. No special markup is needed; the setting for your property has not been checked here.",
      "In ChatGPT, OAI-SearchBot crawls sites so they can appear in ChatGPT search results; blocking it in robots.txt means your site will not be shown as a source in search answers, though it may still appear as a navigational link in limited cases.",
      "The common denominator across tools: clear textual content answering real questions, and business data that is current wherever these systems read it.",
    ]},
    { heading: "What actually affects your chances", paragraphs: [
      "Keep important content as readable text rather than images, link your pages internally so crawlers reach them, and maintain a fast, stable page experience.",
      "Match structured data to visible content, and keep Merchant Center and Business Profile information current; Google specifically lists both among its AI-feature fundamentals.",
      "For stores specifically: product data quality - titles, prices, availability and genuine reviews - is what product and price answers are built on.",
    ]},
    { heading: "Crawlers and controls: what to allow and what to block", paragraphs: [
      "OpenAI separates its crawlers: OAI-SearchBot for search and GPTBot for training. You can allow one and disallow the other, and robots.txt changes take about 24 hours to apply on their side.",
      "At Google, AI features in Search are governed by snippet controls such as nosnippet, data-nosnippet, max-snippet and noindex, while Google-Extended limits training and grounding use in some other systems without affecting Search visibility.",
      "In October 2026 Google announced plans to support a shared machine-readable AI training preference signal in robots.txt with other AI providers, targeting 2027. That is a future plan, not a working control today - do not build current decisions on it.",
      "Important for Salla and Zid merchants: crawler-rule controls vary by platform and available settings. Ask support and inspect the served robots.txt rather than assuming every rule is editable.",
    ]},
    { heading: "Gemini Apps are not AI Overviews", paragraphs: [
      "Google's October 30 announcement says sites that specifically allow Google-Extended are eligible to appear as grounding links in Gemini Apps. That is distinct from AI Overviews and AI Mode in Google Search, and eligibility does not guarantee a citation.",
      "Do not change a training policy just to seek traffic. Google-Extended covers training and grounding uses outside Search, while Search generative AI inclusion has a separate Search Console control. Decide the intended use before changing a setting; this article changes no account controls.",
    ]},
    { heading: "Common myths about AI visibility", paragraphs: [
      "Google Search does not require llms.txt or special schema for its AI features. This statement concerns Google Search, not every AI product.",
      "There is no official registration inside ChatGPT that guarantees citation, and no paid package that buys inclusion in answers.",
      "Structured data helps systems understand content and qualify for certain features, but it never guarantees that any tool will cite you.",
    ]},
    { heading: "A practical plan for this month", paragraphs: [
      "Write content that answers your customers' real questions with a direct answer in the first line and detail after it.",
      "Clean your product data: titles, images, availability and price matching between the store and the feed.",
      "Collect genuine reviews through proper processes; show the source and collection policy without buying opinions or inventing experience.",
      "Review robots.txt and your platform settings to make sure search crawlers are not blocked by accident.",
    ]},
    { heading: "Where to check Salla and Zid controls", paragraphs: [
      "Salla documents a Robots.txt editor under SEO settings and General settings. Zid documents Online Store, Search Engine Optimization, then Robot.txt. Zid's guide, updated August 25, 2026, says customization is available on Growth and Professional plans. This describes the platform UI, not the plan or permissions of your particular account.",
      "Save the current file before changing anything. Check the named crawler group against a real product path. A robots.txt allowance does not prove a firewall permits the request or that the page is indexed. Blocking crawling is not a reliable removal method; do not confuse it with noindex or apply a store-wide block to fix one page.",
      "If the editor is unavailable, send support the crawler name, a public page URL and the observed issue, without passwords or customer data. Ask which controls your plan exposes and whether a block comes from the platform or its protection layer. Do not indiscriminately allow every bot: search and training choices are separate.",
    ]},
    { heading: "A sample-page worksheet before buying AI SEO", paragraphs: [
      "This is a proposed workflow, not a client result. Select an available product, a category and a buying guide serving different questions. Record each final URL, HTTP status, title, language, canonical URL and whether size, price and stock information are readable text. Add an owner, evidence and check date rather than a vague label saying AI-ready.",
      "Illustrative question: is this shoe suitable for daily walking? A useful page needs specifications, uses, limits and sizing, not repeated claims that it is the best shoe. Use verified product facts and identify questions for the manufacturer. Do not invent first-hand testing or borrow an unverified review to simulate experience.",
      "Prioritize inaccessible pages first, then crawl or indexing blocks, missing purchase information, internal discovery and freshness. Retest the same page after a fix. Ten new articles do not repair a blocked product page, and more words do not replace missing sizing or shipping information.",
    ]},
    { heading: "Keep a citation log rather than a selective screenshot", paragraphs: [
      "Choose a small set of customer questions before testing, including comparison, use-case and purchase questions, with country and language. Log the exact question, tool, search mode, date and actual final link if shown. A brand mention without a link is not a visit or clickable citation; a branded query is not equivalent to visibility for a general question.",
      "Record absences too. Answers can vary by session and date, so one test is not a general visibility percentage. With approved analytics access, compare referrals, landing pages and qualified enquiries with the preceding period while recording other changes. Search Console does not measure every AI tool, and a ChatGPT screenshot does not establish a sales increase.",
    ]},
    { heading: "How to measure without illusions", paragraphs: [
      "Google documents a Generative AI performance report with impressions for AI Overviews and AI Mode by page, country and device. It may not appear without enough impressions. Account availability has not been verified here, and this report does not measure Gemini Apps.",
      "Manually test your customers' questions in the tools every so often and log what you see with its date, and treat any service promising guaranteed inclusion as a warning sign.",
    ]},
  ],
  faq: [
    { q: "Can I block training use while staying in ChatGPT search results?", a: "Yes. Allow OAI-SearchBot and disallow GPTBot - the controls are independent. At Google, Search visibility stays separate from Google-Extended, which covers training." },
    { q: "Does following these steps guarantee my store appears in answers?", a: "No. Neither Google nor OpenAI guarantees any page will be shown even when all requirements are met. What you control is eligibility and quality, not the display decision." },
    { q: "Do I need an llms.txt file to appear in AI Overviews?", a: "No. Google explicitly states you do not need to create new files or special markup to appear in its AI features." },
  ],
  serviceHref: "/services/ecommerce-store-services",
  serviceLabel: "See the Salla and Zid store SEO service",
};


const structuredDataAr: Article = {
  title: "البيانات المنظمة (Schema) لمتاجر سلة وزد: افحص ناتج متجرك قبل إضافة أي كود",
  directAnswer: "ابدأ بفحص ما يولده قالب متجرك تلقائيًا عبر اختبار النتائج الغنية من Google وأداة التحقق من Schema.org قبل إضافة أي بيانات منظمة جديدة؛ غالبًا ستجد بيانات Product موجودة بالفعل، وإضافة نفس الأنواع من تطبيق أو كود خارجي قد تصنع تكرارًا وتعارضًا بدل تحسين. ركّز على صدق السعر والتوفر بين الصفحة المرئية والبيانات المنظمة والخلاصة، وتذكر أن أهلية النتيجة الغنية ليست ضمانًا لظهورها.",
  sections: [
    { heading: "ماذا تفعل البيانات المنظمة وماذا لا تفعل؟", paragraphs: [
      "البيانات المنظمة كود يقرأه الحاسوب (عادة بصيغة JSON-LD) يصف محتوى الصفحة لمحركات البحث: هذا منتج، هذا سعره، هذه حالة توفره، هذه فتات التنقل الخاصة به. لا يراه الزائر، لكنه يساعد Google على فهم الصفحة وقد يجعلها مؤهلة لعرض أغنى في النتائج مثل السعر والتوفر والتقييمات ومعلومات الشحن.",
      "الأهلية ليست وعدًا: توضح Google أن عرض التحسينات يتم حسب تقدير كل تجربة وقد يتغير، لذلك لا تبن خطة على ظهور مضمون. والبيانات المنظمة لا تعوض صفحة ضعيفة؛ المحتوى المفيد وقابلية الزحف والفهرسة أساس الظهور قبل أي ترميز.",
      "تميز Google بين فئتين لبيانات المنتج: مقتطف المنتج لصفحات لا يُشترى منها المنتج مباشرة كصفحات المراجعات التحريرية، وقوائم التجار (merchant listings) لصفحات يشتري منها العميل فعلًا، وهي ما يناسب صفحات منتجات متجرك وتدعم تفاصيل مثل المتغيرات والشحن وسياسة الإرجاع.",
    ]},
    { heading: "الخطوة الأولى: افحص ما يخرجه متجرك الآن", paragraphs: [
      "قبل شراء تطبيق أو لصق كود، اختر صفحات تمثل متجرك: الرئيسية، صفحة تصنيف، منتج بسيط، منتج بمتغيرات كالمقاسات، ومنتج نافد. الصق كل رابط في اختبار النتائج الغنية من Google وسجل الأنواع المكتشفة والأخطاء والتحذيرات، ثم استخدم أداة التحقق من Schema.org لقراءة الترميز كاملًا بعيدًا عن أهلية ميزة بعينها.",
      "سجل ما تجده بتاريخه: أسماء الأنواع المكتشفة، السعر وحالة التوفر داخل الترميز، وأي نوع مكرر مرتين في الصفحة نفسها. هذا السجل هو مرجعك عند مقارنة ما قبل التعديل وما بعده، وهو ما ستطلبه من أي متخصص تستعين به لاحقًا.",
      "لا تنشر سلة أو زد قائمة نهائية معلنة بكل الترميز الذي تولده القوالب، ويختلف الناتج باختلاف القالب والتطبيقات المثبتة؛ لذلك صفحة متجرك الفعلية هي مصدر الحقيقة، لا افتراضك ولا وصف التطبيق في المتجر.",
    ]},
    { heading: "ماذا تتطلب قوائم التجار من بيانات؟", paragraphs: [
      "لصفحة منتج قابلة للشراء، تتضمن البيانات الأساسية اسم المنتج وصورته وعرض البيع متضمنًا السعر وعملته وحالة التوفر، وتدعم Google متغيرات المنتجات حتى تفهم أن المقاسات أو الألوان نسخ من منتج واحد. كلما اكتملت الخصائص الدقيقة زادت التحسينات التي قد تتأهل لها الصفحة.",
      "توصي Google أيضًا ببيانات على مستوى النشاط التجاري داخل ترميز Organization، مثل سياسة الإرجاع وبرنامج الولاء إن وُجدا؛ اكتب سياسة الإرجاع الفعلية لمتجرك كما هي، فالترميز يصف واقعك ولا يحسنه.",
      "بيانات BreadcrumbList تساعد Google على فهم موضع الصفحة في هيكل المتجر، وقد يظهر مسار التنقل بدل الرابط في نتيجة البحث. تأكد أن الفتات المعروض للزائر هو نفسه الموصوف في الترميز.",
    ]},
    { heading: "السعر والتوفر: ثلاث نسخ يجب أن تروي قصة واحدة", paragraphs: [
      "يوجد سعر منتجك في ثلاثة أماكن: الصفحة المرئية للعميل، الترميز المنظم، وخلاصة Merchant Center إن ربطتها. عند اختلافها تظهر مشاكل المطابقة وقد تفقد الصفحة أهلية التحسينات أو تُرفض المنتجات في الخلاصة.",
      "عند العروض والمواسم تحقق من منتج عادي ومنتج عليه خصم تلقائي ومنتج بقسيمة مشروطة؛ السعر في الترميز يجب أن يصف السعر الفعلي المتاح للعميل من الصفحة نفسها. إن ظهرت لك رسائل رفض أو عدم تطابق في Merchant Center فراجع دليل تشخيص رفض المنتجات على هذه المدونة.",
    ]},
    { heading: "طريق سلة الموثق: الإضافة عبر Google Tag Manager", paragraphs: [
      "تشرح مساعدة سلة (آخر تحديث معلن نوفمبر 2023) إنشاء كود Schema بأداة توليد ثم حقنه كوسم HTML مخصص داخل Google Tag Manager المربوط بالمتجر. هذا طريق موثق من المنصة، لكن تعامل معه بحذر:",
      "الترميز المحقون عبر GTM يعمل في متصفح الزائر، فتحقق بعد النشر أن Google تقرأه فعلًا باستخدام اختبار النتائج الغنية أو فحص الرابط في Search Console، لا بمجرد ظهور الكود في أداة التوليد.",
      "مثال مقال سلة يبني ترميز LocalBusiness؛ الميكانيكية نفسها تصلح لأنواع أخرى، لكن لا تضف نوعًا يولده القالب أصلًا. التكرار بين القالب والتطبيق وGTM هو أكثر أخطاء هذا الطريق شيوعًا.",
    ]},
    { heading: "زد: من أين تبدأ؟", paragraphs: [
      "توثق زد صفحة SEO في لوحة التحكم وتشمل عناوين وأوصاف الصفحات وملف robots.txt وخلاصات المنتجات وملف llms.txt، وبعضها يعتمد على باقتك. أما الترميز المنظم الذي يولده قالب متجرك فلا تنشر زد قائمة محددة به؛ افحص صفحاتك الفعلية بالأداتين المذكورتين أعلاه.",
      "إن أضاف تطبيق من سوق تطبيقات زد ترميزًا خاصًا به، طبّق قاعدة الفحص نفسها: اختبر صفحة قبل التثبيت وبعده، وسجل أي أنواع جديدة أو مكررة ظهرت.",
    ]},
    { heading: "أخطاء شائعة تضيع جهد التجار", paragraphs: [
      "ترميز Product مكرر من القالب والتطبيق معًا؛ قيم داخل الترميز لا تطابق الصفحة المرئية كسعر تخفيض في الكود وسعر عادي في الصفحة؛ وترميز يصف منتجًا غير متاح كأنه متاح.",
      "لا تضف ترميز FAQ أملًا في نتيجة غنية: أعلنت Google في 2026 إزالة ميزة نتائج الأسئلة الشائعة الغنية من البحث وحذفت توثيقها. اكتب الأسئلة الشائعة لأنها تفيد زائرك، لا لميزة لم تعد موجودة.",
      "ولا تفترض أن وجود تقييمات في متجرك يعني نجومًا في نتائج البحث؛ لعرض التقييمات أهلية وسياسات مستقلة، وقد غطيناها بالتفصيل في دليل تقييمات منتجات سلة ونجوم Google على هذه المدونة.",
    ]},
    { heading: "ورقة فحص عملية لمتجرك", paragraphs: [
      "لكل صفحة من العينة سجل: التاريخ، الرابط، الأنواع المكتشفة في اختبار النتائج الغنية، الأخطاء والتحذيرات، وجود تكرار، تطابق السعر والتوفر مع الصفحة المرئية، وملاحظة واحدة عن أهم إصلاح. بعد أي تعديل أعد الاختبار على الرابط نفسه واحتفظ بالسجلين معًا.",
      "راقب تقارير التحسينات في Search Console عندما تظهر لديك؛ ظهور التقرير يعتمد على اكتشاف Google للميزة، فلا تستنتج من غياب التقرير أن الترميز غائب، ولا من وجوده أن العرض الغني مضمون. أداة التحقق تخبرك بما في الصفحة، والتقارير تخبرك بما اكتشفه Google.",
    ]},
    { heading: "متى تطلب تنفيذًا متخصصًا؟", paragraphs: [
      "اطلب متخصصًا عندما يتكرر التعارض في مئات المنتجات، أو تختلط المتغيرات على Google، أو تحتاج مواءمة ثلاثية بين الصفحة والترميز والخلاصة. التسليم المهني الذي تنتظره: جرد للترميز الحالي، قائمة تعارضات مرتبة بالأثر، خطة إصلاح، وسجلات اختبار قبل وبعد على عينة موثقة.",
    ]},
  ],
  faq: [
    { q: "هل البيانات المنظمة ترفع ترتيب صفحاتي في Google؟", a: "لا يوجد وعد بترتيب أعلى بسبب الترميز. الفائدة الموثقة هي أهلية عرض أغنى في النتائج وفهم أدق للصفحة، بينما يبقى أساس الظهور محتوى مفيدًا وزحفًا وفهرسة سليمة." },
    { q: "أضفت ترميزًا ولم تظهر نتيجة غنية، لماذا؟", a: "عرض النتائج الغنية قرار Google ويتوقف على الأهلية والجودة وسياسات كل ميزة. ابدأ باختبار النتائج الغنية لتصحيح الأخطاء والتحذيرات، ثم امنح الزحف وقتًا، ولا تعامل عدم الظهور كعطل مؤكد." },
    { q: "هل أحتاج تطبيقًا مدفوعًا لإضافة Schema لمتجري؟", a: "افحص ناتج قالبك الحالي أولًا؛ كثير من القوالب تولد بيانات المنتج الأساسية، وإضافة طبقة ثانية فوقها قد تصنع تكرارًا أسوأ من الفراغ. القرار يبدأ من نتيجة الفحص لا من إعلان التطبيق." },
    { q: "هل أضيف ترميز FAQ لصفحات متجري؟", a: "ميزة نتائج FAQ الغنية أزيلت من Google Search ولم يعد لها توثيق. اكتب الأسئلة الشائعة لأنها تخدم الزائر وقرار الشراء، ولا تبن عليها توقع عرض خاص." },
  ],
  serviceHref: "/ar/services/ecommerce-store-services",
  serviceLabel: "تعرف على خدمة تحسين متاجر سلة وزد",
  reviewedAr: "راجعت المصادر في 1 نوفمبر 2026. خطوات الفحص المقترحة ليست نتيجة عميل أو فحصًا لحسابك.",
  reviewedEn: "Sources reviewed November 1, 2026. Suggested checks are not a client result or an audit of your account.",
};

const structuredDataEn: Article = {
  title: "Structured data for Salla and Zid stores: check your store's output before adding any code",
  directAnswer: "Start by testing what your store theme already outputs using Google's Rich Results Test and the Schema.org validator before adding any new structured data; you will usually find Product markup already present, and adding the same types again from an app or external code can create duplicates and conflicts instead of an improvement. Focus on honest price and availability across the visible page, the markup and the feed, and remember that rich result eligibility is not a display guarantee.",
  sections: [
    { heading: "What structured data does and does not do", paragraphs: [
      "Structured data is machine-readable code, usually JSON-LD, that describes the page to search engines: this is a product, this is its price, this is its availability, this is its breadcrumb trail. Visitors never see it, but it helps Google understand the page and can make it eligible for richer display such as price, availability, ratings and shipping information.",
      "Eligibility is not a promise: Google states that enhancements appear at the discretion of each experience and may change, so do not build a plan on guaranteed display. Markup also does not rescue a weak page; useful content, crawlability and indexing come first.",
      "Google distinguishes two classes of product markup: product snippets for pages where people cannot directly buy, such as editorial reviews, and merchant listings for pages where customers actually purchase, which fit your store's product pages and support details like variants, shipping and returns.",
    ]},
    { heading: "Step one: test what your store outputs today", paragraphs: [
      "Before buying an app or pasting code, pick representative pages: home, a category, a simple product, a product with variants such as sizes, and an out-of-stock product. Run each URL through Google's Rich Results Test and record the detected types, errors and warnings, then use the Schema.org validator to read the full markup independently of any single feature's eligibility.",
      "Log what you find with its date: detected type names, price and availability inside the markup, and any type appearing twice on the same page. This log is your before-and-after reference and what any specialist you hire should ask for.",
      "Neither Salla nor Zid publishes a definitive list of the markup their themes generate, and output varies with the theme and installed apps; your store's actual pages are the source of truth, not assumptions or an app's store listing.",
    ]},
    { heading: "What merchant listings require", paragraphs: [
      "For a purchasable product page, the core data includes the product name, image and an offer with price, priceCurrency and availability. Google also supports product variants so it can understand that sizes or colors belong to one parent product. The more accurate properties you provide, the more enhancements the page may be eligible for.",
      "Google also recommends business-level data nested under Organization markup, such as your return policy and loyalty program where they exist. Describe your actual policy as it is; markup describes your reality, it does not improve it.",
      "BreadcrumbList markup helps Google understand the page's position in the store hierarchy, and the breadcrumb trail may replace the URL in the result. Make sure the visible breadcrumb matches the markup.",
    ]},
    { heading: "Price and availability: three copies that must tell one story", paragraphs: [
      "Your product's price lives in three places: the visible page, the structured data, and the Merchant Center feed if you connected one. When they disagree you get mismatch issues and the page can lose enhancement eligibility or the feed items can be disapproved.",
      "During sales, test a regular product, an automatic sale product and a conditional coupon product; the markup price must describe the price actually available to the customer from the same page. If Merchant Center shows disapprovals or mismatch warnings, follow the rejection diagnosis guide on this blog.",
    ]},
    { heading: "Salla's documented route: injection via Google Tag Manager", paragraphs: [
      "Salla's help center (last stated update November 2023) documents generating schema code with a generator tool and injecting it as a custom HTML tag inside the Google Tag Manager account linked to the store. This is a platform-documented route, but treat it carefully:",
      "Markup injected through GTM runs in the visitor's browser, so after publishing verify that Google actually reads it using the Rich Results Test or URL Inspection in Search Console, not just the generator's preview.",
      "Salla's article example builds LocalBusiness markup; the same mechanism applies to other types, but never add a type the theme already outputs. Duplication between theme, app and GTM is the most common mistake on this route.",
    ]},
    { heading: "Zid: where to start", paragraphs: [
      "Zid documents an SEO page in the dashboard covering page titles and descriptions, robots.txt, product feeds and llms.txt, with some settings depending on your plan. Zid does not publish a definitive list of the structured data your theme outputs; test your actual pages with the two tools above.",
      "If a Zid app store app adds its own markup, apply the same discipline: test a page before and after installation and record any new or duplicated types.",
    ]},
    { heading: "Common mistakes that waste merchant effort", paragraphs: [
      "Product markup duplicated between theme and app; values inside the markup that contradict the visible page, such as a sale price in code and a regular price on the page; and markup describing an unavailable product as in stock.",
      "Do not add FAQ markup hoping for a rich result: Google announced in 2026 that the FAQ rich result feature was removed from Search and deleted its documentation. Write FAQs because they help your visitors, not for a retired display feature.",
      "Do not assume store reviews mean stars in search results; ratings display has its own eligibility and policies, covered in detail in the Salla product reviews and Google stars guide on this blog.",
    ]},
    { heading: "A practical audit sheet for your store", paragraphs: [
      "For each sampled page record: date, URL, types detected in the Rich Results Test, errors and warnings, any duplication, price and availability match against the visible page, and one note on the most important fix. After any change, retest the same URL and keep both records together.",
      "Watch Search Console enhancement reports when they appear; a report shows up when Google detects the feature, so a missing report does not prove missing markup and a present report does not guarantee rich display. The validator tells you what is on the page, the reports tell you what Google discovered.",
    ]},
    { heading: "When to ask for specialist implementation", paragraphs: [
      "Bring in a specialist when conflicts repeat across hundreds of products, variants confuse Google, or you need the page, markup and feed aligned together. The professional deliverable to expect: an inventory of current markup, a conflict list ranked by impact, a fix plan, and dated before-and-after test records on a documented sample.",
    ]},
  ],
  faq: [
    { q: "Does structured data raise my rankings on Google?", a: "There is no promise of higher ranking from markup. The documented benefit is eligibility for richer display and more accurate page understanding, while visibility still rests on useful content, crawling and indexing." },
    { q: "I added markup but no rich result appeared. Why?", a: "Rich result display is Google's decision and depends on eligibility, quality and each feature's policies. Fix errors and warnings in the Rich Results Test first, allow time for crawling, and do not treat non-display as a confirmed fault." },
    { q: "Do I need a paid app to add schema to my store?", a: "Test your theme's current output first; many themes already generate core product markup, and stacking a second layer can be worse than none. The decision starts from the test result, not the app's marketing." },
    { q: "Should I add FAQ markup to my store pages?", a: "The FAQ rich result feature was removed from Google Search and its documentation deleted. Write FAQs because they serve visitors and buying decisions, not for a display feature that no longer exists." },
  ],
  serviceHref: "/services/ecommerce-store-services",
  serviceLabel: "See the Salla and Zid store SEO service",
  reviewedAr: "راجعت المصادر في 1 نوفمبر 2026. خطوات الفحص المقترحة ليست نتيجة عميل أو فحصًا لحسابك.",
  reviewedEn: "Sources reviewed November 1, 2026. Suggested checks are not a client result or an audit of your account.",
};


const storeSpeedAr: Article = {
  title: "تسريع متجر سلة أو زد: ما تستطيع تحسينه فعلًا وما تملكه المنصة",
  directAnswer: "قِس سرعة متجرك أولًا عبر PageSpeed Insights وراجع تقرير Core Web Vitals في Search Console قبل تغيير أي شيء، ثم ركز على ما تملكه فعلًا: حجم الصور قبل رفعها، عدد التطبيقات والأكواد الخارجية، وقالبًا حديثًا مدعومًا. الاستضافة وكود القالب الأساسي تملكهما المنصة ولن تغيرهما بإضافة أخرى، وتذكر أن تجربة الصفحة عامل مساعد ضمن عوامل كثيرة وليست زر تصدّر.",
  sections: [
    { heading: "السرعة تهم، لكنها ليست كل شيء", paragraphs: [
      "توضح Google أن أنظمة الترتيب الأساسية تكافئ المحتوى الذي يقدم تجربة صفحة جيدة، لكنها في الوقت نفسه تسعى دائمًا لعرض المحتوى الأكثر صلة حتى لو كانت تجربة صفحته دون المستوى. المعنى العملي: صفحة بطيئة ذات محتوى مفيد قد تتصدر صفحة سريعة فارغة، لكن عند تساوي المحتوى تصبح التجربة ميزة حقيقية.",
      "المقاييس المرجعية هي Core Web Vitals: أكبر رسم للمحتوى (LCP) خلال 2.5 ثانية، والاستجابة للتفاعل (INP) خلال 200 مللي ثانية، وثبات التخطيط (CLS) بحد أقصى 0.1، وتُقاس عند الشريحة المئوية 75 من تحميلات الصفحة مع فصل الجوال عن سطح المكتب.",
    ]},
    { heading: "قِس قبل أن تصلح", paragraphs: [
      "افتح PageSpeed Insights والصق رابط متجرك، وسجل رقمين مختلفين: بيانات الميدان من تقرير تجربة مستخدمي Chrome (زوار حقيقيون) وبيانات المختبر (محاكاة فورية). بيانات الميدان هي المرجع عند توفرها؛ درجة المختبر أداة تشخيص تتغير بين قياس وآخر ولا تساوي تجربة زوارك.",
      "راجع تقرير Core Web Vitals في Search Console عندما يظهر لديك؛ فهو يجمع الصفحات المتشابهة ويخبرك أي مجموعات تحتاج إصلاحًا على الجوال وسطح المكتب. وقِس ثلاث صفحات على الأقل: الرئيسية وصفحة تصنيف وصفحة منتج، فلكل منها طبيعة مختلفة.",
    ]},
    { heading: "ما تملكه أولًا: الصور", paragraphs: [
      "الصور أكبر رافعة يملكها التاجر على المنصات المستضافة. اضغط الصور وغيّر أبعادها قبل الرفع بما يناسب حجم عرضها الفعلي، ولا ترفع صورة منتج بأبعاد كاميرا خام ثم تترك المتجر يصارعها. الصيغ الحديثة مثل WebP أخف من JPEG القديمة للجودة نفسها.",
      "راجع صفحتك الرئيسية بعين قاسية: صور السلايدر الكبيرة والفيديوهات المضمنة أعلى الصفحة من أثقل ما يبطئ LCP. صورة رئيسية واحدة واضحة أفضل من خمس شرائح لا ينتظرها الزائر.",
    ]},
    { heading: "ما تملكه ثانيًا: التطبيقات والأكواد الخارجية", paragraphs: [
      "كل تطبيق تثبته من سوق التطبيقات وكل بكسل أو ودجت دردشة تضيفه يجلب معه كود JavaScript يعمل في متصفح عميلك، وتراكم هذه الإضافات من أكثر أسباب بطء المتاجر شيوعًا وضعف استجابتها للتفاعل.",
      "اجلس مراجعة دورية: احذف التطبيقات التي لا تستخدمها فعلًا، وراجع الوسوم في Google Tag Manager (بكسلات الإعلانات، أدوات تسجيل الجلسات، ودجتات الدردشة) واحذف ما انتهت حملته. بعد كل حذف أعد قياس الصفحة نفسها في PageSpeed Insights وسجل الفرق بتاريخه.",
    ]},
    { heading: "ما تملكه ثالثًا: القالب وبنية الصفحة", paragraphs: [
      "اختيار القالب قرار سرعة قبل أن يكون قرار شكل. توضح مساعدة زد أن القوالب غير المبنية للواجهة المحسنة تفقد ميزات وتحسينات سرعة الواجهة الجديدة، وتعرض تنبيهًا عندما يصبح قالبك غير مدعوم؛ فإن ظهر لك التنبيه فالترقية لقالب مدعوم من أعلى العائد المتاح لك.",
      "في سلة أيضًا تختلف القوالب في ثقلها وبنيتها، وراجع مجلة ثيمات سلة قبل الاختيار. وبغض النظر عن المنصة: كلما زادت أقسام الصفحة الرئيسية والسلايدرات والعناصر المتحركة زادت كلفة التحميل؛ صفحة رئيسية مركزة تبيع أفضل من معرض متعب.",
    ]},
    { heading: "ما تملكه المنصة ولا تستطيع تغييره", paragraphs: [
      "الاستضافة وشبكة توصيل المحتوى وكود القالب الأساسي وصفحة الدفع أجزاء تملكها المنصة. لا تصرف جهدك في محاولة التحكم بها، ولا تصدق من يعدك باختراقها بإضافة جديدة.",
      "إذا حسّنت ما تملكه وبقيت بيانات الميدان ضعيفة، ارفع ملاحظاتك لدعم المنصة مع قياساتك وتواريخها؛ مطالبة موثقة بأرقام أنفع من شكوى عامة.",
    ]},
    { heading: "خرافات شائعة عن تسريع المتاجر", paragraphs: [
      "مطاردة درجة 100 في المختبر هوس غير مفيد؛ الدرجة أداة تشخيص لا هدف، وبعض ما يظهر في التقرير خارج سيطرتك على منصة مستضافة.",
      "السرعة لا تعوض محتوى ضعيفًا؛ Google واضحة أن المحتوى الأكثر صلة يتصدر حتى مع تجربة دون المستوى. والحذف الجماعي للتطبيقات قبل القياس قد يزيل أدوات تخدم البيع بينما المشكلة الحقيقية في الصور.",
    ]},
    { heading: "ورقة قياس شهرية لمتجرك", paragraphs: [
      "خصص صفحة متابعة بسيطة: التاريخ، الرابط، أرقام الميدان للجوال (LCP وINP وCLS) إن توفرت، درجة المختبر، التغيير الذي نفذته، وملاحظة واحدة. راجع تقرير Search Console شهريًا وقارن المجموعات قبل عملك وبعده، واحتفظ بالسجلات لتعرف ما الذي صنع الفرق فعلًا.",
    ]},
    { heading: "متى تطلب متخصصًا؟", paragraphs: [
      "اطلب متخصصًا عندما تتشابك الأسباب أو تحتاج قرار قالب مدروسًا. التسليم المهني المتوقع: قياس أساس موثق بأدوات Google، قائمة إصلاحات مرتبة بالأثر ضمن ما تملكه فعلًا، وسجلات قبل وبعد على الصفحات نفسها، دون وعود بدرجة معينة أو ترتيب مضمون.",
    ]},
  ],
  faq: [
    { q: "هل تسريع المتجر يرفع ترتيبي في Google مباشرة؟", a: "تجربة الصفحة عامل مساعد ضمن إشارات كثيرة، وتنص Google على أن المحتوى الأكثر صلة يتصدر حتى مع تجربة دون المستوى. حسّن السرعة لزوارك أولًا ولتقوية فرصك عند تساوي المحتوى، لا كبديل عن المحتوى." },
    { q: "ما الرقم الجيد في Core Web Vitals؟", a: "LCP خلال 2.5 ثانية، INP خلال 200 مللي ثانية، CLS بحد أقصى 0.1، وتقاس عند الشريحة 75 من تحميلات الزوار الحقيقيين مع فصل الجوال. درجة المختبر في PageSpeed أداة تشخيص وليست الهدف نفسه." },
    { q: "متجري بطيء رغم تحسين الصور وحذف التطبيقات الزائدة، ماذا أفعل؟", a: "تأكد أنك تقرأ بيانات الميدان لا المختبر، وراجع القالب: قالب قديم غير مدعوم قد يكون السبب. وما تبقى بعدها يخص المنصة؛ ارفعه لدعمها مع قياساتك الموثقة." },
    { q: "هل أحذف كل التطبيقات لتسريع المتجر؟", a: "لا. احذف غير المستخدم فقط وقِس أثر كل حذف على الصفحة نفسها. تطبيق مفيد يخدم البيع قد يستحق كلفته، والقرار يبدأ من القياس لا من التخمين." },
  ],
  serviceHref: "/ar/services/ecommerce-store-services",
  serviceLabel: "تعرف على خدمة تحسين متاجر سلة وزد",
  reviewedAr: "راجعت المصادر في 2 نوفمبر 2026. خطوات الفحص المقترحة ليست نتيجة عميل أو فحصًا لحسابك.",
  reviewedEn: "Sources reviewed November 2, 2026. Suggested checks are not a client result or an audit of your account.",
};

const storeSpeedEn: Article = {
  title: "Speeding up a Salla or Zid store: what you can actually improve and what the platform owns",
  directAnswer: "Measure your store's speed first through PageSpeed Insights and the Core Web Vitals report in Search Console before changing anything, then focus on what you actually own: image size before upload, the number of apps and external scripts, and a modern supported theme. Hosting and the theme's core code belong to the platform and no new app will change them, and remember page experience is one supporting factor among many, not a ranking switch.",
  sections: [
    { heading: "Speed matters, but it is not everything", paragraphs: [
      "Google states that its core ranking systems reward content that provides a good page experience, while also always seeking to show the most relevant content even if its page experience is sub-par. Practically: a slow page with useful content can outrank a fast empty page, but when content is comparable, experience becomes a real edge.",
      "The reference metrics are Core Web Vitals: Largest Contentful Paint within 2.5 seconds, Interaction to Next Paint within 200 milliseconds, and Cumulative Layout Shift of 0.1 or less, measured at the 75th percentile of page loads with mobile and desktop separated.",
    ]},
    { heading: "Measure before you fix", paragraphs: [
      "Open PageSpeed Insights, paste your store URL, and record two different numbers: field data from the Chrome User Experience Report (real visitors) and lab data (an instant simulation). Field data is the reference when available; the lab score is a diagnostic that varies between runs and does not equal your visitors' experience.",
      "Review the Core Web Vitals report in Search Console when you have it; it groups similar pages and tells you which groups need work on mobile and desktop. Test at least three page types - home, a category and a product - because each behaves differently.",
    ]},
    { heading: "What you own first: images", paragraphs: [
      "Images are the biggest lever a merchant controls on hosted platforms. Compress and resize images before upload to match their real display size, and do not upload raw camera dimensions and leave the store to fight them. Modern formats like WebP are lighter than old JPEGs at the same quality.",
      "Look at your home page critically: large slider images and embedded videos above the fold are among the heaviest causes of a slow LCP. One clear hero image beats five slides nobody waits for.",
    ]},
    { heading: "What you own second: apps and external scripts", paragraphs: [
      "Every app you install from the app market and every pixel or chat widget you add ships JavaScript into your customer's browser, and the accumulation of these additions is one of the most common causes of slow stores and weak interaction responsiveness.",
      "Hold a regular review: remove apps you do not actually use, audit tags in Google Tag Manager (ad pixels, session recorders, chat widgets) and delete what belongs to finished campaigns. After each removal, re-measure the same page in PageSpeed Insights and log the difference with its date.",
    ]},
    { heading: "What you own third: the theme and page structure", paragraphs: [
      "Theme choice is a speed decision before it is a design decision. Zid's help center explains that themes not built for the enhanced storefront miss new storefront features and speed improvements, and it shows an alert when your theme is no longer supported; if you see that alert, upgrading to a supported theme is among the highest-return moves available to you.",
      "Salla themes also vary in weight and structure, so review Salla's themes journal before choosing. Regardless of platform: more home page sections, sliders and animated elements mean more loading cost; a focused home page sells better than a tiring gallery.",
    ]},
    { heading: "What the platform owns and you cannot change", paragraphs: [
      "Hosting, the content delivery network, the theme's core code and the checkout page are owned by the platform. Do not spend effort trying to control them, and do not believe anyone promising to hack past them with another app.",
      "If you improved what you own and field data stays poor, raise it with platform support together with your dated measurements; a documented, numbers-based request works better than a general complaint.",
    ]},
    { heading: "Common myths about store speed", paragraphs: [
      "Chasing a lab score of 100 is unhelpful obsession; the score is a diagnostic, not a goal, and part of what the report lists is outside your control on a hosted platform.",
      "Speed does not compensate for weak content; Google is explicit that the most relevant content wins even with sub-par experience. And deleting every app before measuring can remove tools that serve sales while the real problem was images all along.",
    ]},
    { heading: "A monthly measurement sheet for your store", paragraphs: [
      "Keep a simple tracking page: date, URL, mobile field numbers (LCP, INP, CLS) when available, lab score, the change you made, and one note. Review the Search Console report monthly, compare groups before and after your work, and keep the records so you know what actually made the difference.",
    ]},
    { heading: "When to ask for a specialist", paragraphs: [
      "Bring in a specialist when causes intertwine or you need a considered theme decision. The professional deliverable to expect: a documented baseline measured with Google's tools, a fix list ranked by impact within what you actually own, and before-and-after records on the same pages, without promises of a specific score or a guaranteed ranking.",
    ]},
  ],
  faq: [
    { q: "Will speeding up my store raise my Google ranking directly?", a: "Page experience is one supporting factor among many signals, and Google states the most relevant content wins even with sub-par experience. Improve speed for your visitors first and to strengthen your position when content is comparable, not as a content substitute." },
    { q: "What is a good Core Web Vitals score?", a: "LCP within 2.5 seconds, INP within 200 milliseconds, CLS of 0.1 or less, measured at the 75th percentile of real visitor loads with mobile separated. The PageSpeed lab score is a diagnostic, not the goal itself." },
    { q: "My store is still slow after image optimization and removing extra apps. What now?", a: "Confirm you are reading field data, not lab data, and review the theme: an old unsupported theme can be the cause. Whatever remains after that belongs to the platform; raise it with support with your documented measurements." },
    { q: "Should I delete all apps to speed up the store?", a: "No. Remove only what you do not use and measure the effect of each removal on the same page. A useful app that serves sales may be worth its cost; the decision starts from measurement, not guessing." },
  ],
  serviceHref: "/services/ecommerce-store-services",
  serviceLabel: "See the Salla and Zid store SEO service",
  reviewedAr: "راجعت المصادر في 2 نوفمبر 2026. خطوات الفحص المقترحة ليست نتيجة عميل أو فحصًا لحسابك.",
  reviewedEn: "Sources reviewed November 2, 2026. Suggested checks are not a client result or an audit of your account.",
};


const customDomainAr: Article = {
  title: "ربط الدومين بمتجر سلة أو زد: الخطوات الصحيحة وما يهم جوجل بعد الربط",
  directAnswer: "اربط نطاقك الخاص من إعدادات المنصة: في سلة من إعدادات المتجر ثم نطاق المتجر ثم ربط نطاق خارجي، وفي زد من الإعدادات ثم المتجر ثم رابط المتجر الإلكتروني ثم ربط نطاق موجود، وحدّث خوادم الأسماء لدى مسجل النطاق ثم اضغط التحقق وانتظر اكتماله حتى 72 ساعة قبل التفعيل. بعدها أضف النطاق الجديد في Search Console وأرسل خريطة الموقع. النطاق الخاص يبني علامتك وثقة عملائك، لكنه وحده لا يرفع ترتيبك؛ المحتوى والفهرسة هما ما يظهرك.",
  sections: [
    { heading: "لماذا تربط نطاقًا خاصًا أصلًا؟", paragraphs: [
      "يمنحك نطاقك الخاص عنوانًا ثابتًا تملكه وتحمله معك: يظهر في إعلاناتك وبطاقاتك ورسائلك، ويحفظه العملاء ويكتبونه بلا وسيط. العنوان المجاني الافتراضي يعمل تقنيًا، لكنه يحمل اسم المنصة ولا يبني علامتك على المدى الطويل.",
      "كن صادقًا مع نفسك عن السقف: النطاق الخاص ليس دفعة ترتيب في جوجل. قيمته في العلامة والثقة وتوحيد الروابط؛ أما الظهور في نتائج البحث فيتبع جودة صفحاتك وفهرستها.",
    ]},
    { heading: "قبل الربط: امتلك نطاقك باسمك", paragraphs: [
      "اشتر النطاق من مسجل معروف أو اطلبه من منصتك إن كانت توفر ذلك، وتأكد أنه مسجل باسمك وبياناتك أنت. تنبه زد إلى نقطة مهمة: إن كانت منصة أخرى قد سجلت نطاقك باسمها، فاطلب نقله إلى اسمك قبل ربطه، فالملكية أهم من الربط.",
      "اختر اسمًا قصيرًا واضحًا يقال ويُكتب بلا شرح، وتجنب الحروف المربكة والأرقام التي تُسمع ولا تُقرأ. لا تغيّر نطاقك بعد انطلاقك إلا لسبب حقيقي؛ الاستقرار جزء من قيمة النطاق.",
    ]},
    { heading: "خطوات الربط في زد", paragraphs: [
      "من الإعدادات ثم المتجر ثم رابط المتجر الإلكتروني تفتح قائمة النطاقات. اضغط ربط نطاق موجود وأدخل النطاق الأساسي مثل example.com، وتنص زد على عدم إدخال نطاق فرعي مثل shop.example.com في هذه الخطوة.",
      "انسخ خادم الأسماء الأساسي والثانوي من بطاقة خوادم الأسماء، ثم استبدل خوادم أسماء نطاقك بهما في لوحة مسجل النطاق، وعد واضغط التحقق. تتدرج الحالة من قيد التحقق إلى جاهز للتفعيل ثم مفعل بعد الضغط على تفعيل، وتنص زد على أن تحديث خوادم الأسماء قد يتأخر حتى 72 ساعة.",
      "تتيح زد ربط أكثر من نطاق مع تفعيل واحد فقط في كل مرة، وتستطيع العودة لعنوانك المجاني على zid.store متى شئت، كما توفر صفحة النطاق إدارة سجلات DNS لتوجيه البريد والخدمات الأخرى.",
    ]},
    { heading: "خطوات الربط في سلة", paragraphs: [
      "من القائمة الرئيسية للوحة التحكم افتح إعدادات المتجر، ثم اختر نطاق المتجر، ثم اضغط ربط نطاق خارجي، وأدخل عنوان الدومين واختر طريقة الربط ثم اضغط ربط النطاق، كما توثق مساعدة سلة المحدثة في أغسطس 2026.",
      "توفر سلة أيضًا مقالات لإدارة النطاق وحجز دومين جديد من داخلها ونقل دومين بين متاجرها؛ راجع المقال المناسب لحالتك قبل تغيير سجلات DNS إن كان على نطاقك بريد أو خدمات قائمة.",
    ]},
    { heading: "لماذا يحتاج الربط وقتًا؟", paragraphs: [
      "تغيير خوادم الأسماء لا ينتشر في الشبكة لحظيًا؛ تخزن الشبكة التوجيه القديم مؤقتًا حتى تنتهي صلاحيته. لذلك تنص زد بانتظار يصل إلى 72 ساعة قبل أن ينجح التحقق، وأن تعيد المحاولة لاحقًا بدل تعديل السجلات مرارًا.",
      "أكثر خطأ هنا هو تبديل السجلات كل ساعة ظنًا أن شيئًا تعطل؛ كل تغيير جديد يعيد بدء الانتشار. سجل ما كتبته ووقته، ثم تحقق بعد ساعات.",
    ]},
    { heading: "بعد التفعيل: خطوات جوجل الأساسية", paragraphs: [
      "أضف نطاقك الجديد في Search Console وتحقق من ملكيته، ثم أرسل خريطة الموقع من داخله. هذه الخطوة تجعلك ترى الفهرسة والاستعلامات على عنوانك الحقيقي بدل انتظار اكتشاف جوجل وحده.",
      "راجع أن صفحاتك تفتح بعنوان النطاق الجديد مع https، وحدّث روابطك في الحملات وحسابات التواصل إلى العنوان الجديد، وراقب سلوك العنوان المجاني القديم بعد التفعيل. إن كان متجرك منقولًا من منصة أخرى وله تاريخ فهرسة على عنوان سابق، فراجع دليل نقل المتجر والسيو على هذه المدونة؛ نقل الفهرسة قصة أخرى تحتاج خطة إعادة توجيه.",
    ]},
    { heading: "أخطاء شائعة عند ربط الدومين", paragraphs: [
      "إدخال نطاق فرعي مكان النطاق الأساسي، أو تغيير سجلات DNS باستمرار أثناء الانتشار، أو افتراض أن التفعيل لحظي فتعلن العنوان الجديد قبل اكتماله.",
      "نسيان سجلات قائمة على النطاق مثل البريد الإلكتروني عند استبدال خوادم الأسماء كاملة؛ راجع سجلاتك الحالية وانسخ ما تحتاجه قبل الاستبدال. وأخيرًا، توقع أن النطاق الجديد وحده سيغير ترتيبك؛ العمل على المحتوى والفهرسة هو ما يغيرها.",
    ]},
    { heading: "ورقة مراجعة بعد الربط", paragraphs: [
      "بعد التفعيل سجل: فتح المتجر بعنوان النطاق الجديد مع شهادة أمان سليمة، حالة النطاق في لوحة المنصة (مفعل)، إضافة النطاق في Search Console وإرسال الخريطة، تحديث روابط الحملات والحسابات، وملاحظة عن سلوك العنوان القديم. راجع هذه النقاط بعد يوم وأسبوع لتلتقط أي مشكلة متأخرة.",
    ]},
    { heading: "متى تطلب مساعدة؟", paragraphs: [
      "اطلب مختصًا عندما يتشابك بريد النطاق مع ربط المتجر، أو عند نقل نطاق مسجل باسم طرف آخر، أو عندما يكون لمتجرك تاريخ فهرسة على عنوان قديم يحتاج خطة تحويل. التسليم المتوقع: نطاق مفعّل وموثق في Search Console، وسجلات DNS محفوظة ومدروسة، وقائمة تحقق مكتملة بتواريخها.",
    ]},
  ],
  faq: [
    { q: "هل ربط دومين خاص يحسن ترتيبي في جوجل؟", a: "ليس بحد ذاته. قيمة النطاق الخاص في بناء علامتك وثقة عملائك وتوحيد روابطك، أما الترتيب فيتبع جودة المحتوى وسلامة الفهرسة والتجربة." },
    { q: "كم يستغرق ربط الدومين؟", a: "توثق زد أن تحديث خوادم الأسماء قد يتأخر حتى 72 ساعة قبل نجاح التحقق. أكمل الخطوات ثم أعد المحاولة بعد ساعات بدل تعديل السجلات مرارًا، فكل تعديل يعيد الانتشار من جديد." },
    { q: "هل أربط النطاق الرئيسي أم نطاقًا فرعيًا؟", a: "عند الربط في زد تنص المساعدة على إدخال النطاق الأساسي مثل example.com وليس نطاقًا فرعيًا مثل shop.example.com. راجع مقال منصتك لحالتك الخاصة إن احتجت ربط نطاق فرعي." },
    { q: "ماذا يحدث لعنواني المجاني القديم بعد ربط نطاقي؟", a: "توضح زد أنه يمكنك العودة إلى عنوانك المجاني متى شئت حتى بعد ربط نطاقك الخاص. راجع إعدادات منصتك لسلوك التحويل بين العنوانين بعد التفعيل." },
  ],
  serviceHref: "/ar/services/ecommerce-store-services",
  serviceLabel: "تعرف على خدمة تحسين متاجر سلة وزد",
  reviewedAr: "راجعت المصادر في 3 نوفمبر 2026. خطوات الفحص المقترحة ليست نتيجة عميل أو فحصًا لحسابك.",
  reviewedEn: "Sources reviewed November 3, 2026. Suggested checks are not a client result or an audit of your account.",
};

const customDomainEn: Article = {
  title: "Connecting a custom domain to a Salla or Zid store: the right steps and what matters to Google afterwards",
  directAnswer: "Connect your own domain from the platform settings: in Salla go to store settings then store domain then link external domain; in Zid go to Settings, Store, Store link, then link existing domain. Update the nameservers at your registrar, press verify, and wait for verification that can take up to 72 hours before activating. Then add the new domain in Search Console and submit your sitemap. A custom domain builds your brand and customer trust, but alone it does not raise your ranking; content and indexing are what make you visible.",
  sections: [
    { heading: "Why connect a custom domain at all?", paragraphs: [
      "Your own domain gives you a stable address you own and carry with you: it appears in your ads, cards and messages, and customers remember and type it directly. The free default address works technically, but it carries the platform's name and does not build your brand over time.",
      "Be honest with yourself about the ceiling: a custom domain is not a ranking boost on Google. Its value is brand, trust and unified links; visibility in search results follows your page quality and indexing.",
    ]},
    { heading: "Before connecting: own your domain under your name", paragraphs: [
      "Buy the domain from a known registrar or request it through your platform if offered, and make sure it is registered under your own name and details. Zid highlights an important point: if another platform registered your domain under its own name, ask to transfer it to your name before connecting it; ownership matters more than the connection.",
      "Choose a short, clear name that is said and typed without explanation, and avoid confusing letters and numbers that are heard but not read. Do not change your domain after launch without a real reason; stability is part of a domain's value.",
    ]},
    { heading: "Connecting steps on Zid", paragraphs: [
      "From Settings, then Store, then Store link you open the domain list. Press link existing domain and enter the root domain such as example.com; Zid explicitly says not to enter a subdomain such as shop.example.com at this step.",
      "Copy the primary and secondary nameservers from the nameservers card, replace your domain's nameservers with them at your registrar, then return and press verify. The status moves from pending verification to ready for activation to active after pressing activate, and Zid notes nameserver updates can take up to 72 hours.",
      "Zid lets you connect several domains with only one active at a time, you can return to your free zid.store address whenever you want, and the domain page offers DNS record management for routing mail and other services.",
    ]},
    { heading: "Connecting steps on Salla", paragraphs: [
      "From the dashboard main menu open store settings, choose store domain, press link external domain, enter the domain address, choose the linking method and press link domain, as documented in Salla's help updated in August 2026.",
      "Salla also provides articles for domain management, booking a new domain from inside the platform, and transferring a domain between Salla stores; review the article matching your case before changing DNS records if your domain already carries mail or other services.",
    ]},
    { heading: "Why does connecting take time?", paragraphs: [
      "Nameserver changes do not spread through the network instantly; the network caches the old routing until it expires. That is why Zid advises waiting up to 72 hours before verification succeeds, and retrying later instead of editing records repeatedly.",
      "The most common mistake here is switching records every hour assuming something broke; every new change restarts propagation. Write down what you entered and when, then check after a few hours.",
    ]},
    { heading: "After activation: the basic Google steps", paragraphs: [
      "Add your new domain in Search Console and verify ownership, then submit your sitemap from inside it. This lets you see indexing and queries on your real address instead of waiting for Google to discover it alone.",
      "Check that your pages open on the new domain with https, update your campaign and social links to the new address, and watch how the old free address behaves after activation. If your store moved from another platform with indexing history on a previous address, review the store migration and SEO guide on this blog; moving existing indexing is a different story that needs a redirect plan.",
    ]},
    { heading: "Common mistakes when connecting a domain", paragraphs: [
      "Entering a subdomain instead of the root domain, changing DNS records repeatedly during propagation, or assuming activation is instant and announcing the new address before it completes.",
      "Forgetting existing records on the domain such as email when fully replacing nameservers; review your current records and copy what you need before replacing. And finally, expecting the new domain alone to change your ranking; content and indexing work is what changes it.",
    ]},
    { heading: "A review sheet after connecting", paragraphs: [
      "After activation record: the store opens on the new domain with a valid security certificate, the domain status in the platform dashboard is active, the domain is added in Search Console with the sitemap submitted, campaign and account links are updated, and one note on the old address behavior. Review these points after a day and a week to catch any delayed issue.",
    ]},
    { heading: "When to ask for help", paragraphs: [
      "Ask a specialist when domain email conflicts with the store connection, when transferring a domain registered under another party's name, or when your store has indexing history on an old address that needs a redirect plan. The expected deliverable: an activated domain verified in Search Console, preserved and considered DNS records, and a dated checklist completed.",
    ]},
  ],
  faq: [
    { q: "Does connecting a custom domain improve my Google ranking?", a: "Not by itself. A custom domain's value is building your brand, customer trust and unified links; ranking follows content quality, sound indexing and experience." },
    { q: "How long does domain connecting take?", a: "Zid documents that nameserver updates can take up to 72 hours before verification succeeds. Complete the steps, then retry after a few hours instead of editing records repeatedly, since every edit restarts propagation." },
    { q: "Do I connect the root domain or a subdomain?", a: "When connecting on Zid, the help center says to enter the root domain like example.com, not a subdomain like shop.example.com. Check your platform's article for your specific case if you need a subdomain." },
    { q: "What happens to my old free address after connecting my domain?", a: "Zid explains you can return to your free address whenever you want, even after connecting your own domain. Review your platform settings for how redirects between the two addresses behave after activation." },
  ],
  serviceHref: "/services/ecommerce-store-services",
  serviceLabel: "See the Salla and Zid store SEO service",
  reviewedAr: "راجعت المصادر في 3 نوفمبر 2026. خطوات الفحص المقترحة ليست نتيجة عميل أو فحصًا لحسابك.",
  reviewedEn: "Sources reviewed November 3, 2026. Suggested checks are not a client result or an audit of your account.",
};

export const sallaZidMerchantRegistry: Record<string, ComponentType> = {
  "salla-zid-merchant-center-ar": () => <ArticleView article={merchantCenterAr} lang="ar" />,
  "salla-zid-merchant-center-en": () => <ArticleView article={merchantCenterEn} lang="en" />,
  "ai-visibility-ecommerce-ar": () => <ArticleView article={aiVisibilityAr} lang="ar" />,
  "ai-visibility-ecommerce-en": () => <ArticleView article={aiVisibilityEn} lang="en" />,
  "salla-zid-structured-data-ar": () => <ArticleView article={structuredDataAr} lang="ar" />,
  "salla-zid-structured-data-en": () => <ArticleView article={structuredDataEn} lang="en" />,
  "salla-zid-store-speed-ar": () => <ArticleView article={storeSpeedAr} lang="ar" />,
  "salla-zid-store-speed-en": () => <ArticleView article={storeSpeedEn} lang="en" />,
  "salla-zid-custom-domain-ar": () => <ArticleView article={customDomainAr} lang="ar" />,
  "salla-zid-custom-domain-en": () => <ArticleView article={customDomainEn} lang="en" />,
};

export const sallaZidMerchantPosts: BlogPost[] = [
  { slug: "salla-zid-merchant-center-ar", title: merchantCenterAr.title, description: "خطوات ربط متجر سلة أو زد بـ Google Merchant Center: إنشاء الخلاصة، السمات المطلوبة لقبول المنتجات، وأخطاء التطابق الشائعة بين الخلاصة وصفحة المنتج.", date: "2026-10-31", readTime: "6 دقائق", lang: "ar", altSlug: "salla-zid-merchant-center-en", faq: merchantCenterAr.faq },
  { slug: "salla-zid-merchant-center-en", title: merchantCenterEn.title, description: "How to connect a Salla or Zid store to Google Merchant Center: feed creation, the attributes product approval depends on, and common feed-to-page mismatch errors.", date: "2026-10-31", readTime: "6 min read", lang: "en", altSlug: "salla-zid-merchant-center-ar", faq: merchantCenterEn.faq },
  { slug: "ai-visibility-ecommerce-ar", title: aiVisibilityAr.title, description: "ما الذي يحتاجه متجرك فعلًا للظهور في AI Overviews وChatGPT وGemini: أساسيات جوجل الرسمية، زواحف OpenAI، وخرافات يجب تجنبها.", date: "2026-10-31", readTime: "6 دقائق", lang: "ar", altSlug: "ai-visibility-ecommerce-en", faq: aiVisibilityAr.faq },
  { slug: "ai-visibility-ecommerce-en", title: aiVisibilityEn.title, description: "What your store actually needs to appear in AI Overviews, ChatGPT and Gemini: Google's official fundamentals, OpenAI crawlers, and myths to avoid.", date: "2026-10-31", readTime: "6 min read", lang: "en", altSlug: "ai-visibility-ecommerce-ar", faq: aiVisibilityEn.faq },
  { slug: "salla-zid-structured-data-ar", title: structuredDataAr.title, description: "كيف تفحص البيانات المنظمة التي يولدها متجرك على سلة أو زد: اختبار الناتج الحالي، متطلبات قوائم التجار، طريق GTM في سلة، وأخطاء التكرار والتعارض الشائعة.", date: "2026-11-01", readTime: "7 دقائق", lang: "ar", altSlug: "salla-zid-structured-data-en", faq: structuredDataAr.faq },
  { slug: "salla-zid-structured-data-en", title: structuredDataEn.title, description: "How to audit the structured data your Salla or Zid store emits: test current output, merchant listing requirements, Salla's GTM route, and common duplication and mismatch mistakes.", date: "2026-11-01", readTime: "7 min read", lang: "en", altSlug: "salla-zid-structured-data-ar", faq: structuredDataEn.faq },
  { slug: "salla-zid-store-speed-ar", title: storeSpeedAr.title, description: "كيف تقيس سرعة متجرك على سلة أو زد وتحسن ما تملكه فعلًا: الصور، التطبيقات والأكواد الخارجية، واختيار قالب مدعوم، مع حدود ما تملكه المنصة.", date: "2026-11-02", readTime: "7 دقائق", lang: "ar", altSlug: "salla-zid-store-speed-en", faq: storeSpeedAr.faq },
  { slug: "salla-zid-store-speed-en", title: storeSpeedEn.title, description: "How to measure your Salla or Zid store speed and improve what you actually own: images, apps and external scripts, and a supported theme, with honest platform limits.", date: "2026-11-02", readTime: "7 min read", lang: "en", altSlug: "salla-zid-store-speed-ar", faq: storeSpeedEn.faq },
  { slug: "salla-zid-custom-domain-ar", title: customDomainAr.title, description: "خطوات ربط نطاقك الخاص بمتجر سلة أو زد: خوادم الأسماء، مدة التحقق، التفعيل، وخطوات Search Console بعد الربط، مع الأخطاء الشائعة.", date: "2026-11-03", readTime: "7 دقائق", lang: "ar", altSlug: "salla-zid-custom-domain-en", faq: customDomainAr.faq },
  { slug: "salla-zid-custom-domain-en", title: customDomainEn.title, description: "How to connect your own domain to a Salla or Zid store: nameservers, verification time, activation, and the Search Console steps after connecting, with common mistakes.", date: "2026-11-03", readTime: "7 min read", lang: "en", altSlug: "salla-zid-custom-domain-ar", faq: customDomainEn.faq },
];
