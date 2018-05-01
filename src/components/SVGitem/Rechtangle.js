import React, { Component } from 'react';
import { connect } from 'react-redux';

class Rechtangle extends Component {

    componentDidMount() {
        this.props.resetCoordinates()
    }

    render() {

        return(
            <svg  viewBox="0 0 100 100" preserveAspectRatio="xMinYMax meet">
                <rect x="0" y="0" width="0" height="0" stroke="black" fill="red" />
                Sorry, your browser does not support inline SVG.  
            </svg>
        )

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

export default connect(mapStateToProps, mapDispatchToProps)(Rechtangle);