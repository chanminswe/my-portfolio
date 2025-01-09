import React from "react";
import "../styles/techstack.css";

function TechStacks() {
  const myTechs = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
      language: "HTML",
      explaination: "Defines the structure of web pages.",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
      language: "CSS",
      explaination: "Styles web pages visually.",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      language: "JavaScript",
      explaination: "Adds interactivity to web pages.",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      language: "React",
      explaination: "Builds user interfaces for web apps.",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      language: "Tailwind CSS",
      explaination: "Utility-first CSS framework.",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      language: "Node.js",
      explaination: "JavaScript runtime for backend development.",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      language: "GitHub",
      explaination: "Version control and collaboration platform.",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      language: "Express",
      explaination: "Minimalist web framework for Node.js.",
    },
  ];

  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "40px", color: "purple" }}>
        My Tech Stacks
      </h2>
      <p style={{ textAlign: "center", color: "gray", fontSize: "17px" }}>
        Technologies I've worked with
      </p>
      <div className="techstack-container">
        {myTechs.map((value, index) => (
          <SingleStack
            src={value.src}
            language={value.language}
            explaination={value.explaination}
            key={index}
          />
        ))}
      </div>
    </>
  );
}

function SingleStack({ src, language, explaination }) {
  return (
    <div className="tech">
      <img src={src} alt={language} className="tech-icon" />
      <div className="tech-info">
        <p style={{ fontSize: "12px", fontWeight: "bold", color: "purple" }}>
          {language}
        </p>
        <p style={{ fontSize: "10px", color: "gray" }}>{explaination}</p>
      </div>
    </div>
  );
}

export default TechStacks;
