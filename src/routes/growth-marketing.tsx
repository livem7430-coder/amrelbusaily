import { createFileRoute } from "@tanstack/react-router";
import { GrowthMarketingPage, growthMarketingHead } from "@/components/GrowthMarketingPage";

export const Route = createFileRoute("/growth-marketing")({
  head: () => growthMarketingHead("en"),
  component: EnglishGrowthMarketing,
});

function EnglishGrowthMarketing() {
  return <GrowthMarketingPage lang="en" />;
}
