import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="hero">
        <h1>👋 Hi, I'm Arun</h1>
        <p>React Developer & UI Enthusiast</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I create responsive, fast, and beautiful web apps using React and
          modern UI libraries.
        </p>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Portfolio Website:</strong> You're looking at it!
          </li>
          <li>
            <strong>Blog App:</strong> A simple markdown blog site.
          </li>
          <li>
            <strong>Weather Dashboard:</strong> Uses OpenWeatherMap API.
          </li>
        </ul>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>
          Email:{" "}
          <a href="mailto:youremail@example.com">youremail@example.com</a>
        </p>
        <p>
          GitHub:{" "}
          <a href="https://github.com/YOUR_USERNAME">
            github.com/YOUR_USERNAME
          </a>
        </p>
      </section>
    </div>
  );
}

export default App;
