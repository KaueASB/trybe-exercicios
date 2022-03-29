import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { saveLogin } from "../Redux/Actions";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email:'',
      senha: '',
      isLogged: false,
      emailValidate: false
    };
  }
  
  handleChange = ({target: { name, value }}) => {  
    this.setState({ [name]: value }, () => this.validateData())
  }

  validateData = () => {
    const { email, senha, emailValidate } = this.state;
    const emailRegex = /\S+@\S+\.\S+/;

    emailRegex.test(email) ? this.setState({ emailValidate: true }) : this.setState({ emailValidate: false });
    emailValidate && senha.length > 4 ? this.setState({ isLogged: true }) : this.setState({ isLogged: false });
  }
  
  render() {
    const { email, senha, emailValidate, isLogged } = this.state;
    const { sendLogin } = this.props;
    return(
      <main>
          <input type="email" placeholder="Digite seu Email" name="email" value={ email } onChange={ this.handleChange } />
          <input type="password" placeholder="Digite sua senha"  name="senha" value={ senha } onChange={ this.handleChange } />
          {!emailValidate && <p>Email inválido</p>}
            {
              isLogged &&
              <Link
              to='/clientes-cadastrados' 
              onClick={() => sendLogin({email, senha, isLogged})}>
                Entre
              </Link>
            }

      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendLogin: (data) => dispatch(saveLogin(data))
})

export default connect(null, mapDispatchToProps)(Login)