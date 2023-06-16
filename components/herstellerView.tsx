import Link from "next/link"

interface ArtikelProps {
  id: string;
  name: string;
  price: number;
}

interface HerstellerViewProps {
  artikelList: ArtikelProps[];
  kategorie: string;
  hersteller: string;
}

export default function HerstellerView({
  artikelList,
  kategorie,
  hersteller,
}: HerstellerViewProps) {
  return (
    <div className="grid grid-cols-3 gap-4 ">
      {artikelList.map((item : ArtikelProps, index : number) => (
        <Link key={index} href={`/${kategorie}/${hersteller}/${item.id}`}>
          <div className="flex flex-col bg-items rounded-md justify-center items-center h-16 md:h-32 lg:h-48 xl:h-64 text-lg font-bold">
            <h2>{item.name}</h2>
            <p>{item.price}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}