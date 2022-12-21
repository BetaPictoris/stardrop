import React from "react";

export default function AudioController(props) {
  const [playing, setPlaying] = React.useState(false);

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
        <source src="//cdn.ozx.me/sdv/music/Seasons/Fall/GhostSynth.mp3" />
      </audio>

      <button onClick={toggleMusicPlayer}>{playing ? "Pause" : "Play"}</button>
    </>
  );
}
