import React from "react";
import { getRandomSong, getTitle } from "./data";

import "./styles/AudioController.scss";

export default function AudioController(props) {
  const [playing, setPlaying] = React.useState(false);
  const [title, setTitle] = React.useState("");

  // Start/Stop musicPlayer
  function toggleMusicPlayer() {
    const musicPlayer = document.getElementById("musicPlayer");
    setTitle("...");

    if (playing) {
      musicPlayer.pause();
      setPlaying(false);
    } else {
      musicPlayer.load();
      musicPlayer.play();
      setPlaying(true);
    }
  }

  // Sets a new URL for "song"
  function updateSong() {
    const musicPlayer = document.getElementById("musicPlayer");
    const newSong = getRandomSong();
    document.getElementById("musicPlayerSource").src = newSong;
    setTitle("...");

    musicPlayer.pause();
    musicPlayer.load();
    musicPlayer.play();
    setPlaying(true);
    updateMetadata();
  }

  async function updateMetadata() {
    const url = document.getElementById("musicPlayerSource").src;
    setTitle(await getTitle(url));
  }

  function handleMediaKeyPause() {
    setPlaying(false);
  }

  return (
    <div className="AudioController">
      <audio
        id="musicPlayer"
        onEnded={updateSong}
        onPlay={updateMetadata}
        onPause={handleMediaKeyPause}
      >
        <source id="musicPlayerSource" src={getRandomSong()} />
      </audio>

      <p className="songTitle">{playing ? title : "Not playing!"}</p>
      <button
        className="AudioControllerBttn ImageButton"
        onClick={toggleMusicPlayer}
      >
        <img
          width="40px"
          src={
            playing ? "//cdn.ozx.me/sdv/stop.png" : "//cdn.ozx.me/sdv/play.png"
          }
          alt={playing ? "Pause" : "Play"}
        />
      </button>
    </div>
  );
}
