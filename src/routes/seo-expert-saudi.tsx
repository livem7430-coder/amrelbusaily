import { createFileRoute } from "@tanstack/react-router";
import { GeoSeoMarketPage, geoMarketHead } from "@/components/GeoSeoMarketPage";

export const Route = createFileRoute("/seo-expert-saudi")({
  head: () => geoMarketHead("en", "saudi"),
  component: Page,
});

function Page() {
  return <GeoSeoMarketPage lang="en" market="saudi" />;
}
