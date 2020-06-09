import { renderHook } from "@testing-library/react-hooks";

import useMovement from "../useMovement";

describe("useMovement", () => {
  it("should return a function", () => {
    const ref = { current: { position: { x: 0, y: 0, z: 0 } } };
    const { result } = renderHook(() => useMovement(ref, "x"));
    expect(result.current).toBeInstanceOf(Function);
  });
  describe("setMovement", () => {
    it("should change the position", () => {
      const ref = { current: { position: { x: 0, y: 0, z: 0 } } };
      const { result } = renderHook(() => useMovement(ref, "x"));
      result.current(5);
      expect(ref.current.position.x).toBe(5);
    });
    it("should call the callback when passed a callback function", () => {
      const ref = { current: { position: { x: 0, y: 0, z: 0 } } };
      const callback = jest.fn();
      const { result } = renderHook(() => useMovement(ref, "x", callback));
      result.current(5);
      expect(callback).toHaveBeenCalled();
    });
    it("should call the callback function with the mesh reference as an argument", () => {
      const ref = { current: { position: { x: 0, y: 0, z: 0 } } };
      const callback = jest.fn();
      const { result } = renderHook(() => useMovement(ref, "x", callback));
      result.current(10);
      expect(callback).toHaveBeenCalledWith(ref);
    });
  });
});
