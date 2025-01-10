import React from "react";
import "../styles/projects.css";

function Projects() {
  return (
    <div className="projects-container">
      <div className="project">
        <img
          className="project-image"
          src="./images/exam-manager.png"
          alt="project-1"
        />
        <p className="project-paragraph">
          A web app for admins and students. Admins can create questions, manage
          users, and view results. Students can log in, take exams, see their
          results, and review answers. Built with React, Node.js, Express,
          MongoDB and Tailwind CSS. Authentication is secure with JWT and
          cookies.
        </p>
        <div className="project-buttons">
          <button
            onClick={() => window.open("")}
            className="project-live-button"
          >
            Live
          </button>
          <button className="project-github-button">GitHub</button>
        </div>
      </div>
      <div className="project">
        <img
          className="project-image"
          src="./images/alex-vtubers.png"
          alt="project-1"
        />
        <p className="project-paragraph">
          A visually appealing and responsive portfolio showcasing an artist's
          work. Built with React, HTML, and CSS, it uses lazy loading for
          optimized performance and smooth image scrollers for an engaging user
          experience. Designed with a mobile-first approach to ensure seamless
          viewing on all devices.
        </p>
        <div className="project-buttons">
          <button
            onClick={() => window.open("")}
            className="project-live-button"
          >
            Live
          </button>
          <button className="project-github-button">GitHub</button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
