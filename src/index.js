import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./styles/index.css";

const preloadImage = [
  "//cdn.ozx.me/sdv/stop.png",
  "//cdn.ozx.me/sdv/play.png",
  "//cdn.ozx.me/sdv/background.png",
  "//cdn.ozx.me/sdv/options.png",
  "//cdn.ozx.me/sdv/menu_border.png",
];

for (let i = 0; i < preloadImage.length; i++) {
  var img = new Image();
  img.src = preloadImage[i];
}

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
