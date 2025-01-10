import React from "react";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import TechStacks from "./components/TechStacks";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Introduction />
      <TechStacks />
      <h2 style={{ width: "100%", textAlign: "center", color: "orange" , marginTop: "30px" }}>
        My Projects
      </h2>

      <Projects />
    </>
  );
}

export default App;
