import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './SVGitem.css';

class Line extends Component {

    


    componentDidMount() {

        this.props.resetCoordinates()
    }


    getRGBA = (r, g, b, a) => {
        return `rgba(${ r }, ${ g }, ${ b }, ${ a })`;
      }

    render() {

        const devider = this.props.coordinates / 100;

        let svg = null;

        if(this.props.xyCord.length === 2) {
            svg = (
                <svg id="elementSize" className={classes.SVG} 
                height="100%"
                width="100%"
                viewBox="0, 0, 100, 100"
                // viewBox={"0 0 " + this.props.resizedCoord[0] + " " + this.props.resizedCoord[1]}
                
                >
                    <line className={classes.Line} x1={this.props.xyCord[0][0] / devider} y1={this.props.xyCord[0][1] / devider} 
                    x2={this.props.xyCord[1][0] / devider} y2={this.props.xyCord[1][1] / devider} 
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
        rgbaFill: state.rgbaFill
    }
}

const mapDispatchToProps = dispatch => {
    return {
        resetCoordinates: () => dispatch({type: 'RESET_COORDINATES'}),
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Line);