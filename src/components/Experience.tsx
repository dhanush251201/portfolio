const experiences = [
  {
    role: "Software Developer",
    company: "Company Name",
    period: "2023 - Present",
    description: [
      "Built and maintained full-stack web applications using React and Node.js",
      "Collaborated with cross-functional teams to deliver features on schedule",
      "Improved application performance by 40% through code optimization",
    ],
  },
  {
    role: "Junior Developer",
    company: "Previous Company",
    period: "2022 - 2023",
    description: [
      "Developed RESTful APIs and integrated third-party services",
      "Participated in code reviews and implemented best practices",
      "Contributed to the migration of legacy systems to modern stack",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Startup Inc",
    period: "2021 - 2022",
    description: [
      "Assisted in developing frontend components using React",
      "Wrote unit tests and documentation for existing codebase",
      "Gained hands-on experience with agile development workflows",
    ],
  },
];

export function Experience() {
  return (
    <section className="section" id="experience">
      <h2 className="section-header">Experience</h2>
      <div className="terminal-window">
        <div className="terminal-header">
          <span className="terminal-dot"></span>
          <span className="terminal-dot"></span>
          <span className="terminal-dot"></span>
          <span className="terminal-title">experience.log</span>
        </div>
        <div className="terminal-body">
          <p className="prompt">cat experience.log</p>
          <div className="experience-list output">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="experience-header">
                  <span className="experience-role">{exp.role}</span>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <div className="experience-company">@ {exp.company}</div>
                <ul className="experience-description">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
