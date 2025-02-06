
import React from 'react'
import { motion } from "framer-motion"

interface SectionData {
  text: string
}

function TextOnly({ section, index }: { section: SectionData; index: number }) {
  return (
    <motion.div
      key={index}
      className="mb-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <p className="text-lg">{section.text}</p>
    </motion.div>
  )
}

export default TextOnly
