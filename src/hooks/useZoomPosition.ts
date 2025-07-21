import { useCallback, MouseEvent, TouchEvent } from "react";

function useZoomPosition(figureRef?: HTMLElement | null) {
  return useCallback((e: MouseEvent<HTMLElement> | TouchEvent<HTMLElement>) => {
    if (!figureRef) return;
    const zoomer = figureRef.getBoundingClientRect();
    let x: number, y: number;

    const isTouchEvent = (
      e: MouseEvent<HTMLElement> | TouchEvent<HTMLElement>
    ): e is TouchEvent<HTMLElement> => "touches" in e;

    if (isTouchEvent(e)) {
      const touch = e.touches[0];
      x = ((touch.clientX - zoomer.x) / zoomer.width) * 100;
      y = ((touch.clientY - zoomer.y) / zoomer.height) * 100;
    } else {
      x = ((e.clientX - zoomer.x) / zoomer.width) * 100;
      y = ((e.clientY - zoomer.y) / zoomer.height) * 100;
    }

    return `${Math.max(0, Math.min(x, 100))}% ${Math.max(
      0,
      Math.min(y, 100)
    )}%`;
  }, [figureRef]);
}

export default useZoomPosition;