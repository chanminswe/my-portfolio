import React from "react";
import "../styles/techstack.css";

function TechStacks() {
  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "40px", color: "purple" }}>
        My Tech Stacks
      </h2>
      <p style={{ textAlign: "center", color: "gray", fontSize: "17px" }}>
        Technologies I've worked with
      </p>
      <div className="techstack-container">
        <SingleStack
          src={
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          }
          language={"HTML"}
          explaination={"MarkUp Language"}
        />
      </div>
    </>
  );
}

function SingleStack({ src, language, explaination }) {
  return (
    <div className="tech">
      <img src={src} alt="HTML Icon" className="tech-icon" />
      <div className="tech-info">
        <p>{language}</p>
        <p>{explaination}</p>
      </div>
    </div>
  );
}

export default TechStacks;
