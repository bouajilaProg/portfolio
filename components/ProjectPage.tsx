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
    <div className="max-w-5xl mx-auto px-4 py-8">
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
              controls
              autoPlay
              loop
              muted
              className="w-full h-auto rounded-lg shadow-lg max-h-[70vh]"
            />
            : (<Image
              src={project.header.image || "/placeholder.svg"}
              alt={project.header.title}
              width={1400}
              height={700}
              className="w-full h-auto rounded-lg shadow-lg max-h-[70vh] object-cover"
            />)
        }
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-8 overflow-x-auto"
      >
        <div className="flex flex-wrap gap-3 pb-2">
          {project.header.technologies.map((tech) => (
            <motion.div
              key={tech}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
              }}
              transition={{ duration: 0.2 }}
              className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full hover:bg-gray-700 transition-colors duration-200 cursor-default"
            >
              <div className="flex items-center justify-center w-5 h-5">
                {icons[tech] || <div className="w-2 h-2 bg-gray-400 rounded-full"></div>}
              </div>
              <span className="text-sm font-medium">{tech}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg mb-8 leading-relaxed"
      >
        {project.body.fullDescription}
      </motion.p>

      {project.body.sections.map((section, index) => {
        const motionProps = {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: 0.8 + index * 0.1 },
        };

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
