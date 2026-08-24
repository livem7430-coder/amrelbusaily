import { createFileRoute } from "@tanstack/react-router";
import { KeywordContentServicePage, keywordContentHead } from "@/components/KeywordContentServicePage";

export const Route = createFileRoute("/keyword-research")({
  head: () => keywordContentHead("en", "keyword"),
  component: EnglishKeywordResearch,
});

function EnglishKeywordResearch() {
  return <KeywordContentServicePage lang="en" mode="keyword" />;
}
