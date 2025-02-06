"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaLinkedin, FaGithub, FaCopy } from "react-icons/fa"

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false)


  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        <motion.button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200"
          onClick={() => setIsModalOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Open Contact Form
        </motion.button>
      </div>

    </section>
  )
}

