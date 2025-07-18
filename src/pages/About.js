import React from "react";
import "../css/About.css";

function About() {
  return (
    <div className="about-container">
      <section className="about-header">
        <div className="about-text">
          <h1>M V Arun Prasad</h1>
          <h3>Senior Software Engineer</h3>
          <p>
            I'm a software engineer specialised in frontend and backend
            development for complex scalable web apps. I write about software
            development on my <a href="#">blog</a>. Want to know how I may help
            your project? Check out my project <a href="#">portfolio</a> and{" "}
            <a href="#">online resume</a>.
          </p>

          <div className="about-buttons">
            <a href="#" className="btn btn-primary" aria-label="View Portfolio">
              View Portfolio
            </a>
            <a href="#" className="btn btn-secondary" aria-label="View Resume">
              View Resume
            </a>
          </div>
        </div>

        <div className="about-image">
          <img
            src="https://static.vecteezy.com/system/resources/previews/036/280/651/original/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
            alt="Profile avatar of Simon Doe"
          />
        </div>
      </section>

      <section className="skills-section">
        <h2>What I do</h2>
        <p>
          I have more than 10 years' experience building software for clients
          all over the world. Below is a quick overview of my main technical
          skill sets and technologies I use.
        </p>

        <div className="skills-grid">
          {[
            ["Vanilla JavaScript", "JS"],
            ["Angular, React & Vue", "Angular"],
            ["Node.js", "Node"],
            ["Python & Django", "Python"],
            ["PHP", "PHP"],
            ["npm, Gulp & Grunt", "npm"],
            ["HTML & CSS", "HTML"],
            ["Sass & LESS", "Sass"],
          ].map(([title, icon]) => (
            <div className="skill-card" key={title}>
              <div className="skill-icon" aria-hidden="true">
                {icon}
              </div>
              <h4>{title}</h4>
              <p>
                List skills/technologies here. You can change the icon above to
                any of the 2000+ FontAwesome 5 icons available.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
