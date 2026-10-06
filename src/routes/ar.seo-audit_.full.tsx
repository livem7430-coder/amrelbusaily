import { createFileRoute } from "@tanstack/react-router";
import { SeoAuditFullPage, seoAuditFullHead } from "@/components/SeoAuditFullPage";

export const Route = createFileRoute("/ar/seo-audit_/full")({
  head: () => seoAuditFullHead("ar"),
  component: () => <SeoAuditFullPage lang="ar" />,
});
