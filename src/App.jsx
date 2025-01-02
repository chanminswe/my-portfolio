import React from "react";
import Navbar from "./components/Navbar";
import ScreenContextProvider from "./context/ScreenContextProvider";

function App() {
  return (
    <ScreenContextProvider>
      <Navbar />
    </ScreenContextProvider>
  );
}

export default App;
