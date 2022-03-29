import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { saveCLient } from "../Redux/Actions";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      idade: '',
      email:'',
    };
  }

  handleChange = ({target: { name, value }}) => {  
    this.setState({ [name]: value })
  }

  handleCLick = () => {
    const { cadastrar } = this.props;
    cadastrar(this.state);
    this.setState({
      nome: '',
      idade: '',
      email:'',
    })
  }

  render() {
    const { nome, idade, email } = this.state;
    return (
      <>
        <input type="text" value={ nome } name='nome' placeholder='Nome' onChange={ this.handleChange } />
        <input type="text" value={ idade } name='idade' placeholder='Idade' onChange={ this.handleChange } />
        <input type="email" value={ email } name='email' placeholder='email' onChange={ this.handleChange } />
        <button
          type='button'
          onClick={ this.handleCLick }
        >
          Cadastrar
        </button>
        <Link
          to='/clientes-cadastrados'
        >
          Clientes Cadastrados
        </Link>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  cadastrar: (data) => dispatch(saveCLient(data))
})

export default connect(null, mapDispatchToProps)(Register)