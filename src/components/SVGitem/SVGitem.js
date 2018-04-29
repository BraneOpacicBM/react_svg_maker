import React from 'react';

const svgItem = (props) => {

    let svg = null;

    switch(props.type) {
        case 'circle':    
            svg = <svg  viewBox="0 0 100 100" preserveAspectRatio="xMinYMax meet">
            <circle cx="10" cy="20" r="40" stroke="black" fill="red" />
            Sorry, your browser does not support inline SVG.  
          </svg> 
            break;

        case 'square':  
            svg = <svg  viewBox="0 0 100 100" preserveAspectRatio="xMinYMax meet">
            <rect x="20" y="20" width="50" height="50" stroke="black" fill="red" />
            Sorry, your browser does not support inline SVG.  
          </svg>
            break;

        case 'line':  
            svg = <svg  viewBox="0 0 100 100" preserveAspectRatio="xMinYMax meet">
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