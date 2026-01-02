interface projectHeader {
  title: string,
  description: string,
  domain: string[],
  image?: string,
  video?: string,
  technologies: string[],
  liveUrl?: string,
  githubUrl?: string,
}

interface projectBody {
  fullDescription: string,
  sections: {
    title?: string,
    type: "image-text" | "text-image" | "text-only" | "image-only" | "title";
    image?: string,
    text?: string,
  }[]
}


interface project {
  id: string,
  header: projectHeader,
  body: projectBody
}

export type { project, projectHeader, projectBody }
const projects: project[] = [

  // green board
  {
    id: "greenboard",
    header: {
      title: "GreenBoard",
      description: "A website for selling personalized PCBs. Users can upload their own PCB Gerber files. This is a production project, not a demo.",
      domain: ["Web", "Front", "Back"],
      image: "/ProjectsImage/greenboard.png",
      liveUrl: "https://green-board-hazel.vercel.app",
      technologies: [
        "Next.js",
        "Resend Email API",
        "Tailwind",
        "React"
      ]
    },
    body: {
      fullDescription: "GreenBoard is a production-ready web application for selling personalized PCBs.",
      sections: []
    }
  },

  // codedown
  {
    id: "codedown",
    header: {
      title: "CodeDown",
      description: "A CLI tool to convert Markdown files into beautiful, syntax-highlighted PDFs.",
      domain: ["CLI", "Productivity", "Dev Tools"],
      image: "/ProjectsImage/codedown.png",
      technologies: [
        "Python",
        "Markdown",
        "CLI Tools",
        "PDF Generation"
      ],
      githubUrl: "https://github.com/bouajilaProg/CodeDown"
    },
    body: {
      fullDescription: "Convert Markdown files into polished PDFs via CLI.",
      sections: []
    }
  },

  // cool docs
  {
    id: "cooldocs",
    header: {
      title: "Cool Docs",
      description: "Offline desktop docs manager for competitive programmers.",
      domain: ["Desktop"],
      image: "/ProjectsImage/CoolDocs.png",
      technologies: [
        "Rust",
        "Tauri",
        "XML",
        "CSS"
      ],
      githubUrl: "https://github.com/bouajilaProg/cool-docs"
    },
    body: {
      fullDescription: "Offline-first documentation tool.",
      sections: []
    }
  },

  // shead
  {
    id: "shead",
    header: {
      title: "shead",
      description: "Enhanced `read` command replacement for shell scripting.",
      domain: ["CLI", "Productivity"],
      image: "/ProjectsImage/shead.png",
      technologies: [
        "Rust",
        "Shell"
      ],
      githubUrl: "https://github.com/bouajilaProg/shead"
    },
    body: {
      fullDescription: "Type-safe shell input utility.",
      sections: []
    }
  },

  // good talk
  {
    id: "goodtalk",
    header: {
      title: "Good Talk",
      description: "AI-powered safe chat application.",
      domain: ["Web", "Back", "AI"],
      image: "/ProjectsImage/GoodTalk.png",
      technologies: [
        "React",
        "Express",
        "AI",
        "NLP"
      ],
      githubUrl: "https://github.com/bouajilaProg/GoodTalk"
    },
    body: {
      fullDescription: "Real-time chat with toxicity detection.",
      sections: []
    }
  },

  // cri website
  {
    id: "cri",
    header: {
      title: "CRI Website",
      description: "Full-stack platform for ISIMM Robotics Club.",
      domain: ["Web", "Back"],
      image: "/ProjectsImage/CRI.png",
      technologies: [
        "React",
        "Express",
        "PostgreSQL"
      ],
      githubUrl: "https://github.com/bouajilaProg/CRI-website"
    },
    body: {
      fullDescription: "Inventory and loan management system.",
      sections: []
    }
  }
]

export default projects

