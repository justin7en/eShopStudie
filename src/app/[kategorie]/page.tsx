import { redirect } from "next/navigation";
import { db } from "../../../firebase"
import { getDoc, doc, collection } from "firebase/firestore"

async function getKategorie( kategorieName : string) {
  const refKategorieCollection = collection(db, "HerstellerInKategorie");
  const data = await getDoc(doc(refKategorieCollection, kategorieName));

  if (!data.exists()) {
    redirect("/");
  }

  const herstellerArray: string[] = data.data().Hersteller || [];
  const sortedHersteller = herstellerArray.sort();

  return {
    Kategorie: data.id,
    Hersteller: sortedHersteller
  }
}

export default async function Page( { params }: { params: { kategorie: string } }) {
  const content = await getKategorie(params.kategorie);
  return (
    <div>
      Kategorie: {content.Kategorie}
      <div>
        {content.Hersteller.map((hersteller : string, index : number) => (
          <div key={index}>{hersteller}</div>
        ))}
      </div>
    </div>
  )
}