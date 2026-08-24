import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage, servicesHead } from "@/components/ServicesPage";

export const Route = createFileRoute("/services")({
  head: ({ params }) => Object.keys(params).length > 0 ? {} : servicesHead("en"),
  component: EnglishServices,
});

function EnglishServices() {
  return <ServicesPage lang="en" />;
}
