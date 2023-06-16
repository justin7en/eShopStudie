import { redirect } from "next/navigation";
import { db } from "../../../firebase"
import { getDoc, doc, collection } from "firebase/firestore"
import CategoryPreview from "../../../components/categoryView";

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
    <div className="flex flex-col items-center p-2 space-y-2">
      <h1 className="text-lg "> Kategorie: {content.Kategorie} </h1>
      <div className="w-full">
        <CategoryPreview kategorie={content.Kategorie} hersteller={content.Hersteller}/>
      </div>
    </div>
  )
}