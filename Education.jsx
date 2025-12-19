import { motion } from "framer-motion";
import { fadeUp } from "./animations";

export default function Education() {
  return (
    <motion.section
      id="education"
      className="section"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="section-title">Education</h2>

      <div className="timeline">

        <div className="timeline-card">
          <h3>Bachelor of Computer Engineering</h3>
          <span>2021 – 2025</span>
          <p>8.00 CGPA</p>
          <p>
            Parvatibai Genba Moze College of Engineering Wagholi Pune, India  
            <br />
            Focused on programming, web development, databases, and software engineering.
          </p>
        </div>

        <div className="timeline-card">
          <h3>Higher Secondary (12th)</h3>
          <span>2020 – 2021</span>
          <p>84.50%</p>
          <p>
            Maharashtra State Board  
            <br />
            Science stream with Mathematics & Computer Science.
          </p>
        </div>

        <div className="timeline-card">
          <h3>Secondary School (10th)</h3>
          <span>2019 – 2020</span>
          <p>82.00%</p>
          <p>
            Maharashtra State Board  
            <br />
            Science stream with Mathematics & Computer Science.
          </p>
        </div>

      </div>
    </motion.section>
  );
}
