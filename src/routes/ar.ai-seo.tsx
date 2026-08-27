import { createFileRoute } from "@tanstack/react-router";
import { AiSeoHubPage, aiSeoHubHead } from "@/components/AiSeoHubPage";

export const Route = createFileRoute("/ar/ai-seo")({
  head: () => aiSeoHubHead(),
  component: AiSeoHubPage,
});
