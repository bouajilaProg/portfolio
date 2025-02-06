import { notFound } from "next/navigation"
import ProjectPage from "../../../components/ProjectPage"
import projects from "@/data/projects";

type SectionType = "image-text" | "text-image" | "text-only" | "image-only";




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
