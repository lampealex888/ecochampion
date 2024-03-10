/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
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
      </main>
    </div>
  );
}
