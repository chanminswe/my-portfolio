import React from "react";
import "../styles/Profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <div className="picture-container">
        <img className="my-picture" src="./images/me-2.png" alt="my-picture" />
      </div>

      <div className="information-container">
        <h2>Hi, I'm Chan Min Swe and I'm a Web Developer</h2>
        <p>
          I'm passionate about building clean, functional, and user-friendly
          websites. Skilled in HTML, CSS, JavaScript, and frameworks like React,
          I’m eager to join a team where I can grow, collaborate, and contribute
          to meaningful projects.
        </p>
      </div>

      <div className="github-container">
        <button
          onClick={() => {
            window.open("https://github.com/chanminswe");
          }}
          className="github-button"
        >
          View Github
        </button>
        <button className="cv-button">Download CV</button>
      </div>
      <h3
        style={{
          width: "100%",
          textAlign: "center",
          marginTop: "30px",
          color: "gray",
        }}
      >
        My Tech Stack
      </h3>
      <Technology />
    </div>
  );
}

//for the technologies that I use

function Technology() {
  return (
    <div className="technologies-container">
      <div className="tech-container">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          alt="HTML Logo"
        />
        <h5>HTML</h5>
      </div>
      <div className="tech-container">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          alt="CSS Logo"
        />
        <h5>CSS</h5>
      </div>
      <div className="tech-container">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="JavaScript Logo"
        />
        <h5>JavaScript</h5>
      </div>
      <div className="tech-container">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          alt="React Logo"
        />
        <h5>React</h5>
      </div>
      <div className="tech-container">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          alt="Node.js Logo"
        />
        <h5>Node.js</h5>
      </div>
      <div className="tech-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
          alt="Express.js Logo"
          width="150"
        />

        <h5>Express </h5>
      </div>
      <div className="tech-container">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
          alt="mongodb.js Logo"
        />
        <h5>Mongo DB</h5>
      </div>
    </div>
  );
}

export default Profile;
