import AudioController from "./AudioController";

import "./styles/MediaDisplay.scss";

export default function MediaDisplay(props) {
  return (
    <div className="MediaDisplay">
      <div className="MediaDisplayInner">
        <AudioController playRain={props.playRain} />
      </div>
    </div>
  );
}
