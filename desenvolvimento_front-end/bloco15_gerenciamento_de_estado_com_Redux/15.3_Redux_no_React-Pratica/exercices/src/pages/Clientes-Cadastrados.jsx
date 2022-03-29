import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class ClientesCadastrados extends React.Component {
  render() {
    const { cadastrados } = this.props;
    console.log('filtrado Render', cadastrados);
    return(
      <main>
        { cadastrados.length < 1 ? (
          <h2>Nenhum Cliente Cadastrado</h2>
        ) : (
          <>
            <h1>Clientes Cadastrados</h1>
            {
              cadastrados.map((cliente, index) => (
                <main>
                  <section key={index}>
                    <button type="button">X</button>
                    <h3>{ `Nome: ${cliente.nome}` }</h3>
                    <p>{ `Idade: ${cliente.idade}` }</p>
                    <p>{ `Email: ${cliente.email}` }</p>
                  </section>
                </main>
              ))
            }
          </>
        )
        }
        <Link to='/cadastro'>Faça seu cadastro</Link>
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  cadastrados: state.registerReducer,
})

export default connect(mapStateToProps)(ClientesCadastrados);
