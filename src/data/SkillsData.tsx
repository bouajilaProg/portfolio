import {
  SiAwsamplify,
  SiBootstrap,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiGit,
  SiGnubash,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiKeras,
  SiLinux,
  SiMongodb,
  SiNextdotjs,
  SiOpencv,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import {
  FaBrain,
  FaCogs,
  FaDatabase,
  FaHandshake,
  FaHandsHelping,
  FaLaptopCode,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";

const skills = [
  {
    domain: "Front",
    icon: <FaLaptopCode />,
    items: [
      { icon: <SiHtml5 />, title: "HTML" },
      { icon: <SiCss3 />, title: "CSS" },
      { icon: <SiTailwindcss />, title: "Tailwind" },
      { icon: <SiBootstrap />, title: "Bootstrap" },
      { icon: <SiJavascript />, title: "JavaScript" },
      { icon: <SiTypescript />, title: "TypeScript" },
      { icon: <SiReact />, title: "React" },
      { icon: <SiNextdotjs />, title: "Next.js" },
      { icon: <SiGit />, title: "git" },
    ],
  },
  {
    domain: "Back",
    icon: <FaDatabase />,
    items: [
      { icon: <SiJavascript />, title: "JavaScript" },
      { icon: <SiTypescript />, title: "TypeScript" },
      { icon: <SiPostgresql />, title: "PostgreSQL" },
      { icon: <SiExpress />, title: "Express" },
      { icon: <SiMongodb />, title: "MongoDB" },
      { icon: <SiGit />, title: "git" },
    ],
  },
  {
    domain: "DevOps",
    icon: <FaCogs />,
    items: [
      { icon: <SiGit />, title: "git" },
      { icon: <SiLinux />, title: "Linux" },
      { icon: <SiGnubash />, title: "Bash" },
      { icon: <SiDocker />, title: "Docker" },
      { icon: <SiDocker />, title: "Compose" },
    ],
  },
  {
    domain: "AI",
    icon: <FaBrain />,
    items: [
      { icon: <SiPython />, title: "Python" },
      { icon: <SiOpencv />, title: "OpenCV" },
      { icon: <FaBrain />, title: "YOLO" },
    ],
  },

  {
    domain: "Soft",

    icon: <FaHandshake />,
    items: [
      { icon: <FaHandsHelping />, title: "Leadership" },
      { icon: <FaLightbulb />, title: "Listening" },
    ],
  },
];

export default skills;
