import { motion } from "framer-motion";
import Link from 'next/link';
import { SiGithub } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
import { project } from "@/data/projects";

const ProjectCard = ({ project }: { project: project }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
  };

  return (
    <motion.div
      key={project.id}
      className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 cursor-pointer flex flex-col h-[440px] w-full"
      whileHover={{ y: -5 }}
    >
      <div className="flex flex-col h-full">
        {/* Fixed height for image container */}
        <div className="relative overflow-hidden h-48 shrink-0">
          <motion.img
            src={project.header.image}
            alt={project.header.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content area: flex-1 makes this fill the remaining card space */}
        <div className="p-6 flex flex-col flex-1 overflow-hidden">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200 leading-tight line-clamp-1">
              {project.header.title}
            </h3>
            <div className="flex gap-3 ml-4 flex-shrink-0">
              {project.header.githubUrl && (
                <motion.a
                  href={project.header.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-lg transition-colors duration-200"
                  onClick={handleClick}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SiGithub />
                </motion.a>
              )}
              {project.header.liveUrl && (
                <motion.a
                  href={project.header.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 text-lg transition-colors duration-200"
                  onClick={handleClick}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt />
                </motion.a>
              )}
            </div>
          </div>

          {/* line-clamp-3 ensures descriptions don't push the card down */}
          <p className="text-gray-300 mb-4 line-clamp-3 text-sm leading-relaxed">
            {project.header.description}
          </p>

          {/* Tech Stack Container */}
          <div className="mt-auto pt-4">
            <div className="flex items-center gap-2 h-8 w-full"> {/* Fixed h-8 (32px) ensures it is visible */}
              <div className="flex flex-nowrap gap-2 overflow-hidden">
                {project.header.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-700/50 backdrop-blur-sm text-gray-300 px-3 py-1 rounded-full text-[10px] font-bold border border-gray-600/50 whitespace-nowrap shrink-0"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.header.technologies.length > 3 && (
                <span className="text-gray-400 text-xs font-medium whitespace-nowrap shrink-0 bg-gray-700/30 px-2 py-1 rounded-full">
                  +{project.header.technologies.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
