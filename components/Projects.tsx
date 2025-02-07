"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import projects from "@/data/projects"
import Link from "next/link"
import { SiGithub } from "react-icons/si"
import { FaExternalLinkAlt } from "react-icons/fa"
import ProjectCard from "./ProjectCard"



export default function Projects() {
  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.header.domain === filter)
  const domains = ["All", ...new Set(projects.map((project) => project.header.domain))]

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="flex justify-center space-x-4 mb-8">
          {domains.map((domain) => (
            <motion.button
              key={domain}
              className={`px-4 py-2 rounded-full ${filter === domain ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300"}`}
              onClick={() => setFilter(domain)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {domain}
            </motion.button>
          ))}
        </div>
        <AnimatePresence>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section >
  )
}

