import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DonationPage() {
  const ChevronRightIcon = (props: React.ComponentProps<"svg">) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
      />
    </svg>
  );

  return (
    <>
      <Navbar />
      <div className="bg-gray-50/90">
        <div className="py-12 lg:py-20">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Support Environmental Charities
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Your donation can help protect our planet for future
                generations. Choose a charity below to make a difference.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-12 lg:py-20">
        <div className="mx-auto grid max-w-[900px] items-start gap-6 px-4 sm:gap-8 md:grid-cols-2 md:px-6 lg:max-w-5xl lg:gap-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">Clean Air Task Force</h2>
            <p className="text-gray-500 dark:text-gray-400">
              The Clean Air Task Force is a nonprofit environmental organization
              working to help safeguard against the worst impacts of climate
              change by finding and implementing solutions that reduce air
              pollution and heat-trapping emissions.
            </p>
            <Link
              className="inline-flex items-center underline text-blue-600 hover:text-blue-600/90 dark:hover:text-blue-300/90"
              href="#"
            >
              Learn more
              <ChevronRightIcon className="w-4 h-4 ml-1 inline-block" />
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">The Ocean Cleanup</h2>
            <p className="text-gray-500 dark:text-gray-400">
              The Ocean Cleanup is a non-profit organization developing advanced
              technologies to rid the world’s oceans of plastic. They aim to
              extract, prevent, and intercept plastic pollution by initiating
              the largest cleanup in history.
            </p>
            <Link
              className="inline-flex items-center underline text-blue-600 hover:text-blue-600/90 dark:hover:text-blue-300/90"
              href="#"
            >
              Learn more
              <ChevronRightIcon className="w-4 h-4 ml-1 inline-block" />
            </Link>
          </div>
        </div>
        <div className="mx-auto grid max-w-sm items-start gap-6 px-4 sm:max-w-4xl sm:grid-cols-2 sm:gap-12 md:max-w-5xl md:grid-cols-2 lg:max-w-5xl lg:grid-cols-2">
          <Card className="flex flex-col items-center p-6">
            <CardContent className="flex flex-col items-center gap-4">
              <img
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="75"
                src="/placeholder.svg"
                width="150"
              />
              <h3 className="text-xl font-bold">Clean Air Task Force</h3>
              <p className="text-sm text-center description-3-lines">
                The Clean Air Task Force is a nonprofit environmental
                organization working to help safeguard against the worst impacts
                of climate change by finding and implementing solutions that
                reduce air pollution and heat-trapping emissions.
              </p>
            </CardContent>
            <CardFooter className="flex w-full">
              <Link
                className="w-full inline-flex items-center justify-center h-10 rounded-b-md bg-gray-100 hover:bg-gray-100/90 dark:bg-gray-800 dark:hover:bg-gray-800/90"
                href="#"
              >
                Donate
              </Link>
            </CardFooter>
          </Card>
          <Card className="flex flex-col items-center p-6">
            <CardContent className="flex flex-col items-center gap-4">
              <img
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="75"
                src="/placeholder.svg"
                width="150"
              />
              <h3 className="text-xl font-bold">The Ocean Cleanup</h3>
              <p className="text-sm text-center description-3-lines">
                The Ocean Cleanup is a non-profit organization developing
                advanced technologies to rid the world’s oceans of plastic. They
                aim to extract, prevent, and intercept plastic pollution by
                initiating the largest cleanup in history.
              </p>
            </CardContent>
            <CardFooter className="flex w-full">
              <Link
                className="w-full inline-flex items-center justify-center h-10 rounded-b-md bg-gray-100 hover:bg-gray-100/90 dark:bg-gray-800 dark:hover:bg-gray-800/90"
                href="#"
              >
                Donate
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="bg-gray-900">
        <div className="container py-12 grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-100">
              Help us make a difference
            </h2>
            <p className="text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Your donation can help protect our planet for future generations.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
