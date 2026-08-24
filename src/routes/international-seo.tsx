import { createFileRoute } from "@tanstack/react-router";
import { InternationalSeoPage, internationalSeoHead } from "@/components/InternationalSeoPage";

export const Route = createFileRoute("/international-seo")({
  head: () => internationalSeoHead("en"),
  component: EnglishInternationalSeo,
});

function EnglishInternationalSeo() {
  return <InternationalSeoPage lang="en" />;
}
