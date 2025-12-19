import profile from "../assets/profile.jpg";
import { motion } from "framer-motion";
// import profile from "./profilio.jpg.jpg";
import { fadeLeft, fadeRight } from "./animations";
import { FaLinkedin, FaGithub } from "react-icons/fa";



export default function Hero() {
  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-content"
        variants={fadeLeft}
        initial="hidden"
        animate="visible"
      >
        <h1>
          Hello, I'm <span>Vishal Kamble</span>
        </h1>
        <p>
          WEB Developer| MERN Stack Developer | React | Node.js | MongoDB
        </p>

        <p style={{ maxWidth: "420px", marginTop: "10px", color: "#aaa" }}>
          I am a passionate Web Developer who builds modern, responsive, and high-performance websites and web applications.
          I specialize in creating clean and intuitive user interfaces, developing scalable backend architectures, 
          and delivering secure, efficient, and maintainable web solutions using the MERN stack.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn primary">Hire Me</a>
          <a href="/resume.pdf" className="btn outline" download>
            Download Resume
          </a>
        </div>
        {/* SOCIAL LINKS */}
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/vishal-kamble-56b2392a9?"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/vishalkamble18"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero-image"
        variants={fadeRight}
        initial="hidden"
        animate="visible"
      >
        <img src={profile} alt="Vishal Kamble" />
      </motion.div>
    </section>
  );
}
