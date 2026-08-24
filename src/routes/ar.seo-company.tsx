import { createFileRoute } from "@tanstack/react-router";
import { SeoAuthorityPage, seoAuthorityHead } from "@/components/SeoAuthorityPage";

export const Route = createFileRoute("/ar/seo-company")({
  head: () => seoAuthorityHead("ar", "company"),
  component: ArabicSeoCompany,
});

function ArabicSeoCompany() {
  return <SeoAuthorityPage lang="ar" mode="company" />;
}
