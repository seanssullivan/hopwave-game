// src/settings.js

// Global settings are defined here:
const GAME = {
  SPEED: 5,
  START_POSITION: [0, 3, -70],
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

// Shape component settings are defined here:
const SHAPE = {
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
    SPAWN: 100
  }

// Combine settings for export
const settings = { GAME, ROAD, ROAD_SEGMENT, SHAPE, CAR, PALM };
export default settings;
