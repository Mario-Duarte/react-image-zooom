# ![Logo-ImageZooom](https://github.com/Mario-Duarte/react-ImageZooom/blob/demo/public/logo28.png?raw=true) Image-Zooom a React Component

[![react-image-zooom](https://nodei.co/npm/react-image-zooom.png)](https://www.npmjs.com/package/react-image-zooom)

Simple React component that will allow users to zoom in on your images, perfect for product images and galleries!

Small and light weight!

[![npm version](https://badge.fury.io/js/react-image-zooom.svg)](https://www.npmjs.com/package/react-image-zooom) 
[![https://img.shields.io/librariesio/release/npm/react-image-zooom](https://img.shields.io/librariesio/release/npm/react-image-zooom)](https://www.npmjs.com/package/react-image-zooom) 
[![https://img.shields.io/github/issues-raw/mario-duarte/react-image-zooom](https://img.shields.io/github/issues-raw/mario-duarte/react-image-zooom)](https://www.npmjs.com/package/react-image-zooom) 
[![https://img.shields.io/snyk/vulnerabilities/github/mario-duarte/react-image-zooom](https://img.shields.io/snyk/vulnerabilities/github/mario-duarte/react-image-zooom)](https://www.npmjs.com/package/react-image-zooom)

View it in action [on this demo page!](https://mario-duarte.github.io/react-image-zooom/)<br/>
Alternatively on this [Pen @CodePen](https://codepen.io/MarioDesigns/pen/wvWZGpP)

<a href="https://www.buymeacoffee.com/marioduarte"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a Coffee&emoji=&slug=marioduarte&button_colour=FF5F5F&font_colour=ffffff&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00"></a><br/>
[Buy me a coffee to keep me going!](https://www.paypal.com/paypalme/MarioDuarte/2)

## Why?

As a long user of jQuery I have developed many plugins over the years that have helped me developing solutions faster and more reliably. As I move and transition to React(♥) I wanted some of these to come along with me on this new journey.

I like my plugins(now components) to be as flexible as possible and to not get in the way of the styling of the app/site that is been implemented to and this is no different.

Want to come along on this journey and/or have some great ideas on how to improve this component? [Check out the repo here!](https://github.com/Mario-Duarte/react-image-zooom)

## How it works?

This component has a very minimal styling footprint only setting the minimum to make it work, in addition you can pass in your own `className` and `id` props enabling you to adapt the design to your needs.

For extra customization of the style of this component it will also add some extra classes dynamically depending on its state.

It will have the class `loading` while the image is been preloaded and `loaded` once it has been loaded.

Additionally it will have the class `fullview` while the user has not initiated the zoom and `zoomed` once the user has taped/clicked in.

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

## How to install

To install this on your project run the following command on your terminal:<br/>
`npm install react-image-zooom`

Alternatively you can also install using yarn:<br/>
`yarn add react-image-zooom`

**Note:** CSS is injected automatically with the build. You do not need to import any CSS files manually.

**TypeScript:** Type definitions are included automatically. No need to install `@types/react-image-zooom`.

## How to Use

Here is a basic example of how to import and use this component ([View on CodePen](https://codepen.io/MarioDesigns/pen/7ab69fcd17d811f63a58ab87234ad0a8)):

```javascript
import React from "react"
import ImageZoom from "react-image-zooom";

function myZoomableImg() {
  return (
    <div>
      <ImageZoom src="https://picsum.photos/seed/000/1920/1080" alt="A image to apply the ImageZoom plugin" zoom="200"/>
    </div>
  );
}

export default myZoomableImg;

```

This component accepts the following attributes:

| Prop      |        Default value         | required |
| --------- | :--------------------------: | -------: |
| className |             Null             |    false |
| id        |             Null             |    false |
| src       |             Null             |     true |
| zoom      |             200              |    false |
| fullWidth |            false             |    false |
| alt       | "This is an imageZoom image" |    false |
| width     |            "100%"            |    false |
| height    |            "auto"            |    false |

As you can see above, it is very similar to the standard `<img />` tag, now let's look at a more advanced example of a gallery using the component ([View on CodePen](https://codepen.io/MarioDesigns/pen/9a673471b4b45d2b0cf51f1c3f7e8429)).

```(javascript)
import React from "react"
import ImageZoom from "react-image-zooom";

function myZoomableImg() {
  return (
    <ul className="myGallery">
        <li><ImageZoom className="myGalleryImg" src="https://picsum.photos/seed/001/1920/1080" alt="My gallery image 1" zoom="300"/></li>
        <li><ImageZoom className="myGalleryImg" src="https://picsum.photos/seed/002/1920/1080" alt="My gallery image 2" zoom="200"/></li>
        <li><ImageZoom className="myGalleryImg" src="https://picsum.photos/seed/003/1920/1080" alt="My gallery image 3" zoom="200"/></li>
        <li><ImageZoom className="myGalleryImg" src="https://picsum.photos/seed/004/1920/1080" alt="My gallery image 4" zoom="300"/></li>
    </ul>
  );
}

export default myZoomableImg;
```

Note that you can also set different Zoom levels per image.<br/>
For more examples [see this demo page!](https://mario-duarte.github.io/react-image-zooom/)

## Bugs and issues

Please report all bugs and issues [here](https://github.com/Mario-Duarte/react-image-zooom/issues).
