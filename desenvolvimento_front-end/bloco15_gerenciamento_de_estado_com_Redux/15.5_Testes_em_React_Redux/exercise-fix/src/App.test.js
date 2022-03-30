import { screen, cleanup } from '@testing-library/react';
import renderWithRedux from './renderWithRedux';
import userEvent from '@testing-library/user-event';
import App from './App';


describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    renderWithRedux(<App />);

    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.queryByText('0')).toBeInTheDocument();  
  });

  // Bastou usar a função renderWithRedux no lugar do render , que os testes ocorreram perfeitamente. Note que não passamos valor inicial algum para o clickReducer e por isso ele utilizou o valor padrão 0, definido no código da aplicação.
  // Caso seja interessante alterar o valor inicial do clickReducer , isso também é possível passando como segundo parâmetro para a função renderWithRedux um objeto com as propriedades que respeitem o formato original do state . Isto é:
  
  test('a click in a button should increment the value of clicks', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 } } } );

    expect(screen.queryByText('5')).toBeInTheDocument();
  });

  test('Crie um teste com o valor padrão do reducer e teste se um clique funciona', () => {
    const { store } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 } } } );

    const btn = screen.getByRole('button', {name: /clique aqui/i})
    expect(btn).toBeInTheDocument();

    userEvent.click(btn)
    const { clickReducer:{counter} } = store.getState()
    expect(counter).toBe(6)
  });
});



