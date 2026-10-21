
import { useState } from "react";
import { NavLink } from "react-router";
import "./Navbar.css";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const links = [
    { name: "Home", path: "/", end: true },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
  ];

  return (
    <header className="site-header">
      <nav className="navbar">
        {/* Logo */}
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          BR<span>.</span>DEV
        </NavLink>

        {/* Mobile menu button */}
        <button
          className={`navbar-toggle ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((previous) => !previous)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Navigation links */}
        <div className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          <div className="navbar-links">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.end}
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) =>
              `navbar-contact ${isActive ? "active" : ""}`
            }
          >
            Let's Talk <span aria-hidden="true">↗</span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
