"use client"
import { useContext, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaLinkedin, FaGithub, FaCopy } from "react-icons/fa"
import React from 'react'
import { ModalContext } from "@/contexts/ModalContext";


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


  const [isCopied, setIsCopied] = useState(false)
  const email = "your.email@example.com"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    isModalOpen && (
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gray-800 p-8 rounded-lg max-w-md w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <div className="flex items-center justify-between mb-4">
              <p className="text-lg">{email}</p>
              <button onClick={copyToClipboard} className="text-blue-500 hover:text-blue-400">
                <FaCopy />
              </button>
            </div>
            {isCopied && <p className="text-green-500 mb-4">Email copied to clipboard!</p>}
            <div className="flex justify-left space-x-4 mb-6">
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 text-2xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 text-2xl"
              >
                <FaGithub />
              </a>
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full transition-colors duration-200"
            >
              Close
            </button>
          </motion.div>
        </motion.div>

      </AnimatePresence>
    )
  )
}

export default ContactModal; 
