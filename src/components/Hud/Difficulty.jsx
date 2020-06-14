import React, { useState } from "react";

export default function Difficulty(props) {
  const { setDifficulty } = props;
  const [active, setActive] = useState("easy");
  return (
    <ul>
      <li
        className={`easy ${"easy" === active ? "bigText" : ""}`}
        onClick={() => {
          setDifficulty("EASY");
          setActive("easy");
        }}
      >
        easy
      </li>
      <li
        id={"medium"}
        className={`"medium" ${"medium" === active ? "bigText" : ""}`}
        onClick={() => {
          setDifficulty("MEDIUM");
          setActive("medium");
        }}
      >
        medium
      </li>
      <li
        className={`"hard" ${"hard" === active ? "bigText" : ""}`}
        onClick={() => {
          setDifficulty("HARD");
          setActive("hard");
        }}
      >
        hard
      </li>
    </ul>
  );
}
