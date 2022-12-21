import React from "react";
import { getRandomSong } from "./data";

export default function AudioController(props) {
  const [playing, setPlaying] = React.useState(false);

  // Start/Stop musicPlayer
  function toggleMusicPlayer() {
    const musicPlayer = document.getElementById("musicPlayer");

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
    document.getElementById("musicPlayerSource").src = getRandomSong();

    musicPlayer.pause();
    musicPlayer.load();
    musicPlayer.play();
    setPlaying(true);
  }

  return (
    <>
      <audio id="musicPlayer" onEnded={updateSong}>
        <source id="musicPlayerSource" src={getRandomSong()} />
      </audio>

      <button onClick={toggleMusicPlayer}>{playing ? "Pause" : "Play"}</button>
    </>
  );
}
