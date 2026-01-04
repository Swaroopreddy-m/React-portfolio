import { useState } from "react";
import { motion } from "framer-motion";

// Import images
import aws from "../assets/certificates/aws.jpg";
import eduskills from "../assets/certificates/eduskills.jpg";
import forage from "../assets/certificates/Forage.jpg";
import deeksha from "../assets/certificates/deeksha.jpg";
import futureskills from "../assets/certificates/futureskills.jpg";

// Arrange top 3 first
const certificates = [
  { id: 1, title: "Amazon Web Services", image: aws },
  { id: 2, title: "Eduskills", image: eduskills },
  { id: 3, title: "Forage", image: forage },
  { id: 4, title: "Deeksha Technologies", image: deeksha },
  { id: 5, title: "Futureskills", image: futureskills },
];

function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="certificates">
      <h1>My Certificates</h1>

      <div className="certificates-grid">
        {certificates.map((cert) => (
          <motion.div
            key={cert.id}
            className="certificate-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            onClick={() => setSelectedCert(cert.image)}
          >
            <img src={cert.image} alt={cert.title} />
            <motion.div
              className="overlay"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{cert.title}</h3>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedCert && (
        <div className="modal" onClick={() => setSelectedCert(null)}>
          <span className="close">&times;</span>
          <img className="modal-content" src={selectedCert} alt="Certificate" />
          <a
            href={selectedCert}
            download
            className="download-btn"
            onClick={(e) => e.stopPropagation()}
          >
            ⬇ Download
          </a>
        </div>
      )}
    </div>
  );
}

export default Certificates;
