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

        {/* To-Do App */}
        <motion.div className="project-card" whileHover={{ y: -10 }}>
          <h3>To-Do Application</h3>
          <p>
            A task management web app built using React that allows users to
            add, update, delete, and manage daily tasks efficiently.
          </p>
          <p>
            <b>Tech:</b> React, JavaScript, CSS
          </p>
        </motion.div>

        {/* Spotify Clone */}
        <motion.div className="project-card" whileHover={{ y: -10 }}>
          <h3>Spotify Clone</h3>
          <p>
            A responsive front-end clone of Spotify with modern UI design and
            smooth user experience.
          </p>
          <p>
            <b>Tech:</b> HTML, CSS, JavaScript
          </p>
        </motion.div>

        {/* Portfolio */}
        <motion.div className="project-card" whileHover={{ y: -10 }}>
          <h3>Portfolio Website</h3>
          <p>
            Personal professional portfolio showcasing skills, projects, resume,
            and contact information.
          </p>
          <p>
            <b>Tech:</b> React, Framer Motion
          </p>
        </motion.div>

        {/* Rock Paper Scissors */}
        <motion.div className="project-card" whileHover={{ y: -10 }}>
          <h3>Rock-Paper-Scissor Game</h3>
          <p>
            A simple Rock Paper Scissors game where users play against the
            computer using random choice logic.
          </p>
          <p>
            <b>Tech:</b> HTML, CSS, JavaScript
          </p>
        </motion.div>

        {/* Online Quize System */}
        <motion.div className="project-card" whileHover={{ y: -10 }}>
          <h3>Online Quize System</h3>
          <p>
            Developed a full-stack Online Quiz System using the MERN stack,
            featuring role-based authentication, quiz creation, question
            management, secure quiz joining via code, and real-time result
            tracking.
          </p>
          <p>
            <b>Tech:</b> Frontend : React.js, Tailwind CSS Backend : Node.js,
            Express.js Database : MongoDB Auth : JWT (JSON Web Token) Tools :
            Git, GitHub, Postman
          </p>
          <a
            href="https://online-quize-mu.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
           View
          </a>
        </motion.div>

        {/* SmartATM */}
        <motion.div className="project-card" whileHover={{ y: -10 }}>
          <h3>SmartATM</h3>
          <p>
            Smart ATM System is a Java-based application that simulates real-world ATM functionality. Users can securely log in using card number and PIN to perform banking operations such as balance inquiry, cash withdrawal, deposit, and viewing transaction history. The system emphasizes security, accuracy, and proper exception handling.
          </p>
          <p>
            <b>Tech:</b> Java, OOP Concepts
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
