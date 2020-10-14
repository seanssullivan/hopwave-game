import React from "react";
import "../components/Hud/index.scss";

export default function pointsMessage(points, gameMode) {
  const pointsMessage = function () {
    if (points >= 1 && gameMode) {
      return (
        <div class="sign">
          <span class="fast-flicker">N</span>i<span class="flicker"> c</span>e
        </div>
      );
    }

    if (points === 10 && gameMode) {
      return (
        <div class="sign">
          <span class="fast-flicker">Am</span>a<span class="flicker">zi</span>ng
        </div>
      );
    }
  };

  return [pointsMessage];
}
