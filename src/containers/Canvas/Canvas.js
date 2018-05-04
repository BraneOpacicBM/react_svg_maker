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
import Square from '../../components/SVGitem/Square';

import classes from './Canvas.css';


class Canvas extends Component {

    state = {
        shapePickerSelect: ['line', 'circle', 'square'],
        resizedValues: [],
        coordinatesValue: null
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

    passCoordinatesToSVG = () => {
        const resizeDiv = document.getElementById('resize');
        return resizeDiv.offsetWidth;

    }

    prepareCoordinates() {
        let coordinatesArray = [];
        let resizedMain = document.getElementById('resize');
        coordinatesArray = [resizedMain.offsetWidth, resizedMain.offsetHeight];
        this.props.getResizedCoordinates(coordinatesArray);

        

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

        window.addEventListener('onload', this.prepareCoordinates());
        
        window.addEventListener('resize', debounce(() => this.prepareCoordinates(),
20, false), false);


        this.setState({
            coordinatesValue: document.getElementById('resize').offsetWidth
        })
        
        this.props.resetCoordinates()
        
    }




    render() {

        console.log('CANVAS VALUUEE')
        console.log(this.state.coordinatesValue)
       

        let shapePicker = this.state.shapePickerSelect.map((shape, i) => {
            return <ShapePicker key={i} type={shape} {...this.props} />
        })

        return(
            <Auxx>
                <div className={classes.ShapePicker}>
                    {shapePicker}
                </div>
                
            <div  
            className={classes.MiddleCanvas}>
                
                <div id="resize" onClick={this.getCoordinates} className={classes.SquareDiv} >
                    <Switch>
                        <Route path={this.props.match.path + "/line"} exact render={()=> <Line coordinates={this.state.coordinatesValue} />} />
                        <Route path={this.props.match.path + "/circle"} exact render={()=> <Circle coordinates={this.state.coordinatesValue} />} />
                        <Route path={this.props.match.path + "/square"} render={()=> <Square coordinates={this.state.coordinatesValue} />} />
                    </Switch>
                </div>
               
            </div>
            <div className={classes.StrokeAndFill}>
                <div className={classes.Stroke}>
                    <div className={classes.Dashed}>
                        <h3>Stroke</h3>
                        <StrokeColorPicker />
                    </div>
                </div>
                <div className={classes.Fill}>
                    <div className={classes.Dashed}>
                        <h3>Fill</h3>
                        <FillColorPicker />
                    </div>
                </div>
            </div>
            </Auxx>
        )
    }
}

const mapStateToProps = state => {
    return {
        xyCord: state.coordinates,
        resizedCoord: state.resizeCoordinates,
        rgbaStroke: state.rgbaStroke,
        rgbaFill: state.rgbaFill
        
        
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