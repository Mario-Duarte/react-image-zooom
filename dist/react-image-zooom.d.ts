import { default as React, JSX } from 'react';

type ImageZoomClasses = {
    root?: string;
    image?: string;
};
interface ImageZoomProps {
    zoom?: string | number;
    fullWidth?: boolean;
    alt?: string;
    width?: string | number;
    height?: string | number;
    src: string;
    id?: string;
    className?: string;
    theme?: ImageZoomClasses;
    onError?: (error: Event | ErrorEvent) => void;
    errorContent?: React.ReactNode;
}
/**
 * Displays an image with interactive zoom functionality.
 *
 * The `ImageZoom` component allows users to zoom into an image by clicking or touching it.
 * It supports both mouse and touch events, custom styling via themes, and error handling for image loading.
 *
 * @param zoom - The zoom level or percentage for the image when zoomed in. Default is "200".
 * @param fullWidth - If true, the zoomed image will fill the container's width. Default is false.
 * @param alt - The alt text for the image. Default is "This is an imageZoom image".
 * @param width - The width of the image. Default is "100%".
 * @param height - The height of the image. Default is "auto".
 * @param src - The source URL of the image to display.
 * @param id - Optional ID for the figure element.
 * @param className - (Deprecated) Custom class name for styling. Use the `theme` prop instead.
 * @param theme - Optional theme object for custom styling.
 * @param onError - Optional callback for image load errors.
 * @param errorContent - Optional custom content to display when an error occurs.
 * @returns A JSX element rendering the zoomable image.
 */
declare function ImageZoom({ zoom, fullWidth, alt, width, height, src, id, 
/**
 * @deprecated Use the `theme` prop instead for custom styling.
 */
className, theme, onError, errorContent, }: ImageZoomProps): JSX.Element;
export default ImageZoom;
export type { ImageZoomProps };
