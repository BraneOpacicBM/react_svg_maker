const initialState = {
    rgbaStroke: 'black',
    rgbaFill: 'black',
    coordinates: [],
    resizeCoordinates: []
    
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


    return state;
}


export default rootRouter;