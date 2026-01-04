import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <nav>

      <motion.nav
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 5, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        ></motion.nav>

      <Link to="/React-portfolio">Home</Link>
      <Link to="/Projects">Projects</Link>
      <Link to="/about">About</Link>
      <Link to="/Certificates">Certificates</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
