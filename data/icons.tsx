import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaLinux, FaDocker, FaBrain } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiJavascript, SiPostgresql, SiExpress, SiMongodb, SiTailwindcss, SiPython, SiOpencv, SiNodedotjs, SiRust, SiTauri, SiXml, SiPostman } from "react-icons/si";
import { MdRecordVoiceOver, MdSupervisorAccount } from "react-icons/md";
import { TbFileTypeXml } from "react-icons/tb";
import { RiKakaoTalkLine } from "react-icons/ri";

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
  Rust: <SiRust />,
  Tauri: <SiTauri />,
  XML: <TbFileTypeXml />,
  NLP: <RiKakaoTalkLine />,
  Postman: <SiPostman />,
  AI: <FaBrain />,
};

export default icons;
