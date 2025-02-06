
import React from 'react'
import { motion } from "framer-motion"
import Image from "next/image"

interface SectionData {
  image?: string
}

function ImageOnly({ section, index }: { section: SectionData; index: number }) {
  return (
    <motion.div
      key={index}
      className="mb-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Image
        src={section.image || "/placeholder.svg"}
        alt={`Project section ${index + 1}`}
        width={600}
        height={400}
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </motion.div>
  )
}

export default ImageOnly
