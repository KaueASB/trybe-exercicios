const Redux = require('redux');
// const store = Redux.createStore();

import { combineReducers } from 'redux';
import meuReducer from './meuReducer'; // exemplo de arquivo reducer dentro da pasta
import meuOutroReducer from './meuOutroReducer'; // exemplo de um segundo reducer

const reducerCombinado = combineReducers({
  meuReducer,
  meuOutroReducer,
});

const fazerLogin = (email) => ({
  type: 'LOGIN',
  email
});

const ESTADO_INICIAL = {
  login: false,
  email: "",
};

const reducer = (state = ESTADO_INICIAL, action) /* sendo possivel passar da seguinte maneira: (state = { login: false, email: '' }) */ => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        login: !state.login,
        email: action.email
      };
    default: // No switch, sempre precisamos ter um caso default!
      return state
  }  
};

const store = Redux.createStore(reducer);

store.dispatch(fazerLogin('email@email.com'))

// console.log(store.getState());

// console.log(store.getState(reducerCombinado)); // exemplo de como pegar as alterações feitas no state global com reducers combinado
//{
// meuReducer: {/_estado do meuReducer_/},
// meuOutroReducer: {/_estado do meuOutroReducer_/,}
//}

store.subscribe(() => {
  console.log(store.getState());
});

export default reducerCombinado;