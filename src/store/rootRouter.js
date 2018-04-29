const initialState = {
    rgbaStroke: null,
    rgbaFill: null
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


    return state;
}


export default rootRouter;