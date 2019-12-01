
const initialState={
    counter:0
}


const reducer=(state=initialState,action)=>{
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                counter:counter+5
            }
            
            break;
    
        default:
            return state;
            break;
    }
}

export default reducer;