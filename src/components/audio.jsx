import React, { useState, useEffect } from "react";
import url from '../audio/audio.mp3'
function InlinePlayer({ audio }) {
  const [playing, setPlaying] = useState(false);

  const player = new Audio(
    url);

  useEffect(() => {
    playing ? player.play() : player.pause();

    // This is cleanup of the effect
    return () => player.pause();

  }, [playing]);
   // ^ Run the effect every time the `playing` is changed

  function togglePlay() {
    // Using the callback version of `setState` so you always
    // toggle based on the latest state
    setPlaying(s => !s);
  }

  return (
    <>
      <button style={{background: '#000d1a',
    borderRadius: '50px',   
    padding: '10px',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}} onClick={() => togglePlay()}>{playing ? "Stop" : "Play"}</button>
    </>
  );
}

export default InlinePlayer