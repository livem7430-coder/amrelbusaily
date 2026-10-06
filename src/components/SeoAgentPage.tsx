import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Check, ChevronDown, ClipboardList, Loader2, Copy, Download, FileCheck2, History, Info, Lock, MessageCircle, ArrowUp, Globe, MessagesSquare, ShieldCheck, Sparkles, Upload, UserCheck } from "lucide-react";
import { describe, type Lang } from "@/lib/seo-audit-copy";
import type { AuditResult } from "@/lib/seo-audit.server";

const base = "https://amrelbusaily.vercel.app";
const WA = "https://api.whatsapp.com/send/";
const inlineMd = (t: string) => t.split(/(\*\*[^*\n]+\*\*|\*[^*\s][^*\n]*\*|`[^`\n]+`)/g).map((p, i) => p.startsWith("**") && p.endsWith("**") && p.length > 4 ? <strong key={i}>{p.slice(2, -2)}</strong> : p.startsWith("`") && p.endsWith("`") && p.length > 2 ? <code key={i} className="rounded bg-surface-2 px-1.5 py-0.5 text-[13px]">{p.slice(1, -1)}</code> : p.startsWith("*") && p.endsWith("*") && p.length > 2 ? <em key={i}>{p.slice(1, -1)}</em> : p);
const renderMsg = (t: string) => { const out: React.ReactNode[] = []; let para: string[] = []; let list: string[] = []; const isB = (l: string) => /^\s*[-*\u2022]\s+/.test(l); const flushP = () => { if (para.length) { out.push(<p key={out.length} className="break-words">{para.map((l, j) => <span key={j}>{j > 0 && <br />}{inlineMd(l)}</span>)}</p>); para = []; } }; const flushL = () => { if (list.length) { out.push(<ul key={out.length} className="list-disc space-y-1 ps-6">{list.map((l, j) => <li key={j}>{inlineMd(l.replace(/^\s*[-*\u2022]\s+/, ""))}</li>)}</ul>); list = []; } }; t.split("\n").forEach((l) => { if (!l.trim()) { flushP(); flushL(); } else if (isB(l)) { flushP(); list.push(l); } else { flushL(); para.push(l); } }); flushP(); flushL(); return out; };
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
    access: "How will the agent get access?", accessList: [["limited", "I will share my store or site login (email and password) through the secure link"], ["limited2", "I will create a limited user for the agent instead (recommended, easier to revoke)"], ["export", "No access: the agent prepares the fixes and I apply them myself"]],
    approval: "Approval rule", approvalVal: "Every change needs your approval before it is published. This cannot be turned off.",
    contact: "Your name (optional)", notes: "Notes for the agent (optional)", notesPh: "Priorities, pages to avoid, languages, deadlines",
    secret: "Never put passwords in a work order or in chat. The agent sends you a secure one-time link, you enter your store or site login there, and the agent works inside your own admin.",
    result: "Your work order", send: "Send on WhatsApp", copy: "Copy", copied: "Copied", dl: "Download .txt", needSite: "Enter your website address to create the work order.",
    queueTitle: "Approval queue", queueSub: "Run the AI SEO Suite, download its JSON export, and load it here. Approve or reject each change. Your decisions are saved in this browser, and you can send the approved batch to the agent.",
    load: "Load Suite export (JSON)", loadErr: "This file is not a Suite export.", approve: "Approve", reject: "Reject", pending: "Pending", approved: "Approved", rejected: "Rejected", approveAll: "Approve all", clear: "Clear decisions",
    exportBatch: "Download approved batch", sendBatch: "Send approved batch on WhatsApp", field: { title: "Title", meta: "Meta description", description: "Description", alt: "Image alt text", schema: "Product schema" } as Record<string, string>, current: "Current", suggested: "Suggested", noItems: "No changes in this export.", fromAi: "AI", fromTpl: "Template", batchNote: "The batch file lists only approved changes, each with its current and new value. Attach it to your WhatsApp message.",
    statusTitle: "What happens after you send", status: [["Received", "The agent reads the work order and checks the site."], ["Audit and drafts", "The agent audits the site and prepares fixes for your approval."], ["Waiting for your approval", "You approve or reject each change in the queue above."], ["Published and logged", "Approved changes go live and each one is written to the change log."]], statusNote: "Status updates arrive on WhatsApp. A live status view on this page needs a small database and is planned.",
    connTitle: "Works on any platform", connSub: "One method everywhere: your own admin login.", conn: [["Your store or site login, shared through a secure link", "How access works", "ok"], ["Salla, Zid, Shopify, EasyOrders, WooCommerce, WordPress, Wix, Odoo, custom sites", "Same flow, no app install", "ok"], ["API keys and app connectors", "Not required", "plan"]],
    safeTitle: "Safety by design", safe: ["Nothing is published without your approval of that change.", "Every change is logged with the old value, the new value and the time, so it can be reversed.", "No invented data: no fake rankings, backlinks, search volumes or traffic numbers.", "Credentials are never typed into chat or a work order. Access is granted through a secure link.", "AI output is a draft you review, not guaranteed copy."],
    faqTitle: "Questions", faq: [["Is this a different tool from the AI SEO Suite?", "The Suite audits your site and writes the fixes you apply yourself. The agent does the work for you: it prepares, waits for your approval, publishes and logs."], ["Does it work for any website?", "Yes. Stores, blogs and service sites. No app or API connection is needed: the agent works inside your own admin with the login you share through a secure link, or you apply exported fixes yourself."], ["Who does the work?", "Amr Elbusaily's private AI SEO agent runs the work. You talk to it on WhatsApp and approve changes here."], ["Can I undo a change?", "Yes. Each change is logged with its previous value."]],
    phTitle: "Phases and the access each one needs", phSub: "Pick the phases you want. You grant only the access listed for them, and you can revoke it at any time.", phNeeds: "Needs from you", phDoes: "What the agent does", phAccess: "Access level", phInclude: "Include", phNever: "Never requested", phNeverList: "Payment or card details, customer personal data, your own login passwords for unrelated accounts, hosting root access or DNS changes unless a task truly needs them and you approve that separately.", phSecure: "Credentials are never typed here or in chat. When a phase needs them, the agent sends you a secure one-time link, uses the login only for the approved work, and you change the password or remove the user when the work ends.",
    phases: [
      ["Read-only audit", "None", "Your website address only.", "Crawls public pages, runs the technical, on-page, links and structured data checks, and lists real issues. Changes nothing.", "No access"],
      ["Strategy and content plan", "Optional", "Business details, target countries and languages, main products or services, competitors you know (optional). Optional: add the agent as a read-only user in Google Search Console.", "Builds the keyword map, content briefs and internal linking plan. Shows only measured data, never invented volumes or rankings.", "Read-only (optional)"],
      ["Fix drafts for approval", "None", "Your decisions in the approval queue below.", "Drafts titles, meta descriptions, descriptions, image alt text and schema. Each draft waits for your approve or reject.", "No access"],
      ["On-site fixes", "Required", "Your store or site login (email and password), entered through a secure one-time link. A limited user with permission to edit products, pages and SEO fields only is recommended because it is easier to revoke, but not required.", "Applies only approved changes, in batches, and records the old and new value of each so it can be reversed.", "Edit content (limited)"],
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
    access: "كيف يحصل الوكيل على الصلاحية؟", accessList: [["limited", "سأشارك بيانات دخول متجري أو موقعي (الإيميل والباسورد) عبر الرابط الآمن"], ["limited2", "سأنشئ للوكيل مستخدمًا بصلاحية محدودة بدلًا من ذلك (مفضّل، أسهل في الإلغاء)"], ["export", "بدون صلاحية: يجهّز الوكيل التعديلات وأطبّقها بنفسي"]],
    approval: "قاعدة الموافقة", approvalVal: "كل تعديل يحتاج موافقتك قبل نشره. لا يمكن إيقاف هذه القاعدة.",
    contact: "اسمك (اختياري)", notes: "ملاحظات للوكيل (اختياري)", notesPh: "الأولويات، صفحات يجب تجنبها، اللغات، المواعيد",
    secret: "لا تكتب كلمات مرور في طلب العمل ولا في المحادثة. يرسل لك الوكيل رابطًا آمنًا لمرة واحدة تدخل فيه بيانات دخول متجرك أو موقعك، ويعمل الوكيل داخل لوحة تحكمك.",
    result: "طلب العمل الخاص بك", send: "أرسل على واتساب", copy: "نسخ", copied: "تم النسخ", dl: "تحميل .txt", needSite: "أدخل عنوان موقعك لإنشاء طلب العمل.",
    queueTitle: "قائمة الموافقات", queueSub: "شغّل حزمة السيو بالذكاء الاصطناعي، نزّل ملف JSON الناتج وحمّله هنا. وافق على كل تعديل أو ارفضه. قراراتك تُحفظ في هذا المتصفح ويمكنك إرسال الدفعة الموافق عليها للوكيل.",
    load: "حمّل ملف تصدير الحزمة (JSON)", loadErr: "هذا الملف ليس تصدير حزمة السيو.", approve: "موافقة", reject: "رفض", pending: "بانتظار القرار", approved: "موافق عليه", rejected: "مرفوض", approveAll: "موافقة على الكل", clear: "مسح القرارات",
    exportBatch: "نزّل الدفعة الموافق عليها", sendBatch: "أرسل الدفعة على واتساب", field: { title: "العنوان", meta: "وصف الميتا", description: "الوصف", alt: "نص الصورة البديل", schema: "سكيما المنتج" } as Record<string, string>, current: "الحالي", suggested: "المقترح", noItems: "لا توجد تعديلات في هذا الملف.", fromAi: "AI", fromTpl: "قالب", batchNote: "ملف الدفعة يضم التعديلات الموافق عليها فقط، لكل منها قيمته الحالية والجديدة. أرفقه برسالة واتساب.",
    statusTitle: "ماذا يحدث بعد الإرسال", status: [["تم الاستلام", "يقرأ الوكيل طلب العمل ويراجع الموقع."], ["فحص ومسودات", "يفحص الوكيل الموقع ويجهّز التعديلات لموافقتك."], ["بانتظار موافقتك", "توافق أو ترفض كل تعديل في القائمة أعلاه."], ["نشر وتسجيل", "تُنشر التعديلات الموافق عليها ويُسجَّل كل واحد في سجل التغييرات."]], statusNote: "تصلك تحديثات الحالة على واتساب. عرض الحالة الحي في هذه الصفحة يحتاج قاعدة بيانات صغيرة وهو مخطط له.",
    connTitle: "يعمل على أي منصة", connSub: "طريقة واحدة في كل مكان: بيانات دخولك أنت للوحة التحكم.", conn: [["بيانات دخول متجرك أو موقعك عبر رابط آمن", "طريقة الوصول", "ok"], ["سلة، زد، شوبيفاي، إيزي أوردر، ووكومرس، ووردبريس، ويكس، أودو، مواقع مخصصة", "نفس الخطوات بدون تثبيت تطبيق", "ok"], ["مفاتيح API وتطبيقات الربط", "غير مطلوبة", "plan"]],
    safeTitle: "أمان مبني في التصميم", safe: ["لا يُنشر شيء بدون موافقتك على ذلك التعديل.", "كل تعديل يُسجَّل بقيمته القديمة والجديدة ووقته ليمكن التراجع عنه.", "لا بيانات مختلقة: لا ترتيب ولا روابط خلفية ولا حجم بحث ولا أرقام زيارات وهمية.", "بيانات الدخول لا تُكتب في محادثة أو طلب عمل. الوصول يتم عبر رابط آمن.", "مخرجات الذكاء الاصطناعي مسودة تراجعها وليست نصًا مضمونًا."],
    faqTitle: "أسئلة شائعة", faq: [["هل هذا مختلف عن حزمة السيو بالذكاء الاصطناعي؟", "الحزمة تفحص موقعك وتكتب التعديلات التي تطبقها أنت. الوكيل يعمل نيابة عنك: يجهّز وينتظر موافقتك وينشر ويسجّل."], ["هل يعمل لأي موقع؟", "نعم. متاجر ومدونات ومواقع خدمات. لا يلزم تثبيت تطبيق ولا ربط API: يعمل الوكيل داخل لوحة تحكمك ببيانات الدخول التي تشاركها عبر رابط آمن، أو تطبّق أنت التعديلات المصدّرة."], ["من ينفذ العمل؟", "وكيل عمرو البصيلي الخاص للسيو بالذكاء الاصطناعي. تتحدث معه على واتساب وتوافق على التعديلات هنا."], ["هل يمكن التراجع عن تعديل؟", "نعم. كل تعديل مسجّل بقيمته السابقة."]],
    phTitle: "المراحل والصلاحية التي تحتاجها كل مرحلة", phSub: "اختر المراحل التي تريدها. تمنح فقط الصلاحية المذكورة لها، ويمكنك سحبها في أي وقت.", phNeeds: "المطلوب منك", phDoes: "ماذا يفعل الوكيل", phAccess: "مستوى الصلاحية", phInclude: "تضمين", phNever: "لا نطلبه أبدًا", phNeverList: "بيانات الدفع أو البطاقات، البيانات الشخصية للعملاء، كلمات مرور حساباتك غير المرتبطة، صلاحية جذر الاستضافة أو تغيير DNS إلا إذا احتاجه عمل محدد ووافقت عليه بشكل منفصل.", phSecure: "لا تُكتب بيانات الدخول هنا ولا في المحادثة. عندما تحتاجها مرحلة، يرسل لك الوكيل رابطًا آمنًا لمرة واحدة، ويستخدم بيانات الدخول للعمل الموافق عليه فقط، وتغيّر أنت كلمة المرور أو تحذف المستخدم عند انتهاء العمل.",
    phases: [
      ["فحص للقراءة فقط", "لا شيء", "عنوان موقعك فقط.", "يزحف على الصفحات العامة، يشغّل فحوص التقنية والصفحات والروابط والبيانات المنظمة، ويسرد المشكلات الحقيقية. لا يغيّر شيئًا.", "بدون صلاحية"],
      ["الاستراتيجية وخطة المحتوى", "اختياري", "بيانات نشاطك، الدول واللغات المستهدفة، أهم المنتجات أو الخدمات، منافسون تعرفهم (اختياري). اختياريًا: أضف الوكيل كمستخدم للقراءة فقط في Google Search Console.", "يبني خريطة الكلمات وملخصات المحتوى وخطة الروابط الداخلية. يعرض بيانات مقاسة فقط، بلا أحجام بحث أو ترتيب مختلق.", "قراءة فقط (اختياري)"],
      ["مسودات التعديلات للموافقة", "لا شيء", "قراراتك في قائمة الموافقات أدناه.", "يجهّز العناوين ووصف الميتا والأوصاف والنصوص البديلة والسكيما. كل مسودة تنتظر موافقتك أو رفضك.", "بدون صلاحية"],
      ["تعديلات داخل الموقع", "مطلوب", "بيانات دخول متجرك أو موقعك (الإيميل والباسورد) عبر رابط آمن لمرة واحدة. يُفضّل مستخدم بصلاحية تعديل المنتجات والصفحات وحقول السيو فقط لأنه أسهل في الإلغاء، لكنه غير إلزامي.", "يطبّق التعديلات الموافق عليها فقط، على دفعات، ويسجّل القيمة القديمة والجديدة لكل تعديل ليمكن التراجع.", "تعديل المحتوى (محدود)"],
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
  const [url, setUrl] = useState("");
  const [mode, setMode] = useState<"chat" | "agent">("chat");
  const [chat, setChat] = useState<Array<{ r: "u" | "a"; t: string; wa?: string }>>([]);
  const [chatIn, setChatIn] = useState("");
  const [chatBusy, setChatBusy] = useState(false);
  const [run, setRun] = useState<{ busy: boolean; step: number; res: AuditResult | null; err: string } | null>(null);

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

  const steps = lang === "ar" ? ["أفتح الموقع", "أفحص الصفحات والروابط", "أرتب المشكلات حسب الأهمية"] : ["Opening your site", "Checking pages and links", "Ranking the issues"];
  const errMsg = (code: string) => { const m: Record<string, [string, string]> = { invalid_url: ["That does not look like a valid address. Try yourstore.com.", "هذا لا يبدو رابطًا صحيحًا. جرّب yourstore.com."], blocked: ["This address cannot be checked.", "لا يمكن فحص هذا العنوان."], unreachable: ["I could not reach that site. Check the address and try again.", "لم أستطع الوصول للموقع. راجع الرابط وحاول مرة أخرى."], not_html: ["That address does not return a web page.", "هذا العنوان لا يعرض صفحة ويب."], rate_limited: ["Too many checks in a short time. Wait a minute and try again.", "عدد كبير من الفحوصات في وقت قصير. انتظر دقيقة وحاول مرة أخرى."], timeout: ["The site took too long to answer. Try again.", "الموقع تأخر في الرد. حاول مرة أخرى."] }; const x = m[code] ?? ["Something went wrong. Try again.", "حدث خطأ. حاول مرة أخرى."]; return lang === "ar" ? x[1] : x[0]; };
  const runAgent = async (e: React.FormEvent) => {
    e.preventDefault();
    const u = url.trim();
    if (!u || run?.busy) return;
    setRun({ busy: true, step: 0, res: null, err: "" });
    const timer = setInterval(() => setRun((r) => (r && r.busy ? { ...r, step: Math.min(r.step + 1, 2) } : r)), 1500);
    try {
      const res = await fetch("/api/seo-audit", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ url: u }) });
      const data = await res.json();
      setRun(data?.ok ? { busy: false, step: 2, res: data as AuditResult, err: "" } : { busy: false, step: 0, res: null, err: errMsg(String(data?.error ?? "")) });
    } catch { setRun({ busy: false, step: 0, res: null, err: errMsg("") }); } finally { clearInterval(timer); }
  };
  const handHost = (r: AuditResult) => r.finalUrl || r.url;
  const T = (en: string, ar: string) => (lang === "ar" ? ar : en);
  const inp = "mt-1.5 h-12 w-full rounded-xl border border-border bg-background/60 px-4 text-sm transition-colors placeholder:text-muted-foreground/60 hover:border-primary/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/25";
  const btnP = "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground glow-primary transition hover:-translate-y-0.5 hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50";
  const btnS = "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-surface/50 px-6 py-2 text-sm font-medium transition hover:-translate-y-0.5 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50";
  const eyebrow = (s: string) => <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">{s}</div>;
  const head = (e: string, t: string, s?: string) => (<div data-ag className="mx-auto max-w-2xl text-center">{eyebrow(e)}<h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">{t}</h2>{s && <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-base md:leading-8">{s}</p>}</div>);
  const sec = "scroll-mt-28 border-b border-border";
  const wrap = "mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-24";
  const phaseTotal = d.phases.length;

  useEffect(() => {
    const root = document.getElementById("ag-root");
    if (!root) return;
    root.classList.add("ag-js");
    const els = Array.from(root.querySelectorAll<HTMLElement>("[data-ag]"));
    if (typeof IntersectionObserver === "undefined") { els.forEach((e) => e.classList.add("ag-in")); return; }
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("ag-in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [lang, q, mode]);

  const nav = (<header className="sticky top-0 z-40 border-b border-border/60 bg-background/75 backdrop-blur-md"><div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 md:px-6"><a href={d.home} className="flex items-center gap-2 font-display font-semibold"><span className="grid h-8 w-8 place-items-center rounded-md bg-primary font-mono text-sm text-primary-foreground">AE</span><span>{d.name}</span></a><nav className="flex items-center gap-4 text-sm text-muted-foreground"><a href={d.suite} className="hidden hover:text-foreground sm:inline">{d.back}</a><a href={d.free} className="hidden hover:text-foreground sm:inline">{T("Free audit", "الفحص المجاني")}</a><a href={d.other} className="rounded-md border border-border px-2 py-1 font-mono text-xs hover:border-primary hover:text-foreground">{d.lang}</a></nav></div></header>);

  const jump = [["#loop", T("How it works", "كيف يعمل")], ["#phases", T("Phases", "المراحل")], ["#order", T("Work order", "طلب العمل")], ["#queue", T("Approvals", "الموافقات")], ["#safety", T("Safety", "الأمان")]];
  const toggle = (<div role="tablist" aria-label={T("Mode", "الوضع")} className="inline-flex shrink-0 rounded-full border border-border bg-surface p-1">{([["chat", T("Chat", "شات"), MessagesSquare], ["agent", "Agent", Sparkles]] as const).map(([m, label, Ic]) => (<button key={m} type="button" role="tab" aria-selected={mode === m} onClick={() => setMode(m)} className={`inline-flex h-9 items-center gap-2 rounded-full px-4 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${mode === m ? "bg-primary text-primary-foreground shadow" : "text-muted-foreground hover:text-foreground"}`}><Ic className="h-4 w-4" aria-hidden="true" />{label}</button>))}</div>);
  const subnav = (<div className="sticky top-[57px] z-30 border-b border-border/60 bg-background/80 backdrop-blur-md"><div className="mx-auto flex max-w-6xl items-center gap-3 overflow-x-auto px-5 py-2 md:px-6 [scrollbar-width:none]">{toggle}{mode === "agent" && <nav aria-label={T("On this page", "في هذه الصفحة")} className="flex gap-1">{jump.map(([h, t]) => (<a key={h} href={h} className="shrink-0 rounded-full px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary">{t}</a>))}</nav>}</div></div>);
  const askFaq = (qq: string, a: string) => setChat((c) => [...c, { r: "u", t: qq }, { r: "a", t: a }]);
  const fallbackReply = (t: string) => { const hit = d.faq.find(([qq]) => t.length > 3 && qq.toLowerCase().includes(t.toLowerCase())); return hit ? { r: "a" as const, t: hit[1] } : { r: "a" as const, t: T("I can answer the common questions below right here. For anything specific, send your message to Amr's agent on WhatsApp and you will get a real reply there. Nothing is sent until you press the button.", "أجاوب هنا على الأسئلة الشائعة أدناه. لأي سؤال محدد، ابعت رسالتك لوكيل عمرو على واتساب وهييجيلك رد حقيقي هناك. لا يُرسل شيء قبل ما تضغط الزر."), wa: waLink(t) }; };
  const sendChat = async (e: React.FormEvent) => {
    e.preventDefault();
    const t = chatIn.trim().slice(0, 500);
    if (!t || chatBusy) return;
    const next = [...chat, { r: "u" as const, t }];
    setChat(next); setChatIn(""); setChatBusy(true);
    try {
      const res = await fetch("/api/seo-agent-chat", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ messages: next.slice(-8).map((m) => ({ r: m.r, t: m.t })) }) });
      const data = await res.json();
      setChat((c) => [...c, data?.ok && typeof data.text === "string" ? { r: "a" as const, t: data.text } : fallbackReply(t)]);
    } catch { setChat((c) => [...c, fallbackReply(t)]); } finally { setChatBusy(false); }
  };
  useEffect(() => { if (mode !== "chat" || chat.length === 0) return; window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" }); }, [chat, chatBusy, mode]);
  const empty = chat.length === 0 && !chatBusy;
  const sugIcons = [Sparkles, Globe, UserCheck, History];
  const composer = (<form onSubmit={sendChat} className="w-full">
    <div className="rounded-[1.75rem] border border-border bg-surface p-3 shadow-[0_10px_44px_-14px_rgba(0,0,0,0.28)] transition focus-within:border-primary/60 focus-within:ring-4 focus-within:ring-primary/10">
      <label htmlFor="ag-chat" className="sr-only">{T("Your message", "رسالتك")}</label>
      <textarea id="ag-chat" autoFocus={!empty} rows={empty ? 2 : 1} value={chatIn} maxLength={500} onChange={(e) => setChatIn(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) { e.preventDefault(); e.currentTarget.form?.requestSubmit(); } }} placeholder={empty ? T("Ask anything about SEO", "اسأل أي حاجة عن السيو") : T("Reply to the SEO AGENT", "رد على SEO AGENT")} className="block max-h-40 w-full resize-none bg-transparent px-3 py-2 text-base leading-7 placeholder:text-muted-foreground/70 focus:outline-none" />
      <div className="flex items-center justify-between gap-2 pt-1">
        <div className="flex min-w-0 items-center gap-2"><span className="inline-flex items-center gap-1.5 truncate rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"><Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden="true" />{T("Free, no signup", "مجاني، بدون تسجيل")}</span><button type="button" onClick={() => setMode("agent")} className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary transition hover:bg-primary/20">{T("Work on my site", "اشتغل على موقعي")}<ArrowRight className="h-3 w-3 rtl:rotate-180" aria-hidden="true" /></button></div>
        <button type="submit" disabled={chatBusy || !chatIn.trim()} aria-label={T("Send", "إرسال")} className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition hover:opacity-90 disabled:opacity-35">{chatBusy ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <ArrowUp className="h-4 w-4" aria-hidden="true" />}</button>
      </div>
    </div>
  </form>);
  const avatar = (<span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/15 text-primary"><Sparkles className="h-4 w-4" aria-hidden="true" /></span>);
  const chatPanel = (<section className="relative flex min-h-[calc(100dvh-7.6rem)] flex-col overflow-hidden border-b border-border">
    <div className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-[32rem] bg-[radial-gradient(60%_70%_at_50%_0%,var(--primary-glow),transparent)] opacity-60" aria-hidden="true" />
    {empty ? (
      <div className="relative mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-5 pb-20 pt-10 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-lg glow-primary"><Sparkles className="h-7 w-7" aria-hidden="true" /></span>
        <h1 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">{T("How can I help with your SEO?", "أقدر أساعدك إزاي في السيو؟")}</h1>
        <p className="mt-3 max-w-lg text-sm leading-7 text-muted-foreground md:text-base">{T("Free SEO answers, no signup. When you are ready for real work on your site, switch to Agent.", "إجابات سيو مجانية بدون تسجيل. وقت ما تبقى جاهز للشغل الفعلي على موقعك، حوّل على Agent.")}</p>
        <div className="mt-8 w-full text-start">{composer}</div>
        <div className="mt-6 flex flex-wrap justify-center gap-2">{d.faq.map(([qq, a], i) => { const Ic = sugIcons[i % sugIcons.length]; return (<button key={qq} type="button" onClick={() => askFaq(qq, a)} className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-2 text-start text-sm text-muted-foreground transition hover:-translate-y-0.5 hover:border-primary/60 hover:text-foreground"><Ic className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />{qq}</button>); })}</div>
      </div>
    ) : (<>
      <div id="ag-chat-log" className="relative mx-auto w-full max-w-3xl flex-1 space-y-7 px-5 pb-6 pt-8" aria-live="polite">
        <div className="flex justify-end"><button type="button" disabled={chatBusy} onClick={() => setChat([])} className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition hover:border-primary hover:text-primary disabled:opacity-50"><MessagesSquare className="h-3.5 w-3.5" aria-hidden="true" />{T("New chat", "محادثة جديدة")}</button></div>
        {chat.map((m, i) => (m.r === "u" ? (<div key={i} className="flex justify-end"><div className="max-w-[85%] whitespace-pre-wrap break-words rounded-3xl rounded-ee-lg bg-surface-2 px-5 py-3 text-[15px] leading-7">{m.t}</div></div>) : (<div key={i} className="flex gap-3">{avatar}<div className="min-w-0 flex-1 pt-1 text-[15px] leading-8"><div className="space-y-3">{renderMsg(m.t)}</div>{m.wa && <a href={m.wa} target="_blank" rel="noopener" className="mt-4 inline-flex h-10 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"><MessageCircle className="h-4 w-4" aria-hidden="true" />{d.send}</a>}</div></div>)))}
        {chatBusy && (<div className="flex items-center gap-3">{avatar}<span className="inline-flex items-center gap-1.5 pt-1" role="status"><span className="sr-only">{T("Thinking", "بفكر")}</span>{[0, 1, 2].map((n) => (<span key={n} className="h-2 w-2 animate-pulse rounded-full bg-primary/70" style={{ animationDelay: `${n * 180}ms` }} />))}</span></div>)}
        <div id="ag-chat-end" />
      </div>
      <div className="sticky bottom-0 z-20 bg-gradient-to-t from-background via-background/95 to-transparent px-5 pb-20 pt-8 sm:pb-6"><div className="mx-auto w-full max-w-3xl">{composer}</div></div>
    </>)}
  </section>);

  const sample = (<div className="relative" aria-hidden="true"><div className="absolute -inset-6 -z-10 rounded-[2rem] bg-primary/10 blur-3xl" />
    <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-black/30">
      <div className="flex items-center justify-between border-b border-border bg-background/40 px-4 py-3"><div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-red-400/70" /><span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" /><span className="h-2.5 w-2.5 rounded-full bg-primary/70" /></div><span className="text-[11px] text-muted-foreground">{T("Approval queue", "قائمة الموافقات")}</span></div>
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2"><span className="rounded-md bg-primary/15 px-2 py-0.5 text-[11px] font-medium text-primary">{T("Title", "العنوان")}</span><span className="rounded-full border border-border px-2 py-0.5 text-[10px] text-muted-foreground">AI</span><span dir="ltr" className="text-[11px] text-muted-foreground">/products/example</span></div>
        <div className="mt-4 space-y-2 text-sm leading-7"><div className="rounded-lg border border-border bg-background/50 p-3"><div className="text-[11px] font-medium text-muted-foreground">{T("Current", "الحالي")}</div><div className="text-muted-foreground line-through decoration-muted-foreground/40">{T("Product", "منتج")}</div></div><div className="rounded-lg border border-primary/40 bg-primary/10 p-3"><div className="text-[11px] font-medium text-primary">{T("Suggested", "المقترح")}</div><div>{T("Handmade Leather Wallet | Free Shipping", "محفظة جلد يدوية | شحن مجاني")}</div></div></div>
        <div className="mt-4 flex gap-2"><span className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-primary px-4 text-xs font-semibold text-primary-foreground"><Check className="h-3.5 w-3.5" />{d.approve}</span><span className="inline-flex h-9 items-center rounded-lg border border-border px-4 text-xs text-muted-foreground">{d.reject}</span></div>
      </div>
      <div className="grid grid-cols-3 border-t border-border bg-background/40 text-center text-[11px]">{[T("Fix", "تعديل"), T("Approve", "موافقة"), T("Publish", "نشر")].map((s, i) => (<div key={s} className={`flex items-center justify-center gap-1.5 py-3 ${i === 1 ? "font-semibold text-primary" : "text-muted-foreground"}`}><span className={`h-1.5 w-1.5 rounded-full ${i === 1 ? "bg-primary" : "bg-border"}`} />{s}</div>))}</div>
    </div>
    <p className="mt-3 text-center text-[11px] text-muted-foreground">{T("Illustration of the format, not live data.", "توضيح للشكل فقط، وليست بيانات حقيقية.")}</p></div>);

  const agentPanel = () => {
    const r = run!;
    const top = r.res ? r.res.checks.filter((c) => c.status !== "pass").sort((a, b) => (a.status === b.status ? 0 : a.status === "fail" ? -1 : 1)).slice(0, 4) : [];
    return (<div className="relative"><div className="absolute -inset-6 -z-10 rounded-[2rem] bg-primary/10 blur-3xl" />
      <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-black/30" aria-live="polite">
        <div className="flex items-center justify-between border-b border-border bg-background/40 px-4 py-3"><span className="inline-flex items-center gap-2 text-xs font-medium"><span className="grid h-6 w-6 place-items-center rounded-md bg-primary text-primary-foreground"><Sparkles className="h-3.5 w-3.5" aria-hidden="true" /></span>SEO AGENT</span><button type="button" disabled={r.busy} onClick={() => setRun(null)} className="text-[11px] text-muted-foreground hover:text-primary">{T("Reset", "إعادة")}</button></div>
        <div className="space-y-4 p-5">
          <div className="flex justify-end"><div dir="ltr" className="max-w-[85%] break-all rounded-2xl rounded-ee-md bg-primary/15 px-4 py-2.5 text-sm text-primary">{url.trim()}</div></div>
          {r.busy && (<div className="rounded-2xl rounded-es-md border border-border bg-background/50 p-4"><ul className="space-y-2 text-sm">{steps.map((t, i) => (<li key={t} className={`flex items-center gap-2 ${i <= r.step ? "text-foreground" : "text-muted-foreground/50"}`}>{i < r.step ? <Check className="h-4 w-4 text-primary" aria-hidden="true" /> : i === r.step ? <Loader2 className="h-4 w-4 animate-spin text-primary" aria-hidden="true" /> : <span className="h-4 w-4" />}{t}</li>))}</ul></div>)}
          {!r.busy && r.err && (<div role="alert" className="rounded-2xl rounded-es-md border border-red-500/40 bg-red-500/5 p-4 text-sm leading-7">{r.err}</div>)}
          {!r.busy && r.res && (<div className="rounded-2xl rounded-es-md border border-border bg-background/50 p-4">
            <div className="flex items-center justify-between gap-3"><div><div className="text-xs text-muted-foreground">{T("Basic-check score", "درجة الفحوصات الأساسية")}</div><div dir="ltr" className="font-display text-4xl font-semibold text-primary">{r.res.score}<span className="text-base text-muted-foreground">/100</span></div></div><div className="flex flex-wrap justify-end gap-1.5 text-[11px]"><span className="rounded-full bg-primary/15 px-2.5 py-1 text-primary">{r.res.counts.pass} {T("passed", "سليم")}</span><span className="rounded-full bg-accent/15 px-2.5 py-1 text-accent">{r.res.counts.warn} {T("to improve", "للتحسين")}</span><span className="rounded-full bg-red-500/15 px-2.5 py-1 text-red-400">{r.res.counts.fail} {r.res.counts.fail === 1 ? T("issue", "مشكلة") : T("issues", "مشكلات")}</span></div></div>
            {top.length > 0 && <ul className="mt-4 space-y-2 border-t border-border pt-4">{top.map((c) => { const x = describe(r.res!.lang, c); return (<li key={c.id} className="flex items-start gap-2 text-sm leading-6"><span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${c.status === "fail" ? "bg-red-400" : "bg-accent"}`} /><span className="min-w-0 break-words">{x.t}</span></li>); })}</ul>}
            <p className="mt-4 text-[11px] leading-5 text-muted-foreground">{T("Read-only check of your public pages. Nothing on your site was changed.", "فحص للقراءة فقط لصفحاتك العامة. لم يتغير أي شيء في موقعك.")}</p>
          </div>)}
          {!r.busy && r.res && (<div className="rounded-2xl border border-primary/40 bg-primary/5 p-4"><div className="text-sm font-semibold">{T("Want the agent to fix these?", "عايز الوكيل يصلّح دول؟")}</div><p className="mt-1 text-xs leading-6 text-muted-foreground">{T("This is where we ask for your details and, only if you choose, your store login through a secure link.", "هنا بس نطلب بياناتك، ولو اخترت نطلب دخول متجرك عبر رابط آمن.")}</p><a href="#order" onClick={() => setSite(handHost(r.res!))} className={`${btnP} mt-3 w-full text-xs`}>{T("Hand it to the agent", "سلّمه للوكيل")}<ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" /></a></div>)}
        </div>
      </div></div>);
  };

  return (
    <div id="ag-root" className="min-h-screen" dir={d.dir} lang={lang}>
      {nav}
      {subnav}
      <main>
        {mode === "chat" ? chatPanel : (<>
        <section className="relative overflow-hidden border-b border-border"><div className="absolute inset-0 grid-bg" aria-hidden="true" /><div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-primary/10 to-transparent" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-12 md:px-6 md:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div data-ag>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 font-mono text-xs tracking-[0.15em] text-primary"><Sparkles className="h-3.5 w-3.5" aria-hidden="true" />{d.badge}</div>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.15] md:text-5xl lg:text-[2.85rem]">{d.h1}</h1>
              <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">{d.intro}</p>
              <form onSubmit={runAgent} className="mt-8 max-w-xl"><label htmlFor="ag-url" className="sr-only">{d.site}</label>
                <div className="flex flex-col gap-2 rounded-2xl border border-border bg-surface/80 p-2 shadow-lg shadow-black/20 transition focus-within:border-primary/60 focus-within:ring-2 focus-within:ring-primary/20 sm:flex-row"><input id="ag-url" disabled={run?.busy} dir="ltr" inputMode="url" autoComplete="off" value={url} onChange={(e) => setUrl(e.target.value)} placeholder={T("Type your website, e.g. yourstore.com", "yourstore.com")} className="h-12 min-w-0 flex-1 rounded-xl bg-transparent px-4 text-sm placeholder:text-muted-foreground/60 focus:outline-none" /><button type="submit" disabled={run?.busy} className={`${btnP} sm:w-auto disabled:opacity-60`}>{run?.busy ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <Sparkles className="h-4 w-4" aria-hidden="true" />}{T("Start now", "ابدأ الآن")}</button></div>
                <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground"><span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary" aria-hidden="true" />{T("No signup", "بدون تسجيل")}</span><span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary" aria-hidden="true" />{T("Free, read-only check", "فحص مجاني للقراءة فقط")}</span><span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary" aria-hidden="true" />{T("Details only if you hand over the work", "بياناتك فقط لو سلّمت التنفيذ")}</span></p>
                <a href="#loop" className="mt-4 inline-block text-sm text-muted-foreground underline underline-offset-4 hover:text-primary">{d.cta2}</a></form>
              <p role="note" className="mt-8 flex max-w-xl items-start gap-3 rounded-xl border border-primary/30 bg-primary/5 p-4 text-sm leading-7"><Info className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" /><span>{T("Available now: work-order preparation and a local approval queue saved in your browser. Managed execution, secure access, change logging and rollback are rolling out and are not connected functions on this page yet.", "المتاح الآن: إعداد طلب العمل وقائمة موافقات محلية محفوظة في متصفحك. التنفيذ المُدار والوصول الآمن وتسجيل التعديلات والتراجع عنها قيد الإطلاق وليست وظائف متصلة في هذه الصفحة حتى الآن.")}</span></p>
            </div>
            <div data-ag className="lg:ps-4">{run ? agentPanel() : sample}</div>
          </div></section>

        <section id="loop" className={sec}><div className={wrap}>{head(T("The flow", "الخطوات"), d.loopTitle)}
          <ol className="mt-12 grid gap-4 md:grid-cols-4">{d.loop.map(([t, x], i) => { const Ic = [Sparkles, UserCheck, FileCheck2, History][i]; return (<li key={t} data-ag style={{ transitionDelay: `${i * 70}ms` }} className="group relative rounded-2xl border border-border bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/50"><div className="flex items-center justify-between"><div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground"><Ic className="h-5 w-5" aria-hidden="true" /></div><span dir="ltr" className="font-mono text-2xl font-semibold text-border">{`0${i + 1}`}</span></div><h3 className="mt-5 text-lg font-semibold">{t}</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">{x}</p></li>); })}</ol></div></section>

        <section id="phases" className={`${sec} bg-surface/30`}><div className={wrap}>{head(T("Scope", "النطاق"), d.phTitle, d.phSub)}
          <ol className="mt-12 grid gap-4 md:grid-cols-2">{d.phases.map(([t, req, needs, does, lvl], i) => { const on = ph.includes(i); const hard = i === 3 || i === 4; return (<li key={t} data-ag className="min-w-0"><label className={`relative flex h-full cursor-pointer flex-col rounded-2xl border p-6 transition duration-200 focus-within:ring-2 focus-within:ring-primary/40 ${on ? "border-primary/60 bg-primary/5" : "border-border bg-surface hover:border-primary/40"}`}>
            <input type="checkbox" checked={on} onChange={() => setPh((v) => (v.includes(i) ? v.filter((x) => x !== i) : [...v, i].sort()))} className="sr-only" />
            <div className="flex items-start justify-between gap-3"><div className="flex items-center gap-3"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/15 font-mono text-sm text-primary" dir="ltr">{i + 1}</span><h3 className="text-lg font-semibold leading-snug">{t}</h3></div><span className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border transition ${on ? "border-primary bg-primary text-primary-foreground" : "border-border text-transparent"}`} aria-hidden="true"><Check className="h-3.5 w-3.5" /></span></div>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">{does}</p>
            <dl className="mt-4 space-y-3 border-t border-border pt-4 text-sm leading-7"><div><dt className="text-xs font-medium text-primary">{d.phNeeds}</dt><dd className="text-muted-foreground">{needs}</dd></div></dl>
            <div className="mt-auto flex flex-wrap items-center gap-2 pt-4"><span className={`rounded-full px-3 py-1 text-xs font-medium ${hard ? "bg-accent/15 text-accent" : "bg-primary/15 text-primary"}`}>{req}</span><span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">{lvl}</span></div></label></li>); })}</ol>
          <div data-ag className="mt-6 grid gap-4 md:grid-cols-2"><div className="flex items-start gap-3 rounded-xl border border-primary/30 bg-primary/5 p-4 text-sm leading-7"><Lock className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />{d.phSecure}</div><div className="rounded-xl border border-border bg-surface p-4 text-sm leading-7"><div className="font-semibold">{d.phNever}</div><p className="text-muted-foreground">{d.phNeverList}</p></div></div>
          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-border bg-surface p-4 sm:flex-row sm:px-6"><div className="text-sm"><span dir="ltr" className="font-mono text-lg font-semibold text-primary">{ph.length}/{phaseTotal}</span> <span className="text-muted-foreground">{T("phases selected", "مراحل مختارة")}</span></div><a href="#order" className={`${btnP} w-full sm:w-auto`}>{T("Continue to work order", "تابع إلى طلب العمل")}<ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" /></a></div>
        </div></section>

        <section id="order" className={sec}><div className={wrap}>{head(T("Execution", "التنفيذ"), d.orderTitle, T("Everything above is free and needs no account. Only when you hand over the work do we ask for your details; logins always go through a secure one-time link, never this form or chat.", "كل ما سبق مجاني وبدون حساب. بياناتك نطلبها فقط عندما تسلّم التنفيذ، وبيانات الدخول دائمًا عبر رابط آمن لمرة واحدة، وليس هذا النموذج ولا المحادثة."))}
          <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div data-ag className="space-y-6 rounded-2xl border border-border bg-surface p-5 md:p-8">
              <div><label htmlFor="ag-site" className="text-sm font-medium">{d.site}</label><input id="ag-site" dir="ltr" inputMode="url" autoComplete="off" value={site} onChange={(e) => setSite(e.target.value)} placeholder={d.sitePh} className={inp} /></div>
              <div className="grid gap-4 sm:grid-cols-2"><div><label htmlFor="ag-pf" className="text-sm font-medium">{d.platform}</label><select id="ag-pf" value={platform} onChange={(e) => setPlatform(Number(e.target.value))} className={inp}>{d.platforms.map((p, i) => <option key={p} value={i}>{p}</option>)}</select></div><div><label htmlFor="ag-kind" className="text-sm font-medium">{d.kind}</label><select id="ag-kind" value={kind} onChange={(e) => setKind(Number(e.target.value))} className={inp}>{d.kinds.map((p, i) => <option key={p} value={i}>{p}</option>)}</select></div></div>
              <fieldset><legend className="text-sm font-medium">{d.goals}</legend><div className="mt-3 flex flex-wrap gap-2">{d.goalList.map((g, i) => { const on = goals.includes(i); return (<label key={g} className={`inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm transition focus-within:ring-2 focus-within:ring-primary/40 ${on ? "border-primary/60 bg-primary/10 text-foreground" : "border-border bg-background/40 text-muted-foreground hover:border-primary/40"}`}><input type="checkbox" checked={on} onChange={() => setGoals((v) => (v.includes(i) ? v.filter((x) => x !== i) : [...v, i]))} className="sr-only" />{on && <Check className="h-3.5 w-3.5 text-primary" aria-hidden="true" />}{g}</label>); })}</div></fieldset>
              <fieldset><legend className="text-sm font-medium">{d.access}</legend><div className="mt-3 space-y-2">{d.accessList.map(([v, t]) => { const on = access === v; return (<label key={v} className={`flex cursor-pointer items-start gap-3 rounded-xl border px-4 py-3 text-sm leading-7 transition focus-within:ring-2 focus-within:ring-primary/40 ${on ? "border-primary/60 bg-primary/5" : "border-border bg-background/40 hover:border-primary/40"}`}><input type="radio" name="ag-access" checked={on} onChange={() => setAccess(v)} className="sr-only" /><span className={`mt-1.5 grid h-4 w-4 shrink-0 place-items-center rounded-full border ${on ? "border-primary" : "border-border"}`} aria-hidden="true">{on && <span className="h-2 w-2 rounded-full bg-primary" />}</span>{t}</label>); })}</div></fieldset>
              <div className="flex items-start gap-3 rounded-xl border border-primary/30 bg-primary/5 p-4 text-sm"><Lock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" /><div><div className="font-semibold">{d.approval}</div><p className="mt-1 leading-7 text-muted-foreground">{d.approvalVal}</p></div></div>
              <div className="grid gap-4 sm:grid-cols-2"><div><label htmlFor="ag-who" className="text-sm font-medium">{d.contact}</label><input id="ag-who" value={who} maxLength={80} onChange={(e) => setWho(e.target.value)} className={inp} /></div><div><label htmlFor="ag-notes" className="text-sm font-medium">{d.notes}</label><input id="ag-notes" value={notes} maxLength={500} onChange={(e) => setNotes(e.target.value)} placeholder={d.notesPh} className={inp} /></div></div>
              <p className="flex items-start gap-2 text-xs leading-6 text-muted-foreground"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />{d.secret}</p>
            </div>
            <aside data-ag className="space-y-5 lg:sticky lg:top-32">
              <div className="rounded-2xl border border-border bg-surface p-5 md:p-6"><div className="flex items-center gap-2 text-sm font-semibold"><ClipboardList className="h-4 w-4 text-primary" aria-hidden="true" />{d.result}</div>
                {order ? (<><pre dir="ltr" className="mt-4 max-w-full overflow-x-auto whitespace-pre-wrap break-words rounded-xl border border-border bg-background p-4 text-xs leading-6">{order}</pre>
                  <div className="mt-4 flex flex-wrap gap-2"><a href={waLink(order)} target="_blank" rel="noopener" className="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground glow-primary transition hover:opacity-95"><MessageCircle className="h-4 w-4" aria-hidden="true" />{d.send}</a><CopyBtn text={order} label={d.copy} done={d.copied} /><button type="button" onClick={() => download("seo-agent-work-order.txt", order, "text/plain")} className="inline-flex h-11 items-center gap-2 rounded-xl border border-border px-4 text-sm font-medium transition hover:border-primary hover:text-primary"><Download className="h-4 w-4" aria-hidden="true" />{d.dl}</button></div></>) : <p className="mt-4 rounded-xl border border-dashed border-border p-5 text-center text-sm leading-7 text-muted-foreground">{d.needSite}</p>}</div>
              <div className="rounded-2xl border border-border bg-surface p-5 md:p-6"><h3 className="text-sm font-semibold">{d.statusTitle}</h3><ol className="mt-4 space-y-4">{d.status.map(([t, x], i) => (<li key={t} className="relative flex gap-3"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary/15 font-mono text-xs text-primary" dir="ltr">{i + 1}</span><div><div className="text-sm font-medium">{t}</div><p className="mt-0.5 text-xs leading-6 text-muted-foreground">{x}</p></div></li>))}</ol><p className="mt-4 border-t border-border pt-3 text-xs leading-6 text-muted-foreground">{d.statusNote}</p></div>
            </aside>
          </div>
        </div></section>

        <section id="queue" className={`${sec} bg-surface/30`}><div className="mx-auto max-w-4xl px-5 py-16 md:px-6 md:py-24">{head(T("Step 3", "الخطوة ٣"), d.queueTitle, d.queueSub)}
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

        <section id="safety" className={sec}><div className={wrap}>{head(T("Trust", "الثقة"), d.safeTitle)}
          <ul className="mt-12 grid gap-4 md:grid-cols-2">{d.safe.map((x, i) => (<li key={x} data-ag style={{ transitionDelay: `${(i % 2) * 70}ms` }} className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5 text-sm leading-7 transition hover:border-primary/40"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary"><ShieldCheck className="h-4 w-4" aria-hidden="true" /></span><span className="pt-1">{x}</span></li>))}</ul>
          <div data-ag className="mx-auto mt-14 max-w-3xl"><h3 className="text-center text-lg font-semibold">{d.connTitle}</h3><p className="mt-1 text-center text-sm text-muted-foreground">{d.connSub}</p>
            <ul className="mt-6 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">{d.conn.map(([n, s2, k]) => (<li key={n} className="flex flex-wrap items-center justify-between gap-3 p-4 text-sm"><span className="font-medium">{n}</span><span className={`rounded-full px-3 py-1 text-xs ${k === "ok" ? "bg-primary/15 text-primary" : "border border-border text-muted-foreground"}`}>{s2}</span></li>))}</ul></div>
        </div></section>

        <section className="border-b border-border bg-surface/30"><div className="mx-auto max-w-3xl px-5 py-16 md:px-6 md:py-24">{head(T("FAQ", "أسئلة"), d.faqTitle)}<div data-ag className="mt-10 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">{d.faq.map(([qq, a]) => (<details key={qq} className="group p-5 open:bg-primary/5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">{qq}<ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" aria-hidden="true" /></summary><p className="mt-3 text-sm leading-7 text-muted-foreground">{a}</p></details>))}</div></div></section>

        <section className="relative overflow-hidden"><div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" /><div data-ag className="relative mx-auto max-w-3xl px-5 py-20 text-center md:px-6 md:py-28"><h2 className="text-3xl font-semibold leading-tight md:text-4xl">{d.final}</h2><div className="mt-8 flex justify-center"><a href="#order" onClick={() => setMode("agent")} className={btnP}>{d.cta}<ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" /></a></div></div></section>
        </>)}
      </main>
    </div>
  );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           }
