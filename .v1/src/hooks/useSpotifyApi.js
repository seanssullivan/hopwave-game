import axios from "axios";

export default class useSpotifyApi {
  constructor(setStatus, setMessage) {
    this.baseURL = "https://api.spotify.com/";
    this._playerInstance = undefined;
  }

  set player(playerInstance) {
    this._playerInstance = playerInstance;
  }
  
  /*
   * Connect to the Spotify API in order to manage playback.
   *
   * This requires to separate API calls:
   * 1. Transfer Spotify playback to the current device
   * 2. Direct the user's Spotify account to play the provided playlist
   *
   * Without the second API call, the Web Player SDK would play the last song they had listened to.
   */
  const setupSpotifyApiControls = (playerInstance, spotifyUri) => {
    transferPlaybackToDevice(playerInstance);
    initiatePlaybackOnDevice(playerInstance, spotifyUri);
  };

  /*
   * Transfer playback to the current device.
   */
  const transferPlaybackToDevice = async ({
    playerInstance: {
      _options: { getOAuthToken, id },
    },
  }) => {
    await getOAuthToken((access_token) => {
      // Transfer Spotify to current device
      axios({
        url: "/v1/me/player",
        baseURL: "https://api.spotify.com/",
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
        data: {
          device_ids: [id],
          play: false,
        },
      });
    });
  };

  const initiatePlaybackOnDevice = async ({
    spotifyUri,
    playerInstance: {
      _options: { getOAuthToken, id },
    },
  }) => {
    // Begin playback on current device
    await getOAuthToken((access_token) => {
      fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
        method: "PUT",
        body: JSON.stringify({
          context_uri: spotifyUri,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      });
    })
      .then((event) => {
        if (event.status === 403) {
          setStatus("premium_required");
          setMessage("premium required");
          console.log("you need to upgrade to premium for playback");
        } else {
          setStatus("playback_started");
          setMessage("playback started");
          console.log("playback started");
        }
      })
      .catch((error) => {
        setStatus("playback_error");
        setMessage("playback error");
        console.log("playback error: " + error);
      });
  };
}
