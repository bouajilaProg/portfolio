import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaLinux, FaDocker } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiJavascript, SiPostgresql, SiExpress, SiMongodb, SiTailwindcss, SiPython, SiOpencv, SiNodedotjs } from "react-icons/si";
import { MdRecordVoiceOver, MdSupervisorAccount } from "react-icons/md";

const icons: Record<string, JSX.Element> = {
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  Tailwind: <SiTailwindcss />,
  Bootstrap: <FaBootstrap />,
  JavaScript: <SiJavascript />,
  TypeScript: <SiTypescript />,
  React: <FaReact />,
  "Next.js": <SiNextdotjs />,
  Git: <FaGitAlt />,
  PostgreSQL: <SiPostgresql />,
  Express: <SiExpress />,
  MongoDB: <SiMongodb />,
  Linux: <FaLinux />,
  Docker: <FaDocker />,
  Python: <SiPython />,
  OpenCV: <SiOpencv />,
  Leadership: <MdSupervisorAccount />,
  Listening: <MdRecordVoiceOver />,
  "Node.js": <SiNodedotjs />,
};

export default icons;
