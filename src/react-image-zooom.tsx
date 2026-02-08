import React, {
  useState,
  useCallback,
  useMemo,
  MouseEvent,
  TouchEvent,
  useRef,
  JSX,
  isValidElement,
} from "react";
import usePreventBodyScroll from "./hooks/usePreventBodyScroll";
import useCalculateZoom from "./hooks/useCalculateZoom";
import useZoomPosition from "./hooks/useZoomPosition";
import useImageLoader from "./hooks/useImageLoader";
import "./react-image-zoom.css";

type ImageZoomClasses = {
  root?: string,
  image?: string,
}

interface ImageZoomProps {
  zoom?: string | number;
  fullWidth?: boolean;
  alt?: string;
  width?: string | number;
  height?: string | number;
  src: string;
  id?: string;
  /**
   * @deprecated Use the `theme` prop instead for custom styling.
   */
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
function ImageZoom({
  zoom = "200",
  fullWidth = false,
  alt = "This is an imageZoom image",
  width = "100%",
  height = "auto",
  src,
  id,
  className,
  theme,
  onError,
  errorContent,
}: ImageZoomProps): JSX.Element {
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [position, setPosition] = useState<string>("50% 50%");
  const figureRef = useRef<HTMLElement | null>(null);
  const zoomInPosition = useZoomPosition(figureRef.current);
  const isTouchEventRef = useRef(false);
  usePreventBodyScroll(isZoomed, figureRef.current);

  const { imgData, error, naturalWidth } = useImageLoader(src, onError);

  const calculateZoom = useCalculateZoom(
    zoom,
    fullWidth,
    naturalWidth,
    figureRef.current
  );

  const toggleZoom = (
    e: MouseEvent<HTMLElement> | TouchEvent<HTMLElement>,
    isTouchEvent: boolean,
    isZoomed: boolean,
    setIsZoomed: React.Dispatch<React.SetStateAction<boolean>>,
    setPosition: React.Dispatch<React.SetStateAction<string>>,
    zoomInPosition: (
      e: MouseEvent<HTMLElement> | TouchEvent<HTMLElement>
    ) => string | undefined
  ) => {
    if (isTouchEvent) {
      isTouchEventRef.current = true;
    }

    const newIsZoomed = !isZoomed;
    setIsZoomed(newIsZoomed);

    const newPosition = newIsZoomed ? zoomInPosition(e) : "50% 50%";
    if (newPosition) {
      setPosition(newPosition);
    }
  };

  const updatePosition = (
    e: MouseEvent<HTMLElement> | TouchEvent<HTMLElement>,
    isZoomed: boolean,
    setPosition: React.Dispatch<React.SetStateAction<string>>,
    zoomInPosition: (
      e: MouseEvent<HTMLElement> | TouchEvent<HTMLElement>
    ) => string | undefined
  ) => {
    if (isZoomed) {
      const newPosition = zoomInPosition(e);
      if (newPosition) {
        setPosition(newPosition);
      }
    }
  };

  const handleClick = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      if (isTouchEventRef.current) {
        isTouchEventRef.current = false;
        return;
      }

      toggleZoom(e, false, isZoomed, setIsZoomed, setPosition, zoomInPosition);
    },
    [isZoomed, zoomInPosition]
  );

  const handleTouchStart = useCallback(
    (e: TouchEvent<HTMLElement>) => {
      if (e.touches.length === 1) {
        toggleZoom(e, true, isZoomed, setIsZoomed, setPosition, zoomInPosition);
      }
    },
    [isZoomed, zoomInPosition]
  );

  const handleMove = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      updatePosition(e, isZoomed, setPosition, zoomInPosition);
    },
    [isZoomed, zoomInPosition]
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent<HTMLElement>) => {
      if (e.touches.length === 1) {
        e.preventDefault();
        isTouchEventRef.current = true;

        if (isZoomed) {
          updatePosition(e, isZoomed, setPosition, zoomInPosition);
        } else {
          handleTouchStart(e);
        }
      }
    },
    [handleTouchStart, isZoomed, zoomInPosition]
  );

  const handleLeave = useCallback(() => {
    isTouchEventRef.current = false;
    setIsZoomed(false);
    setPosition("50% 50%");
  }, []);

  const figureStyle = useMemo(
    () => ({
      backgroundImage: `url(${isZoomed && imgData ? imgData : ""})`,
      backgroundSize: calculateZoom,
      backgroundPosition: position,
    }),
    [isZoomed, imgData, calculateZoom, position]
  );

  if (error) {
    if (isValidElement(errorContent)) {
      return errorContent;
    }
    return <p className="image-zooom-error">There was a problem loading your image</p>;
  }

  const figureClasses = [
    imgData ? "loaded" : "loading",
    isZoomed ? "zoomed" : "fullView",
    "image-zooom",
    theme?.root,
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <figure
      ref={figureRef}
      id={id}
      className={figureClasses}
      style={figureStyle}
      onClick={handleClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleLeave}
      role="button"
      aria-label={`Zoomable image: ${alt}`}
      tabIndex={0}
    >
      {imgData && (
        <img
          loading="lazy"
          id="imageZoom"
          className={theme?.image}
          src={imgData}
          alt={alt}
          width={width}
          height={height}
        />
      )}
    </figure>
  );
}

export default ImageZoom;
export type { ImageZoomProps, ImageZoomClasses };
