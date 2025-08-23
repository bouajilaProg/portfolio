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
      className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 cursor-pointer"
      whileHover={{ y: -5 }}
    >
      <Link href={`/projects/${project.id}`} className="block h-full">
        <div className="relative overflow-hidden">
          <motion.img
            src={project.header.image}
            alt={project.header.title}
            className="w-full h-48 object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200 leading-tight">
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

          <p className="text-gray-300 mb-4 line-clamp-3 text-sm leading-relaxed flex-grow">
            {project.header.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {project.header.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="bg-gray-700/50 backdrop-blur-sm text-gray-300 px-3 py-1 rounded-full text-xs font-medium border border-gray-600/50"
              >
                {tech}
              </span>
            ))}
            {project.header.technologies.length > 4 && (
              <span className="text-gray-400 text-xs px-2 py-1 rounded-full bg-gray-700/30">
                +{project.header.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
