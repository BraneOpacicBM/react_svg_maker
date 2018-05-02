import React, { Component } from 'react';

import { connect } from 'react-redux';

class SaveBtn extends Component {

    saveShapeInfoHandler = () => {
        if(this.props.xyCord.length === 2) {
            const coordinatesForGallery = {
                xyCord: this.props.xyCord,
                rgbaFill: this.props.rgbaFill,
                rgbaStroke: this.props.rgbaStroke
            }
            console.log(coordinatesForGallery);
            const gallery = JSON.parse(localStorage.getItem('gallery'))
            gallery.push(coordinatesForGallery);
            localStorage.setItem('gallery', JSON.stringify(gallery));
            
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.saveShapeInfoHandler}>Save</button>
            </div>  
        )
    }
}
    


const mapStateToProps = state => {
    return {
        xyCord: state.coordinates,
        resizedCoord: state.resizeCoordinates,
        rgbaStroke: state.rgbaStroke,
        rgbaFill: state.rgbaFill
    }
}



export default connect(mapStateToProps)(SaveBtn);