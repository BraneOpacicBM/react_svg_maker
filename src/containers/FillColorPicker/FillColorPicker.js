

import React, { Component } from 'react';
import reactCSS from 'reactcss';
import { SketchPicker } from 'react-color';

import { connect } from 'react-redux';

 

class FillColorPicker extends Component {
  state = {
    displayColorPicker: false,
    color: {
      r: '0',
      g: '0',
      b: '0',
      a: '1',
    },
  };

  getRGBA = () => {
    return `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`;
  }

  handleChangeComplete = (color, event) => {
    this.props.getTheColor(color.rgb)
  };

  

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb })

    
  };

  render() {

    // console.log(this.props.rgbaValueFill)

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
          onChange={ this.handleChange }
          onChangeComplete={this.handleChangeComplete} />
        </div> : null }

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    rgbaValueFill: state.rgbaFill
  }
}

const mapDispatchToProsps = dispatch => {
  return {
    getTheColor: (rgba) => dispatch({type: 'RGBA_GET_FILL', val: rgba})
  }
}

export default connect(mapStateToProps, mapDispatchToProsps)(FillColorPicker);