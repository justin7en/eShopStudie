import { redirect } from "next/navigation";
import { db } from "../../../../firebase"
import { getDocs, collection, query, where } from "firebase/firestore"

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
  return (
    <div>
      {content.data.docs.map((item) => (
        <div key={item.id}>
          {item.data().Name}
        </div>
      ))}
    </div>
  )
}