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

export default function Home() {
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
            <div className="mx-auto w-full max-w-sm space-y-2">
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container py-6 space-y-6 md:space-y-0 items-start gap-6 px-4 md:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <div className="group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  alt="Thumbnail"
                  className="aspect-[1.6] object-cover"
                  height="250"
                  src="/placeholder.svg"
                  width="400"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold leading-none">
                    Introducing the New Platform
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-3 dark:text-gray-400">
                    We're excited to announce the launch of our new platform. It
                    brings a host of...
                  </p>
                </div>
                <div className="p-6 flex items-end">
                  <Button
                    className="rounded-none border-t w-full transition-colors group-hover:bg-gray-100 dark:group-hover:bg-gray-800"
                    variant="ghost"
                  >
                    Read More
                  </Button>
                </div>
              </div>
              <div className="group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  alt="Thumbnail"
                  className="aspect-[1.6] object-cover"
                  height="250"
                  src="/placeholder.svg"
                  width="400"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold leading-none">
                    The Future of Collaboration
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-3 dark:text-gray-400">
                    Our team has been hard at work creating a new way for teams
                    to collaborate...
                  </p>
                </div>
                <div className="p-6 flex items-end">
                  <Button
                    className="rounded-none border-t w-full transition-colors group-hover:bg-gray-100 dark:group-hover:bg-gray-800"
                    variant="ghost"
                  >
                    Read More
                  </Button>
                </div>
              </div>
              <div className="group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  alt="Thumbnail"
                  className="aspect-[1.6] object-cover"
                  height="250"
                  src="/placeholder.svg"
                  width="400"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold leading-none">
                    Innovating for the Future
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-3 dark:text-gray-400">
                    Learn about the latest innovations that are shaping the
                    future of our...
                  </p>
                </div>
                <div className="p-6 flex items-end">
                  <Button
                    className="rounded-none border-t w-full transition-colors group-hover:bg-gray-100 dark:group-hover:bg-gray-800"
                    variant="ghost"
                  >
                    Read More
                  </Button>
                </div>
              </div>
              <div className="group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  alt="Thumbnail"
                  className="aspect-[1.6] object-cover"
                  height="250"
                  src="/placeholder.svg"
                  width="400"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold leading-none">
                    The Art of Automation
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-3 dark:text-gray-400">
                    Discover how automation is revolutionizing the way we work
                    and unlocking...
                  </p>
                </div>
                <div className="p-6 flex items-end">
                  <Button
                    className="rounded-none border-t w-full transition-colors group-hover:bg-gray-100 dark:group-hover:bg-gray-800"
                    variant="ghost"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Contact Us
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Have a question about our app? Have some feedback about what we can improve? Reach out to our team!
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