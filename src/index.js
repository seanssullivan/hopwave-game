import React from "react";
import ReactDOM from "react-dom";
import { Canvas } from "react-three-fiber";
import "./index.scss";

import * as serviceWorker from "./serviceWorker";
import Road from "./components/Road";

ReactDOM.render(
  <Canvas camera={{ position: [100, 25, 0] }} perspective>
    <ambientLight />
    <pointLight position={[100, 100, 100]} />
    <Road position={[100, 0, 0]} color={"white"} />
    <Road position={[0, 0, 0]} color={"orange"} />
    <Road position={[-100, 0, 0]} color={"blue"} />
    <Road position={[-200, 0, 0]} color={"red"} />
    <Road position={[-300, 0, 0]} color={"purple"} />
    <Road position={[-400, 0, 0]} color={"green"} />
    <Road position={[-500, 0, 0]} color={"cyan"} />
  </Canvas>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
