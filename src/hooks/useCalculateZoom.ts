import { useMemo } from "react";

function useCalculateZoom(
  zoom: string | number,
  fullWidth: boolean,
  naturalWidth: number,
  containerRef?: HTMLElement | null
): string {

  return useMemo(() => {
    if (!fullWidth || !naturalWidth) return `${zoom}%`;
    const containerWidth = containerRef?.clientWidth || 0;
    if (!containerWidth) return `${zoom}%`;

    const zoomPercentage = (naturalWidth / containerWidth) * 100;
    return `${zoomPercentage < 100 ? zoom : zoomPercentage}%`;
  }, [zoom, fullWidth, naturalWidth, containerRef]);
}

export default useCalculateZoom;
