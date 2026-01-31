const projects = [
  {
    name: "project-one",
    description:
      "A full-stack web application built with modern technologies. Features include user authentication, real-time updates, and a responsive design.",
    tech: ["React", "Node.js", "PostgreSQL", "Docker"],
    github: "https://github.com/yourusername/project-one",
    live: "https://project-one.demo.com",
  },
  {
    name: "cli-tool",
    description:
      "A command-line tool that automates common development tasks. Built with performance and developer experience in mind.",
    tech: ["Go", "Cobra", "SQLite"],
    github: "https://github.com/yourusername/cli-tool",
  },
  {
    name: "api-service",
    description:
      "RESTful API service with comprehensive documentation, rate limiting, and monitoring. Handles thousands of requests per minute.",
    tech: ["Python", "FastAPI", "Redis", "AWS"],
    github: "https://github.com/yourusername/api-service",
    live: "https://api.demo.com",
  },
  {
    name: "mobile-app",
    description:
      "Cross-platform mobile application with offline support, push notifications, and seamless synchronization.",
    tech: ["React Native", "TypeScript", "Firebase"],
    github: "https://github.com/yourusername/mobile-app",
  },
];

export function Projects() {
  return (
    <section className="section" id="projects">
      <h2 className="section-header">Projects</h2>
      <div className="terminal-window">
        <div className="terminal-header">
          <span className="terminal-dot"></span>
          <span className="terminal-dot"></span>
          <span className="terminal-dot"></span>
          <span className="terminal-title">~/projects</span>
        </div>
        <div className="terminal-body">
          <p className="prompt">ls -la ./projects</p>
          <div className="projects-list output">
            {projects.map((project) => (
              <article key={project.name} className="project-card">
                <div className="project-header">
                  <h3 className="project-name">{project.name}</h3>
                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        [github]
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        [live]
                      </a>
                    )}
                  </div>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
