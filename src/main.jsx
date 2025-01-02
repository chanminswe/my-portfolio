import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ScreenContextProvider from "./context/ScreenContextProvider";

createRoot(document.getElementById("root")).render(
  <ScreenContextProvider>
    <App />
  </ScreenContextProvider>
);
