import { Link, useLocation } from "react-router-dom";
import resumePdf from "../static/DhanushGowdhamanResume.pdf";

const sectionLinks = [
  { label: "home", href: "home" },
  { label: "about", href: "about" },
  { label: "experience", href: "experience" },
  { label: "skills", href: "skills" },
  { label: "projects", href: "projects" },
  { label: "contact", href: "contact" },
];

export function Navigation() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="nav">
      {sectionLinks.map((link) => (
        <a
          key={link.label}
          href={isHome ? `#${link.href}` : `/#${link.href}`}
          className="nav-link"
        >
          {link.label}
        </a>
      ))}
      <Link to="/photography" className="nav-link">
        photos
      </Link>
      <a
        href={resumePdf}
        className="nav-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        resume
      </a>
    </nav>
  );
}

export default Navigation;
