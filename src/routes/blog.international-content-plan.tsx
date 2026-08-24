import { createFileRoute } from "@tanstack/react-router";
import { InternationalContentPlanPage, internationalContentPlanHead } from "@/components/InternationalContentPlanPage";

export const Route = createFileRoute("/blog/international-content-plan")({
  head: () => internationalContentPlanHead(),
  component: InternationalContentPlanPage,
});
