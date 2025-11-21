"use client"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ErrorPage() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">

          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* The 404 message is now static (no animate or transition props) */}
            <h1
              className="text-[120px] sm:text-[180px] font-extrabold mb-4 leading-none tracking-tight text-blue-500/80"
            >
              404
            </h1>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Page Not Found
            </h2>

            <p className="text-xl text-gray-400 max-w-xl mx-auto mb-6">
              The page you're seeking seems to have
              <span className="text-blue-400 font-semibold"> disappeared into the digital void</span>.
            </p>

            <p className="text-lg text-gray-500 mb-10">
              Let's get you back on track.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <motion.button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-200" // Reverted to rounded-full
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Back to Home
                </motion.button>
              </Link>

              <Link href="/#projects">
                <motion.button
                  className="bg-transparent border-2 border-blue-500 hover:bg-blue-500/20 text-blue-500 hover:text-white font-bold py-3 px-6 rounded-full transition-colors duration-200" // Reverted to rounded-full and original colors
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
