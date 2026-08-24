import { createFileRoute } from "@tanstack/react-router";
import { Eli5SeoGeoPage, eli5SeoGeoHead } from "@/components/Eli5SeoGeoPage";

export const Route = createFileRoute("/seo-geo-eli5")({
  head: () => eli5SeoGeoHead("en"),
  component: EnglishEli5SeoGeo,
});

function EnglishEli5SeoGeo() {
  return <Eli5SeoGeoPage lang="en" />;
}
