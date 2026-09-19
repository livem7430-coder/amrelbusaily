import { createFileRoute } from "@tanstack/react-router";
import { GeoSeoMarketPage, geoMarketHead } from "@/components/GeoSeoMarketPage";

export const Route = createFileRoute("/ar/seo-expert-saudi")({
  head: () => geoMarketHead("ar", "saudi"),
  component: Page,
});

function Page() {
  return <GeoSeoMarketPage lang="ar" market="saudi" />;
}
