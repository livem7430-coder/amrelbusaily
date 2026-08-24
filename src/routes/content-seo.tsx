import { createFileRoute } from "@tanstack/react-router";
import { KeywordContentServicePage, keywordContentHead } from "@/components/KeywordContentServicePage";

export const Route = createFileRoute("/content-seo")({
  head: () => keywordContentHead("en", "content"),
  component: EnglishContentSeo,
});

function EnglishContentSeo() {
  return <KeywordContentServicePage lang="en" mode="content" />;
}
