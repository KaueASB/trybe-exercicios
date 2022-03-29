import { CLIENT_REGISTER } from "../Actions";

const INITIAL_STATE = [];

const registerReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case CLIENT_REGISTER:
    return [...state, action.data]      
  default:
    return state;
  }
}

export default registerReducer;