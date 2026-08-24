import { INTERNATIONAL_ARTICLE_PLAN, INTERNATIONAL_ARTICLE_PLAN_CLUSTERS, INTERNATIONAL_ARTICLE_PLAN_SIZE } from "@/lib/international-article-plan";

const base = "https://amrelbusaily.vercel.app";

export function internationalContentPlanHead() {
  const title = "International SEO Content Plan for the US and Europe | Amr Elbusaily";
  const description = "A 65-article English content plan for International SEO, US SEO and European SEO, organized by market, intent, supporting keywords, FAQs and internal links.";
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${base}/blog/international-content-plan` },
      { property: "og:locale", content: "en_US" },
    ],
    links: [
      { rel: "canonical", href: `${base}/blog/international-content-plan` },
      { rel: "alternate", hrefLang: "en", href: `${base}/blog/international-content-plan` },
      { rel: "alternate", hrefLang: "x-default", href: `${base}/blog/international-content-plan` },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: title,
        description,
        url: `${base}/blog/international-content-plan`,
        inLanguage: "en",
        isPartOf: { "@type": "Blog", name: "Amr Elbusaily SEO Blog", url: `${base}/blog/en` },
      }),
    }],
  };
}

export function InternationalContentPlanPage() {
  return (
    <div className="min-h-screen" lang="en">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md"><div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"><a href="/" className="flex items-center gap-2 font-display font-semibold"><span className="grid h-8 w-8 place-items-center rounded-md bg-primary font-mono text-sm text-primary-foreground">AE</span><span>Amr Elbusaily</span></a><nav className="flex items-center gap-4 text-sm text-muted-foreground"><a href="/blog/en" className="hover:text-foreground">Articles</a><a href="/international-seo" className="hover:text-foreground">International SEO</a><a href="/ar/blog/content-plan" className="hover:text-foreground">AR</a></nav></div></header>
      <main>
        <section className="relative overflow-hidden border-b border-border"><div className="absolute inset-0 grid-bg" aria-hidden="true" /><div className="relative mx-auto max-w-6xl px-6 py-20 md:py-24"><div className="max-w-4xl"><div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">International editorial roadmap · EN</div><h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">A 65-article English plan for the US and Europe.</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">This plan turns international SEO into a sequence of useful pages: foundations first, then US and European playbooks, technical localization, content and demand, and finally measurement and delivery decisions.</p><div className="mt-8 flex flex-wrap gap-3"><a href="/international-seo" className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground glow-primary">Read the International SEO service</a><a href="/keyword-research" className="rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium hover:border-primary hover:text-primary">Keyword Research service</a></div></div><div className="mt-12 grid gap-4 sm:grid-cols-3"><Stat value={`${INTERNATIONAL_ARTICLE_PLAN_SIZE}`} label="planned English articles" /><Stat value={`${INTERNATIONAL_ARTICLE_PLAN_CLUSTERS.length}`} label="editorial clusters" /><Stat value="US + Europe" label="primary markets" /></div></div></section>
        <section className="mx-auto max-w-6xl px-6 py-16"><div className="max-w-3xl"><div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Strategy before volume</div><h2 className="mt-3 text-3xl font-semibold md:text-4xl">Why this plan is not 60 country pages.</h2><p className="mt-5 leading-8 text-muted-foreground">The English site acts as the general entry point for users in the United States and Europe. A country-specific article or page is planned only when the search intent, terminology, offer, examples or market context genuinely changes. The roadmap is designed to support useful content and service decisions, not to create near-duplicate pages by swapping a country name.</p></div><div className="mt-10 grid gap-5 md:grid-cols-3"><InfoCard title="Intent-led" text="Every topic has a defined informational, commercial investigation or transactional role." /><InfoCard title="Market-aware" text="US and European topics are separated where language, competition or customer context can change the answer." /><InfoCard title="Connected" text="Each article has suggested internal links to the service cluster instead of standing alone." /></div></section>
        <section className="border-y border-border bg-surface/30"><div className="mx-auto max-w-6xl px-6 py-16"><div className="max-w-3xl"><div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Publishing sequence</div><h2 className="mt-3 text-3xl font-semibold md:text-4xl">Six clusters, one coherent path.</h2><p className="mt-4 leading-8 text-muted-foreground">The first articles establish vocabulary and technical confidence. The market playbooks then answer US and European use cases. Technical localization protects the architecture, while content and operations connect search demand to qualified enquiries.</p></div><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-6">{INTERNATIONAL_ARTICLE_PLAN_CLUSTERS.map((cluster, index) => <div key={cluster} className="rounded-xl border border-border bg-surface p-5"><div className="font-mono text-xs text-primary">{String(index + 1).padStart(2, "0")}</div><div className="mt-3 font-semibold">{cluster}</div><div className="mt-2 text-sm text-muted-foreground">{INTERNATIONAL_ARTICLE_PLAN.filter((item) => item.cluster === cluster).length} articles</div></div>)}</div></div></section>
        <section className="mx-auto max-w-6xl px-6 py-16"><div className="mb-8 max-w-3xl"><div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">The editorial inventory</div><h2 className="mt-3 text-3xl font-semibold md:text-4xl">65 topics ready for briefs and review.</h2><p className="mt-4 leading-8 text-muted-foreground">The table defines the primary keyword, the article promise, supporting terms, two starter questions and the internal link destinations. It is an editorial plan, not automatically published content; each article still needs research, writing, editing and evidence review.</p></div><div className="overflow-x-auto rounded-2xl border border-border"><table className="min-w-[1180px] w-full border-collapse text-left"><thead className="bg-surface text-xs font-mono text-muted-foreground"><tr><th className="border-b border-border p-4">#</th><th className="border-b border-border p-4">Cluster</th><th className="border-b border-border p-4">Market</th><th className="border-b border-border p-4">Intent</th><th className="border-b border-border p-4">Primary keyword</th><th className="border-b border-border p-4">Working title</th><th className="border-b border-border p-4">Supporting terms</th><th className="border-b border-border p-4">Starter FAQs</th><th className="border-b border-border p-4">Internal links</th></tr></thead><tbody>{INTERNATIONAL_ARTICLE_PLAN.map((item, index) => <tr key={item.id} className="align-top odd:bg-surface/30"><td className="border-b border-border p-4 font-mono text-primary">{String(index + 1).padStart(2, "0")}</td><td className="border-b border-border p-4 font-semibold">{item.cluster}</td><td className="border-b border-border p-4 text-sm text-muted-foreground">{item.market}</td><td className="border-b border-border p-4 text-sm text-muted-foreground">{item.intent}</td><td className="border-b border-border p-4 font-mono text-sm">{item.primaryKeyword}</td><td className="border-b border-border p-4 font-medium">{item.title}</td><td className="border-b border-border p-4 text-sm text-muted-foreground">{item.supportingKeywords.join(" · ")}</td><td className="border-b border-border p-4 text-sm text-muted-foreground"><div>{item.faqs[0]}</div><div className="mt-2">{item.faqs[1]}</div></td><td className="border-b border-border p-4 text-sm text-primary">{item.internalLinks.slice(0, 4).join(" · ")}</td></tr>)}</tbody></table></div></section>
        <section className="border-t border-border"><div className="mx-auto max-w-6xl px-6 py-16"><div className="rounded-2xl border border-border bg-surface p-8 md:p-10"><h2 className="text-2xl font-semibold">How to publish this plan well</h2><p className="mt-4 max-w-4xl leading-8 text-muted-foreground">Write in batches of five to ten articles, brief each page before drafting, compare the actual US or European SERP when a market is named, and connect every article to a useful service or guide. Refresh the plan using Search Console evidence. Do not publish all 65 as thin pages at once, and do not promise rankings merely because a keyword appears in a title.</p><div className="mt-7 flex flex-wrap gap-4"><a href="/content-seo" className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">Content SEO service</a><a href="/seo-expert" className="rounded-md border border-border px-5 py-3 text-sm text-muted-foreground hover:border-primary hover:text-primary">SEO expert</a><a href="/blog/en" className="rounded-md border border-border px-5 py-3 text-sm text-muted-foreground hover:border-primary hover:text-primary">Published English articles</a></div></div></div></section>
      </main>
      <footer className="border-t border-border"><div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 px-6 py-8 text-sm text-muted-foreground"><span>© {new Date().getFullYear()} Amr Elbusaily</span><span>SEO · Digital Marketing · AI Growth · E-commerce</span></div></footer>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) { return <div className="rounded-xl border border-border bg-surface/70 p-5"><div className="font-mono text-2xl text-primary">{value}</div><div className="mt-2 text-sm text-muted-foreground">{label}</div></div>; }
function InfoCard({ title, text }: { title: string; text: string }) { return <div className="rounded-2xl border border-border bg-surface p-6"><h2 className="text-xl font-semibold">{title}</h2><p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p></div>; }
