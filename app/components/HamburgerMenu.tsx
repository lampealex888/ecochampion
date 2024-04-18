"use client";
import { useState } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function HamburgerMenu() {

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
          <NavigationMenuContent>
            <Link href="/ecosort" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>EcoSort</NavigationMenuLink>
            </Link>
            <Link href="/ecolocator" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>EcoLocator</NavigationMenuLink>
            </Link>
            <Link href="/ecoexchange" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>EcoExchange</NavigationMenuLink>
            </Link>
            <Link href="/ecodonate" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>EcoDonate</NavigationMenuLink>
            </Link>
            <Link href="/ecodashboard" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>EcoDashboard</NavigationMenuLink>
            </Link>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
