import { useState } from 'react';
import Link from 'next/link';
import { SVGProps } from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/utils/auth';
import LogoutButton from '@/app/components/LogoutButton';
import { Button } from '@/components/ui/button';
import ThemeSwitch from '@/app/components/ThemeSwitch';
import HamburgerMenu from '@/app/components/HamburgerMenu';

export default async function MainNav() {
  const session = await getServerSession(authOptions);

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-start">
      <div className="flex-grow-0 md:hidden">
        <HamburgerMenu />
      </div>
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center hidden md:flex">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/ecosort"
        >
          EcoSort
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 align"
          href="/ecolocator"
        >
          EcoLocator
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/ecoexchange"
        >
          EcoExchange
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/ecodonate"
        >
          EcoDonate
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/ecoarticles"
        >
          EcoArticles
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/ecodashboard"
        >
          EcoDashboard
        </Link>
      </nav>
      <div className="flex-grow flex justify-end">
        <div style={{marginLeft:"20px", paddingTop:"12px"}}>
          <ThemeSwitch />
        </div>
        <div style={{marginLeft:"20px"}}>
          {session ? (
            <LogoutButton />
          ) : (
            <Button asChild>
              <Link href="/auth">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}