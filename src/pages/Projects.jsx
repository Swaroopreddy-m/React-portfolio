import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/Swaroopreddy-m/repos")
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}>Loading projects...</p>;

  return (
    <div className="projects">
      <h1>My Projects</h1>

      <div className="projects-grid">
        {repos.map((repo) => (
          <motion.div
            key={repo.id}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h3>{repo.name}</h3>
            <p>{repo.description || "No description provided."}</p>

            <div className="project-info">
              {repo.language && <span>{repo.language}</span>}
              <span>⭐ {repo.stargazers_count}</span>
            </div>

            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
