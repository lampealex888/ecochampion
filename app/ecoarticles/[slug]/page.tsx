// app/articles/[slug]/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Header from "../../components/Header";
export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const article = await getArticle(slug);

  return (
    <>
      <Header text={article.title} />
      <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <article className="mx-auto max-w-4xl">
          <img src={article.image} alt={article.title} className="mb-8" />
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
            {article.title}
          </h1>
          <div className="flex items-center space-x-4 mb-8">
            <p className="text-gray-500 dark:text-gray-400">
              By {article.author}
            </p>
            <p className="text-gray-500 dark:text-gray-400">{article.date}</p>
          </div>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
        </article>
      </div>
    </>
  );
}

async function getArticle(slug: string) {
  const articlesDirectory = path.join(process.cwd(), "articles");
  const filePath = path.join(articlesDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    title: data.title,
    content: contentHtml,
    author: data.author,
    date: data.date.toString(),
    image: data.image,
  };
}
