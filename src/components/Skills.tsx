const skillCategories = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Go", "Rust", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Vue", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "FastAPI", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "Docker", "AWS", "Linux", "CI/CD", "Vim"],
  },
];

export function Skills() {
  return (
    <section className="section" id="skills">
      <h2 className="section-header">Skills</h2>
      <div className="terminal-window">
        <div className="terminal-header">
          <span className="terminal-dot"></span>
          <span className="terminal-dot"></span>
          <span className="terminal-dot"></span>
          <span className="terminal-title">skills.json</span>
        </div>
        <div className="terminal-body">
          <p className="prompt">cat skills.json | jq</p>
          <div className="skills-grid output">
            {skillCategories.map((category) => (
              <div key={category.title} className="skill-category">
                <h3 className="skill-category-title">{category.title}</h3>
                <div className="skill-list">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
