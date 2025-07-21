import React from "react";
interface ImageZoomProps {
    zoom?: string | number;
    fullWidth?: boolean;
    alt?: string;
    width?: string | number;
    height?: string | number;
    src: string;
    id?: string;
    className?: string;
    onError?: (error: ErrorEvent) => void;
    errorContent?: React.ReactNode;
}
declare function ImageZoom({ zoom, fullWidth, alt, width, height, src, id, className, onError, errorContent, }: ImageZoomProps): import("react/jsx-runtime").JSX.Element;
export default ImageZoom;
export type { ImageZoomProps };
