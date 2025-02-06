
import React from 'react'
import { motion } from "framer-motion"
import Image from "next/image"

interface SectionData {
  index: number
  image: string
}

function ImageOnly({ index, image }: SectionData) {
  return (
    <div
      key={index}
      className="mb-12"

    >
      <Image
        src={image || "/placeholder.svg"}
        alt={`Project section ${index + 1}`}
        width={600}
        height={400}
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  )
}

export default ImageOnly
