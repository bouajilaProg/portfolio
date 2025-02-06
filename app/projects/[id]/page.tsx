import { notFound } from "next/navigation"
import ProjectPage from "../../../components/ProjectPage"

type SectionType = "image-text" | "text-image" | "text-only" | "image-only";

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  fullDescription: string
  sections: {
    type: SectionType
    image?: string
    text: string
  }[]

}

// This is a mock database. In a real application, you would fetch this data from an API or database.
const projects: Project[] = [
  {
    id: 1,
    title: "Project 1",
    description: "A web application",
    image: "/placeholder.svg?height=600&width=1200",
    technologies: ["React", "Node.js", "Database"],
    fullDescription: "This is a full-stack web application built with React and Node.js.",
    sections: [
      {
        type: "image-text",
        image: "/placeholder.svg?height=400&width=600",
        text: "The frontend of this application is built with React, providing a smooth and responsive user interface.",
      },
      {
        type: "text-only",
        text: "The backend is powered by Node.js, handling data processing and API requests efficiently.",
      },
      {
        type: "text-only",
        text: "This project demonstrates the power of modern web technologies and showcases best practices in full-stack development.",
      },
    ],
  },
  {
    id: 2,
    title: "Project 2",
    description: "An AI-powered tool",
    image: "/placeholder.svg?height=600&width=1200",
    technologies: ["Python", "TensorFlow"],
    fullDescription: "This is an AI-powered tool that uses machine learning for data analysis.",
    sections: [
      {
        type: "text-image",
        image: "/placeholder.svg?height=400&width=600",
        text: "The core of this project is built with Python, leveraging its powerful data processing capabilities.",
      },
      {
        type: "image-text",
        image: "/placeholder.svg?height=400&width=600",
        text: "We use TensorFlow to implement and train our machine learning models, enabling advanced AI capabilities.",
      },
      {
        type: "text-only",
        text: "This project showcases the potential of AI in solving complex data analysis problems and demonstrates cutting-edge machine learning techniques.",
      },
    ],
  },
  // Add more projects as needed
]

export default function Project({ params }: { params: { id: string } }) {
  const projectId = Number.parseInt(params.id)

  if (isNaN(projectId)) {
    notFound()
  }

  const project = projects.find((p) => p.id === projectId)

  if (!project) {
    notFound()
  }

  return <ProjectPage project={project} />
}
