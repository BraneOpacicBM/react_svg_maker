import React from 'react';

const shapePicker = (props) => {
   
    let shape = null;

    switch(props.type) {
        case 'line':    
            shape = <div>Line!</div>;
            break;

        case 'circle':  
            shape = <div>Circle!</div>;
            break;

        case 'square':  
            shape = <div>Square!</div>;
            break;

        default:
            shape = null;
    }



    return shape;
}

export default shapePicker;