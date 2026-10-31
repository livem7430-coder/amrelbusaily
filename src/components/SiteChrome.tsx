import { useEffect, useState } from "react";

type Lang = "ar" | "en";
type NavSection = "services" | "packages" | "offers" | "blog";

const EMAIL = "amreelbasily@gmail.com";

function navLinks(lang: Lang) {
  const ar = lang === "ar";
  return {
    home: ar ? "/ar" : "/",
    services: ar ? "/ar/services" : "/services",
    packages: ar ? "/ar/packages" : "/packages",
    offers: ar ? "/ar/offers" : "/offers",
    blog: ar ? "/blog/ar" : "/blog/en",
    freeConsultation: ar ? "/ar/free-consultation" : "/free-consultation",
    langToggle: ar ? "/" : "/ar",
    langToggleLabel: ar ? "EN" : "AR",
    name: ar ? "عمرو البصيلي" : "Amr Elbusaily",
    contact: ar ? "تواصل معي" : "Contact me",
    bookConsultation: ar ? "احجز استشارة" : "Book a consultation",
    mainNavLabel: ar ? "التنقل الرئيسي" : "Primary navigation",
    quickNavLabel: ar ? "التنقل السريع" : "Quick navigation",
    skipToContent: ar ? "انتقل إلى المحتوى" : "Skip to content",
    labels: {
      services: ar ? "الخدمات" : "Services",
      packages: ar ? "باقاتي" : "Packages",
      offers: ar ? "العروض" : "Offers",
      blog: ar ? "المقالات" : "Articles",
    } as Record<NavSection, string>,
  };
}

const SECTIONS: NavSection[] = ["services", "packages", "offers", "blog"];

/** Reading progress 0..1 across the whole document. SSR-safe (starts at 0). */
function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
    };
    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return progress;
}

function BrandMark({ lang, href }: { lang: Lang; href: string }) {
  const l = navLinks(lang);
  return (
    <a href={href} className="flex shrink-0 items-center gap-2 font-display font-semibold">
      <span className="grid h-8 w-8 place-items-center rounded-md bg-primary font-mono text-sm text-primary-foreground">
        AE
      </span>
      <span>
        <span className="block leading-none">{l.name}</span>
        <span className="mt-1 hidden font-mono text-[9px] font-normal uppercase tracking-[0.16em] text-muted-foreground sm:block">
          SEO &amp; AI Growth
        </span>
      </span>
    </a>
  );
}

/**
 * Shared sticky header for the marketing subpages (services, service detail,
 * packages, offers). Mirrors the home page: full desktop nav with an active
 * section, language toggle and contact CTA, plus a scrollable chip row on
 * mobile. A thin reading-progress bar sits under the header.
 */
export function SiteHeader({
  lang,
  active,
  altHref,
}: {
  lang: Lang;
  active?: NavSection;
  /** Counterpart URL for the language toggle; defaults to the other-language home. */
  altHref?: string;
}) {
  const ar = lang === "ar";
  const l = navLinks(lang);
  const progress = useScrollProgress();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        {l.skipToContent}
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <BrandMark lang={lang} href={l.home} />
        <nav aria-label={l.mainNavLabel} className="hidden items-center gap-6 text-sm lg:flex">
          {SECTIONS.map((section) => (
            <a
              key={section}
              href={l[section]}
              aria-current={active === section ? "page" : undefined}
              className={
                active === section
                  ? "font-medium text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }
            >
              {l.labels[section]}
            </a>
          ))}
          <a
            href={l.freeConsultation}
            className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 font-medium text-primary hover:bg-primary/15"
          >
            {l.bookConsultation}
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={altHref ?? l.langToggle}
            className="font-mono text-xs text-muted-foreground hover:text-foreground"
          >
            {l.langToggleLabel}
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            {l.contact}
          </a>
        </div>
      </div>
      <div className="border-t border-border/60 bg-background/95 px-6 py-2.5 lg:hidden">
        <nav
          aria-label={l.quickNavLabel}
          className="mx-auto flex max-w-6xl gap-2 overflow-x-auto text-xs no-scrollbar"
        >
          {SECTIONS.map((section) => (
            <a
              key={section}
              href={l[section]}
              aria-current={active === section ? "page" : undefined}
              className={
                active === section
                  ? "shrink-0 rounded-full border border-primary/30 bg-primary/10 px-3 py-2 text-primary"
                  : "shrink-0 rounded-full border border-border px-3 py-2 text-muted-foreground hover:border-primary hover:text-primary"
              }
            >
              {l.labels[section]}
            </a>
          ))}
          <a
            href={l.freeConsultation}
            className="shrink-0 rounded-full bg-primary px-3 py-2 font-medium text-primary-foreground"
          >
            {l.bookConsultation}
          </a>
        </nav>
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5">
        <div
          className="h-full w-full bg-primary/80 transition-transform duration-150 ease-out"
          style={{
            transform: `scaleX(${progress})`,
            transformOrigin: ar ? "right" : "left",
          }}
        />
      </div>
    </header>
  );
}

/** Shared richer footer for the marketing subpages: quick links + contact + copyright. */
export function SiteFooter({ lang }: { lang: Lang }) {
  const ar = lang === "ar";
  const l = navLinks(lang);
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 pb-28 pt-10 md:pb-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <BrandMark lang={lang} href={l.home} />
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              {ar
                ? "سيو وتسويق رقمي ونمو AI لشركات الخدمات وB2B والمتاجر الإلكترونية — مصر والخليج."
                : "SEO, digital marketing and AI growth for service companies, B2B teams and e-commerce stores — Egypt and the Gulf."}
            </p>
          </div>
          <nav
            aria-label={ar ? "روابط سريعة" : "Quick links"}
            className="grid grid-cols-2 gap-x-12 gap-y-2.5 text-sm"
          >
            {SECTIONS.map((section) => (
              <a key={section} href={l[section]} className="text-muted-foreground hover:text-foreground">
                {l.labels[section]}
              </a>
            ))}
            <a href={l.freeConsultation} className="text-muted-foreground hover:text-foreground">
              {ar ? "استشارة مجانية" : "Free consultation"}
            </a>
            <a href={l.home} className="text-muted-foreground hover:text-foreground">
              {ar ? "الرئيسية" : "Home"}
            </a>
          </nav>
          <div className="text-sm">
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {ar ? "تواصل" : "Contact"}
            </div>
            <a href={`mailto:${EMAIL}`} className="mt-2 inline-block text-foreground hover:text-primary">
              {EMAIL}
            </a>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-sm text-muted-foreground md:flex-row">
          <div>
            © {new Date().getFullYear()} {l.name}
            {ar ? " — جميع الحقوق محفوظة." : " — All rights reserved."}
          </div>
          <div className="font-mono text-xs">SEO · Digital Marketing · AI Growth · E-commerce</div>
        </div>
      </div>
    </footer>
  );
}

/**
 * Global back-to-top control. Sits on the inline-start side, opposite the
 * floating WhatsApp/theme controls, and only appears after real scrolling.
 */
export function BackToTop({ lang }: { lang: Lang }) {
  const ar = lang === "ar";
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={ar ? "العودة إلى الأعلى" : "Back to top"}
      title={ar ? "العودة إلى الأعلى" : "Back to top"}
      className={`fixed bottom-4 start-4 z-50 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface/95 text-foreground shadow-lg backdrop-blur transition-[transform,opacity] duration-200 hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary md:bottom-6 md:start-6 md:h-10 md:w-10 ${
        visible ? "" : "pointer-events-none translate-y-24 opacity-0"
      }`}
    >
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
        <path d="M12 19V5m0 0-6 6m6-6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="sr-only">{ar ? "العودة إلى الأعلى" : "Back to top"}</span>
    </button>
  );
}
