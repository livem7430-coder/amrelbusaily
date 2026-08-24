import { createFileRoute } from "@tanstack/react-router";
import { InternationalSeoPage, internationalSeoHead } from "@/components/InternationalSeoPage";

export const Route = createFileRoute("/ar/international-seo")({
  head: () => internationalSeoHead("ar"),
  component: ArabicInternationalSeo,
});

function ArabicInternationalSeo() {
  return <InternationalSeoPage lang="ar" />;
}
