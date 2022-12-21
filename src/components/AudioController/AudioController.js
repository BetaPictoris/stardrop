import React from "react";
import { getRandomSong, getTitle } from "./data";

export default function AudioController(props) {
  const [playing, setPlaying] = React.useState(false);
  const [title, setTitle] = React.useState("");

  // Start/Stop musicPlayer
  function toggleMusicPlayer() {
    const musicPlayer = document.getElementById("musicPlayer");

    updateMetadata();

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

    updateMetadata();

    musicPlayer.pause();
    musicPlayer.load();
    musicPlayer.play();
    setPlaying(true);
  }

  async function updateMetadata() {
    setTitle(await getTitle(document.getElementById("musicPlayerSource").src));
  }

  return (
    <>
      <audio id="musicPlayer" onEnded={updateSong}>
        <source id="musicPlayerSource" src={getRandomSong()} />
      </audio>

      <p>{playing ? title : "Not playing..."}</p>
      <button onClick={toggleMusicPlayer}>{playing ? "Pause" : "Play"}</button>
    </>
  );
}
