import { createFileRoute } from "@tanstack/react-router";
import { SeoAuthorityPage, seoAuthorityHead } from "@/components/SeoAuthorityPage";

export const Route = createFileRoute("/seo-company")({
  head: () => seoAuthorityHead("en", "company"),
  component: EnglishSeoCompany,
});

function EnglishSeoCompany() {
  return <SeoAuthorityPage lang="en" mode="company" />;
}
