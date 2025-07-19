import { useState } from 'react';
import './App.css';
import Helmet from "react-helmet";
import ImageZoom from "react-image-zooom";

function App() {
  const year:number = new Date().getFullYear();
  const [galleryImage, setGalleryImage] = useState('https://picsum.photos/seed/013/1920/1080');

  const handleClick = (url: string) => {
    setGalleryImage(url);
  }

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>React Image Zooom - Demo Page</title>
      </Helmet>

      <header>
        <h1><img src={process.env.PUBLIC_URL + '/logo48.png'} alt="ImageZoom logo" /><br />&lt;ImageZoom&#x0002F;&gt;</h1>

        <p className="npm-install"><a href="https://www.npmjs.com/package/react-image-zooom" target="_blank" rel="noreferrer">npm i react-image-zooom</a></p>

        <p>Simple React component that will allow users to zoom in on your images, perfect for product images and galleries!</p>
        <p>Small and light weight!<br />Give it a try and check the <a href="https://github.com/Mario-Duarte/react-image-zooom" target="_blank" rel="noreferrer">docs here</a>.</p>

      </header>

      <ImageZoom className="fullImageZoom" src="https://picsum.photos/seed/000/1920/1080" alt="A image to apply the ImageZoom plugin" zoom="250" width="100%" height="auto" />


      <div className="container">
        <h3>How it works</h3>

        <p>This component allows users to click/tap to zoom-in on an image, pan around to inspect the details and click again to zoom-out, moving the focus out of the image will also reset the zoom. This component also has a image loader built in and a very minimal styling footprint only setting the minimum to make it work, in addition you can pass in your own className and id props enabling you to adapt the design to your needs.</p>

        <p>For extra customization of the style of this component it will also add some extra classes dynamically depending on its state.</p>

        <p>It will have the class <strong>loading</strong> while the image is been preloaded and <strong>loaded</strong> once it has been loaded.</p>

        <p>Additionally it will have the class <strong>fullview</strong> while the user has not initiated the zoom and <strong>zoomed</strong> once the user has taped/clicked in.</p>

        <p>But you here for some examples so bellow you can find a standard image gallery using the component with a default 200% zoom:</p>

        <div className="gallery">
          <ImageZoom className="gallery-img" src="https://picsum.photos/seed/005/1920/1080" alt="A image to apply the ImageZoom plugin" />
          <ImageZoom className="gallery-img" src="https://picsum.photos/seed/002/1920/1080" alt="A image to apply the ImageZoom plugin" />
          <ImageZoom className="gallery-img" src="https://picsum.photos/seed/003/1920/1080" alt="A image to apply the ImageZoom plugin" />
          <ImageZoom className="gallery-img" src="https://picsum.photos/seed/004/1920/1080" alt="A image to apply the ImageZoom plugin" />
        </div>

        <p>Code for the gallery above can be viewed on <a href="https://codepen.io/MarioDesigns/pen/wvWZGpP" target="_blank" rel="noreferrer">CodePen</a></p>

        <h3>How to use it</h3>

        <p>The imageZoom component works very similar to the default img tag in HTML, just pass in a src attribute (<strong><i>mandatory</i></strong>) with the image url you wan to use and it will render a working imageZoom component.</p>

        <ImageZoom src="https://picsum.photos/seed/010/1920/1080" alt="A image to apply the ImageZoom plugin" />

        <iframe height="450" title="React-image-Zoom Single image example" src="https://codepen.io/MarioDesigns/embed/ZEZPqZG/0cfba49577c0ec706ad8ae7dad26fefd?height=453&theme-id=24953&default-tab=js" loading="lazy" allowTransparency={true}>
          See the Pen <a href='https://codepen.io/MarioDesigns/pen/ZEZPqZG/0cfba49577c0ec706ad8ae7dad26fefd'>React-image-Zoom Single image example</a> by Mario Duarte
          (<a href='https://codepen.io/MarioDesigns'>@MarioDesigns</a>) on <a href='https://codepen.io'>CodePen</a>.
        </iframe>

        <p>By default the component will set a zoom of 200% on the image if no attribute was set, it will also set default values to the <strong>width</strong> (100%), <strong>height</strong> (auto) and <strong>alt</strong> (This is an imageZoom image) attributes.</p>

        <p><strong><i>New to 1.4:</i></strong> You can now also set the attribute <strong>fullWidth</strong> as boolean (defaults to false) to set the zoom level to match the full dimensions of the image, if the image is smaller than the container it is in it will ignore this and use the <strong>zoom</strong> prop.</p>

        <h3>Full width image example using a 4k image</h3>
        <ImageZoom src="https://picsum.photos/seed/022/3840/2160" alt="A image to apply the ImageZoom plugin" fullWidth={true} />

        <p>You can also pass in secondary attributes such as <strong>id</strong> and <strong>className</strong> to enable you to style the component more easily, in addition to these, the component will also update it's className based on it's state, for example, <strong>loading</strong> and <strong>loaded</strong> for when the component is downloading the image passed, and <strong>fullView</strong> and <strong>zoomed</strong> for when the user zooms in on the image. These can be easily targeted in conjunction with the attribute className to adapt the style of the component depending of implementation.</p>

        <h3>Here is an example of a custom gallery:</h3>

        <div className="demo-gallery">
          <ImageZoom className="gallery-img" src="https://picsum.photos/seed/006/1920/1080" alt="A image to apply the ImageZoom plugin" zoom="300" />
          <ImageZoom className="gallery-img" src="https://picsum.photos/seed/007/1920/1080" alt="A image to apply the ImageZoom plugin" zoom="300" />
          <ImageZoom className="gallery-img" src="https://picsum.photos/seed/008/1920/1080" alt="A image to apply the ImageZoom plugin" zoom="300" />
          <ImageZoom className="gallery-img" src="https://picsum.photos/seed/009/1920/1080" alt="A image to apply the ImageZoom plugin" zoom="300" />
        </div>

        <iframe height="600" title="React-image-Zooom Gallery example" src="https://codepen.io/MarioDesigns/embed/9a673471b4b45d2b0cf51f1c3f7e8429?height=588&theme-id=24953&default-tab=js" loading="lazy" allowTransparency={true}>
          See the Pen <a href='https://codepen.io/MarioDesigns/pen/9a673471b4b45d2b0cf51f1c3f7e8429'>React-image-Zooom Gallery example</a> by Mario Duarte
          (<a href='https://codepen.io/MarioDesigns'>@MarioDesigns</a>) on <a href='https://codepen.io'>CodePen</a>.
        </iframe>

        <h3>Here is a more advanced example with image picker:</h3>

        <div className="gallery-picker">
          <img className="img1" src="https://picsum.photos/seed/010/1920/1080" alt="A placeholder" onClick={() => handleClick('https://picsum.photos/seed/010/1920/1080')} />
          <img className="img2" src="https://picsum.photos/seed/011/1920/1080" alt="A placeholder" onClick={() => handleClick('https://picsum.photos/seed/011/1920/1080')} />
          <img className="img3" src="https://picsum.photos/seed/012/1920/1080" alt="A placeholder" onClick={() => handleClick('https://picsum.photos/seed/012/1920/1080')} />

          <ImageZoom className="FullImageZoom" src={galleryImage} alt="A image to apply the ImageZoom plugin" zoom="250" />
        </div>

        <iframe height="600" title="React-image-Zooom Gallery example" src="https://codepen.io/MarioDesigns/embed/30174463be80e9e34f634463dd9701c9?height=588&theme-id=24953&default-tab=js" loading="lazy" allowTransparency={true}>
          See the Pen <a href='https://codepen.io/MarioDesigns/pen/30174463be80e9e34f634463dd9701c9'>React Image Zoom - advanced usage with image selector</a> by Mario Duarte
          (<a href='https://codepen.io/MarioDesigns'>@MarioDesigns</a>) on <a href='https://codepen.io'>CodePen</a>.
        </iframe>

        <p>Hope you find this useful and create something awesome with it!</p>
        <p>Want to contribute or found a bug? Le me know on <a href="https://github.com/Mario-Duarte/react-image-zooom" rel="noreferrer">GitHub</a><br />
          Want to donate a Coffee and keep me going? <a href="https://www.paypal.com/paypalme/MarioDuarte/2" rel="noreferrer">Donate via PayPal</a></p>

      </div>

      <footer>
        Created with ♥ by <a href="https://www.marioduarte.co.uk/" target="_blank" rel="noreferrer">Mário Duarte</a> © {year}
      </footer>

    </div>
  );
}

export default App;
