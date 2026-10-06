import { createFileRoute } from "@tanstack/react-router";
import { SeoAuditPage, seoAuditHead } from "@/components/SeoAuditPage";

export const Route = createFileRoute("/seo-audit")({
  head: () => seoAuditHead("en"),
  component: () => <SeoAuditPage lang="en" />,
});
