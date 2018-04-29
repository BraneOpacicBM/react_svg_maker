import React, { Component } from 'react';
import ShapePicker from '../../components/ShapePicker/ShapePicker';
import StrokeColorPicker from '../StrokeColorPicker/StrokeColorPicker';
import FillColorPicker from '../FillColorPicker/FillColorPicker';
import Auxx from '../../hoc/Auxx/Auxx';

import classes from './Canvas.css';


class Canvas extends Component {

    state = {
        shapePickerSelect: ['line', 'circle', 'square'],
        
    }


    render() {

       

        let shapePicker = this.state.shapePickerSelect.map((shape, i) => {
            return <ShapePicker key={i} type={shape} {...this.props} />
        })

        return(
            <Auxx>
                <div className="ShapePicker">
                    {shapePicker}
                </div>
                
            <div className={classes.MiddleCanvas}>
                <ul>
                    <li>
                        Canvas for designing SVG (with SVG inside) 
                    </li>
                    <li>
                        color picker for STROKE and FILL on the right side (Stateless component)
                    </li>
                </ul>
            </div>
            <div className="StrokeAndFill">
                <div>
                    Stroke
                    <StrokeColorPicker />
                </div>
                <div>
                    FILL
                    <FillColorPicker />
                </div>
            </div>
            </Auxx>
        )
    }
}

export default Canvas;