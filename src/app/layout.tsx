import './globals.css'
import { Inter } from 'next/font/google'
import NavbarT from "../../components/navbar";
import NavbarL from "../../components/navbarL";
import MazeLoader from '../lib/mazeLoader';

const inter = Inter({ subsets: ['latin'] })

declare global {
  interface Window {
    mazeUniversalSnippetApiKey: any;
  }
}

export const metadata = {
  title: 'Device Heaven',
  description: 'A shopping Website for Smartphones, Tablets and Laptops',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const activated = false;

  return (
    <html lang="de">
      <MazeLoader />
      <body className={inter.className}>
        { activated  
        ? 
        <div className="flex h-screen">
          <NavbarL />
          <div className="grow overflow-y-auto">
            {children}
          </div>
        </div>
        : 
        <div className="flex flex-col h-screen overflow-hidden">
          <NavbarT />
          <div className="grow overflow-y-auto">
            {children}
          </div>
        </div>
        }
      </body>
    </html>
  )
}
