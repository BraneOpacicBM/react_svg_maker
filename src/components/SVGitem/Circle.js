import React, { Component } from 'react';
import { connect } from 'react-redux';

class Circle extends Component {

    componentDidMount() {
        this.props.resetCoordinates()
    }

    render() {

        return(
            <svg  viewBox="0 0 100 100" preserveAspectRatio="xMinYMax meet">
                <circle cx="10" cy="20" r="20" stroke="black" fill="red" />
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

export default connect(mapStateToProps, mapDispatchToProps)(Circle);