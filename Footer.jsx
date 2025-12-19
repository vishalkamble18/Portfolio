import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <motion.div
        className="footer-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3>Vishal Kamble</h3>
        <p>MERN Stack Developer</p>

        <div className="footer-socials">
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

          <a href="mailto:vishalkamble0018@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Vishal Kamble. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
