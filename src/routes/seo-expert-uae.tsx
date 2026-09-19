import { createFileRoute } from "@tanstack/react-router";
import { GeoSeoMarketPage, geoMarketHead } from "@/components/GeoSeoMarketPage";

export const Route = createFileRoute("/seo-expert-uae")({
  head: () => geoMarketHead("en", "uae"),
  component: Page,
});

function Page() {
  return <GeoSeoMarketPage lang="en" market="uae" />;
}
