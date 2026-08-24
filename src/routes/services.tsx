import { createFileRoute, Outlet } from "@tanstack/react-router";
import { ServicesPage, servicesHead } from "@/components/ServicesPage";

export const Route = createFileRoute("/services")({
  component: ServicesLayout,
});

function ServicesLayout() {
  return <Outlet />;
}
