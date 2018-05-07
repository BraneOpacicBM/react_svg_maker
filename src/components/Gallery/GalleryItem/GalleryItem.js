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
                const devider = el.resizedCoord[0] / 100;
                return (
                    <div className={classes.Wrapper} key={i}>
                        <div className="line">
                            <svg className="" 
                                height="100%"
                                width="100%"
                                viewBox="0, 0, 100, 100"                   
                                >
                                <line className="" x1={el.xyCord[0][0] / devider} y1={el.xyCord[0][1] / devider} 
                                x2={el.xyCord[1][0] / devider} y2={el.xyCord[1][1] / devider} 
                                stroke={getRGBA(el.rgbaStroke.r, el.rgbaStroke.g, el.rgbaStroke.b, el.rgbaStroke.a )}
                                fill={getRGBA(el.rgbaFill.r, el.rgbaFill.g, el.rgbaFill.b, el.rgbaFill.a)} />
                                Sorry, your browser does not support inline SVG.
                            </svg>

                        </div>
                    </div>
                )
            } else if (el.elementType === 'circle'){
                const devider = el.resizedCoord[0] / 100;
                return (
                    <div className={classes.Wrapper} key={i}>
                        <div className="circle">
                            <svg className="" 
                                height="100%"
                                width="100%"
                                viewBox="0, 0, 100, 100"                   
                                >
                                <circle className="" cx={el.xyCord[0][0] / devider } cy={el.xyCord[0][1] / devider} 
                                r={Math.sqrt(Math.pow(el.xyCord[1][0], 2) - 2 * el.xyCord[1][0] * el.xyCord[0][0] + Math.pow(el.xyCord[0][0], 2) +  Math.pow(el.xyCord[1][1], 2) - 2 * el.xyCord[1][1] * el.xyCord[0][1] + Math.pow(el.xyCord[0][1], 2)) / devider}
                                stroke={getRGBA(el.rgbaStroke.r, el.rgbaStroke.g, el.rgbaStroke.b, el.rgbaStroke.a )}
                                fill={getRGBA(el.rgbaFill.r, el.rgbaFill.g, el.rgbaFill.b, el.rgbaFill.a)} />
                                Sorry, your browser does not support inline SVG.
                            </svg>

                        </div>
                    </div>
                )
            } else if (el.elementType === 'square'){
                const devider = el.resizedCoord[0] / 100;
                // I quadrant (top-left)
                if(el.xyCord[0][0] > el.xyCord[1][0] && el.xyCord[0][1] > el.xyCord[1][1] ) {
                    if(el.xyCord[0][1] > el.xyCord[0][0]) {
                        return (
                            <div className={classes.Wrapper} key={i}>
                                <div className="square">
                                    <svg className="" 
                                        height="100%"
                                        width="100%"
                                        viewBox="0, 0, 100, 100"                   
                                        >
                                        <rect 
                                        x={el.xyCord[1][0] / devider} 
                                        y={el.xyCord[1][1] / devider}
                                        height={Math.abs(el.xyCord[0][1] - el.xyCord[1][1]) / devider} 
                                        width={Math.abs(el.xyCord[0][1] - el.xyCord[1][1]) / devider } 
                                        stroke={getRGBA(el.rgbaStroke.r, el.rgbaStroke.g, el.rgbaStroke.b, el.rgbaStroke.a )} 
                                        fill={getRGBA(el.rgbaFill.r, el.rgbaFill.g, el.rgbaFill.b, el.rgbaFill.a)} />
                                        Sorry, your browser does not support inline SVG.  
                                    </svg>
        
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div className={classes.Wrapper} key={i}>
                                <div className="square">
                                    <svg className="" 
                                        height="100%"
                                        width="100%"
                                        viewBox="0, 0, 100, 100"                   
                                        >
                                        <rect 
                                        x={el.xyCord[1][0] / devider} 
                                        y={el.xyCord[1][1] / devider}
                                        height={Math.abs(el.xyCord[0][0] - el.xyCord[1][0]) / devider} 
                                        width={Math.abs(el.xyCord[0][0] - el.xyCord[1][0]) / devider } 
                                        stroke={getRGBA(el.rgbaStroke.r, el.rgbaStroke.g, el.rgbaStroke.b, el.rgbaStroke.a )} 
                                        fill={getRGBA(el.rgbaFill.r, el.rgbaFill.g, el.rgbaFill.b, el.rgbaFill.a)} />
                                        Sorry, your browser does not support inline SVG.  
                                    </svg>
        
                                </div>
                            </div>
                        )
                    }
                }

                // III quadrant (right-bottom)
                if(el.xyCord[0][0] < el.xyCord[1][0] && el.xyCord[0][1] < el.xyCord[1][1] ) {
                    if(el.xyCord[1][1] > el.xyCord[1][0]) {
                        
                    }
                }

                
                
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