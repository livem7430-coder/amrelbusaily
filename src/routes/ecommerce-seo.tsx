import { createFileRoute } from "@tanstack/react-router";
import { EcommerceSeoHubPage, ecommerceSeoHubHead } from "@/components/EcommerceSeoHubPage";

export const Route = createFileRoute("/ecommerce-seo")({
  head: () => ecommerceSeoHubHead("en"),
  component: () => <EcommerceSeoHubPage lang="en" />,
});
