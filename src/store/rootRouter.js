const initialState = {
    rgbaStroke: {
        r: 0,
        g: 0,
        b: 0,
        a: 1
    },
    rgbaFill: {
        r: 0,
        g: 0,
        b: 0,
        a: 1
    },
    coordinates: [],
    resizeCoordinates: [],
    elementType: undefined
    
}

const rootRouter = (state = initialState, action) => {

    if(action.type === 'RGBA_GET_STROKE') {
        return {
            ...state,
            rgbaStroke: action.val
        }
        
    }

    if(action.type === 'RGBA_GET_FILL') {
        return {
            ...state,
            rgbaFill: action.val
        }
        
    }

    if(action.type === 'RESET_COORDINATES') {

        
        return {
            ...state,
            coordinates: []
           
        }
        
    }

    if(action.type === 'INSERT_COORDINATES') {

        let updatedCoordinates = [...state.coordinates];
        updatedCoordinates.push(action.value);

        if(state.coordinates.length >= 2) {
            return {
                ...state
            }
        } else {
            return {
                ...state,
                coordinates: updatedCoordinates
            }
        }
        
        
    }

    if(action.type === 'RESIZE_COORDINATES') {

        let updatedResizedCoordinates = [...action.value];

        return {
            ...state,
            resizeCoordinates: updatedResizedCoordinates
        }
    }

    if(action.type === 'ELEMENT_TYPE') {
        if(action.value === 'line') {
            return {
                ...state,
                elementType: 'line'
            }
        } else if(action.value === 'circle') {
            return {
                ...state,
                elementType: 'circle'
            }
        } else if (action.value === 'square') {
            return {
                ...state,
                elementType: 'square'
            }
        }
    }


    return state;
}


export default rootRouter;