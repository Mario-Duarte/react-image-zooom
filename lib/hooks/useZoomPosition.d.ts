import { MouseEvent, TouchEvent } from "react";
declare function useZoomPosition(figureRef: React.RefObject<HTMLElement>): (e: MouseEvent<HTMLElement> | TouchEvent<HTMLElement>) => string | undefined;
export default useZoomPosition;
