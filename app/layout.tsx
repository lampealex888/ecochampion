import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import ModelProvider from "@/app/utils/ModelContext";
import { Providers } from './providers'

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "EcoChampion",
  description:
    "EcoChampion is a platform for sustainable living and environmental activism. Join us to make a difference!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen max-w-full bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers>
        <ModelProvider>
          {children}
          <Toaster />
        </ModelProvider>
        </Providers>
      </body>
    </html>
  );
}
