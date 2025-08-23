"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { ModalContext } from "@/contexts/ModalContext"
import { useContext } from "react"
import { ModalContextType } from "@/contexts/ContextsTypes"
import { ArrowRight, Sparkles, Code, Lightbulb } from "lucide-react"

export default function Hero() {
  const modalContext = useContext(ModalContext)
  const { setIsModalOpen } = modalContext as ModalContextType;

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* Profile Image Section */}
          <motion.div
            className="relative flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Decorative ring */}
            <div className="absolute inset-0 w-80 h-80 rounded-full border-2 border-blue-400/30 animate-pulse" />
            <div className="absolute inset-2 w-76 h-76 rounded-full border border-blue-400/20" />

            {/* Profile image */}
            <div className="relative w-72 h-72 mx-4 my-4">
              <Image
                src="/profile-pic.png"
                alt="Mohamed Yessine Bouajila"
                width={500}
                height={500}
                className="rounded-full shadow-2xl border-4 border-gray-700/50 hover:border-blue-400/50 transition-all duration-500"
                priority
              />

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 p-3 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Code className="w-6 h-6 text-blue-400" />
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -left-6 p-2 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-400/30"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <Lightbulb className="w-5 h-5 text-purple-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="flex-1 text-center lg:text-left max-w-2xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Greeting */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700/50 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-gray-300 text-sm">Welcome to my digital space</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="text-white">Mohamed Yessine</span>
              <br />
              <span className="text-blue-400 drop-shadow-[0_0_4px_rgba(59,130,246,0.3)]">
                Bouajila
              </span>
            </motion.h1>

            {/* Description */}
            <motion.div
              className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <span className="text-blue-400 font-semibold drop-shadow-[0_0_2px_rgba(59,130,246,0.3)]">
                Inventor
              </span>{" "}
              at heart, crafting innovative and practical solutions that seamlessly blend{" "}
              <span className="text-purple-400 font-medium">creativity</span>{" "}
              with real-world utility.
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.button
                className="group px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsModalOpen(true)}
              >
                <span className=" ">
                  Let's Connect
                </span>
              </motion.button>

              <motion.button
                className="px-8 py-4 border-2 border-gray-600 hover:border-blue-400 text-gray-300 hover:text-white font-semibold rounded-full transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Work
              </motion.button>
            </motion.div>

            {/* Stats or badges */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-6 mt-12 text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-white">2+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">5+</div>
                <div className="text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">1+</div>
                <div className="text-sm">Clients Served</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
