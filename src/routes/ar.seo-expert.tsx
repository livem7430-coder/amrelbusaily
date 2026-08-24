import { createFileRoute } from "@tanstack/react-router";
import { SeoAuthorityPage, seoAuthorityHead } from "@/components/SeoAuthorityPage";

export const Route = createFileRoute("/ar/seo-expert")({
  head: () => seoAuthorityHead("ar", "expert"),
  component: ArabicSeoExpert,
});

function ArabicSeoExpert() {
  return <SeoAuthorityPage lang="ar" mode="expert" />;
}
