import React, { useState, useEffect, useCallback, useMemo, MouseEvent, TouchEvent } from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

const Figure = styled.figure`
  position: relative;
  display: inline-block;
  width: auto;
  min-height: 25vh;
  background-position: 50% 50%;
  background-color: #eee;
  margin: 0;
  overflow: hidden;
  cursor: zoom-in;
  img {
    opacity: 0;
    transition: opacity 0s ease-in-out;
  }
  &:before {
    content: "";
    background-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
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
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
    z-index: 2;
  }
  &.loaded {
    min-height: auto;
    img {
      opacity: 1;
      transition: opacity 0.2s ease-in-out;
    }
    &:before {
      opacity: 0;
    }
    &:after {
      opacity: 0;
    }
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

const Img = styled.img`
  transition: opacity 0.8s;
  display: block;
  `;

export interface ImageZoom {
  zoom?: string | number;
  fullWidth?: boolean;
  alt?: string;
  width?: string | number;
  height?: string | number;
  src: string;
  id?: string;
  className?: string;
  onError?: (error:ErrorEvent) => void;
  errorContent?: React.ReactNode; 
}

type ImageZoomState = {
  isZoomed: boolean;
  position: string;
  imgData: string | null;
  error: boolean;
  isOverflowHidden: boolean;
  naturalWidth: number;
  naturalHeight: number;
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
  errorContent = <ErrorText>There was a problem loading your image</ErrorText>
}:ImageZoom) {
  const [state, setState] = useState<ImageZoomState>({
    isZoomed: false,
    position: "50% 50%",
    imgData: null,
    error: false,
    isOverflowHidden: false,
    naturalWidth: 0,
    naturalHeight: 0
  });

  const { position, imgData, error, isOverflowHidden } = state;

  const zoomInPosition = useCallback((e: MouseEvent<HTMLElement> | TouchEvent<HTMLElement>) => {
    const zoomer = e.currentTarget.getBoundingClientRect();
    let x:number, y:number;

    if (e.type === 'touchmove') {
      if (!isOverflowHidden) {
        setState(prev => ({ ...prev, isOverflowHidden: true }));
        document.body.style.overflow = "hidden";
      }
      const touch = (e as TouchEvent).touches[0];
      x = ((touch.clientX - zoomer.x) / zoomer.width) * 100;
      y = ((touch.clientY - zoomer.y) / zoomer.height) * 100;
    } else {
      const mouse = (e as MouseEvent);
      x = ((mouse.clientX - zoomer.x) / zoomer.width) * 100;
      y = ((mouse.clientY - zoomer.y) / zoomer.height) * 100;
    }

    setState(prev => ({
      ...prev,
      position: `${Math.max(0, Math.min(x, 100))}% ${Math.max(0, Math.min(y, 100))}%`
    }));
  }, [isOverflowHidden]);

  const handleClick = useCallback((e: MouseEvent<HTMLElement> | TouchEvent<HTMLElement>) => {
    setState(prev => {
      const newIsZoomed = !prev.isZoomed;
      return {
        ...prev,
        isZoomed: newIsZoomed,
        ...(newIsZoomed && { position: prev.position })
      };
    });
    if (!state.isZoomed) zoomInPosition(e);
  }, [zoomInPosition, state.isZoomed]);

  const handleMove = useCallback((e: MouseEvent<HTMLElement> | TouchEvent<HTMLElement>) => {
    if (state.isZoomed) {
      zoomInPosition(e);
    }
  }, [state.isZoomed, zoomInPosition]);

  const handleLeave = useCallback(() => {
    setState(prev => ({
      ...prev,
      isZoomed: false,
      position: "50% 50%",
      isOverflowHidden: false
    }));

    document.body.style.overflow = "auto";  
  }, []);

  useEffect(() => {
    setState(prev => ({ ...prev, imgData: null }));

    if (!src) {
      throw new Error("Prop src must be defined when using ImageZoom component!");
    }

    const img = new Image();
    const handleLoad = () => {
      setTimeout(() => {
        setState(prev => ({
          ...prev,
          isZoomed: false,
          imgData: img.src,
          naturalWidth: img.naturalWidth,
          naturalHeight: img.naturalHeight
        }));
      }, 200);
    };

    const handleError = (error:ErrorEvent) => {
      setState(prev => ({ ...prev, error: true }));
      onError?.(error);
    };

    img.addEventListener("load", handleLoad);
    img.addEventListener("error", handleError);

    img.src = src;

    return () => {
      img.removeEventListener("load", handleLoad);
      img.removeEventListener("error", handleError);
    };
  }, [src, onError]);

  const calculateZoom = useMemo(() => {
    if (!fullWidth || !state.naturalWidth) return `${zoom}%`;
    
    const containerWidth = document.querySelector('.fullImageZoom')?.clientWidth || 0;
    if (!containerWidth) return `${zoom}%`;
    
    const zoomPercentage = (state.naturalWidth / containerWidth) * 100;
    return `${zoomPercentage < 100 ? zoom : zoomPercentage}%`;
  }, [zoom, fullWidth, state.naturalWidth]);

  const figureStyle = useMemo(() => ({
    backgroundImage: `url(${state.isZoomed && imgData ? imgData : ''})`,
    backgroundSize: calculateZoom,
    backgroundPosition: position,
  }), [state.isZoomed, imgData, calculateZoom, position]);

  if (error) return errorContent;

  return (
    <Figure
      id={id}
      className={`${imgData ? 'loaded' : 'loading'} ${state.isZoomed ? 'zoomed' : 'fullView'} ${className}`}
      style={figureStyle}
      onClick={handleClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onTouchStart={handleClick}
      onTouchMove={handleMove}
      onTouchEnd={handleLeave}
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
          style={{ opacity: state.isZoomed ? 0 : 1 }}
          width={width}
          height={height}
        />
      )}
    </Figure>
  );
}

export default ImageZoom;