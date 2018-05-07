import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './SVGitem.css';

class Line extends Component {

    


    componentDidMount() {

        this.props.resetCoordinates()
        this.props.getElementType()
    }


    getRGBA = (r, g, b, a) => {
        return `rgba(${ r }, ${ g }, ${ b }, ${ a })`;
      }

    render() {

        

       

        let svg = null;

        if(this.props.xyCord.length === 2) {
            svg = (
                <svg id="elementSize" className={classes.SVG} 
                height="100%"
                width="100%"
                viewBox="0, 0, 100, 100"
                >
                    <line className={classes.Line} x1={this.props.xyCord[0][0]} y1={this.props.xyCord[0][1]} 
                    x2={this.props.xyCord[1][0]} y2={this.props.xyCord[1][1]} 
                    stroke={this.getRGBA(this.props.rgbaStroke.r, this.props.rgbaStroke.g, this.props.rgbaStroke.b, this.props.rgbaStroke.a )}
                    fill={this.getRGBA(this.props.rgbaFill.r, this.props.rgbaFill.g, this.props.rgbaFill.b, this.props.rgbaFill.a)} />
                    Sorry, your browser does not support inline SVG.
                </svg>
            )
        }

        return svg;

}
}

const mapStateToProps = state => {
    return {
        xyCord: state.coordinates,
        resizedCoord: state.resizeCoordinates,
        rgbaStroke: state.rgbaStroke,
        rgbaFill: state.rgbaFill,
        elementType: state.elementType,
        devider: state.devider
    }
}

const mapDispatchToProps = dispatch => {
    return {
        resetCoordinates: () => dispatch({type: 'RESET_COORDINATES'}),
        getElementType: () => dispatch({type: 'ELEMENT_TYPE', value: 'line'})
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Line);