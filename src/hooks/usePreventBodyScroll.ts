import { useEffect } from "react";

function usePreventBodyScroll(
  isZoomed: boolean,
  elm?: HTMLElement | null
) {
  useEffect(() => {
    const originalOverflow = getComputedStyle(document.body).overflow || "auto";
    if (isZoomed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow;
    }

    // Cleanup function to restore original style when component unmounts
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isZoomed]);

  useEffect(() => {
    if (!elm) return;

    const preventScroll = (e: TouchEvent) => {
      if (isZoomed) {
        e.preventDefault();
      }
    };

    if (isZoomed) {
      elm.addEventListener("touchmove", preventScroll, { passive: false });
    }

    return () => {
      elm.removeEventListener("touchmove", preventScroll);
    };
  }, [isZoomed, elm]);
}

export default usePreventBodyScroll;
