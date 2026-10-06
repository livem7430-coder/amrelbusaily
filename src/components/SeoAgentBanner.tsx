import { ArrowRight, MessagesSquare, Sparkles } from "lucide-react";

const copy = {
  en: { dir: "ltr", href: "/seo-agent", tag: "NEW", title: "Chat with the SEO AGENT", text: "Ask anything about SEO for free, or switch to Agent mode to audit your site. No signup.", cta: "Open the SEO AGENT" },
  ar: { dir: "rtl", href: "/ar/seo-agent", tag: "جديد", title: "اتكلم مع SEO AGENT", text: "اسأل أي حاجة عن السيو مجانًا، أو حوّل على وضع Agent لفحص موقعك. بدون تسجيل.", cta: "افتح SEO AGENT" },
} as const;

export function SeoAgentBanner({ lang }: { lang: "en" | "ar" }) {
  const c = copy[lang];
  return (
    <div dir={c.dir} className="border-b border-primary/25 bg-primary/10">
      <a href={c.href} aria-label={`${c.title}. ${c.cta}`} className="group mx-auto flex max-w-6xl items-center gap-3 px-6 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50">
        <span className="hidden h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground sm:grid"><MessagesSquare className="h-4 w-4" aria-hidden="true" /></span>
        <span className="rounded-full border border-primary/40 bg-background/60 px-2 py-0.5 font-mono text-[10px] font-semibold tracking-widest text-primary">{c.tag}</span>
        <span className="min-w-0 flex-1 text-sm leading-6">
          <span className="font-semibold">{c.title}</span>
          <span className="hidden text-muted-foreground md:inline"> - {c.text}</span>
        </span>
        <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground transition group-hover:opacity-90 sm:text-sm">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="hidden sm:inline">{c.cta}</span><span className="sm:hidden">{lang === "ar" ? "افتح" : "Open"}</span>
          <ArrowRight className={`h-3.5 w-3.5 ${lang === "ar" ? "rotate-180" : ""}`} aria-hidden="true" />
        </span>
      </a>
    </div>
  );
}
