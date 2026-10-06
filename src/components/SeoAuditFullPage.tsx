import { useMemo, useState, type FormEvent } from "react";
import { ArrowRight, Check, FileDown, KeyRound, Loader2, Lock, ShieldCheck, Search, XCircle, AlertTriangle } from "lucide-react";
import type { AuditResult } from "@/lib/seo-audit.server";
import { aggregate } from "@/lib/seo-audit-full";
import type { Lang } from "@/lib/seo-audit-copy";

const base = "https://amrelbusaily.vercel.app";
export const BUY_URL = "https://amrelbus.gumroad.com/l/full-site-seo-audit";

const ui = {
  en: {
    dir: "ltr", home: "/", free: "/seo-audit", other: "/ar/seo-audit/full", name: "Amr Elbusaily", lang: "AR", packages: "/packages", consult: "/free-consultation",
    title: "Full-Site SEO Audit + PDF Report | Amr Elbusaily",
    description: "Crawl up to 25 pages of your online store and get a prioritized, print-ready PDF report built only from real measured checks. One-time purchase, no subscription.",
    eyebrow: "PRO · FULL-SITE AUDIT", h1: "Audit your whole store, not just one page",
    intro: "The tool reads your sitemap and main pages (up to 25), runs the same measured checks on each, and ranks every problem by priority across the site. Download the result as a professional PDF.",
    feats: ["Up to 25 pages crawled", "Issues ranked by priority", "Pages affected per issue", "Print-ready PDF report"],
    price: "$13 one-time", buy: "Buy a license key", buyNote: "Opens Gumroad. Your key arrives by email right after payment.",
    keyLabel: "License key", keyPh: "Paste your license key", urlLabel: "Store URL", urlPh: "yourstore.com", run: "Start the full audit", running: "Auditing your site…",
    free2: "Try the free single-page audit first", haveKey: "Already bought it? Enter your key and store address.",
    discovering: "Finding your pages from the sitemap and homepage", auditing: (n: number, t: number) => `Auditing page ${n} of ${t}`, building: "Building your report",
    errors: {
      license_required: "Enter your license key.", license_invalid: "This license key was not recognized for this product.", license_refunded: "This purchase was refunded, so the key no longer works.",
      license_unavailable: "We could not reach the license service. Try again in a minute.", not_configured: "The paid audit is not open yet. Please check back soon.",
      rate_limited: "Too many requests. Wait a minute and try again.", invalid_url: "That does not look like a valid address.", blocked: "This address cannot be audited.",
      unreachable: "We could not reach that site.", timeout: "The site took too long to respond.", not_html: "That address did not return a web page.", generic: "Something went wrong. Please try again.",
    } as Record<string, string>,
    report: "Site audit report", score: "Basic-check score (average of pages)", pagesAudited: "Pages audited", highN: "High priority", medN: "Medium priority", skipped: "Pages that could not be read",
    source: { sitemap: "Pages were taken from your sitemap.", homepage: "No readable sitemap pages, so pages were taken from homepage links.", both: "Pages were taken from your sitemap and homepage links." } as Record<string, string>,
    prioTitle: "Issues by priority", high: "High", medium: "Medium", site: "Whole site", affected: (n: number) => `${n} page${n === 1 ? "" : "s"} affected`, guideline: "Guideline", more: (n: number) => `and ${n} more`,
    example: "Measured on", pagesTitle: "Page by page", colPage: "Page", colScore: "Score", colFail: "Problems", colWarn: "To improve", none: "No issues were found in the checks this tool can run across the pages audited.",
    pdf: "Download PDF report", pdfHint: "In the print window choose Save as PDF.", again: "Audit another store", generated: "Generated", cap: "Capped at 25 pages. Pages that need a login or JavaScript to show content are read as served.",
    secTitle: "Everything in one report", sec: [["Whole-site crawl", "Reads your sitemap and homepage links and audits up to 25 pages with the same measured checks."], ["Priority ranking", "Every issue is ranked High or Medium and shows how many pages it affects, so you fix the biggest wins first."], ["Page-by-page table", "See the score and the problem count for each page in one view."], ["Print-ready PDF", "One click opens the print window. Choose Save as PDF and send it to your team or client."]],
    stepsTitle: "How it works", steps: [["Buy your key", "Pay once on Gumroad. Your license key arrives by email."], ["Enter key and store", "Paste the key and your store address. No account to create."], ["Get the report", "Watch the crawl, then save the PDF."]],
    cmpTitle: "Free audit vs Full-site audit", cmpRows: [["Pages checked", "1 page", "Up to 25 pages"], ["Issues ranked across the site", "-", "Yes"], ["Pages affected per issue", "-", "Yes"], ["Print-ready PDF report", "-", "Yes"], ["Price", "Free", "$13 one-time"]], cmpCols: ["", "Free", "Full-site"],
    measTitle: "What is measured", meas: "Indexing signals, titles and meta descriptions, headings, canonical and robots directives, internal links, structured data, image attributes, HTTPS and HSTS, server response and page weight. Facts are measured on the HTML each page returns.",
    faqTitle: "Questions", faq: [["Is this a subscription?", "No. It is a one-time $13 purchase on Gumroad."], ["How do I get my license key?", "Gumroad emails it to you right after payment. It is also in your Gumroad library."], ["Does it store my report or data?", "No. The crawl runs on request and nothing about your store is saved on this server."], ["How many pages does it check?", "Up to 25 pages per run, taken from your sitemap and homepage links."], ["Does it guarantee rankings?", "No. It reports measured technical issues. It does not measure real-user Core Web Vitals, indexing status or rankings."], ["Can I use it for client stores?", "Yes. Enter any public store address and save the PDF."]],
    final: "Ready to see what is holding your whole store back?",
    scope: "Every finding is a real measured check on the HTML each page returned. Items marked Guideline are editorial thresholds, not Google rules. The score covers only the checks this tool runs. It does not measure real-user Core Web Vitals, actual indexing status, rankings, backlinks or content quality.",
    ctaTitle: "Want these fixed?", ctaText: "I handle technical SEO for online stores in the Gulf.", ctaPrimary: "See the packages", ctaSecondary: "Book a free consultation",
  },
  ar: {
    dir: "rtl", home: "/ar", free: "/ar/seo-audit", other: "/seo-audit/full", name: "عمرو البصيلي", lang: "EN", packages: "/ar/packages", consult: "/ar/free-consultation",
    title: "فحص سيو شامل للموقع + تقرير PDF | عمرو البصيلي",
    description: "افحص حتى 25 صفحة من متجرك واحصل على تقرير PDF احترافي مرتب حسب الأولوية ومبني على فحوصات مقاسة فعلًا. دفعة واحدة بدون اشتراك.",
    eyebrow: "برو · فحص الموقع بالكامل", h1: "افحص متجرك كله وليس صفحة واحدة",
    intro: "تقرأ الأداة خريطة موقعك وصفحاتك الرئيسية (حتى 25 صفحة)، وتجري نفس الفحوصات المقاسة على كل صفحة، ثم ترتب كل مشكلة حسب الأولوية على مستوى الموقع. حمّل النتيجة كملف PDF احترافي.",
    feats: ["فحص حتى 25 صفحة", "مشاكل مرتبة حسب الأولوية", "عدد الصفحات المتأثرة بكل مشكلة", "تقرير PDF جاهز للطباعة"],
    price: "13 دولار مرة واحدة", buy: "اشترِ مفتاح الترخيص", buyNote: "يفتح Gumroad. يصلك المفتاح على بريدك فور الدفع.",
    keyLabel: "مفتاح الترخيص", keyPh: "الصق مفتاح الترخيص", urlLabel: "رابط المتجر", urlPh: "yourstore.com", run: "ابدأ الفحص الشامل", running: "جارٍ فحص موقعك…",
    free2: "جرّب الفحص المجاني لصفحة واحدة أولًا", haveKey: "اشتريت بالفعل؟ أدخل المفتاح ورابط المتجر.",
    discovering: "جارٍ تحديد صفحاتك من خريطة الموقع والصفحة الرئيسية", auditing: (n: number, t: number) => `فحص الصفحة ${n} من ${t}`, building: "جارٍ إعداد التقرير",
    errors: {
      license_required: "أدخل مفتاح الترخيص.", license_invalid: "هذا المفتاح غير معروف لهذا المنتج.", license_refunded: "تم استرداد هذه العملية، لذلك لم يعد المفتاح يعمل.",
      license_unavailable: "تعذر الوصول إلى خدمة التراخيص. حاول بعد دقيقة.", not_configured: "الفحص المدفوع لم يُفتح بعد. عد قريبًا.",
      rate_limited: "طلبات كثيرة. انتظر دقيقة ثم حاول.", invalid_url: "هذا لا يبدو رابطًا صحيحًا.", blocked: "لا يمكن فحص هذا العنوان.",
      unreachable: "لم نتمكن من الوصول إلى الموقع.", timeout: "استغرق الموقع وقتًا طويلًا في الرد.", not_html: "هذا العنوان لم يرجع صفحة ويب.", generic: "حدث خطأ. حاول مرة أخرى.",
    } as Record<string, string>,
    report: "تقرير فحص الموقع", score: "درجة الفحوصات الأساسية (متوسط الصفحات)", pagesAudited: "الصفحات المفحوصة", highN: "أولوية عالية", medN: "أولوية متوسطة", skipped: "صفحات تعذرت قراءتها",
    source: { sitemap: "أُخذت الصفحات من خريطة موقعك.", homepage: "لا صفحات مقروءة في خريطة الموقع، فأُخذت الصفحات من روابط الصفحة الرئيسية.", both: "أُخذت الصفحات من خريطة موقعك وروابط الصفحة الرئيسية." } as Record<string, string>,
    prioTitle: "المشاكل حسب الأولوية", high: "عالية", medium: "متوسطة", site: "الموقع كله", affected: (n: number) => `${n} صفحة متأثرة`, guideline: "إرشاد", more: (n: number) => `و${n} أخرى`,
    example: "تم القياس على", pagesTitle: "صفحة بصفحة", colPage: "الصفحة", colScore: "الدرجة", colFail: "مشاكل", colWarn: "للتحسين", none: "لم نجد مشاكل ضمن الفحوصات التي تستطيع الأداة إجراءها على الصفحات المفحوصة.",
    pdf: "حمّل تقرير PDF", pdfHint: "في نافذة الطباعة اختر «حفظ بصيغة PDF».", again: "افحص متجرًا آخر", generated: "تاريخ الإنشاء", cap: "الحد الأقصى 25 صفحة. الصفحات التي تحتاج تسجيل دخول أو جافاسكربت لعرض المحتوى تُقرأ كما يقدمها السيرفر.",
    secTitle: "كل ما تحتاجه في تقرير واحد", sec: [["فحص الموقع بالكامل", "تقرأ خريطة موقعك وروابط الصفحة الرئيسية وتفحص حتى 25 صفحة بنفس الفحوصات المقاسة."], ["ترتيب حسب الأولوية", "كل مشكلة مصنفة عالية أو متوسطة مع عدد الصفحات المتأثرة، فتبدأ بالأهم."], ["جدول صفحة بصفحة", "درجة كل صفحة وعدد مشاكلها في عرض واحد."], ["PDF جاهز للطباعة", "ضغطة واحدة تفتح نافذة الطباعة. اختر «حفظ بصيغة PDF» وأرسله لفريقك أو عميلك."]],
    stepsTitle: "كيف تعمل", steps: [["اشترِ المفتاح", "ادفع مرة واحدة على Gumroad ويصلك المفتاح بالبريد."], ["أدخل المفتاح والمتجر", "الصق المفتاح ورابط متجرك. لا حاجة لإنشاء حساب."], ["احصل على التقرير", "تابع الفحص ثم احفظ ملف PDF."]],
    cmpTitle: "الفحص المجاني مقابل فحص الموقع الكامل", cmpRows: [["الصفحات المفحوصة", "صفحة واحدة", "حتى 25 صفحة"], ["ترتيب المشاكل على مستوى الموقع", "-", "نعم"], ["الصفحات المتأثرة بكل مشكلة", "-", "نعم"], ["تقرير PDF جاهز للطباعة", "-", "نعم"], ["السعر", "مجاني", "13 دولار مرة واحدة"]], cmpCols: ["", "مجاني", "الكامل"],
    measTitle: "ما الذي يُقاس", meas: "إشارات الأرشفة والعناوين والوصف وترويسات الصفحة والـ canonical وتعليمات robots والروابط الداخلية والبيانات المنظمة وخصائص الصور وHTTPS وHSTS واستجابة السيرفر وحجم الصفحة. الحقائق تُقاس على كود HTML الذي ترجعه كل صفحة.",
    faqTitle: "أسئلة شائعة", faq: [["هل هو اشتراك؟", "لا. هو شراء مرة واحدة بقيمة 13 دولار على Gumroad."], ["كيف أحصل على مفتاح الترخيص؟", "ترسله Gumroad إلى بريدك فور الدفع، ويظهر أيضًا في مكتبتك على Gumroad."], ["هل يحفظ التقرير أو بياناتي؟", "لا. الفحص يجري عند الطلب ولا يُحفظ شيء عن متجرك على هذا السيرفر."], ["كم صفحة يفحص؟", "حتى 25 صفحة في كل مرة، من خريطة موقعك وروابط الصفحة الرئيسية."], ["هل يضمن الترتيب؟", "لا. يعرض مشاكل تقنية مقاسة فقط، ولا يقيس Core Web Vitals الفعلية ولا حالة الأرشفة ولا الترتيب."], ["هل أستخدمه لمتاجر العملاء؟", "نعم. أدخل أي رابط متجر عام واحفظ الـ PDF."]],
    final: "جاهز لتعرف ما الذي يعطّل متجرك كله؟",
    scope: "كل نتيجة هي فحص مقاس فعلًا على كود HTML الذي أرجعته كل صفحة. العناصر المعلّمة «إرشاد» حدود تحريرية وليست قواعد من Google. الدرجة تغطي الفحوصات التي تجريها الأداة فقط، ولا تقيس Core Web Vitals الفعلية ولا حالة الأرشفة الفعلية ولا الترتيب ولا الروابط الخلفية ولا جودة المحتوى.",
    ctaTitle: "تريد إصلاح هذه النقاط؟", ctaText: "أتولى السيو التقني للمتاجر الإلكترونية في الخليج.", ctaPrimary: "شاهد الباقات", ctaSecondary: "احجز استشارة مجانية",
  },
} as const;

export function seoAuditFullHead(lang: Lang) {
  const d = ui[lang];
  const path = lang === "ar" ? "/ar/seo-audit/full" : "/seo-audit/full";
  const url = `${base}${path}`;
  return {
    meta: [
      { title: d.title }, { name: "description", content: d.description }, { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: d.title }, { property: "og:description", content: d.description }, { property: "og:type", content: "website" }, { property: "og:url", content: url },
      { property: "og:locale", content: lang === "ar" ? "ar_EG" : "en_US" }, { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@graph": [
      { "@type": "Product", name: lang === "ar" ? "فحص سيو شامل للموقع + تقرير PDF" : "Full-Site SEO Audit + PDF Report", description: d.description, url, brand: { "@type": "Person", name: "Amr Elbusaily" }, offers: { "@type": "Offer", price: "13.00", priceCurrency: "USD", availability: "https://schema.org/InStock", url: BUY_URL } },
      { "@type": "FAQPage", mainEntity: d.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: lang === "ar" ? "الفحص المجاني" : "Free SEO audit", item: `${base}${lang === "ar" ? "/ar/seo-audit" : "/seo-audit"}` }, { "@type": "ListItem", position: 2, name: d.eyebrow, item: url }] },
    ] }) }],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "ar", href: `${base}/ar/seo-audit/full` }, { rel: "alternate", hrefLang: "en", href: `${base}/seo-audit/full` }, { rel: "alternate", hrefLang: "x-default", href: `${base}/seo-audit/full` },
    ],
  };
}

async function call(body: Record<string, unknown>): Promise<any> {
  const res = await fetch("/api/seo-audit-full", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) });
  try { return await res.json(); } catch { return { ok: false, error: "generic" }; }
}

const printCss = `@media print{
  header,.no-print,footer,.fixed{display:none!important}
  html,body,.print-root,.print-root *{background:#fff!important;color:#111!important;box-shadow:none!important;border-color:#ccc!important}
  .print-root{min-height:0!important}
  .print-card{break-inside:avoid;page-break-inside:avoid}
  a{text-decoration:none}
  @page{margin:14mm}
}`;

export function SeoAuditFullPage({ lang }: { lang: Lang }) {
  const d = ui[lang];
  const [key, setKey] = useState("");
  const [url, setUrl] = useState("");
  const [busy, setBusy] = useState(false);
  const [phase, setPhase] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<{ pages: Array<{ url: string; r: AuditResult | null; error?: string }>; source: string; origin: string; at: string } | null>(null);

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (busy) return;
    setError(null); setData(null);
    if (!key.trim()) { setError(d.errors.license_required); return; }
    setBusy(true);
    try {
      setPhase(d.discovering);
      const disc = await call({ action: "discover", key: key.trim(), url });
      if (!disc.ok) { setError(d.errors[disc.error] ?? d.errors.generic); return; }
      const urls: string[] = disc.urls;
      const pages: Array<{ url: string; r: AuditResult | null; error?: string }> = new Array(urls.length);
      let next = 0, done = 0, fatal: string | null = null;
      const worker = async () => {
        while (!fatal) {
          const i = next++;
          if (i >= urls.length) return;
          setPhase(d.auditing(Math.min(done + 1, urls.length), urls.length));
          const r = await call({ action: "page", key: key.trim(), url: urls[i] });
          if (r.ok) pages[i] = { url: urls[i], r };
          else if (["license_invalid", "license_refunded", "rate_limited", "license_unavailable"].includes(r.error)) { fatal = r.error; return; }
          else pages[i] = { url: urls[i], r: null, error: r.error };
          done++;
        }
      };
      await Promise.all([worker(), worker()]);
      if (fatal) { setError(d.errors[fatal] ?? d.errors.generic); return; }
      setPhase(d.building);
      setData({ pages: pages.filter(Boolean), source: disc.source, origin: disc.origin, at: new Date().toISOString().slice(0, 10) });
      setTimeout(() => document.getElementById("full-report")?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
    } catch {
      setError(d.errors.generic);
    } finally {
      setBusy(false); setPhase("");
    }
  }

  const agg = useMemo(() => (data ? aggregate(lang, data.pages) : null), [data, lang]);
  const host = (u: string) => { try { const x = new URL(u); return x.host + (x.pathname === "/" ? "" : x.pathname); } catch { return u; } };
  const tone = (s: number) => (s >= 80 ? "text-primary" : s >= 55 ? "text-accent" : "text-red-400");

  return (
    <div className="print-root min-h-screen" dir={d.dir} lang={lang}>
      <style>{printCss}</style>
      <header className="no-print sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href={d.home} className="flex items-center gap-2 font-display font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-primary font-mono text-sm text-primary-foreground">AE</span><span>{d.name}</span>
          </a>
          <nav className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href={d.free} className="hover:text-foreground">{lang === "ar" ? "الفحص المجاني" : "Free audit"}</a>
            <a href={d.packages} className="hover:text-foreground">{lang === "ar" ? "الباقات" : "Packages"}</a>
            <a href={d.other} className="font-mono text-xs hover:text-foreground">{d.lang}</a>
          </nav>
        </div>
      </header>

      <main>
        {!data && (
          <section className="relative overflow-hidden border-b border-border">
            <div className="absolute inset-0 grid-bg" aria-hidden="true" />
            <div className="relative mx-auto max-w-4xl px-6 py-16 text-center md:py-24">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{d.eyebrow}</div>
              <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">{d.h1}</h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg md:leading-9">{d.intro}</p>
              <ul className="mx-auto mt-8 grid max-w-2xl gap-3 text-start sm:grid-cols-2">
                {d.feats.map((f) => (<li key={f} className="flex items-center gap-3 rounded-xl border border-border bg-surface/70 px-4 py-3 text-sm"><Check className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />{f}</li>))}
              </ul>
              <div className="mx-auto mt-8 flex max-w-xl flex-col items-center gap-2">
                <a href={BUY_URL} target="_blank" rel="noopener" className="inline-flex h-12 w-full max-w-[15rem] items-center justify-center gap-2 rounded-xl bg-primary px-4 text-center text-sm font-semibold sm:w-auto sm:max-w-none sm:px-7 text-primary-foreground glow-primary transition hover:opacity-90">
                  <Lock className="h-4 w-4" aria-hidden="true" />{d.buy} · {d.price}
                </a>
                <p className="text-xs text-muted-foreground">{d.buyNote}</p>
              </div>

              <form onSubmit={submit} className="mx-auto mt-10 max-w-2xl rounded-2xl border border-border bg-surface/80 p-4 text-start shadow-lg backdrop-blur">
                <p className="mb-4 text-sm text-muted-foreground">{d.haveKey}</p>
                <label htmlFor="lic" className="text-xs font-medium">{d.keyLabel}</label>
                <div className="mt-1 mb-4 flex items-center gap-3 rounded-xl border border-border bg-background/60 px-4">
                  <KeyRound className="h-5 w-5 shrink-0 text-muted-foreground" aria-hidden="true" />
                  <input id="lic" dir="ltr" autoComplete="off" autoCapitalize="none" spellCheck={false} value={key} onChange={(e) => setKey(e.target.value)} placeholder={d.keyPh} disabled={busy}
                    className={`h-12 w-full bg-transparent font-mono text-sm outline-none placeholder:text-muted-foreground/70 ${lang === "ar" ? "text-right" : ""}`} />
                </div>
                <label htmlFor="furl" className="text-xs font-medium">{d.urlLabel}</label>
                <div className="mt-1 flex flex-col gap-2 sm:flex-row">
                  <div className="flex flex-1 items-center gap-3 rounded-xl border border-border bg-background/60 px-4">
                    <Search className="h-5 w-5 shrink-0 text-muted-foreground" aria-hidden="true" />
                    <input id="furl" dir="ltr" inputMode="url" autoComplete="off" autoCapitalize="none" spellCheck={false} value={url} onChange={(e) => setUrl(e.target.value)} placeholder={d.urlPh} disabled={busy}
                      className={`h-12 w-full bg-transparent text-base outline-none placeholder:text-muted-foreground/70 ${lang === "ar" ? "text-right" : ""}`} />
                  </div>
                  <button type="submit" disabled={busy || !url.trim() || !key.trim()} className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-50">
                    {busy ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <ArrowRight className={`h-4 w-4 ${lang === "ar" ? "rotate-180" : ""}`} aria-hidden="true" />}
                    {busy ? d.running : d.run}
                  </button>
                </div>
                {busy && <p className="mt-4 flex items-center gap-2 text-sm" aria-live="polite"><Loader2 className="h-4 w-4 animate-spin text-primary" aria-hidden="true" />{phase}</p>}
                {error && <p role="alert" className="mt-4 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">{error}</p>}
              </form>
              <p className="mt-6 text-sm"><a href={d.free} className="text-muted-foreground underline underline-offset-4 hover:text-foreground">{d.free2}</a></p>
              <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <li className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />{lang === "ar" ? "بدون تسجيل أو اشتراك" : "No account, no subscription"}</li>
                <li className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />{lang === "ar" ? "التقرير لا يُحفظ على السيرفر" : "The report is not stored on our server"}</li>
              </ul>
            </div>
          </section>
        )}


        {!data && (
          <>
            <section className="border-b border-border">
              <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
                <h2 className="text-center text-3xl font-semibold md:text-4xl">{d.secTitle}</h2>
                <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {d.sec.map(([t, x], i) => (
                    <li key={t} className="rounded-2xl border border-border bg-surface p-6 transition hover:border-primary/50">
                      <div className="font-mono text-sm text-primary" dir="ltr">0{i + 1}</div>
                      <h3 className="mt-3 text-lg font-semibold">{t}</h3>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{x}</p>
                    </li>
                  ))}
                </ul>
                <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-muted-foreground"><strong className="text-foreground">{d.measTitle}: </strong>{d.meas}</p>
              </div>
            </section>
            <section className="border-b border-border bg-surface/30">
              <div className="mx-auto max-w-5xl px-6 py-16">
                <h2 className="text-center text-3xl font-semibold">{d.stepsTitle}</h2>
                <ol className="mt-8 grid gap-4 md:grid-cols-3">
                  {d.steps.map(([t, x], i) => (
                    <li key={t} className="rounded-2xl border border-border bg-surface p-6"><div className="grid h-9 w-9 place-items-center rounded-full bg-primary/15 font-mono text-sm text-primary" dir="ltr">{i + 1}</div><h3 className="mt-4 font-semibold">{t}</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">{x}</p></li>
                  ))}
                </ol>
              </div>
            </section>
            <section className="border-b border-border">
              <div className="mx-auto max-w-3xl px-6 py-16">
                <h2 className="text-center text-3xl font-semibold">{d.cmpTitle}</h2>
                <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b border-border text-xs"><th className="p-4 text-start font-medium">{d.cmpCols[0]}</th><th className="p-4 text-center font-medium text-muted-foreground">{d.cmpCols[1]}</th><th className="bg-primary/10 p-4 text-center font-semibold text-primary">{d.cmpCols[2]}</th></tr></thead>
                    <tbody>{d.cmpRows.map(([a, b, c]) => (<tr key={a} className="border-b border-border/60 last:border-0"><td className="p-4">{a}</td><td className="p-4 text-center text-muted-foreground">{b}</td><td className="bg-primary/5 p-4 text-center font-medium">{c}</td></tr>))}</tbody>
                  </table>
                </div>
                <div className="mt-8 text-center">
                  <a href={BUY_URL} target="_blank" rel="noopener" className="inline-flex h-12 w-full max-w-[15rem] items-center justify-center gap-2 rounded-xl bg-primary px-4 text-center text-sm font-semibold sm:w-auto sm:max-w-none sm:px-7 text-primary-foreground glow-primary hover:opacity-90"><Lock className="h-4 w-4" aria-hidden="true" />{d.buy} · {d.price}</a>
                </div>
              </div>
            </section>
            <section className="border-b border-border bg-surface/30">
              <div className="mx-auto max-w-3xl px-6 py-16">
                <h2 className="text-center text-3xl font-semibold">{d.faqTitle}</h2>
                <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-surface">
                  {d.faq.map(([q, a]) => (<details key={q} className="group p-5"><summary className="cursor-pointer list-none font-medium">{q}</summary><p className="mt-3 text-sm leading-7 text-muted-foreground">{a}</p></details>))}
                </div>
                <p className="mx-auto mt-10 max-w-xl text-center text-lg font-medium">{d.final}</p>
                <p className="mt-4 text-center"><a href="#lic" className="text-sm text-primary underline underline-offset-4">{d.run}</a></p>
              </div>
            </section>
          </>
        )}
        {data && agg && (
          <section id="full-report" className="scroll-mt-20" dir={d.dir} lang={lang}>
            <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
              <div className="no-print mb-8 flex flex-wrap items-center justify-between gap-3">
                <div><div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{d.eyebrow}</div><p className="mt-1 text-xs text-muted-foreground">{d.pdfHint}</p></div>
                <button type="button" onClick={() => window.print()} className="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground glow-primary hover:opacity-90"><FileDown className="h-4 w-4" aria-hidden="true" />{d.pdf}</button>
              </div>

              <div className="print-card rounded-2xl border border-border bg-surface p-6 md:p-10">
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{d.report}</div>
                <h1 className="mt-2 break-all font-display text-2xl font-semibold md:text-4xl" dir="ltr" style={{ textAlign: d.dir === "rtl" ? "right" : "left" }}>{host(data.origin)}</h1>
                <p className="mt-1 text-xs text-muted-foreground">{d.generated}: {data.at}{agg.platform ? ` · ${agg.platform}` : ""}</p>
                <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
                  {[[d.score, String(agg.score), tone(agg.score)], [d.pagesAudited, String(agg.audited), ""], [d.highN, String(agg.issues.filter((i) => i.level === "high").length), "text-red-400"], [d.medN, String(agg.issues.filter((i) => i.level === "medium").length), "text-accent"]].map(([l, v, c]) => (
                    <div key={l} className="rounded-xl border border-border bg-background/50 p-4 text-center"><div className={`font-display text-3xl font-semibold ${c}`} dir="ltr">{v}</div><div className="mt-1 text-xs text-muted-foreground">{l}</div></div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-muted-foreground">{d.source[data.source] ?? ""} {agg.failed > 0 ? `${d.skipped}: ${agg.failed}.` : ""}</p>
              </div>

              <h2 className="mt-12 text-2xl font-semibold">{d.prioTitle}</h2>
              {agg.issues.length === 0 ? <p className="mt-3 text-sm text-muted-foreground">{d.none}</p> : (
                <ol className="mt-4 space-y-3">
                  {agg.issues.map((i, n) => (
                    <li key={i.id} className={`print-card rounded-xl border p-4 md:p-5 ${i.level === "high" ? "border-red-500/30 bg-red-500/5" : "border-border bg-surface"}`}>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-sm text-primary" dir="ltr">{String(n + 1).padStart(2, "0")}</span>
                        <span className="font-semibold">{i.title}</span>
                        <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium ${i.level === "high" ? "bg-red-500/15 text-red-400" : "bg-accent/15 text-accent"}`}>
                          {i.level === "high" ? <XCircle className="h-3 w-3" aria-hidden="true" /> : <AlertTriangle className="h-3 w-3" aria-hidden="true" />}{i.level === "high" ? d.high : d.medium}
                        </span>
                        <span className="rounded-full border border-border px-2 py-0.5 text-[11px] text-muted-foreground">{i.scope === "site" ? d.site : d.affected(i.pages.length)}</span>
                        {i.guideline && <span className="rounded-full border border-border px-2 py-0.5 text-[10px] uppercase tracking-wide text-muted-foreground">{d.guideline}</span>}
                      </div>
                      <p className="mt-2 break-words text-sm leading-7">{i.sample}</p>
                      <p className="mt-1 text-xs leading-6 text-muted-foreground">{i.why}</p>
                      {i.scope === "page" && (
                        <ul className="mt-2 space-y-0.5 text-xs text-muted-foreground" dir="ltr" style={{ textAlign: d.dir === "rtl" ? "right" : "left" }}>
                          {i.pages.slice(0, 5).map((p) => <li key={p} className="break-all">{host(p)}</li>)}
                          {i.pages.length > 5 && <li>{d.more(i.pages.length - 5)}</li>}
                        </ul>
                      )}
                    </li>
                  ))}
                </ol>
              )}

              <h2 className="mt-12 text-2xl font-semibold">{d.pagesTitle}</h2>
              <div className="mt-4 overflow-x-auto rounded-xl border border-border bg-surface">
                <table className="w-full text-sm">
                  <thead><tr className="border-b border-border text-xs text-muted-foreground"><th className="p-3 text-start font-medium">{d.colPage}</th><th className="p-3 font-medium">{d.colScore}</th><th className="p-3 font-medium">{d.colFail}</th><th className="p-3 font-medium">{d.colWarn}</th></tr></thead>
                  <tbody>
                    {agg.rows.map((r) => (
                      <tr key={r.url} className="border-b border-border/60 last:border-0">
                        <td className="max-w-[16rem] break-all p-3 text-xs" dir="ltr" style={{ textAlign: d.dir === "rtl" ? "right" : "left" }}>{host(r.url)}</td>
                        <td className={`p-3 text-center font-semibold ${r.score === null ? "" : tone(r.score)}`} dir="ltr">{r.score ?? "-"}</td>
                        <td className="p-3 text-center" dir="ltr">{r.ok ? r.fail : "-"}</td>
                        <td className="p-3 text-center" dir="ltr">{r.ok ? r.warn : "-"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="print-card mt-10 rounded-xl border border-border bg-surface/50 p-5">
                <p className="text-xs leading-6 text-muted-foreground">{d.scope}</p>
                <p className="mt-3 text-xs leading-6 text-muted-foreground">{d.cap}</p>
              </div>

              <div className="no-print mt-12 rounded-2xl border border-primary/30 bg-surface p-8 text-center md:p-10">
                <h2 className="text-2xl font-semibold">{d.ctaTitle}</h2>
                <p className="mx-auto mt-3 max-w-xl text-muted-foreground">{d.ctaText}</p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <a href={d.packages} className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground glow-primary hover:opacity-90">{d.ctaPrimary}</a>
                  <a href={d.consult} className="inline-flex items-center rounded-md border border-border bg-background px-6 py-3 text-sm font-medium hover:border-primary hover:text-primary">{d.ctaSecondary}</a>
                </div>
                <button type="button" onClick={() => { setData(null); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="mt-6 text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">{d.again}</button>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
      }
