import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { SVGProps } from "react";

export default function FeedbackPage() {
  return (
    <main>
      <Header text="Provide us with feedback!"/>
      <section className="bg-gray-50/90">
        <div className="py-12 lg:py-20">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We appreciate any and all feedback on the developement of the app, new features, charities to put on our donation page, or other things we can do to further our application.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container py-12 lg:py-20">
        <div className="flex flex-col min-h-screen">
        <iframe
              width="640px"
              height="480px"
              src="https://forms.office.com/Pages/ResponsePage.aspx?id=ifT5nqDg606HzDpSYRL9Da7dfrPbaUxHvfvyEDAclV9UOUgyUU04Qk9HRFlLMDNFNTFURVgzNTdLWC4u&embed=true"
              frameBorder="0"
              marginWidth="0"
              marginHeight="0"
              style={{ border: "none", maxWidth: "100%", maxHeight: "100vh" }}
              allowFullScreen
              webkitAllowFullScreen
              mozAllowFullScreen
              msAllowFullScreen
            ></iframe>
         
          
        </div>
        
      </section>
      
      <Footer />
    </main>
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