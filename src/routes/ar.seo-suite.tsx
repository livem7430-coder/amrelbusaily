import { createFileRoute } from "@tanstack/react-router";
import { SeoSuitePage, seoSuiteHead } from "@/components/SeoSuitePage";

export const Route = createFileRoute("/ar/seo-suite")({
  head: () => seoSuiteHead("ar"),
  component: () => <SeoSuitePage lang="ar" />,
});
