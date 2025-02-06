
import React from 'react'
import { motion } from "framer-motion"

interface SectionData {
  index: number
  text: string
}

function TextOnly({ index, text }: SectionData) {
  return (
    <div
      key={index}
      className="mb-12"
    >
      <p className="text-lg">{text}</p>
    </div>
  )
}

export default TextOnly
