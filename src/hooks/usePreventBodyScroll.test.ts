import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import { renderHook } from "@testing-library/react";
import usePreventBodyScroll from "./usePreventBodyScroll";

describe("usePreventBodyScroll", () => {
  let originalOverflow: string;

  beforeEach(() => {
    originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "";
  });

  afterEach(() => {
    document.body.style.overflow = originalOverflow;
  });

  it("sets body overflow to hidden when isZoomed is true", () => {
    renderHook(() => usePreventBodyScroll(true));
    expect(document.body.style.overflow).toBe("hidden");
  });

  it("restores body overflow when isZoomed is false", () => {
    document.body.style.overflow = "scroll";
    renderHook(() => usePreventBodyScroll(false));
    expect(document.body.style.overflow).toBe("scroll");
  });

  it("restores body overflow on unmount", () => {
    document.body.style.overflow = "auto";
    const { unmount } = renderHook(() => usePreventBodyScroll(true));
    expect(document.body.style.overflow).toBe("hidden");
    unmount();
    expect(document.body.style.overflow).toBe("auto");
  });

  it("adds and removes touchmove event listener when elm is provided and isZoomed is true", () => {
    const elm = document.createElement("div");
    const addEventListenerSpy = vi.spyOn(elm, "addEventListener");
    const removeEventListenerSpy = vi.spyOn(elm, "removeEventListener");

    const { unmount } = renderHook(() => usePreventBodyScroll(true, elm));
    expect(addEventListenerSpy).toHaveBeenCalledWith(
      "touchmove",
      expect.any(Function),
      { passive: false },
    );

    unmount();
    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "touchmove",
      expect.any(Function),
    );
  });

  it("does not add touchmove event listener when elm is not provided", () => {
    const addEventListenerSpy = vi.spyOn(document.body, "addEventListener");
    renderHook(() => usePreventBodyScroll(true, undefined));
    expect(addEventListenerSpy).not.toHaveBeenCalled();
    addEventListenerSpy.mockRestore();
  });

  it("prevents default on touchmove when isZoomed is true and one touch", () => {
    const elm = document.createElement("div");
    renderHook(() => usePreventBodyScroll(true, elm));

    const event = new TouchEvent("touchmove", {
      touches: [{ identifier: 1 }] as any,
      cancelable: true,
    });
    const preventDefaultSpy = vi.spyOn(event, "preventDefault");

    elm.dispatchEvent(event);
    expect(preventDefaultSpy).toHaveBeenCalled();
  });

  it("does not prevent default on touchmove when isZoomed is false", () => {
    const elm = document.createElement("div");
    renderHook(() => usePreventBodyScroll(false, elm));

    const event = new TouchEvent("touchmove", {
      touches: [{ identifier: 1 }] as any,
      cancelable: true,
    });
    const preventDefaultSpy = vi.spyOn(event, "preventDefault");

    elm.dispatchEvent(event);
    expect(preventDefaultSpy).not.toHaveBeenCalled();
  });
});
