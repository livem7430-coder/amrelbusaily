import { createServerFn } from "@tanstack/react-start";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

export const getArticleContent = createServerFn({ method: "GET" })
  .validator((slug: string) => slug)
  .handler(async ({ data: slug }) => {
    const { articles } = await import("@/content/articles");
    const Content = articles[slug];

    if (!Content) {
      throw new Error("Article content not found");
    }

    return { html: renderToStaticMarkup(createElement(Content)) };
  });
