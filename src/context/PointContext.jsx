import React, { useState, createContext, useContext } from "react";

export const PointContext = createContext({
  points: 0,
  setPoints: () => {},
});

// export function PointUpdater() {
//   const { points, setPoints } = useContext(PointContext);
//   return setPoints(points + 1);
// }

// const PointContextProvider = props => {
//   const setCurrentPoints =
// }

// export function PointContextProvider(props) {
//   const [points, setPoints] = useState(0);

//   return (
//     <PointContext.Provider value={{ points, setPoints }}>
//       {props.children}
//     </PointContext.Provider>
//   );
// }

// export function usePoints() {
//   const { points, setPoints } = useState(0);

//   const setCurrentPoints = React.useCallback(() => setPoints(points + 1), [
//     points,
//     setPoints,
//   ]);
//   return { points, setCurrentPoints };
// }
