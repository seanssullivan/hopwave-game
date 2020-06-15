import React, { useState } from "react";
import "./AudioController.scss";

export default function AudioController(props) {
  const { album, artist, pause, play, next, artwork } = props;

  return (
    <div className="body-wrapper">
      <div className="casette-box">
        <div className="speaker"></div>
        <div className="artwork">
          <img
            className={"artwork"}
            src={artwork}
            onError={"this.onError = null"}
            alt=""
          ></img>
        </div>
        <div className="branding">
          <h2>{artist}</h2>
          <p id="record-text">{album}</p>
          <div className="label-group">
            {/* {props.children} */}
            <p onClick={play}>Play</p>
            <p onClick={next}>Next</p>
            <p onClick={pause}>Pause</p>
          </div>
        </div>
      </div>
    </div>
  );
}
