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
import styled, { keyframes } from "styled-components";
import usePreventBodyScroll from "./hooks/usePreventBodyScroll";
import useCalculateZoom from "./hooks/useCalculateZoom";
import useZoomPosition from "./hooks/useZoomPosition";
import useImageLoader from "./hooks/useImageLoader";

const rotate = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

interface FigureProps {
  $isZoomed: boolean;
  $isLoaded: boolean;
}

const Figure = styled.figure<FigureProps>`
  position: relative;
  display: inline-block;
  width: auto;
  min-height: ${({ $isLoaded }) => ($isLoaded ? "auto" : "25vh")};
  background-position: 50% 50%;
  background-color: #eee;
  margin: 0;
  overflow: hidden;
  cursor: ${({ $isZoomed }) => ($isZoomed ? "zoom-out" : "zoom-in")};
  user-select: none;

  &:before {
    content: "";
    background-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: ${({ $isLoaded }) => ($isLoaded ? "0" : "1")};
    transition: opacity 0.2s ease-in-out;
    z-index: 1;
  }
  &:after {
    content: "";
    position: absolute;
    top: calc(50% - 25px);
    left: calc(50% - 25px);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 5px solid transparent;
    border-top-color: #333;
    border-right-color: #333;
    border-bottom-color: #333;
    animation: ${rotate} 2s linear infinite;
    opacity: ${({ $isLoaded }) => ($isLoaded ? "0" : "1")};
    transition: opacity 0.2s ease-in-out;
    z-index: 2;
  }
`;

const ErrorText = styled.p`
  width: 100%;
  text-align: center;
  border: 1px solid #f8f8f8;
  padding: 8px 16px;
  border-radius: 8px;
  color: #555;
`;

interface ImgProps {
  $isZoomed: boolean;
}

const Img = styled.img<ImgProps>`
  opacity: ${({ $isZoomed }) => ($isZoomed ? "0" : "1")};
  display: block;
`;

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

function ImageZoom({
  zoom = "200",
  fullWidth = false,
  alt = "This is an imageZoom image",
  width = "100%",
  height = "auto",
  src,
  id,
  className,
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

  if (error)
    return (
      <>
        {isValidElement(errorContent) ? (
          errorContent
        ) : (
          <ErrorText>There was a problem loading your image</ErrorText>
        )}
      </>
    );

  const figureClasses = [
    imgData ? "loaded" : "loading",
    isZoomed ? "zoomed" : "fullView",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Figure
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
      $isLoaded={!!imgData}
      $isZoomed={isZoomed}
      role="button"
      aria-label={`Zoomable image: ${alt}`}
      tabIndex={0}
    >
      {imgData && (
        <Img
          loading="lazy"
          id="imageZoom"
          src={imgData}
          alt={alt}
          width={width}
          height={height}
          $isZoomed={isZoomed}
        />
      )}
    </Figure>
  );
}

export default ImageZoom;
export type { ImageZoomProps };
