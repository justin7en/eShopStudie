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
import { useEffect, useState } from "react"
import { db } from "../firebase"
import { getDocs, collection } from "firebase/firestore"

interface NavbarList {
  Kategorie: string;
  Hersteller: string[];
}

export default function Navbar() {
  const pathname = usePathname()

  const [NavbarList, setNavbarList] = useState<NavbarList[]>([]);
  const refKategorieCollection = collection(db, "HerstellerInKategorie");
  useEffect( () => {
    const getNavbarList = async () => {
      try {
        const data = await getDocs(refKategorieCollection);
        const filteredData = data.docs.map((doc) => ({
          Kategorie: doc.id,
          Hersteller: doc.data().Hersteller
        }));
        setNavbarList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getNavbarList();
  }, []);

  const getMarkenByKategorie = (kategorie: string) => {
    const category = NavbarList.find((item) => item.Kategorie === kategorie);
    const marken = category ? category.Hersteller : [];
    return marken.sort();
  };

  return(
    <NavigationMenu className="p-2 border-b-2">
      <NavigationMenuList>
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
            <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {getMarkenByKategorie("Smartphone").map((marke) => (
                <NavigationMenuLink key={marke}>{marke}</NavigationMenuLink>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Tablet</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {getMarkenByKategorie("Tablet").map((marke) => (
                <NavigationMenuLink key={marke}>{marke}</NavigationMenuLink>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="grow">
          <NavigationMenuTrigger>Laptop</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {getMarkenByKategorie("Smartphone").map((marke) => (
                <NavigationMenuLink key={marke}>{marke}</NavigationMenuLink>
              ))}
            </div>
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
  )
}
