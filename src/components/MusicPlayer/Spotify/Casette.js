import React, { useState } from "react";
import "./Casette.scss";

export default function Cassette(props) {
  const { album, artist, pause, play, next, currentlyPlaying } = props;

  return (
    <div class="body-wrapper">
      <div class="casette-box">
        <div class="speaker"></div>
        <div class="tape">
          <div class="bg-circles">
            <span class="circles">
              <i class="cog fa fa-cog fa-4x"></i>
            </span>
            <span class="circles">
              <i class="cog fa fa-cog fa-4x"></i>
            </span>
          </div>
        </div>
        <div class="branding">
          <h2>{artist}</h2>
          <div class="label-group">
            <p id="record-text">{album}</p>
            <p>Play</p>
            <p>Rew</p>
            <p>For</p>
            <p>Stop</p>
            <p>Pause</p>
          </div>
        </div>
        <div class="button-group">
          <button type="button" class="btn btn-play">
            <i class="fa fa-circle fa-2x" style={{ color: "#fff" }}></i>
          </button>
          <button onClick={play} type="button" class="btn btn-play">
            <i class="fa fa-play fa-2x" style={{ color: "#fff" }}></i>
          </button>
          <button type="button" class="btn">
            <i
              class="fa fa-angle-double-left fa-2x"
              style={{ color: "#fff" }}
            ></i>
          </button>
          <button onClick={next} type="button" class="btn btn-forward">
            <i
              class="fa fa-angle-double-right fa-2x"
              style={{ color: "#fff" }}
            ></i>
          </button>
          <button onClick={pause} type="button" class="btn btn-stop">
            <i class="fa fa-stop fa-2x" style={{ color: "#fff" }}></i>
          </button>
          <button type="button" class="btn btn-stop">
            <i class="fa fa-pause fa-2x" style={{ color: "#fff" }}></i>
          </button>
        </div>
      </div>
    </div>
  );
}
