// src/settings.js

// Global settings are defined here:
const GAME = {
  SPEED: 5,
};

// Road component settings are defined here:
const ROAD = {
  LENGTH: 7,
  CUTOFF: -200,
};

// Road Segment component settings are defined here:
const ROAD_SEGMENT = {
  WIDTH: 100,
  HEIGHT: 1,
  LENGTH: 100,
  COLOR: "cyan",
};

// Car component settings are defined here:
const CAR = {
  WIDTH: 20,
  HEIGHT: 5,
  LENGTH: 20,
  COLOR: "white",
  ACCELERATION: 0.25,
};

// Combine settings for export
const settings = { GAME, ROAD, ROAD_SEGMENT, CAR };
export default settings;
