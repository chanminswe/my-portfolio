import React, { Fragment, useContext, useEffect, useState } from "react";
import "../styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { ScreenContext } from "../context/ScreenContextProvider";

function Navbar() {
  const { screenSize } = useContext(ScreenContext);
  const [isDropDown, setIsDropDown] = useState(false);

  return (
    <div className="nav-container">
      <p className="my-name">Chan Min Swe</p>

      {screenSize.screenWidth >= 500 ? (
        <div className="desktop-nav-container">
          <p>Tech Stacks</p>
          <p>Projects</p>
        </div>
      ) : (
        <div className="mobile-nav-container">
          <FontAwesomeIcon
            onClick={() => {
              setIsDropDown(!isDropDown);
              console.log(isDropDown);
            }}
            className="bars-icon"
            icon={faBars}
          />
          {isDropDown && (
            <div className="dropdown-container">
              <div className="dropdown-item">Tech Stacks</div>
              <div className="dropdown-item">Projects</div>
            </div>
          )}
        </div>
      )}
      <div className="for-night-mode"></div>
    </div>
  );
}

export default Navbar;
