import { Link } from "react-router";
import "./Skills.css";

const skillCategories = [
  {
    number: "01",
    title: "Backend Development",
    description:
      "Building application logic, backend services, and REST APIs.",
    skills: [
      "Core Java",
      "OOP",
      "Collections Framework",
      "Exception Handling",
      "JDBC",
      "Spring Boot",
      "REST APIs",
      "Spring Data JPA",
    ],
  },
  {
    number: "02",
    title: "Frontend Development",
    description:
      "Creating responsive and interactive user interfaces.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "ES6+",
      "React.js",
      "React Router",
      "Responsive Design",
    ],
  },
  {
    number: "03",
    title: "Database Management",
    description:
      "Working with relational databases and SQL queries.",
    skills: [
      "MySQL",
      "Oracle SQL",
      "CRUD Operations",
      "Joins",
      "Primary & Foreign Keys",
      "Database Relationships",
    ],
  },
  {
    number: "04",
    title: "Development Tools",
    description:
      "Using tools to develop, test, and manage applications.",
    skills: [
      "Git",
      "GitHub",
      "Maven",
      "Postman",
      "VS Code",
      "Spring Boot Tools",
    ],
  },
];

function Skills() {
  return (
    <main className="skills-page">
      <div className="skills-container">
        {/* Page Header */}
        <header className="skills-header">
          <p className="skills-eyebrow">MY TECHNICAL TOOLKIT</p>

          <h1>
            Skills & <span>Technologies</span>
          </h1>

          <p className="skills-intro">
            Technologies and tools I use while learning, developing,
            and building full-stack web applications.
          </p>
        </header>

        {/* Skill Categories */}
        <section className="skills-grid">
          {skillCategories.map((category) => (
            <article className="skills-card" key={category.number}>
              <div className="skills-card-top">
                <span className="skills-number">
                  {category.number}
                </span>

                <span className="skills-card-mark">&lt;/&gt;</span>
              </div>

              <h2>{category.title}</h2>

              <p className="skills-card-description">
                {category.description}
              </p>

              <div className="skills-divider"></div>

              <div className="skills-tags">
                {category.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </section>

        {/* Current Focus */}
        <section className="skills-focus">
          <div className="skills-focus-content">
            <p className="skills-eyebrow">CURRENTLY FOCUSING ON</p>

            <h2>Learning by building real projects.</h2>

            <p>
              I am strengthening my Java and Spring Boot fundamentals,
              developing REST APIs, connecting applications with
              databases, and improving my React skills through
              hands-on practice.
            </p>
          </div>

          <Link to="/projects" className="skills-project-link">
            Explore My Projects <span>↗</span>
          </Link>
        </section>
      </div>
    </main>
  );
}

export default Skills;