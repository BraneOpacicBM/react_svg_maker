import React from 'react';
import Auxx from '../../hoc/Auxx/Auxx';
import GalleryItem from './GalleryItem/GalleryItem';
import classes from './Gallery.css';

const gallery = (props) => {

    
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

export default gallery;