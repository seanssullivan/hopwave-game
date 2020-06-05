import { renderHook, act } from "@testing-library/react-hooks";

import useMusic from "hooks/useMusic";

test("useMusic should initialize with default BPM value", () => {
  const { result } = renderHook(() => useMusic());

  expect(result.current.bpm).toBe(100);
});