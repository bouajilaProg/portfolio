import { FaCloud, FaCode, FaMicrochip, FaRobot, FaServer } from "react-icons/fa"
import { FaBugSlash } from "react-icons/fa6";

interface IService {
  name: string
  icon: any
  description: string
}


export const services: IService[] = [
  {
    name: "Web Development",
    icon: FaCode,
    description: "Building fast, responsive, and scalable web applications tailored to your needs."
  },
  {
    name: "API Integration",
    icon: FaServer,
    description: "Seamlessly integrating third-party APIs or creating custom APIs."
  },
  {
    name: "AI Integration",
    icon: FaRobot,
    description: "Enhancing your applications with AI-driven automation, chatbots, and intelligent systems."
  },
  {
    name: "IoT Integration",
    icon: FaMicrochip,
    description: "Connecting and managing IoT devices to enable smart and data-driven solutions."
  },
  {
    name: "Infrastructure Setups",
    icon: FaCloud,
    description: "Deploying and optimizing cloud or on-premise infrastructure for scalability and security."
  },
  {
    name: "Quality Assurance",
    icon: FaBugSlash,
    description: "Ensuring the quality and reliability of your applications with automated testing and QA processes"
  }
]

