import { ArticleLayout } from "@/components/ArticleLayout";
import { use } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";

const articlesPromise = import("@/content/articles");

export const Route = createLazyFileRoute("/blog/$slug")({
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  const { articles } = use(articlesPromise);
  const Content = articles[post.slug];

  return (
    <ArticleLayout
      title={post.title}
      description={post.description}
      date={post.date}
      readTime={post.readTime}
      lang={post.lang}
      dir={post.lang === "ar" ? "rtl" : "ltr"}
      faq={post.faq}
    >
      <Content />
    </ArticleLayout>
  );
}
