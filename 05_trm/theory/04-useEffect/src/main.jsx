import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import AppOnChange from "./AppOnChange.jsx";
import Timer from "./components/Timer.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <Timer />
      <App />
      <AppOnChange />
    </>
  </StrictMode>
);
