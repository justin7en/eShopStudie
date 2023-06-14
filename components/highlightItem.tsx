"use client"

import Image from "next/image"
import Iphone from "../public/IphonePrototyp.png"
import { useEffect, useState } from "react"
import { db } from "../firebase"
import { getDocs, collection, query, where } from "firebase/firestore"

function HighlightItem() {
  return (
    <div className="flex bg-gray-500 p-2 rounded-sm h-64 ">
      <div className="grow">
        <h1 className="font-bold text-lg">Iphone</h1>
        <p>Dieses Iphone ist neu</p>
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
  const [highlightList, setHighlightList] = useState([]);

  const refArtikelCollection = collection(db, "Artikel");
  const filteredCollection = query(refArtikelCollection, where("Highlight", "==", true))

  useEffect( () => {
    const getHighlightList = async () => {
      try {
        const data = await getDocs(filteredCollection);
        const filteredData = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
        console.log(filteredData)
      } catch (err) {
        console.error(err);
      }
    };
    getHighlightList();
  });
  return (
    <div className="p-2 space-y-2 overflow-y-auto">
      <HighlightItem />
      <HighlightItem />
      <HighlightItem />
      <HighlightItem />
      <HighlightItem />
      <HighlightItem />
      <HighlightItem />
    </div>
  )
}