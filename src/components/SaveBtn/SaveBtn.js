import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './SaveBtn.css';

class SaveBtn extends Component {

    saveShapeInfoHandler = () => {
        if(this.props.xyCord.length === 2 && this.props.xyCord[0][0] !== this.props.xyCord[1][0]) {
            const coordinatesForGallery = {
                xyCord: this.props.xyCord,
                rgbaFill: this.props.rgbaFill,
                rgbaStroke: this.props.rgbaStroke,
                elementType: this.props.elementType,
                resizedCoord: this.props.resizedCoord
            }
            console.log(coordinatesForGallery);
            const gallery = JSON.parse(localStorage.getItem('gallery'))
            gallery.push(coordinatesForGallery);
            localStorage.setItem('gallery', JSON.stringify(gallery));
            this.props.resetCoordinates();
            alert('saved to gallery');
            
        }
    }

    render() {
        return (
            <div>
                <button className={classes.SaveBtn} onClick={this.saveShapeInfoHandler}>Save</button>
            </div>  
        )
    }
}
    


const mapStateToProps = state => {
    return {
        xyCord: state.coordinates,
        resizedCoord: state.resizeCoordinates,
        rgbaStroke: state.rgbaStroke,
        rgbaFill: state.rgbaFill,
        elementType: state.elementType,
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        resetCoordinates: () => dispatch({type: 'RESET_COORDINATES'}),
        
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(SaveBtn);