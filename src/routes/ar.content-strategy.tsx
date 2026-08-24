import { createFileRoute } from "@tanstack/react-router";
import { ContentStrategyPage, contentStrategyHead } from "@/components/ContentStrategyPage";

export const Route = createFileRoute("/ar/content-strategy")({
  head: () => contentStrategyHead("ar"),
  component: ArabicContentStrategy,
});

function ArabicContentStrategy() {
  return <ContentStrategyPage lang="ar" />;
}
