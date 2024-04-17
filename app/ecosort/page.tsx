import { Button } from "@/components/ui/button";
import { SVGProps } from "react";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth";
import LogoutButton from "@/app/components/LogoutButton";
import Camera from "./Camera";
import Image from "next/image";

export default async function Component() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col min-h-screen">
      <Header text="Capture and Classify Recyclable Materials"/>
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <Camera />
      </main>
      {/* <div className="grid w-full gap-4 p-4">
        <div className="grid gap-1">
          <h2 className="text-lg font-semibold">Classification Result</h2>
          <p className="text-sm">
            The captured item has been classified as{" "}
            <span className="font-semibold">Organic Waste</span>.
            {"\n                  "}
          </p>
        </div>
        <div className="grid gap-1">
          <h2 className="text-lg font-semibold">History</h2>
          <div className="flex items-center gap-4">
            <Image
              alt="Captured image"
              className="aspect-square rounded-md object-cover"
              height="64"
              src="/placeholder.svg"
              width="64"
            />
            <Button className="ml-auto" size="sm">
              Recyclable
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <Image
              alt="Captured image"
              className="aspect-square rounded-md object-cover"
              height="64"
              src="/placeholder.svg"
              width="64"
            />
            <Button className="ml-auto" size="sm">
              Trash
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <Image
              alt="Captured image"
              className="aspect-square rounded-md object-cover"
              height="64"
              src="/placeholder.svg"
              width="64"
            />
            <Button className="ml-auto" size="sm">
              Organic
            </Button>
          </div>
        </div>
      </div> */}
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
