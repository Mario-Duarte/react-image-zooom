import React from 'react';
import PropTypes from 'prop-types';
import styled, {keyframes} from "styled-components";

const rotate = keyframes`
    from { transform: rotate(0deg); }
    to {transform: rotate(360deg);}
`;

const Figure = styled.figure`
    background-position: 50% 50%;
	position: relative;
    width: auto;
	overflow: hidden;
    cursor: zoom-in;
    min-height: 25vh;
    background-color: #eee;
    margin: 0;
    &:before {
        content: "";
        background-color: transparent;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        opacity: 1;
        transition: opacity 0.2s ease-in-out;
        z-index: 1;
    }
    &:after {
        content: "";
        position: absolute;
        top: calc(50% - 25px);
        left: calc(50% - 25px);
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 5px solid transparent;
        border-top-color: #333;
        border-right-color: #333;
        border-bottom-color: #333;
        animation: ${rotate} 2s linear infinite;
        opacity: 1;
        transition: opacity 0.2s ease-in-out;
        z-index: 2;
    }
    &.loaded {
        min-height: auto;
        &:before {
            opacity: 0;
        }
        &:after {
            opacity: 0;
        }
    }
`;

const Img = styled.img`
    transition: opacity .8s;
	display: block;
`;

class ImageZoom extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            zoomed: "1",
            position: "50% 50%",
            imgData: null
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
        if ( this.state.zoomed === "0" ) {
            this.zoomInPosition(e);
        }
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

        this.setState({ zoomed: "0" });
        let img = new Image();
        img.src = this.props.src;
        img.addEventListener("load", () => {
            setTimeout(() => {
                this.setState({ zoomed: "1" });
                this.setState({ imgData: img.src });
            }, 200);
        });

    }

    render() {
        let figureClass = this.state.imgData ? 'loaded' : 'loading';
        let figureZoomed = this.state.zoomed === "0" ? "zoomed" : "fullView";
        return(
            <Figure id={this.props.id} className={[figureClass, figureZoomed, this.props.className].join(' ')} style={{ backgroundImage: "url("+this.state.imgData+")", backgroundSize: this.props.zoom+"%", backgroundPosition: this.state.position }} onClick={ e => this.handleClick(e) } onMouseMove={ e => this.handleMove(e) } onMouseLeave={ () => this.handleLeave() }>
				<Img id="imageZoom" src={this.state.imgData} alt={this.props.alt} style={{opacity: this.state.zoomed}} width={this.props.width} height={this.props.height} />
			</Figure>
            );
    }
}

ImageZoom.defaultProps = {
    zoom: "200",
    alt: "This is an imageZoom image",
    width: "100%",
    height: "auto"
}

export default ImageZoom