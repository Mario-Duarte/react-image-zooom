import './App.css';
import Helmet from "react-helmet";
import ImageZoom from "./imageZoom";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>React Image Zoom - Demo Page</title>
      </Helmet>
      <ImageZoom className="MyZoomClassImage" id="myZoomIdImage" src="https://picsum.photos/1921/1081" alt="A image to apply the ImageZoom plugin" zoom="250" width="600px" height="auto"/>
    </div>
  );
}

export default App;
