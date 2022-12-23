import React from "react";
import MediaDisplay from "./components/AudioController/MediaDisplay";
import Settings from "./components/Settings";

import "./styles/App.css";

export default function App() {
  const [playRain, setPlayRain] = React.useState(
    sessionStorage.getItem("playRain")
  );

  // Listen to updates to user settings
  React.useEffect(() => {
    const timer = setInterval(() => {
      setPlayRain(sessionStorage.getItem("playRain"));
    }, 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div className="App">
      <div className="MediaPlayer">
        <MediaDisplay playRain={playRain} />
      </div>

      <span className="SettingsBttn">
        <Settings />
      </span>
    </div>
  );
}
