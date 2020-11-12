import './App.css';
import Helmet from "react-helmet";
import ImageZoom from "./imageZoom";

function App() {
  let year = new Date();
  year = year.getFullYear();
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>React Image Zoom - Demo Page</title>
      </Helmet>

      <header>
        <h1>&lt;ImageZoom&#x0002F;&gt;</h1>
        <p>Simple React component that will allow users to zoom in on your images, perfect for product images and galleries!</p>
        <p>Small and light weight!<br/>Give it a try.</p>
      </header>

      <ImageZoom src="https://picsum.photos/seed/000/1920/1080" alt="A image to apply the ImageZoom plugin" zoom="250" width="100%" height="auto" />

      
      <div className="container">
        <h3>How it works</h3>

        <p>This component allows users to click/tap to zoom-in on an image, pan around to inspect the details and click again to zoom-out, moving the focus out of the image will also reset the zoom. This component also has a image loader built in.</p>

        <p>Bellow is an example of a standard image gallery using the component with a default 200% zoom:</p>

        <div className="gallery">
          <ImageZoom className="gallery-img" src="https://picsum.photos/seed/005/1920/1080" alt="A image to apply the ImageZoom plugin" />
          <ImageZoom className="gallery-img" src="https://picsum.photos/seed/002/1920/1080" alt="A image to apply the ImageZoom plugin" />
          <ImageZoom className="gallery-img" src="https://picsum.photos/seed/003/1920/1080" alt="A image to apply the ImageZoom plugin" />
          <ImageZoom className="gallery-img" src="https://picsum.photos/seed/004/1920/1080" alt="A image to apply the ImageZoom plugin" />
        </div>

        <h3>How to use it</h3>

        <p>The imageZoom component works very similar to the default img tag in HTML, just pass in a src attribute (<strong><i>mandatory</i></strong>) with the image url you wan to use and it will render a working imageZoom component.</p>

        <ImageZoom src="https://picsum.photos/1920/1080" alt="A image to apply the ImageZoom plugin" />

        <code>
          &lt;ImageZoom src=&quot;https://picsum.photos/1920/1080&quot; alt=&quot;A image to apply the ImageZoom plugin&quot; /&gt;
        </code>

        <p>By default the component will set a zoom of 200% on the image if no attribute was set, it will also set default values to the <strong>width</strong> (100%), <strong>height</strong> (auto) and <strong>alt</strong> (This is an imageZoom image) attributes.</p>

        <p>You can also pass in secondary attributes such as <strong>id</strong> and <strong>className</strong> to enable you to style the component more easily, in addition to these, the component will also update it's className based on it's state, for example, <strong>loading</strong> and <strong>loaded</strong> for when the component is downloading the image passed, and <strong>fullView</strong> and <strong>zoomed</strong> for when the user zooms in on the image. These can be easily targeted in conjunction with the attribute className to adapt the style of the component depending of implementation.</p>

        <p>Here is an example of a custom gallery:</p>

        <div className="demo-gallery">
        <ImageZoom className="gallery-img" src="https://picsum.photos/seed/006/1920/1080" alt="A image to apply the ImageZoom plugin" zoom="300" />
          <ImageZoom className="gallery-img" src="https://picsum.photos/seed/007/1920/1080" alt="A image to apply the ImageZoom plugin" zoom="300" />
          <ImageZoom className="gallery-img" src="https://picsum.photos/seed/008/1920/1080" alt="A image to apply the ImageZoom plugin" zoom="300" />
          <ImageZoom className="gallery-img" src="https://picsum.photos/seed/009/1920/1080" alt="A image to apply the ImageZoom plugin" zoom="300" />
        </div>

        <code>
          &lt;div className=&quot;demo-gallery&quot;&gt;<br/>
          &nbsp;&lt;ImageZoom className=&quot;gallery-img&quot; src=&quot;https://picsum.photos/seed/006/1920/1080&quot; alt=&quot;A image to apply the ImageZoom plugin&quot; zoom=&quot;300&quot; /&gt;<br/>
          &nbsp;&lt;ImageZoom className=&quot;gallery-img&quot; src=&quot;https://picsum.photos/seed/007/1920/1080&quot; alt=&quot;A image to apply the ImageZoom plugin&quot; zoom=&quot;300&quot; /&gt;<br/>
          &nbsp;&lt;ImageZoom className=&quot;gallery-img&quot; src=&quot;https://picsum.photos/seed/008/1920/1080&quot; alt=&quot;A image to apply the ImageZoom plugin&quot; zoom=&quot;300&quot; /&gt;<br/>
          &nbsp;&lt;ImageZoom className=&quot;gallery-img&quot; src=&quot;https://picsum.photos/seed/009/1920/1080&quot; alt=&quot;A image to apply the ImageZoom plugin&quot; zoom=&quot;300&quot; /&gt;<br/>
          &lt;/div&gt;
        </code>

      </div>

      <footer>
        Created with ♥ by <a href="https://www.marioduarte.co.uk/" target="_blank" rel="noreferrer">Mário Duarte</a> © {year}
      </footer>

    </div>
  );
}

export default App;
