import { redirect } from "next/navigation";
import { db } from "../../../../../firebase"
import { getDoc, doc, collection } from "firebase/firestore"
import ArtikelView from "../../../../../components/artikelView";

async function getArtikel( kategorie : string, hersteller : string, artikelId : string) {
  const refArtikelCollection = collection(db, "Artikel");
  const data = await getDoc(doc(refArtikelCollection, artikelId));

  if (!data.exists() || data.data().Kategorie != kategorie || data.data().Hersteller != hersteller) {
    redirect("/");
  }

  return {
    data
  }
}

export default async function Artikel({
  params,
}: {
  params: { kategorie: string; hersteller: string; artikel: string }
}) {
  const content = await getArtikel(params.kategorie, params.hersteller, params.artikel);
  const artikel = {
    Name:  content.data.data().Name,
    Preis: content.data.data().Preis,
    Beschreibung: content.data.data().Beschreibung
  }
  return (
    <div className="p-2">
      <ArtikelView artikel={artikel}/>
    </div>
  )
}