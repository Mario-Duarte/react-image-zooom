import React from 'react';

const figureStyle = {
    
}

class ImageZoom extends React.Component {

    componentWillMount() {
        console.log(this.props.zoom);
        if ( this.props.src === "" || this.props.src == null ) {
            throw new Error('Prop src must be defined when using ImageZoom component!');
        } 
    }

    render() {
        return(
            <figure className="containerZoom" style={{backgroundImage: "url("+this.props.src+")", backgroundSize: this.props.zoom+"%"}}>
				<img id="imageZoom" src={this.props.src} alt={this.props.alt} />
			</figure>
        );
    }
}

ImageZoom.defaultProps = {
    zoom: "200",
    alt: "This is an imageZoom image"
}

export default ImageZoom