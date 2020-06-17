import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

// Import components
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

// Check url for parameters
const hashStr = window.location.hash;
const searchStr = window.location.search;

// Separate parameter strings into key-value pairs
const hashParams = decodeParams(hashStr.slice(1, hashStr.length));
const searchParams = decodeParams(searchStr.slice(1, searchStr.length));

if (hashParams.access_token) {
  // Set values in local storage
  setSpotifyAccess(SpotifyAccess.ALLOWED);
  setSpotifyAccessToken(hashParams.access_token);
  setSpotifyTokenExpirationTime(hashParams.expires_in);
  window.close();
} else if (searchParams.error) {
  setSpotifyAccess(SpotifyAccess.DENIED);
  window.close();
} else {
  ReactDOM.render(<App />, document.getElementById("root"));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
