import { describe, it, expect } from 'vitest';
import { renderHook } from "@testing-library/react";
import useCalculateZoom from "./useCalculateZoom";

describe("useCalculateZoom", () => {
  it("returns zoom% when fullWidth is false", () => {
    const { result } = renderHook(() =>
      useCalculateZoom(150, false, 800, null),
    );
    expect(result.current).toBe("150%");
  });

  it("returns zoom% when naturalWidth is 0", () => {
    const { result } = renderHook(() => useCalculateZoom(120, true, 0, null));
    expect(result.current).toBe("120%");
  });

  it("returns zoom% when containerRef is null", () => {
    const { result } = renderHook(() => useCalculateZoom(100, true, 800, null));
    expect(result.current).toBe("100%");
  });

  it("returns zoom% when containerRef.clientWidth is 0", () => {
    const container = { clientWidth: 0 } as HTMLElement;
    const { result } = renderHook(() =>
      useCalculateZoom(90, true, 800, container),
    );
    expect(result.current).toBe("90%");
  });

  it("returns zoom% when calculated zoomPercentage < 100", () => {
    const container = { clientWidth: 2000 } as HTMLElement;
    const { result } = renderHook(() =>
      useCalculateZoom(80, true, 800, container),
    );
    expect(result.current).toBe("80%");
  });

  it("returns calculated zoomPercentage% when zoomPercentage >= 100", () => {
    const container = { clientWidth: 400 } as HTMLElement;
    const { result } = renderHook(() =>
      useCalculateZoom(70, true, 800, container),
    );
    // (800 / 400) * 100 = 200
    expect(result.current).toBe("200%");
  });

  it("handles zoom as string", () => {
    const container = { clientWidth: 2000 } as HTMLElement;
    const { result } = renderHook(() =>
      useCalculateZoom("75", true, 800, container),
    );
    expect(result.current).toBe("75%");
  });

  it("handles zoom as string when zoomPercentage >= 100", () => {
    const container = { clientWidth: 400 } as HTMLElement;
    const { result } = renderHook(() =>
      useCalculateZoom("60", true, 800, container),
    );
    expect(result.current).toBe("200%");
  });
});
