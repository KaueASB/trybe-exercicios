import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
      <main className="content">
        {conteudos.map((ele) => (
          <main key={ele.conteudo} className="card">
            <h4>{`O conteudo é: ${ele.conteudo}`}</h4>
            <p>{`Status: ${ele.status}`}</p>
            <p>{`Bloco: ${ele.bloco}`}</p>
          </main>
        ))}
      </main>
    )
  }
}

export default Content;