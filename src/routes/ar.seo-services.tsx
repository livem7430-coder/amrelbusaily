import { createFileRoute } from "@tanstack/react-router";
import { SeoAuthorityPage, seoAuthorityHead } from "@/components/SeoAuthorityPage";

export const Route = createFileRoute("/ar/seo-services")({
  head: () => seoAuthorityHead("ar", "services"),
  component: ArabicSeoServices,
});

function ArabicSeoServices() {
  return <SeoAuthorityPage lang="ar" mode="services" />;
}
