import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage, servicesHead } from "@/components/ServicesPage";

export const Route = createFileRoute("/ar/services")({
  head: ({ matches }) => matches.some((match) => String(match.routeId) === "/$slug") ? {} : servicesHead("ar"),
  component: ArabicServices,
});

function ArabicServices() {
  return <ServicesPage lang="ar" />;
}
