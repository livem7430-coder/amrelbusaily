import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServiceDetailPage, serviceDetailHead } from "@/components/ServiceDetailPage";
import { getServiceDetail } from "@/lib/service-details";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getServiceDetail(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => loaderData ? serviceDetailHead(loaderData.service, "en") : { meta: [{ title: "Service not found" }, { name: "robots", content: "noindex" }] },
  component: EnglishServiceDetail,
});

function EnglishServiceDetail() {
  const { service } = Route.useLoaderData();
  return <ServiceDetailPage service={service} lang="en" />;
}
