import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServiceDetailPage, serviceDetailHead } from "@/components/ServiceDetailPage";
import { getServiceDetail } from "@/lib/service-details";

export const Route = createFileRoute("/ar/services/$slug")({
  loader: ({ params }) => {
    const service = getServiceDetail(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => loaderData ? serviceDetailHead(loaderData.service, "ar") : { meta: [{ title: "الخدمة غير موجودة" }, { name: "robots", content: "noindex" }] },
  component: ArabicServiceDetail,
});

function ArabicServiceDetail() {
  const { service } = Route.useLoaderData();
  return <ServiceDetailPage service={service} lang="ar" />;
}
