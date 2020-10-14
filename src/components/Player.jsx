import React, {Suspense} from "react";

import usePlayerPosition from "../hooks/usePlayerPosition";
import Car from "../components/Car"
import settings from "../settings";

const { START_POSITION } = settings.GAME;

export default function Player(props) {
  const { avgSpeed, setSpeed } = props;
  const [position, setPosition] = usePlayerPosition(START_POSITION);

  return (
    <Suspense fallback={null}>
      <Car
        avgSpeed={avgSpeed}
        setSpeed={setSpeed}
        position={position}
        setPosition={setPosition}
      />
    </Suspense>
  );
}