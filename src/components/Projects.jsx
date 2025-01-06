import React, { useContext, useEffect, useState } from "react";
import "../styles/Projects.css";
import { ScreenContext } from "../context/ScreenContextProvider";

function Projects() {
  const { screenSize } = useContext(ScreenContext);
  const [alexIndex, setAlexIndex] = useState(0);

  const alexImages = [
    "./images/alex-home.png",
    "./images/alex-project.png",
    "./images/alex-vtubers.png",
  ];

  // Change picture every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAlexIndex((prevIndex) => (prevIndex + 1) % alexImages.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [alexImages.length]);

  return (
    <div className="project-container">
      <div className="portfolio-project">
        <img
          className="alex-portfolio-image"
          alt="Alex portfolio project"
          src={alexImages[alexIndex]}
        />
      </div>
      <div className="project-explaination">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam,
          blanditiis ullam! Vel et aliquid nesciunt numquam! Quis facere commodi
          dolor!
        </p>
        <PortfolioButtons />
      </div>
    </div>
  );
}

function PortfolioButtons() {
  return (
    <div className="portfolio-button-container">
      <button
        className="project-button github"
        onClick={() =>
          window.open("https://github.com/ItsChan-afk/alex-portfolio", "_blank")
        }
        aria-label="View project on GitHub"
      >
        View On Github
      </button>
      <button
        className="project-button view"
        onClick={() =>
          window.open("https://portfolio-for-alex.vercel.app", "_blank")
        }
        aria-label="View live project"
      >
        View Project
      </button>
    </div>
  );
}

export default Projects;
