import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react" // Import React
import Navbar from "../components/Navbar"
import ContactModal from "@/components/ContactModal"
import { ModalProvider } from "@/contexts/ModalContext"


export const metadata = {
  title: "bouajilaProg ",
  description: "A showcase of my work and skills",
  icons: { icon: "/favicon.ico" }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body className="bg-gray-900">
        <ModalProvider>
          <Navbar />
          {children}
          <ContactModal />
        </ModalProvider>
      </body>
    </html>
  )
}

