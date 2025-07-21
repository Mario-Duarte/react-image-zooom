import { MouseEvent, TouchEvent } from "react";
declare function useZoomPosition(figureRef?: HTMLElement | null): (e: MouseEvent<HTMLElement> | TouchEvent<HTMLElement>) => string | undefined;
export default useZoomPosition;
