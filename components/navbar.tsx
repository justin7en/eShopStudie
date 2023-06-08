"use client"

import Link from "next/link"
import Image from "next/image"
import Logo from "../public/Logo-Cloud.png"
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

export default function Navbar() {
  return(
    <NavigationMenu className="p-2 border-b-2">
      <NavigationMenuList>
        <NavigationMenuItem className="grow">
          <Link href={"/"}>
            <Image
              src={Logo}
              alt="Logo zur Startseite"
              style={{objectFit: "contain"}}
              className="w-1/12 pl-2"
            />
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="pr-12">
          <Link href={"/"} legacyBehavior passHref>
            <NavigationMenuLink className="">
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Smartphone</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Apple</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Tablet</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Apple</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="grow">
          <NavigationMenuTrigger>Laptop</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Apple</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="pr-4">
          <Link href={"/about"} legacyBehavior passHref>
            <NavigationMenuLink className="">
              Über Uns
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
