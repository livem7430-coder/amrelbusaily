import { createFileRoute } from "@tanstack/react-router";
import { ContentStrategyPage, contentStrategyHead } from "@/components/ContentStrategyPage";

export const Route = createFileRoute("/content-strategy")({
  head: () => contentStrategyHead("en"),
  component: EnglishContentStrategy,
});

function EnglishContentStrategy() {
  return <ContentStrategyPage lang="en" />;
}
