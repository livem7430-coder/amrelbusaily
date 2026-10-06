import { useEffect, useMemo, useState } from "react";
import { Check, ClipboardList, Copy, Download, FileCheck2, History, Lock, MessageCircle, ShieldCheck, Sparkles, Upload, UserCheck } from "lucide-react";
import type { Lang } from "@/lib/seo-audit-copy";

const base = "https://amrelbusaily.vercel.app";
const WA = "https://api.whatsapp.com/send/";
const waLink = (text: string) => `${WA}?text=${encodeURIComponent(text.slice(0, 1500))}&username=amrelbusaily&type=username&app_absent=0`;

const ui = {
  en: {
    dir: "ltr", home: "/", suite: "/seo-suite", free: "/seo-audit", other: "/ar/seo-agent", lang: "AR", name: "Amr Elbusaily",
    title: "SEO AGENT | Hand Over Your Website, Approve Every Change",
    description: "A private AI SEO agent for any website or store. You hand over the site, the agent audits it and prepares fixes, you approve each change, the agent publishes it and logs everything so it can be reversed.",
    badge: "SEO AGENT", h1: "SEO AGENT: hand over your website, the agent does the SEO work",
    intro: "Any site: stores, blogs, service businesses. The agent audits it, writes the fixes with AI, and applies them only after you approve each change. Every change is logged with before and after, so it can be reversed.",
    cta: "Start a work order", cta2: "See how it works",
    loopTitle: "Fix, approve, publish, log",
    loop: [["Audit and fix", "The agent runs the same audit engine as the AI SEO Suite, then drafts titles, meta descriptions, descriptions, image alt text and schema."], ["You approve", "You review every change. Nothing touches your site before you approve it, and you can reject anything."], ["Agent publishes", "Approved changes are applied by the agent with the access you choose to grant, in batches."], ["Logged and reversible", "Each change is recorded with the old value, the new value and the time, so any change can be rolled back."]],
    orderTitle: "Start a work order", orderSub: "Tell the agent what to take on. This creates a work order you send to the agent on WhatsApp. Nothing is sent until you press send.",
    site: "Website address", sitePh: "yourstore.com", platform: "Platform", platforms: ["Salla", "Zid", "Shopify", "WooCommerce", "WordPress", "Odoo", "Wix", "Custom or other"], kind: "Type of site", kinds: ["Online store", "Blog or content site", "Service business", "Other"],
    goals: "What should the agent handle?", goalList: ["Technical SEO fixes", "Titles and meta descriptions", "Product and category descriptions", "Image alt text", "Schema markup", "Keyword map and content briefs", "Internal linking", "Monthly review and re-audit"],
    access: "How will the agent get access?", accessList: [["limited", "I will add the agent as a limited staff or admin user"], ["connector", "I will connect through an app or API when a connector for my platform is ready"], ["export", "No access: the agent prepares the fixes and I apply them myself"]],
    approval: "Approval rule", approvalVal: "Every change needs your approval before it is published. This cannot be turned off.",
    contact: "Your name (optional)", notes: "Notes for the agent (optional)", notesPh: "Priorities, pages to avoid, languages, deadlines",
    secret: "Never put passwords or API keys in a work order. If access is needed, the agent sends you a secure link to enter it.",
    result: "Your work order", send: "Send on WhatsApp", copy: "Copy", copied: "Copied", dl: "Download .txt", needSite: "Enter your website address to create the work order.",
    queueTitle: "Approval queue", queueSub: "Run the AI SEO Suite, download its JSON export, and load it here. Approve or reject each change. Your decisions are saved in this browser, and you can send the approved batch to the agent.",
    load: "Load Suite export (JSON)", loadErr: "This file is not a Suite export.", approve: "Approve", reject: "Reject", pending: "Pending", approved: "Approved", rejected: "Rejected", approveAll: "Approve all", clear: "Clear decisions",
    exportBatch: "Download approved batch", sendBatch: "Send approved batch on WhatsApp", field: { title: "Title", meta: "Meta description", description: "Description", alt: "Image alt text", schema: "Product schema" } as Record<string, string>, current: "Current", suggested: "Suggested", noItems: "No changes in this export.", fromAi: "AI", fromTpl: "Template", batchNote: "The batch file lists only approved changes, each with its current and new value. Attach it to your WhatsApp message.",
    statusTitle: "What happens after you send", status: [["Received", "The agent reads the work order and checks the site."], ["Audit and drafts", "The agent audits the site and prepares fixes for your approval."], ["Waiting for your approval", "You approve or reject each change in the queue above."], ["Published and logged", "Approved changes go live and each one is written to the change log."]], statusNote: "Status updates arrive on WhatsApp. A live status view on this page needs a small database and is planned.",
    connTitle: "Connectors", connSub: "Be clear about what works today.", conn: [["Access you grant", "Available now", "ok"], ["Salla", "Direct connector in development (official app and OAuth)", "soon"], ["Zid", "Direct connector in development (official app and OAuth)", "soon"], ["Shopify", "Planned", "plan"], ["WooCommerce", "Planned", "plan"], ["WordPress", "Planned", "plan"], ["Odoo", "Planned", "plan"]],
    safeTitle: "Safety by design", safe: ["Nothing is published without your approval of that change.", "Every change is logged with the old value, the new value and the time, so it can be reversed.", "No invented data: no fake rankings, backlinks, search volumes or traffic numbers.", "Credentials are never typed into chat or a work order. Access is granted through a secure link.", "AI output is a draft you review, not guaranteed copy."],
    faqTitle: "Questions", faq: [["Is this a different tool from the AI SEO Suite?", "The Suite audits your site and writes the fixes you apply yourself. The agent does the work for you: it prepares, waits for your approval, publishes and logs."], ["Does it work for any website?", "Yes. Stores, blogs and service sites. Direct platform connectors come per platform, and until then the agent works with access you grant or with exported fixes."], ["Who does the work?", "Amr Elbusaily's private AI SEO agent runs the work. You talk to it on WhatsApp and approve changes here."], ["Can I undo a change?", "Yes. Each change is logged with its previous value."]],
    phTitle: "Phases and the access each one needs", phSub: "Pick the phases you want. You grant only the access listed for them, and you can revoke it at any time.", phNeeds: "Needs from you", phDoes: "What the agent does", phAccess: "Access level", phInclude: "Include", phNever: "Never requested", phNeverList: "Payment or card details, customer personal data, your own login passwords for unrelated accounts, hosting root access or DNS changes unless a task truly needs them and you approve that separately.", phSecure: "Credentials are never typed here or in chat. When a phase needs them, the agent sends you a secure one-time link, uses the access only for the approved work, and you revoke it when the work ends.",
    phases: [
      ["Read-only audit", "None", "Your website address only.", "Crawls public pages, runs the technical, on-page, links and structured data checks, and lists real issues. Changes nothing.", "No access"],
      ["Strategy and content plan", "Optional", "Business details, target countries and languages, main products or services, competitors you know (optional). Optional: add the agent as a read-only user in Google Search Console.", "Builds the keyword map, content briefs and internal linking plan. Shows only measured data, never invented volumes or rankings.", "Read-only (optional)"],
      ["Fix drafts for approval", "None", "Your decisions in the approval queue below.", "Drafts titles, meta descriptions, descriptions, image alt text and schema. Each draft waits for your approve or reject.", "No access"],
      ["On-site fixes", "Required", "A limited staff or admin user on your store or CMS with permission to edit products, pages and SEO fields only. Shared through a secure link. Not needed for Salla or Zid once their connector is live.", "Applies only approved changes, in batches, and records the old and new value of each so it can be reversed.", "Edit content (limited)"],
      ["Technical files and schema", "Required", "Theme, code or hosting access for the specific file, or you add the files yourself from the agent's output. Redirects and DNS only with a separate approval.", "Prepares robots.txt, sitemap.xml, structured data and redirect lists, and installs them once approved.", "Edit theme or files"],
      ["Monitoring and monthly review", "Optional", "The same read-only access as before, kept active.", "Re-audits the site, compares with the last run and reports what improved and what regressed.", "Read-only"],
    ],
    final: "Ready to hand over your site?", back: "AI SEO Suite", pdfNote: "",
  },
  ar: {
    dir: "rtl", home: "/ar", suite: "/ar/seo-suite", free: "/ar/seo-audit", other: "/seo-agent", lang: "EN", name: "عمرو البصيلي",
    title: "SEO AGENT | سلّم موقعك ووافق على كل تعديل",
    description: "وكيل SEO خاص بالذكاء الاصطناعي لأي موقع أو متجر. تسلّم الموقع، يفحصه الوكيل ويجهّز التعديلات، توافق أنت على كل تعديل، فينشره الوكيل ويسجل كل شيء ليمكن التراجع عنه.",
    badge: "SEO AGENT", h1: "SEO AGENT: سلّم موقعك والوكيل يتولى شغل السيو",
    intro: "أي موقع: متجر أو مدونة أو شركة خدمات. يفحصه الوكيل، يكتب التعديلات بالذكاء الاصطناعي، ولا يطبّقها إلا بعد موافقتك على كل تعديل. كل تعديل يُسجَّل بقيمته قبل وبعد، فيمكن التراجع عنه.",
    cta: "ابدأ طلب عمل", cta2: "شاهد كيف يعمل",
    loopTitle: "تعديل، موافقة، نشر، تسجيل",
    loop: [["فحص وتعديلات", "يشغّل الوكيل نفس محرك الفحص في حزمة السيو بالذكاء الاصطناعي، ثم يجهّز العناوين ووصف الميتا والأوصاف والنصوص البديلة للصور والسكيما."], ["أنت توافق", "تراجع كل تعديل. لا شيء يمس موقعك قبل موافقتك، ويمكنك رفض أي تعديل."], ["الوكيل ينشر", "تُطبَّق التعديلات الموافق عليها بواسطة الوكيل بالصلاحية التي تمنحها، على دفعات."], ["تسجيل وتراجع", "كل تعديل يُسجَّل بقيمته القديمة والجديدة ووقته، فيمكن إرجاعه."]],
    orderTitle: "ابدأ طلب عمل", orderSub: "أخبر الوكيل بما يتولاه. يُنشأ طلب عمل ترسله للوكيل على واتساب. لا يُرسل شيء إلا بعد ضغطك على إرسال.",
    site: "عنوان الموقع", sitePh: "yourstore.com", platform: "المنصة", platforms: ["سلة", "زد", "شوبيفاي", "ووكومرس", "ووردبريس", "أودو", "ويكس", "مخصص أو غير ذلك"], kind: "نوع الموقع", kinds: ["متجر إلكتروني", "مدونة أو موقع محتوى", "شركة خدمات", "أخرى"],
    goals: "ماذا يتولى الوكيل؟", goalList: ["إصلاحات السيو التقنية", "العناوين ووصف الميتا", "أوصاف المنتجات والأقسام", "النصوص البديلة للصور", "السكيما", "خريطة الكلمات وملخصات المحتوى", "الروابط الداخلية", "مراجعة شهرية وإعادة فحص"],
    access: "كيف يحصل الوكيل على الصلاحية؟", accessList: [["limited", "سأضيف الوكيل كمستخدم بصلاحية محدودة أو إدارية"], ["connector", "سأربط عبر تطبيق أو API عندما يجهز موصل لمنصتي"], ["export", "بدون صلاحية: يجهّز الوكيل التعديلات وأطبّقها بنفسي"]],
    approval: "قاعدة الموافقة", approvalVal: "كل تعديل يحتاج موافقتك قبل نشره. لا يمكن إيقاف هذه القاعدة.",
    contact: "اسمك (اختياري)", notes: "ملاحظات للوكيل (اختياري)", notesPh: "الأولويات، صفحات يجب تجنبها، اللغات، المواعيد",
    secret: "لا تكتب كلمات مرور أو مفاتيح API في طلب العمل. إذا لزم الوصول، يرسل لك الوكيل رابطًا آمنًا لإدخاله.",
    result: "طلب العمل الخاص بك", send: "أرسل على واتساب", copy: "نسخ", copied: "تم النسخ", dl: "تحميل .txt", needSite: "أدخل عنوان موقعك لإنشاء طلب العمل.",
    queueTitle: "قائمة الموافقات", queueSub: "شغّل حزمة السيو بالذكاء الاصطناعي، نزّل ملف JSON الناتج وحمّله هنا. وافق على كل تعديل أو ارفضه. قراراتك تُحفظ في هذا المتصفح ويمكنك إرسال الدفعة الموافق عليها للوكيل.",
    load: "حمّل ملف تصدير الحزمة (JSON)", loadErr: "هذا الملف ليس تصدير حزمة السيو.", approve: "موافقة", reject: "رفض", pending: "بانتظار القرار", approved: "موافق عليه", rejected: "مرفوض", approveAll: "موافقة على الكل", clear: "مسح القرارات",
    exportBatch: "نزّل الدفعة الموافق عليها", sendBatch: "أرسل الدفعة على واتساب", field: { title: "العنوان", meta: "وصف الميتا", description: "الوصف", alt: "نص الصورة البديل", schema: "سكيما المنتج" } as Record<string, string>, current: "الحالي", suggested: "المقترح", noItems: "لا توجد تعديلات في هذا الملف.", fromAi: "AI", fromTpl: "قالب", batchNote: "ملف الدفعة يضم التعديلات الموافق عليها فقط، لكل منها قيمته الحالية والجديدة. أرفقه برسالة واتساب.",
    statusTitle: "ماذا يحدث بعد الإرسال", status: [["تم الاستلام", "يقرأ الوكيل طلب العمل ويراجع الموقع."], ["فحص ومسودات", "يفحص الوكيل الموقع ويجهّز التعديلات لموافقتك."], ["بانتظار موافقتك", "توافق أو ترفض كل تعديل في القائمة أعلاه."], ["نشر وتسجيل", "تُنشر التعديلات الموافق عليها ويُسجَّل كل واحد في سجل التغييرات."]], statusNote: "تصلك تحديثات الحالة على واتساب. عرض الحالة الحي في هذه الصفحة يحتاج قاعدة بيانات صغيرة وهو مخطط له.",
    connTitle: "الموصلات", connSub: "بوضوح: ما يعمل اليوم وما هو قادم.", conn: [["صلاحية تمنحها أنت", "متاح الآن", "ok"], ["سلة", "موصل مباشر قيد التطوير (تطبيق رسمي وOAuth)", "soon"], ["زد", "موصل مباشر قيد التطوير (تطبيق رسمي وOAuth)", "soon"], ["شوبيفاي", "مخطط", "plan"], ["ووكومرس", "مخطط", "plan"], ["ووردبريس", "مخطط", "plan"], ["أودو", "مخطط", "plan"]],
    safeTitle: "أمان مبني في التصميم", safe: ["لا يُنشر شيء بدون موافقتك على ذلك التعديل.", "كل تعديل يُسجَّل بقيمته القديمة والجديدة ووقته ليمكن التراجع عنه.", "لا بيانات مختلقة: لا ترتيب ولا روابط خلفية ولا حجم بحث ولا أرقام زيارات وهمية.", "بيانات الدخول لا تُكتب في محادثة أو طلب عمل. الوصول يتم عبر رابط آمن.", "مخرجات الذكاء الاصطناعي مسودة تراجعها وليست نصًا مضمونًا."],
    faqTitle: "أسئلة شائعة", faq: [["هل هذا مختلف عن حزمة السيو بالذكاء الاصطناعي؟", "الحزمة تفحص موقعك وتكتب التعديلات التي تطبقها أنت. الوكيل يعمل نيابة عنك: يجهّز وينتظر موافقتك وينشر ويسجّل."], ["هل يعمل لأي موقع؟", "نعم. متاجر ومدونات ومواقع خدمات. الموصلات المباشرة تأتي لكل منصة، وإلى ذلك الحين يعمل الوكيل بصلاحية تمنحها أو بتعديلات مصدّرة."], ["من ينفذ العمل؟", "وكيل عمرو البصيلي الخاص للسيو بالذكاء الاصطناعي. تتحدث معه على واتساب وتوافق على التعديلات هنا."], ["هل يمكن التراجع عن تعديل؟", "نعم. كل تعديل مسجّل بقيمته السابقة."]],
    phTitle: "المراحل والصلاحية التي تحتاجها كل مرحلة", phSub: "اختر المراحل التي تريدها. تمنح فقط الصلاحية المذكورة لها، ويمكنك سحبها في أي وقت.", phNeeds: "المطلوب منك", phDoes: "ماذا يفعل الوكيل", phAccess: "مستوى الصلاحية", phInclude: "تضمين", phNever: "لا نطلبه أبدًا", phNeverList: "بيانات الدفع أو البطاقات، البيانات الشخصية للعملاء، كلمات مرور حساباتك غير المرتبطة، صلاحية جذر الاستضافة أو تغيير DNS إلا إذا احتاجه عمل محدد ووافقت عليه بشكل منفصل.", phSecure: "لا تُكتب بيانات الدخول هنا ولا في المحادثة. عندما تحتاجها مرحلة، يرسل لك الوكيل رابطًا آمنًا لمرة واحدة، ويستخدم الصلاحية للعمل الموافق عليه فقط، وتسحبها أنت عند انتهاء العمل.",
    phases: [
      ["فحص للقراءة فقط", "لا شيء", "عنوان موقعك فقط.", "يزحف على الصفحات العامة، يشغّل فحوص التقنية والصفحات والروابط والبيانات المنظمة، ويسرد المشكلات الحقيقية. لا يغيّر شيئًا.", "بدون صلاحية"],
      ["الاستراتيجية وخطة المحتوى", "اختياري", "بيانات نشاطك، الدول واللغات المستهدفة، أهم المنتجات أو الخدمات، منافسون تعرفهم (اختياري). اختياريًا: أضف الوكيل كمستخدم للقراءة فقط في Google Search Console.", "يبني خريطة الكلمات وملخصات المحتوى وخطة الروابط الداخلية. يعرض بيانات مقاسة فقط، بلا أحجام بحث أو ترتيب مختلق.", "قراءة فقط (اختياري)"],
      ["مسودات التعديلات للموافقة", "لا شيء", "قراراتك في قائمة الموافقات أدناه.", "يجهّز العناوين ووصف الميتا والأوصاف والنصوص البديلة والسكيما. كل مسودة تنتظر موافقتك أو رفضك.", "بدون صلاحية"],
      ["تعديلات داخل الموقع", "مطلوب", "مستخدم بصلاحية محدودة أو إدارية على متجرك أو نظام موقعك، بإذن تعديل المنتجات والصفحات وحقول السيو فقط. يُشارك عبر رابط آمن. لا يلزم في سلة وزد عند جاهزية موصلهما.", "يطبّق التعديلات الموافق عليها فقط، على دفعات، ويسجّل القيمة القديمة والجديدة لكل تعديل ليمكن التراجع.", "تعديل المحتوى (محدود)"],
      ["الملفات التقنية والسكيما", "مطلوب", "صلاحية على القالب أو الكود أو الاستضافة للملف المحدد، أو تضيف الملفات بنفسك من مخرجات الوكيل. التحويلات وDNS فقط بموافقة منفصلة.", "يجهّز robots.txt وsitemap.xml والبيانات المنظمة وقوائم التحويل، ويركّبها بعد الموافقة.", "تعديل القالب أو الملفات"],
      ["متابعة ومراجعة شهرية", "اختياري", "نفس صلاحية القراءة السابقة مع إبقائها فعالة.", "يعيد فحص الموقع ويقارن بآخر مرة ويخبرك بما تحسن وما تراجع.", "قراءة فقط"],
    ],
    final: "جاهز لتسليم موقعك؟", back: "حزمة السيو بالذكاء الاصطناعي", pdfNote: "",
  },
} as const;

export function seoAgentHead(lang: Lang) {
  const d = ui[lang];
  const path = lang === "ar" ? "/ar/seo-agent" : "/seo-agent";
  const url = `${base}${path}`;
  return {
    meta: [
      { title: d.title }, { name: "description", content: d.description }, { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: d.title }, { property: "og:description", content: d.description }, { property: "og:type", content: "website" }, { property: "og:url", content: url },
      { property: "og:locale", content: lang === "ar" ? "ar_EG" : "en_US" }, { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@graph": [
      { "@type": "Service", name: lang === "ar" ? "SEO AGENT" : "SEO AGENT", description: d.description, url, provider: { "@type": "Person", name: "Amr Elbusaily", url: base } },
    ] }) }],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "ar", href: `${base}/ar/seo-agent` }, { rel: "alternate", hrefLang: "en", href: `${base}/seo-agent` }, { rel: "alternate", hrefLang: "x-default", href: `${base}/seo-agent` },
    ],
  };
}

type Item = { id: string; url: string; field: string; current: string; suggested: string; src: string };
type Decision = "approved" | "rejected";

function itemsFrom(data: unknown): { site: string; items: Item[] } | null {
  const o = data as { site?: unknown; fixes?: unknown };
  if (!o || typeof o !== "object" || !Array.isArray(o.fixes)) return null;
  const items: Item[] = [];
  const cap = (v: unknown, n: number) => (typeof v === "string" ? v.slice(0, n) : "");
  for (const [index, f] of (o.fixes.slice(0, 25) as Array<Record<string, any>>).entries()) {
    if (!f || typeof f.url !== "string") continue;
    const url = f.url.slice(0, 300);
    if (f.title?.suggested) items.push({ id: `${index}:${url}#title`, url, field: "title", current: cap(f.title.current, 300), suggested: cap(f.title.suggested, 300), src: f.title.source === "ai" ? "ai" : "template" });
    if (f.meta?.suggested) items.push({ id: `${index}:${url}#meta`, url, field: "meta", current: cap(f.meta.current, 400), suggested: cap(f.meta.suggested, 400), src: f.meta.source === "ai" ? "ai" : "template" });
    if (f.description?.suggested) items.push({ id: `${index}:${url}#description`, url, field: "description", current: "", suggested: cap(f.description.suggested, 900), src: f.description.source === "ai" ? "ai" : "template" });
    if (Array.isArray(f.alts)) f.alts.slice(0, 12).forEach((a: Record<string, unknown>, i: number) => { if (a && typeof a.suggested === "string") items.push({ id: `${index}:${url}#alt${i}`, url, field: "alt", current: cap(a.current, 200), suggested: cap(a.suggested, 200), src: a.source === "ai" ? "ai" : "template" }); });
    if (f.schema && typeof f.schema === "object") items.push({ id: `${index}:${url}#schema`, url, field: "schema", current: "", suggested: JSON.stringify(f.schema).slice(0, 1500), src: "template" });
  }
  return { site: cap(o.site, 200), items };
}

function CopyBtn({ text, label, done }: { text: string; label: string; done: string }) {
  const [ok, setOk] = useState(false);
  return (<button type="button" onClick={() => { navigator.clipboard?.writeText(text).then(() => { setOk(true); setTimeout(() => setOk(false), 1500); }).catch(() => undefined); }} className="inline-flex h-10 items-center gap-2 rounded-xl border border-border px-4 text-sm font-medium hover:border-primary hover:text-primary">{ok ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}{ok ? done : label}</button>);
}
const download = (name: string, text: string, type: string) => { const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([text], { type })); a.download = name; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 2000); };

export function SeoAgentPage({ lang }: { lang: Lang }) {
  const d = ui[lang];
  const [site, setSite] = useState("");
  const [platform, setPlatform] = useState(0);
  const [kind, setKind] = useState(0);
  const [goals, setGoals] = useState<number[]>([0, 1, 2, 3]);
  const [ph, setPh] = useState<number[]>([0, 1, 2]);
  const [access, setAccess] = useState("limited");
  const [who, setWho] = useState("");
  const [notes, setNotes] = useState("");
  const [q, setQ] = useState<{ site: string; items: Item[] } | null>(null);
  const [dec, setDec] = useState<Record<string, Decision>>({});
  const [err, setErr] = useState("");

  useEffect(() => { try { const raw = localStorage.getItem("agent-queue"); if (raw) { const o = JSON.parse(raw); if (o?.q && typeof o.q.site === "string" && Array.isArray(o.q.items) && o.q.items.length <= 400 && o.q.items.every((it: Item) => it && typeof it.id === "string" && typeof it.url === "string" && typeof it.current === "string" && typeof it.suggested === "string" && ["title", "meta", "description", "alt", "schema"].includes(it.field) && ["ai", "template"].includes(it.src))) { setQ(o.q); setDec(Object.fromEntries(o.q.items.filter((it: Item) => ["approved", "rejected"].includes(o.dec?.[it.id])).map((it: Item) => [it.id, o.dec[it.id]]))); } } } catch { /* ignore */ } }, []);
  useEffect(() => { if (q) { try { localStorage.setItem("agent-queue", JSON.stringify({ q, dec })); } catch { /* ignore */ } } }, [q, dec]);

  const order = useMemo(() => {
    const s = site.trim();
    if (!s) return "";
    const en = (a: readonly string[], i: number) => a[i];
    const lines = [
      "SEO AGENT - WORK ORDER",
      `Site: ${s.slice(0, 200)}`,
      `Platform: ${en(ui.en.platforms, platform)}`,
      `Site type: ${en(ui.en.kinds, kind)}`,
      `Goals: ${goals.map((i) => ui.en.goalList[i]).join("; ") || "-"}`,
      `Phases: ${ph.map((i) => ui.en.phases[i][0]).join("; ") || "-"}`,
      `Access: ${ui.en.accessList.find((a) => a[0] === access)?.[1] ?? access}`,
      "Approval: every change needs client approval before publishing",
      who.trim() ? `Name: ${who.trim().slice(0, 80)}` : "",
      notes.trim() ? `Notes: ${notes.trim().slice(0, 500)}` : "",
      `Language of page: ${lang === "ar" ? "Arabic" : "English"}`,
    ].filter(Boolean);
    return lines.join("\n");
  }, [site, platform, kind, goals, ph, access, who, notes, lang]);

  const counts = useMemo(() => { const items = q?.items ?? []; let a = 0, r = 0; for (const it of items) { if (dec[it.id] === "approved") a++; else if (dec[it.id] === "rejected") r++; } return { a, r, p: items.length - a - r }; }, [q, dec]);
  const approvedBatch = () => ({ site: q?.site ?? "", approvedAt: new Date().toISOString(), changes: (q?.items ?? []).filter((it) => dec[it.id] === "approved").map((it) => ({ url: it.url, field: it.field, currentValue: it.current, newValue: it.suggested, source: it.src })) });
  const onFile = async (f: File | undefined) => {
    setErr(""); if (!f) return;
    try { if (f.size > 3_000_000) throw new Error("big"); const parsed = itemsFrom(JSON.parse(await f.text())); if (!parsed) throw new Error("bad"); setQ(parsed); setDec({}); } catch { setErr(d.loadErr); }
  };

  const nav = (<header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md"><div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"><a href={d.home} className="flex items-center gap-2 font-display font-semibold"><span className="grid h-8 w-8 place-items-center rounded-md bg-primary font-mono text-sm text-primary-foreground">AE</span><span>{d.name}</span></a><nav className="flex items-center gap-4 text-sm text-muted-foreground"><a href={d.suite} className="hidden hover:text-foreground sm:inline">{d.back}</a><a href={d.free} className="hidden hover:text-foreground sm:inline">{lang === "ar" ? "الفحص المجاني" : "Free audit"}</a><a href={d.other} className="font-mono text-xs hover:text-foreground">{d.lang}</a></nav></div></header>);
  const sectionH = "text-center text-3xl font-semibold md:text-4xl";

  return (
    <div className="min-h-screen" dir={d.dir} lang={lang}>
      {nav}
      <main>
        <section className="relative overflow-hidden border-b border-border"><div className="absolute inset-0 grid-bg" aria-hidden="true" />
          <div className="relative mx-auto max-w-4xl px-6 py-16 text-center md:py-24">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 font-mono text-xs tracking-[0.15em] text-primary"><Sparkles className="h-3.5 w-3.5" aria-hidden="true" />{d.badge}</div>
            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">{d.h1}</h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg md:leading-9">{d.intro}</p>
            <p role="note" className="mx-auto mt-6 max-w-2xl rounded-xl border border-primary/40 bg-primary/5 p-4 text-sm leading-7">{lang === "ar" ? "المتاح الآن: إعداد طلب العمل وقائمة موافقات محلية محفوظة في متصفحك. التنفيذ المُدار والوصول الآمن وتسجيل التعديلات والتراجع عنها قيد الإطلاق وليست وظائف متصلة في هذه الصفحة حتى الآن." : "Available now: work-order preparation and a local approval queue saved in your browser. Managed execution, secure access, change logging and rollback are rolling out and are not connected functions on this page yet."}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"><a href="#order" className="inline-flex min-h-12 w-full max-w-[17rem] items-center justify-center rounded-xl bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground glow-primary hover:opacity-90 sm:w-auto sm:max-w-none">{d.cta}</a><a href="#loop" className="inline-flex min-h-12 w-full max-w-[17rem] items-center justify-center rounded-xl border border-border px-6 py-2 text-sm font-medium hover:border-primary hover:text-primary sm:w-auto sm:max-w-none">{d.cta2}</a></div>
          </div></section>

        <section id="loop" className="scroll-mt-20 border-b border-border"><div className="mx-auto max-w-6xl px-6 py-16"><h2 className={sectionH}>{d.loopTitle}</h2>
          <ol className="mt-10 grid gap-4 md:grid-cols-4">{d.loop.map(([t, x], i) => { const Ic = [Sparkles, UserCheck, FileCheck2, History][i]; return (<li key={t} className="rounded-2xl border border-border bg-surface p-6"><div className="grid h-10 w-10 place-items-center rounded-full bg-primary/15 text-primary"><Ic className="h-5 w-5" aria-hidden="true" /></div><h3 className="mt-4 text-lg font-semibold">{t}</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">{x}</p></li>); })}</ol></div></section>

        <section id="phases" className="scroll-mt-20 border-b border-border"><div className="mx-auto max-w-6xl px-6 py-16"><h2 className={sectionH}>{d.phTitle}</h2><p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-7 text-muted-foreground">{d.phSub}</p>
          <ol className="mt-10 grid gap-4 md:grid-cols-2">{d.phases.map(([t, req, needs, does, lvl], i) => (<li key={t} className="min-w-0 rounded-2xl border border-border bg-surface p-6"><div className="flex items-start justify-between gap-3"><div className="flex items-center gap-3"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/15 font-mono text-sm text-primary" dir="ltr">{i + 1}</span><h3 className="text-lg font-semibold">{t}</h3></div><span className={`shrink-0 rounded-full px-3 py-1 text-xs ${i === 3 || i === 4 ? "bg-accent/15 text-accent" : "bg-primary/15 text-primary"}`}>{req}</span></div>
            <dl className="mt-4 space-y-3 text-sm leading-7"><div><dt className="text-xs font-medium text-primary">{d.phDoes}</dt><dd className="text-muted-foreground">{does}</dd></div><div><dt className="text-xs font-medium text-primary">{d.phNeeds}</dt><dd className="text-muted-foreground">{needs}</dd></div><div><dt className="text-xs font-medium text-primary">{d.phAccess}</dt><dd className="font-medium">{lvl}</dd></div></dl>
            <label className="mt-4 flex items-center gap-3 border-t border-border pt-4 text-sm"><input type="checkbox" checked={ph.includes(i)} onChange={() => setPh((v) => (v.includes(i) ? v.filter((x) => x !== i) : [...v, i].sort()))} className="h-4 w-4 accent-[var(--color-primary)]" />{d.phInclude}</label></li>))}</ol>
          <div className="mt-6 grid gap-4 md:grid-cols-2"><div className="flex items-start gap-3 rounded-xl border border-primary/30 bg-primary/5 p-4 text-sm leading-7"><Lock className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />{d.phSecure}</div><div className="rounded-xl border border-border bg-surface p-4 text-sm leading-7"><div className="font-semibold">{d.phNever}</div><p className="text-muted-foreground">{d.phNeverList}</p></div></div>
        </div></section>

        <section id="order" className="scroll-mt-20 border-b border-border bg-surface/30"><div className="mx-auto max-w-3xl px-6 py-16"><h2 className={sectionH}>{d.orderTitle}</h2><p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-7 text-muted-foreground">{d.orderSub}</p>
          <div className="mt-8 space-y-5 rounded-2xl border border-border bg-surface p-5 md:p-7">
            <div><label htmlFor="ag-site" className="text-xs font-medium">{d.site}</label><input id="ag-site" dir="ltr" inputMode="url" autoComplete="off" value={site} onChange={(e) => setSite(e.target.value)} placeholder={d.sitePh} className="mt-1 h-12 w-full rounded-xl border border-border bg-background/60 px-4 text-sm" /></div>
            <div className="grid gap-4 sm:grid-cols-2"><div><label htmlFor="ag-pf" className="text-xs font-medium">{d.platform}</label><select id="ag-pf" value={platform} onChange={(e) => setPlatform(Number(e.target.value))} className="mt-1 h-12 w-full rounded-xl border border-border bg-background/60 px-3 text-sm">{d.platforms.map((p, i) => <option key={p} value={i}>{p}</option>)}</select></div><div><label htmlFor="ag-kind" className="text-xs font-medium">{d.kind}</label><select id="ag-kind" value={kind} onChange={(e) => setKind(Number(e.target.value))} className="mt-1 h-12 w-full rounded-xl border border-border bg-background/60 px-3 text-sm">{d.kinds.map((p, i) => <option key={p} value={i}>{p}</option>)}</select></div></div>
            <fieldset><legend className="text-xs font-medium">{d.goals}</legend><div className="mt-2 grid gap-2 sm:grid-cols-2">{d.goalList.map((g, i) => (<label key={g} className="flex items-center gap-3 rounded-lg border border-border bg-background/50 px-3 py-2 text-sm"><input type="checkbox" checked={goals.includes(i)} onChange={() => setGoals((v) => (v.includes(i) ? v.filter((x) => x !== i) : [...v, i]))} className="h-4 w-4 accent-[var(--color-primary)]" />{g}</label>))}</div></fieldset>
            <fieldset><legend className="text-xs font-medium">{d.access}</legend><div className="mt-2 space-y-2">{d.accessList.map(([v, t]) => (<label key={v} className="flex items-start gap-3 rounded-lg border border-border bg-background/50 px-3 py-2 text-sm"><input type="radio" name="ag-access" checked={access === v} onChange={() => setAccess(v)} className="mt-1 h-4 w-4 accent-[var(--color-primary)]" />{t}</label>))}</div></fieldset>
            <div className="flex items-start gap-3 rounded-xl border border-primary/30 bg-primary/5 p-4 text-sm"><Lock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" /><div><div className="font-semibold">{d.approval}</div><p className="mt-1 text-muted-foreground">{d.approvalVal}</p></div></div>
            <div className="grid gap-4 sm:grid-cols-2"><div><label htmlFor="ag-who" className="text-xs font-medium">{d.contact}</label><input id="ag-who" value={who} maxLength={80} onChange={(e) => setWho(e.target.value)} className="mt-1 h-12 w-full rounded-xl border border-border bg-background/60 px-4 text-sm" /></div><div><label htmlFor="ag-notes" className="text-xs font-medium">{d.notes}</label><input id="ag-notes" value={notes} maxLength={500} onChange={(e) => setNotes(e.target.value)} placeholder={d.notesPh} className="mt-1 h-12 w-full rounded-xl border border-border bg-background/60 px-4 text-sm" /></div></div>
            <p className="flex items-start gap-2 text-xs leading-6 text-muted-foreground"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />{d.secret}</p>
            <div className="rounded-xl border border-border bg-background/50 p-4"><div className="flex items-center gap-2 text-sm font-semibold"><ClipboardList className="h-4 w-4 text-primary" aria-hidden="true" />{d.result}</div>
              {order ? (<><pre dir="ltr" className="mt-3 max-w-full overflow-x-auto whitespace-pre-wrap break-words rounded-md bg-background p-3 text-xs">{order}</pre>
                <div className="mt-3 flex flex-wrap gap-2"><a href={waLink(order)} target="_blank" rel="noopener" className="inline-flex h-10 items-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground hover:opacity-90"><MessageCircle className="h-4 w-4" aria-hidden="true" />{d.send}</a><CopyBtn text={order} label={d.copy} done={d.copied} /><button type="button" onClick={() => download("seo-agent-work-order.txt", order, "text/plain")} className="inline-flex h-10 items-center gap-2 rounded-xl border border-border px-4 text-sm font-medium hover:border-primary hover:text-primary"><Download className="h-4 w-4" aria-hidden="true" />{d.dl}</button></div></>) : <p className="mt-2 text-sm text-muted-foreground">{d.needSite}</p>}</div>
          </div>
          <div className="mt-10"><h3 className="text-center text-lg font-semibold">{d.statusTitle}</h3><ol className="mt-4 grid gap-3 sm:grid-cols-2">{d.status.map(([t, x], i) => (<li key={t} className="rounded-xl border border-border bg-surface p-4"><div className="flex items-center gap-2 text-sm font-semibold"><span className="grid h-6 w-6 place-items-center rounded-full bg-primary/15 font-mono text-xs text-primary" dir="ltr">{i + 1}</span>{t}</div><p className="mt-1 text-xs leading-6 text-muted-foreground">{x}</p></li>))}</ol><p className="mt-3 text-center text-xs text-muted-foreground">{d.statusNote}</p></div>
        </div></section>

        <section id="queue" className="scroll-mt-20 border-b border-border"><div className="mx-auto max-w-4xl px-6 py-16"><h2 className={sectionH}>{d.queueTitle}</h2><p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-7 text-muted-foreground">{d.queueSub}</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3"><label className="inline-flex h-11 cursor-pointer items-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground hover:opacity-90"><Upload className="h-4 w-4" aria-hidden="true" />{d.load}<input type="file" accept="application/json,.json" className="sr-only" onChange={(e) => { void onFile(e.target.files?.[0]); e.target.value = ""; }} /></label>{q && <button type="button" onClick={() => { setQ(null); setDec({}); try { localStorage.removeItem("agent-queue"); } catch { /* ignore */ } }} className="inline-flex h-11 items-center rounded-xl border border-border px-4 text-sm hover:border-primary">{d.clear}</button>}</div>
          {err && <p role="alert" className="mt-4 text-center text-sm text-red-400">{err}</p>}
          {q && (<div className="mt-8">
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-surface p-4 text-sm"><div className="break-all font-semibold" dir="ltr">{q.site}</div><div className="flex flex-wrap gap-3 text-xs"><span className="text-primary">{d.approved}: {counts.a}</span><span className="text-red-400">{d.rejected}: {counts.r}</span><span className="text-muted-foreground">{d.pending}: {counts.p}</span></div></div>
            <div className="mt-3 flex flex-wrap gap-2"><button type="button" onClick={() => setDec(Object.fromEntries(q.items.map((it) => [it.id, "approved" as Decision])))} className="inline-flex h-10 items-center rounded-xl border border-border px-4 text-sm hover:border-primary hover:text-primary">{d.approveAll}</button><button type="button" disabled={counts.a === 0} onClick={() => download("approved-batch.json", JSON.stringify(approvedBatch(), null, 2), "application/json")} className="inline-flex h-10 items-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground hover:opacity-90 disabled:opacity-50"><Download className="h-4 w-4" aria-hidden="true" />{d.exportBatch}</button><a aria-disabled={counts.a === 0} href={counts.a ? waLink(`SEO AGENT - APPROVED BATCH\nSite: ${q.site}\nApproved changes: ${counts.a}\nRejected: ${counts.r}\nPending: ${counts.p}\n(Please attach approved-batch.json manually)`) : undefined} target="_blank" rel="noopener" className={`inline-flex h-10 items-center gap-2 rounded-xl border border-border px-4 text-sm font-medium hover:border-primary hover:text-primary ${counts.a ? "" : "pointer-events-none opacity-50"}`}><MessageCircle className="h-4 w-4" aria-hidden="true" />{d.sendBatch}</a></div>
            <p className="mt-2 text-xs text-muted-foreground">{d.batchNote}</p>
            {q.items.length === 0 ? <p className="mt-6 text-sm text-muted-foreground">{d.noItems}</p> : <ul className="mt-5 space-y-3">{q.items.map((it) => { const v = dec[it.id]; return (
              <li key={it.id} className={`min-w-0 rounded-xl border p-4 ${v === "approved" ? "border-primary/50 bg-primary/5" : v === "rejected" ? "border-red-500/40 bg-red-500/5" : "border-border bg-surface"}`}>
                <div className="flex flex-wrap items-center justify-between gap-2"><div className="min-w-0"><span className="text-sm font-semibold">{d.field[it.field]}</span> <span className="rounded-full border border-border px-2 py-0.5 text-[10px] text-muted-foreground">{it.src === "ai" ? d.fromAi : d.fromTpl}</span><div className="break-all text-[11px] text-muted-foreground" dir="ltr">{it.url}</div></div>
                  <div className="flex gap-2"><button type="button" aria-pressed={v === "approved"} onClick={() => setDec((s) => ({ ...s, [it.id]: "approved" }))} className={`inline-flex h-9 items-center rounded-lg border px-3 text-xs font-medium ${v === "approved" ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary"}`}>{d.approve}</button><button type="button" aria-pressed={v === "rejected"} onClick={() => setDec((s) => ({ ...s, [it.id]: "rejected" }))} className={`inline-flex h-9 items-center rounded-lg border px-3 text-xs font-medium ${v === "rejected" ? "border-red-400 bg-red-500/20 text-red-300" : "border-border hover:border-red-400"}`}>{d.reject}</button></div></div>
                {it.current && <div className="mt-2 break-words text-xs text-muted-foreground"><span className="font-medium">{d.current}: </span>{it.current}</div>}
                <div className="mt-1 break-words text-sm leading-7"><span className="text-xs font-medium text-primary">{d.suggested}: </span>{it.field === "schema" ? <code className="break-all text-xs" dir="ltr">{it.suggested.slice(0, 400)}</code> : it.suggested}</div>
              </li>); })}</ul>}
          </div>)}
        </div></section>

        <section className="border-b border-border bg-surface/30"><div className="mx-auto max-w-4xl px-6 py-16"><h2 className={sectionH}>{d.connTitle}</h2><p className="mt-2 text-center text-sm text-muted-foreground">{d.connSub}</p>
          <ul className="mt-8 divide-y divide-border rounded-2xl border border-border bg-surface">{d.conn.map(([n, s, k]) => (<li key={n} className="flex flex-wrap items-center justify-between gap-2 p-4 text-sm"><span className="font-medium">{n}</span><span className={`rounded-full px-3 py-1 text-xs ${k === "ok" ? "bg-primary/15 text-primary" : k === "soon" ? "bg-accent/15 text-accent" : "border border-border text-muted-foreground"}`}>{s}</span></li>))}</ul></div></section>

        <section className="border-b border-border"><div className="mx-auto max-w-3xl px-6 py-16"><h2 className={sectionH}>{d.safeTitle}</h2><ul className="mt-8 space-y-3">{d.safe.map((x) => (<li key={x} className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4 text-sm leading-7"><ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />{x}</li>))}</ul></div></section>

        <section className="border-b border-border"><div className="mx-auto max-w-3xl px-6 py-16"><h2 className="text-center text-3xl font-semibold">{d.faqTitle}</h2><div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-surface">{d.faq.map(([qq, a]) => (<details key={qq} className="p-5"><summary className="cursor-pointer list-none font-medium">{qq}</summary><p className="mt-3 text-sm leading-7 text-muted-foreground">{a}</p></details>))}</div><p className="mt-10 text-center text-lg font-medium">{d.final}</p><p className="mt-3 text-center"><a href="#order" className="text-sm text-primary underline underline-offset-4">{d.cta}</a></p></div></section>
      </main>
    </div>
  );
}
