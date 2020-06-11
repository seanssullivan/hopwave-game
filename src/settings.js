// src/settings.js

// Global settings are defined here:
const GAME = {
  SPEED: 5,
  START_POSITION: [0, 3, -70],
};

// Road component settings are defined here:
const ROAD = {
  LENGTH: 10,
  CUTOFF: -200,
};

// Road Segment component settings are defined here:
const ROAD_SEGMENT = {
  WIDTH: 100,
  HEIGHT: 1,
  LENGTH: 100,
  COLOR: "cyan",
};

// Shape component settings are defined here:
const SHAPE = {
  SPAWN: 1500,
  RADIUS: 30,
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

//Spotify component settings are defined here:
const SPOTIFY = {
  TOKEN:
    "BQCroovvXtr4F1eJpQQgp9cQK5TvDiCVWlG7avEKr0qq8ix04kLH4mPWFVOTfhHSQv-mbotfa8vTTSzboF_i8ebcj_-BnKPGzrzQiCYYI3s58rchxjIvl803MX9s8rXOTHZ9AB7X7wcDPVOOAx-SDQaOhJWDh0C2I2J_99pYcXqLTOr6EovfOWw",
};

// Combine settings for export
const settings = { GAME, ROAD, ROAD_SEGMENT, SHAPE, CAR, PALM, SPOTIFY };
export default settings;
