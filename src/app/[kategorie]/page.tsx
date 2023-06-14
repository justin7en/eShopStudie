import { db } from "../../../firebase"
import { getDoc, doc, collection } from "firebase/firestore"

async function getKategorie( kategorieName : string) {
  const refKategorieCollection = collection(db, "HerstellerInKategorie");
  const data = await getDoc(doc(refKategorieCollection, kategorieName));

  if (!data.exists()) {
    console.log("This category does not exist");
    return null;
  }

  return {
    Kategorie: data.id,
    Hersteller: data.data().Hersteller
  }
}

export default async function Page( { params }: { params: { kategorie: string } }) {
  const content = await getKategorie(params.kategorie);
  return (
    <div>
      {content ? (
        <div>
          Kategorie: {content.Kategorie}
          <div>
            {content.Hersteller.map((hersteller : string, index : number) => (
              <div key={index}>{hersteller}</div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          Category not found
        </div>
      )}
    </div>
  )
}