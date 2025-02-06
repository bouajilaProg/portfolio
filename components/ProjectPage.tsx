"use client"
import React, { ReactNode } from 'react'
import { SiArduino, SiMqtt } from 'react-icons/si'
import { FaDatabase } from 'react-icons/fa'
import Image from 'next/image'
import TextImage from '@/app/projects/[id]/sectionComponents/TextImage'
import TextOnly from '@/app/projects/[id]/sectionComponents/TextOnly'
import ImageOnly from '@/app/projects/[id]/sectionComponents/ImageOnly'
import ImageText from '@/app/projects/[id]/sectionComponents/ImageText'

const techIcons: Record<string, ReactNode> = {
  Arduino: <SiArduino />,
  MQTT: <SiMqtt />,
  Database: <FaDatabase />,
}

type SectionType = "image-text" | "text-image" | "text-only" | "image-only";

interface ProjectPageProps {
  project: {
    id: number
    title: string
    description: string
    image: string
    technologies: string[]
    fullDescription: string
    sections: {
      type: SectionType
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
      {project.sections.map((section, index) => {
        switch (section.type) {
          case "text-image":
            return <TextImage key={index} section={section} index={index} />
          case "text-only":
            return <TextOnly key={index} section={section} index={index} />
          case "image-only":
            return <ImageOnly key={index} section={section} index={index} />
          case "image-text":
            return <ImageText key={index} section={section} index={index} />
          default:
            console.error("Unknown section type:", section.type);
            return null;
        }
      })}
    </div>
  )
}
