import type {Metadata} from "next"
import {Open_Sans} from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import NextTopLoader from "nextjs-toploader"
import Footer from "@/components/Footer"

const openSans = Open_Sans({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Ayubxon's Portfolio",
  description: "Ayubxon's Projects",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/telegram-white-icon.png"
      />
      <body className={`${openSans.className}`}>
        <div className="max-container">
          <NextTopLoader height={5} />
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
