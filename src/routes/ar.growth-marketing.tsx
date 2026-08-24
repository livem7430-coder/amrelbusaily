import { createFileRoute } from "@tanstack/react-router";
import { GrowthMarketingPage, growthMarketingHead } from "@/components/GrowthMarketingPage";

export const Route = createFileRoute("/ar/growth-marketing")({
  head: () => growthMarketingHead("ar"),
  component: ArabicGrowthMarketing,
});

function ArabicGrowthMarketing() {
  return <GrowthMarketingPage lang="ar" />;
}
