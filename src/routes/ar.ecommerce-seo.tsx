import { createFileRoute } from "@tanstack/react-router";
import { EcommerceSeoHubPage, ecommerceSeoHubHead } from "@/components/EcommerceSeoHubPage";

export const Route = createFileRoute("/ar/ecommerce-seo")({
  head: () => ecommerceSeoHubHead("ar"),
  component: () => <EcommerceSeoHubPage lang="ar" />,
});
