"use client"
import { useContext, useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaLinkedin, FaGithub, FaCopy, FaEnvelope, FaTimes, FaDownload } from "react-icons/fa"
import { Mail, ExternalLink, Check } from "lucide-react"
import React from 'react'
import { ModalContext } from "@/contexts/ModalContext"

interface ModalContextType {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function ContactModal() {
  if (ModalContext === undefined) {
    return <div>ModalContext is undefined</div>
  }

  const modalContext = useContext(ModalContext);
  const { isModalOpen, setIsModalOpen } = modalContext as ModalContextType;

  // Enhanced click outside effect
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target?.classList.contains('modal-backdrop')) {
        setIsModalOpen(false)
      }
    }

    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false)
      }
    }

    if (isModalOpen) {
      document.addEventListener("click", handleClickOutside)
      document.addEventListener("keydown", handleEscapeKey)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
      document.removeEventListener("keydown", handleEscapeKey)
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen, setIsModalOpen])

  const [isCopied, setIsCopied] = useState(false)
  const email = "bouajilamedyessine@gmail.com"

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 3000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/mohamed-yessine-bouajila",
      label: "LinkedIn Profile",
      color: "hover:text-blue-400"
    },
    {
      icon: FaGithub,
      href: "https://github.com/bouajilaprog",
      label: "GitHub Profile",
      color: "hover:text-gray-300"
    },
    {
      icon: FaEnvelope,
      href: `mailto:${email}`,
      label: "Send Email",
      color: "hover:text-red-400"
    }
  ]

  if (!isModalOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        className="modal-backdrop fixed inset-0 bg-black/60 flex items-center justify-center p-4 backdrop-blur-sm z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="relative bg-gray-900/95 backdrop-blur-xl rounded-2xl max-w-lg w-full border border-gray-700/50 shadow-2xl overflow-hidden"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Header with close button */}
          <div className="relative p-8 pb-4">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full transition-all duration-200"
              aria-label="Close modal"
            >
              <FaTimes className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <Mail className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Let's Connect</h3>
            </div>
            <p className="text-gray-400">Get in touch and let's discuss your next project</p>
          </div>

          <div className="px-8 pb-8 space-y-6">
            {/* Email section */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="flex items-center bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 group hover:border-gray-600 transition-colors duration-200">
                  <Mail className="w-4 h-4 text-gray-400 mr-3" />
                  <span className="text-white flex-grow font-mono text-sm">{email}</span>
                  <motion.button
                    onClick={copyToClipboard}
                    className="ml-3 p-2 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Copy email to clipboard"
                  >
                    {isCopied ? <Check className="w-4 h-4 text-green-400" /> : <FaCopy className="w-4 h-4" />}
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Connect on Social Media
              </label>
              <div className="grid grid-cols-3 gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center p-4 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-gray-600 transition-all duration-200 group ${social.color}`}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <social.icon className="w-6 h-6 mb-2" />
                    <span className="text-xs text-gray-400 group-hover:text-gray-300">
                      {social.label.split(' ')[0]}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="space-y-3 pt-4">
              <motion.a
                href="/bouajila-mohamed-yessine.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaDownload className="w-4 h-4" />
                Download Resume
              </motion.a>

              <motion.button
                onClick={() => setIsModalOpen(false)}
                className="w-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white font-semibold py-3 px-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-200"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                Close
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ContactModal
