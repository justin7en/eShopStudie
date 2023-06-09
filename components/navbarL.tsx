"use client"

import Link from "next/link"
import Image from "next/image"
import Logo from "../public/Logo-Cloud.png"
import { usePathname } from 'next/navigation'
import { 
  navigationMenuTriggerStyle,
  navigationMenuActiveStyle,
 } from "./ui/navigation-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "./ui/navigation-menu"

type NavbarLProps = {
  content: React.ReactNode;
};

export default function NavbarL( { content }: NavbarLProps ) {
  const pathname = usePathname()

  return(
    <div className="flex h-screen">
    <NavigationMenu className="p-2 border-b-2">
      <NavigationMenuList className="flex flex-col">
        <NavigationMenuItem className="grow pl-2">
          <Link href={"/"}>
            <Image
              src={Logo}
              alt="Logo zur Startseite"
              width={50}
              height={50}
              style={{objectFit: "contain"}}
            />
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={"/"} legacyBehavior passHref>
            <NavigationMenuLink className={pathname === "/" ? navigationMenuActiveStyle() : navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Smartphone</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <NavigationMenuLink>Apple</NavigationMenuLink>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Tablet</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <NavigationMenuLink>Samsung</NavigationMenuLink>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="grow">
          <NavigationMenuTrigger>Laptop</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <li>
                <NavigationMenuLink>Lenovo</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink>Samsung</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink>Dell</NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="pr-4">
          <Link href={"/about"} legacyBehavior passHref>
            <NavigationMenuLink className={pathname === "/about" ? navigationMenuActiveStyle() : navigationMenuTriggerStyle()}>
              Über Uns
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    <div className="flex">
      {content}
    </div>
    </div>
  )
}
