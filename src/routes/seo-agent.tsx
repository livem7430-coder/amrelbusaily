import { createFileRoute } from "@tanstack/react-router";
import { SeoAgentPage, seoAgentHead } from "@/components/SeoAgentPage";

export const Route = createFileRoute("/seo-agent")({
  head: () => seoAgentHead("en"),
  component: () => <SeoAgentPage lang="en" />,
});
