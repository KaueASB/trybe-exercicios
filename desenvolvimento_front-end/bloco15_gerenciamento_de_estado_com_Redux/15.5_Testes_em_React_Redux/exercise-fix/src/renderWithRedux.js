import { render } from '@testing-library/react';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}) => {

  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

export default renderWithRedux;

// function renderWithReduxOutroModo(
//  component,
//  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {})
// {
//   const allSelectors = render(
//     <Provider store={ store }>
//       { component }
//     </Provider>
//   );
//   return { ...allSelectors, store }
// }

// createStore(reducer)
// createStore(reducer, initial_state)
// createStore(reducer, config - midleawares) 
// createStore(reducer, initial_state, config - midleawares)

// ======================================================================== //

// CASOS PARA USAR ROUTER COM REDUX DIRETO NOS TESTES //

// import Router from 'react-router-dom'
// import { createMemoryHistory } from 'history'

// const renderAppWithRouter = (initialEntries = {['/']}) => {
//   return (
//     <Router history={ createMemoryHistory(initialEntries) }>
//       <App />
//     </Router>
//   )
// }

// renderWithRedux(renderAppWithRouter())