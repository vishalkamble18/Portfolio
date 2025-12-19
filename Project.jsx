import { motion } from "framer-motion";
import { fadeUp } from "./animations";

export default function Project() {
  return (
    <motion.section
      id="projects"
      className="section"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">

        <motion.div className="project-card" whileHover={{ y: -10 }}>
          <h3>To-Do Application</h3>
          <p>
            A task management web app built using React that allows users to
            add, update, delete, and manage daily tasks efficiently.
          </p>
          <p><b>Tech:</b> React, JavaScript, CSS</p>
        </motion.div>

        <motion.div className="project-card" whileHover={{ y: -10 }}>
          <h3>Spotify Clone</h3>
          <p>
            A responsive front-end clone of Spotify with modern UI design
            and smooth user experience.
          </p>
          <p><b>Tech:</b> HTML, CSS, JavaScript</p>
        </motion.div>

        <motion.div className="project-card" whileHover={{ y: -10 }}>
          <h3>Portfolio Website</h3>
          <p>
            Personal professional portfolio showcasing skills, projects,
            resume, and contact information.
          </p>
          <p><b>Tech:</b> React, Framer Motion</p>
        </motion.div>

        <motion.div className="project-card" whileHover={{ y: -10 }}>
          <h3>Rock-Paper-Scissor Game</h3>
          <p>
            A simple Rock Paper Scissors game where users play against the computer using random choice logic.
    
          </p>
          <p><b>Tech:</b> HTML, CSS, and JavaScript.</p>
        </motion.div>

      </div>
    </motion.section>
  );
}
