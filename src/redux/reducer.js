import { combineReducers } from "redux";

function stepNumber(state="1",action){
    if(action.type==='next'){
        return action.payLoad
    }
    return state;
}
export default combineReducers(
    {
        stepNumber
    }
);