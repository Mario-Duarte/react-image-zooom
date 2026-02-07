import { default as React, JSX } from 'react';

type ImageZoomClasses = {
    root: string;
    image: string;
};
interface ImageZoomProps {
    zoom?: string | number;
    fullWidth?: boolean;
    alt?: string;
    width?: string | number;
    height?: string | number;
    src: string;
    id?: string;
    theme?: ImageZoomClasses;
    onError?: (error: ErrorEvent) => void;
    errorContent?: React.ReactNode;
}
declare function ImageZoom({ zoom, fullWidth, alt, width, height, src, id, theme, onError, errorContent, }: ImageZoomProps): JSX.Element;
export default ImageZoom;
export type { ImageZoomProps };
