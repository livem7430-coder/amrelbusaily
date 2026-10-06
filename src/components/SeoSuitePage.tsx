import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, Check, Copy, Download, FileDown, KeyRound, Loader2, Lock, Search, ShieldCheck, Sparkles, Wand2 } from "lucide-react";
import type { AuditResult, PageFacts } from "@/lib/seo-audit.server";
import type { Fix, Kw } from "@/lib/seo-suite.server";
import { aggregate } from "@/lib/seo-audit-full";
import type { Lang } from "@/lib/seo-audit-copy";

const base = "https://amrelbusaily.vercel.app";
export const SUITE_BUY_URL = "https://amrelbus.gumroad.com/l/seo-suite";
const PRICE = { en: "500 SAR one-time", ar: "500 ريال مرة واحدة" };

const ui = {
  en: {
    dir: "ltr", home: "/", free: "/seo-audit", full: "/seo-audit/full", other: "/ar/seo-suite", lang: "AR", name: "Amr Elbusaily", packages: "/packages", consult: "/free-consultation",
    title: "AI SEO Suite for E-commerce Stores | Full Audit + Ready-to-Paste Fixes",
    description: "Audit your whole store, then let AI write the fixes: titles, meta descriptions, product descriptions, image alt text and Product schema, ready to copy or export. One-time purchase.",
    badge: "AI-POWERED · SEO SUITE", h1: "Audit your store. Let AI write the fixes.",
    intro: "The Suite crawls up to 25 pages, measures real technical problems, then uses AI to write the replacement titles, meta descriptions, product descriptions, image alt text and Product schema for your pages. Copy each fix, or export everything in one click.",
    chips: ["Whole-site audit", "AI-written fixes", "AI keyword map", "Content briefs", "Internal links", "One-click export"],
    buy: "Get the Suite", price: PRICE.en, buyNote: "Opens Gumroad. Your license key arrives by email after payment.",
    haveKey: "Already have a key? Enter it with your store address.", keyLabel: "License key", keyPh: "Paste your license key", urlLabel: "Store URL", urlPh: "yourstore.com", run: "Run the Suite", running: "Running…",
    stages: ["Find pages", "Measure problems", "Read page content", "AI writes fixes", "AI keyword map"], found: (n: number) => `${n} pages found`, auditing: (a: number, b: number) => `Measuring page ${a} of ${b}`, reading: (a: number, b: number) => `Reading page ${a} of ${b}`, writing: (a: number, b: number) => `AI is writing fixes, batch ${a} of ${b}`,
    errors: { license_required: "Enter your license key.", license_invalid: "This license key was not recognized for the SEO Suite.", license_refunded: "This purchase was refunded, so the key no longer works.", license_unavailable: "We could not reach the license service. Try again in a minute.", not_configured: "The Suite is not open yet. Please check back soon.", rate_limited: "Too many requests. Wait a minute and try again.", invalid_url: "That does not look like a valid address.", blocked: "This address cannot be audited.", unreachable: "We could not reach that site.", timeout: "The site took too long to respond.", not_html: "That address did not return a web page.", generic: "Something went wrong. Please try again." } as Record<string, string>,
    flowTitle: "From problems to fixes, automatically", flow: [["Measure", "Real checks on every page: indexing, titles, meta, headings, links, structured data, images."], ["Read", "The Suite reads each page's current title, description, product data and images."], ["Write", "AI drafts the replacement copy from those facts only, in the page's own language."], ["Export", "Copy a fix, or download everything as JSON or CSV."]],
    valTitle: "One run, the whole SEO package", val: [["AI-written titles and meta descriptions", "Right length, on-topic, brand included, only where the current one is missing, too short or too long."], ["Product description rewrites", "Clean copy built only from facts on your own page."], ["Image alt text", "Descriptive alt text for every product image that has none."], ["Product schema (JSON-LD)", "Ready-to-paste Product structured data from the facts on the page."], ["AI keyword map", "Buyer-intent, long-tail and question keywords for every product and category. No made-up volume or difficulty numbers."], ["Content briefs", "Headings, FAQs and points to cover for each page, written by AI from what the page is about."], ["Google result preview", "See each title and description as a search result, with approximate pixel-width truncation."], ["Internal link suggestions", "Which pages should link to which, found by comparing the wording of your pages."], ["Overlap finder", "Spots pages that may compete for the same search."], ["White-label PDF", "Add a client or store name and print a clean report for your customer."]],
    honestTitle: "How the AI is used", honest: "AI writes copy only from facts found on your pages. It cannot see images, so alt text uses the product name or heading. If the AI service is busy, the Suite falls back to template fixes built from your own page text, and marks them as Template instead of AI. Review every fix before you publish it.",
    faqTitle: "Questions", faq: [["Is this a subscription?", "No. It is a one-time purchase on Gumroad."], ["Does it change my store?", "No. It never logs in to or edits your store. You copy the fixes yourself. Direct apply for Salla and Zid is planned for a later version."], ["How many pages does it cover?", "Up to 25 pages are audited. AI fixes are written for up to 12 of them per run, product pages first."], ["Will the fixes boost my rankings?", "No one can promise rankings. The fixes remove measured problems and give you better copy to review and publish."], ["Is my data stored?", "No. Runs happen on request and nothing about your store is saved on this server."]],
    final: "Ready to get your fixes written?",
    kwTitle: "Keyword map", kwNote: "AI keyword ideas built from what each page is about. No search volume or difficulty is shown because that data is not available without paid sources.", kwOff: "The AI service was busy, so no keyword ideas were produced. Run the Suite again in a few minutes.", buyer: "Buyer-intent keywords", longtail: "Long-tail keywords", questions: "Question keywords", briefTitle: "Content brief", headings: "Suggested headings", faqs: "FAQs to answer on the page", points: "Points to cover", linksTitle: "Internal link suggestions", linksNote: "Matched by shared wording between the pages we read (TF-IDF). Add a link from the first page to the second using a natural anchor.", linkFrom: "Link from", linkTo: "to", shared: "Shared terms", noLinks: "Not enough pages with similar topics were read to suggest links.", serp: "Google result preview", serpNote: "Approximate pixel-width preview. Real results can differ.", client: "Client or store name for the PDF (optional)", clientPh: "Shown on the printed report", preparedFor: "Prepared for", none2: "No keyword ideas for this page.", overTitle: "Pages that may compete with each other", overNote: "These pages use very similar wording, so they may target the same search intent. Check whether they should be merged, differentiated or linked with a canonical.",
    report: "SEO Suite report", score: "Basic-check score", pages: "Pages audited", high: "High priority", med: "Medium priority", fixesN: "AI fix packs", tabs: ["Priority issues", "AI fix pack", "Keyword map", "Content and links", "Pages", "Export"],
    aiOn: "Written by AI from your page facts", aiOff: "AI was busy, so these are template fixes from your page text", ai: "AI", tpl: "Template", current: "Current", suggested: "Suggested", missing: "(missing)", copy: "Copy", copied: "Copied", title2: "Title", meta: "Meta description", desc: "Product description", alts: "Image alt text", schema: "Product schema (JSON-LD)", noFix: "No change needed", copyAll: "Copy all fixes", json: "Download JSON", csv: "Download CSV", pdf: "Download PDF report", pdfHint: "In the print window choose Save as PDF.", again: "Run another store",
    colPage: "Page", colScore: "Score", colFail: "Problems", colWarn: "To improve", scope: "Findings are measured on the HTML each page returns. Guideline items are editorial thresholds, not Google rules. The Suite does not measure real-user Core Web Vitals, indexing status or rankings. AI text is a draft: review it before publishing.",
    high2: "High", medium: "Medium", site: "Whole site", affected: (n: number) => `${n} page${n === 1 ? "" : "s"} affected`, more: (n: number) => `and ${n} more`, none: "No issues found in the checks this tool can run.", generated: "Generated",
  },
  ar: {
    dir: "rtl", home: "/ar", free: "/ar/seo-audit", full: "/ar/seo-audit/full", other: "/seo-suite", lang: "EN", name: "عمرو البصيلي", packages: "/ar/packages", consult: "/ar/free-consultation",
    title: "حزمة SEO بالذكاء الاصطناعي للمتاجر الإلكترونية | فحص شامل + تعديلات جاهزة",
    description: "افحص متجرك بالكامل ثم دع الذكاء الاصطناعي يكتب التعديلات: العناوين والوصف وأوصاف المنتجات ونصوص الصور وسكيما المنتج، جاهزة للنسخ أو التصدير. دفعة واحدة.",
    badge: "بالذكاء الاصطناعي · حزمة السيو", h1: "افحص متجرك ودع الذكاء الاصطناعي يكتب الحلول",
    intro: "تفحص الحزمة حتى 25 صفحة وتقيس المشاكل التقنية الفعلية، ثم يكتب الذكاء الاصطناعي العناوين ووصف الميتا وأوصاف المنتجات ونصوص الصور وسكيما المنتج البديلة لصفحاتك. انسخ كل تعديل أو صدّر الكل بضغطة.",
    chips: ["فحص الموقع بالكامل", "تعديلات بالذكاء الاصطناعي", "خريطة كلمات مفتاحية", "ملخصات محتوى", "روابط داخلية", "تصدير بضغطة"],
    buy: "احصل على الحزمة", price: PRICE.ar, buyNote: "يفتح Gumroad. يصلك مفتاح الترخيص بالبريد بعد الدفع.",
    haveKey: "لديك مفتاح؟ أدخله مع رابط متجرك.", keyLabel: "مفتاح الترخيص", keyPh: "الصق مفتاح الترخيص", urlLabel: "رابط المتجر", urlPh: "yourstore.com", run: "شغّل الحزمة", running: "جارٍ التشغيل…",
    stages: ["تحديد الصفحات", "قياس المشاكل", "قراءة محتوى الصفحات", "الذكاء الاصطناعي يكتب الحلول", "خريطة الكلمات بالـ AI"], found: (n: number) => `تم العثور على ${n} صفحة`, auditing: (a: number, b: number) => `قياس الصفحة ${a} من ${b}`, reading: (a: number, b: number) => `قراءة الصفحة ${a} من ${b}`, writing: (a: number, b: number) => `الذكاء الاصطناعي يكتب الحلول، الدفعة ${a} من ${b}`,
    errors: { license_required: "أدخل مفتاح الترخيص.", license_invalid: "هذا المفتاح غير معروف لحزمة السيو.", license_refunded: "تم استرداد هذه العملية، لذلك لم يعد المفتاح يعمل.", license_unavailable: "تعذر الوصول إلى خدمة التراخيص. حاول بعد دقيقة.", not_configured: "الحزمة لم تُفتح بعد. عد قريبًا.", rate_limited: "طلبات كثيرة. انتظر دقيقة ثم حاول.", invalid_url: "هذا لا يبدو رابطًا صحيحًا.", blocked: "لا يمكن فحص هذا العنوان.", unreachable: "لم نتمكن من الوصول إلى الموقع.", timeout: "استغرق الموقع وقتًا طويلًا في الرد.", not_html: "هذا العنوان لم يرجع صفحة ويب.", generic: "حدث خطأ. حاول مرة أخرى." } as Record<string, string>,
    flowTitle: "من المشاكل إلى الحلول تلقائيًا", flow: [["قياس", "فحوصات فعلية لكل صفحة: الأرشفة والعناوين والوصف والعناوين الفرعية والروابط والبيانات المنظمة والصور."], ["قراءة", "تقرأ الحزمة عنوان كل صفحة ووصفها وبيانات المنتج والصور الحالية."], ["كتابة", "يكتب الذكاء الاصطناعي النص البديل من هذه الحقائق فقط وبلغة الصفحة نفسها."], ["تصدير", "انسخ أي تعديل أو نزّل الكل بصيغة JSON أو CSV."]],
    valTitle: "تشغيل واحد، حزمة سيو كاملة", val: [["عناوين ووصف ميتا بالذكاء الاصطناعي", "بالطول المناسب ومرتبطة بالموضوع وتتضمن اسم المتجر، فقط حيث يكون الحالي ناقصًا أو قصيرًا أو طويلًا."], ["إعادة كتابة أوصاف المنتجات", "نص نظيف مبني فقط على حقائق من صفحتك."], ["نصوص بديلة للصور", "نص بديل وصفي لكل صورة منتج بدون نص بديل."], ["سكيما المنتج (JSON-LD)", "بيانات منظمة للمنتج جاهزة للصق من حقائق الصفحة."], ["خريطة كلمات مفتاحية بالذكاء الاصطناعي", "كلمات نية الشراء وطويلة وأسئلة لكل منتج وقسم. بدون أرقام حجم بحث أو صعوبة مختلقة."], ["ملخصات المحتوى", "عناوين وأسئلة شائعة ونقاط للتغطية لكل صفحة، بالذكاء الاصطناعي بناءً على موضوع الصفحة."], ["معاينة نتيجة جوجل", "شاهد كل عنوان ووصف كنتيجة بحث مع قص تقريبي بالبكسل."], ["اقتراحات الروابط الداخلية", "أي الصفحات تربط بأي، بمقارنة صياغة صفحاتك."], ["كاشف التداخل", "يكشف الصفحات التي قد تتنافس على نفس البحث."], ["PDF بعلامة العميل", "أضف اسم العميل أو المتجر واطبع تقريرًا نظيفًا لعميلك."]],
    honestTitle: "كيف يُستخدم الذكاء الاصطناعي", honest: "يكتب الذكاء الاصطناعي من الحقائق الموجودة في صفحاتك فقط. لا يرى الصور، لذلك يعتمد نص الصورة البديل على اسم المنتج أو العنوان. إذا كانت الخدمة مشغولة تعود الحزمة لتعديلات قالبية من نص صفحتك وتُعلَّم بكلمة «قالب» بدل «AI». راجع كل تعديل قبل نشره.",
    faqTitle: "أسئلة شائعة", faq: [["هل هو اشتراك؟", "لا. هو شراء لمرة واحدة على Gumroad."], ["هل يعدّل متجري؟", "لا. لا يسجل الدخول إلى متجرك ولا يعدّل فيه. تنسخ التعديلات بنفسك. التطبيق المباشر على سلة وزد مخطط لنسخة لاحقة."], ["كم صفحة يغطي؟", "يفحص حتى 25 صفحة، ويكتب الذكاء الاصطناعي تعديلات لما يصل إلى 12 منها في كل مرة، وصفحات المنتجات أولًا."], ["هل ترفع التعديلات ترتيبي؟", "لا أحد يضمن الترتيب. التعديلات تزيل مشاكل مقاسة وتعطيك نصًا أفضل لتراجعه وتنشره."], ["هل تُحفظ بياناتي؟", "لا. التشغيل عند الطلب ولا يُحفظ شيء عن متجرك على هذا السيرفر."]],
    final: "جاهز لتكتب لك الحلول؟",
    kwTitle: "خريطة الكلمات المفتاحية", kwNote: "أفكار كلمات مفتاحية بالذكاء الاصطناعي مبنية على موضوع كل صفحة. لا نعرض حجم البحث ولا الصعوبة لأن هذه البيانات غير متاحة بدون مصادر مدفوعة.", kwOff: "خدمة الذكاء الاصطناعي كانت مشغولة فلم تُنتج أفكار كلمات. شغّل الحزمة مرة أخرى بعد دقائق.", buyer: "كلمات نية الشراء", longtail: "كلمات طويلة (Long-tail)", questions: "كلمات على شكل أسئلة", briefTitle: "ملخص المحتوى", headings: "عناوين مقترحة", faqs: "أسئلة شائعة تُجاب في الصفحة", points: "نقاط يجب تغطيتها", linksTitle: "اقتراحات الروابط الداخلية", linksNote: "مطابقة بحسب الكلمات المشتركة بين الصفحات التي قرأناها (TF-IDF). أضف رابطًا من الصفحة الأولى إلى الثانية بنص طبيعي.", linkFrom: "رابط من", linkTo: "إلى", shared: "كلمات مشتركة", noLinks: "لم نقرأ صفحات متقاربة بما يكفي لاقتراح روابط.", serp: "معاينة نتيجة جوجل", serpNote: "معاينة تقريبية بالبكسل. النتيجة الفعلية قد تختلف.", client: "اسم العميل أو المتجر للـ PDF (اختياري)", clientPh: "يظهر في التقرير المطبوع", preparedFor: "أُعد لـ", none2: "لا توجد أفكار كلمات لهذه الصفحة.", overTitle: "صفحات قد تتنافس مع بعضها", overNote: "هذه الصفحات متشابهة جدًا في الصياغة وقد تستهدف نفس نية البحث. راجع هل يجب دمجها أو تمييزها أو ربطها بـ canonical.",
    report: "تقرير حزمة السيو", score: "درجة الفحوصات الأساسية", pages: "الصفحات المفحوصة", high: "أولوية عالية", med: "أولوية متوسطة", fixesN: "حزم تعديلات AI", tabs: ["المشاكل حسب الأولوية", "حزمة تعديلات AI", "خريطة الكلمات", "المحتوى والروابط", "الصفحات", "التصدير"],
    aiOn: "كتبه الذكاء الاصطناعي من حقائق صفحتك", aiOff: "الذكاء الاصطناعي كان مشغولًا، فهذه تعديلات قالبية من نص صفحتك", ai: "AI", tpl: "قالب", current: "الحالي", suggested: "المقترح", missing: "(غير موجود)", copy: "نسخ", copied: "تم النسخ", title2: "العنوان", meta: "وصف الميتا", desc: "وصف المنتج", alts: "نصوص الصور البديلة", schema: "سكيما المنتج (JSON-LD)", noFix: "لا تعديل مطلوب", copyAll: "انسخ كل التعديلات", json: "نزّل JSON", csv: "نزّل CSV", pdf: "حمّل تقرير PDF", pdfHint: "في نافذة الطباعة اختر «حفظ بصيغة PDF».", again: "شغّل متجرًا آخر",
    colPage: "الصفحة", colScore: "الدرجة", colFail: "مشاكل", colWarn: "للتحسين", scope: "النتائج مقاسة على كود HTML الذي ترجعه كل صفحة. عناصر «إرشاد» حدود تحريرية وليست قواعد من Google. لا تقيس الحزمة Core Web Vitals الفعلية ولا حالة الأرشفة ولا الترتيب. نص الذكاء الاصطناعي مسودة: راجعه قبل النشر.",
    high2: "عالية", medium: "متوسطة", site: "الموقع كله", affected: (n: number) => `${n} صفحة متأثرة`, more: (n: number) => `و${n} أخرى`, none: "لم نجد مشاكل ضمن الفحوصات التي تجريها الأداة.", generated: "تاريخ الإنشاء",
  },
} as const;

export function seoSuiteHead(lang: Lang) {
  const d = ui[lang];
  const url = `${base}${lang === "ar" ? "/ar/seo-suite" : "/seo-suite"}`;
  return {
    meta: [
      { title: d.title }, { name: "description", content: d.description }, { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: d.title }, { property: "og:description", content: d.description }, { property: "og:type", content: "website" }, { property: "og:url", content: url },
      { property: "og:locale", content: lang === "ar" ? "ar_EG" : "en_US" }, { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@graph": [
      { "@type": "Product", name: lang === "ar" ? "حزمة SEO بالذكاء الاصطناعي للمتاجر" : "AI SEO Suite for E-commerce Stores", description: d.description, url, brand: { "@type": "Person", name: "Amr Elbusaily" }, offers: { "@type": "Offer", price: "500.00", priceCurrency: "SAR", availability: "https://schema.org/InStock", url: SUITE_BUY_URL } },
      { "@type": "FAQPage", mainEntity: d.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
    ] }) }],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "ar", href: `${base}/ar/seo-suite` }, { rel: "alternate", hrefLang: "en", href: `${base}/seo-suite` }, { rel: "alternate", hrefLang: "x-default", href: `${base}/seo-suite` },
    ],
  };
}

async function call(body: Record<string, unknown>): Promise<any> {
  const res = await fetch("/api/seo-suite", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) });
  try { return await res.json(); } catch { return { ok: false, error: "generic" }; }
}
const printCss = `@media print{header,.no-print,footer,.fixed{display:none!important}html,body,.print-root,.print-root *{background:#fff!important;color:#111!important;box-shadow:none!important;border-color:#ccc!important}.print-root{min-height:0!important}.print-card{break-inside:avoid;page-break-inside:avoid}.tabpanel{display:block!important}@page{margin:14mm}}`;

let _ctx: CanvasRenderingContext2D | null = null;
function px(text: string, font: string): number {
  if (typeof document === "undefined") return text.length * 9;
  _ctx = _ctx ?? document.createElement("canvas").getContext("2d");
  if (!_ctx) return text.length * 9;
  _ctx.font = font;
  return _ctx.measureText(text).width;
}
function fit(text: string, font: string, max: number): string {
  if (px(text, font) <= max) return text;
  let lo = 0, hi = text.length;
  while (lo < hi) { const mid = Math.ceil((lo + hi) / 2); if (px(text.slice(0, mid) + "...", font) <= max) lo = mid; else hi = mid - 1; }
  return text.slice(0, lo).trimEnd() + "...";
}
function Serp({ url, title, desc, d }: { url: string; title: string; desc: string; d: { serp: string; serpNote: string } }) {
  let host = url, path = "";
  try { const u = new URL(url); host = u.host; path = u.pathname === "/" ? "" : u.pathname.split("/").filter(Boolean).join(" › "); } catch { /* keep raw */ }
  return (
    <div className="rounded-lg border border-border bg-background/50 p-3">
      <div className="text-xs font-semibold">{d.serp}</div>
      <div className="mt-2 overflow-hidden rounded-md bg-white p-3 text-start" dir="ltr" style={{ maxWidth: 600 }}>
        <div className="truncate text-[12px] text-[#4d5156]">{host}{path ? ` › ${path}` : ""}</div>
        <div className="mt-0.5 text-[18px] leading-6 text-[#1a0dab]" style={{ fontFamily: "arial, sans-serif" }}>{fit(title, "20px arial", 600)}</div>
        <div className="mt-0.5 text-[13px] leading-5 text-[#4d5156]" style={{ fontFamily: "arial, sans-serif" }}>{fit(desc, "14px arial", 1000)}</div>
      </div>
      <p className="mt-1 text-[11px] text-muted-foreground">{d.serpNote}</p>
    </div>
  );
}
type PageT = { toks: Map<string, number>; url: string };
const STOP = new Set("the and for with your you our are this that from have has not but all can will more than into out any one new get was were their they them his her its who what when where how why about also such only just over very".split(" "));
function linkSuggestions(facts: PageFacts[]): { links: Array<{ from: string; to: string; shared: string[] }>; overlaps: Array<{ a: string; b: string; shared: string[] }> } {
  const pages: PageT[] = facts.map((f) => {
    const m = new Map<string, number>();
    for (const w of `${f.title} ${f.h1.join(" ")} ${f.product?.name ?? ""} ${f.text}`.toLowerCase().split(/[^\p{L}\p{N}]+/u)) if (w.length >= 3 && !STOP.has(w) && !/^\d+$/.test(w)) m.set(w, (m.get(w) ?? 0) + 1);
    return { toks: m, url: f.finalUrl };
  });
  const df = new Map<string, number>();
  for (const p of pages) for (const w of p.toks.keys()) df.set(w, (df.get(w) ?? 0) + 1);
  const n = pages.length;
  const vec = pages.map((p) => { const v = new Map<string, number>(); let norm = 0; for (const [w, c] of p.toks) { if ((df.get(w) ?? 0) === n && n > 2) continue; const x = (1 + Math.log(c)) * Math.log(1 + n / (df.get(w) ?? 1)); v.set(w, x); norm += x * x; } return { v, norm: Math.sqrt(norm) || 1 }; });
  const out: Array<{ from: string; to: string; shared: string[]; score: number }> = [];
  const overlaps: Array<{ a: string; b: string; shared: string[]; score: number }> = [];
  for (let i = 0; i < n; i++) {
    const cand: Array<{ j: number; score: number; shared: string[] }> = [];
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      let dot = 0; const sh: Array<[string, number]> = [];
      for (const [w, x] of vec[i].v) { const y = vec[j].v.get(w); if (y) { dot += x * y; sh.push([w, x * y]); } }
      const score = dot / (vec[i].norm * vec[j].norm);
      if (score >= 0.6 && i < j && sh.length >= 4) overlaps.push({ a: pages[i].url, b: pages[j].url, shared: sh.sort((x, y) => y[1] - x[1]).slice(0, 4).map((e) => e[0]), score });
      if (score >= 0.12 && sh.length >= 3) cand.push({ j, score, shared: sh.sort((a, b) => b[1] - a[1]).slice(0, 4).map((e) => e[0]) });
    }
    cand.sort((a, b) => b.score - a.score);
    for (const c of cand.slice(0, 2)) out.push({ from: pages[i].url, to: pages[c.j].url, shared: c.shared, score: c.score });
  }
  return { links: out.sort((a, b) => b.score - a.score).slice(0, 20), overlaps: overlaps.sort((a, b) => b.score - a.score).slice(0, 8) };
}

function CopyBtn({ text, label, done }: { text: string; label: string; done: string }) {
  const [ok, setOk] = useState(false);
  return (
    <button type="button" onClick={() => { navigator.clipboard?.writeText(text).then(() => { setOk(true); setTimeout(() => setOk(false), 1500); }).catch(() => undefined); }}
      className="no-print inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium hover:border-primary hover:text-primary">
      {ok ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : <Copy className="h-3.5 w-3.5" aria-hidden="true" />}{ok ? done : label}
    </button>
  );
}
function Badge({ src, d }: { src: "ai" | "template"; d: (typeof ui)["en"] | (typeof ui)["ar"] }) {
  return src === "ai"
    ? <span className="inline-flex items-center gap-1 rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold text-primary"><Sparkles className="h-3 w-3" aria-hidden="true" />{d.ai}</span>
    : <span className="rounded-full border border-border px-2 py-0.5 text-[10px] text-muted-foreground">{d.tpl}</span>;
}

type Run = { audits: Array<{ url: string; r: AuditResult | null; error?: string }>; fixes: Fix[]; kws: Array<Kw | null>; kwAi: boolean; facts: PageFacts[]; ai: boolean; origin: string; at: string; source: string };

export function SeoSuitePage({ lang }: { lang: Lang }) {
  const d = ui[lang];
  const [key, setKey] = useState("");
  const [url, setUrl] = useState("");
  const [busy, setBusy] = useState(false);
  const [stage, setStage] = useState(-1);
  const [phase, setPhase] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [run, setRun] = useState<Run | null>(null);
  const [tab, setTab] = useState(0);
  const [client, setClient] = useState("");

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (busy) return;
    setError(null); setRun(null);
    const k = key.trim();
    if (!k) { setError(d.errors.license_required); return; }
    setBusy(true); setStage(0); setPhase("");
    try {
      const disc = await call({ action: "discover", key: k, url });
      if (!disc.ok) { setError(d.errors[disc.error] ?? d.errors.generic); return; }
      const urls: string[] = disc.urls;
      setPhase(d.found(urls.length));
      // stage 1: measure every page
      setStage(1);
      const audits: Run["audits"] = new Array(urls.length);
      let next = 0, done = 0, fatal: string | null = null;
      const worker = async () => {
        while (!fatal) {
          const i = next++; if (i >= urls.length) return;
          setPhase(d.auditing(Math.min(done + 1, urls.length), urls.length));
          const r = await call({ action: "page", key: k, url: urls[i] });
          if (r.ok) audits[i] = { url: urls[i], r };
          else if (["license_invalid", "license_refunded", "rate_limited", "license_unavailable"].includes(r.error)) { fatal = r.error; return; }
          else audits[i] = { url: urls[i], r: null, error: r.error };
          done++;
        }
      };
      await Promise.all([worker(), worker()]);
      if (fatal) { setError(d.errors[fatal] ?? d.errors.generic); return; }
      // stage 2: read content of up to 12 pages, product-like pages first
      setStage(2);
      const prio = [...urls].sort((a, b) => Number(/\/(products?|p|item)\//i.test(b)) - Number(/\/(products?|p|item)\//i.test(a)));
      const pick = [prio.find((u) => u === urls[0]) ?? urls[0], ...prio.filter((u) => u !== urls[0])].slice(0, 12);
      const facts: PageFacts[] = [];
      let ei = 0, ed = 0;
      const ew = async () => {
        while (!fatal) {
          const i = ei++; if (i >= pick.length) return;
          setPhase(d.reading(Math.min(ed + 1, pick.length), pick.length));
          const r = await call({ action: "extract", key: k, url: pick[i] });
          if (r.ok) facts.push(r);
          else if (["license_invalid", "license_refunded", "rate_limited", "license_unavailable"].includes(r.error)) { fatal = r.error; return; }
          ed++;
        }
      };
      await Promise.all([ew(), ew()]);
      if (fatal) { setError(d.errors[fatal] ?? d.errors.generic); return; }
      // stage 3: AI writes fixes, 4 pages per call (max 3 calls)
      setStage(3);
      const fixes: Fix[] = []; let anyAi = false;
      const batches = Math.ceil(facts.length / 4);
      for (let b = 0; b < batches; b++) {
        setPhase(d.writing(b + 1, batches));
        const r = await call({ action: "fixes", key: k, pages: facts.slice(b * 4, b * 4 + 4) });
        if (!r.ok) { setError(d.errors[r.error] ?? d.errors.generic); return; }
        fixes.push(...r.fixes); anyAi = anyAi || r.ai;
      }
      setStage(4);
      const kws: Array<Kw | null> = []; let kwAi = false;
      for (let b = 0; b < batches; b++) {
        setPhase(d.writing(b + 1, batches));
        const r = await call({ action: "keywords", key: k, pages: facts.slice(b * 4, b * 4 + 4) });
        if (!r.ok) { if (["license_invalid", "license_refunded", "rate_limited", "license_unavailable"].includes(r.error)) { setError(d.errors[r.error] ?? d.errors.generic); return; } kws.push(...facts.slice(b * 4, b * 4 + 4).map(() => null)); continue; }
        kws.push(...r.keywords); kwAi = kwAi || r.ai;
      }
      setRun({ audits: audits.filter(Boolean), fixes, kws, kwAi, facts, ai: anyAi, origin: disc.origin, at: new Date().toISOString().slice(0, 10), source: disc.source });
      setTab(0);
      setTimeout(() => document.getElementById("suite-report")?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
    } catch { setError(d.errors.generic); }
    finally { setBusy(false); setStage(-1); setPhase(""); }
  }

  const lk = useMemo(() => (run ? linkSuggestions(run.facts) : { links: [], overlaps: [] }), [run]);
  const links = lk.links;
  const agg = useMemo(() => (run ? aggregate(lang, run.audits) : null), [run, lang]);
  const host = (u: string) => { try { const x = new URL(u); return x.host + (x.pathname === "/" ? "" : x.pathname); } catch { return u; } };
  const tone = (s: number) => (s >= 80 ? "text-primary" : s >= 55 ? "text-accent" : "text-red-400");

  const exportJson = () => run ? JSON.stringify({ site: run.origin, generated: run.at, aiUsed: run.ai, fixes: run.fixes }, null, 2) : "";
  const exportCsv = () => {
    if (!run) return "";
    const q = (s: unknown) => `"${String(s ?? "").replace(/"/g, '""')}"`;
    const rows = [["page", "field", "current", "suggested", "source"]];
    for (const f of run.fixes) {
      if (f.title.suggested) rows.push([f.url, "title", f.title.current, f.title.suggested, f.title.source]);
      if (f.meta.suggested) rows.push([f.url, "meta_description", f.meta.current, f.meta.suggested, f.meta.source]);
      if (f.description) rows.push([f.url, "product_description", "", f.description.suggested, f.description.source]);
      for (const a of f.alts) rows.push([f.url, `image_alt ${a.src}`, a.current ?? "", a.suggested, a.source]);
      if (f.schema) rows.push([f.url, "product_schema_jsonld", "", JSON.stringify(f.schema), "template"]);
    }
    return rows.map((r) => r.map(q).join(",")).join("\n");
  };
  const allText = () => run ? run.fixes.map((f) => [`# ${f.url}`, f.title.suggested && `${d.title2}: ${f.title.suggested}`, f.meta.suggested && `${d.meta}: ${f.meta.suggested}`, f.description && `${d.desc}: ${f.description.suggested}`, ...f.alts.map((a) => `ALT ${a.src}: ${a.suggested}`), f.schema && JSON.stringify(f.schema, null, 2)].filter(Boolean).join("\n")).join("\n\n") : "";
  const download = (name: string, text: string, type: string) => { const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([text], { type })); a.download = name; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 2000); };

  const field = (label: string, cur: string | null, sug: string | null, src: "ai" | "template", mono = false): ReactNode => (
    <div className="rounded-lg border border-border bg-background/50 p-3">
      <div className="flex flex-wrap items-center justify-between gap-2"><span className="text-xs font-semibold">{label}</span>{sug && <span className="flex items-center gap-2"><Badge src={src} d={d} /><CopyBtn text={sug} label={d.copy} done={d.copied} /></span>}</div>
      {sug ? (<>
        <div className="mt-2 text-xs text-muted-foreground"><span className="font-medium">{d.current}: </span><span className="break-words">{cur ? cur : d.missing}</span></div>
        <div className={`mt-1 break-words text-sm leading-7 ${mono ? "font-mono text-xs" : ""}`}><span className="text-xs font-medium text-primary">{d.suggested}: </span>{sug}</div>
      </>) : <div className="mt-1 text-xs text-muted-foreground">{d.noFix}</div>}
    </div>
  );

  return (
    <div className="print-root min-h-screen" dir={d.dir} lang={lang}>
      <style>{printCss}</style>
      <header className="no-print sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href={d.home} className="flex items-center gap-2 font-display font-semibold"><span className="grid h-8 w-8 place-items-center rounded-md bg-primary font-mono text-sm text-primary-foreground">AE</span><span>{d.name}</span></a>
          <nav className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href={d.free} className="hidden hover:text-foreground sm:inline">{lang === "ar" ? "الفحص المجاني" : "Free audit"}</a>
            <a href={d.full} className="hidden hover:text-foreground sm:inline">{lang === "ar" ? "الفحص الكامل" : "Full audit"}</a>
            <a href={d.packages} className="hover:text-foreground">{lang === "ar" ? "الباقات" : "Packages"}</a>
            <a href={d.other} className="font-mono text-xs hover:text-foreground">{d.lang}</a>
          </nav>
        </div>
      </header>
      <main>
        {!run && (<>
          <section className="relative overflow-hidden border-b border-border">
            <div className="absolute inset-0 grid-bg" aria-hidden="true" />
            <div className="relative mx-auto max-w-4xl px-6 py-16 text-center md:py-24">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 font-mono text-xs tracking-[0.15em] text-primary"><Sparkles className="h-3.5 w-3.5" aria-hidden="true" />{d.badge}</div>
              <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">{d.h1}</h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg md:leading-9">{d.intro}</p>
              <ul className="mt-8 flex flex-wrap justify-center gap-2">{d.chips.map((c) => (<li key={c} className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-2 text-sm"><Check className="h-4 w-4 text-primary" aria-hidden="true" />{c}</li>))}</ul>
              <div className="mx-auto mt-8 flex max-w-xl flex-col items-center gap-2">
                <a href={SUITE_BUY_URL} target="_blank" rel="noopener" className="inline-flex min-h-12 w-full max-w-[17rem] items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2 text-center text-sm font-semibold text-primary-foreground glow-primary transition hover:opacity-90 sm:w-auto sm:max-w-none sm:px-7"><Lock className="h-4 w-4 shrink-0" aria-hidden="true" />{d.buy} · {d.price}</a>
                <p className="text-xs text-muted-foreground">{d.buyNote}</p>
              </div>
              <form onSubmit={submit} className="mx-auto mt-10 max-w-2xl rounded-2xl border border-border bg-surface/80 p-4 text-start shadow-lg backdrop-blur">
                <p className="mb-4 text-sm text-muted-foreground">{d.haveKey}</p>
                <label htmlFor="slic" className="text-xs font-medium">{d.keyLabel}</label>
                <div className="mb-4 mt-1 flex items-center gap-3 rounded-xl border border-border bg-background/60 px-4"><KeyRound className="h-5 w-5 shrink-0 text-muted-foreground" aria-hidden="true" /><input id="slic" dir="ltr" autoComplete="off" autoCapitalize="none" spellCheck={false} value={key} onChange={(e) => setKey(e.target.value)} placeholder={d.keyPh} disabled={busy} className={`h-12 w-full bg-transparent font-mono text-sm outline-none placeholder:text-muted-foreground/70 ${lang === "ar" ? "text-right" : ""}`} /></div>
                <label htmlFor="surl" className="text-xs font-medium">{d.urlLabel}</label>
                <div className="mt-1 flex flex-col gap-2 sm:flex-row">
                  <div className="flex flex-1 items-center gap-3 rounded-xl border border-border bg-background/60 px-4"><Search className="h-5 w-5 shrink-0 text-muted-foreground" aria-hidden="true" /><input id="surl" dir="ltr" inputMode="url" autoComplete="off" autoCapitalize="none" spellCheck={false} value={url} onChange={(e) => setUrl(e.target.value)} placeholder={d.urlPh} disabled={busy} className={`h-12 w-full bg-transparent text-base outline-none placeholder:text-muted-foreground/70 ${lang === "ar" ? "text-right" : ""}`} /></div>
                  <button type="submit" disabled={busy || !url.trim() || !key.trim()} className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-50">{busy ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <Wand2 className="h-4 w-4" aria-hidden="true" />}{busy ? d.running : d.run}</button>
                </div>
                {busy && (<div className="mt-5" aria-live="polite">
                  <ol className="grid grid-cols-2 gap-2 sm:grid-cols-5">{d.stages.map((s, i) => (<li key={s} className={`rounded-lg border px-3 py-2 text-xs ${i < stage ? "border-primary/40 bg-primary/10 text-primary" : i === stage ? "border-primary bg-surface" : "border-border opacity-50"}`}><span className="flex items-center gap-1.5">{i < stage ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : i === stage ? <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden="true" /> : <span className="h-3.5 w-3.5" />}{s}</span></li>))}</ol>
                  <p className="mt-3 text-sm text-muted-foreground">{phase}</p>
                </div>)}
                {error && <p role="alert" className="mt-4 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">{error}</p>}
              </form>
              <p className="mt-6 text-sm"><a href={d.full} className="text-muted-foreground underline underline-offset-4 hover:text-foreground">{lang === "ar" ? "تريد الفحص بدون تعديلات AI؟ جرّب الفحص الكامل" : "Only need the audit without AI fixes? See the Full-site audit"}</a></p>
            </div>
          </section>
          <section className="border-b border-border"><div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="text-center text-3xl font-semibold md:text-4xl">{d.flowTitle}</h2>
            <ol className="mt-10 grid gap-4 md:grid-cols-4">{d.flow.map(([t, x], i) => (<li key={t} className="rounded-2xl border border-border bg-surface p-6"><div className="grid h-9 w-9 place-items-center rounded-full bg-primary/15 font-mono text-sm text-primary" dir="ltr">{i + 1}</div><h3 className="mt-4 text-lg font-semibold">{t}</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">{x}</p></li>))}</ol>
          </div></section>
          <section className="border-b border-border bg-surface/30"><div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="text-center text-3xl font-semibold md:text-4xl">{d.valTitle}</h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{d.val.map(([t, x]) => (<li key={t} className="rounded-2xl border border-border bg-surface p-6 transition hover:border-primary/50"><Sparkles className="h-5 w-5 text-primary" aria-hidden="true" /><h3 className="mt-3 font-semibold">{t}</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">{x}</p></li>))}</ul>
            <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-primary/30 bg-primary/5 p-6"><h3 className="flex items-center gap-2 font-semibold"><ShieldCheck className="h-5 w-5 text-primary" aria-hidden="true" />{d.honestTitle}</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">{d.honest}</p></div>
            <div className="mt-10 text-center"><a href={SUITE_BUY_URL} target="_blank" rel="noopener" className="inline-flex min-h-12 w-full max-w-[17rem] items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2 text-center text-sm font-semibold text-primary-foreground glow-primary hover:opacity-90 sm:w-auto sm:max-w-none sm:px-7"><Lock className="h-4 w-4 shrink-0" aria-hidden="true" />{d.buy} · {d.price}</a></div>
          </div></section>
          <section className="border-b border-border"><div className="mx-auto max-w-3xl px-6 py-16">
            <h2 className="text-center text-3xl font-semibold">{d.faqTitle}</h2>
            <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-surface">{d.faq.map(([q, a]) => (<details key={q} className="p-5"><summary className="cursor-pointer list-none font-medium">{q}</summary><p className="mt-3 text-sm leading-7 text-muted-foreground">{a}</p></details>))}</div>
            <p className="mt-10 text-center text-lg font-medium">{d.final}</p><p className="mt-3 text-center"><a href="#slic" className="text-sm text-primary underline underline-offset-4">{d.run}</a></p>
          </div></section>
        </>)}

        {run && agg && (
          <section id="suite-report" className="scroll-mt-20" dir={d.dir} lang={lang}><div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
            <div className="no-print mb-8 flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-xs text-primary"><Sparkles className="h-3.5 w-3.5" aria-hidden="true" />{d.badge}</div>
              <input value={client} onChange={(e) => setClient(e.target.value)} maxLength={80} placeholder={d.clientPh} aria-label={d.client} className="h-11 min-w-0 flex-1 rounded-xl border border-border bg-background/60 px-4 text-sm sm:max-w-xs" />
              <button type="button" onClick={() => window.print()} className="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground glow-primary hover:opacity-90"><FileDown className="h-4 w-4" aria-hidden="true" />{d.pdf}</button>
            </div>
            <div className="print-card rounded-2xl border border-border bg-surface p-6 md:p-10">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{d.report}</div>
              {client.trim() && <div className="mt-1 text-sm">{d.preparedFor}: <span className="font-semibold">{client.trim().slice(0, 80)}</span></div>}
              <h1 className="mt-2 break-all font-display text-2xl font-semibold md:text-4xl" dir="ltr" style={{ textAlign: d.dir === "rtl" ? "right" : "left" }}>{host(run.origin)}</h1>
              <p className="mt-1 text-xs text-muted-foreground">{d.generated}: {run.at}{agg.platform ? ` · ${agg.platform}` : ""}</p>
              <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-5">
                {([[d.score, String(agg.score), tone(agg.score)], [d.pages, String(agg.audited), ""], [d.high, String(agg.issues.filter((i) => i.level === "high").length), "text-red-400"], [d.med, String(agg.issues.filter((i) => i.level === "medium").length), "text-accent"], [d.fixesN, String(run.fixes.length), "text-primary"]] as const).map(([l, v, c]) => (<div key={l} className="rounded-xl border border-border bg-background/50 p-4 text-center"><div className={`font-display text-3xl font-semibold ${c}`} dir="ltr">{v}</div><div className="mt-1 text-xs text-muted-foreground">{l}</div></div>))}
              </div>
            </div>
            <div role="tablist" className="no-print mt-8 flex flex-wrap gap-2">{d.tabs.map((t, i) => (<button key={t} role="tab" aria-selected={tab === i} type="button" onClick={() => setTab(i)} className={`rounded-full border px-4 py-2 text-sm font-medium transition ${tab === i ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary"}`}>{t}</button>))}</div>

            <div className={`tabpanel mt-6 ${tab === 0 ? "" : "hidden"}`}>
              <h2 className="mb-4 text-2xl font-semibold">{d.tabs[0]}</h2>
              {agg.issues.length === 0 ? <p className="text-sm text-muted-foreground">{d.none}</p> : (<ol className="space-y-3">{agg.issues.map((i, n) => (
                <li key={i.id} className={`print-card rounded-xl border p-4 md:p-5 ${i.level === "high" ? "border-red-500/30 bg-red-500/5" : "border-border bg-surface"}`}>
                  <div className="flex flex-wrap items-center gap-2"><span className="font-mono text-sm text-primary" dir="ltr">{String(n + 1).padStart(2, "0")}</span><span className="font-semibold">{i.title}</span>
                    <span className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${i.level === "high" ? "bg-red-500/15 text-red-400" : "bg-accent/15 text-accent"}`}>{i.level === "high" ? d.high2 : d.medium}</span>
                    <span className="rounded-full border border-border px-2 py-0.5 text-[11px] text-muted-foreground">{i.scope === "site" ? d.site : d.affected(i.pages.length)}</span></div>
                  <p className="mt-2 break-words text-sm leading-7">{i.sample}</p><p className="mt-1 text-xs leading-6 text-muted-foreground">{i.why}</p>
                  {i.scope === "page" && (<ul className="mt-2 space-y-0.5 text-xs text-muted-foreground" dir="ltr" style={{ textAlign: d.dir === "rtl" ? "right" : "left" }}>{i.pages.slice(0, 5).map((p) => <li key={p} className="break-all">{host(p)}</li>)}{i.pages.length > 5 && <li>{d.more(i.pages.length - 5)}</li>}</ul>)}
                </li>))}</ol>)}
            </div>

            <div className={`tabpanel mt-6 ${tab === 1 ? "" : "hidden"}`}>
              <h2 className="mb-2 text-2xl font-semibold">{d.tabs[1]}</h2>
              <p className="mb-4 flex items-center gap-2 text-sm text-muted-foreground"><Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />{run.ai ? d.aiOn : d.aiOff}</p>
              <div className="space-y-5">{run.fixes.map((f) => (
                <article key={f.url} className="print-card rounded-2xl border border-border bg-surface p-5">
                  <h3 className="break-all text-sm font-semibold" dir="ltr" style={{ textAlign: d.dir === "rtl" ? "right" : "left" }}>{host(f.url)}</h3>
                  <div className="mt-3 grid gap-3">
                    {field(d.title2, f.title.current, f.title.suggested, f.title.source)}
                    <Serp url={f.url} title={f.title.suggested ?? f.title.current ?? ""} desc={f.meta.suggested ?? f.meta.current ?? ""} d={d} />
                    {field(d.meta, f.meta.current, f.meta.suggested, f.meta.source)}
                    {f.description && field(d.desc, null, f.description.suggested, f.description.source)}
                    {f.alts.length > 0 && (<div className="rounded-lg border border-border bg-background/50 p-3"><div className="text-xs font-semibold">{d.alts} ({f.alts.length})</div><ul className="mt-2 space-y-2">{f.alts.map((a) => (<li key={a.src} className="flex flex-wrap items-center justify-between gap-2 text-sm"><span className="min-w-0 break-words"><span className="block break-all text-[11px] text-muted-foreground" dir="ltr">{a.src.slice(-60)}</span>{a.suggested}</span><span className="flex items-center gap-2"><Badge src={a.source} d={d} /><CopyBtn text={a.suggested} label={d.copy} done={d.copied} /></span></li>))}</ul></div>)}
                    {f.schema && (<div className="rounded-lg border border-border bg-background/50 p-3"><div className="flex items-center justify-between gap-2"><span className="text-xs font-semibold">{d.schema}</span><CopyBtn text={`<script type="application/ld+json">\n${JSON.stringify(f.schema, null, 2)}\n</script>`} label={d.copy} done={d.copied} /></div><pre className="mt-2 max-h-56 overflow-auto rounded-md bg-background p-3 text-[11px] leading-5" dir="ltr">{JSON.stringify(f.schema, null, 2)}</pre></div>)}
                  </div>
                </article>))}</div>
            </div>

            <div className={`tabpanel mt-6 ${tab === 2 ? "" : "hidden"}`}>
              <h2 className="mb-2 text-2xl font-semibold">{d.kwTitle}</h2>
              <p className="mb-4 flex items-start gap-2 text-sm text-muted-foreground"><Sparkles className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />{run.kwAi ? d.kwNote : d.kwOff}</p>
              <div className="space-y-5">{run.kws.map((k, i) => k && (
                <article key={k.url} className="print-card rounded-2xl border border-border bg-surface p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2"><h3 className="break-all text-sm font-semibold" dir="ltr">{host(k.url)}</h3><CopyBtn text={[...k.buyer, ...k.longtail, ...k.questions].join("\n")} label={d.copy} done={d.copied} /></div>
                  {([[d.buyer, k.buyer], [d.longtail, k.longtail], [d.questions, k.questions]] as Array<[string, string[]]>).map(([t, arr]) => arr.length > 0 && (<div key={t} className="mt-3"><div className="text-xs font-semibold text-muted-foreground">{t}</div><ul className="mt-2 flex flex-wrap gap-2">{arr.map((w) => (<li key={w} className="rounded-full border border-border bg-background/50 px-3 py-1 text-sm">{w}</li>))}</ul></div>))}
                </article>))}</div>
              {run.kws.every((k) => !k) && <p className="text-sm text-muted-foreground">{d.none2}</p>}
            </div>

            <div className={`tabpanel mt-6 ${tab === 3 ? "" : "hidden"}`}>
              <h2 className="mb-4 text-2xl font-semibold">{d.briefTitle}</h2>
              <div className="space-y-5">{run.kws.map((k) => k && (k.brief.headings.length + k.brief.faqs.length + k.brief.points.length > 0) && (
                <article key={k.url} className="print-card rounded-2xl border border-border bg-surface p-5">
                  <h3 className="break-all text-sm font-semibold" dir="ltr">{host(k.url)}</h3>
                  {([[d.headings, k.brief.headings], [d.faqs, k.brief.faqs], [d.points, k.brief.points]] as Array<[string, string[]]>).map(([t, arr]) => arr.length > 0 && (<div key={t} className="mt-3"><div className="text-xs font-semibold text-muted-foreground">{t}</div><ul className="mt-1 list-disc space-y-1 ps-5 text-sm leading-7">{arr.map((w) => <li key={w}>{w}</li>)}</ul></div>))}
                </article>))}</div>
              <h2 className="mb-2 mt-10 text-2xl font-semibold">{d.linksTitle}</h2>
              <p className="mb-4 text-sm text-muted-foreground">{d.linksNote}</p>
              {links.length === 0 ? <p className="text-sm text-muted-foreground">{d.noLinks}</p> : (<ul className="space-y-2">{links.map((l) => (<li key={l.from + l.to} className="print-card rounded-xl border border-border bg-surface p-4 text-sm"><div className="break-all" dir="ltr" style={{ textAlign: d.dir === "rtl" ? "right" : "left" }}><span className="text-muted-foreground">{d.linkFrom} </span>{host(l.from)}<span className="text-muted-foreground"> {d.linkTo} </span>{host(l.to)}</div><div className="mt-1 text-xs text-muted-foreground">{d.shared}: {l.shared.join(", ")}</div></li>))}</ul>)}
              {lk.overlaps.length > 0 && (<><h2 className="mb-2 mt-10 text-2xl font-semibold">{d.overTitle}</h2><p className="mb-4 text-sm text-muted-foreground">{d.overNote}</p><ul className="space-y-2">{lk.overlaps.map((o) => (<li key={o.a + o.b} className="print-card rounded-xl border border-border bg-surface p-4 text-sm"><div className="break-all" dir="ltr" style={{ textAlign: d.dir === "rtl" ? "right" : "left" }}>{host(o.a)}<span className="text-muted-foreground"> / </span>{host(o.b)}</div><div className="mt-1 text-xs text-muted-foreground">{d.shared}: {o.shared.join(", ")}</div></li>))}</ul></>)}
            </div>

            <div className={`tabpanel mt-6 ${tab === 4 ? "" : "hidden"}`}>
              <h2 className="mb-4 text-2xl font-semibold">{d.tabs[4]}</h2>
              <div className="overflow-x-auto rounded-xl border border-border bg-surface"><table className="w-full text-sm"><thead><tr className="border-b border-border text-xs text-muted-foreground"><th className="p-3 text-start font-medium">{d.colPage}</th><th className="p-3 font-medium">{d.colScore}</th><th className="p-3 font-medium">{d.colFail}</th><th className="p-3 font-medium">{d.colWarn}</th></tr></thead><tbody>
                {agg.rows.map((r) => (<tr key={r.url} className="border-b border-border/60 last:border-0"><td className="max-w-[16rem] break-all p-3 text-xs" dir="ltr" style={{ textAlign: d.dir === "rtl" ? "right" : "left" }}>{host(r.url)}</td><td className={`p-3 text-center font-semibold ${r.score === null ? "" : tone(r.score)}`} dir="ltr">{r.score ?? "-"}</td><td className="p-3 text-center" dir="ltr">{r.ok ? r.fail : "-"}</td><td className="p-3 text-center" dir="ltr">{r.ok ? r.warn : "-"}</td></tr>))}
              </tbody></table></div>
            </div>

            <div className={`tabpanel no-print mt-6 ${tab === 5 ? "" : "hidden"}`}>
              <h2 className="mb-4 text-2xl font-semibold">{d.tabs[5]}</h2>
              <div className="flex flex-wrap gap-3">
                <button type="button" onClick={() => navigator.clipboard?.writeText(allText())} className="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground hover:opacity-90"><Copy className="h-4 w-4" aria-hidden="true" />{d.copyAll}</button>
                <button type="button" onClick={() => download("seo-suite-fixes.json", exportJson(), "application/json")} className="inline-flex h-11 items-center gap-2 rounded-xl border border-border px-5 text-sm font-medium hover:border-primary hover:text-primary"><Download className="h-4 w-4" aria-hidden="true" />{d.json}</button>
                <button type="button" onClick={() => download("seo-suite-fixes.csv", exportCsv(), "text/csv")} className="inline-flex h-11 items-center gap-2 rounded-xl border border-border px-5 text-sm font-medium hover:border-primary hover:text-primary"><Download className="h-4 w-4" aria-hidden="true" />{d.csv}</button>
              </div>
            </div>

            <div className="print-card mt-10 rounded-xl border border-border bg-surface/50 p-5"><p className="text-xs leading-6 text-muted-foreground">{d.scope}</p></div>
            <div className="no-print mt-8 text-center"><button type="button" onClick={() => { setRun(null); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">{d.again}</button></div>
          </div></section>
        )}
      </main>
    </div>
  );
}
