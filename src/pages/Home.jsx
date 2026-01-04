import { motion } from "framer-motion";
import Profilepic  from './Profilepic';

function Home() {
  return (
    <div className="home">
        <Profilepic/>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Swaroop M
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Full Stack Java Developer
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        Passionate full-stack developer with experience in building scalable
        web applications using Java, SQL, and React.
      </motion.p>

      <motion.div
        className="skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <span>Java</span>
        <span>SQL</span>
        <span>React</span>
        <span>Springboot</span>
        <span>HTML</span>
        <span>Java-Script</span>
        <span>CSS</span>
      </motion.div>

      <motion.div
        className="actions"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <button><a href="https://github.com/Swaroopreddy-m" target="blank">GitHub</a></button>
        <button><a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" target="blank">LinkedIn</a></button>
        <button><a href="/resume.pdf"  >Download Resume</a></button>
      </motion.div>
    </div>
  );
}

export default Home;
