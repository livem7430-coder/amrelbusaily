import { createFileRoute, Link } from "@tanstack/react-router";
import amrPortrait from "@/assets/amr-portrait.jpg.asset.json";
import { Portrait } from "@/components/Portrait";

const url = "https://amrelbusaily.vercel.app/free-consultation";
const title = "Free SEO Consultation — Sadaqah Jariyah | Amr Elbusaily";
const description =
  "A free technical SEO growth plan in memory of my father. Get a full audit covering crawl budget, keyword gaps, authority mapping, and a 90-day roadmap for e-commerce & SaaS sites.";

export const Route = createFileRoute("/free-consultation")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { property: "og:title", content: "Free SEO Consultation — Sadaqah Jariyah" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:locale", content: "en_US" },
      { property: "og:image", content: `https://amrelbusaily.vercel.app${amrPortrait.url}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Free SEO Consultation — Sadaqah Jariyah" },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: `https://amrelbusaily.vercel.app${amrPortrait.url}` },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "en", href: url },
      { rel: "alternate", hrefLang: "ar", href: "https://amrelbusaily.vercel.app/ar/free-consultation" },
      { rel: "alternate", hrefLang: "x-default", href: url },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Free Technical SEO Growth Plan",
          serviceType: "Technical SEO audit & growth roadmap",
          inLanguage: "en",
          url,
          provider: {
            "@type": "Person",
            name: "Amr Elbusaily",
            url: "https://amrelbusaily.vercel.app/",
          },
          areaServed: "Worldwide",
          audience: {
            "@type": "Audience",
            audienceType: "E-commerce & SaaS website owners with 5K+ monthly visits",
          },
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "EGP",
            availability: "https://schema.org/InStock",
            description: "A completely free SEO consultation and growth plan offered as Sadaqah Jariyah.",
          },
        }),
      },
    ],
  }),
  component: FreeConsultation,
});

const pillars = [
  {
    n: "01",
    title: "Technical Deep Dive",
    body: "Crawl budget, index bloat, Core Web Vitals, and schema markup — a full technical review of everything stopping Google from crawling and indexing your site properly.",
  },
  {
    n: "02",
    title: "Keyword & Competitor Gap",
    body: "Keyword research + content gap analysis against your top 3 competitors, so you know exactly what topics drive their traffic.",
  },
  {
    n: "03",
    title: "Authority Map",
    body: "Internal linking structure, topical clusters, and orphan pages — a complete map of how authority flows through your site.",
  },
  {
    n: "04",
    title: "90-Day Roadmap",
    body: "The top 10 tasks ranked by impact on traffic and sales, ready to execute step by step over the next 90 days.",
  },
];

function FreeConsultation() {
  return (
    <div className="min-h-screen" dir="ltr" lang="en">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2 font-display font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-primary font-mono text-sm text-primary-foreground">
              AE
            </span>
            <span>Amr Elbusaily</span>
          </Link>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link to="/blog" className="hover:text-foreground">Blog</Link>
            <Link to="/ar/free-consultation" className="hover:text-foreground">النسخة العربية</Link>
            <Link to="/ar" className="font-mono text-xs hover:text-foreground">AR</Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.4fr_1fr] md:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 font-mono text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              Sadaqah Jariyah · Free Technical SEO Growth Plan
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.15] md:text-5xl">
              <span className="text-gradient">Free SEO consultation</span>
              <br />
              and a complete growth plan
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-9 text-muted-foreground">
              My father — may Allah have mercy on him — loved knowledge and helping people. So I decided
              to offer a full SEO analysis and growth plan completely free, as Sadaqah Jariyah for his soul.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:amreelbasily@gmail.com?subject=GROWTH"
                className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground glow-primary transition hover:opacity-90"
              >
                Book your consultation — send GROWTH
              </a>
            </div>
            <p className="mt-4 font-mono text-xs text-muted-foreground">
              Send me the word <span className="text-primary">GROWTH</span> + your website URL
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-primary/10 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-surface">
              <Portrait alt="Amr Elbusaily, SEO specialist" />
              <div className="grid grid-cols-2 divide-x divide-border border-t border-border font-mono text-xs">
                <div className="p-4">
                  <div className="text-muted-foreground">Consultation</div>
                  <div className="mt-1 text-foreground">100% free</div>
                </div>
                <div className="p-4">
                  <div className="text-muted-foreground">Delivery</div>
                  <div className="mt-1 text-foreground">90-day roadmap</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="border-t border-border bg-surface/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-widest text-primary">
              What I will help you with
            </div>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Four pillars that cover your site end to end
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {pillars.map((p) => (
              <div
                key={p.n}
                className="rounded-xl border border-border bg-surface p-6 transition hover:border-primary/50"
              >
                <div className="font-mono text-xs text-primary">{p.n}</div>
                <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOAL + AUDIENCE */}
      <section className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-8">
            <div className="font-mono text-xs uppercase tracking-widest text-primary">The goal</div>
            <p className="mt-4 text-lg leading-9">
              You will know exactly what to work on to get your site ranking on Google — no guessing, no fluff.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-8">
            <div className="font-mono text-xs uppercase tracking-widest text-primary">
              Who is this for?
            </div>
            <p className="mt-4 text-lg leading-9">
              E-commerce and SaaS website owners with{" "}
              <strong>5K+ monthly visits</strong> who want to turn organic search into a growth channel.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-surface/30">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="rounded-2xl border border-border bg-surface p-10 text-center md:p-14">
            <h2 className="text-3xl font-semibold md:text-4xl">Book your free consultation now</h2>
            <p className="mt-4 text-muted-foreground">
              Send me the word <span className="font-mono text-primary">GROWTH</span> + your website URL
              by email or WhatsApp.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:amreelbasily@gmail.com?subject=GROWTH"
                className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
              >
                amreelbasily@gmail.com
              </a>
            </div>
            <p className="mt-10 text-sm leading-8 text-muted-foreground">
              May Allah accept this deed as Sadaqah Jariyah and make it knowledge that benefits others.
            </p>
            <div className="mt-4 font-mono text-xs text-muted-foreground">
              #TechnicalSEO #SEO #KeywordResearch #Ecommerce #SaaS #SadaqahJariyah
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Amr Elbusaily
        </div>
      </footer>
    </div>
  );
}
