import { createFileRoute, Link } from "@tanstack/react-router";
import amrPortrait from "@/assets/amr-portrait.jpg.asset.json";
import { Portrait } from "@/components/Portrait";
import { ResultsShowcase } from "@/components/ResultsShowcase";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amr Elbusaily — SEO, Digital Marketing & AI Growth | Cairo" },
      {
        name: "description",
        content:
          "Amr Elbusaily is an SEO, digital marketing and growth marketing specialist in Cairo. He helps service companies and B2B teams grow qualified demand through technical SEO, content, funnels, CRM, automation, e-commerce SEO and AI search optimization.",
      },
      { property: "og:title", content: "Amr Elbusaily — SEO, Digital Marketing & AI Growth" },
      {
        property: "og:description",
        content:
          "SEO strategy, growth marketing, B2B demand generation, content, AI search optimization and e-commerce growth for brands that want qualified traffic, leads and sales.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "https://amrelbusaily.vercel.app/" },
      { property: "og:image", content: `https://amrelbusaily.vercel.app${amrPortrait.url}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Amr Elbusaily — SEO, Digital Marketing & AI Growth" },
      { name: "twitter:description", content: "SEO, growth marketing, B2B demand generation and AI growth for more qualified traffic, leads and sales." },
      { name: "twitter:image", content: `https://amrelbusaily.vercel.app${amrPortrait.url}` },
    ],
    links: [
      { rel: "canonical", href: "https://amrelbusaily.vercel.app/" },
      { rel: "alternate", hrefLang: "en", href: "https://amrelbusaily.vercel.app/" },
      { rel: "alternate", hrefLang: "ar", href: "https://amrelbusaily.vercel.app/ar" },
      { rel: "alternate", hrefLang: "x-default", href: "https://amrelbusaily.vercel.app/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Amr Elbusaily",
          url: "https://amrelbusaily.vercel.app/",
          image: `https://amrelbusaily.vercel.app${amrPortrait.url}`,
          jobTitle: "SEO & Digital Marketing Specialist",
          address: { "@type": "PostalAddress", addressLocality: "Cairo", addressCountry: "EG" },
          knowsAbout: [
            "Search Engine Optimization",
            "Technical SEO",
            "E-commerce SEO",
            "Content Marketing",
            "AEO & GEO",
            "AI SEO & Search Optimization",
            "Marketing Automation",
            "n8n Automation",
            "AI Product Growth",
            "Growth Marketing",
            "B2B Demand Generation",
            "Service Business Growth",
            "Funnel Strategy and Lifecycle Marketing",
            "CRM and Lead Qualification",
            "Customer Acquisition Cost and Lifetime Value",
          ],
          worksFor: { "@type": "Organization", name: "Expand Pro" },
          alumniOf: [
            { "@type": "CollegeOrUniversity", name: "Cairo University" },
            { "@type": "CollegeOrUniversity", name: "Zagazig University" },
          ],
          sameAs: ["https://tansiky.com", "https://aldowly.com"],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Who is Amr Elbusaily?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Amr Elbusaily is an SEO and digital marketing specialist based in Cairo, Egypt, with 7 years of experience and 50+ projects across e-commerce, SaaS, AI and education.",
              },
            },
            {
              "@type": "Question",
              name: "What services does Amr Elbusaily offer?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Technical SEO audits, on-page SEO, content marketing, Growth Marketing, B2B demand generation, e-commerce SEO, AI search optimization, conversion optimization and n8n marketing automation.",
              },
            },
            {
              "@type": "Question",
              name: "How can I contact Amr Elbusaily?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You can reach Amr Elbusaily through the contact section on amrelbusaily.vercel.app for SEO consulting, audits, and growth engagements.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: Home,
});


const metrics = [
  { value: "7", label: "Years in SEO & digital marketing" },
  { value: "50+", label: "SEO & e-commerce projects" },
  { value: "45%", label: "Organic traffic uplift" },
    { value: "35%", label: "E-commerce sales growth" },
];

const services = [
  {
    title: "SEO Strategy & Consulting",
    detail: "Technical audits, keyword research, on-page SEO, local SEO and content systems that turn search visibility into qualified demand.",
  },
  {
    title: "Digital Marketing & AI Growth",
    detail: "AI search optimization, AEO/GEO, content marketing, marketing automation and digital growth systems for qualified demand.",
  },
  {
    title: "E-commerce SEO & Growth",
    detail: "Store architecture, product-page SEO, conversion optimization, analytics and digital marketing strategy for online brands.",
  },
  {
    title: "Growth Marketing for Services & B2B",
    detail: "Demand generation, funnel strategy, CRM, lifecycle email, lead qualification and sales-aligned content for service companies and B2B teams.",
  },
];

const experience = [
  {
    role: "SEO & Growth Lead — Digital & AI Projects",
    org: "Independent & agency engagements",
    place: "Digital products, AI & automation",
    period: "2026 — Present",
    points: [
      "Leading SEO and growth strategy for multiple digital products and AI-powered platforms across SaaS, education, and e-commerce.",
      "Building and optimizing n8n automation workflows that connect SEO data, reporting, and marketing operations.",
      "Delivering end-to-end organic growth: technical audits, keyword strategy, content optimization, and performance reporting.",
    ],
  },
  {
    role: "SEO & Digital Products Lead",
    org: "Expand Pro",
    place: "Digital products, AI products & software",
    period: "Jan 2025 — Present",
    points: [
      "Leading SEO and growth for digital products, AI-powered products, and software offerings.",
      "Building organic acquisition strategies for AI tools and SaaS launches, from keyword strategy to technical SEO and content.",
      "Aligning product, content, and paid channels to scale qualified traffic and activation.",
    ],
  },
  {
    role: "SEO Consultant & Expert",
    org: "Aldowly.com",
    place: "Fitness & gym equipment e-commerce",
    period: "2025 — Present",
    points: [
      "Leading SEO strategy for aldowly.com, an e-commerce platform selling gym equipment and fitness products.",
      "Conducting technical SEO audits, keyword research, and on-page optimization to improve search visibility.",
      "Advising on site architecture, product page optimization, and content strategy to drive organic traffic and sales.",
    ],
  },
  {
    role: "Founder — Tansiky.com",
    org: "Independent client work",
    place: "AI & education sector projects",
    period: "2025 — Present",
    points: [
      "Running independent SEO and growth engagements through my own project, tansiky.com.",
      "Delivering SEO, content strategy and digital marketing for multiple AI-focused products and education-sector platforms.",
      "Owning strategy end-to-end: audits, keyword research, on-page, technical SEO, and campaign management.",
    ],
  },
  {
    role: "Founder & SEO Specialist",
    org: "A2M Digital Marketing Agency",
    place: "Cairo",
    period: "Jan 2022 — Present",
    points: [
      "Founded and led A2M, focused on e-commerce SEO, content marketing and digital growth across 50+ projects.",
      "Delivered up to 40% increase in organic traffic and 35% growth in sales for clients in fashion, electronics, and beauty.",
      "Built content, SEO and conversion systems that improved qualified demand across sectors.",
      "Ran full SEO audits, link-building, and technical SEO to improve site performance and search visibility.",
    ],
  },
  {
    role: "Senior SEO Specialist",
    org: "Cairo",
    place: "",
    period: "Jan 2023 — Present",
    points: [
      "Managed SEO and digital growth for 20+ sports and e-commerce websites, driving a 45% increase in organic traffic within 8 months.",
      "Optimized e-commerce platforms with technical SEO, content and conversion improvements to boost organic sales.",
    ],
  },
  {
    role: "SEO Specialist",
    org: "Expidia Digital",
    place: "Cairo",
    period: "Jan 2020 — Present",
    points: [
      "Led SEO strategies for 15+ client websites, achieving 35% growth in organic traffic and improved rankings for competitive keywords.",
      "Enhanced content, keyword research, and technical SEO audits — improving engagement and visibility.",
    ],
  },
  {
    role: "Freelancer SEO Specialist",
    org: "Clouds Team",
    place: "",
    period: "Jan 2019 — Present",
    points: [
      "Ran SEO and digital marketing for 10+ international clients, achieving 30% traffic growth through content and technical optimizations.",
      "Built local SEO strategies that improved client visibility in local searches and drove more leads and sales.",
    ],
  },
  {
    role: "Freelance",
    org: "Personal projects",
    place: "",
    period: "Jan 2017 — Present",
    points: [
      "Managed personal websites and niche projects, driving first-page rankings for multiple keywords and 25% traffic growth.",
    ],
  },
];

const projects = [
  {
    name: "Fashion E-Commerce (A2M)",
    result: "+40% traffic · +35% sales",
    detail: "Technical SEO, content optimization and conversion improvements for a leading fashion brand.",
  },
  {
    name: "Tech E-Commerce (A2M)",
    result: "+30% sales",
    detail: "Optimized product architecture, product pages and organic conversion paths.",
  },
  {
    name: "Beauty Products E-Commerce (A2M)",
    result: "+25% online sales",
    detail: "SEO, content and conversion optimization that improved overall organic ROI.",
  },
  {
    name: "Local Restaurant SEO",
    result: "+25% foot traffic",
    detail: "Improved local rankings via Google My Business and local SEO.",
  },
  {
    name: "Sports E-Commerce Platform",
    result: "+50% traffic",
    detail: "Structured data implementation and mobile SEO optimization.",
  },
];

const skills = [
  "SEO Strategy & Consulting",
  "SEO Keyword Research & Strategy",
  "On-Page & Off-Page SEO",
  "Programmatic & International SEO",
  "Content Marketing & Copywriting",
  "Content Strategy & Editorial Planning",
  "AI SEO & Search Optimization",
  "AI Content Operations & Prompt Strategy",
  "AEO & GEO",
  "Digital Marketing Strategy",
  "Growth Marketing",
  "B2B Demand Generation",
  "Service Business Growth",
  "Funnel Strategy & Lifecycle Marketing",
  "CRM & Lead Qualification",
  "CAC & LTV Analysis",
  "Marketing Automation & n8n",
  "CRM & Lead Generation",
  "Email Marketing Strategy",
  "Digital PR & Link Building",
  "Analytics, GA4 & Search Console",
  "Looker Studio Reporting",
  "Conversion Rate Optimization",
  "E-commerce SEO",
  "E-commerce Growth",
  "Technical SEO Audits",
  "Link Building & Outreach",
  "Local & Mobile SEO",
  "Google Analytics",
  "Google Search Console",
  "Ahrefs",
  "SEMrush",
  "Moz",
  "Screaming Frog",
  "Digital Marketing",
];

const courses = [
  { name: "SEO Fundamentals", org: "Coursera", period: "2020 — 2021" },
  { name: "Digital Marketing Specialization", org: "University of Illinois", period: "2021" },
  { name: "AI for Digital Marketing", org: "Udemy", period: "2022" },
  { name: "Social Media Marketing", org: "Hootsuite Academy", period: "2023 — 2024" },
];

function Home() {
  return (
    <div className="min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground">Skip to content</a>
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-border/60 backdrop-blur-md bg-background/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2 font-display font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground font-mono text-sm">
              AE
            </span>
            <span>Amr Elbusaily</span>
          </a>
          <nav className="hidden gap-7 text-sm text-muted-foreground md:flex">
            <a href="#work" className="hover:text-foreground">Work</a>
            <a href="#services" className="hover:text-foreground">Services</a>
            <a href="#experience" className="hover:text-foreground">Experience</a>
            <a href="#skills" className="hover:text-foreground">Skills</a>
            <Link to="/blog" className="hover:text-foreground">Blog</Link>
            <Link to="/course" className="hover:text-foreground">SEO Course</Link>
            <Link to="/seo-geo-eli5" className="hover:text-foreground">SEO + GEO ELI5</Link>
            <Link to="/free-consultation" className="text-primary hover:opacity-80">Free consultation</Link>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/ar" className="text-xs font-mono text-muted-foreground hover:text-foreground">AR</Link>
            <a
              href="mailto:amreelbasily@gmail.com"
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Hire me
            </a>
          </div>
        </div>
      </header>
      <div className="border-b border-border/60 bg-background/95 px-6 py-3 md:hidden">
        <nav aria-label="Quick navigation" className="mx-auto flex max-w-6xl gap-2 overflow-x-auto pb-1 text-xs text-muted-foreground">
          <a href="#services" className="shrink-0 rounded-full border border-border px-3 py-2 hover:border-primary hover:text-primary">Services</a>
          <a href="#results" className="shrink-0 rounded-full border border-border px-3 py-2 hover:border-primary hover:text-primary">Results</a>
          <Link to="/blog" className="shrink-0 rounded-full border border-border px-3 py-2 hover:border-primary hover:text-primary">Blog</Link>
          <Link to="/course" className="shrink-0 rounded-full border border-border px-3 py-2 hover:border-primary hover:text-primary">Course</Link>
          <Link to="/free-consultation" className="shrink-0 rounded-full bg-primary px-3 py-2 font-medium text-primary-foreground">Start a project</Link>
        </nav>
      </div>
      <main id="main-content">
      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.4fr_1fr] md:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-mono text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Building organic growth for ambitious brands
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] md:text-5xl lg:text-6xl">
              <span className="text-gradient">Turn search into</span>
              <br />
              sustainable growth.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              I'm Amr Elbusaily, an SEO and digital growth strategist in Cairo. I help ambitious brands turn search visibility,
              content and AI into a reliable engine for qualified demand and revenue. Founder of A2M Digital Marketing Agency,
              with <span className="text-foreground">7 years</span> of experience across <span className="text-foreground">50+ projects</span>{" "}
              in e-commerce, SaaS and digital products.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground glow-primary transition hover:opacity-90"
              >
                Start a project
              </a>
              <a
                href="#results"
                className="rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium text-foreground transition hover:bg-surface-2"
              >
                See results
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-primary/10 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-surface">
              <Portrait alt="Amr Elbusaily, SEO Specialist based in Cairo" />
              <div className="grid grid-cols-2 divide-x divide-border border-t border-border font-mono text-xs">
                <div className="p-4">
                  <div className="text-muted-foreground">Location</div>
                  <div className="mt-1 text-foreground">Cairo, Egypt</div>
                </div>
                <div className="p-4">
                  <div className="text-muted-foreground">Focus</div>
                  <div className="mt-1 text-foreground">SEO · AI · E-com</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* METRICS */}
        <div className="relative mx-auto max-w-6xl px-6 pb-20">
          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label} className="bg-surface p-6">
                <div className="font-display text-4xl font-semibold text-primary">{m.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-t border-border bg-surface/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
            <SectionHeader eyebrow="Services" title="One growth partner for search, content, AI & e-commerce" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="rounded-xl border border-border bg-surface p-6 transition hover:border-primary/50">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.detail}</p>
                {service.title === "Growth Marketing for Services & B2B" ? (
                  <Link to="/growth-marketing" className="mt-5 inline-block text-sm text-primary hover:underline">Explore the service →</Link>
                ) : (
                  <a href="#contact" className="mt-5 inline-block text-sm text-primary hover:underline">Discuss your project →</a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEARN & GROW */}
      <section id="learn" className="border-t border-border bg-surface/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader eyebrow="Learn & grow" title="Choose the next step that fits your intent" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <Link to="/course" className="group rounded-2xl border border-border bg-surface p-6 transition hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-[0_12px_40px_rgba(94,242,135,0.08)]">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Structured learning</div>
              <h3 className="mt-3 text-xl font-semibold group-hover:text-primary">SEO Course</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">Learn SEO from foundations to professional delivery through a bilingual 500-lesson roadmap.</p>
              <span className="mt-5 inline-block text-sm text-primary">Open the course →</span>
            </Link>
            <Link to="/blog" className="group rounded-2xl border border-border bg-surface p-6 transition hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-[0_12px_40px_rgba(94,242,135,0.08)]">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Search by topic</div>
              <h3 className="mt-3 text-xl font-semibold group-hover:text-primary">SEO content hub</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">Find practical guides by technical SEO, local search, e-commerce, AI SEO, AEO/GEO, and growth.</p>
              <span className="mt-5 inline-block text-sm text-primary">Explore the articles →</span>
            </Link>
            <Link to="/free-consultation" className="group rounded-2xl border border-primary/40 bg-primary/10 p-6 transition hover:-translate-y-0.5 hover:border-primary hover:shadow-[0_12px_40px_rgba(94,242,135,0.12)]">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Ready to act</div>
              <h3 className="mt-3 text-xl font-semibold group-hover:text-primary">SEO audit & strategy</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">Move from general advice to a prioritized plan for your website, store, or digital product.</p>
              <span className="mt-5 inline-block text-sm text-primary">Request a review →</span>
            </Link>
          </div>
        </div>
      </section>

      <ResultsShowcase lang="en" />

      {/* WORK */}
      <section id="work" className="border-t border-border bg-surface/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader eyebrow="Notable projects" title="Case studies with real numbers" />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {projects.map((p) => (
              <div
                key={p.name}
                className="group rounded-xl border border-border bg-surface p-6 transition hover:border-primary/50"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <span className="rounded-full bg-primary/15 px-3 py-1 font-mono text-xs text-primary">
                    {p.result}
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader eyebrow="Employment history" title="7 years shipping SEO & digital marketing" />
          <div className="mt-10 space-y-4">
            {experience.map((e) => (
              <div
                key={e.role + e.org}
                className="grid gap-4 rounded-xl border border-border bg-surface p-6 md:grid-cols-[220px_1fr]"
              >
                <div>
                  <div className="font-mono text-xs text-primary">{e.period}</div>
                  <div className="mt-2 font-display text-lg font-semibold">{e.role}</div>
                  <div className="text-sm text-muted-foreground">
                    {e.org}
                    {e.place ? ` · ${e.place}` : ""}
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS + EDUCATION */}
      <section id="skills" className="border-t border-border bg-surface/30">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.3fr_1fr]">
          <div>
              <SectionHeader eyebrow="Skills & tools" title="A full SEO, digital marketing & AI growth toolkit" />
            <div className="mt-8 flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-border bg-surface px-3 py-2 font-mono text-xs text-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <SectionHeader eyebrow="Education & courses" title="Continuously learning" />
            <div className="mt-8 space-y-3">
              <EduItem
                title="Diploma in Marketing"
                sub="Cairo University · 2019 — 2020"
              />
              <EduItem
                title="Bachelor's in Commerce"
                sub="Zagazig University · 2013 — 2017"
              />
              {courses.map((c) => (
                <EduItem key={c.name} title={c.name} sub={`${c.org} · ${c.period}`} />
              ))}
            </div>
            <div className="mt-8 rounded-xl border border-border bg-surface p-5">
              <div className="text-xs font-mono uppercase text-muted-foreground">Languages</div>
              <div className="mt-3 flex flex-wrap gap-2 text-sm">
                <Lang name="English" level="Native" />
                <Lang name="Arabic" level="Native" />
                <Lang name="French" level="A2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="rounded-2xl border border-border bg-surface p-10 md:p-14">
            <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-primary">
                  Let's talk
                </div>
                <h2 className="mt-3 text-4xl font-semibold md:text-5xl">
                  Ready to grow your organic traffic & sales?
                </h2>
                <p className="mt-4 max-w-lg text-muted-foreground">
                  Whether you need a technical SEO audit, a content and AI search plan, or an e-commerce growth strategy — let's map the fastest path to qualified traffic and profitable sales.
                </p>
              </div>
              <div className="space-y-3">
                <ContactRow label="Email" value="amreelbasily@gmail.com" href="mailto:amreelbasily@gmail.com" />
                <ContactRow label="Location" value="Cairo, Egypt" />
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} Amr Elbusaily. All rights reserved.</div>
          <div className="font-mono text-xs">SEO · Digital Marketing · AI Growth · E-commerce · Cairo</div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-2xl">
      <div className="font-mono text-xs uppercase tracking-widest text-primary">{eyebrow}</div>
      <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{title}</h2>
    </div>
  );
}

function EduItem({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="rounded-lg border border-border bg-surface p-4">
      <div className="font-medium text-foreground">{title}</div>
      <div className="mt-1 text-xs text-muted-foreground">{sub}</div>
    </div>
  );
}

function Lang({ name, level }: { name: string; level: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-1.5">
      <span className="text-foreground">{name}</span>
      <span className="font-mono text-xs text-muted-foreground">{level}</span>
    </span>
  );
}

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center justify-between gap-4 rounded-lg border border-border bg-background px-4 py-3 transition hover:border-primary/50">
      <span className="font-mono text-xs uppercase text-muted-foreground">{label}</span>
      <span className="text-sm text-foreground">{value}</span>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}
