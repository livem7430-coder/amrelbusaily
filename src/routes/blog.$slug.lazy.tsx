import { ArticleLayout } from "@/components/ArticleLayout";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/blog/$slug")({
  component: BlogPost,
});

function BlogPost() {
  const { post, article } = Route.useLoaderData();

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
      <div dangerouslySetInnerHTML={{ __html: article.html }} />
    </ArticleLayout>
  );
}
