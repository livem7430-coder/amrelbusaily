import { createFileRoute, Link } from "@tanstack/react-router";
import amrPortrait from "@/assets/amr-portrait.jpg.asset.json";
import { Portrait } from "@/components/Portrait";

export const Route = createFileRoute("/ar/")({
  head: () => ({
    meta: [
      { title: "عمرو البصيلي — خبير SEO والتسويق الرقمي ونمو AI | القاهرة" },
      {
        name: "description",
        content:
          "عمرو البصيلي خبير SEO وتسويق رقمي ونمو بالذكاء الاصطناعي من القاهرة. 7 سنوات خبرة وأكثر من 50 مشروعًا في التجارة الإلكترونية وSaaS ومنتجات AI.",
      },
      { property: "og:title", content: "عمرو البصيلي — خبير SEO والتسويق الرقمي ونمو AI" },
      {
        property: "og:description",
        content:
          "خبير تسويق رقمي مصري: SEO، استراتيجية المحتوى، السيو المحلي والتقني، AI SEO، وتحسين نمو المتاجر الإلكترونية.",
      },
      { name: "keywords", content: "عمرو البصيلي، خبير SEO في مصر، تسويق رقمي، AI SEO، سيو تقني، سيو محلي، سيو المتاجر، استراتيجية محتوى، نمو التجارة الإلكترونية" },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "https://amrelbusaily.vercel.app/ar" },
      { property: "og:locale", content: "ar_EG" },
      { property: "og:image", content: `https://amrelbusaily.vercel.app${amrPortrait.url}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `https://amrelbusaily.vercel.app${amrPortrait.url}` },
    ],
    links: [
      { rel: "canonical", href: "https://amrelbusaily.vercel.app/ar" },
      { rel: "alternate", hrefLang: "ar", href: "https://amrelbusaily.vercel.app/ar" },
      { rel: "alternate", hrefLang: "en", href: "https://amrelbusaily.vercel.app/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "عمرو البصيلي",
          alternateName: "Amr Elbusaily",
          url: "https://amrelbusaily.vercel.app/ar",
          image: `https://amrelbusaily.vercel.app${amrPortrait.url}`,
          jobTitle: "خبير SEO وتسويق رقمي وAI Growth",
          address: { "@type": "PostalAddress", addressLocality: "القاهرة", addressCountry: "EG" },
          knowsAbout: [
            "تحسين محركات البحث",
            "السيو التقني",
            "سيو المتاجر الإلكترونية",
                          "التسويق بالمحتوى",
              "AEO وGEO",
              "AI SEO وتحسين البحث بالذكاء الاصطناعي",
              "الأتمتة التسويقية",

            "أتمتة n8n",
            "منتجات الذكاء الاصطناعي",
          ],
          worksFor: { "@type": "Organization", name: "Expand Pro" },
          sameAs: ["https://tansiky.com", "https://aldowly.com"],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          inLanguage: "ar",
          mainEntity: [
            {
              "@type": "Question",
              name: "مين هو عمرو البصيلي؟",
              acceptedAnswer: {
                "@type": "Answer",
                text: "عمرو البصيلي خبير SEO وتسويق رقمي من القاهرة، عنده 7 سنين خبرة وأكثر من 50 مشروع في التجارة الإلكترونية وSaaS ومنتجات الذكاء الاصطناعي والتعليم.",
              },
            },
            {
              "@type": "Question",
              name: "إيه الخدمات اللي بيقدمها عمرو البصيلي؟",
              acceptedAnswer: {
                "@type": "Answer",
                text: "سيو تقني ومحلي، بحث كلمات مفتاحية واستراتيجية محتوى، AI SEO وAEO/GEO، تحسين المتاجر الإلكترونية، وتحليلات وأتمتة تسويقية بـ n8n.",
              },
            },
            {
              "@type": "Question",
              name: "إزاي أتواصل مع عمرو البصيلي؟",
              acceptedAnswer: {
                "@type": "Answer",
                text: "تقدر تتواصل عبر إيميل amreelbasily@gmail.com أو واتساب لاستشارة سيو أو أوديت أو خطة نمو.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: HomeAr,
});

const metrics = [
  { value: "7", label: "سنوات خبرة سيو وتسويق رقمي" },
  { value: "+50", label: "مشروع سيو وتجارة إلكترونية" },
  { value: "45%", label: "زيادة في الترافيك العضوي" },
  { value: "35%", label: "نمو مبيعات المتاجر" },
];

const services = [
  {
    title: "استراتيجية واستشارات SEO",
    detail: "أوديت تقني، بحث كلمات، On-Page SEO، سيو محلي، واستراتيجية محتوى لتحويل الظهور في جوجل إلى زيارات وعملاء مؤهلين.",
  },
  {
    title: "التسويق الرقمي ونمو AI",
    detail: "AI SEO، AEO/GEO، تسويق المحتوى، أتمتة التسويق وأنظمة نمو رقمية تجذب طلبًا وعملاء مؤهلين.",
  },
  {
    title: "SEO ونمو التجارة الإلكترونية",
    detail: "تحسين هيكل المتجر وصفحات المنتجات والتحويل والتحليلات، مع استراتيجية SEO وتسويق رقمي للبراندات الأونلاين.",
  },
];

const experience = [
  {
    role: "قائد سيو ونمو — مشاريع رقمية وAI",
    org: "شغل مستقل ومع وكالات",
    place: "منتجات رقمية، ذكاء اصطناعي، أتمتة",
    period: "2026 — حتى الآن",
    points: [
      "قيادة استراتيجية السيو والنمو لعدد من المنتجات الرقمية ومنصات الذكاء الاصطناعي في SaaS والتعليم والتجارة الإلكترونية.",
      "بناء وتحسين workflows أتمتة على n8n بتربط بيانات السيو بالتقارير وعمليات التسويق.",
      "تنفيذ سيو من الألف للياء: أوديت تقني، استراتيجية كلمات، تحسين محتوى، وتقارير أداء.",
    ],
  },
  {
    role: "قائد السيو والمنتجات الرقمية",
    org: "Expand Pro",
    place: "منتجات رقمية ومنتجات AI وبرمجيات",
    period: "يناير 2025 — حتى الآن",
    points: [
      "قيادة سيو ونمو المنتجات الرقمية ومنتجات الذكاء الاصطناعي والبرمجيات.",
      "بناء استراتيجيات اكتساب عضوي لأدوات AI وإطلاقات SaaS من الكلمات للسيو التقني للمحتوى.",
    ],
  },
  {
    role: "استشاري وخبير SEO",
    org: "Aldowly.com",
    place: "تجارة إلكترونية لأجهزة الجيم",
    period: "2025 — حتى الآن",
    points: [
      "قيادة استراتيجية السيو لموقع aldowly.com لبيع أجهزة ومعدات الجيم.",
      "أوديت تقني، بحث كلمات، وتحسين صفحات المنتج لزيادة الظهور والمبيعات.",
    ],
  },
  {
    role: "مؤسس — Tansiky.com",
    org: "أعمال مستقلة",
    place: "مشاريع AI وقطاع تعليمي",
    period: "2025 — حتى الآن",
    points: [
      "إدارة مشاريع سيو ونمو من خلال مشروعي الخاص tansiky.com.",
      "تنفيذ SEO واستراتيجية محتوى وتسويق رقمي لمنتجات ذكاء اصطناعي ومنصات تعليمية متعددة.",
    ],
  },
  {
    role: "مؤسس وخبير SEO",
    org: "A2M Digital Marketing Agency",
    place: "القاهرة",
    period: "يناير 2022 — حتى الآن",
    points: [
      "تأسيس A2M المتخصصة في سيو التجارة الإلكترونية وتسويق المحتوى والنمو الرقمي عبر +50 مشروع.",
      "تحقيق زيادة تصل لـ 40% في الترافيك العضوي و35% نمو مبيعات في الفاشون والإلكترونيات والبيوتي.",
      "بناء أنظمة محتوى وSEO وتحسين تحويل رفعت الطلب المؤهل عبر قطاعات مختلفة.",
    ],
  },
  {
    role: "خبير SEO أول",
    org: "القاهرة",
    place: "",
    period: "يناير 2023 — حتى الآن",
    points: [
      "إدارة SEO ونمو رقمي لأكثر من 20 موقع رياضة وتجارة إلكترونية بزيادة 45% ترافيك عضوي في 8 شهور.",
    ],
  },
  {
    role: "متخصص SEO",
    org: "Expidia Digital",
    place: "القاهرة",
    period: "يناير 2020 — حتى الآن",
    points: [
      "قيادة استراتيجيات سيو لأكثر من 15 موقع بنمو 35% ترافيك عضوي وتحسين ترتيب كلمات تنافسية.",
    ],
  },
];

const projects = [
  { name: "متجر فاشون (A2M)", result: "+40% ترافيك · +35% مبيعات", detail: "تحسين SEO التقني والمحتوى والتحويل لبراند فاشون رائد." },
  { name: "متجر إلكترونيات (A2M)", result: "+30% مبيعات", detail: "تحسين بنية المتجر وصفحات المنتجات ومسارات التحويل العضوية." },
  { name: "متجر منتجات جمال (A2M)", result: "+25% مبيعات أونلاين", detail: "SEO واستراتيجية محتوى وتحسين تحويل حسّنوا العائد العضوي." },
  { name: "سيو محلي لمطعم", result: "+25% زيارات", detail: "تحسين الترتيب المحلي عبر Google My Business." },
  { name: "منصة رياضة إلكترونية", result: "+50% ترافيك", detail: "Structured data وتحسين للموبايل." },
];

const skills = [
  "استراتيجية واستشارات SEO",
  "بحث الكلمات المفتاحية",
  "On-Page & Off-Page SEO",
  "Programmatic & International SEO",
  "تسويق المحتوى والكتابة",
  "استراتيجية المحتوى والتخطيط التحريري",
  "AI SEO وتحسين البحث بالذكاء الاصطناعي",
  "عمليات المحتوى بالذكاء الاصطناعي واستراتيجية الـPrompts",
  "AEO وGEO",
  "استراتيجية التسويق الرقمي",
  "أتمتة التسويق وn8n",
  "CRM وتوليد العملاء المحتملين",
  "استراتيجية Email Marketing",
  "Digital PR وبناء الروابط",
  "تحليلات GA4 وSearch Console",
  "تقارير Looker Studio",
  "تحسين معدل التحويل",
  "سيو التجارة الإلكترونية",
  "نمو المتاجر الإلكترونية",
  "أوديت تقني",
  "بناء الروابط",
  "سيو محلي وموبايل",
  "Google Analytics",
  "Google Search Console",
  "Ahrefs",
  "SEMrush",
  "Screaming Frog",
  "أتمتة n8n",
];

function HomeAr() {
  return (
    <div className="min-h-screen" dir="rtl" lang="ar">
      <header className="sticky top-0 z-40 border-b border-border/60 backdrop-blur-md bg-background/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2 font-display font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground font-mono text-sm">
              AE
            </span>
            <span>عمرو البصيلي</span>
          </a>
          <nav className="hidden gap-7 text-sm text-muted-foreground md:flex">
            <a href="#work" className="hover:text-foreground">الأعمال</a>
            <a href="#services" className="hover:text-foreground">الخدمات</a>
            <a href="#experience" className="hover:text-foreground">الخبرة</a>
            <a href="#skills" className="hover:text-foreground">المهارات</a>
            <Link to="/blog" className="hover:text-foreground">المدونة</Link>
            <Link to="/ar/free-consultation" className="text-primary hover:opacity-80">استشارة مجانية</Link>
            <a href="#contact" className="hover:text-foreground">تواصل</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/" className="text-xs font-mono text-muted-foreground hover:text-foreground">EN</Link>
            <a
              href="mailto:amreelbasily@gmail.com"
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              تواصل معي
            </a>
          </div>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.4fr_1fr] md:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-mono text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              أبني نموًا عضويًا للعلامات الطموحة
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.2] md:text-5xl lg:text-6xl">
              <span className="text-gradient">حوّل البحث</span>
              <br />
              إلى نمو مستدام.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              أنا عمرو البصيلي، استشاري SEO ونمو رقمي من القاهرة. أساعد العلامات الطموحة على تحويل الظهور في محركات البحث،
              والمحتوى، والذكاء الاصطناعي إلى منظومة مستدامة لجذب الطلب والعملاء وزيادة الإيرادات. مؤسس A2M Digital Marketing Agency،
              بخبرة <span className="text-foreground">7 سنوات</span> وأكثر من <span className="text-foreground">50 مشروعًا</span> في التجارة الإلكترونية
              وSaaS والمنتجات الرقمية.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground glow-primary hover:opacity-90">
                ابدأ مشروعك
              </a>
              <a href="#work" className="rounded-md border border-border bg-surface px-5 py-3 text-sm text-foreground hover:bg-surface-2">
                شوف النتائج
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-primary/10 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-surface">
              <Portrait alt="عمرو البصيلي — خبير SEO من القاهرة" />
              <div className="grid grid-cols-2 divide-x divide-border border-t border-border font-mono text-xs">
                <div className="p-4">
                  <div className="text-muted-foreground">المكان</div>
                  <div className="mt-1 text-foreground">القاهرة، مصر</div>
                </div>
                <div className="p-4">
                  <div className="text-muted-foreground">التخصص</div>
                  <div className="mt-1 text-foreground">سيو · AI · متاجر</div>
                </div>
              </div>
            </div>
          </div>
        </div>

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

      <section id="services" className="border-t border-border bg-surface/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader eyebrow="الخدمات" title="شريك نمو واحد للسيو والمحتوى والذكاء الاصطناعي والمتاجر" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-xl border border-border bg-surface p-6 transition hover:border-primary/50">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.detail}</p>
                <a href="#contact" className="mt-5 inline-block text-sm text-primary hover:underline">ناقش مشروعك ←</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="border-t border-border bg-surface/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader eyebrow="مشاريع مميزة" title="حالات نجاح بأرقام حقيقية" />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {projects.map((p) => (
              <div key={p.name} className="rounded-xl border border-border bg-surface p-6 hover:border-primary/50">
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

      <section id="experience" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader eyebrow="تاريخ العمل" title="7 سنوات في السيو والتسويق الرقمي" />
          <div className="mt-10 space-y-4">
            {experience.map((e) => (
              <div key={e.role + e.org} className="grid gap-4 rounded-xl border border-border bg-surface p-6 md:grid-cols-[220px_1fr]">
                <div>
                  <div className="font-mono text-xs text-primary">{e.period}</div>
                  <div className="mt-2 font-display text-lg font-semibold">{e.role}</div>
                  <div className="text-sm text-muted-foreground">
                    {e.org}{e.place ? ` · ${e.place}` : ""}
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

      <section id="skills" className="border-t border-border bg-surface/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader eyebrow="المهارات والأدوات" title="عدة كاملة للسيو والتسويق الرقمي وAI" />
          <div className="mt-8 flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="rounded-md border border-border bg-surface px-3 py-2 font-mono text-xs">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="rounded-2xl border border-border bg-surface p-10 md:p-14">
            <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-primary">تواصل</div>
                <h2 className="mt-3 text-4xl font-semibold md:text-5xl">
                  مستعد تكبّر ترافيكك ومبيعاتك؟
                </h2>
                <p className="mt-4 max-w-lg text-muted-foreground">
                  سواء محتاج أوديت SEO تقني، استراتيجية محتوى وAI، أو خطة نمو لمتجرك — نرسم مع بعض أسرع طريق لزيارات مؤهلة ومبيعات مربحة.
                </p>
              </div>
              <div className="space-y-3">
                <ContactRow label="إيميل" value="amreelbasily@gmail.com" href="mailto:amreelbasily@gmail.com" />
                <ContactRow label="المكان" value="القاهرة، مصر" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} عمرو البصيلي — جميع الحقوق محفوظة.</div>
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

function ContactRow({ label, value, href }: { label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-center justify-between gap-4 rounded-lg border border-border bg-background px-4 py-3 hover:border-primary/50">
      <span className="font-mono text-xs uppercase text-muted-foreground">{label}</span>
      <span className="text-sm text-foreground">{value}</span>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}
