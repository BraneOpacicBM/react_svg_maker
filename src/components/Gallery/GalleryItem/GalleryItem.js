import React from 'react';
import Auxx from '../../../hoc/Auxx/Auxx';

const galleryItem = (props) => {

    let fromLocalStorage = JSON.parse(localStorage.getItem('gallery')).map(el => {
        return <div>{el.xyCord[0]}</div>
    })

    return (
        <Auxx>
            {fromLocalStorage}
        </Auxx>
    )
}

export default galleryItem;