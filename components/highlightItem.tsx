import Image from "next/image"
import Iphone from "../public/IphonePrototyp.png"

function HighlightItem() {
  return (
    <div className="flex bg-gray-500 p-2 rounded-sm h-64 ">
      <div className="grow">
        <h1 className="font-bold text-lg">Iphone</h1>
        <p>Dieses Iphone ist neu</p>
      </div>
      <Image 
      src={Iphone}
      alt="Iphone"
      style={{objectFit: "contain"}}
      className="w-auto"
      />
    </div>
  )
}

export default function HighlightItemList() {
  return (
    <div className="p-2 space-y-2 overflow-y-auto">
      <HighlightItem />
      <HighlightItem />
      <HighlightItem />
      <HighlightItem />
      <HighlightItem />
      <HighlightItem />
      <HighlightItem />
    </div>
  )
}