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

        

        let svg = null;
        

        if(this.props.xyCord.length === 2) {
            // I quadrant (top-left)
            if(this.props.xyCord[0][0] > this.props.xyCord[1][0] && this.props.xyCord[0][1] > this.props.xyCord[1][1] ) {
                if(Math.abs(this.props.xyCord[0][0] - this.props.xyCord[1][0]) < Math.abs(this.props.xyCord[0][1] - this.props.xyCord[1][1])) {
                    svg = (
                        <svg className={classes.SVG} 
                        height="100%"
                        width="100%"
                        viewBox="0, 0, 100, 100">   
                        <rect 
                        x={this.props.xyCord[1][0]} 
                        y={this.props.xyCord[1][1]}
                        height={Math.abs(this.props.xyCord[0][1] - this.props.xyCord[1][1])} 
                        width={Math.abs(this.props.xyCord[0][1] - this.props.xyCord[1][1])}  
                        stroke={this.getRGBA(this.props.rgbaStroke.r, this.props.rgbaStroke.g, this.props.rgbaStroke.b, this.props.rgbaStroke.a )} 
                        fill={this.getRGBA(this.props.rgbaFill.r, this.props.rgbaFill.g, this.props.rgbaFill.b, this.props.rgbaFill.a)} />
                        Sorry, your browser does not support inline SVG.  
                        </svg>
                    )
                 } else {
                    svg = (
                        <svg className={classes.SVG} 
                        height="100%"
                        width="100%"
                        viewBox="0, 0, 100, 100">   
                        <rect 
                        x={this.props.xyCord[1][0]} 
                        y={this.props.xyCord[1][1]}
                        height={Math.abs(this.props.xyCord[0][0] - this.props.xyCord[1][0])} 
                        width={Math.abs(this.props.xyCord[0][0] - this.props.xyCord[1][0])}  
                        stroke={this.getRGBA(this.props.rgbaStroke.r, this.props.rgbaStroke.g, this.props.rgbaStroke.b, this.props.rgbaStroke.a )} 
                        fill={this.getRGBA(this.props.rgbaFill.r, this.props.rgbaFill.g, this.props.rgbaFill.b, this.props.rgbaFill.a)} />
                        Sorry, your browser does not support inline SVG.  
                        </svg>
                    )
                 }

            }

            // II quadrant (top-right)
            if(this.props.xyCord[0][0] < this.props.xyCord[1][0] && this.props.xyCord[0][1] > this.props.xyCord[1][1] ) {
                if(Math.abs(this.props.xyCord[0][0] - this.props.xyCord[1][0]) > Math.abs(this.props.xyCord[0][1] - this.props.xyCord[1][1])) {
                    svg = (
                        <svg className={classes.SVG} 
                        height="100%"
                        width="100%"
                        viewBox="0, 0, 100, 100"
                        >   
                        <rect
                        transform={"translate(0 -" + Math.abs(this.props.xyCord[0][0] - this.props.xyCord[1][0]) + ")" }
                        x={this.props.xyCord[0][0]} 
                        y={this.props.xyCord[0][1]}
                        height={Math.abs(this.props.xyCord[0][0] - this.props.xyCord[1][0])} 
                        width={Math.abs(this.props.xyCord[0][0] - this.props.xyCord[1][0])}  
                        stroke={this.getRGBA(this.props.rgbaStroke.r, this.props.rgbaStroke.g, this.props.rgbaStroke.b, this.props.rgbaStroke.a )} 
                        fill={this.getRGBA(this.props.rgbaFill.r, this.props.rgbaFill.g, this.props.rgbaFill.b, this.props.rgbaFill.a)} />
                        Sorry, your browser does not support inline SVG.  
                        </svg>
                    )
                } else {
                    svg = (
                        <svg className={classes.SVG} 
                        height="100%"
                        width="100%"
                        viewBox="0, 0, 100, 100"
                        >   
                        <rect
                        transform={"translate(0 -" + Math.abs(this.props.xyCord[1][1] - this.props.xyCord[0][1]) + ")" }
                        x={this.props.xyCord[0][0]} 
                        y={this.props.xyCord[0][1]}
                        height={Math.abs(this.props.xyCord[1][1] - this.props.xyCord[0][1])} 
                        width={Math.abs(this.props.xyCord[1][1] - this.props.xyCord[0][1])}  
                        stroke={this.getRGBA(this.props.rgbaStroke.r, this.props.rgbaStroke.g, this.props.rgbaStroke.b, this.props.rgbaStroke.a )} 
                        fill={this.getRGBA(this.props.rgbaFill.r, this.props.rgbaFill.g, this.props.rgbaFill.b, this.props.rgbaFill.a)} />
                        Sorry, your browser does not support inline SVG.  
                        </svg>
                    )
                }
                
           }

           // IV quadrant (left-bottom)
           if(this.props.xyCord[0][0] > this.props.xyCord[1][0] && this.props.xyCord[0][1] < this.props.xyCord[1][1] ) {
            if(Math.abs(this.props.xyCord[0][0] - this.props.xyCord[1][0]) > Math.abs(this.props.xyCord[0][1] - this.props.xyCord[1][1])) {
                svg = (
                    <svg className={classes.SVG} 
                    height="100%"
                    width="100%"
                    viewBox="0, 0, 100, 100">   
                    <rect 
                    transform={"translate(0 -" + Math.abs(this.props.xyCord[0][0] - this.props.xyCord[1][0]) + ")" }
                    x={this.props.xyCord[1][0]} 
                    y={this.props.xyCord[1][1]}
                    height={Math.abs(this.props.xyCord[0][0] - this.props.xyCord[1][0])} 
                    width={Math.abs(this.props.xyCord[0][0] - this.props.xyCord[1][0])}  
                    stroke={this.getRGBA(this.props.rgbaStroke.r, this.props.rgbaStroke.g, this.props.rgbaStroke.b, this.props.rgbaStroke.a )} 
                    fill={this.getRGBA(this.props.rgbaFill.r, this.props.rgbaFill.g, this.props.rgbaFill.b, this.props.rgbaFill.a)} />
                    Sorry, your browser does not support inline SVG.  
                    </svg>
                )
            } else {
                svg = (
                    <svg className={classes.SVG} 
                    height="100%"
                    width="100%"
                    viewBox="0, 0, 100, 100">   
                    <rect 
                    transform={"translate(0 -" + Math.abs(this.props.xyCord[0][1] - this.props.xyCord[1][1]) + ")" }
                    x={this.props.xyCord[1][0]} 
                    y={this.props.xyCord[1][1]}
                    height={Math.abs(this.props.xyCord[0][1] - this.props.xyCord[1][1])} 
                    width={Math.abs(this.props.xyCord[0][1] - this.props.xyCord[1][1])}  
                    stroke={this.getRGBA(this.props.rgbaStroke.r, this.props.rgbaStroke.g, this.props.rgbaStroke.b, this.props.rgbaStroke.a )} 
                    fill={this.getRGBA(this.props.rgbaFill.r, this.props.rgbaFill.g, this.props.rgbaFill.b, this.props.rgbaFill.a)} />
                    Sorry, your browser does not support inline SVG.  
                    </svg>
                )
            }

       }


            // III quadrant (right-bottom)
            if(this.props.xyCord[0][0] < this.props.xyCord[1][0] && this.props.xyCord[0][1] < this.props.xyCord[1][1] ) {
                 if(Math.abs(this.props.xyCord[1][1] - this.props.xyCord[0][1]) > Math.abs(this.props.xyCord[1][0] - this.props.xyCord[0][0])) {
                    svg = (
                        <svg className={classes.SVG} 
                        height="100%"
                        width="100%"
                        viewBox="0, 0, 100, 100">   
                        <rect 
                        x={this.props.xyCord[0][0]} 
                        y={this.props.xyCord[0][1]}
                        height={Math.abs(this.props.xyCord[1][1] - this.props.xyCord[0][1])} 
                        width={Math.abs(this.props.xyCord[1][1] - this.props.xyCord[0][1])}  
                        stroke={this.getRGBA(this.props.rgbaStroke.r, this.props.rgbaStroke.g, this.props.rgbaStroke.b, this.props.rgbaStroke.a )} 
                        fill={this.getRGBA(this.props.rgbaFill.r, this.props.rgbaFill.g, this.props.rgbaFill.b, this.props.rgbaFill.a)} />
                        Sorry, your browser does not support inline SVG.  
                        </svg>
                    )
                 } else {
                    svg = (
                        <svg className={classes.SVG} 
                        height="100%"
                        width="100%"
                        viewBox="0, 0, 100, 100">   
                        <rect 
                        x={this.props.xyCord[0][0]} 
                        y={this.props.xyCord[0][1]}
                        height={Math.abs(this.props.xyCord[1][0] - this.props.xyCord[0][0])} 
                        width={Math.abs(this.props.xyCord[1][0] - this.props.xyCord[0][0])}  
                        stroke={this.getRGBA(this.props.rgbaStroke.r, this.props.rgbaStroke.g, this.props.rgbaStroke.b, this.props.rgbaStroke.a )} 
                        fill={this.getRGBA(this.props.rgbaFill.r, this.props.rgbaFill.g, this.props.rgbaFill.b, this.props.rgbaFill.a)} />
                        Sorry, your browser does not support inline SVG.  
                        </svg>
                    )
                 }
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