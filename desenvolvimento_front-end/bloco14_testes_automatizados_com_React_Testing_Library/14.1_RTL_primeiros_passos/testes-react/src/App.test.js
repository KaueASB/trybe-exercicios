import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

test('Verificando se existe o campo Email.', () => {
  //acessar os elementos na tela
  render(<App />);
  const inputEmail = screen.getByLabelText('Email');

  //fazer os testes
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveProperty('type', 'email');
});

// test('Verificando se existe um botão.', () => {
//   //acessar os elementos na tela
//   render(<App />);
//   const button = screen.getByRole('button');

//   //fazer os testes
//   expect(button).toBeInTheDocument();
//   expect(button).toHaveProperty('type', 'button');
// });

test('Verificando se existe dois botões.', () => {
  //acessar os elementos na tela
  render(<App />);
  const buttons = screen.getAllByRole('button');

  //fazer os testes
  expect(buttons).toHaveLength(2)
});

test('Verificando se existe o botão de enviar.', () => {
  //acessar os elementos na tela
  render(<App />);
  const btnEnviar = screen.getByTestId('id-send');

  //fazer os testes
  expect(btnEnviar).toBeInTheDocument()
  expect(btnEnviar).toHaveProperty('type', 'button');
  expect(btnEnviar).toHaveValue('Enviar')

});

test('Verificando se o botão e o campo email estão funcionando.', () => {
  //acessar os elementos na tela
  render(<App />);

  const EMAIL_USER = 'email@email.com';
  const textEmail = screen.getByTestId('id-email-user');

  //fazer os testes
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor:');

  //acessar os elementos na tela
  const btnSend = screen.getByTestId('id-send');
  const inputEmail = screen.getByLabelText('Email');

  userEvent.type(inputEmail, EMAIL_USER);
  userEvent.click(btnSend);
  
  //fazer os testes
  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${ EMAIL_USER }`);
});