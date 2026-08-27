import { createFileRoute } from "@tanstack/react-router";
import { OffersPage, offersHead } from "@/components/OffersPage";

export const Route = createFileRoute("/offers")({
  head: () => offersHead("en"),
  component: () => <OffersPage lang="en" />,
});
