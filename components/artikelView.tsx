'use client'

import { Separator } from "./ui/separator";
import Alert from "./alert";

interface ArtikelProps{
  artikel: {
    Name: string;
    Preis: number;
    Beschreibung: string;
  };
}

export default function ArtikelView({artikel} : ArtikelProps) {
  return (
    <div className="flex space-x-4">
      <div className="">
        Bild
      </div>
      <div className="flex flex-col bg-items rounded-md p-2 items-center space-y-4">
        <h1 className="text-lg font-bold">{artikel.Name}</h1>
        <Separator/>
        <p>{artikel.Beschreibung}</p>
        <Separator/>
        <p>{artikel.Preis} €</p>
        <Alert />
      </div>
    </div>
  )
}