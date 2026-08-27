import { createFileRoute } from "@tanstack/react-router";
import { OffersPage, offersHead } from "@/components/OffersPage";

export const Route = createFileRoute("/ar/offers")({
  head: () => offersHead("ar"),
  component: () => <OffersPage lang="ar" />,
});
