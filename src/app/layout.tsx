import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "../../components/navbarL";

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
  return (
    <html lang="de">
      <body className={inter.className}>
        <Navbar content={children} />
      </body>
    </html>
  )
}
