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
import { db } from "../firebase"
import { getDocs, collection } from "firebase/firestore"

async function getKategorie() {
  const refKategorieCollection = collection(db, "HerstellerInKategorie");
  const data = await getDocs(refKategorieCollection);
  if(data.empty) {
    console.error("no categories found")
    return []
  }

  const filteredData = data.docs.map((doc) => ({
    Kategorie: doc.id,
    Hersteller: doc.data().Hersteller
  }));

  return filteredData
}

export default async function Navbar() {
  const pathname = usePathname()

  const kategorieList = await getKategorie();

  const getMarkenByKategorie = (kategorie: string) => {
    const category = kategorieList.find((item) => item.Kategorie === kategorie);
    const marken : string[] = category ? category.Hersteller : [];
    return marken.sort();
  };

  return(
    <NavigationMenu className="p-2 border-b-2 rounded-md">
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
              <Link href={"/Smartphone"} legacyBehavior passHref>
                <NavigationMenuLink>Alle Marken</NavigationMenuLink>
              </Link>
              {getMarkenByKategorie("Smartphone").map((marke) => (
                <Link href={`/Smartphone/${marke}`} legacyBehavior passHref key={marke}>
                  <NavigationMenuLink>{marke}</NavigationMenuLink>
                </Link>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Tablet</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <Link href={"/Tablet"} legacyBehavior passHref>
                <NavigationMenuLink>Alle Marken</NavigationMenuLink>
              </Link>
              {getMarkenByKategorie("Tablet").map((marke) => (
                <Link href={`/Tablet/${marke}`} legacyBehavior passHref key={marke}>
                  <NavigationMenuLink>{marke}</NavigationMenuLink>
                </Link>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="grow">
          <NavigationMenuTrigger>Laptop</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <Link href={"/Laptop"} legacyBehavior passHref>
                <NavigationMenuLink>Alle Marken</NavigationMenuLink>
              </Link>
              {getMarkenByKategorie("Laptop").map((marke) => (
                <Link href={`/Laptop/${marke}`} legacyBehavior passHref key={marke}>
                  <NavigationMenuLink>{marke}</NavigationMenuLink>
                </Link>
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
