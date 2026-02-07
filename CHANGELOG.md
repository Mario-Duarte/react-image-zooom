## New to v1.7.0

- Improved accessibility: `figure` now uses `role="button"` and `tabIndex=0` for keyboard navigation.
- Added `theme` prop for custom root and image class styling.
- Enhanced error handling: custom `errorContent` can be rendered on image load failure.
- Refactored internal hooks for better testability and maintainability.
- Updated documentation and examples.

## New to v1.6.0

- Migrated build system to Vite for faster builds and modern development experience.
- TypeScript declaration files are now generated automatically and included in the package.
- Improved compatibility with React 17, 18, and 19 via updated peer dependencies.
- CSS is now injected automatically with the build, simplifying usage and integration.
- Internal codebase refactoring for better maintainability and performance.

## New to v1.5.5

On touch enabled devices users can interact with one finger to zoom in and move the zoom location by dragging the finder on the image, this will disable the scrolling.

__NEW:__ Touching with more than 1 finger on the image will not activate the zoom and page will scroll as normal, this was decided this way as it is easier to use one finger to zoom and drag on the image.

### New to v1.5.0

Migrated `ImageZoom` to typescript!

This version also brings a full component refactor, migrating all the logic to React Hooks for better performance, readability and testability. The styling has also been updated to fully use `styled-components` features for a more robust and scalable solution.

Bug fixes:
- There was an issue on mobile where the zoom was been fired twice, this as now been fixed
- On mobile it was possible to drag horizontally on the image to move the zoom position, but doing it vertically was very difficult as the page would scroll. This changes the `touchmove` event on mobile to have its passive option set to `false`
- Updated transitions to avoid the white background flash when zooming out of an image
- Updated cursor to `zoom-out` when image is zoomed in

### New to v1.4.0

Performance updates and allowing to set the zoom level to the image with rather than percentage, this will calculate the correct percentage to display the image in its true size and default to the percentage if this value would be less than 100%.

Example:

```javascript
import React from "react"
import ImageZoom from "react-image-zooom";

function myZoomableImg() {
  return (
    <div>
      <ImageZoom 
        src="https://picsum.photos/seed/022/3840/2160" 
        alt="A image to apply the ImageZoom plugin" 
        fullWidth={true} 
      /> 
      // fullWidth -> this will automatically calculate the correct zoom percentage
      // to display the image at the original width if this is above 100% or default to the zoom level provided
    </div>
  );
}

export default myZoomableImg;
```

### New to v1.3.0

As requested by the users, this is now supported by mobile devices.

### New to v1.2.0

As requested by the users, you can now have custom components rendered when the image fails to load and pass in a custom callback to handle the error your own way.