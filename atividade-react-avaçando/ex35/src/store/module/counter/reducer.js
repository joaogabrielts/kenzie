import { ADD_VALUE } from "./actionTypes";

const reducerCounter = (state = 0, action) => {
    switch (action.type) {
   case ADD_VALUE:
    const {value} = action;
    return  value

      default:
        return state;
    }
  }
  
  export default reducerCounter;


