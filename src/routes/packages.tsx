import { createFileRoute } from "@tanstack/react-router";
import { PackagesPage, packagesHead } from "@/components/PackagesPage";

export const Route = createFileRoute("/packages")({
  head: () => packagesHead("en"),
  component: () => <PackagesPage lang="en" />,
});
