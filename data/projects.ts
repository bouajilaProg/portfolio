

interface projectHeader {
  title: string,
  description: string,
  domain: string,
  image: string,
  technologies: string[],
  liveUrl: string,
  githubUrl: string,
}

interface projectBody {
  fullDescription: string,
  sections: {
    title?: string,
    type: string,
    image?: string,
    text?: string,
  }[]
}


interface project {
  id: number,
  header: projectHeader,
  body: projectBody
}

export type { project, projectHeader, projectBody }

/*
{
    id: 1,
    header: {
      title: "Project 1",
      description: "A web application",
      domain: "Web",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "Node.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    body: {
      fullDescription: "This is a web application that does something cool.",
      sections: [
        {
          type: "title",
          title: "Section 1",
        },
        {
          type: "text-image",
          image: "/placeholder.svg?height=400&width=600",
          text: "The core of this project is built with Python, leveraging its powerful data processing capabilities.",
        },
        {
          type: "image-text",
          image: "/placeholder.svg?height=400&width=600",
          text: "The core of this project is built with Python, leveraging its powerful data processing capabilities.",
        },
      ],
    }
  }
*/

const projects: project[] = [
  {
    id: 1,
    header: {
      title: "Project 1",
      description: "A web application",
      domain: "Web",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "Node.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    body: {
      fullDescription: "This is a web application that does something cool.",
      sections: [
        {
          type: "title",
          title: "Section 1",
        },
        {
          type: "text-image",
          image: "/placeholder.svg?height=400&width=600",
          text: "The core of this project is built with Python, leveraging its powerful data processing capabilities.",
        },
        {
          type: "image-text",
          image: "/placeholder.svg?height=400&width=600",
          text: "The core of this project is built with Python, leveraging its powerful data processing capabilities.",
        },
      ],
    }
  }
]


export default projects;
