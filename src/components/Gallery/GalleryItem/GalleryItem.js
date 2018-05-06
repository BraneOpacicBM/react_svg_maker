import React from 'react';
import Auxx from '../../../hoc/Auxx/Auxx';

import classes from './GalleryItem.css';

const galleryItem = (props) => {

     const getRGBA = (r, g, b, a) => {
        return `rgba(${ r }, ${ g }, ${ b }, ${ a })`;
      }

    let fromLocalStorage;
    if(localStorage.getItem('gallery')) {
         fromLocalStorage = JSON.parse(localStorage.getItem('gallery')).map((el, i) => {
            if(el.elementType === 'line') {
                return (
                    <div className={classes.Wrapper} key={i}>
                        <div className="line">
                            <svg className="" 
                                height="100%"
                                width="100%"
                                viewBox="0, 0, 100, 100"                   
                                >
                                <line className="" x1={el.xyCord[0][0]} y1={el.xyCord[0][1]} 
                                x2={el.xyCord[1][0]} y2={el.xyCord[1][1]} 
                                stroke={getRGBA(el.rgbaStroke.r, el.rgbaStroke.g, el.rgbaStroke.b, el.rgbaStroke.a )}
                                fill={getRGBA(el.rgbaFill.r, el.rgbaFill.g, el.rgbaFill.b, el.rgbaFill.a)} />
                                Sorry, your browser does not support inline SVG.
                            </svg>

                        </div>
                    </div>
                )
            } else if (el.elementType === 'circle'){
                return (
                    <div className={classes.Wrapper} key={i}>
                        <div className="circle">
                            <svg className="" 
                                height="100%"
                                width="100%"
                                viewBox="0, 0, 100, 100"                   
                                >
                                <circle className="" cx={el.xyCord[0][0]} cy={el.xyCord[0][1]} 
                                r={Math.sqrt(Math.pow(el.xyCord[1][0], 2) - 2 * el.xyCord[1][0] * el.xyCord[0][0] + Math.pow(el.xyCord[0][0], 2) +  Math.pow(el.xyCord[1][1], 2) - 2 * el.xyCord[1][1] * el.xyCord[0][1] + Math.pow(el.xyCord[0][1], 2))}
                                stroke={getRGBA(el.rgbaStroke.r, el.rgbaStroke.g, el.rgbaStroke.b, el.rgbaStroke.a )}
                                fill={getRGBA(el.rgbaFill.r, el.rgbaFill.g, el.rgbaFill.b, el.rgbaFill.a)} />
                                Sorry, your browser does not support inline SVG.
                            </svg>

                        </div>
                    </div>
                )
            } else if (el.elementType === 'square'){
                return (
                    <div className={classes.Wrapper} key={i}>
                        <div className="square">
                            <svg className="" 
                                height="100%"
                                width="100%"
                                viewBox="0, 0, 100, 100"                   
                                >
                                <rect 
                                x={el.xyCord[0][0]} 
                                y={el.xyCord[0][1]}
                                height={Math.abs(el.xyCord[1][1] - el.xyCord[0][1])} 
                                width={Math.abs(el.xyCord[1][0] - el.xyCord[0][0])} 
                                stroke={getRGBA(el.rgbaStroke.r, el.rgbaStroke.g, el.rgbaStroke.b, el.rgbaStroke.a )} 
                                fill={getRGBA(el.rgbaFill.r, el.rgbaFill.g, el.rgbaFill.b, el.rgbaFill.a)} />
                                Sorry, your browser does not support inline SVG.  
                            </svg>

                        </div>
                    </div>
                )
            }
        })
    }

    return (
        <Auxx>
            {fromLocalStorage}
        </Auxx>
    )
}

export default galleryItem;