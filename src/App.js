import MediaDisplay from "./components/AudioController/MediaDisplay";
import Settings from "./components/Settings";

import "./styles/App.css";

export default function App() {
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
