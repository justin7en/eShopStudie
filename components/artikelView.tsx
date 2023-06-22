import { Separator } from "./ui/separator";
import Alert from "./alert";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebase";
import Image from "next/image";

interface ArtikelProps{
  artikel: {
    Name: string;
    Preis: number;
    Beschreibung: string;
    kategorie: string;
    hersteller: string;
  };
}

export async function getImageUrl (kategorie : string, hersteller: string, artikel: string) {
  const imageRef = ref(storage, `${kategorie}/${hersteller}/${artikel}.png`)
  const imageUrl = getDownloadURL(imageRef)

  if(!imageUrl) {
    console.log("image for article could not be found!")
  }

  return imageUrl
}

export default async function ArtikelView({artikel} : ArtikelProps) {
  const imageUrl = await getImageUrl(artikel.kategorie, artikel.hersteller, artikel.Name)
  return (
    <div className="flex flex-row space-x-4">
      <div className="basis-1/2">
        <Image 
        src={imageUrl}
        alt="Produktbild"
        width={1000}
        height={1000}
        />
      </div>
      <div className="basis-1/2 flex flex-col bg-items rounded-md p-2 items-center space-y-4">
        <h1 className="text-lg font-bold">{artikel.Name}</h1>
        <Separator/>
        <p className="grow">{artikel.Beschreibung}</p>
        <Separator/>
        <p>{artikel.Preis} €</p>
        <Alert />
      </div>
    </div>
  )
}