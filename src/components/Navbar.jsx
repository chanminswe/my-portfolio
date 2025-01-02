import React, { Fragment, useContext } from "react";
import "../styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { ScreenContext } from "../context/ScreenContextProvider";

function Navbar() {
  const { screenSize } = useContext(ScreenContext);
  

  return (
    <div className="nav-container">
      <p className="my-name">Chan Min Swe</p>
      {/* for responsive nav bar     */}
      {screenSize.screenWidth >= 700 ? (
        <div className="desktop-nav-container">
          <p>About</p>
          <p>Projects</p>
        </div>
      ) : (
        <div className="mobile-nav-container">
          <FontAwesomeIcon 
          className="bars-icon"
          icon={faBars} />
        </div>
      )}
    </div>
  );
}

export default Navbar;
