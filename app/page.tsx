/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  CollapsibleTrigger,
  CollapsibleContent,
  Collapsible,
} from "@/components/ui/collapsible";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { JSX, SVGProps } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function Home() {
  const articles = getArticles();

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Welcome to EcoChampion!
              </h1>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Building green habits and greener thumbs
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2"></div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Eco-Friendly Features
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We've built the app with the environment in mind, providing
                features to promote sustainable practices and eco-friendly
                living.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 xl:gap-16">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Personalized Tips</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Get personalized tips based on your location and preferences
                  to help you live more sustainably.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Interactive Challenges</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Engage in interactive challenges designed to promote better
                  recycling practices and eco-friendly habits.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Educational Articles</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Access a wealth of educational articles on recycling,
                  sustainability, and environmental conservation.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Local Recycling Events</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Stay informed about local recycling events, workshops, and
                  community clean-up initiatives in your area.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Resource Sharing Platform</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Share and exchange resources, including an exchange for
                  reusing items, with the EcoChampion community.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">
                  Recycling Category Classifier
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Easily classify recyclable items and learn about proper
                  recycling methods using our built-in classifier.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-50 dark:bg-gray-950 py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="space-y-3 text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Educational Articles
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Please enjoy our collection of educational articles on
                recycling, sustainability, and environmental conservation.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {articles.map((article) => (
                <div
                  key={article.slug}
                  className="group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <img
                      alt={article.slug}
                      className="aspect-[1.6] object-cover"
                      height="250"
                      src={article.image}
                      width="400"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold leading-none">
                        {article.title}
                      </h3>
                      <p className="text-sm text-gray-500 line-clamp-3 dark:text-gray-400">
                        {article.author} - {article.date}
                      </p>
                    </div>
                  </div>
                  <div className="p-6 flex items-end">
                    <Link href={`/ecoarticles/${article.slug}`}>
                      <Button
                        className="rounded-none border-t w-full transition-colors group-hover:bg-gray-100 dark:group-hover:bg-gray-800"
                        variant="ghost"
                      >
                        Read More
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Contact Us
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Have a question about our app? Have some feedback about what we
                can improve? Reach out to our team!
              </p>
            </div>
            <form className="mx-auto max-w-[400px] grid gap-4">
              <Link href="/ecofeedback">
                <Button className="w-full" type="submit">
                  Contact Us
                </Button>
              </Link>
            </form>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}

function ChevronRightIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function ChevronDownIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function getArticles() {
  const articlesDirectory = path.join(process.cwd(), "articles");
  const fileNames = fs.readdirSync(articlesDirectory);

  const articles = fileNames.map((fileName) => {
    const filePath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      title: data.title,
      slug: fileName.replace(".md", ""),
      author: data.author,
      date: data.date.toDateString(),
      image: data.image,
    };
  });

  return articles;
}
