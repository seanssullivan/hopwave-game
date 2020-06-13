// src/components/MusicPlayer/SpotifyAuthWindow.js

import { useEffect, useCallback } from "react";
import ReactDOM from "react-dom";

import { getSpotifyAccess } from "../../helpers/spotifyAccess";

// Import settings
import settings from "../../settings";
const { CLIENT_ID } = settings.SPOTIFY;

// Define constants
const SpotifyAccess = {
  ALLOWED: "allowed",
  DENIED: "denied",
  NOT_REQUESTED: "not_requested",
  NO_PREMIUM: "no_premium",
};

export default function SpotifyLogin(props) {
  const { setStatus, setToken, setMessage } = props;
  const container = document.createElement("div");

  const authorizeSpotifyFromStorage = useCallback(
    (event) => {
      if (event.key === "SPOTIFY_AUTH_TOKEN") {
        const spotifyAccessToken = event.newValue;

        const spotifyAccess = getSpotifyAccess();

        if (spotifyAccess === SpotifyAccess.DENIED) {
          setStatus(SpotifyAccess.DENIED);
          setMessage("spotify access denied");
        } else if (spotifyAccessToken !== null) {
          setToken(spotifyAccessToken);
          setStatus(SpotifyAccess.ALLOWED);
          setMessage("spotify token retrieved");
        }
      }
    },
    [setStatus, setToken, setMessage]
  );

  useEffect(() => {
    const urlPath = [
      "https://accounts.spotify.com/authorize",
      [
        `client_id=${CLIENT_ID}`,
        "response_type=token",
        `redirect_uri=${window.location.origin}`,
        "show_dialog=true",
        `scope=${encodeURIComponent(
          "streaming user-read-email user-read-private user-read-playback-state user-modify-playback-state"
        )}`,
      ].join("&"),
    ].join("?");
    window.open(urlPath, "width=600, height=500");
    window.addEventListener("storage", authorizeSpotifyFromStorage);
  }, [authorizeSpotifyFromStorage]);

  return ReactDOM.createPortal(props.children, container);
}
