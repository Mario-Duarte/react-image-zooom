import { useMemo } from "react";

function useCalculateZoom(
  zoom: string | number,
  fullWidth: boolean,
  naturalWidth: number,
  containerRef?: React.RefObject<HTMLElement>
): string | undefined {

  return useMemo(() => {
    if (!fullWidth || !naturalWidth) return `${zoom}%`;
    const containerWidth = containerRef?.current?.clientWidth || 0;
    if (!containerWidth) return `${zoom}%`;

    const zoomPercentage = (naturalWidth / containerWidth) * 100;
    return `${zoomPercentage < 100 ? zoom : zoomPercentage}%`;
  }, [zoom, fullWidth, naturalWidth, containerRef]);
}

export default useCalculateZoom;
