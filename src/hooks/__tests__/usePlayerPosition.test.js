import { renderHook, act } from "@testing-library/react-hooks";

import usePlayerPosition from "../usePlayerPosition";

describe("usePlayerPosition", () => {
  it("should return an array with two elements", () => {
    const { result } = renderHook(() => usePlayerPosition());
    expect(result.current).toBeInstanceOf(Array);
  });
  it("should return an array with a playerPosition and a setPlayerPosition function", () => {
    const { result } = renderHook(() => usePlayerPosition());
    expect(result.current[0]).toBeInstanceOf(Array);
    expect(result.current[1]).toBeInstanceOf(Function);
  });

  describe("setPlayerPosition", () => {
    it("should change the position", () => {
      const ref = { current: { position: { x: 5, y: 10, z: 20 } } };
      const { result } = renderHook(() => usePlayerPosition([0, 0, 0]));
      const setPosition = result.current[1];
      act(() => setPosition(ref));
      expect(result.current[0][0]).toBe(5);
      expect(result.current[0][1]).toBe(10);
      expect(result.current[0][2]).toBe(20);
    });
  });
});
