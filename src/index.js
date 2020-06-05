import React from "react";
import ReactDOM from "react-dom";
import { Canvas } from "react-three-fiber";
import "./index.scss";

import * as serviceWorker from "./serviceWorker";
import Road from "./components/Road";
import Car from "./components/Car";

ReactDOM.render(
  <Canvas camera={{ position: [0, 25, -100] }} perspective="true">
    <ambientLight />
    <pointLight position={[100, 100, 100]} />
    <Road />
    <Car position={[0, 1, -70]} color={"white"} />
  </Canvas>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
