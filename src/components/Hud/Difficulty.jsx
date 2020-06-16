import React, { useState } from "react";

export default function Difficulty(props) {
  const { setDifficulty, setSpeed } = props;
  const [active, setActive] = useState("easy");
  return (
    <ul>
      <li
        className={`easy ${"easy" === active ? "bigText" : ""} transparent`}
        onClick={() => {
          setDifficulty((prev) => {
            if (prev === "MEDIUM") {
              setSpeed((prev) => prev - 2);
            }
            if (prev === "HARD") {
              setSpeed((prev) => prev - 4);
            }
            return "EASY";
          });
          setActive("easy");
        }}
      >
        easy
      </li>
      <li
        id={"medium"}
        className={`"medium" ${
          "medium" === active ? "bigText" : ""
        } transparent`}
        onClick={() => {
          setDifficulty((prev) => {
            if (prev === "EASY") {
              setSpeed((prev) => prev + 2);
            }
            if (prev === "HARD") {
              setSpeed((prev) => prev - 2);
            }
            return "MEDIUM";
          });
          setActive("medium");
        }}
      >
        medium
      </li>
      <li
        className={`"hard" ${"hard" === active ? "bigText" : ""} transparent`}
        onClick={() => {
          setDifficulty((prev) => {
            if (prev === "EASY") {
              setSpeed((prev) => prev + 4);
            }
            if (prev === "MEDIUM") {
              setSpeed((prev) => prev + 2);
            }
            return "HARD";
          });
          setActive("hard");
        }}
      >
        hard
      </li>
    </ul>
  );
}
