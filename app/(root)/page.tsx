import About from "../components/About";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Portfolio from "../components/Portfolio";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <Portfolio>
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </Portfolio>
  );
}
