import { createFileRoute } from "@tanstack/react-router";
import { KeywordContentServicePage, keywordContentHead } from "@/components/KeywordContentServicePage";

export const Route = createFileRoute("/ar/content-seo")({
  head: () => keywordContentHead("ar", "content"),
  component: ArabicContentSeo,
});

function ArabicContentSeo() {
  return <KeywordContentServicePage lang="ar" mode="content" />;
}
