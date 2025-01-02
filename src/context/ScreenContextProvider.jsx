import React, { useEffect, useState } from "react";

function ScreenContextProvider() {
  const [screenSize, setScreenSize] = useState({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
  });

  useEffect(() => {
    
  }, []);

  return <div>ScreenContextProvider</div>;
}

export default ScreenContextProvider;
