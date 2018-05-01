const initialState = {
    rgbaStroke: null,
    rgbaFill: null,
    coordinates: [],
    
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


    return state;
}


export default rootRouter;