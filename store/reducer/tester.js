
const initialState={
    counter:5
}


const reducer=(state=initialState,action)=>{
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                counter:state.counter+5
            }
            
            break;
    
        default:
            return state;
            break;
    }
}

export default reducer;