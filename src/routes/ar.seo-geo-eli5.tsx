import { createFileRoute } from "@tanstack/react-router";
import { Eli5SeoGeoPage, eli5SeoGeoHead } from "@/components/Eli5SeoGeoPage";

export const Route = createFileRoute("/ar/seo-geo-eli5")({
  head: () => eli5SeoGeoHead("ar"),
  component: ArabicEli5SeoGeo,
});

function ArabicEli5SeoGeo() {
  return <Eli5SeoGeoPage lang="ar" />;
}
