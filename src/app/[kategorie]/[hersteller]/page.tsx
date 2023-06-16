import { redirect } from "next/navigation";
import { db } from "../../../../firebase"
import { getDocs, collection, query, where } from "firebase/firestore"
import HerstellerView from "../../../../components/herstellerView";

async function getHersteller( kategorie : string, hersteller : string) {
  const refArtikelCollection = collection(db, "Artikel");
  const filteredCollection = query(refArtikelCollection,
    where("Kategorie", "==", kategorie),
    where("Hersteller", "==", hersteller));

  const data = await getDocs(filteredCollection);


  if (data.empty) {
    redirect("/");
  }

  return {
    data
  }
}

export default async function Hersteller({
  params,
}: {
  params: { kategorie: string; hersteller: string }
}) {
  const content = await getHersteller(params.kategorie, params.hersteller);
  const article = content.data.docs.map((doc) => ({
    id: doc.id,
    name: doc.data().Name,
    price: doc.data().Preis,
  }));

  return (
    <div className="p-2">
      <HerstellerView artikelList={article} kategorie={params.kategorie} hersteller={params.hersteller} />
    </div>
  )
}