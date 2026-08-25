import { createFileRoute, notFound } from "@tanstack/react-router";
import { articleHead } from "@/components/ArticleLayout";
import { blogPosts } from "@/lib/blog-posts";
import { getArticleContent } from "@/lib/article-content.server";

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    const article = await getArticleContent({ data: params.slug });
    return { post, article };
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
});
