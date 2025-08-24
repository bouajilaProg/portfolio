"use client"
import React, { ReactNode } from 'react'
import { SiArduino, SiMqtt } from 'react-icons/si'
import { FaDatabase } from 'react-icons/fa'
import Image from 'next/image'
import TextImage from '@/app/projects/[id]/sectionComponents/TextImage'
import TextOnly from '@/app/projects/[id]/sectionComponents/TextOnly'
import ImageOnly from '@/app/projects/[id]/sectionComponents/ImageOnly'
import ImageText from '@/app/projects/[id]/sectionComponents/ImageText'
import { project } from '@/data/projects'
import Title from '@/app/projects/[id]/sectionComponents/Title'
import { motion } from 'framer-motion'
import icons from '@/data/icons'



type SectionType = "image-text" | "text-image" | "text-only" | "image-only" | "title";

export default function ProjectPage({ project }: { project: project }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-6"
      >
        {project.header.title}
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8"
      >

        {
          // check if video or image
          (project.header.video) ?
            <video
              src={project.header.video}
              autoPlay
              loop
              muted
              className="w-full h-auto rounded-lg shadow-lg"

            />


            : (<Image
              src={project.header.image || "/placeholder.svg"}
              alt={project.header.title}
              width={1200}
              height={600}
              className="w-full h-auto rounded-lg shadow-lg"
            />)

        }

      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-8 overflow-x-auto"
      >
        <div className="flex space-x-4 pb-2">
          {project.header.technologies.map((tech) => (
            <div
              key={tech}
              className="flex items-center space-x-2 bg-gray-800 px-3 py-2 rounded-full"
            >
              {icons[tech] || <span className="w-6 h-6" />}
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg mb-8"
      >
        {project.body.fullDescription}
      </motion.p>

      {project.body.sections.map((section, index) => {
        const motionProps = index < project.body.sections.length - 1 ? {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.8 + index * 0.2 }, // Adjust delay as needed
        } : {};

        switch (section.type) {
          case "text-image":
            return <motion.div key={index} {...motionProps}><TextImage text={section?.text ?? ""} image={section?.image ?? ""} index={index} /></motion.div>;
          case "text-only":
            return <motion.div key={index} {...motionProps}><TextOnly text={section?.text ?? ""} index={index} /></motion.div>;
          case "image-only":
            return <motion.div key={index} {...motionProps}><ImageOnly image={section?.image ?? ""} index={index} /></motion.div>;
          case "image-text":
            return <motion.div key={index} {...motionProps}><ImageText text={section?.text ?? ""} image={section?.image ?? ""} index={index} /></motion.div>;
          case "title":
            return <motion.div key={index} {...motionProps}><Title text={section?.title ?? ""} index={index} /></motion.div>;
          default:
            console.error("Unknown section type:", section.type);
            return null;
        }
      })}
    </div>
  )
}
