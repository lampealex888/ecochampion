import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { Button } from "@/components/ui/button";
import { SVGProps } from "react";
import LogoutButton from "@/app/components/LogoutButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth";

interface HeaderProps {
  text: string;
}

export default async function Header({ text }: HeaderProps) {
  const session = await getServerSession(authOptions);

  return (
    <header className="flex items-center h-14 px-4 border-b lg:h-16 bg-gray-100/40 dark:bg-gray-800/40">
        <Link href="/">
          <Button className="mr-4 -top-1" size="icon" variant="ghost">
            <ChevronLeftIcon className="h-6 w-6" />
            <span className="sr-only">Go back</span>
          </Button>
        </Link>
        <h1 className="text-xs sm:text-sm md:text-md lg:text-lg font-semibold">
          { text }
        </h1>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <div style={{paddingTop:"12px"}}>
            <ThemeSwitch />
          </div>
          {session ? ( <div> <LogoutButton /> </div> ) : (
            <Button asChild>
              <Link href="/auth">Login</Link>
            </Button>
          )}
        </nav>
      </header>
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