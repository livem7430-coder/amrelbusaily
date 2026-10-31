import type { BlogPost } from "@/lib/blog-posts";
import type { ComponentType } from "react";

type Section = { heading: string; paragraphs: string[] };
type Article = { title: string; directAnswer: string; sections: Section[]; faq: { q: string; a: string }[]; serviceHref: string; serviceLabel: string };

const merchantSources = [
 ["Salla: product feeds", "https://help.salla.sa/article/1272723726"],
 ["Zid: Merchant Center integration", "https://helpdesk.zid.sa/en/apps/google-merchant-center"],
 ["Google: product data specification", "https://support.google.com/merchants/answer/7052112?hl=en"],
 ["Google: availability mismatches", "https://support.google.com/merchants/answer/9773127?hl=en"],
];
const aiSources = [
 ["Google: generative AI optimization guide", "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide"],
 ["Google: Search generative AI control", "https://support.google.com/webmasters/answer/16908024?hl=en"],
 ["Google: generative AI performance report", "https://support.google.com/webmasters/answer/16984139?hl=en"],
 ["OpenAI: crawlers", "https://developers.openai.com/api/docs/bots"],
 ["Google: future shared AI training control", "https://developers.google.com/search/blog/2026/10/ai-training-control"],
];

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
      <p>{lang === "ar" ? "راجعت المصادر في 31 أكتوبر 2026. خطوات الفحص المقترحة ليست نتيجة عميل أو فحصًا لحسابك." : "Sources reviewed October 31, 2026. Suggested checks are not a client result or an audit of your account."}</p>
      <ul>{(article === merchantCenterAr || article === merchantCenterEn ? merchantSources : aiSources).map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}</ul>
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
      "أنشئ حساب Merchant Center باسم نشاطك وبلد البيع واربطه بمتجرك على سلة قبل البدء بإرسال البيانات.",
      "اعتمد على الخلاصات بدل الإدخال اليدوي: الخلاصة الأساسية هي المصدر المركزي لبيانات منتجاتك، والخلاصة التكميلية تضيف سمات أو تصححها ولا تصلح قائمة مستقلة بذاتها.",
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
      "Before the first fetch, make sure every product has an image and its required details; incomplete products get rejected and slow down approval for the rest.",
    ]},
    { heading: "Connecting in Salla", paragraphs: [
      "Create a Merchant Center account with your business name and selling country, and link it to your Salla store before sending any data.",
      "Rely on feeds rather than manual entry: the primary feed is the central source of your product data, while supplemental feeds add or correct attributes and cannot act as standalone product lists.",
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

const outOfStockAr: Article = {
  title: "نفاد المخزون في المتاجر الإلكترونية: كيف تدير صفحات المنتجات النافدة دون خسارة الظهور؟",
  directAnswer: "القاعدة العملية: لا تحذف صفحة منتج نفد مؤقتًا؛ أبقها تعمل بنفس الرابط مع توضيح حالة التوفر وعرض بدائل، وحدث سمة التوفر في بيانات المنتج والخلاصة. احذف الصفحة أو حولها فقط عند توقف المنتج نهائيًا، وحينها وجه الرابط إلى أقرب بديل منطقي.",
  sections: [
    { heading: "لماذا حذف صفحة المنتج النافد قرار مكلف؟", paragraphs: [
      "صفحة المنتج تجمع مع الوقت روابط داخلية وخارجية وسجلًا في الفهرسة؛ حذفها يعني التخلي عن هذه القيمة وإرجاع صفحة غير موجودة لزائر قادم من نتيجة بحث.",
      "كثير من المنتجات يعود توفرها؛ إعادة إنشاء الصفحة من الصفر تعني بدء تراكم الظهور من جديد.",
    ]},
    { heading: "القرار الأول: نفاد مؤقت أم توقف نهائي؟", paragraphs: [
      "نفاد مؤقت: أبق الصفحة بنفس الرابط، أظهر حالة عدم التوفر بوضوح، وقدم بدائل من نفس الفئة، وفعال تنبيه العملاء عند عودة التوفر إن كانت منصتك توفره.",
      "توقف نهائي مع وجود بديل مباشر، مثل موديل أحدث يخدم نفس الحاجة: استخدم تحويل 301 إلى البديل.",
      "توقف نهائي بلا بديل منطقي: صفحة غير موجودة مع توجيه واضح للفئة الأم أفضل من صفحة مضللة تعرض منتجًا لا يمكن شراءه.",
    ]},
    { heading: "طابق حالة التوفر بين المتجر والخلاصة والبيانات المنظمة", paragraphs: [
      "يقارن Google حالة التوفر في خلاصة Merchant Center بما تظهره صفحة الهبوط؛ التعارض يصنف بيانات غير دقيقة وقد يؤدي لرفض المنتج.",
      "حدث سمة التوفر availability في الخلاصة عند نفاد المنتج وعند عودته، ولا تتركها متوفر بينما الصفحة تقول غير متوفر.",
      "تأكد أن البيانات المنظمة للمنتج تعكس الحالة نفسها الظاهرة للزائر؛ تعليمات Google صريحة بضرورة تطابق البيانات المنظمة مع المحتوى المرئي.",
    ]},
    { heading: "حول صفحة النافد إلى مسار بديل", paragraphs: [
      "اعرض منتجات قريبة فعلًا في الاستخدام والسعر، لا قائمة عشوائية؛ البديل الجيد ينقذ البيع ويقلل خروج الزائر.",
      "إن وفر متجرك تنبيه العملاء عند توفر المنتج فعله؛ قائمة الانتظار تحول الطلب المؤجل إلى بيع لاحق.",
      "حافظ على المحتوى المفيد في الصفحة من وصف ومواصفات وتقييمات، فهو ما يبقي قيمتها للبحث أثناء فترة النفاد.",
    ]},
    { heading: "تجنب الفخاخ الشائعة", paragraphs: [
      "لا تنشئ صفحات أو فلاتر خاصة بالمنتجات النافدة قابلة للفهرسة؛ هي صفحات رقيقة تستهلك الزحف بلا قيمة بحثية.",
      "راجع تقارير الفهرسة دوريًا لاكتشاف صفحات تركت بحالة خاطئة أو تحويلات متسلسلة تراكمت مع الوقت.",
      "لا تخف المنتجات النافدة من الفئات إخفاء يكسر الروابط الداخلية؛ الترتيب الذكي يقدم المتوفر مع إبقاء صفحات النافد قابلة للوصول.",
    ]},
  ],
  faq: [
    { q: "هل أضع noindex على صفحة المنتج النافد مؤقتًا؟", a: "لا في الحالات المعتادة؛ الصفحة ما زالت تجيب طلب بحث حقيقي وقد يعود المنتج. إخراجها من الفهرسة يحتاج وقتًا لاستعادتها بعد عودة التوفر." },
    { q: "متى يكون حذف الصفحة مقبولًا؟", a: "عند توقف المنتج نهائيًا دون أي بديل قريب، مع قبول خسارة ما جمعته الصفحة من روابط وسجل. إن وجد بديل منطقي فالتحويل 301 أولى." },
    { q: "هل نفاد منتجات كثيرة يضر المتجر كله؟", a: "الضرر الأكبر على تجربة العميل وضياع الطلب، لا عقوبة مباشرة من Google. لكن تراكم صفحات ميتة أو مضللة يهدر الزحف ويضعف الثقة، فتعامل معه كأولوية تشغيل." },
  ],
  serviceHref: "/ar/services/ecommerce-store-services",
  serviceLabel: "تعرف على خدمة تحسين متاجر سلة وزد",
};

const outOfStockEn: Article = {
  title: "Out-of-Stock Products in E-commerce: Manage Unavailable Pages Without Losing Visibility",
  directAnswer: "The working rule: never delete the page of a temporarily out-of-stock product. Keep it live at the same URL with a clear availability state and alternatives, and update the availability attribute in both the product data and the feed. Only remove or redirect the page when the product is permanently discontinued, and then point the URL to the closest logical alternative.",
  sections: [
    { heading: "Why deleting the page is expensive", paragraphs: [
      "A product page accumulates internal and external links and an indexing history over time; deleting it throws that value away and returns a not-found page to a visitor arriving from search.",
      "Many products come back in stock; recreating the page from scratch means rebuilding its visibility from zero.",
    ]},
    { heading: "First decision: temporary or permanent?", paragraphs: [
      "Temporarily out of stock: keep the page at the same URL, show the unavailable state clearly, offer alternatives from the same category, and enable back-in-stock alerts if your platform provides them.",
      "Permanently discontinued with a direct substitute, such as a newer model serving the same need: use a 301 redirect to that substitute.",
      "Permanently discontinued with no logical alternative: a clear not-found page pointing to the parent category beats a misleading page selling something that cannot be bought.",
    ]},
    { heading: "Match availability across store, feed and structured data", paragraphs: [
      "Google compares the availability in your Merchant Center feed with what the landing page shows; conflicts are treated as inaccurate data and can get the item disapproved.",
      "Update the availability attribute in the feed when a product goes out of stock and when it returns; never leave it marked available while the page says otherwise.",
      "Make sure the product's structured data reflects the same state visible to visitors; Google explicitly requires structured data to match visible content.",
    ]},
    { heading: "Turn the unavailable page into an alternative path", paragraphs: [
      "Show products that are genuinely close in use and price, not a random list; a good substitute saves the sale and keeps the visitor.",
      "If your store offers back-in-stock alerts, enable them; a real waiting list converts deferred demand into a later sale.",
      "Keep the useful page content - description, specifications, real reviews - because that is what preserves the page's search value during the outage.",
    ]},
    { heading: "Common traps to avoid", paragraphs: [
      "Do not create indexable pages or filters dedicated to out-of-stock items; they are thin pages that consume crawl without search value.",
      "Review indexing reports regularly to catch pages left in the wrong state or redirect chains that accumulated over time.",
      "Do not hide out-of-stock products from categories in a way that breaks internal links; rank available items first while keeping the unavailable pages reachable.",
    ]},
  ],
  faq: [
    { q: "Should I noindex a temporarily out-of-stock product page?", a: "Usually no. The page still answers real search demand and the product may return. Removing it from the index takes time to recover once it is back in stock." },
    { q: "When is deleting the page acceptable?", a: "When the product is permanently discontinued with no close alternative, and you accept losing the links and history it earned. If a logical substitute exists, a 301 redirect is the better path." },
    { q: "Does having many unavailable products hurt the whole store?", a: "The biggest damage is to the customer experience and lost demand, not a direct Google penalty. But accumulating dead or misleading pages wastes crawling and weakens trust, so treat it as an operational priority." },
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
      "اجمع تقييمات حقيقية بإجراءات نظامية؛ الإجابات عن أفضل منتج أو متجر تستند إلى إشارات ثقة عامة.",
      "راجع robots.txt وإعدادات منصتك للتأكد من عدم حظر زواحف البحث عن غير قصد.",
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
      "Collect genuine reviews through proper processes; answers about the best product or store lean on public trust signals.",
      "Review robots.txt and your platform settings to make sure search crawlers are not blocked by accident.",
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

export const sallaZidMerchantRegistry: Record<string, ComponentType> = {
  "salla-zid-merchant-center-ar": () => <ArticleView article={merchantCenterAr} lang="ar" />,
  "salla-zid-merchant-center-en": () => <ArticleView article={merchantCenterEn} lang="en" />,
  "ai-visibility-ecommerce-ar": () => <ArticleView article={aiVisibilityAr} lang="ar" />,
  "ai-visibility-ecommerce-en": () => <ArticleView article={aiVisibilityEn} lang="en" />,
};

export const sallaZidMerchantPosts: BlogPost[] = [
  { slug: "salla-zid-merchant-center-ar", title: merchantCenterAr.title, description: "خطوات ربط متجر سلة أو زد بـ Google Merchant Center: إنشاء الخلاصة، السمات المطلوبة لقبول المنتجات، وأخطاء التطابق الشائعة بين الخلاصة وصفحة المنتج.", date: "2026-10-31", readTime: "10 دقائق", lang: "ar", altSlug: "salla-zid-merchant-center-en", faq: merchantCenterAr.faq },
  { slug: "salla-zid-merchant-center-en", title: merchantCenterEn.title, description: "How to connect a Salla or Zid store to Google Merchant Center: feed creation, the attributes product approval depends on, and common feed-to-page mismatch errors.", date: "2026-10-31", readTime: "10 min read", lang: "en", altSlug: "salla-zid-merchant-center-ar", faq: merchantCenterEn.faq },
  { slug: "ai-visibility-ecommerce-ar", title: aiVisibilityAr.title, description: "ما الذي يحتاجه متجرك فعلًا للظهور في AI Overviews وChatGPT وGemini: أساسيات جوجل الرسمية، زواحف OpenAI، وخرافات يجب تجنبها.", date: "2026-10-31", readTime: "11 دقيقة", lang: "ar", altSlug: "ai-visibility-ecommerce-en", faq: aiVisibilityAr.faq },
  { slug: "ai-visibility-ecommerce-en", title: aiVisibilityEn.title, description: "What your store actually needs to appear in AI Overviews, ChatGPT and Gemini: Google's official fundamentals, OpenAI crawlers, and myths to avoid.", date: "2026-10-31", readTime: "11 min read", lang: "en", altSlug: "ai-visibility-ecommerce-ar", faq: aiVisibilityEn.faq },
];
