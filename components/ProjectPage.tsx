"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa"
import { SiTensorflow, SiArduino, SiMqtt } from "react-icons/si"

const techIcons: { [key: string]: JSX.Element } = {
  React: <FaReact />,
  "Node.js": <FaNodeJs />,
  Python: <FaPython />,
  TensorFlow: <SiTensorflow />,
  Arduino: <SiArduino />,
  MQTT: <SiMqtt />,
  Database: <FaDatabase />,
}

interface ProjectPageProps {
  project: {
    id: number
    title: string
    description: string
    image: string
    technologies: string[]
    fullDescription: string
    sections: {
      type: "image-text" | "text-only"
      image?: string
      text: string
    }[]
  }
}

export default function ProjectPage({ project }: ProjectPageProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
      <div className="mb-8">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={1200}
          height={600}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="mb-8 overflow-x-auto">
        <div className="flex space-x-4 pb-2">
          {project.technologies.map((tech) => (
            <div key={tech} className="flex items-center space-x-2 bg-gray-800 px-3 py-2 rounded-full">
              {techIcons[tech] || <span className="w-6 h-6" />}
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>
      <p className="text-lg mb-8">{project.fullDescription}</p>
      {project.sections.map((section, index) => (
        <motion.div
          key={index}
          className={`mb-12 ${section.type === "image-text" ? "md:flex md:items-center md:space-x-8" : ""}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {section.type === "image-text" && section.image && (
            <div className={`mb-4 md:mb-0 ${index % 2 === 0 ? "md:order-1" : "md:order-2"} md:w-1/2`}>
              <Image
                src={section.image || "/placeholder.svg"}
                alt={`Project section ${index + 1}`}
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          )}
          <div className={section.type === "image-text" ? "md:w-1/2" : ""}>
            <p className="text-lg">{section.text}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

