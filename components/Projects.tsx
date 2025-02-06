"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "A web application",
    domain: "Web",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React", "Node.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Project 2",
    description: "An AI-powered tool",
    domain: "AI",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Python", "TensorFlow"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Project 3",
    description: "An IoT solution",
    domain: "IoT",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Arduino", "MQTT"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  // Add more projects as needed
]

const domains = ["All", "Web", "AI", "IoT"]

export default function Projects() {
  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.domain === filter)

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
              <motion.div
                key={project.id}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={`/projects/${project.id}`} className="block">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap mb-4">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-sm mr-2 mb-2">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

