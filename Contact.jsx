import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        className="contact-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <br />
        Feel free to reach out for collaborations or opportunities
      </motion.p>

      <div className="contact-container">
        {/* LEFT INFO */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="info-box">
            <FaEnvelope />
            <span>vishalkamble0018@gmail.com</span>
          </div>

          <div className="info-box">
            <FaPhoneAlt />
            <span>+91 93222 86860</span>
          </div>

          <div className="info-box">
            <FaMapMarkerAlt />
            <span>Pune, India</span>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          className="contact-form"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required />

          <button type="submit" className="btn primary">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
