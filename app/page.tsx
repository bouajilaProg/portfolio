import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Projects from "../components/Projects"
import Education from "../components/Education"
import Contact from "../components/Contact"

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Projects />
      <Education />
    </main>
  )
}

