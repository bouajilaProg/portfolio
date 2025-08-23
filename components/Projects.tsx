"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import projects, { project } from "@/data/projects"
import ProjectCard from "./ProjectCard"

export default function Projects() {
  const [filter, setFilter] = useState("All")

  const getDomains = (projects: project[]): string[] => {
    const domains = ["All"];
    projects.forEach((project) => {
      project.header.domain.forEach((domain) => {
        if (!domains.includes(domain)) {
          domains.push(domain);
        }
      });
    });
    return domains;
  };

  const getFilteredProjects = (projects: project[], filter: string): project[] => {
    if (filter === "All") return projects;
    return projects.filter((project) => project.header.domain.includes(filter));
  };

  const filteredProjects = getFilteredProjects(projects, filter);
  const domains = getDomains(projects);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Featured <span className="text-transparent bg-clip-text bg-white">Projects</span>
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore my latest work across different domains and technologies
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex justify-center flex-wrap gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {domains.map((domain, index) => (
            <motion.button
              key={domain}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${filter === domain
                ? "text-blue-400 border-2 border-blue-400"
                : "text-gray-300 hover:text-white border border-gray-600"
                }`}
              onClick={() => setFilter(domain)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              {domain}
              {domain === "All" && (
                <span className="ml-2 bg-gray-700 text-gray-300 px-2 py-0.5 rounded-full text-xs">
                  {projects.length}
                </span>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Counter */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-gray-400 text-sm">
            Showing <span className="text-white font-semibold">{filteredProjects.length}</span> projects
            {filter !== "All" && (
              <span> in <span className="text-blue-400 font-semibold">{filter}</span></span>
            )}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-gray-500 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-400 mb-2">
              No projects found
            </h3>
            <p className="text-gray-500">
              Try selecting a different filter or check back later for new projects.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
