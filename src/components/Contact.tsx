const contactLinks = [
  {
    label: "email",
    value: "dhanush.gowdhaman@gmail.com",
    href: "mailto:dhanush.gowdhaman@gmail.com",
  },
  {
    label: "github",
    value: "github.com/dhanush251201",
    href: "https://github.com/dhanush251201",
  },
  {
    label: "linkedin",
    value: "linkedin.com/in/dhanush-gowdhaman",
    href: "https://www.linkedin.com/in/dhanush-gowdhaman/",
  },
];

export function Contact() {
  return (
    <section className="section" id="contact">
      <h2 className="section-header">Contact</h2>
      <div className="terminal-window">
        <div className="terminal-header">
          <span className="terminal-dot"></span>
          <span className="terminal-dot"></span>
          <span className="terminal-dot"></span>
          <span className="terminal-title">contact.sh</span>
        </div>
        <div className="terminal-body">
          <p className="prompt">./contact.sh</p>
          <div className="contact-content output">
            <p>Let's connect! Feel free to reach out for collaborations,</p>
            <p>opportunities, or just to say hello.</p>
            <ul className="contact-list">
              {contactLinks.map((link) => (
                <li key={link.label} className="contact-item">
                  <span>{link.label}:</span>
                  <a
                    href={link.href}
                    className="contact-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
