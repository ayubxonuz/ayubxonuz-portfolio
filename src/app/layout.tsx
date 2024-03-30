import type {Metadata} from "next"
import {Inter} from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import NextTopLoader from "nextjs-toploader"
import Footer from "@/components/Footer"

const inter = Inter({subsets: ["latin"]})

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
      <body className={`${inter.className}`}>
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
