import './globals.css'
import { Inter } from 'next/font/google'
import NavbarT from "../../components/navbar";
import NavbarL from "../../components/navbarL";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Device Heaven',
  description: 'A shopping Website for Smartphones, Tablets and Laptops',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const activated = false
  return (
    <html lang="de">
      <body className={inter.className}>
        { activated  
        ? 
        <div className="flex h-screen">
          <NavbarL />
          <div className="grow">
            {children}
          </div>
        </div>
        : 
        <div className="flex flex-col h-screen overflow-hidden">
          <NavbarT />
          {children}
        </div>
        }
      </body>
    </html>
  )
}
