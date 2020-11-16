import React, { useState } from "react";

export default function ImageZoom(props) {

    // define and set default values to the states of the component
    const [zoomed, setZoomed] = useState("1");
    const [position, setPosition] = useState("50% 50%");
    const [imgData, setImgData] = useState(null);
    // convert state data into strings to be used as helper classes
    let figureClass = imgData ? "loaded" : "loading";
    let figureZoomed = zoomed === "0" ? "zoomed" : "fullView";

    function zoomInPosition(e) {
        // this will handle the calculations of the area where the image needs to zoom in depending on the user interaction
        const zoomer = e.currentTarget.getBoundingClientRect();
        let x, y, offsetX, offsetY;
        offsetX = e.clientX - zoomer.x;
        offsetY = e.clientY - zoomer.y;
        x = (offsetX / zoomer.width) * 100;
        y = (offsetY / zoomer.height) * 100;
        this.setState({ position: `${x}% ${y}%` });
        // OLD JQUERY CODE FOR REF ONLY
        // e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX;
        // e.offsetY ? offsetY = e.offsetY : offsetY = e.touches[0].pageX;
        // console.log({offsetX, offsetY});
        // x = offsetX/zoomer.offsetWidth*100;
        // y = offsetY/zoomer.offsetHeight*100;
    }

    return (
        <>
            <h1>Hello World</h1>
        </>
    )
}