import { LOGIN } from "../Actions";

const INITIAL_STATE = {};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case LOGIN:
    return action.data      
  default:
    return state;
  }
}

export default loginReducer;