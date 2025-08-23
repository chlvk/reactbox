import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import "./index.css";

const ToastSettings = {
  POSITION: "top-center",
  DURATION: 2000,
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer
      position={ToastSettings.POSITION}
      autoClose={ToastSettings.DURATION}
    />
    <App />
  </React.StrictMode>
);
