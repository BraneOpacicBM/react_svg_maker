import React, { Component } from 'react';

class Canvas extends Component {
    render() {
        return(
            <ul>
                <li>
                Stateless component - shape picker (line, circle, square)
                </li>
                <li>
                    Canvas for designing SVG (with SVG inside) 
                </li>
                <li>
                    color picker for STROKE and FILL on the right side (Stateless component)
                </li>
            </ul>
        )
    }
}

export default Canvas;