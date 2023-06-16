import Link from "next/link"

interface CategoryList {
  kategorie: string
  hersteller: string[]
}

export default function CategoryView( herstellerList : CategoryList) {
  return (
    <div className="grid grid-cols-3 gap-4 ">
      {herstellerList.hersteller.map((item : string, index : number) => (
        <Link key={index} href={`/${herstellerList.kategorie}/${item}`}>
          <div className="flex bg-items rounded-md justify-center items-center h-16 md:h-32 lg:h-48 xl:h-64 text-lg font-bold">{item}</div>
        </Link>
      ))}
    </div>
  )
}