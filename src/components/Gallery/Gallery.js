import React, { Component } from 'react';
import Auxx from '../../hoc/Auxx/Auxx';
import GalleryItem from './GalleryItem/GalleryItem';
import { connect } from 'react-redux';
import classes from './Gallery.css';


class Gallery extends Component {

    componentDidMount() {
        this.props.resetCoordinates()
    }

    render() {
        return (
            <Auxx>
                <div className={classes.Gallery}>
                    <div className={classes.GalleryInside}>
                        <GalleryItem />
                        2
                    </div>
                </div>
            </Auxx>
        )
    }
    
    
}

const mapDispatchToProps = dispatch => {
    return {
        resetCoordinates: () => dispatch({type: 'RESET_COORDINATES'})
        
    }
}

export default connect(null, mapDispatchToProps)(Gallery);