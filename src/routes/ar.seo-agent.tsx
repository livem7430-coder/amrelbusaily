import { createFileRoute } from "@tanstack/react-router";
import { SeoAgentPage, seoAgentHead } from "@/components/SeoAgentPage";

export const Route = createFileRoute("/ar/seo-agent")({
  head: () => seoAgentHead("ar"),
  component: () => <SeoAgentPage lang="ar" />,
});
