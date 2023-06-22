"use client"

import Link from "next/link"
import Image from "next/image"
import Logo from "../public/Logo-Cloud.png"
import { 
  navigationMenuTriggerStyle,
  navigationMenuActiveStyle,
 } from "./ui/navigation-menu-vertical"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "./ui/navigation-menu-vertical"
import { db } from "../firebase"
import { getDoc, doc, collection } from "firebase/firestore"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

async function getKategorie(kategorie : string) {
  const refKategorieCollection = collection(db, "HerstellerInKategorie");
  const data = await getDoc(doc(refKategorieCollection, kategorie));

  if(!data.exists()) {
    console.error("no categories found")
    return []
  }

  const filteredData = {
    hersteller: data.data().Hersteller
  }

  return filteredData.hersteller
}


export default function NavbarL( ) {
  const [smartphoneData, setSmartphoneData] = useState<string[]>([]);
  const [tabletData, setTabletData] = useState<string[]>([]);
  const [laptopData, setLaptopData] = useState<string[]>([]);

  useEffect(() => {
    async function fetchData() {
      const smartphoneHersteller = await getKategorie("Smartphone");
      const tabletHersteller = await getKategorie("Tablet");
      const laptopHersteller = await getKategorie("Laptop");

      setSmartphoneData(smartphoneHersteller);
      setTabletData(tabletHersteller);
      setLaptopData(laptopHersteller);
    }

    fetchData();
  }, []);


  const pathname = usePathname();

  return(
    <NavigationMenu className="flex border-r-2 rounded-md" orientation="vertical">
      <NavigationMenuList className="flex flex-col h-screen space-y-2">
        <NavigationMenuItem className="flex-grow pt-2">
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
          <NavigationMenuTrigger className={pathname.startsWith("/Smartphone") ? navigationMenuActiveStyle() : navigationMenuTriggerStyle()}>Smartphone</NavigationMenuTrigger>
          <NavigationMenuContent className="h-screen flex flex-col justify-center space-y-4 p-4">
            <Link href={"/Smartphone"} legacyBehavior passHref>
              <NavigationMenuLink>Alle Marken</NavigationMenuLink>
            </Link>
            {smartphoneData.map((marke) => (
              <Link href={`/Smartphone/${marke}`} legacyBehavior passHref key={marke}>
                <NavigationMenuLink>{marke}</NavigationMenuLink>
              </Link>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={pathname.startsWith("/Tablet") ? navigationMenuActiveStyle() : navigationMenuTriggerStyle()}>Tablet</NavigationMenuTrigger>
          <NavigationMenuContent className="h-screen flex flex-col justify-center space-y-4 p-4">
            <Link href={"/Tablet"} legacyBehavior passHref>
              <NavigationMenuLink>Alle Marken</NavigationMenuLink>
            </Link> 
            {tabletData.map((marke) => (
              <Link href={`/Tablet/${marke}`} legacyBehavior passHref key={marke}>
                <NavigationMenuLink>{marke}</NavigationMenuLink>
              </Link>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="flex-grow">
          <NavigationMenuTrigger className={pathname.startsWith("/Laptop") ? navigationMenuActiveStyle() : navigationMenuTriggerStyle()}>Laptop</NavigationMenuTrigger>
          <NavigationMenuContent className="h-screen flex flex-col justify-center space-y-4 p-4">
            <Link href={"/Laptop"} legacyBehavior passHref>
              <NavigationMenuLink>Alle Marken</NavigationMenuLink>
            </Link>
            {laptopData.map((marke) => (
              <Link href={`/Laptop/${marke}`} legacyBehavior passHref key={marke}>
                <NavigationMenuLink>{marke}</NavigationMenuLink>
              </Link>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="pb-4">
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
