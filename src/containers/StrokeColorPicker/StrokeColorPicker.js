

import React, { Component } from 'react';
import reactCSS from 'reactcss';
import { SketchPicker } from 'react-color';

import { connect } from 'react-redux';

 

class StrokeColorPicker extends Component {
  state = {
    displayColorPicker: false,
    color: {
      r: '241',
      g: '112',
      b: '19',
      a: '1',
    },
  };

  getRGBA = () => {
    return `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`;
  }

  

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb })

    this.props.getTheColor(color.rgb)
  };

  render() {

    console.log(this.props.rgbaStroke)

    const styles = reactCSS({
      'default': {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });

    return (
      <div>
        <div style={ styles.swatch } onClick={ this.handleClick }>
          <div style={ styles.color } />
        </div>
        { this.state.displayColorPicker ? <div style={ styles.popover }>
          <div style={ styles.cover } onClick={ this.handleClose }/>
          <SketchPicker 
          color={ this.state.color } 
          onChange={ this.handleChange } />
        </div> : null }

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    rgbaStroke: state.rgbaStroke
  }
}

const mapDispatchToProsps = dispatch => {
  return {
    getTheColor: (rgba) => dispatch({type: 'RGBA_GET_STROKE', val: rgba})
  }
}

export default connect(mapStateToProps, mapDispatchToProsps)(StrokeColorPicker);