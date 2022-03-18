import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App2 from './App2';

test('alterando o valor dos campos e testando o valor guardado', () => {
  render(<App2 />);
  
  //acessar a o item renderizado
  const inputNome = screen.getByRole('textbox', { name: /nome/i });

  //teste
  expect(inputNome).toBeInTheDocument();
  expect(inputNome).toHaveValue('');

  //interação do usuário
  userEvent.type(inputNome, 'Estudante da Trybe');

  //teste
  expect(inputNome).toHaveValue('Estudante da Trybe');

  // -----------------------------------------------------------------------

  //acessar o item renderizado
  const inputEmail = screen.getByRole('textbox', { name: /email/i });

  //teste
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveValue('');

  //interação do usuário
  userEvent.type(inputEmail, 'estudante@trybe.com');

  //teste
  expect(inputEmail).toHaveValue('estudante@trybe.com');
});