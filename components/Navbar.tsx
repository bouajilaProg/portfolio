"use client"
import { useState, useEffect, useContext } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ModalContext } from "@/contexts/ModalContext"
import { ModalContextType } from "@/contexts/ContextsTypes"
import { FiMenu, FiX, FiMessageCircle } from "react-icons/fi"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "Projects", href: "/#projects" },
  { name: "Education", href: "/#education" },
]

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const modalContext = useContext(ModalContext)
  const { setIsModalOpen } = modalContext as ModalContextType;

  useEffect(() => {
    const active = navItems.find((item) => pathname.startsWith(item.href))
    setActiveItem(active?.name || "")
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleContactClick = () => {
    setIsModalOpen(true)
    setIsMobileMenuOpen(false)
  }

  const handleNavClick = (itemName: string) => {
    setActiveItem(itemName)
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav
      className={`sticky top-0 z-50 transition duration-300 border-b border-gray-800  ${isScrolled
        ? "bg-gray-900/95 backdrop-blur-xl  shadow-lg"
        : "bg-gray-900/80 backdrop-blur-sm"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center space-x-2"
            onClick={() => handleNavClick("Home")}
          >
            <div className="relative">
              <span className="text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition-all duration-200">
                bouajila
              </span>
              <span className="text-2xl font-bold text-white group-hover:text-gray-200 transition-all duration-200">
                prog
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.div key={item.name}>
                <Link
                  href={item.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeItem === item.name
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-white"
                    }`}
                  onClick={() => handleNavClick(item.name)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.name}
                  {activeItem === item.name && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400 rounded-full" />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden md:flex">
            <motion.button
              className="group relative px-6 py-2.5 bg-blue-500/10 hover:bg-blue-500 border border-blue-500/30 hover:border-blue-500 text-blue-400 hover:text-white font-semibold rounded-full transition-all duration-200 backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContactClick}
            >
              <span className="flex items-center gap-2">
                <FiMessageCircle className="w-4 h-4" />
                Contact
              </span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-200"
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${activeItem === item.name
                      ? "text-blue-400 bg-blue-500/10 border border-blue-500/30"
                      : "text-gray-300 hover:text-white hover:bg-gray-800"
                      }`}
                    onClick={() => handleNavClick(item.name)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                className="pt-4 border-t border-gray-800"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <button
                  onClick={handleContactClick}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-200"
                >
                  <FiMessageCircle className="w-4 h-4" />
                  Contact Me
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
