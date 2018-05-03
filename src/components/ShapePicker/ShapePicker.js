import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './ShapePicker.css'

const shapePicker = (props) => {

    
   
    let shape = null;

    switch(props.type) {
        case 'line':    
            shape = <div className={classes.Line}><NavLink to={props.match.path + '/line'}>
                <svg height="50" width="50">
                    <line x1="0" y1="0" x2="50" y2="50" stroke="black" fill="black" />
                    Sorry, your browser does not support inline SVG.
                </svg>
          </NavLink></div>;
            break;

        case 'circle':  
            shape = <div className="circle"><NavLink to={props.match.path + '/circle'}>
                <svg height="50" width="50">
                    <circle cx="25" cy="25" r="20" stroke="black" strokeWidth="1" fill="black" />
                    Sorry, your browser does not support inline SVG.  
                </svg> 
            </NavLink></div>;
            break;

        case 'square':  
            shape = <div className="square"><NavLink to={props.match.path + '/square'}>
                <svg width="50" height="50">
                    <rect x="0" y="0" width="150" height="150" stroke="black" fill="black" />
                    Sorry, your browser does not support inline SVG.  
                </svg>
            </NavLink></div>;
            break;

        default:
            shape = null;
    }



    return shape;
}

export default shapePicker;