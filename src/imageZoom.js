import React from 'react';
import styled from "styled-components";

const Figure = styled.figure`
    background-position: 50% 50%;
	position: relative;
	width: 100%;
	overflow: hidden;
	cursor: zoom-in;
	margin: 0;
`;

const Img = styled.img`
    transition: opacity .5s;
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

    zoomIn(e){
        let zoomer = e.currentTarget;
        let x,y,offsetX,offsetY;
        e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX;
        e.offsetY ? offsetY = e.offsetY : offsetY = e.touches[0].pageX;
        x = offsetX/zoomer.offsetWidth*100;
        y = offsetY/zoomer.offsetHeight*100;
        this.setState({ position: `${x}% ${y}%`});
    }

    toggleZoomImage(e) {
        if ( this.state.zoomed === "0" ) {
            this.setState({ zoomed: "1" });
        } else {
            //zoom in and set the background position correctly
            this.setState({ zoomed: "0" });
            this.zoomIn(e);
        }
    }

    handleClick(e) {
        this.toggleZoomImage(e);
        console.log(this.state.zoomed);
        //this.setState({ justClicked: letter });
    }

    componentDidMount() {
        console.log(this.props.zoom);
        if ( this.props.src === "" || this.props.src == null ) {
            throw new Error('Prop src must be defined when using ImageZoom component!');
        } 
    }

    render() {
        return(
            <Figure style={{backgroundImage: "url("+this.props.src+")", backgroundSize: this.props.zoom+"%", backgroundPosition: this.state.position}} onClick={(e) => this.handleClick(e)}>
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