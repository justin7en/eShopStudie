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
    <div className="flex flex-col items-center p-2 space-y-2">
      <h1 className="text-lg font-bold">Hersteller: {params.hersteller}</h1>
      <div className="w-full">
        <HerstellerView artikelList={article} kategorie={params.kategorie} hersteller={params.hersteller} />
      </div>
    </div>
  )
}