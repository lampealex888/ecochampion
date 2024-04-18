import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Items",
};

export default function ItemLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>{children}</div>
      <Toaster />
    </>
  );
}