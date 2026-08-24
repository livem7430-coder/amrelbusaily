import { createFileRoute } from "@tanstack/react-router";
import { BlogLanguageHub, blogLanguageHead } from "@/components/BlogLanguageHub";

export const Route = createFileRoute("/blog/en")({
  head: () => blogLanguageHead("en"),
  component: EnglishBlogHub,
});

function EnglishBlogHub() {
  return <BlogLanguageHub lang="en" />;
}
