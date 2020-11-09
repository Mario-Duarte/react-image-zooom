import React from 'react';
import styled from "styled-components";

const Figure = styled.figure`
    background-position: 50% 50%;
	position: relative;
    width: 100%;
    max-width: 600px;
	overflow: hidden;
	cursor: zoom-in;
	margin: 0;
`;

const Img = styled.img`
    transition: opacity .8s;
	display: block;
	width: 100%;
`;

class ImageZoom extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            zoomed: "1",
            position: "50% 50%"
        }
    }

    zoomInPosition(e){
        // this will handle the calculations of the area where the image needs to zoom in depending on the user interaction
        const zoomer = e.currentTarget.getBoundingClientRect();
        let x,y,offsetX,offsetY;
        offsetX = e.clientX - zoomer.x;
        offsetY = e.clientY - zoomer.y;
        x = offsetX/zoomer.width*100;
        y = offsetY/zoomer.height*100;
        this.setState({ position: `${x}% ${y}%`});
        // OLD JQUERY CODE
        // e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX;
        // e.offsetY ? offsetY = e.offsetY : offsetY = e.touches[0].pageX;
        // console.log({offsetX, offsetY});
        // x = offsetX/zoomer.offsetWidth*100;
        // y = offsetY/zoomer.offsetHeight*100;
    }

    toggleZoomImage(e) {
        if ( this.state.zoomed === "0" ) {
            // zoom out
            this.setState({ zoomed: "1" });
        } else {
            //zoom in and set the background position correctly
            this.setState({ zoomed: "0" });
            this.zoomInPosition(e);
        }
    }

    handleClick(e) {
        // Handle the click events
        this.toggleZoomImage(e);
    }

    handleMove(e) {
        // Handle the mouse move events
        this.zoomInPosition(e);
    }

    handleLeave() {
        // Resets the state of the component on mouse leave
        this.setState({ zoomed: "1", position: "50% 50%" });
    }

    componentDidMount() {
        // This checks if the prop src was passed when the component was called and throw an error if this is null or set to empty
        if ( this.props.src === "" || this.props.src == null ) {
            throw new Error('Prop src must be defined when using ImageZoom component!');
        } 
    }

    render() {
        return(
            <Figure style={{ backgroundImage: "url("+this.props.src+")", backgroundSize: this.props.zoom+"%", backgroundPosition: this.state.position }} onClick={ e => this.handleClick(e) } onMouseMove={ e => this.handleMove(e) } onMouseLeave={ () => this.handleLeave() }>
				<Img id="imageZoom" src={this.props.src} alt={this.props.alt} style={{opacity: this.state.zoomed}}/>
			</Figure>
        );
    }
}

ImageZoom.defaultProps = {
    zoom: "200",
    alt: "This is an imageZoom image"
}

export default ImageZoom