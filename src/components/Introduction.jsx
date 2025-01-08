import React from "react";
import "../styles/Introduction.css";

function Introduction() {
  return (
    <div className="intro-container">
      <div className="intro-text">
        <h3>
          Hi , I'm <span style={{ color: "red" }}>Chan</span>
        </h3>
        <h1>
          <span style={{ color: "orange" }}>FullStack Web Developer</span>
        </h1>
        <p style={{ color: "gray" }}>
          I’m a web developer who loves building stuff with the MERN stack. I
          enjoy creating clean, functional projects and learning new things
          along the way.
        </p>
        <div className="intro-button-container">
          <button className="intro-cv">Download CV</button>
          <button className="intro-github">View GitHub</button>
        </div>
      </div>
      <div className="intro-image">
        <img src="./images/my-pic.jpg" alt="my-picture" />
      </div>
    </div>
  );
}

export default Introduction;
