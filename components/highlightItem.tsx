"use client"

import Image from "next/image"
import Iphone from "../public/IphonePrototyp.png"
import { useEffect, useState } from "react"
import { db } from "../firebase"
import { getDocs, collection, query, where } from "firebase/firestore"

interface HighlightItem {
  id: string;
  Hersteller: string;
  Kategorie: string;
  Name: string;
  Beschreibung: string;
  Highlight: boolean;
}


function HighlightItem( { item }: { item: HighlightItem } ) {
  return (
    <div className="flex bg-gray-500 p-2 rounded-sm h-64 ">
      <div className="grow">
        <h1 className="font-bold text-lg">{item.Name}</h1>
        <p>{item.Beschreibung}</p>
      </div>
      <Image 
      src={Iphone}
      alt="Iphone"
      style={{objectFit: "contain"}}
      className="w-auto"
      />
    </div>
  )
}

export default function HighlightItemList() {
  const [highlightList, setHighlightList] = useState<HighlightItem[]>([]);

  const refArtikelCollection = collection(db, "Artikel");
  const filteredCollection = query(refArtikelCollection, where("Highlight", "==", true))

  useEffect( () => {
    const getHighlightList = async () => {
      try {
        const data = await getDocs(filteredCollection);
        const filteredData = data.docs.map((doc) => ({
          id: doc.id,
          Hersteller: doc.data().Hersteller,
          Kategorie: doc.data().Kategorie,
          Name: doc.data().Name,
          Beschreibung: doc.data().Beschreibung,
          Highlight: doc.data().Highlight,
        }));
        setHighlightList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getHighlightList();
  }, []);
  return (
    <div className="p-2 space-y-2 overflow-y-auto">
      {highlightList.map((item) => (
        <HighlightItem key={item.id} item={item}/>
      ))}
    </div>
  )
}