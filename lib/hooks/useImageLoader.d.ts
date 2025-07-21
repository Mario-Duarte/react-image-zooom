interface ImageLoaderState {
    imgData: string | null;
    error: boolean;
    naturalWidth: number;
    naturalHeight: number;
}
declare function useImageLoader(src: string, onError?: (error: ErrorEvent) => void): ImageLoaderState;
export default useImageLoader;
