import { vi, describe, it, expect, beforeEach, afterEach } from "vitest";
import MockImage from "../testUtils/MockImage";
import { renderHook, act } from "@testing-library/react";
import useImageLoader from "./useImageLoader";

describe("useImageLoader", () => {
  let originalImage: typeof window.Image;

  beforeEach(() => {
    MockImage.mock.instances = [];
    originalImage = window.Image;
    window.Image = MockImage as unknown as typeof window.Image;
  });

  afterEach(() => {
    window.Image = originalImage;
  });

  it("should initialize with default state", () => {
    const { result } = renderHook(() => useImageLoader(""));
    expect(result.current).toEqual({
      imgData: null,
      error: true,
      naturalWidth: 0,
      naturalHeight: 0,
    });
  });

  it("should load image and update state on success", async () => {
    const { result, rerender } = renderHook(({ src }) => useImageLoader(src), {
      initialProps: { src: "test.jpg" },
    });

    // Simulate image load
    await act(() => {
      const imgInstance = (window.Image as any).mock.instances[0] || {};
      if (imgInstance.onload) imgInstance.onload();
      else if (
        imgInstance.onload === undefined &&
        imgInstance.onload !== null
      ) {
        imgInstance.onload = () => {};
        imgInstance.onload();
      }
    });

    expect(result.current).toEqual({
      imgData: "test.jpg",
      error: false,
      naturalWidth: 100,
      naturalHeight: 200,
    });
  });

  it("should set error state on image load error", async () => {
    const onError = vi.fn();
    const { result } = renderHook(() => useImageLoader("bad.jpg", onError));

    // Simulate image error
    await act(() => {
      const imgInstance = (window.Image as any).mock.instances[0] || {};
      if (imgInstance.onerror) imgInstance.onerror(new Event("error"));
    });

    expect(result.current.error).toBe(true);
    expect(onError).toHaveBeenCalled();
  });

  it("should reset state when src changes", async () => {
    const { result, rerender } = renderHook(({ src }) => useImageLoader(src), {
      initialProps: { src: "first.jpg" },
    });

    await act(() => {
      const imgInstance = (window.Image as any).mock.instances[0] || {};
      if (imgInstance.onload) imgInstance.onload();
    });

    expect(result.current.imgData).toBe("first.jpg");
    
    rerender({ src: "second.jpg" });
    expect(result.current).toEqual({
      imgData: null,
      error: false,
      naturalWidth: 0,
      naturalHeight: 0,
    });

    await act(() => {
      const imgInstance = (window.Image as any).mock.instances[1] || {};
      if (imgInstance.onload) imgInstance.onload();
    });

    expect(result.current.imgData).toBe("second.jpg");
  });

  it("should call onError callback if provided", async () => {
    const onError = vi.fn();
    const { result } = renderHook(() => useImageLoader("bad.jpg", onError));

    await act(() => {
      const imgInstance = (window.Image as any).mock.instances[0] || {};
      if (imgInstance.onerror) imgInstance.onerror(new Event("error"));
    });

    expect(onError).toHaveBeenCalled();
  });
});
