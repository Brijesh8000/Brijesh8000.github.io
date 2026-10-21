import { Link } from "react-router";
import "./About.css";

const technologies = [
  "Java",
  "Spring Boot",
  "REST APIs",
  "MySQL",
  "SQL",
  "React.js",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Git & GitHub",
];

const focusAreas = [
  {
    number: "01",
    title: "Backend Development",
    description:
      "I work with Java, Spring Boot, SQL, and REST APIs to build application logic and backend services.",
  },
  {
    number: "02",
    title: "Frontend Development",
    description:
      "I use React.js, JavaScript, HTML, and CSS to create responsive and user-friendly interfaces.",
  },
  {
    number: "03",
    title: "Continuous Learning",
    description:
      "I keep strengthening my programming fundamentals, problem-solving skills, and software development practices.",
  },
];

function About() {
  return (
    <main className="about-page">
      <div className="about-container">
        {/* Page Heading */}
        <div className="about-heading">
          <p className="about-label">GET TO KNOW ME</p>

          <h1>
            About <span>Me</span>
          </h1>

          <p className="about-subtitle">
            A little about my journey, skills, and passion for software
            development.
          </p>
        </div>

        {/* Main About Section */}
        <section className="about-hero">
          <div className="about-content">
            <p className="about-intro">Hello, I'm a Java Full Stack Developer.</p>

            <h2>
              Turning ideas into
              <span> practical web applications.</span>
            </h2>

            <p>
              I am a Java Full Stack Developer Trainee who enjoys learning
              how modern web applications are designed and built. My main
              focus is on Java, Spring Boot, REST APIs, SQL, and React.js.
            </p>

            <p>
              I enjoy solving programming problems, understanding how
              backend and frontend technologies work together, and building
              projects that help me apply what I learn.
            </p>

            <p>
              My goal is to grow into a skilled software engineer by
              strengthening my fundamentals, writing clean code, and
              continuously improving through hands-on experience.
            </p>

            <div className="about-buttons">
              <Link to="/projects" className="about-btn primary-btn">
                Explore My Projects <span>↗</span>
              </Link>

              <Link to="/contact" className="about-btn secondary-btn">
                Contact Me
              </Link>
            </div>
          </div>

          {/* Developer Profile Card */}
          <div className="about-profile-card">
            <div className="profile-card-header">
              <span className="profile-dot"></span>
              <span>DEVELOPER PROFILE</span>
            </div>

            <div className="profile-avatar">{"</>"}</div>

            <h3>Java Full Stack Developer</h3>

            <p className="profile-role">Developer Trainee</p>

            <div className="profile-divider"></div>

            <div className="profile-detail">
              <span>Backend</span>
              <strong>Java & Spring Boot</strong>
            </div>

            <div className="profile-detail">
              <span>Frontend</span>
              <strong>React.js</strong>
            </div>

            <div className="profile-detail">
              <span>Database</span>
              <strong>MySQL & SQL</strong>
            </div>

            <div className="profile-status">
              <span className="status-indicator"></span>
              Learning · Building · Improving
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="about-section" id="about-tech">
          <div className="section-heading">
            <p className="about-label">MY TOOLKIT</p>
            <h2>Technologies I Work With</h2>
            <p>
              The tools and technologies I use while learning and building
              full-stack applications.
            </p>
          </div>

          <div className="technology-list">
            {technologies.map((technology) => (
              <span className="technology-badge" key={technology}>
                {technology}
              </span>
            ))}
          </div>
        </section>

        {/* Focus Areas Section */}
        <section className="about-section" id="about-focus">
          <div className="section-heading">
            <p className="about-label">WHAT I DO</p>
            <h2>My Development Focus</h2>
            <p>
              I focus on building a strong foundation and improving through
              practical development.
            </p>
          </div>

          <div className="focus-grid">
            {focusAreas.map((area) => (
              <article className="focus-card" key={area.number}>
                <span className="focus-number">{area.number}</span>

                <h3>{area.title}</h3>

                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Closing Section */}
        <section className="about-cta">
          <div>
            <p className="about-label">LET'S BUILD SOMETHING</p>
            <h2>Every project is a new opportunity to learn.</h2>
            <p>
              Explore my projects to see how I apply my skills in practice.
            </p>
          </div>

          <Link to="/projects" className="about-btn primary-btn">
            View My Work <span>↗</span>
          </Link>
        </section>
      </div>
    </main>
  );
}

export default About;