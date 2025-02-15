interface projectHeader {
  title: string,
  description: string,
  domain: string[],
  image: string,
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
  id: number,
  header: projectHeader,
  body: projectBody
}

export type { project, projectHeader, projectBody }

const projects: project[] = [

  // cri website
  {
    "id": 1,
    "header": {
      "title": "CRI Website",
      "description": "Developed a full-stack web application for the ISIMM Robotics Club.",
      "domain": ["Front", "Back"],
      "image": "/ProjectsImage/CRI.png",
      "technologies": [
        "React",
        "Express",
        "PostgreSQL",
        "Tailwind",
        "HTML",
        "CSS",
        "JavaScript"
      ],
      "githubUrl": "https://github.com/bouajilaProg/CRI-website"
    },
    "body": {
      "fullDescription": "This project involved building a full-stack web application for the ISIMM Robotics Club (CRI) to manage their inventory and loan process.  While performance was a consideration, the primary focus was on functionality and usability.",
      "sections": [
        {
          "type": "text-image",
          "text": "The technology stack was chosen to provide a solid foundation for the application. React was used for the front-end, Express.js for the back-end, and PostgreSQL for the database.  Some attention was paid to performance, but it wasn't the primary driver of technology choices.  This image shows the item browsing interface.",
          "image": "/ProjectsImage/cri1.png"
        },
        {
          "type": "image-text",
          "text": "The loan management logic was a core part of the application.  This involved handling loan requests, managing inventory, and tracking returns.  Efforts were made to make the application reasonably performant, but in-depth performance optimization was not a primary goal of this initial version. This image showcases the admin dashboard.",
          "image": "/ProjectsImage/cri2.png"
        }
      ]
    }
  },

  // cool docs
  {
    "id": 2,
    "header": {
      "title": "Cool Docs",
      "description": "An offline tool built with Rust, Tauri, and React for competitive programmers to store and manage their docs and templates in XML format, providing a solution to the no Wi-Fi rule at competitions.",
      "domain": ["Desktop"],
      "image": "/ProjectsImage/CoolDocs.png",
      "technologies": [
        "Rust",
        "Tauri",
        "HTML",
        "XML",
        "CSS"
      ],
      "githubUrl": "https://github.com/bouajilaProg/cool-docs"
    },
    "body": {
      "fullDescription": "Cool Docs is a desktop application designed to address a common problem faced by competitive programmers: the lack of internet access during competitions.  It provides a convenient, offline solution for storing and managing important documents, code templates, and other resources.  Built using Rust, Tauri, and React, Cool Docs offers a native desktop experience with a modern and intuitive user interface.  Data is stored in XML format, allowing for structured and easily searchable content.",
      "sections": [
        {
          "type": "text-image",
          "text": "XML was chosen as the storage format for several reasons.  Its structured nature makes it ideal for organizing different types of documents and templates.  The use of tags allows for semantic markup, making it easy to categorize and search for specific information.  Furthermore, XML is a well-established and widely supported format, ensuring compatibility and interoperability. This screenshot shows how documents are structured within the application.",
          "image": "/ProjectsImage/cool-docs_xml.png"
        },
        {
          "type": "image-text",
          "text": "Additionally, users can customize the theme or even create their own using CSS, ensuring a personalized experience. This page is showing the settings page, where users can make these adjustments.",
          "image": "/ProjectsImage/cool-docs-settings.png" // Placeholder image - replace with actual screenshot if available
        }
      ],
    },
  },


  // good talk
  {
    "id": 3,
    "header": {
      "title": "Good Talk",
      "description": "A web application designed to enable users to chat seamlessly while incorporating an advanced censoring layer that detects and prevents bad words and abusive language, ensuring a safe and friendly communication environment.",
      "domain": ["Front", "Back", "AI"],
      "image": "/ProjectsImage/GoodTalk.png",
      "technologies": [
        "React",
        "Express",
        "AI",
        "NLP",
        "Postman",
      ],
      "githubUrl": "https://github.com/bouajilaProg/GoodTalk"
    },
    "body": {
      "fullDescription": "Good Talk is a web application designed to foster positive and respectful communication.  It provides a platform for users to chat in real-time, with a built-in censoring layer powered by AI and NLP to detect and filter out inappropriate language.  This helps create a safer and more welcoming environment for all users.",
      "sections": [
        {
          "type": "image-only",
          "image": "/ProjectsImage/good-talk_bert.png" // Placeholder - replace with actual screenshot of chat interface
        },
        {
          "type": "text-only",
          "text": "By training the BERT algorithm on a toxic and non toxic text database, you can develop a model capable of accurately identifying toxic words and distinguishing them from non-toxic ones.",
        }
      ]
    },
  },

  // portfolio
  {
    "id": 4,
    "header": {
      "title": "Developer Portfolio",
      "description": "A personal portfolio showcasing my skills, projects, and education as a full-stack developer with a passion for AI and DevOps.",
      "domain": ["Front"],
      "image": "/ProjectsImage/Portfolio.png",
      "technologies": [
        "React",
        "Next.js",
        "Tailwind",
        "TypeScript",
        "Node.js"
      ],
      "liveUrl": "/",
      "githubUrl": "https://github.com/bouajilaProg/portfolio"
    },
    "body": {
      "fullDescription": "This portfolio website serves as a central hub for showcasing my skills, projects, and experience as a full-stack developer.  It's designed to provide visitors with a clear and concise overview of my technical abilities and my passion for AI and DevOps.  The site is built using modern web technologies and emphasizes both functionality and a clean, professional design.",
      "sections": [
      ]
    },
  }

  // tree quiz
  /*{
    "id": 5,
    "header": {
      "title": "QuizTree",
      "description": "A web application for creating and taking multiple-choice quizzes (QCM), designed for monetization.",
      "domain": ["Front", "Back"],
      "image": "/ProjectsImage/QuizTree.png", // Replace with your image
      "technologies": [
        "Next.js",
        "NestJS",
        "MongoDB",
        "Mongoose"
      ],
      "githubUrl": "https://github.com/bouajilaProg/QuizTree" // Replace with your GitHub URL (if applicable)
    },
    "body": {
      "fullDescription": "QuizTree is a web application designed to facilitate learning and self-assessment through multiple-choice quizzes (QCM).  It offers a platform for creating, sharing, and taking quizzes, with a focus on providing value to both quiz creators and quiz takers.  The platform is built using Next.js, NestJS, and MongoDB, providing a solid foundation for scalability and performance.",
      "sections": [
        {
          "type": "text-image",
          "text": "The front-end is built with Next.js, ensuring a smooth and responsive user experience.  The interface is designed to be user-friendly, making it easy for users to navigate the platform and take quizzes.  Quiz creation features, potentially available through different subscription tiers, allow content creators to easily build and manage their quizzes. This image shows the quiz-taking interface, optimized for various devices.",
          "image": "/ProjectsImage/QuizTree_take.png" // Replace with your image
        },
        {
          "type": "text-image",
          "text": "The back-end, powered by NestJS, handles user accounts, quiz data, and the core logic of the application.  MongoDB and Mongoose are used for data storage, providing flexibility and scalability.  The platform's architecture is designed to support a growing user base and a large number of quizzes. This image shows the quiz management dashboard (if available).",
          "image": "/ProjectsImage/QuizTree_manage.png" // Replace with your image
        },
        {
          "type": "text-image",
          "text": "QuizTree offers a range of features, including user accounts, quiz creation tools (potentially with tiered access), progress tracking, and reporting.  The platform is designed with monetization in mind, allowing for different subscription models or other revenue streams. Future development could explore additional features like advanced analytics, different question types, and integrations with other platforms.",
          "image": "/ProjectsImage/QuizTree_features.png" // Replace with your image
        }
      ]
    },
  },
{
  // Giso
  "id": 6,
  "header": {
    "title": "Giso",
    "description": "A personal AI assistant for desktop, powered by a lightweight Llama LLM, built with Rust, Python, and a Tauri/React front-end.",
    "domain": ["Desktop", "AI"],
    "image": "/ProjectsImage/Giso.png", // Replace with your image
    "technologies": [
      "Rust",
      "Python",
      "Llama LLM",
      "Tauri",
      "React",
    ],
    "githubUrl": "https://github.com/bouajilaProg/Giso" // Replace if applicable
  },
  "body": {
    "fullDescription": "Giso is a personal AI assistant designed to run locally on your desktop.  Powered by a lightweight version of the Llama LLM, Giso offers a range of helpful features, including setting alarms and timers, memorizing information, providing text-to-speech functionality, and accessing basic data like time and date.  Privacy is a key consideration, and the current version is designed to avoid accessing screen content. Future versions with local hosting may explore screen interaction with explicit user consent.",
    "sections": [
      {
        "type": "text-image",
        "text": "Giso's core logic is implemented using Rust, chosen for its performance, memory safety, and concurrency capabilities. Python is used to integrate with the Llama LLM. This combination allows for efficient processing of natural language queries and robust handling of various tasks. The front-end is built using Tauri, which allows creating desktop applications using web technologies like React. This image shows the Giso interface where you can interact with the assistant.",
        "image": "/ProjectsImage/Giso_interface.png" // Replace with your image
      },
      {
        "type": "text-image",
        "text": "The React front-end provides a modern and intuitive user interface for interacting with Giso.  The text-to-speech functionality allows for hands-free interaction, making it convenient to use while multitasking.  The memorization feature allows Giso to store information you provide, acting as a personal knowledge base.  You can ask Giso to recall specific details or ask general questions about the information you've stored. This image shows Giso responding to a user query.",
        "image": "/ProjectsImage/Giso_response.png" // Replace with your image
      },
      {
        "type": "text-image",
        "text": "Giso can perform basic tasks such as setting alarms and timers, providing the current time and date, and managing your personal information.  Privacy is a top priority. The current implementation avoids accessing screen content.  Future development plans include exploring features that interact with the user's screen (with explicit user consent and local hosting) to provide even more helpful assistance.  This could include things like reading notifications or summarizing articles. This image shows the alarm setting interface.",
        "image": "/ProjectsImage/Giso_alarm.png" // Replace with your image
      }
    ]
  },
{
  "id": 7,
  "header": {
    "title": "Car Rental Website",
    "description": "A web application for browsing, booking, and managing car rentals, featuring a comprehensive admin panel.",
    "domain": ["Front", "Back"],
    "image": "/ProjectsImage/CarRental.png", // Replace with your image
    "technologies": [
      "Next.js",
      "NestJS",
      "MongoDB",
      "Mongoose"
    ],
    "liveUrl": "/", // Replace with the actual live URL
  },
  "body": {
    "fullDescription": "This project involved the development of a full-stack web application for a car rental service.  The platform allows users to browse available cars, make reservations, manage their bookings, and provides a powerful admin panel for managing inventory, users, and rentals.  Built with Next.js, NestJS, and MongoDB, the application is designed for performance, scalability, and maintainability.",
    "sections": [
      {
        "type": "text-image",
        "text": "The front-end was built using Next.js, leveraging its features for server-side rendering and static site generation to provide a fast and optimized user experience.  Users can easily search for cars based on various criteria, view car details, and make bookings.  The interface is designed to be intuitive and accessible, ensuring a smooth booking process. This image shows the car browsing and search interface.",
        "image": "/ProjectsImage/CarRental_browse.png" // Replace with your image
      },
      {
        "type": "text-image",
        "text": "The back-end, built with NestJS, handles user authentication, data management, and the core logic of the application.  MongoDB and Mongoose were used for data persistence, providing a flexible and scalable database solution. The admin panel, also built with Next.js, provides a comprehensive interface for managing all aspects of the car rental business, including inventory, bookings, users, and reports.  This image shows the car details page.",
        "image": "/ProjectsImage/CarRental_details.png" // Replace with your image
      },
      {
        "type": "text-image",
        "text": "Key features of the application include user registration and login, car search and filtering, booking management, payment integration (if implemented), and a robust admin panel.  The admin panel allows for easy management of cars, bookings, users, and potentially financial data.  Future development could include features like real-time availability updates, integration with third-party services (e.g., payment gateways, mapping services), and advanced reporting capabilities. This image shows the admin dashboard.",
        "image": "/ProjectsImage/CarRental_admin.png" // Replace with your image
      }
    ]
  },
}
}
  */
];

export default projects;
