import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/ar/services")({
  component: ArabicServicesLayout,
});

function ArabicServicesLayout() {
  return <Outlet />;
}
