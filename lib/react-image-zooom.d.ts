import React from "react";
export type ImageZoom = {
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
};
declare function ImageZoom({ zoom, fullWidth, alt, width, height, src, id, className, onError, errorContent }: ImageZoom): string | number | bigint | boolean | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | import("react/jsx-runtime").JSX.Element | null;
export default ImageZoom;
