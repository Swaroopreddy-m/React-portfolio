import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* HOME */}
        <Route index element={<Home />} />

        {/* OTHER PAGES */}
        <Route path="projects" element={<Projects />} />
        <Route path="certificates" element={<Certificates />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

        {/* FALLBACK */}
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
