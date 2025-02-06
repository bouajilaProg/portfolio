"use client"

import { useState, useEffect, useContext } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { ModalContext } from "@/contexts/ModalContext"
import { ModalContextType } from "@/contexts/ContextsTypes"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "Projects", href: "/#projects" },
  { name: "Education", href: "/#education" },
]

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("")
  const pathname = usePathname()

  useEffect(() => {
    const active = navItems.find((item) => pathname.startsWith(item.href))
    setActiveItem(active?.name || "")
  }, [pathname])

  const modalContext = useContext(ModalContext)
  const { setIsModalOpen } = modalContext as ModalContextType;

  return (
    <nav className="sticky top-0 z-10 bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="text-2xl font-bold text-blue-500 hover:text-blue-400 transition-colors">
          bouajilaprog
        </Link>

        <div className=" space-x-6 hidden md:flex">
          {navItems.map((item) => (
            <motion.div key={item.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={item.href}
                className={`px-3 py-2 rounded-md text-md font-medium ${activeItem === item.name
                  ? "text-blue-500"
                  : "text-gray-300 hover:text-gray-200"
                  } transition-colors duration-200`}
                onClick={() => setActiveItem(item.name)}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>



        <motion.button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsModalOpen(true)}
        >
          contact
        </motion.button>

      </div>
    </nav>
  )
}
