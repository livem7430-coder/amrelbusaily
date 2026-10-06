import { createFileRoute } from "@tanstack/react-router";
import { SeoSuitePage, seoSuiteHead } from "@/components/SeoSuitePage";

export const Route = createFileRoute("/seo-suite")({
  head: () => seoSuiteHead("en"),
  component: () => <SeoSuitePage lang="en" />,
});
