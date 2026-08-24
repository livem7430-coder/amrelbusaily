import { createFileRoute } from "@tanstack/react-router";
import { SeoAuthorityPage, seoAuthorityHead } from "@/components/SeoAuthorityPage";

export const Route = createFileRoute("/seo-expert")({
  head: () => seoAuthorityHead("en", "expert"),
  component: EnglishSeoExpert,
});

function EnglishSeoExpert() {
  return <SeoAuthorityPage lang="en" mode="expert" />;
}
