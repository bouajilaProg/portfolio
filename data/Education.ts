interface Ieducation {
  university: string,
  degree: string,
  year: string,
}

interface Icertifications {
  name: string,
  issuer: string,
  year: string,
}


export const certifications: Icertifications[] = [
  { name: "the bits and bytes of computer networking", issuer: "coursera google", year: "2024" },
  { name: "operating systems and you : become a power user", issuer: "Coursera Google", year: "2024" },
  { name: "Intro to git and github", issuer: "Coursera Google", year: "2024" },
  { name: "Technical support fundomontals", issuer: "Coursera Google", year: "2024" },
]


export const education: Ieducation = {
  university: "Institut of mathematics and computer science monastir",
  degree: "Bachelor of Science in Computer Science",
  year: "2022 - now",
}


