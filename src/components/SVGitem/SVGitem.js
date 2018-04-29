import React from 'react';

const svgItem = (props) => {

    let svg = null;

    switch(props.type) {
        case 'circle':    
            svg = <svg height="100%" width="100%">
            <circle cx="50" cy="50" r="40" stroke="black" fill="red" />
            Sorry, your browser does not support inline SVG.  
          </svg> 
            break;

        case 'square':  
            svg = <svg width="100%" height="100%">
            <rect width="300" height="100" stroke="black" fill="red" />
            Sorry, your browser does not support inline SVG.  
          </svg>
            break;

        case 'line':  
            svg = <svg height="100%" width="100%">
            <line x1="0" y1="0" x2="200" y2="200" stroke="black" fill="red" />
            Sorry, your browser does not support inline SVG.
          </svg>
            break;

        default:
            svg = null;
    }
    
    return svg;
}

export default svgItem;