import { createFileRoute } from "@tanstack/react-router";
import { BlogLanguageHub, blogLanguageHead } from "@/components/BlogLanguageHub";

export const Route = createFileRoute("/blog/ar")({
  head: () => blogLanguageHead("ar"),
  component: ArabicBlogHub,
});

function ArabicBlogHub() {
  return <BlogLanguageHub lang="ar" />;
}
