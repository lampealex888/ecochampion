import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { SVGProps } from "react";

export default function FeedbackPage() {
  return (
    <main className="dark:bg-gray-800">
      <Header text="Provide us with feedback!" />
      <section className="bg-gray-50/90 dark:bg-gray-700">
        <div className="py-12 lg:py-20">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tighter text-gray-900 dark:text-white sm:text-4xl md:text-5xl"></h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We appreciate any and all feedback on the development of the
                app, new features, charities to put on our donation page, or
                other things we can do to further our application.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container py-12 lg:py-20">
        <div className="flex flex-col min-h-screen">
          <iframe
            width="100%"
            height="480px"
            src="https://forms.office.com/Pages/ResponsePage.aspx?id=ifT5nqDg606HzDpSYRL9Da7dfrPbaUxHvfvyEDAclV9UOUgyUU04Qk9HRFlLMDNFNTFURVgzNTdLWC4u&embed=true"
            frameBorder="0"
            style={{ border: "none", maxWidth: "100%", maxHeight: "100vh" }}
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <Footer />
    </main>
  );
}
