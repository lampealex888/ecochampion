import Link from "next/link";
import { SVGProps } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth";
import LogoutButton from "@/app/components/LogoutButton";
import { Button } from "@/components/ui/button";

export default async function MainNav() {
  const session = await getServerSession(authOptions);

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="/">
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="eco-sorter"
        >
          EcoSorter
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 align"
          href="#"
        >
          Lorem Ipsum
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Lorem Ipsum
        </Link>
        {session ? (
          <LogoutButton />
        ) : (
          <Button asChild>
            <Link href="/auth">Login</Link>
          </Button>
        )}
      </nav>
    </header>
  );
}

function MountainIcon(
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
