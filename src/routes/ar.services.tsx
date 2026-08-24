import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage, servicesHead } from "@/components/ServicesPage";

export const Route = createFileRoute("/ar/services")({
  head: ({ params }) => Object.keys(params).length > 0 ? {} : servicesHead("ar"),
  component: ArabicServices,
});

function ArabicServices() {
  return <ServicesPage lang="ar" />;
}
