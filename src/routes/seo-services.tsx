import { createFileRoute } from "@tanstack/react-router";
import { SeoAuthorityPage, seoAuthorityHead } from "@/components/SeoAuthorityPage";

export const Route = createFileRoute("/seo-services")({
  head: () => seoAuthorityHead("en", "services"),
  component: EnglishSeoServices,
});

function EnglishSeoServices() {
  return <SeoAuthorityPage lang="en" mode="services" />;
}
