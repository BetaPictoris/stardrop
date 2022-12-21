import React from "react";
import { getRandomSong } from "./data";

export default function AudioController(props) {
  const [playing, setPlaying] = React.useState(false);
  const [song, setSong] = React.useState(getRandomSong());

  // Start/Stop musicPlayer
  function toggleMusicPlayer() {
    const musicPlayer = document.getElementById("musicPlayer");

    if (playing) {
      musicPlayer.pause();
      setPlaying(false);
    } else {
      musicPlayer.play();
      setPlaying(true);
    }
  }

  return (
    <>
      <audio id="musicPlayer">
        <source src={song} />
      </audio>

      <button onClick={toggleMusicPlayer}>{playing ? "Pause" : "Play"}</button>
    </>
  );
}
