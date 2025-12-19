import { motion } from "framer-motion";
import { fadeUp } from "./animations";

export default function Skills() {
  const skills = [
    "HTML5",
    "CSS",
    "JavaScript (ES6+)",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Git & GitHub",
    "REST APIs",
    "Responsive Design"
  ];

  return (
    <motion.section
      id="skills"
      className="section"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            whileHover={{ scale: 1.1 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
