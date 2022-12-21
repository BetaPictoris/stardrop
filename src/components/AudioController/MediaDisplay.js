import AudioController from "./AudioController";

import "./styles/MediaDisplay.scss";

export default function MediaDisplay() {
  return (
    <div className="MediaDisplay">
      <div className="MediaDisplayInner">
        <AudioController />
      </div>
    </div>
  );
}
