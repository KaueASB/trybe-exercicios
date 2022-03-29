import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// ACTIONS CREATOR //
const GET_IMAGE = 'GET_IMAGE';
const REQUEST_IMAGE = 'REQUEST_IMAGE';
const FAILED_REQUEST = 'FAILED_REQUEST';

function getImage(json) {
  return { type: GET_IMAGE, payload: json.message };
}

function requestDog() {
  return { type: REQUEST_IMAGE };
}

function failedRequest(error) {
  return { type: FAILED_REQUEST, payload: error };
}

export function fetchDog() {
  return (dispatch) => {
    dispatch(requestDog());
    return fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(json => dispatch(getImage(json)))
      .catch(error => dispatch(failedRequest(error)))
  };
}

// REDUCER //
const initialState = {
  isFetching: false,
  imagePath: 'https://images.vexels.com/media/users/3/127082/isolated/preview/a8129aebeeedfcc0cabf017af4408cf1-seta-acena-direcao-esquerda.png',
  error: '',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_IMAGE:
      return { ...state, isFetching: true };
    case GET_IMAGE:
      return { ...state, imagePath: action.payload, isFetching: false };
    case FAILED_REQUEST:
      return { ...state, error: action.payload, isFetching: false };
    default:
      return state;
  }
}

// STORE //
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;