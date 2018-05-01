import React, { Component } from 'react';
import ShapePicker from '../../components/ShapePicker/ShapePicker';
import StrokeColorPicker from '../StrokeColorPicker/StrokeColorPicker';
import FillColorPicker from '../FillColorPicker/FillColorPicker';
import Auxx from '../../hoc/Auxx/Auxx';
// import SVGitem from '../../components/SVGitem/SVGitem';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Line from '../../components/SVGitem/Line';
import Circle from '../../components/SVGitem/Circle';
import Rechtangle from '../../components/SVGitem/Rechtangle';

import classes from './Canvas.css';


class Canvas extends Component {

    state = {
        shapePickerSelect: ['line', 'circle', 'square'],
        resizedValues: []

        
    }

    getCoordinates = (e) => {
        let rect = e.target.getBoundingClientRect();
        let x = e.clientX - rect.left; //x position within the element.
        let y = e.clientY - rect.top;  //y position within the element.
        let coordinatesArray = [x, y];
        console.log('Coordinates when clicked:')
        console.log(coordinatesArray)
        this.props.insertCoordinates(coordinatesArray)
        
    }

    prepareCoordinates() {
        let coordinatesArray = [];
        let resizedMain = document.getElementById('resize');
        coordinatesArray = [resizedMain.offsetWidth, resizedMain.offsetHeight];
        this.props.getResizedCoordinates(coordinatesArray)

    }

    componentDidMount() {


        const debounce = (func, wait, immediate) => {
            var timeout;
            return () => {
                const context = this, args = arguments;
                const later = function() {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                const callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        };
        
        window.addEventListener('resize', debounce(() => this.prepareCoordinates(),
200, false), false);
        
        
        this.props.resetCoordinates()
        
    }




    render() {

        // console.log('Coordinates INSIDE REDUX:')
        // console.log(this.props.xyCord);
        console.log('Did it work (from REDUX resize coordinates)')
        console.log(this.props.resizedCoord)
        
       

        let shapePicker = this.state.shapePickerSelect.map((shape, i) => {
            return <ShapePicker key={i} type={shape} {...this.props} />
        })

        return(
            <Auxx>
                <div className="ShapePicker">
                    {shapePicker}
                </div>
                
            <div id="resize" onClick={this.getCoordinates} 
            className={classes.MiddleCanvas}>
                
                <Switch>
                    <Route path={this.props.match.path + "/line"} exact component={Line} />
                    <Route path={this.props.match.path + "/circle"} exact component={Circle} />
                    <Route path={this.props.match.path + "/square"} exact component={Rechtangle} />
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

const mapStateToProps = state => {
    return {
        xyCord: state.coordinates,
        resizedCoord: state.resizeCoordinates
        
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        resetCoordinates: () => dispatch({type: 'RESET_COORDINATES'}),
        insertCoordinates: (coordinatesValue) => dispatch({type: 'INSERT_COORDINATES', value: coordinatesValue}),
        getResizedCoordinates: (resizeVal) => dispatch({type: 'RESIZE_COORDINATES', value: resizeVal})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);