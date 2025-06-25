import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppGet from "./AppGet.jsx";
import AppPost from "./AppPost.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppGet />
    <AppPost />
  </StrictMode>
);
