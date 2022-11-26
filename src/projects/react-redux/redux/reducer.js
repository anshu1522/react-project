import { combineReducers } from "redux";

const  initialState = 20;
const ChangeTheNumberReducer = (state =initialState,action) => {
    switch(action.type){
        case "INCREMENT" : return state+1;
        case "DECREMENT" : return state-1;
        default: return state;
    }
}
export default ChangeTheNumberReducer;
