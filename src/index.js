import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./styles/index.css";

if (sessionStorage.getItem("setup") === "off") {
  sessionStorage.setItem("playRain", "off");
  sessionStorage.setItem("setup", "on");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
