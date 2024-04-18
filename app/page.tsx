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

import React, { useEffect } from 'react';
//import { exportEmailsToMailchimp } from '@/app/utils/mailchimp';


export default function Home() {

  // useEffect(() => {
  //   //export user emails to Mailchimp when the component mounts
  //   exportEmailsToMailchimp();
  // }, []);

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                The Eco-Friendly App
              </h1>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Making the world a greener place, one app at a time.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  className="max-w-lg flex-1"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button type="submit">Sign Up</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Sign up to get notified when we launch.
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Eco-Friendly Features
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We've built the app with the environment in mind, using
                sustainable practices and renewable energy.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 xl:gap-16">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Renewable Energy</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our servers are powered by wind and solar, reducing our carbon
                  footprint.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Sustainable Design</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We've optimized the app to be energy-efficient, using less
                  power on your devices.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Carbon Offsetting</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  For every download, we plant a tree, helping to offset
                  emissions.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Sustainable Design</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We've optimized the app to be energy-efficient, using less
                  power on your devices.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Carbon Offsetting</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  For every download, we plant a tree, helping to offset
                  emissions.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Renewable Energy</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our servers are powered by wind and solar, reducing our carbon
                  footprint.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-50 dark:bg-gray-950 py-12 md:py-24 lg:py-32">
          <div className="container py-6 space-y-6 md:space-y-0 md:grid md:grid-cols-[250px,1fr] lg:grid-cols-[300px,1fr] items-start gap-6 px-4 md:px-6">
            <nav className="space-y-2 text-sm">
              <Link
                className="font-medium text-gray-900 transition-colors hover:text-gray-900/80 dark:text-gray-50 dark:hover:text-gray-50/80"
                href="#"
              >
                Homepage
              </Link>
              <div className="space-y-1">
                <Link
                  className="flex items-center text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  Announcements
                  <ChevronRightIcon className="w-4 h-4 ml-auto" />
                </Link>
                <Link
                  className="flex items-center text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  Product Updates
                  <ChevronRightIcon className="w-4 h-4 ml-auto" />
                </Link>
                <Link
                  className="flex items-center text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  Engineering
                  <ChevronRightIcon className="w-4 h-4 ml-auto" />
                </Link>
              </div>
              <Link
                className="font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                About Us
              </Link>
              <Link
                className="font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                Contact
              </Link>
            </nav>
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
        <section className="w-full py-6 py-12 md:py-24 lg:py-32">
          <div className="container grid gap-6 px-4 md:px-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                Got a question? We've got answers. If you have some other
                questions, see our support center.
              </p>
            </div>
            <div className="space-y-4">
              <Collapsible className="border-t border-dashed last:border-none">
                <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 text-left">
                  What's the difference between a personal and a business
                  account?
                  <ChevronDownIcon className="w-4 h-4 ml-auto transition-transform" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 py-2 text-sm">
                  Personal accounts are designed for individual use, while
                  business accounts are tailored for teams and organizations.
                  With a business account, you can collaborate with your team
                  members, manage permissions, and access additional features
                  designed for productivity and workflow management.
                </CollapsibleContent>
              </Collapsible>
              <Collapsible className="border-t border-dashed last:border-none">
                <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 text-left">
                  How do I reset my password?
                  <ChevronDownIcon className="w-4 h-4 ml-auto transition-transform" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 py-2 text-sm">
                  You can reset your password by clicking on the "Forgot
                  password" link on the login page. You will receive an email
                  with instructions on how to reset your password. Follow the
                  link in the email and enter a new password for your account.
                </CollapsibleContent>
              </Collapsible>
              <Collapsible className="border-t border-dashed last:border-none">
                <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 text-left">
                  Can I upgrade my plan at any time?
                  <ChevronDownIcon className="w-4 h-4 ml-auto transition-transform" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 py-2 text-sm">
                  Yes, you can upgrade your plan at any time. Simply go to the
                  billing section of your account and choose the plan you would
                  like to upgrade to. Your new plan will take effect
                  immediately, and you will be billed the prorated amount for
                  the remainder of your billing cycle.
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Contact Us
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Have a question about our app? Want to learn more about our
                eco-friendly practices? Reach out to our team.
              </p>
            </div>
            <form className="mx-auto max-w-[400px] grid gap-4">
              <Input placeholder="Enter your email" type="email" />
              <Input placeholder="Subject" type="text" />
              <Textarea className="min-h-[150px]" placeholder="Your Message" />
              <Button className="w-full" type="submit">
                Contact Us
              </Button>
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
