import type { ReactNode } from "react";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";

type Language = "ar" | "en";
type Mode = "keyword" | "content";
type Copy = {
  title: string;
  description: string;
  eyebrow: string;
  heading: ReactNode;
  intro: string;
  answer: string;
  pointsTitle: string;
  points: { title: string; body: string }[];
  processTitle: string;
  process: { number: string; title: string; body: string }[];
  fitTitle: string;
  fitBody: string;
  faqTitle: string;
  faq: { q: string; a: string }[];
  ctaTitle: string;
  ctaBody: string;
  cta: string;
};

const base = "https://amrelbusaily.vercel.app";

function copy(lang: Language, mode: Mode): Copy {
  if (lang === "ar") {
    if (mode === "keyword") {
      return {
        title: "خدمة بحث الكلمات المفتاحية وتحليلها | Amr Elbusaily",
        description: "خدمة Keyword Research تربط الكلمات بنية البحث والصفحة والفرصة التجارية لشركات الخدمات وB2B والمتاجر بالعربي والإنجليزي.",
        eyebrow: "KEYWORD RESEARCH · MAPPING · INTENT",
        heading: <>بحث كلمات مفتاحية يربط <span className="text-gradient">البحث بالقرار.</span></>,
        intro: "بحث الكلمات المفتاحية ليس جمع أكبر عدد من العبارات في ملف Excel. هو فهم ما الذي يقصده الباحث، وما الصفحة التي تستطيع الإجابة، وهل توجد فرصة حقيقية للوصول إلى عميل أو مستخدم.",
        answer: "خدمة Keyword Research الجيدة تنتج خريطة قابلة للتنفيذ: كلمة أو مجموعة كلمات، نية البحث، السوق واللغة، الصفحة المناسبة، مستوى الأولوية، وما يحتاجه المحتوى أو المنتج كي ينافس. نستخدمها لبناء صفحات خدمات ومقالات وفئات منتجات بدل حشو الكلمات في صفحة واحدة.",
        pointsTitle: "ماذا تشمل خدمة بحث الكلمات؟",
        points: [
          { title: "اكتشاف لغة العميل", body: "نبدأ من أسئلة المبيعات، أسماء الخدمات والمنتجات، اعتراضات العملاء، ومراحل القرار. الكلمات التي يقولها الفريق داخليًا قد تختلف عن الطريقة التي يبحث بها السوق، لذلك نربط الاثنين قبل اختيار الأهداف." },
          { title: "تحليل نية البحث", body: "نميز بين الباحث الذي يريد تعريفًا، مقارنة، حل مشكلة، خدمة، سعرًا أو شراءً. نفس الكلمة قد تحتاج مقالًا في مرحلة وصفحة خدمة في مرحلة أخرى، والنية هي التي تحدد الوجهة." },
          { title: "Keyword Mapping وClustering", body: "نجمع الكلمات المتقاربة في مجموعات منطقية ونربط كل مجموعة بعنوان URL واحد عند الحاجة. هذا يقلل التنافس الداخلي ويمنع إنتاج عشر مقالات تقول الشيء نفسه بصيغ مختلفة." },
          { title: "فجوة المنافسين والفرصة", body: "نراجع نوع الصفحات التي تظهر، عمقها، أسئلتها، ونقاط ضعفها. لا ننسخ المنافسين ولا نعتبر حجم البحث وحده قرارًا؛ نبحث عن تقاطع الطلب والقيمة وقدرة الموقع على التنفيذ." },
          { title: "أولوية مرتبطة بالبزنس", body: "نعطي الأولوية للكلمات التي تخدم خدمة أو منتجًا أو مرحلة واضحة في القمع، مع تقدير الجهد والاعتمادات. كلمة كبيرة بلا قدرة على تحويل الزائر قد تكون أقل قيمة من استعلام أقل شهرة لكنه قريب من الشراء." },
          { title: "خريطة عربية وإنجليزية", body: "عند استهداف لغتين، نحدد ما إذا كان الموضوع نفسه مطلوبًا باللغتين وما الذي يجب توطينه. لا نعتمد على ترجمة حرفية أو تبديل اسم الدولة داخل الصفحة، بل على سياق واحتياجات الجمهور." },
        ],
        processTitle: "من القائمة إلى خطة نشر",
        process: [
          { number: "01", title: "تحديد السوق والهدف", body: "نثبت الخدمة أو المنتج، الجمهور، الأسواق، اللغة، نموذج التحويل، والصفحات الموجودة حتى لا تصبح الخريطة منفصلة عن المشروع." },
          { number: "02", title: "جمع وتنظيف البيانات", body: "نجمع الصيغ والأسئلة والمرادفات ونفصل الكلمات المتشابهة عن الكلمات التي تحمل نوايا مختلفة. ثم نراجع النتائج الفعلية بدل الاعتماد على قائمة آلية فقط." },
          { number: "03", title: "تجميع وربط بالصفحات", body: "كل مجموعة تحصل على صفحة مقصودة، نوع محتوى، عنوان عمل، روابط داخلية، وأسئلة FAQ قابلة للإجابة. الكلمات التي لا تحتاج صفحة مستقلة تبقى ضمن مجموعة مناسبة." },
          { number: "04", title: "ترتيب التنفيذ والقياس", body: "نحدد ما يطلق أولًا وما يحتاج بيانات أو تطويرًا، ثم نتابع الظهور والنقرات وجودة الزيارة والإشارات التجارية ونحدث الخريطة مع التعلم." },
        ],
        fitTitle: "متى تحتاج Keyword Research؟",
        fitBody: "تحتاجها عندما يكون لديك محتوى كثير بلا اتجاه، أو صفحات لا تعرف أي كلمة تستهدف، أو سوق جديد، أو توسع بين العربي والإنجليزي، أو فريق كتابة يحتاج brief واضحًا قبل الإنتاج.",
        faqTitle: "أسئلة عن خدمة بحث الكلمات المفتاحية",
        faq: [
          { q: "هل تسلّمون قائمة كلمات فقط؟", a: "لا. القيمة الأساسية هي ربط الكلمة بالنية والصفحة والأولوية والـFAQ والروابط، حتى يستطيع فريق المحتوى أو التطوير تحويل البحث إلى عمل." },
          { q: "هل تستهدفون الكلمات ذات أعلى حجم بحث؟", a: "ليس دائمًا. نقارن بين نية الباحث وقيمة العميل والمنافسة وقدرة الموقع. قد تكون عبارة أقل حجمًا أكثر فائدة إذا كانت قريبة من طلب الخدمة أو الشراء." },
          { q: "هل تشمل الخدمة الكلمات العربية والإنجليزية؟", a: "نعم عند الحاجة. نراجع الطلب في كل لغة ونحدد ما يحتاج ترجمة وما يحتاج توطينًا مستقلًا، مع ربط النسخ دون خلط التجربة." },
          { q: "كم كلمة يمكن أن تتضمنها الخريطة؟", a: "لا يوجد رقم مفيد منفصل عن حجم الموقع والهدف. الخريطة الجيدة قد تحتوي مئات العبارات لكنها مرتبة في مجموعات وصفحات قابلة للتنفيذ، لا قائمة ضخمة بلا قرار." },
        ],
        ctaTitle: "حوّل قائمة الكلمات إلى قرارات",
        ctaBody: "أرسل رابط موقعك وهدف النمو والسوق الذي تستهدفه، وسنحدد إن كانت نقطة البداية بحث كلمات أو أوديت أو تحسين صفحات موجودة.",
        cta: "اطلب Keyword Research",
      };
    }
    return {
      title: "خدمات Content SEO وكتابة محتوى متوافق مع السيو | Amr Elbusaily",
      description: "خدمات Content SEO تشمل الاستراتيجية والـbrief والكتابة والتحسين والتحديث لشركات الخدمات وB2B والمتاجر بالعربي والإنجليزي.",
      eyebrow: "CONTENT SEO · STRATEGY · QUALITY",
      heading: <>محتوى SEO يجيب عن السؤال <span className="text-gradient">ويحرّك الخطوة التالية.</span></>,
      intro: "Content SEO ليس إدخال الكلمة المفتاحية في عنوان ثم انتظار النتيجة. هو بناء محتوى يطابق نية البحث، يشرح الموضوع بوضوح، يثبت الخبرة، ويوجه القارئ إلى خطوة منطقية داخل الموقع.",
      answer: "خدمة Content SEO تبدأ من استراتيجية وخريطة كلمات، ثم تحول كل موضوع إلى brief واضح ومقال أو صفحة مفيدة. نراجع الهيكل، العنوان، الإجابة المباشرة، الأمثلة، الروابط الداخلية، الـFAQ، وتجربة القراءة، ثم نحدد ما يحتاج تحديثًا بعد ظهور البيانات.",
      pointsTitle: "ما الذي يميز Content SEO الجيد؟",
      points: [
        { title: "موضوع له وظيفة", body: "كل صفحة تحتاج دورًا: جذب بحث تعليمي، دعم قرار تجاري، شرح خدمة، أو مساعدة مستخدم. إذا لم نعرف الوظيفة، يتحول المقال إلى نص طويل لا يخدم القارئ ولا المبيعات." },
        { title: "إجابة مبكرة ثم عمق", body: "نبدأ بإجابة مباشرة على السؤال، ثم نضيف السياق والخطوات والمفاضلات والأخطاء والقياس. هذا يخدم القارئ الذي يريد إجابة سريعة والقارئ الذي يحتاج قرارًا كاملًا." },
        { title: "صوت طبيعي لا حشو", body: "ننوّع الإيقاع والأمثلة والانتقالات، ونحذف المقدمات الفارغة والتكرار. الكتابة يجب أن تبدو كشرح من شخص فاهم للمشكلة، لا قالبًا يعاد على كل كلمة." },
        { title: "ربط المحتوى بالتحويل", body: "نضع روابط إلى صفحة الخدمة أو المنتج أو الدليل التالي عندما تكون مفيدة، ونوضح ما الذي يمكن للزائر فعله. لا نضغط على القارئ بعبارات بيع لا علاقة لها بالسؤال." },
        { title: "FAQ وAEO/GEO", body: "نستخرج الأسئلة الفعلية ونجيب عنها بوضوح داخل الصفحة. يمكن إضافة Schema عندما تنطبق الشروط، لكن وجود الأسئلة والجواب المفيد أهم من حشو markup." },
        { title: "تحديث مبني على البيانات", body: "نراجع الاستعلامات والصفحات التي تعرضت في Search Console، ونحسن الفقرات والعناوين والروابط عندما يظهر دليل. التحديث ليس تغيير التاريخ فقط، بل إضافة قيمة حقيقية." },
      ],
      processTitle: "كيف ننتج محتوى يستحق الظهور؟",
      process: [
        { number: "01", title: "اختيار الموضوع والنية", body: "نحدد الباحث وما الذي يريد إنجازه، والصفحة التي تناسبه، ومكان الموضوع داخل رحلة العميل والعنقود الداخلي." },
        { number: "02", title: "إنشاء brief قابل للكتابة", body: "نحدد الوعد، الأسئلة، الأقسام، الأمثلة، المصادر أو البيانات المطلوبة، الروابط، الـCTA، ومعايير عدم التكرار قبل بدء الكتابة." },
        { number: "03", title: "كتابة ومراجعة تحريرية", body: "نكتب نسخة طبيعية دقيقة، ثم نراجع وضوحها وتسلسلها ومصطلحاتها وملاءمتها للجمهور. النسخة العربية ليست ترجمة حرفية من الإنجليزية." },
        { number: "04", title: "نشر وتحسين", body: "نراجع العنوان والوصف وSchema والروابط وتجربة القراءة، ثم نراقب النتائج ونحدث الصفحات بناءً على بيانات حقيقية لا على التخمين." },
      ],
      fitTitle: "لمن تناسب خدمة Content SEO؟",
      fitBody: "تناسب شركات الخدمات وB2B وSaaS والمتاجر التي لديها خبرة أو عروض جيدة لكنها لا تشرحها في صفحاتها، أو تنتج محتوى بلا خريطة، أو تحتاج إلى توسيع عربي وإنجليزي بجودة ثابتة.",
      faqTitle: "أسئلة عن Content SEO",
      faq: [
        { q: "هل Content SEO يعني كتابة مقالات كثيرة؟", a: "ليس بالضرورة. الأفضل هو عدد مناسب من الصفحات التي تخدم نوايا واضحة، مع تحديث وربط وتحسين، بدل نشر مقالات كثيرة متشابهة." },
        { q: "هل تكتبون بالعربي والإنجليزي؟", a: "نعم. نكتب كل نسخة للجمهور واللغة المقصودة، مع فصل المحتوى وربطه تقنيًا عند الحاجة. الترجمة الحرفية ليست بديلًا عن التحرير المحلي." },
        { q: "هل يمكن استخدام AI في إنتاج المحتوى؟", a: "يمكن استخدامه كمساعد في البحث أو المسودة، لكن الجودة تحتاج brief ومراجعة بشرية وخبرة وأمثلة حقيقية. لا ننشر نصًا عامًا لمجرد زيادة عدد الصفحات." },
        { q: "كيف نقيس نجاح المحتوى؟", a: "نراجع الظهور والنقرات والصفحات المقصودة، ثم نربطها بجودة الزيارة والاستفسارات أو التحويلات عندما تتوفر البيانات. الترتيب وحده لا يشرح قيمة الصفحة." },
      ],
      ctaTitle: "ابنِ نظام محتوى بدل مقالات متفرقة",
      ctaBody: "شارك موقعك والجمهور والخدمات التي تريد دعمها، وسنحدد الموضوعات والصفحات التي تستحق الأولوية.",
      cta: "اطلب خطة Content SEO",
    };
  }

  if (mode === "keyword") {
    return {
      title: "Keyword Research Service and SEO Keyword Strategy | Amr Elbusaily",
      description: "Keyword research that maps search intent, topics and pages to qualified demand for service businesses, B2B, SaaS and e-commerce in Arabic and English markets.",
      eyebrow: "KEYWORD RESEARCH · MAPPING · INTENT",
      heading: <>Keyword research that connects <span className="text-gradient">search to decisions.</span></>,
      intro: "Keyword research is not collecting the largest possible list in a spreadsheet. It is understanding what a searcher means, which page can answer it, and whether the opportunity can lead to a customer or user.",
      answer: "A useful keyword research service produces an implementation map: query or cluster, search intent, market and language, destination page, priority and the content or product work needed to compete. It turns research into service pages, articles and category pages instead of stuffing one page with every phrase.",
      pointsTitle: "What the keyword research service includes",
      points: [
        { title: "Customer language discovery", body: "We start with sales questions, offers, products, objections and buying stages. The language used internally may differ from the language used in search, so we connect the two before selecting targets." },
        { title: "Search intent analysis", body: "We separate informational, comparison, problem-solving, service, pricing and purchase intent. The same phrase can require an article in one context and a service page in another." },
        { title: "Keyword mapping and clustering", body: "Related queries are grouped into logical topic units and mapped to a sensible URL. This reduces cannibalization and prevents publishing several articles that answer the same question." },
        { title: "Competitor gaps and opportunity", body: "We review the page types, depth, questions and weaknesses present in the search results. We do not copy competitors or treat volume as the only decision signal." },
        { title: "Business-led prioritization", body: "Priorities reflect customer value, intent, competition, effort and delivery dependencies. A large query with no path to conversion may be less valuable than a smaller query close to a commercial action." },
        { title: "Arabic and English mapping", body: "For bilingual projects, we check whether the topic exists in both languages and what needs localization. Swapping a country name or translating literally is not an international strategy." },
      ],
      processTitle: "From keyword list to publishing plan",
      process: [
        { number: "01", title: "Set the market and goal", body: "We define the offer, audience, markets, language, conversion model and existing pages so the map stays connected to the business." },
        { number: "02", title: "Collect and clean evidence", body: "We gather variations, questions and related terms, separating close variants from queries with different intent. Search results are reviewed instead of relying on an automated list alone." },
        { number: "03", title: "Cluster and assign pages", body: "Each group receives a destination, content type, working title, internal links, priority and FAQ questions. Queries that do not need a new page remain in a useful cluster." },
        { number: "04", title: "Sequence and measure", body: "We decide what to launch first, what needs development or data, then monitor visibility, clicks, visit quality and commercial signals as the map evolves." },
      ],
      fitTitle: "When do you need keyword research?",
      fitBody: "It helps when you have content without direction, pages with unclear targets, a new market, a bilingual expansion or a content team that needs a useful brief before production.",
      faqTitle: "Questions about keyword research",
      faq: [
        { q: "Do you deliver only a keyword list?", a: "No. The value is connecting queries to intent, pages, priorities, FAQs and internal links so content and development teams can act on the research." },
        { q: "Do you always target the highest-volume keywords?", a: "Not always. We compare intent, customer value, competition and the site’s ability to deliver. A lower-volume query can be more useful when it is close to a service or purchase decision." },
        { q: "Does the service cover Arabic and English?", a: "Yes when needed. We review demand in each language and decide what needs translation versus localized treatment, then keep the experiences connected without mixing them." },
        { q: "How many keywords can a map contain?", a: "There is no useful number without the site and objective. A strong map may contain hundreds of phrases, but they are organized into executable page groups rather than a large list with no decisions." },
      ],
      ctaTitle: "Turn a keyword list into decisions",
      ctaBody: "Share your website, growth goal and target market. We will identify whether keyword research, an audit or page optimization is the right starting point.",
      cta: "Request keyword research",
    };
  }
  return {
    title: "Content SEO Services and SEO Content Strategy | Amr Elbusaily",
    description: "Content SEO strategy, briefs, writing, optimization and refreshes for service businesses, B2B, SaaS and e-commerce across Arabic and English markets.",
    eyebrow: "CONTENT SEO · STRATEGY · QUALITY",
    heading: <>Content SEO that answers the question <span className="text-gradient">and moves the next step.</span></>,
    intro: "Content SEO is not placing a keyword in a title and waiting. It is building a page that matches intent, explains the subject clearly, demonstrates experience and guides a reader toward a logical next action.",
    answer: "A Content SEO service starts with strategy and keyword mapping, then turns each topic into a clear brief and useful article or page. We review structure, early answers, examples, internal links, FAQs and reading experience, then identify what should be refreshed after evidence appears.",
    pointsTitle: "What makes Content SEO useful",
    points: [
      { title: "A page with a job", body: "Every page needs a role: attract educational demand, support a commercial decision, explain a service or help a user. Without a job, an article becomes long text that serves neither readers nor revenue." },
      { title: "An early answer with depth", body: "We answer the question early, then add context, steps, trade-offs, mistakes and measurement. This helps readers who want a quick answer and readers who need a complete decision." },
      { title: "Natural voice, not filler", body: "We vary rhythm, examples and transitions, removing empty introductions and repeated conclusions. The page should sound like a clear explanation from someone who understands the problem." },
      { title: "Content connected to action", body: "We link to a service, product or next guide when useful and make the next step understandable. We do not interrupt an informational answer with unrelated sales copy." },
      { title: "FAQ and answer readiness", body: "Real questions are extracted and answered clearly on the page. Structured data can help when it applies, but useful visible answers matter more than adding markup for its own sake." },
      { title: "Refreshes based on evidence", body: "We review queries and pages shown in Search Console, improving sections, titles and links when the data suggests a gap. A refresh adds value; it is not just changing the date." },
    ],
    processTitle: "How we produce content worth finding",
    process: [
      { number: "01", title: "Choose topic and intent", body: "We define what the searcher wants to accomplish, the right page type, and the topic’s role in the customer journey and internal cluster." },
      { number: "02", title: "Create a usable brief", body: "We define the promise, questions, sections, examples, evidence, links, CTA and non-duplication rules before writing starts." },
      { number: "03", title: "Write and edit", body: "We produce a clear, natural draft and review its sequence, terminology, usefulness and audience fit. The Arabic version is not a literal translation of English." },
      { number: "04", title: "Publish and improve", body: "We review title, description, schema, links and reading experience, then monitor and update pages based on evidence rather than guesswork." },
    ],
    fitTitle: "Who is Content SEO for?",
    fitBody: "It fits service companies, B2B, SaaS and e-commerce brands with good expertise or offers that are not clearly explained, content without a map, or a need to expand in Arabic and English without lowering quality.",
    faqTitle: "Questions about Content SEO",
    faq: [
      { q: "Does Content SEO mean publishing many articles?", a: "Not necessarily. The goal is an appropriate set of pages serving clear intent, supported by updates and internal links, rather than many similar articles." },
      { q: "Do you write in Arabic and English?", a: "Yes. Each version is written for its audience and language, with technical connections when needed. Literal translation is not a substitute for editorial localization." },
      { q: "Can AI be used in content production?", a: "It can assist research or a first draft, but quality needs a brief, human review, expertise and relevant examples. We do not publish generic text just to increase page count." },
      { q: "How do we measure content success?", a: "We review visibility, clicks and destination pages, then connect them to visit quality, enquiries or conversions when the data exists. Rankings alone do not explain page value." },
    ],
    ctaTitle: "Build a content system, not scattered articles",
    ctaBody: "Share your website, audience and services you want to support. We will identify the topics and pages that deserve priority.",
    cta: "Request a Content SEO plan",
  };
}

export function keywordContentHead(lang: Language, mode: Mode) {
  const data = copy(lang, mode);
  const path = mode === "keyword" ? "keyword-research" : "content-seo";
  const url = `${base}/${lang === "ar" ? `ar/${path}` : path}`;
  const alternate = `${base}/${lang === "ar" ? path : `ar/${path}`}`;
  return {
    meta: [
      { title: data.title },
      { name: "description", content: data.description },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { property: "og:title", content: data.title },
      { property: "og:description", content: data.description },
      { property: "og:type", content: "service" },
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
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: data.title,
        description: data.description,
        url,
        inLanguage: lang,
        serviceType: mode === "keyword" ? "SEO keyword research and strategy" : "SEO content strategy and optimization",
        provider: { "@type": "Person", name: "Amr Elbusaily", url: base, jobTitle: "SEO and digital growth strategist" },
        areaServed: ["Worldwide", "MENA", "United States", "Europe"],
      }),
    }],
  };
}

export function KeywordContentServicePage({ lang, mode }: { lang: Language; mode: Mode }) {
  const data = copy(lang, mode);
  const ar = lang === "ar";
  const related = ar
    ? [
        { label: "خدمات SEO", href: "/ar/seo-services" },
        { label: "خبير SEO", href: "/ar/seo-expert" },
        { label: "شركة SEO", href: "/ar/seo-company" },
        { label: "بحث الكلمات", href: "/ar/keyword-research" },
        { label: "Content SEO", href: "/ar/content-seo" },
        { label: "الأوديت التقني", href: "/blog/technical-seo-audit-ar" },
        { label: "International SEO", href: "/ar/international-seo" },
      ]
    : [
        { label: "SEO services", href: "/seo-services" },
        { label: "SEO expert", href: "/seo-expert" },
        { label: "SEO company", href: "/seo-company" },
        { label: "Keyword Research", href: "/keyword-research" },
        { label: "Content SEO", href: "/content-seo" },
        { label: "Technical SEO audit", href: "/blog/technical-seo-audit-en" },
        { label: "International SEO", href: "/international-seo" },
      ];
  return (
    <div className="min-h-screen" dir={ar ? "rtl" : "ltr"} lang={lang}>
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href={ar ? "/ar" : "/"} className="flex items-center gap-2 font-display font-semibold"><span className="grid h-8 w-8 place-items-center rounded-md bg-primary font-mono text-sm text-primary-foreground">AE</span><span>Amr Elbusaily</span></a>
          <nav className="flex items-center gap-4 text-sm text-muted-foreground"><a href={ar ? "/blog/ar" : "/blog/en"} className="hover:text-foreground">{ar ? "المقالات" : "Articles"}</a><a href={ar ? "/ar/seo-expert" : "/seo-expert"} className="hover:text-foreground">{ar ? "خبير SEO" : "SEO Expert"}</a><a href={ar ? "/" : "/ar"} className="font-mono text-xs hover:text-foreground">{ar ? "EN" : "AR"}</a></nav>
        </div>
      </header>
      <main>
        <section className="relative overflow-hidden border-b border-border"><div className="absolute inset-0 grid-bg" aria-hidden="true" /><div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28"><div className="max-w-4xl"><div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{data.eyebrow}</div><h1 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">{data.heading}</h1><p className="mt-6 max-w-3xl text-lg leading-9 text-muted-foreground">{data.intro}</p><div className="mt-8 flex flex-wrap gap-3"><a href="mailto:amreelbasily@gmail.com?subject=SEO%20strategy" className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground glow-primary">{data.cta}</a><a href={ar ? "/ar/seo-expert" : "/seo-expert"} className="rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium hover:border-primary hover:text-primary">{ar ? "ناقش استراتيجية SEO" : "Discuss SEO strategy"}</a></div></div></div></section>
        <section className="border-b border-border bg-surface/30"><div className="mx-auto max-w-6xl px-6 py-16"><div className="rounded-2xl border border-primary/30 bg-primary/5 p-7 md:p-10"><div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{ar ? "الإجابة المباشرة" : "The direct answer"}</div><p className="mt-4 max-w-4xl text-xl leading-9">{data.answer}</p></div></div></section>
        <section className="mx-auto max-w-6xl px-6 py-20"><div className="max-w-2xl"><div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{ar ? "نطاق الخدمة" : "Service scope"}</div><h2 className="mt-3 text-3xl font-semibold md:text-4xl">{data.pointsTitle}</h2></div><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{data.points.map((point, i) => <article key={point.title} className="rounded-2xl border border-border bg-surface p-7"><div className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</div><h3 className="mt-4 text-xl font-semibold">{point.title}</h3><p className="mt-3 leading-8 text-muted-foreground">{point.body}</p></article>)}</div></section>
        <section className="border-y border-border bg-surface/30"><div className="mx-auto max-w-6xl px-6 py-20"><div className="max-w-2xl"><div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{ar ? "طريقة العمل" : "How it works"}</div><h2 className="mt-3 text-3xl font-semibold md:text-4xl">{data.processTitle}</h2></div><div className="mt-10 grid gap-0 border-y border-border">{data.process.map((step) => <div key={step.number} className="grid gap-4 border-b border-border py-7 last:border-b-0 md:grid-cols-[80px_1fr_1.5fr] md:items-start md:gap-8"><div className="font-mono text-sm text-primary">{step.number}</div><h3 className="text-xl font-semibold">{step.title}</h3><p className="leading-8 text-muted-foreground">{step.body}</p></div>)}</div></div></section>
        <section className="mx-auto max-w-6xl px-6 py-20"><div className="grid gap-6 md:grid-cols-2"><div className="rounded-2xl border border-border bg-surface p-8"><h2 className="text-2xl font-semibold">{data.fitTitle}</h2><p className="mt-4 leading-8 text-muted-foreground">{data.fitBody}</p></div><div className="rounded-2xl border border-border bg-surface p-8"><h2 className="text-2xl font-semibold">{ar ? "جودة قابلة للمراجعة" : "Reviewable quality"}</h2><p className="mt-4 leading-8 text-muted-foreground">{ar ? "نوضح لماذا اختير الموضوع أو الكلمة، وما الصفحة المقصودة، وما الذي يحتاجه التنفيذ. لا نخلط بين زيادة عدد الصفحات وبين بناء أصل مفيد للموقع." : "We explain why a topic or query was selected, which page should own it and what implementation needs to happen. More URLs are not confused with a useful site asset."}</p></div></div></section>
        <CaseStudiesSection lang={lang} mode={mode} />
        <section className="border-y border-border bg-surface/30"><div className="mx-auto max-w-6xl px-6 py-20"><div className="max-w-2xl"><div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">FAQ</div><h2 className="mt-3 text-3xl font-semibold md:text-4xl">{data.faqTitle}</h2></div><div className="mt-10 grid gap-4 md:grid-cols-2">{data.faq.map((item) => <details key={item.q} className="group rounded-xl border border-border bg-surface p-6"><summary className="cursor-pointer list-none text-lg font-semibold">{item.q}</summary><p className="mt-4 leading-8 text-muted-foreground">{item.a}</p></details>)}</div></div></section>
        <section className="border-t border-border"><div className="mx-auto max-w-6xl px-6 py-20"><div className="rounded-2xl border border-border bg-surface p-8 md:p-12"><h2 className="text-3xl font-semibold md:text-4xl">{data.ctaTitle}</h2><p className="mt-4 max-w-2xl leading-8 text-muted-foreground">{data.ctaBody}</p><div className="mt-7 flex flex-wrap gap-4"><a href="mailto:amreelbasily@gmail.com?subject=SEO%20strategy" className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">{data.cta}</a>{related.map((link) => <a key={link.href} href={link.href} className="rounded-md border border-border px-5 py-3 text-sm text-muted-foreground hover:border-primary hover:text-primary">{link.label}</a>)}</div></div></div></section>
      </main>
      <footer className="border-t border-border"><div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 px-6 py-8 text-sm text-muted-foreground"><span>© {new Date().getFullYear()} Amr Elbusaily</span><span>SEO · Digital Marketing · AI Growth · E-commerce</span></div></footer>
    </div>
  );
}
