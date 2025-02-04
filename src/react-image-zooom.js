import React, { useState, useEffect, useCallback, useMemo } from "react";
import PropTypes from 'prop-types';
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
}) {
  const [state, setState] = useState({
    isZoomed: false,
    position: "50% 50%",
    imgData: null,
    error: false,
    isOverflowHidden: false,
    naturalWidth: 0,
    naturalHeight: 0
  });

  const { position, imgData, error, isOverflowHidden } = state;

  const zoomInPosition = useCallback((e) => {
    const zoomer = e.currentTarget.getBoundingClientRect();
    let x, y;

    if (e.type === 'touchmove') {
      if (!isOverflowHidden) {
        setState(prev => ({ ...prev, isOverflowHidden: true }));
        document.body.style.overflow = "hidden";
      }
      const touch = e.touches[0];
      x = ((touch.clientX - zoomer.x) / zoomer.width) * 100;
      y = ((touch.clientY - zoomer.y) / zoomer.height) * 100;
    } else {
      x = ((e.clientX - zoomer.x) / zoomer.width) * 100;
      y = ((e.clientY - zoomer.y) / zoomer.height) * 100;
    }

    setState(prev => ({
      ...prev,
      position: `${Math.max(0, Math.min(x, 100))}% ${Math.max(0, Math.min(y, 100))}%`
    }));
  }, [isOverflowHidden]);

  const handleClick = useCallback((e) => {
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

  const handleMove = useCallback((e) => {
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
    return () => {
      document.body.style.overflow = "initial";
    };
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

    const handleError = (error) => {
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

ImageZoom.propTypes = {
  zoom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fullWidth: PropTypes.bool,
  alt: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  src: PropTypes.string.isRequired, // Prop src must be defined when using ImageZoom component
  id: PropTypes.string,
  className: PropTypes.string,
  onError: PropTypes.func,
  errorContent: PropTypes.node
};

export default React.memo(ImageZoom);