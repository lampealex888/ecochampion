import { Button } from "@/components/ui/button";
import { SVGProps } from "react";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth";
import LogoutButton from "@/app/components/LogoutButton";
import Map from "@/app/ecolocator/Map"; 

export default async function Component() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center h-14 px-4 border-b lg:h-16 bg-gray-100/40 dark:bg-gray-800/40">
        <Link href="/">
          <Button className="mr-4 -top-1" size="icon" variant="ghost">
            <ChevronLeftIcon className="h-6 w-6" />
            <span className="sr-only">Go back</span>
          </Button>
        </Link>
        <h1 className="text-lg font-semibold">
          Find E-Waste Dropoff and Recycling Facilities Near You!
        </h1>
        {session ? (
          <div className="ml-auto">
            <LogoutButton />
          </div>
        ) : (
          <Button asChild className="ml-auto">
            <Link href="/auth">Login</Link>
          </Button>
        )}
      </header>
      <main>
        {/* Google Maps Embed */}
        <Map />
        {/* Facilities List */}
        <div className="w-1/3"></div>
      </main>
      <Footer />
    </div>
  );
}

function ChevronLeftIcon(
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}
