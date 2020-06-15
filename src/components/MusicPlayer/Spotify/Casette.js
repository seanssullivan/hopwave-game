import React, { useState } from "react";
import "./Casette.scss";

export default function Cassette(props) {
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
            <p onClick={play}>Play</p>
            <p onClick={next}>Next</p>
            <p onClick={pause}>Pause</p>
          </div>
        </div>
        {/* <div className="button-group">
          <button onClick={play} type="button" className="btn btn-play">
            <i className="fa fa-play fa-2x" style={{ color: "#fff" }}></i>
          </button>
          <button onClick={next} type="button" className="btn btn-forward">
            <i
              className="fa fa-angle-double-right fa-2x"
              style={{ color: "#fff" }}
            ></i>
          </button>
          <button onClick={pause} type="button" className="btn btn-stop">
            <i className="fa fa-stop fa-2x" style={{ color: "#fff" }}></i>
          </button>
        </div> */}
      </div>
    </div>
  );
}
