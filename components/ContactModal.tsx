"use client"
import { useContext, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaLinkedin, FaGithub, FaCopy, FaEnvelope } from "react-icons/fa"
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
  const email = "bouajilamedyessine@gmail.com"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    isModalOpen && (
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gray-900/80 p-8 rounded-lg max-w-md w-full backdrop-blur-md text-white shadow-lg border border-gray-800"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <div className="flex items-center rounded-md border border-gray-700 px-4 py-2 mb-4">
              <p className="text-lg flex-grow">{email}</p>
              <button onClick={copyToClipboard} className="text-blue-500 hover:text-blue-400 ml-2">
                <FaCopy />
              </button>
            </div>
            {isCopied && <p className="text-green-500 mb-4">Email copied to clipboard!</p>}
            <div className="flex justify-left space-x-4 mb-6">
              <a
                href="https://linkedin.com/in/mohamed-yessine-bouajila"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 text-2xl"
              >
                <FaLinkedin />
              </a>
              <a

                href="https://github.com/bouajilaprog"

                target="_blank"

                rel="noopener noreferrer"

                className="text-blue-500 hover:text-blue-400 text-2xl"

              >

                <FaGithub />

              </a>
              <a
                href={`mailto:${email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 text-2xl"
              >
                <FaEnvelope />
              </a>
            </div>
            <a
              href="/bouajila-mohamed-yessine.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 block text-center mb-2 text-white font-bold py-2 px-4 rounded-full w-full transition-colors duration-200"
            >
              Download Resume
            </a>
            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full transition-colors duration-200"
            >
              Close
            </button>
          </motion.div>
        </motion.div>

      </AnimatePresence >
    )
  )
}

export default ContactModal;
