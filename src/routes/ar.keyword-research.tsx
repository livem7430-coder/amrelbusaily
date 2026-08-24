import { createFileRoute } from "@tanstack/react-router";
import { KeywordContentServicePage, keywordContentHead } from "@/components/KeywordContentServicePage";

export const Route = createFileRoute("/ar/keyword-research")({
  head: () => keywordContentHead("ar", "keyword"),
  component: ArabicKeywordResearch,
});

function ArabicKeywordResearch() {
  return <KeywordContentServicePage lang="ar" mode="keyword" />;
}
