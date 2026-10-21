import { Link } from "react-router";
import "./Hero.css";


function Hero() {
  return (
    <div>
    <section className="hero" id="home">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <p className="hero-badge">
            <span className="status-dot"></span>
            JAVA FULL STACK DEVELOPER
          </p>

          <h1 className="hero-title">
            Hi, I'm <span className="hero-name">Brijesh Shaw</span>
            <br />
            I build things for the <span className="gradient-text">web.</span>
          </h1>

          <p className="hero-description">
            I'm a Java Full Stack Developer trainee passionate about
            building reliable web applications using Java, Spring Boot,
            React, and SQL. I enjoy solving problems and turning ideas
            into practical digital solutions.
          </p>

          <div className="hero-actions">
            <a href="/projects" className="hero-btn hero-btn-primary">
              View My Projects <span>↗</span>
            </a>

            <a href="/contact" className="hero-btn hero-btn-secondary">
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/Brijesh8000"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <span className="social-divider">/</span>

            <a
              href="https://www.linkedin.com/in/brijesh-s-538903235/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
             <span className="social-divider">/</span>
            <a
              href="https://leetcode.com/u/Brijesh8000/"
              target="_blank"
              rel="noreferrer"
            >
              LeetCode ↗
            </a>
          </div>
        </div>

        {/* Right Code Card */}
        <div className="hero-visual">
          <div className="hero-glow"></div>

          <div className="code-window">
            <div className="code-window-header">
              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span className="code-filename">Developer.java</span>
              <span className="window-menu">•••</span>
            </div>

            <div className="code-body">
              <div className="code-line">
                <span className="line-number">1</span>
                <code>
                  <span className="code-purple">public class</span>{" "}
                  <span className="code-yellow">Developer</span> {"{"}
                </code>
              </div>

              <div className="code-line">
                <span className="line-number">2</span>
                <code></code>
              </div>

              <div className="code-line">
                <span className="line-number">3</span>
                <code>
                  &nbsp;&nbsp;<span className="code-purple">String</span>{" "}
                  role = <span className="code-green">"Full Stack"</span>;
                </code>
              </div>

              <div className="code-line">
                <span className="line-number">4</span>
                <code>
                  &nbsp;&nbsp;<span className="code-purple">String</span>{" "}
                  backend = <span className="code-green">"Java"</span>;
                </code>
              </div>

              <div className="code-line">
                <span className="line-number">5</span>
                <code>
                  &nbsp;&nbsp;<span className="code-purple">String</span>{" "}
                  framework = <span className="code-green">"Spring Boot"</span>;
                </code>
              </div>

              <div className="code-line">
                <span className="line-number">6</span>
                <code>
                  &nbsp;&nbsp;<span className="code-purple">String</span>{" "}
                  frontend = <span className="code-green">"React"</span>;
                </code>
              </div>

              <div className="code-line">
                <span className="line-number">7</span>
                <code></code>
              </div>

              <div className="code-line">
                <span className="line-number">8</span>
                <code>
                  &nbsp;&nbsp;<span className="code-purple">void</span>{" "}
                  <span className="code-blue">buildProjects</span>() {"{"}
                </code>
              </div>

              <div className="code-line">
                <span className="line-number">9</span>
                <code>
                  &nbsp;&nbsp;&nbsp;&nbsp;learn();
                </code>
              </div>

              <div className="code-line">
                <span className="line-number">10</span>
                <code>
                  &nbsp;&nbsp;&nbsp;&nbsp;build();
                </code>
              </div>

              <div className="code-line">
                <span className="line-number">11</span>
                <code>
                  &nbsp;&nbsp;&nbsp;&nbsp;improve();
                </code>
              </div>

              <div className="code-line">
                <span className="line-number">12</span>
                <code>&nbsp;&nbsp;{"}"}</code>
              </div>

              <div className="code-line">
                <span className="line-number">13</span>
                <code>{"}"}</code>
              </div>
            </div>

            <div className="code-window-footer">
              <span className="footer-status">
                <span className="status-dot"></span>
                Always learning
              </span>
              <span>Java · React · Spring Boot</span>
            </div>
          </div>

          <div className="floating-card floating-card-top">
            <span className="floating-icon">{"</>"}</span>
            <div>
              <strong>Clean Code</strong>
              <p>Built with purpose</p>
            </div>
          </div>

          <div className="floating-card floating-card-bottom">
            <span className="floating-icon">✦</span>
            <div>
              <strong>Problem Solver</strong>
              <p>One step at a time</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        {/* <span>JAVA</span>
        <span className="bottom-dot">·</span>
        <span>SPRING BOOT</span>
        <span className="bottom-dot">·</span>
        <span>REACT</span>
        <span className="bottom-dot">·</span>
        <span>SQL</span> */}
      </div>
    </section>
    {/* // Add this section inside your component's return */}

{/* About Summary */}

{/* ================= ABOUT SUMMARY ================= */}
<section className="home-about">
  <div className="home-about-image">
    <img
  src={`${import.meta.env.BASE_URL}images/profile.png`}
  alt="My profile"
/>
  </div>

  <div className="home-about-content">
    <p className="home-about-label">
      <span className="about-label-line"></span>
      ABOUT ME
    </p>

    <h2>
      Turning ideas into
      <span> meaningful web experiences.</span>
    </h2>

    <p className="home-about-description">
      I'm a Java Full Stack Developer Trainee passionate about
      building modern web applications. I work with Java,
      Spring Boot, REST APIs, MySQL, and React.js while
      continuously improving my development and problem-solving skills.
    </p>

    <div className="home-about-highlights ">
      <div className="about-highlight">
        <span className="about-highlight-icon">&lt;/&gt;</span>
        <div>
          <h3>Full Stack Development</h3>
          <p>Frontend & Backend</p>
        </div>
      </div>

      <div className="about-highlight">
        <span className="about-highlight-icon" aria-hidden="true">
  {"{ }"}
</span>
        <div>
          <h3>Continuous Learning</h3>
          <p>Learning through projects</p>
        </div>
      </div>
    </div>

    <Link to="/about" className="home-about-link">
      More About Me <span>↗</span>
    </Link>
  </div>
</section>


{/* ================= SKILLS SUMMARY ================= */}
<section className="home-skills">
  <div className="home-section-heading">
    <p className="home-skills-label">MY TECH STACK</p>

    <h2>
      Tools I use to
      <span> build applications.</span>
    </h2>

    <p className="home-skills-description">
      My technical toolkit covers backend development, databases,
      frontend interfaces, and everyday development tools.
      I'm strengthening these skills through hands-on projects.
    </p>
  </div>

  <div className="home-skills-groups">
    <div className="home-skill-group">
      <span className="home-skill-group-number">01</span>
      <h3>Backend</h3>

      <div className="home-skills-tags">
        <span>Java</span>
        <span>Spring Boot</span>
        <span>REST APIs</span>
        <span>JDBC</span>
      </div>
    </div>

    <div className="home-skill-group">
      <span className="home-skill-group-number">02</span>
      <h3>Frontend</h3>

      <div className="home-skills-tags">
        <span>React.js</span>
        <span>JavaScript</span>
        <span>HTML5</span>
        <span>CSS3</span>
      </div>
    </div>

    <div className="home-skill-group">
      <span className="home-skill-group-number">03</span>
      <h3>Database & Tools</h3>

      <div className="home-skills-tags">
        <span>MySQL</span>
        <span>Oracle SQL</span>
        <span>Git</span>
        <span>GitHub</span>
      </div>
    </div>
  </div>

  <Link to="/skills" className="home-skills-link">
    Explore All Skills <span>↗</span>
  </Link>
</section>


{/* ================= PROJECTS SUMMARY ================= */}
<section className="home-projects">
  <div className="home-section-heading">
    <p className="home-projects-label">SELECTED WORK</p>

    <h2>
      Projects I've
      <span> built.</span>
    </h2>

    <p className="home-projects-description">
      I learn by building practical applications and solving
      development challenges. Here are two projects from my
      software development journey.
    </p>
  </div>

  <div className="home-projects-highlights">

    {/* Student Management System */}
    <article className="home-project-card">
      <div className="home-project-card-top">
        <div className="home-project-icon">
          <span>01</span>
        </div>

        <span className="home-project-type">WEB APPLICATION</span>
      </div>

      <h3>Student Management System</h3>

      <p>
        An application for managing student records, including
        creating, retrieving, updating, and deleting student
        information through backend operations.
      </p>

      <div className="home-project-tags">
        <span>Java</span>
        <span>Spring Boot</span>
        <span>REST APIs</span>
        <span>MySQL</span>
      </div>

      <Link to="/projects" className="home-project-link">
        Explore Project <span>↗</span>
      </Link>
    </article>


    {/* Real-Time Chat Application */}
    <article className="home-project-card">
      <div className="home-project-card-top">
        <div className="home-project-icon">
          <span>02</span>
        </div>

        <span className="home-project-type">REAL-TIME APPLICATION</span>
      </div>

      <h3>Real-Time Chat Application</h3>

      <p>
        A room-based chat application where multiple users can
        join the same room and exchange messages with other
        participants in real time.
      </p>

      <div className="home-project-tags">
        <span>Chat Rooms</span>
        <span>Multi-user</span>
        <span>Real-Time Messaging</span>
      </div>

      <Link to="/projects" className="home-project-link">
        Explore Project <span>↗</span>
      </Link>
    </article>

  </div>

  <div className="home-projects-bottom">
    <p>Interested in seeing more of my work?</p>

    <Link to="/projects" className="home-projects-link">
      View All Projects <span>↗</span>
    </Link>
  </div>
</section>
</div>

  );
}

export default Hero;
