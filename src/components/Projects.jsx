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

  function changePicture() {
    setTimeout(() => {
      if (alexIndex < 2) {
        setAlexIndex(alexIndex + 1);
      } else {
        setAlexIndex(0);
      }
    }, 3000);
  }

  //for index
  changePicture();

  return (
    <div className="project-container">
      <div className="portfolio-project">
        <img
          className={`alex-portfolio-image`}
          alt="alex-portfolio-image"
          src={alexImages[alexIndex]}
        />
        <div className="portfolio-button-container">
          <button
            onClick={() =>
              window.open(
                "https://github.com/ItsChan-afk/alex-portfolio",
                "_blank"
              )
            }
          >
            View On Github
          </button>
          <button
            onClick={() => window.open("https://portfolio-for-alex.vercel.app")}
          >
            View Project
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
