import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      {props.phonetic.audio ? (
        <audio
          src={props.phonetic.audio}
          controls
          className="audio-player"
        ></audio>
      ) : null}
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
