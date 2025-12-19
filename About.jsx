import { motion } from "framer-motion";
import { fadeUp } from "./animations";

export default function About() {
  return (
    <motion.section
      id="about"
      className="section"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="section-title">About Me</h2>

      <p className="section-text">
        I am a passionate <b>Web Developer and MERN Stack Developer</b> with a strong interest
        in building user-friendly, scalable, and performance-optimized
        web applications.
      </p>

      <p className="section-text">
        I have hands-on experience in <b>React, JavaScript, Node.js, Express,
        MongoDB, HTML, CSS</b> and modern UI practices. I enjoy learning new
        technologies and solving real-world problems through code.
      </p>

      <p className="section-text">
        My goal is to work in a growth-oriented organization where I can
        enhance my technical skills and contribute to impactful projects.
      </p>
    </motion.section>
  );
}
