import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

//import Game from "./components/Game";
import App from "./components/App";
import "./index.scss";

// Import helpers
import {
  setSpotifyAccess,
  setSpotifyAccessToken,
  setSpotifyTokenExpirationTime,
} from "./helpers/spotifyAccess";
import decodeParams from "./helpers/decodeParams";

const SpotifyAccess = {
  ALLOWED: "allowed",
  DENIED: "denied",
  NOT_REQUESTED: "not_requested",
  NO_PREMIUM: "no_premium",
};

const hashStr = window.location.hash;
const searchStr = window.location.search;
const hashParams = decodeParams(hashStr.slice(1, hashStr.length));
const searchParams = decodeParams(searchStr.slice(1, searchStr.length));

if (hashParams.access_token) {
  // window.opener.postMessage(hashParams, "*");
  setSpotifyAccess(SpotifyAccess.ALLOWED);
  setSpotifyAccessToken(hashParams.access_token);
  setSpotifyTokenExpirationTime(hashParams.expires_in);
  window.close();
  // ReactDOM.render(<h1>Message posted...</h1>, document.getElementById("root"));
} else if (searchParams.error) {
  // window.opener.postMessage(searchParams, "*");
  setSpotifyAccess(SpotifyAccess.DENIED);
  window.close();
  // ReactDOM.render(<h1>An error occurred.</h1>, document.getElementById("root"));
} else {
  ReactDOM.render(<App />, document.getElementById("root"));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
