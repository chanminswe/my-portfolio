    import React, { createContext, useEffect, useState } from "react";

    export const ScreenContext = createContext();

    function ScreenContextProvider({ children }) {
    const [screenSize, setScreenSize] = useState({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
    });

    //basically to readjust screenSize whenever needed
    useEffect(() => {
        function adjustScreen() {
        setScreenSize({
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight,
        });
        }

        window.addEventListener("resize", adjustScreen);

        return () => {
        window.removeEventListener("resize", adjustScreen);
        };
    }, []);

    return (
        <ScreenContext.Provider value={{ screenSize }}>
        {children}
        </ScreenContext.Provider>
    );
    }

    export default ScreenContextProvider;
