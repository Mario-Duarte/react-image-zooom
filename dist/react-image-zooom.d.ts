import { JSX } from 'react';

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
    errorContent?: JSX.Element;
}
declare function ImageZoom({ zoom, fullWidth, alt, width, height, src, id, className, onError, errorContent, }: ImageZoomProps): JSX.Element;
export default ImageZoom;
export type { ImageZoomProps };
