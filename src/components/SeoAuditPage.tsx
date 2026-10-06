import { useState, type FormEvent } from "react";
import { Check, AlertTriangle, XCircle, ArrowRight, Search, ShieldCheck, Gauge, FileSearch, Loader2 } from "lucide-react";
import type { AuditResult } from "@/lib/seo-audit.server";
import { describe, type Lang } from "@/lib/seo-audit-copy";

const base = "https://amrelbusaily.vercel.app";

const ui = {
  en: {
    dir: "ltr", home: "/", other: "/ar/seo-audit", packages: "/packages", consult: "/free-consultation", services: "/services", blog: "/blog/en",
    title: "Free E-commerce SEO Audit | Amr Elbusaily",
    description: "Paste your store URL and get a technical SEO report on your live page in seconds: indexing signals, tags, links, page-experience basics, product markup and trust signals. No signup.",
    eyebrow: "FREE TOOL · STORE SEO AUDIT",
    h1: "Find what is holding your store back in Google",
    intro: "Enter your store address. The tool fetches your page and runs a set of technical SEO checks based on Google Search Central guidance and the audit categories common in tools like Semrush and Ahrefs. Facts such as status codes and tags are measured directly. Length and count thresholds are guidelines and are marked as such.",
    placeholder: "yourstore.com or a product page URL",
    run: "Run the audit", running: "Checking your store…",
    steps: ["Fetching the live page", "Reading titles, headings and markup", "Checking robots.txt and sitemap", "Measuring server response"],
    trust: ["Checks run on your live page", "No signup, no email needed", "The report is not saved"],
    how: ["Paste your URL", "We fetch the page HTML and related files", "Get a report in your language"],
    howTitle: "How it works",
    scoreLabel: "Basic-check score", of: "of 100", guideline: "Guideline", aiTitle: "AI summary of the results", aiNote: "Written by an AI from the check results above only. It adds no new findings. Verify before acting.", scoreNote: "Score of this tool's basic checks only. It is not a Google score and does not predict rankings.",
    pass: "Passed", warn: "Needs work", fail: "Problems",
    groups: { index: "Indexing and crawling", content: "On-page content", links: "Links", tech: "Technical setup", speed: "Speed and page-experience basics", data: "Structured data and sharing", trust: "Trust signals" } as Record<string, string>,
    unTitle: "What this tool does not measure", unList: ["Real-user Core Web Vitals (LCP, INP, CLS): check PageSpeed Insights or Search Console", "Whether Google has actually indexed the page: use Search Console", "Backlinks, domain authority and keyword rankings", "Content quality, originality and search-intent match", "Site-wide issues: only this page, robots.txt, the sitemap and a small link sample are checked", "Content added by JavaScript after load, and visual layout or pop-ups"],
    audited: "Audited page", platform: "Detected platform",
    fixFirst: "Fix first", fixFirstSub: "The highest-priority problems found on your page.",
    noFail: "No high-priority problems found in the checks this tool can run. The items below are suggestions.",
    errors: { invalid_url: "That does not look like a valid address. Try something like yourstore.com.", blocked: "This address cannot be audited.", unreachable: "We could not reach that site. Check the address and try again.", not_html: "That address does not return a web page.", rate_limited: "Too many audits in a short time. Wait a minute and try again.", timeout: "The site took too long to answer. Try again in a moment.", generic: "Something went wrong. Please try again." } as Record<string, string>,
    scope: "This audit checks the single page you entered, robots.txt, the sitemap and a sample of its internal links. Items marked Guideline are editorial thresholds, not Google rules. Speed here is server response time and simple page-weight signals, not a full browser test.",
    ctaEyebrow: "NEXT STEP",
    ctaTitle: "Want these fixed and your store growing in search?",
    ctaText: "I handle technical SEO, content and Google ranking work for online stores in the Gulf, with clear monthly packages.",
    ctaPrimary: "See the packages", ctaSecondary: "Book a free consultation",
    again: "Audit another store", name: "Amr Elbusaily", nav: ["Services", "Packages", "Articles"], lang: "AR",
  },
  ar: {
    dir: "rtl", home: "/ar", other: "/seo-audit", packages: "/ar/packages", consult: "/ar/free-consultation", services: "/ar/services", blog: "/blog/ar",
    title: "فحص SEO مجاني للمتاجر الإلكترونية | عمرو البصيلي",
    description: "الصق رابط متجرك واحصل خلال ثوانٍ على تقرير سيو تقني لصفحتك الحية: إشارات الأرشفة والوسوم والروابط وأساسيات تجربة الصفحة وترميز المنتج وإشارات الثقة. بدون تسجيل.",
    eyebrow: "أداة مجانية · فحص سيو المتاجر",
    h1: "اكتشف ما الذي يمنع متجرك من الظهور في جوجل",
    intro: "اكتب رابط متجرك. تجلب الأداة صفحتك وتجري مجموعة فحوصات سيو تقنية مبنية على إرشادات Google Search Central وعلى فئات الفحص الشائعة في أدوات مثل Semrush وAhrefs. الحقائق مثل أكواد الاستجابة والوسوم تُقاس مباشرة، أما حدود الطول والعدد فهي إرشادات ومُعلَّمة بذلك.",
    placeholder: "yourstore.com أو رابط صفحة منتج",
    run: "ابدأ الفحص", running: "جارٍ فحص متجرك…",
    steps: ["جلب الصفحة الحية", "قراءة العناوين والترميز", "فحص robots.txt وخريطة الموقع", "قياس استجابة السيرفر"],
    trust: ["الفحوصات تجري على صفحتك الحية", "بدون تسجيل أو إيميل", "التقرير لا يُحفظ"],
    how: ["الصق الرابط", "نجلب كود الصفحة والملفات المرتبطة بها", "تحصل على تقرير بلغتك"],
    howTitle: "كيف تعمل الأداة",
    scoreLabel: "درجة الفحوصات الأساسية", of: "من 100", guideline: "إرشاد", aiTitle: "ملخص بالذكاء الاصطناعي للنتائج", aiNote: "كتبه الذكاء الاصطناعي من نتائج الفحص أعلاه فقط ولا يضيف نتائج جديدة. راجعه قبل التنفيذ.", scoreNote: "هذه درجة فحوصات هذه الأداة الأساسية فقط. ليست درجة من جوجل ولا تتنبأ بالترتيب.",
    pass: "سليم", warn: "يحتاج تحسين", fail: "مشاكل",
    groups: { index: "الأرشفة والزحف", content: "محتوى الصفحة", links: "الروابط", tech: "الإعداد التقني", speed: "أساسيات السرعة وتجربة الصفحة", data: "البيانات المنظمة والمشاركة", trust: "إشارات الثقة" } as Record<string, string>,
    unTitle: "ما لا تقيسه هذه الأداة", unList: ["مؤشرات Core Web Vitals الفعلية من المستخدمين (LCP وINP وCLS): راجع PageSpeed Insights أو Search Console", "هل أرشفت جوجل الصفحة فعلًا: استخدم Search Console", "الروابط الخلفية وسلطة النطاق وترتيب الكلمات المفتاحية", "جودة المحتوى وأصالته ومطابقته لنية البحث", "مشاكل الموقع ككل: نفحص هذه الصفحة وrobots.txt وخريطة الموقع وعيّنة صغيرة من الروابط فقط", "المحتوى الذي يضيفه JavaScript بعد التحميل، والشكل البصري والنوافذ المنبثقة"],
    audited: "الصفحة المفحوصة", platform: "المنصة المكتشفة",
    fixFirst: "أصلح هذه أولًا", fixFirstSub: "أهم المشاكل التي وجدناها في صفحتك.",
    noFail: "لم نجد مشاكل عالية الأولوية ضمن الفحوصات التي تستطيع الأداة إجراءها. العناصر التالية مقترحات.",
    errors: { invalid_url: "هذا لا يبدو رابطًا صحيحًا. جرّب شيئًا مثل yourstore.com.", blocked: "لا يمكن فحص هذا العنوان.", unreachable: "لم نتمكن من الوصول إلى الموقع. راجع الرابط وحاول مرة أخرى.", not_html: "هذا العنوان لا يعرض صفحة ويب.", rate_limited: "عدد كبير من الفحوصات في وقت قصير. انتظر دقيقة وحاول مرة أخرى.", timeout: "تأخر الموقع في الرد. حاول مرة أخرى بعد قليل.", generic: "حدث خطأ. حاول مرة أخرى." } as Record<string, string>,
    scope: "يفحص هذا التقرير الصفحة التي أدخلتها وrobots.txt وخريطة الموقع وعيّنة من روابطها الداخلية. العناصر المعلَّمة «إرشاد» حدود تحريرية وليست قواعد من جوجل. السرعة هنا هي زمن استجابة السيرفر ومؤشرات حجم الصفحة البسيطة وليست اختبارًا كاملًا في المتصفح.",
    ctaEyebrow: "الخطوة التالية",
    ctaTitle: "تريد إصلاح هذه النقاط ونمو متجرك في البحث؟",
    ctaText: "أعمل على السيو التقني والمحتوى وترتيب جوجل للمتاجر الإلكترونية في الخليج، بباقات شهرية واضحة.",
    ctaPrimary: "شاهد الباقات", ctaSecondary: "احجز استشارة مجانية",
    again: "افحص متجرًا آخر", name: "عمرو البصيلي", nav: ["الخدمات", "الباقات", "المقالات"], lang: "EN",
  },
};

export function seoAuditHead(lang: Lang) {
  const d = ui[lang];
  const url = `${base}${lang === "ar" ? "/ar/seo-audit" : "/seo-audit"}`;
  return {
    meta: [
      { title: d.title },
      { name: "description", content: d.description },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: d.title },
      { property: "og:description", content: d.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:locale", content: lang === "ar" ? "ar_EG" : "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "ar", href: `${base}/ar/seo-audit` },
      { rel: "alternate", hrefLang: "en", href: `${base}/seo-audit` },
      { rel: "alternate", hrefLang: "x-default", href: `${base}/seo-audit` },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "WebApplication", name: lang === "ar" ? "فحص SEO مجاني للمتاجر" : "Free E-commerce SEO Audit", url, applicationCategory: "BusinessApplication", operatingSystem: "Any", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }, creator: { "@type": "Person", name: "Amr Elbusaily", url: base } }) }],
  };
}

function Ring({ score, label, of }: { score: number; label: string; of: string }) {
  const r = 54, c = 2 * Math.PI * r;
  const tone = score >= 80 ? "text-primary" : score >= 55 ? "text-accent" : "text-red-400";
  return (
    <div className="relative grid h-40 w-40 shrink-0 place-items-center" role="img" aria-label={`${label}: ${score} ${of}`}>
      <svg viewBox="0 0 128 128" className={`absolute inset-0 -rotate-90 ${tone}`} aria-hidden="true">
        <circle cx="64" cy="64" r={r} fill="none" stroke="currentColor" strokeOpacity="0.15" strokeWidth="10" />
        <circle cx="64" cy="64" r={r} fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (1 - score / 100)} />
      </svg>
      <div className="text-center" dir="ltr">
        <div className={`font-display text-5xl font-semibold ${tone}`}>{score}</div>
        <div className="text-xs text-muted-foreground">/ 100</div>
      </div>
    </div>
  );
}

function StatusIcon({ s }: { s: "pass" | "warn" | "fail" }) {
  if (s === "pass") return <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary/15 text-primary"><Check className="h-4 w-4" aria-hidden="true" /></span>;
  if (s === "warn") return <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent/15 text-accent"><AlertTriangle className="h-4 w-4" aria-hidden="true" /></span>;
  return <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-red-500/15 text-red-400"><XCircle className="h-4 w-4" aria-hidden="true" /></span>;
}

export function SeoAuditPage({ lang }: { lang: Lang }) {
  const d = ui[lang];
  const [url, setUrl] = useState("");
  const [busy, setBusy] = useState(false);
  const [step, setStep] = useState(0);
  const [result, setResult] = useState<AuditResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [ai, setAi] = useState<{ summary: string; priorities: { id: string; advice: string }[] } | null>(null);

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (!url.trim() || busy) return;
    setBusy(true); setError(null); setResult(null); setAi(null); setStep(0);
    const timer = setInterval(() => setStep((s) => Math.min(s + 1, d.steps.length - 1)), 1500);
    try {
      const res = await fetch("/api/seo-audit", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ url }) });
      const data = await res.json();
      if (data.ok) {
        setResult(data);
        // Optional AI narration of the measured checks; silently skipped if unavailable.
        fetch("/api/seo-audit-ai", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ lang: data.lang, checks: data.checks }) })
          .then((r) => r.json()).then((a) => { if (a?.ok) setAi({ summary: a.summary, priorities: a.priorities }); }).catch(() => undefined);
        setTimeout(() => document.getElementById("report")?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
      } else setError(d.errors[data.error] ?? d.errors.generic);
    } catch {
      setError(d.errors.generic);
    } finally {
      clearInterval(timer);
      setBusy(false);
    }
  }

  const rl: Lang = result?.lang ?? lang;
  const rd = ui[rl];
  const rows = result ? result.checks.map((c) => ({ c, ...describe(rl, c) })) : [];
  const fails = rows.filter((r) => r.c.status === "fail");
  const order: Array<keyof typeof d.groups> = ["index", "content", "links", "tech", "speed", "data", "trust"];

  return (
    <div className="min-h-screen" dir={d.dir} lang={lang}>
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href={d.home} className="flex items-center gap-2 font-display font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-primary font-mono text-sm text-primary-foreground">AE</span>
            <span>{d.name}</span>
          </a>
          <nav className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href={d.services} className="hidden hover:text-foreground sm:inline">{d.nav[0]}</a>
            <a href={d.packages} className="hover:text-foreground">{d.nav[1]}</a>
            <a href={d.blog} className="hidden hover:text-foreground sm:inline">{d.nav[2]}</a>
            <a href={d.other} className="font-mono text-xs hover:text-foreground">{d.lang}</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 grid-bg" aria-hidden="true" />
          <div className="relative mx-auto max-w-4xl px-6 py-16 text-center md:py-24">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{d.eyebrow}</div>
            <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">{d.h1}</h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg md:leading-9">{d.intro}</p>

            <form onSubmit={submit} className="mx-auto mt-10 max-w-2xl rounded-2xl border border-border bg-surface/80 p-2 shadow-lg backdrop-blur">
              <div className="flex flex-col gap-2 sm:flex-row">
                <label className="sr-only" htmlFor="store-url">{d.placeholder}</label>
                <div className="flex flex-1 items-center gap-3 rounded-xl px-4">
                  <Search className="h-5 w-5 shrink-0 text-muted-foreground" aria-hidden="true" />
                  <input id="store-url" dir="ltr" inputMode="url" autoComplete="off" autoCapitalize="none" spellCheck={false} value={url} onChange={(e) => setUrl(e.target.value)} placeholder={d.placeholder} disabled={busy}
                    className={`h-12 w-full bg-transparent text-base outline-none placeholder:text-muted-foreground/70 ${lang === "ar" ? "text-right" : ""}`} />
                </div>
                <button type="submit" disabled={busy || !url.trim()} className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground glow-primary transition hover:opacity-90 disabled:opacity-50">
                  {busy ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <ArrowRight className={`h-4 w-4 ${lang === "ar" ? "rotate-180" : ""}`} aria-hidden="true" />}
                  {busy ? d.running : d.run}
                </button>
              </div>
            </form>

            {busy && (
              <ul className="mx-auto mt-6 max-w-md space-y-2 text-start text-sm" aria-live="polite">
                {d.steps.map((s, i) => (
                  <li key={s} className={`flex items-center gap-3 transition-opacity ${i <= step ? "opacity-100" : "opacity-30"}`}>
                    {i < step ? <Check className="h-4 w-4 text-primary" aria-hidden="true" /> : i === step ? <Loader2 className="h-4 w-4 animate-spin text-primary" aria-hidden="true" /> : <span className="h-4 w-4" />}
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            )}
            {error && <p role="alert" className="mx-auto mt-6 max-w-xl rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">{error}</p>}

            <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {d.trust.map((t) => (<li key={t} className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />{t}</li>))}
            </ul>
          </div>
        </section>

        {result && (
          <section id="report" className="scroll-mt-20 border-b border-border" dir={rd.dir} lang={rl}>
            <div className="mx-auto max-w-5xl px-6 py-14 md:py-20">
              <div className="grid gap-8 rounded-2xl border border-border bg-surface p-6 md:grid-cols-[auto_1fr] md:p-10">
                <div className="mx-auto"><Ring score={result.score} label={rd.scoreLabel} of={rd.of} /></div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{rd.scoreLabel}</div>
                  <div className="mt-2 break-all font-display text-xl font-semibold" dir="ltr" style={{ textAlign: rd.dir === "rtl" ? "right" : "left" }}>{(() => { try { return new URL(result.finalUrl).host; } catch { return result.finalUrl; } })()}</div>
                  {result.facts.title && <p className="mt-1 text-sm text-muted-foreground">{result.facts.title}</p>}
                  {result.facts.platform && <p className="mt-1 text-xs text-muted-foreground">{rd.platform}: {result.facts.platform}</p>}
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {([["pass", rd.pass, "text-primary"], ["warn", rd.warn, "text-accent"], ["fail", rd.fail, "text-red-400"]] as const).map(([k, label, tone]) => (
                      <div key={k} className="rounded-xl border border-border bg-background/50 p-4 text-center">
                        <div className={`font-display text-3xl font-semibold ${tone}`}>{result.counts[k]}</div>
                        <div className="mt-1 text-xs text-muted-foreground">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {ai && (
                <div className="mt-10 rounded-2xl border border-primary/30 bg-primary/5 p-6">
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{rd.aiTitle}</div>
                  <p className="mt-3 text-sm leading-7">{ai.summary}</p>
                  {ai.priorities.length > 0 && (
                    <ol className="mt-4 space-y-3">
                      {ai.priorities.map((p, i) => (
                        <li key={p.id} className="flex gap-3 text-sm leading-7"><span className="font-mono text-primary">{i + 1}</span><span><strong>{rows.find((r) => r.c.id === p.id)?.t}</strong>: {p.advice}</span></li>
                      ))}
                    </ol>
                  )}
                  <p className="mt-4 text-xs text-muted-foreground">{rd.aiNote}</p>
                </div>
              )}

              <div className="mt-10">
                <h2 className="flex items-center gap-2 text-2xl font-semibold"><Gauge className="h-6 w-6 text-primary" aria-hidden="true" />{rd.fixFirst}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{fails.length ? rd.fixFirstSub : rd.noFail}</p>
                {fails.length > 0 && (
                  <ul className="mt-4 space-y-3">
                    {fails.map((r) => (
                      <li key={r.c.id} className="flex gap-3 rounded-xl border border-red-500/30 bg-red-500/5 p-4">
                        <StatusIcon s="fail" />
                        <div><div className="font-semibold">{r.t}</div><p className="mt-1 text-sm leading-7 text-muted-foreground">{r.msg}</p></div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {order.map((g) => {
                const list = rows.filter((r) => r.group === g);
                if (!list.length) return null;
                return (
                  <div key={g} className="mt-12">
                    <h3 className="flex items-center gap-2 text-lg font-semibold"><FileSearch className="h-5 w-5 text-primary" aria-hidden="true" />{rd.groups[g]}</h3>
                    <ul className="mt-4 divide-y divide-border overflow-hidden rounded-xl border border-border bg-surface">
                      {list.map((r) => (
                        <li key={r.c.id} className="flex gap-4 p-4 md:p-5">
                          <StatusIcon s={r.c.status} />
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2 font-semibold">{r.t}{r.c.kind === "guideline" && <span className="rounded-full border border-border px-2 py-0.5 text-[10px] font-normal uppercase tracking-wide text-muted-foreground">{rd.guideline}</span>}</div>
                            <p className="mt-1 break-words text-sm leading-7">{r.msg}</p>
                            {r.c.status !== "pass" && <p className="mt-1 text-xs leading-6 text-muted-foreground">{r.why}</p>}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}

              <p className="mt-4 text-xs text-muted-foreground">{rd.scoreNote}</p>

              <div className="mt-10 rounded-xl border border-border bg-surface/50 p-5">
                <h3 className="text-sm font-semibold">{rd.unTitle}</h3>
                <ul className="mt-3 list-disc space-y-1.5 ps-5 text-xs leading-6 text-muted-foreground">{rd.unList.map((u) => <li key={u}>{u}</li>)}</ul>
                <p className="mt-4 text-xs leading-6 text-muted-foreground">{rd.scope}</p>
              </div>

              <div className="relative mt-12 overflow-hidden rounded-2xl border border-primary/30 bg-surface p-8 text-center md:p-12">
                <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />
                <div className="relative">
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{rd.ctaEyebrow}</div>
                  <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-semibold md:text-3xl">{rd.ctaTitle}</h2>
                  <p className="mx-auto mt-3 max-w-xl text-muted-foreground">{rd.ctaText}</p>
                  <div className="mt-7 flex flex-wrap justify-center gap-3">
                    <a href={rd.packages} className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground glow-primary hover:opacity-90">{rd.ctaPrimary}</a>
                    <a href={rd.consult} className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-medium hover:border-primary hover:text-primary">{rd.ctaSecondary}</a>
                  </div>
                  <button type="button" onClick={() => { setResult(null); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="mt-6 text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">{rd.again}</button>
                </div>
              </div>
            </div>
          </section>
        )}

        {!result && (
          <section className="border-b border-border bg-surface/30">
            <div className="mx-auto max-w-5xl px-6 py-16">
              <h2 className="text-center text-2xl font-semibold">{d.howTitle}</h2>
              <ol className="mt-8 grid gap-4 md:grid-cols-3">
                {d.how.map((h, i) => (
                  <li key={h} className="rounded-xl border border-border bg-surface p-6">
                    <div className="font-mono text-sm text-primary">0{i + 1}</div>
                    <p className="mt-3 font-medium">{h}</p>
                  </li>
                ))}
              </ol>
              <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-6 text-muted-foreground">{d.scope}</p>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
