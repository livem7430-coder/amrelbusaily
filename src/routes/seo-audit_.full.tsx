import { createFileRoute } from "@tanstack/react-router";
import { SeoAuditFullPage, seoAuditFullHead } from "@/components/SeoAuditFullPage";

export const Route = createFileRoute("/seo-audit_/full")({
  head: () => seoAuditFullHead("en"),
  component: () => <SeoAuditFullPage lang="en" />,
});
