import HighlightItemList from "../../components/highlightItem"
import Image from "next/image"
import BannerHeaven from "../../public/BannerHeaven.png"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Image 
      src={BannerHeaven}
      alt="Banner"
      width={1100}
      height={100}
      />
      <HighlightItemList />
    </div>
  )
}
