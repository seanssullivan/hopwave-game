import { renderHook } from "@testing-library/react-hooks";

import useReposition from "../useReposition";

describe("useReposition", () => {
  it("should return a function", () => {
    const ref = { current: { position: { x: 0, y: 0, z: 0 } } };
    const { result } = renderHook(() => useReposition(ref));
    expect(result.current).toBeInstanceOf(Function);
  });
  describe("reposition", () => {
    it("should change the position", () => {
      const ref = { current: { position: { x: 0, y: 0, z: 0 } } };
      const { result } = renderHook(() => useReposition(ref));
      result.current({ x: 5, y: 5, z: 5 });
      expect(ref.current.position.x).toBe(5);
      expect(ref.current.position.y).toBe(5);
      expect(ref.current.position.z).toBe(5);
    });
    it("should change the position on only one axis when passed only a single value", () => {
      const ref = { current: { position: { x: 0, y: 0, z: 0 } } };
      const { result } = renderHook(() => useReposition(ref));
      result.current({ x: 5 });
      expect(ref.current.position.x).toBe(5);
      expect(ref.current.position.y).toBe(0);
      expect(ref.current.position.z).toBe(0);
    });
  });
});
