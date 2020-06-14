const SpotifyAccess = {
  ALLOWED: "allowed",
  DENIED: "denied",
  NOT_REQUESTED: "not_requested",
  NO_PREMIUM: "no_premium",
};

export function getSpotifyAccess() {
  if (localStorage.getItem("SPOTIFY_ACCESS") === null) {
    return null;
  } else {
    switch (localStorage.getItem("SPOTIFY_ACCESS")) {
      case "not_requested":
        return SpotifyAccess.NOT_REQUESTED;
      case "denied":
        return SpotifyAccess.DENIED;
      case "allowed":
        return SpotifyAccess.ALLOWED;
      case "no_premium":
        return SpotifyAccess.NO_PREMIUM;
      default:
        return null;
    }
  }
}

export function setSpotifyAccess(access) {
  localStorage.setItem("SPOTIFY_ACCESS", access);
}

export function getSpotifyAccessToken() {
  return localStorage.getItem("SPOTIFY_AUTH_TOKEN");
}

export function setSpotifyAccessToken(token) {
  localStorage.setItem("SPOTIFY_AUTH_TOKEN", token);
}

export function setSpotifyTokenExpirationTime(time) {
  const now = new Date();
  const expirationTime = now.getTime() + Number(time) * 1000;
  localStorage.setItem("SPOTIFY_TOKEN_EXPIRATION_TIME", expirationTime + "");
}

export function getSpotifyTokenExpirationTime() {
  return Number(localStorage.getItem("SPOTIFY_TOKEN_EXPIRATION_TIME"));
}
