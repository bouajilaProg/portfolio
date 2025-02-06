
import React from 'react'
import { motion } from "framer-motion"
import Image from "next/image"

interface SectionData {
  index: number
  image: string
  text: string
}

function ImageText({ index, image, text }: SectionData) {
  return (
    <div
      key={index}
      className="mb-12 md:flex md:items-center md:space-x-8"
    >
      <div className="mb-4 md:mb-0 md:w-1/2">
        <Image
          src={image || "/placeholder.svg"}
          alt={`Project section ${index + 1}`}
          width={600}
          height={400}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="md:w-1/2">
        <p className="text-lg">{text}</p>
      </div>
    </div>
  )
}

export default ImageText
