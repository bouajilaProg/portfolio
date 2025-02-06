import React from 'react'
import { motion } from "framer-motion"

interface TitleProps {
  index: number
  text: string
}

function Title({ index, text }: TitleProps) {
  return (

    <div
      key={index}
      className="mb-12 flex justify-center w-full"

    >
      <p className="text-2xl">{text}</p>
    </div>
  )
}

export default Title
