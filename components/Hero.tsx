"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ModalContext } from "@/contexts/ModalContext"
import { useContext } from "react"
import { ModalContextType } from "@/contexts/ContextsTypes"

export default function Hero() {

  const modalContext = useContext(ModalContext)
  const { setIsModalOpen } = modalContext as ModalContextType;

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="mb-10 md:mb-0 md:mr-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/profile-pic.png"
              alt="Profile"
              width={400}
              height={400}
              className="rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </motion.div>
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold mb-4">Your Name</h1>
            <p className="text-xl text-gray-300 mb-6">
              Full-stack developer specializing in web development, AI integration, and IoT solutions.
            </p>
            <motion.button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
            >
              Let's Connect
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

