import React, { useState } from "react";

export default function Difficulty(props) {
  const { setDifficulty, setAvgSpeed } = props;
  const [active, setActive] = useState("easy");
  return (
    <ul>
      <li
        className={`easy ${"easy" === active ? "bigText" : ""} transparent`}
        onClick={() => {
          setDifficulty((prev) => {
            if (prev === "MEDIUM") {
              setAvgSpeed((prev) => prev - 2);
            }
            if (prev === "HARD") {
              setAvgSpeed((prev) => prev - 4);
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
              setAvgSpeed((prev) => prev + 2);
            }
            if (prev === "HARD") {
              setAvgSpeed((prev) => prev - 2);
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
              setAvgSpeed((prev) => prev + 4);
            }
            if (prev === "MEDIUM") {
              setAvgSpeed((prev) => prev + 2);
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
