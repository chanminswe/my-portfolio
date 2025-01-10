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
      <p
        style={{
          width: "100%",
          textAlign: "center",
          color: "darkred",
          marginTop: "80px",
          fontSize: "24px", 
          fontWeight : '400'
        }}
      >
        Projects I've Worked on
      </p>
      <Projects />
    </>
  );
}

export default App;
