import { motion } from "framer-motion";
import { fadeUp } from "./animations";

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="section"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="section-title">Experience</h2>

      <div className="timeline">

        <div className="timeline-card">
          <h3>Software Development Engineer Intern — Bluestock Fintech</h3>
          <span>Sep–Oct 2025</span>
          <p>
            • Developed a full-stack Company Registration Verification module using React, Redux Toolkit, Node.js, Express,
and PostgreSQL. 
            <br />
            • Improved UI performance and user experience
          </p>
        </div>

        <div className="timeline-card">
          <h3>Web Development Intern — Prodigy InfoTech</h3>
          <span>Mar 2024</span>
          <p>
            • Developed responsive and reusable UI components using HTML, CSS, and JavaScript.
            <br />
            • Enhanced website layouts, performance, and overall frontend user experience..
            <br />
            • Practiced Git & GitHub version control
          </p>
        </div>

      </div>
    </motion.section>
  );
}
