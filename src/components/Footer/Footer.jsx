import { Link } from "react-router";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="portfolio-footer">
      <div className="footer-container">
        {/* Footer Main Content */}
        <div className="footer-main">
          {/* Brand Section */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="footer-logo-bracket">&lt;</span>
              BrijeshShaw
              <span className="footer-logo-bracket">/&gt;</span>
            </Link>

            <p className="footer-description">
              Java Full Stack Developer Trainee passionate about building modern
              web applications using Java, Spring Boot, React.js, and MySQL.
              Focused on learning, solving problems, and creating practical
              software solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links-section">
            <h3>Quick Links</h3>

            <nav className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/skills">Skills</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/experience">Experience</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="footer-social-section">
            <h3>Connect With Me</h3>

            <p>
              Let's connect and discuss technology, projects, and development
              opportunities.
            </p>

            <div className="footer-social-links">
              <a
                href="https://github.com/Brijesh8000"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                GitHub <span>↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/brijesh-s-538903235/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                LinkedIn <span>↗</span>
              </a>
              <a
                href="https://leetcode.com/u/Brijesh8000/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                LeetCode <span>↗</span>
              </a>

              <a href="mailto:your.email@example.com" aria-label="Send email">
                Email <span>↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Brijesh Shaw | Java Full Stack
            Developer
          </p>

          <p className="footer-made-with">
            Designed & developed with <span>React</span>,{" "}
            <span>JavaScript</span>, and <span>CSS</span>.
            <br />
            Crafted with code by <span>Brijesh Shaw</span>.
          </p>

          <a href="#top" className="footer-back-top">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
