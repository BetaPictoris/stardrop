import React from "react";
import MediaDisplay from "./components/AudioController/MediaDisplay";
import Settings from "./components/Settings";

import "./styles/App.css";

export default function App() {
  const [playRain] = React.useState(window.sessionStorage.getItem("playRain"));

  return (
    <div className="App">
      <div className="MediaPlayer">
        <MediaDisplay />
      </div>

      <span className="SettingsBttn">
        <Settings />
      </span>
    </div>
  );
}
