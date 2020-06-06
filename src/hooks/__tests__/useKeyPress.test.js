import { renderHook, act } from "@testing-library/react-hooks";

import useKeyPress from "../useKeyPress";

describe("useKeyPress", () => {
  it("should initialize with default keyPress state of false", () => {
    const { result } = renderHook(() => useKeyPress("a"));
    expect(result.current.keyPressed).toBe(false);
  });

  it("should return a keyDown function", () => {
    const { result } = renderHook(() => useKeyPress("a"));
    expect(result.current).toHaveProperty("keyDown");
  });

  describe("keyDown", () => {
    it("should change state of keyPressed when called", () => {
      const { result } = renderHook(() => useKeyPress("a"));
      act(() => result.current.keyDown({ key: "a" }));
      expect(result.current.keyPressed).toBe(true);
    });
  });

  it("should return a keyUp function", () => {
    const { result } = renderHook(() => useKeyPress("a"));
    expect(result.current).toHaveProperty("keyUp");
  });
});
