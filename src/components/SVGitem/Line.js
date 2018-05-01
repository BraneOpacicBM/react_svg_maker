import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './SVGitem.css'

class Line extends Component {

    componentDidMount() {
        this.props.resetCoordinates()
    }

    render() {

        let svg = null;

        if(this.props.xyCord.length === 2) {
            svg = (
                <svg className={classes.SVG} height='100%' width='100%'  preserveAspectRatio="xMinYMin slice">
                    <line className={classes.Line} x1={this.props.xyCord[0][0]} y1={this.props.xyCord[0][1]} 
                    x2={this.props.xyCord[1][0]} y2={this.props.xyCord[1][1]} stroke="black" fill="red" />
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
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        resetCoordinates: () => dispatch({type: 'RESET_COORDINATES'}),
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Line);