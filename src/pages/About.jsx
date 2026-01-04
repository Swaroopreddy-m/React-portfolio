import { motion } from "framer-motion";

function About() {
  return (
    <div className="about">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        I am a passionate <strong>Full Stack Java Developer</strong> with hands-on
        experience in building scalable and user-friendly web applications.
        I enjoy creating clean UIs and developing reliable backend systems.
      </motion.p>

      <div className="about-highlights">
        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3>💻 Tech Stack</h3>
          <p>Java, SQL, React, HTML, CSS, JavaScript</p>
        </motion.div>

        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>🎯 Interests</h3>
          <p>Front-end Development, API Design, AI & NLP</p>
        </motion.div>

        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3>🚀 Goals</h3>
          <p>
            Building scalable products and growing as a full-stack engineer
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
