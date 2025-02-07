import { motion } from "framer-motion";
import Link from 'next/link';
import { SiGithub } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
import { project, projectHeader } from "@/data/projects";

const ProjectCard = ({ project }: { project: project }) => {

  //this function is added so i can access the github and live link without opening the project page
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
  };

  return (
    <motion.div
      key={project.id}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      {/* to use when i have a ready project page 
      <Link href={`/projects/${project.id}`} className="block">
      */}

      <Link href={"#projects"} className="block">
        <motion.img
          src={project.header.image}
          alt={project.header.title}
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="p-6">
          <div className="flex justify-between">
            <h3 className="text-xl font-semibold mb-2 text-white hover:text-gray-100">
              {project.header.title}
            </h3>
            <div className="flex gap-2 text-white">
              <a
                href={project.header.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 text-xl"
                onClick={handleClick} // Added onClick handler
              >
                <SiGithub />
              </a>

              <a
                href={project.header.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 text-xl"
                onClick={handleClick} // Added onClick handler
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
          <p className="text-gray-400 mb-4">{project.header.description}</p>
          <div className="flex flex-wrap mb-4">
            {project.header.technologies.map((tech) => (
              <span key={tech} className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-sm mr-2 mb-2">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
