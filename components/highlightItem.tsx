import Image from "next/image"
import { db } from "../firebase"
import { getDocs, collection, query, where } from "firebase/firestore"
import { getImageUrl } from "./artikelView";

interface HighlightItem {
  id: string;
  Hersteller: string;
  Kategorie: string;
  Name: string;
  Beschreibung: string;
  Highlight: boolean;
  Preis: number;
}

async function getHighlightItems() {
  const refArtikelCollection = collection(db, "Artikel");
  const filteredCollection = query(refArtikelCollection, where("Highlight", "==", true))
  const data = await getDocs(filteredCollection);

  if (data.empty) {
    console.error("no highlight items")
    return []
  }

  const filteredData = data.docs.map((doc) => ({
    id: doc.id,
    Hersteller: doc.data().Hersteller,
    Kategorie: doc.data().Kategorie,
    Name: doc.data().Name,
    Beschreibung: doc.data().Beschreibung,
    Highlight: doc.data().Highlight,
    Preis: doc.data().Preis,
  }));

  return filteredData
}

async function HighlightItem( { item }: { item: HighlightItem } ) {
  const imageUrl = await getImageUrl(item.Kategorie, item.Hersteller, item.Name)
  return (
    <div className="flex flex-row bg-items p-2 rounded-sm h-64 ">
      <Image 
      src={imageUrl}
      alt="Highlight Item"
      width={400}
      height={400}
      className=""
      />
      <div className="flex flex-col pl-4">
        <h1 className="font-bold text-lg">{item.Name}</h1>
        <p className="">{item.Beschreibung}</p>
        <p className="font-bold text-lg">{item.Preis} €</p>
      </div>
    </div>
  )
}

export default async function HighlightItemList() {
  const highlightList = await getHighlightItems();
  return (
    <div className="p-2 space-y-2 overflow-y-auto">
      {highlightList.map((item) => (
        <HighlightItem key={item.id} item={item}/>
      ))}
    </div>
  )
}