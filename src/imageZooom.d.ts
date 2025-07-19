declare module 'react-image-zooom' {
  import * as React from 'react';

  export interface ImageZoomProps {
    src: string;
    alt?: string;
    zoom?: string | number;
    width?: string | number;
    height?: string | number;
    fullWidth?: boolean;
    className?: string;
    id?: string;
    [key: string]: any;
  }

  const ImageZoom: React.FC<ImageZoomProps>;
  export default ImageZoom;
}