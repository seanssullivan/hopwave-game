import React, { useState } from "react";
import { Carousel } from "react-motion-components";

// Import components
import { SpotifyPlayer, SpotifyIframe } from "./Spotify";

// Import hooks
import useTone from "../../hooks/useTone";
import { useEffect } from "react";

// export default function MusicPlayer(props) {
//   const { gameMode } = props;
//   const [playMusic, setPlayMusic] = useState(false);
//   const [spotifyMusicOn, setSpotifyMusicOn] = useState(false);
//   // const [tonePlayer, startTone, stopTone] = useTone;

//   return (
// <>
//   {playMusic && spotifyMusicOn && <SpotifyPlayer />}
//   {/* {playMusic && !spotifyMusicOn && (
//     <h1>{tonePlayer.loaded ? "Using Tone.js!" : "Buffering..."}</h1>
//   )} */}
//   {playMusic && !spotifyMusicOn && (
//     <h4 onClick={() => setSpotifyMusicOn(true)}>Spotify login</h4>
//   )}
//   {/* <h4>{playMusic || !gameMode ? "Spotify" : <SpotifyIframe />}</h4> */}
//   <h4 onClick={() => setPlayMusic((prev) => !prev)}>
//     sound:{playMusic ? "on" : "off"}
//   </h4>
// </>
//   );
// }

const defaultStyle = {
  width: 300,
  height: 300,
  margin: "100px auto",
};

const itemStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: 15,
  fontWeight: "bold",
  color: "white",
  margin: "0 auto",
};

export default function MusicPlayer(props) {
  const [index, setIndex] = useState(0);
  const [size, setSize] = useState(3);
  const [colors, setColors] = useState(["green", "red", "blue"]);
  const { gameMode } = props;
  const [playMusic, setPlayMusic] = useState(false);
  const [spotifyMusicOn, setSpotifyMusicOn] = useState(false);
  const [cubeSide, setCubeSide] = useState();
  // const [tonePlayer, startTone, stopTone] = useTone;

  // let prev = () => {
  //   setIndex(effect === "2d" ? (index > 0 ? index - 1 : size - 1) : index - 1);
  // };

  // let next = () => {
  //   setIndex(effect === "2d" ? (index < size - 1 ? index + 1 : 0) : index + 1);
  // };

  let move = (index) => {
    setIndex(index);
  };

  // useEffect(() => {
  //   Array.from({ length: size }, (x, i) => {
  //     setCubeSide(sideOfCube[i]);
  //     return (
  //       <div
  //         key={i}
  //         style={{
  //           ...defaultStyle,
  //           ...itemStyle,
  //           background: colors[i],
  //         }}
  //       >
  //         {cubeSide}
  //       </div>
  //     );
  //   });
  // }, [colors, cubeSide, sideOfCube, size]);

  return (
    <div>
      {/* <h1>Carousel</h1>
      <button onClick={prev}>prev</button>
      <button onClick={next}>next</button>
      {Array.from({ length: size }, (x, i) => {
        return (
          <button
            key={i}
            onClick={() => {
              move(i);
            }}
          >
            move {i}
          </button>
        );
      })} */}
      <div
        style={{
          ...defaultStyle,
        }}
      >
        <Carousel
          {...defaultStyle}
          direction={"horizontal"}
          effect={"3d"}
          index={index}
          onClick={() => {}}
          onChange={(index) => {
            move(index);
          }}
        >
          {[
            <div
              key={0}
              style={{ background: "green", ...defaultStyle, ...itemStyle }}
            >
              <h4 onClick={() => setPlayMusic((prev) => !prev)}>
                sound:{playMusic ? "on" : "off"}
              </h4>
            </div>,
            <div
              key={1}
              style={{ background: "red", ...defaultStyle, ...itemStyle }}
            >
              <h4>Tone.js Music!</h4>
            </div>,
            <div
              key={2}
              style={{ background: "blue", ...defaultStyle, ...itemStyle }}
            >
              {playMusic && spotifyMusicOn && <SpotifyPlayer />}
              {/* {playMusic && !spotifyMusicOn && (
      <h1>{tonePlayer.loaded ? "Using Tone.js!" : "Buffering..."}</h1>
    )} */}
              {playMusic && !spotifyMusicOn && (
                <h4 onClick={() => setSpotifyMusicOn(true)}>Spotify login</h4>
              )}
              {/* <h4>{playMusic || !gameMode ? "Spotify" : <SpotifyIframe />}</h4> */}
              <h4 onClick={() => setPlayMusic((prev) => !prev)}>
                sound:{playMusic ? "on" : "off"}
              </h4>
            </div>,
          ]}
        </Carousel>
      </div>
    </div>
  );
}
