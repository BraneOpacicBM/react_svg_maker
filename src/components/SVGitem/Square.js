import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './SVGitem.css';

class Rechtangle extends Component {

    componentDidMount() {
        this.props.resetCoordinates()
        this.props.getElementType()
    }

    getRGBA = (r, g, b, a) => {
        return `rgba(${ r }, ${ g }, ${ b }, ${ a })`;
    }

    render() {

        const devider = this.props.coordinates / 100;

        let svg = null;
        

        if(this.props.xyCord.length === 2) {
            if(this.props.xyCord[0][0] > this.props.xyCord[1][0] && this.props.xyCord[0][1] > this.props.xyCord[1][1] ) {
                 svg = (
                    <svg className={classes.SVG} 
                    height="100%"
                    width="100%"
                    viewBox="0, 0, 100, 100"
                    // viewBox={"0 0 " + this.props.resizedCoord[0] + " " + this.props.resizedCoord[1]}
                    >   
                    <rect 
                    x={this.props.xyCord[1][0] / devider} 
                    y={this.props.xyCord[1][1] / devider}
                    height={Math.abs(this.props.xyCord[0][1] - this.props.xyCord[1][1]) / devider} 
                    width={Math.abs(this.props.xyCord[0][1] - this.props.xyCord[1][1]) / devider}  
                    stroke={this.getRGBA(this.props.rgbaStroke.r, this.props.rgbaStroke.g, this.props.rgbaStroke.b, this.props.rgbaStroke.a )} 
                    fill={this.getRGBA(this.props.rgbaFill.r, this.props.rgbaFill.g, this.props.rgbaFill.b, this.props.rgbaFill.a)} />
                    Sorry, your browser does not support inline SVG.  
                    </svg>
                )

            }

            if(this.props.xyCord[0][0] < this.props.xyCord[1][0] && this.props.xyCord[0][1] < this.props.xyCord[1][1] ) {
                 svg = (
                    <svg className={classes.SVG} 
                    height="100%"
                    width="100%"
                    viewBox="0, 0, 100, 100"
                    // viewBox={"0 0 " + this.props.resizedCoord[0] + " " + this.props.resizedCoord[1]}
                    >   
                    <rect 
                    x={this.props.xyCord[0][0] / devider} 
                    y={this.props.xyCord[0][1] / devider}
                    height={Math.abs(this.props.xyCord[1][1] - this.props.xyCord[0][1]) / devider} 
                    width={Math.abs(this.props.xyCord[1][1] - this.props.xyCord[0][1]) / devider}  
                    stroke={this.getRGBA(this.props.rgbaStroke.r, this.props.rgbaStroke.g, this.props.rgbaStroke.b, this.props.rgbaStroke.a )} 
                    fill={this.getRGBA(this.props.rgbaFill.r, this.props.rgbaFill.g, this.props.rgbaFill.b, this.props.rgbaFill.a)} />
                    Sorry, your browser does not support inline SVG.  
                    </svg>
                )
            }
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
        getElementType: () => dispatch({type: 'ELEMENT_TYPE', value: 'square'})
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rechtangle);