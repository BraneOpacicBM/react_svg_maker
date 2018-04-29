import React, { Component } from 'react';
import ShapePicker from '../../components/ShapePicker/ShapePicker';
import StrokeColorPicker from '../StrokeColorPicker/StrokeColorPicker';
import FillColorPicker from '../FillColorPicker/FillColorPicker';
import Auxx from '../../hoc/Auxx/Auxx';
import SVGitem from '../../components/SVGitem/SVGitem';
import { Switch, Route } from 'react-router-dom';

import classes from './Canvas.css';


class Canvas extends Component {

    state = {
        shapePickerSelect: ['line', 'circle', 'square'],
        
    }

    getCoordinates = (e) => {
        var rect = e.target.getBoundingClientRect();
        var x = e.clientX - rect.left; //x position within the element.
        var y = e.clientY - rect.top;  //y position within the element.
        console.log(x,y)
        
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
                
            <div onClick={this.getCoordinates} 
            className={classes.MiddleCanvas}>
                <Switch>
                    <Route path={this.props.match.path + "/line"} exact component={() => <SVGitem type='line'/>} />
                    <Route path={this.props.match.path + "/circle"} exact component={() => <SVGitem type='circle'/>} />
                    <Route path={this.props.match.path + "/square"} exact component={() => <SVGitem type='square'/>} />
                </Switch>
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