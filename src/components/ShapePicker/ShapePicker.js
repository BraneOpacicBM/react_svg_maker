import React from 'react';
import { NavLink } from 'react-router-dom';

const shapePicker = (props) => {

    
   
    let shape = null;

    switch(props.type) {
        case 'line':    
            shape = <div className="line"><NavLink to={props.match.path + '/line'}>Line</NavLink></div>;
            break;

        case 'circle':  
            shape = <div className="circle"><NavLink to={props.match.path + '/circle'}>Circle</NavLink></div>;
            break;

        case 'rechtangle':  
            shape = <div className="rechtangle"><NavLink to={props.match.path + '/rechtangle'}>Rechtangle</NavLink></div>;
            break;

        default:
            shape = null;
    }



    return shape;
}

export default shapePicker;