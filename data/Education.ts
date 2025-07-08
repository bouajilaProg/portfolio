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
  { name: "The Bits and Bytes of Computer Networking", issuer: "Coursera Google", year: "2024" },
  { name: "Operating Systems and You: Become a Power User", issuer: "Coursera Google", year: "2024" },
  { name: "Intro to Git and GitHub", issuer: "Coursera Google", year: "2024" },
  { name: "Technical Support Fundamentals", issuer: "Coursera Google", year: "2024" },
];

export const education: Ieducation[] = [{
  university: "Institut of mathematics namend computer science monastir",
  degree: "Bachelor of Science in Computer Science",
  year: "2022 - 2025",
},
{
  university: "Habib Thameur high school",
  degree: "Baccalaureate in computer science",
  year: "2021 - 2022",
}]

