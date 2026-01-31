export function About() {
  return (
    <section className="section" id="about">
      <h2 className="section-header">About</h2>
      <div className="terminal-window">
        <div className="terminal-header">
          <span className="terminal-dot"></span>
          <span className="terminal-dot"></span>
          <span className="terminal-dot"></span>
          <span className="terminal-title">about.md</span>
        </div>
        <div className="terminal-body">
          <p className="prompt">cat about.md</p>
          <div className="about-content output">
            <p>
              I'm a software developer with a passion for building
              applications that solve real-world problems. With experience
              across the full stack, I enjoy working with modern technologies
              and frameworks to create efficient, scalable solutions.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or optimizing my development
              workflow. I believe in writing clean, maintainable code and
              continuous learning.
            </p>
            <p>
              Currently focused on: building impactful software, learning
              system design, and shipping side projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
