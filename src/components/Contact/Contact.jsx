
import { useState } from "react";
import "./Contact.css";

const CONTACT_EMAIL = "brijeshshaw8000@gmail.com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailSubject = encodeURIComponent(
      formData.subject || `Portfolio enquiry from ${formData.name}`
    );

    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );

    window.location.href =
      `mailto:${CONTACT_EMAIL}?subject=${emailSubject}&body=${emailBody}`;
  };

  return (
    <main className="contact-page">
      <div className="contact-container">
        {/* Page Header */}
        <header className="contact-header">
          <p className="contact-eyebrow">GET IN TOUCH</p>

          <h1>
            Let's <span>Connect</span>
          </h1>

          <p className="contact-intro">
            Have a project idea, a job opportunity, or just want to
            discuss technology? Feel free to contact me. I'd be happy
            to connect with you.
          </p>
        </header>

        {/* Contact Content */}
        <section className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info">
            <p className="contact-section-label">CONTACT INFORMATION</p>

            <h2>Let's start a conversation.</h2>

            <p className="contact-info-description">
              I'm interested in software development opportunities,
              collaborative projects, and connecting with other
              developers.
            </p>

            <div className="contact-detail">
  <div className="contact-detail-icon">@</div>

  <div>
    <h3>Contact Me by Email</h3>

    <a href={`mailto:${CONTACT_EMAIL}`}>
      Send Me an Email ↗
    </a>
  </div>
</div>

            <div className="contact-detail">
              <div className="contact-detail-icon">&lt;/&gt;</div>

              <div>
                <h3>GitHub</h3>
                <a
                  href="https://github.com/Brijesh8000"
                  target="_blank"
                  rel="noreferrer"
                >
                  Explore My Code
                </a>
              </div>
            </div>
            <div className="contact-detail">
  <div className="contact-detail-icon leetcode-icon">
    LC
  </div>

  <div>
    <h3>LeetCode</h3>

    <a
      href="https://leetcode.com/u/Brijesh8000/"
      target="_blank"
      rel="noopener noreferrer"
    >
      View My Coding Profile
    </a>
  </div>
</div>

            <div className="contact-detail">
              <div className="contact-detail-icon">in</div>

              <div>
                <h3>LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/your-profile/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Connect Professionally
                </a>
              </div>
            </div>
            

            <div className="contact-availability">
              <span className="contact-status-dot"></span>
              Open to learning, collaboration, and suitable opportunities
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-card">
            <div className="contact-form-heading">
              <h2>Send Me a Message</h2>
              <p>Fill out the form below to get in touch.</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">Your Name</label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">Your Email</label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-subject">Subject</label>

                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="What would you like to discuss?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">Your Message</label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows="6"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="contact-submit-btn">
                Send Message <span>↗</span>
              </button>

              <p className="contact-form-note">
                Your default email application will open with your
                message prepared for sending.
              </p>
            </form>
          </div>
        </section>

        {/* Footer Message */}
        <section className="contact-bottom">
          <p>Thanks for visiting my portfolio.</p>
          <h2>Looking forward to connecting with you!</h2>
        </section>
      </div>
    </main>
  );
}

export default Contact;
