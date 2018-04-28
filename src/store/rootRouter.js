const initialState = {
    rgba: null
}

const rootRouter = (state = initialState, action) => {

    if(action.type === 'RGBA_GET') {
        return {
            ...state,
            rgba: action.val
        }
    }
    return state;
}


export default rootRouter;