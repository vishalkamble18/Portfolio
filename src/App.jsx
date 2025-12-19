import Navbar from "./portfolio/Navbar";
import Hero from "./portfolio/Hero";
import About from "./portfolio/About";
import Skills from "./portfolio/Skills";
import Projects from "./portfolio/Project";
import Contact from "./portfolio/Contact";
import Education from "./portfolio/Education";
import Experience from "./portfolio/Experience";
import Footer from "./portfolio/Footer";

import "./portfolio/Navbar.css";
import "./portfolio/Portfolio.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="dark-sections">
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
