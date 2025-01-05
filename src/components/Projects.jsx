import React, { useEffect, useState } from "react";
import "../styles/Projects.css";

function Projects() {
  const [alexIndex, setAlexIndex] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState("false");
  const alexImages = [
    "./images/alex-home.png",
    "./images/alex-project.png",
    "./images/alex-vtubers.png",
  ];

  function changePicture() {
    setTimeout(() => {
      if (alexIndex < 2) {
        setAlexIndex(alexIndex + 1);
      } else {
        setAlexIndex(0);
      }
    }, 3000);
  }

  function picutureEffect() {
    setTimeout(() => {
      setShouldAnimate(!shouldAnimate);
    }, 2000);
  }

  //for pictures
  picutureEffect();

  //for index
  changePicture();

  return (
    <div className="project-container">
      <div className="portfolio-project">
        <img
          className={`alex-portfolio-image ${shouldAnimate ? `slide-in` : ``}`}
          alt="alex-portfolio-image"
          src={alexImages[alexIndex]}
        />
        <div className="portfolio-button-container">
          <button>View On Github</button>
          <button>View Project</button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
