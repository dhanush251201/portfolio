export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="terminal-window">
        <div className="terminal-header">
          <span className="terminal-dot"></span>
          <span className="terminal-dot"></span>
          <span className="terminal-dot"></span>
          <span className="terminal-title">~/portfolio</span>
        </div>
        <div className="terminal-body">
          <p className="prompt">whoami</p>
          <div className="output">
            <p className="hero-greeting">Hello, World! I'm</p>
            <h1 className="hero-name">Dhanush Gowdhaman<span className="cursor"></span></h1>
            <p className="hero-title">Software Developer</p>
            <p className="hero-description">
              I build things for the web. Passionate about clean code,
              elegant solutions, and turning ideas into reality through software.
            </p>
          </div>
        </div>
      </div>

      <div className="ascii-divider">
{`═══════════════════════════════════════════════════════════════════════`}
      </div>
    </section>
  );
}

export default Hero;
