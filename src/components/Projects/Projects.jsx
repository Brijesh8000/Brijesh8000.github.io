
import { Link } from "react-router";
import "./Projects.css";

const projects = [
  {
    number: "01",
    name: "Student Management System",
    category: "Backend / Web Application",
    description:
      "A student management application for managing student records through backend operations and database integration.",

    features: [
      "Add and register student records",
      "Retrieve student information",
      "Update and delete student records",
      "REST APIs for student operations",
      "Database integration",
    ],

    technologies: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "MySQL",
      "REST APIs",
    ],

    githubUrl:
      "https://github.com/Brijesh8000/Student_Manegement_System",

    liveUrl: "YOUR_STUDENT_APP_LIVE_URL",
  },

  {
    number: "02",
    name: "Real-Time Chat Application",
    category: "Real-Time Communication",
    description:
      "A real-time chat application where multiple users can join a common room and exchange messages with other participants.",

    features: [
      "Multiple users can join a chat room",
      "Real-time message exchange",
      "Messages shared with room participants",
      "Interactive chat interface",
      "Multi-user communication",
    ],

    technologies: [
      "React.js",
      "JavaScript",
      "CSS",
      "WebSocket",
      "Java Spring Boot"
    ],

    githubUrl:
      "https://github.com/Brijesh8000/Real_Time_Chat_Application",

    liveUrl: "YOUR_CHAT_APP_LIVE_URL",
  },
];

function Projects() {
  return (
    <main className="projects-page">
      <div className="projects-container">

        {/* Page Header */}
        <header className="projects-header">
          <p className="projects-eyebrow">MY WORK</p>

          <h1>
            My <span>Projects</span>
          </h1>

          <p className="projects-intro">
            Here are some applications I've built while developing
            my software development skills. Explore the source code
            and live demos to learn more about my work.
          </p>
        </header>

        {/* Project Cards */}
        <section className="projects-grid">
          {projects.map((project) => (
            <article
              className="project-card"
              key={project.number}
            >
              <div className="project-card-top">
                <span className="project-number">
                  PROJECT {project.number}
                </span>
              </div>

              <p className="project-category">
                {project.category}
              </p>

              <h2>{project.name}</h2>

              <p className="project-description">
                {project.description}
              </p>

              {/* Features */}
              <div className="project-features">
                <h3>Key Features</h3>

                <ul>
                  {project.features.map((feature) => (
                    <li key={feature}>
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="project-technologies">
                <h3>Technologies Used</h3>

                <div className="project-tags">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* GitHub and Live Demo Links */}
              <div className="project-card-footer">
                <div className="project-actions">
                  <a
                    href={project.githubUrl}
                    className="project-action github-action"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Code <span>↗</span>
                  </a>

                  {project.liveUrl &&
                    !project.liveUrl.startsWith("YOUR_") && (
                      <a
                        href={project.liveUrl}
                        className="project-action live-action"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo <span>↗</span>
                      </a>
                    )}
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Closing Section */}
        <section className="projects-cta">
          <p className="projects-eyebrow">HAVE AN IDEA?</p>

          <h2>Let's build something meaningful.</h2>

          <p>
            I'm always learning and improving by building practical
            applications. Feel free to connect with me to discuss
            my projects and development journey.
          </p>

          <Link
            to="/contact"
            className="projects-contact-button"
          >
            Contact Me <span>↗</span>
          </Link>
        </section>

      </div>
    </main>
  );
}

export default Projects;
