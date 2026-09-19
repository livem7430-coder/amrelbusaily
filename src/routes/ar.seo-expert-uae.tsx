import { createFileRoute } from "@tanstack/react-router";
import { GeoSeoMarketPage, geoMarketHead } from "@/components/GeoSeoMarketPage";

export const Route = createFileRoute("/ar/seo-expert-uae")({
  head: () => geoMarketHead("ar", "uae"),
  component: Page,
});

function Page() {
  return <GeoSeoMarketPage lang="ar" market="uae" />;
}
