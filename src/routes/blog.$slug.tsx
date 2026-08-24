import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArticleLayout, articleHead } from "@/components/ArticleLayout";
import { blogPosts } from "@/lib/blog-posts";
import { articles } from "@/content/articles";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post || !articles[params.slug]) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "غير موجود" }, { name: "robots", content: "noindex" }] };
    }
    return articleHead({
      title: loaderData.post.title,
      description: loaderData.post.description,
      slug: params.slug,
      lang: loaderData.post.lang,
      datePublished: loaderData.post.date,
      altSlug: loaderData.post.altSlug,
      faq: loaderData.post.faq,
    });
  },
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();
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
