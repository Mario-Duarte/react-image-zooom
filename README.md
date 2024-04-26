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

### New to v1.2.0

As requested by the users, you can now have custom components rendered when the image fails to load and pass in a custom callback to handle the error your own way.

### New to v1.3.0

As requested by the users, this is now supported by mobile devices.

## How to install

To install this on your project run the following command on your terminal:<br/>
`npm install react-image-zooom`

Alternatively you can also install using yarn:<br/>
`yarn add react-image-zooom`

## How to Use

Here is a basic example of how to import and use this component ([View on CodePen](https://codepen.io/MarioDesigns/pen/7ab69fcd17d811f63a58ab87234ad0a8)):

```(javascript)
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

Please report all bugs and issues [here](git@github.com:Mario-Duarte/react-image-zooom.git/issues).
