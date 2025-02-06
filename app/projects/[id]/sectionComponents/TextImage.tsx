import React from 'react'
import { motion } from "framer-motion"
import Image from "next/image"

interface SectionData {
  image?: string
  text: string
}

function TextImage({ section, index }: { section: SectionData; index: number }) {
  return (
    <motion.div
      key={index}
      className="mb-12 md:flex md:items-center md:space-x-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="md:w-1/2">
        <p className="text-lg">{section.text}</p>
      </div>
      <div className="mb-4 md:mb-0 md:w-1/2">
        <Image
          src={section.image || "/placeholder.svg"}
          alt={`Project section ${index + 1}`}
          width={600}
          height={400}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

    </motion.div>
  )
}

export default TextImage
