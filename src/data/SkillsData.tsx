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
import { FaBrain, FaHandsHelping, FaLightbulb, FaRocket } from "react-icons/fa";
import { TbBulb } from "react-icons/tb";
import { title } from "process";

const skills = [
  {
    domain: "Front",
    items: [
      { icon: <SiHtml5 />, title: "HTML" },
      { icon: <SiCss3 />, title: "CSS" },
      { icon: <SiTailwindcss />, title: "Tailwind" },
      { icon: <SiBootstrap />, title: "Bootstrap" },
      { icon: <SiJavascript />, title: "JavaScript" },
      { icon: <SiTypescript />, title: "TypeScript" },
      { icon: <SiReact />, title: "React" },
      { icon: <SiNextdotjs />, title: "Next.js" },
    ],
  },
  {
    domain: "Back",
    items: [
      { icon: <SiPostgresql />, title: "PostgreSQL" },
      { icon: <SiMongodb />, title: "MongoDB" },
      { icon: <SiSupabase />, title: "Supabase" },
      { icon: <SiAwsamplify />, title: "AWS Amplify" },
      { icon: <SiExpress />, title: "Express" },
      { icon: <SiFastapi />, title: "FastAPI" },
      { icon: <SiJest />, title: "Jest" },
    ],
  },
  {
    domain: "DevOps",
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
    items: [
      { icon: <SiPython />, title: "Python" },
      { icon: <SiPandas />, title: "Pandas" },
      { icon: <SiKeras />, title: "Keras" },
      { icon: <FaBrain />, title: "Llama" },
      { icon: <SiOpencv />, title: "OpenCV" },
    ],
  },
  {
    domain: "Soft",
    items: [
      { icon: <FaHandsHelping />, title: "Leadership" },
      { icon: <FaRocket />, title: "Fast Learner" },
      { icon: <FaLightbulb />, title: "Listening" },
    ],
  },
];

export default skills;
