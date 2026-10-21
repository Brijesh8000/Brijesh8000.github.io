
import { Link } from "react-router";
import "./Experience.css";

const experiences = [
  {
    period: "Jan 2026 – Present",
    role: "Java Full Stack Developer Trainee",
    company: "Dhee Coding Lab",
    location: "Bengaluru, India",
    type: "Training",
    description:
      "Learning and applying full-stack development concepts through practical exercises and project development.",
    responsibilities: [
      "Developing backend applications using Core Java and Spring Boot.",
      "Building REST APIs and integrating them with relational databases.",
      "Practicing SQL, CRUD operations, and database connectivity.",
      "Creating responsive user interfaces using HTML, CSS, JavaScript, and React.js.",
      "Using Git, GitHub, Maven, and Postman during development.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "MySQL",
      "React.js",
      "SQL",
      "Git",
    ],
  },
];

function Experience() {
  return (
    <main className="experience-page">
      <div className="experience-container">
        {/* Page Header */}
        <header className="experience-header">
          <p className="experience-eyebrow">MY PROFESSIONAL JOURNEY</p>

          <h1>
            Experience & <span>Training</span>
          </h1>

          <p className="experience-intro">
            My journey in software development, technical training,
            and practical application building.
          </p>
        </header>

        {/* Experience Timeline */}
        <section className="experience-timeline">
          {experiences.map((experience, index) => (
            <article
              className="experience-card"
              key={`${experience.company}-${experience.role}`}
            >
              <div className="experience-timeline-marker">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>

              <div className="experience-card-content">
                <div className="experience-top">
                  <div>
                    <span className="experience-type">
                      {experience.type}
                    </span>

                    <h2>{experience.role}</h2>

                    <h3>{experience.company}</h3>
                  </div>

                  <span className="experience-period">
                    {experience.period}
                  </span>
                </div>

                <p className="experience-location">
                  {experience.location}
                </p>

                <p className="experience-description">
                  {experience.description}
                </p>

                <h4>What I'm Learning & Practicing</h4>

                <ul className="experience-list">
                  {experience.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <h4>Technologies</h4>

                <div className="experience-technologies">
                  {experience.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Certification Section */}
        <section className="experience-certification">
          <div className="certification-icon">&lt;/&gt;</div>

          <div className="certification-content">
            <p className="experience-eyebrow">CERTIFICATION</p>

            <h2>Java Full Stack Development</h2>

            <p>
              Certification from Wipro, as listed in my professional
              training and learning background.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="experience-cta">
          <div>
            <p className="experience-eyebrow">WHAT'S NEXT?</p>

            <h2>Turning learning into practical solutions.</h2>

            <p>
              Explore my projects to see how I apply my technical
              skills to application development.
            </p>
          </div>

          <Link to="/projects" className="experience-button">
            Explore Projects <span>↗</span>
          </Link>
        </section>
      </div>
    </main>
  );
}

export default Experience;
