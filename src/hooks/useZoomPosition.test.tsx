import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import useZoomPosition from "./useZoomPosition";

function createMockElement(rect: Partial<DOMRect>) {
  return {
    getBoundingClientRect: () => ({
      x: rect.x ?? 0,
      y: rect.y ?? 0,
      width: rect.width ?? 100,
      height: rect.height ?? 100,
      top: rect.y ?? 0,
      left: rect.x ?? 0,
      right: (rect.x ?? 0) + (rect.width ?? 100),
      bottom: (rect.y ?? 0) + (rect.height ?? 100),
      toJSON: () => {},
    }),
  } as unknown as HTMLElement;
}

describe("useZoomPosition", () => {
  it("returns undefined if figureRef is not provided", () => {
    const { result } = renderHook(() => useZoomPosition(undefined));
    expect(result.current({ clientX: 10, clientY: 10 } as any)).toBeUndefined();
  });

  it("calculates position for mouse event", () => {
    const figureRef = createMockElement({
      x: 0,
      y: 0,
      width: 200,
      height: 100,
    });
    const { result } = renderHook(() => useZoomPosition(figureRef));

    // Use plain object for mouse event
    const event = { clientX: 100, clientY: 50 };
    const cb = result.current;
    const res = cb(event as any);
    expect(res).toBe("50% 50%");
  });

  it("clamps values between 0 and 100 for mouse event", () => {
    const figureRef = createMockElement({
      x: 0,
      y: 0,
      width: 100,
      height: 100,
    });
    const { result } = renderHook(() => useZoomPosition(figureRef));

    // Use plain object instead of MouseEvent instance
    const event = { clientX: 200, clientY: -50 };
    const cb = result.current;
    const res = cb(event as any);
    expect(res).toBe("100% 0%");
  });

  it("calculates position for touch event", () => {
    const figureRef = createMockElement({
      x: 10,
      y: 20,
      width: 100,
      height: 200,
    });
    const { result } = renderHook(() => useZoomPosition(figureRef));

    const touch = { clientX: 60, clientY: 120 };
    const event = {
      touches: [touch],
    };

    const cb = result.current;
    const res = cb(event as any);
    expect(res).toBe("50% 50%");
  });

  it("clamps values between 0 and 100 for touch event", () => {
    const figureRef = createMockElement({
      x: 0,
      y: 0,
      width: 100,
      height: 100,
    });
    const { result } = renderHook(() => useZoomPosition(figureRef));

    const touch = { clientX: -50, clientY: 200 };
    const event = {
      touches: [touch],
    };

    const cb = result.current;
    const res = cb(event as any);
    expect(res).toBe("0% 100%");
  });
});
