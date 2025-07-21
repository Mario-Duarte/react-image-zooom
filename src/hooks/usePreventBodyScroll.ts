import { useEffect } from "react";

function usePreventBodyScroll(
  isZoomed: boolean,
  elm?: React.RefObject<HTMLElement>
) {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
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
    const element = elm?.current;
    if (!element) return;

    const preventScroll = (e: TouchEvent) => {
      if (isZoomed) {
        e.preventDefault();
      }
    };

    if (isZoomed) {
      element.addEventListener("touchmove", preventScroll, { passive: false });
    }

    return () => {
      element.removeEventListener("touchmove", preventScroll);
    };
  }, [isZoomed, elm]);
}

export default usePreventBodyScroll;
