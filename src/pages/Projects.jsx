import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Projects() {
  const [repos, setRepos] = useState([]);       // Store fetched repos
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null);     // Error state

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch("https://api.github.com/users/Swaroopreddy-m/repos");
        const data = await res.json();

        // Check if the response is an array (success)
        if (Array.isArray(data)) {
          setRepos(data);
        } else {
          console.warn("GitHub API returned unexpected data:", data);
          setError(data.message || "Failed to fetch repositories.");
          setRepos([]);
        }
      } catch (err) {
        console.error("Error fetching repos:", err);
        setError("Network error while fetching repositories.");
        setRepos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading projects...</p>;
  }

  if (error) {
    return <p style={{ textAlign: "center", color: "red" }}>{error}</p>;
  }

  if (repos.length === 0) {
    return <p style={{ textAlign: "center" }}>No projects available.</p>;
  }

  return (
    <div className="projects">
      <h1 style={{ textAlign: "center" }}>My Projects</h1>

      <div className="projects-grid" style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
        {repos.map((repo) => (
          <motion.div
            key={repo.id}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            style={{ padding: "1rem", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", background: "#fff" }}
          >
            <h3>{repo.name}</h3>
            <p>{repo.description || "No description provided."}</p>

            <div className="project-info" style={{ display: "flex", justifyContent: "space-between", marginTop: "0.5rem" }}>
              {repo.language && <span>{repo.language}</span>}
              <span>⭐ {repo.stargazers_count}</span>
            </div>

            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block", marginTop: "1rem", color: "#007acc", textDecoration: "none" }}
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
