import { createFileRoute } from "@tanstack/react-router";
import { PackagesPage, packagesHead } from "@/components/PackagesPage";

export const Route = createFileRoute("/ar/packages")({
  head: () => packagesHead("ar"),
  component: () => <PackagesPage lang="ar" />,
});
