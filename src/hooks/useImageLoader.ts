import { useEffect, useState } from "react";

interface ImageLoaderState {
  imgData: string | null;
  error: boolean;
  naturalWidth: number;
  naturalHeight: number;
}

function useImageLoader(
  src: string,
  onError?: (error: ErrorEvent) => void
): ImageLoaderState {
  const [state, setState] = useState<ImageLoaderState>({
    imgData: null,
    error: false,
    naturalWidth: 0,
    naturalHeight: 0,
  });

  useEffect(() => {
    setState({ imgData: null, error: false, naturalWidth: 0, naturalHeight: 0 });

    if (!src) {
      setState((prev) => ({ ...prev, error: true }));
      return;
    }

    const img = new Image();
    const handleLoad = () => {
      setState({
        imgData: img.src,
        error: false,
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
      });
    };

    const handleError = (error: ErrorEvent) => {
      setState((prev) => ({ ...prev, error: true }));
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

  return state;
}

export default useImageLoader;