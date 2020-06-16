// src/settings.js

// Global settings are defined here:
const GAME = {
  SPEED: 5,
  START_POSITION: [0, 3, -70],
  DIFFICULTY: {
    HARD: 1000,
    MEDIUM: 1500,
    EASY: 2500,
  },
};

// Road component settings are defined here:
const ROAD = {
  LENGTH: 10,
  CUTOFF: -200,
  COLORS: ["#440dd5", "#04005e"],
};

// Road Segment component settings are defined here:
const ROAD_SEGMENT = {
  WIDTH: 100,
  HEIGHT: 1,
  LENGTH: 100,
  COLOR: "#4deeea",
};

// Shape component settings are defined here:
const SHAPE = {
  SPAWN: 1500,
  RADIUS: 30,
  RESIZE: {
    HARD: 10,
    MEDIUM: 5,
    EASY: 0,
  },
};

// Car component settings are defined here:
const CAR = {
  WIDTH: 20,
  HEIGHT: 5,
  LENGTH: 20,
  COLOR: "white",
  ACCELERATION: 0.25,
  TURN_SPEED: 0.75,
  ROTATION: 0.01,
  get BOUNDARY() {
    return ROAD_SEGMENT.WIDTH / 2 - this.WIDTH / 2;
  },
};
// PalmTrees component setting are defined here:
const PALM = {
  CUTOFF: -200,
  SPAWN: 100,
};

// Spotify component settings are defined here:
const SPOTIFY = {
  CLIENT_ID: process.env.REACT_APP_CLIENT_ID,
  SPOTIFY_URI: "spotify:playlist:3PPbbsJhktmX5Cp6syx7gR", // Sample Vaporwave playlist
};

// Combine settings for export
const settings = { GAME, ROAD, ROAD_SEGMENT, SHAPE, CAR, PALM, SPOTIFY };
export default settings;
