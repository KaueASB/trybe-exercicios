import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { connect } from 'react-redux';

import Home from './pages/Home';
import Login from './pages/Login';
import ClientesCadastrados from './pages/Clientes-Cadastrados';
import Register from './pages/Register';

import './App.css';

class App extends React.Component {
  render() {
    const { isLogin } = this.props;
    return(
      <Switch>
        <Route exact path='/' component={ Home } />''
        <Route exact path='/login' component={ Login } />
        {
          isLogin ? (
            <Route exact path='/clientes-cadastrados' component={ ClientesCadastrados } />
            ) : (
              <>
              <h3>Login não efetuado</h3>
              <Link to='/login' >Faça seu login</Link>
            </>
          )
        }
        <Route exact path='/cadastro' component={ Register }/>
      </Switch>
    )
  }
}

const mapStateToProps = (state) => ({
  isLogin: state.loginReducer.isLogged,
})

export default connect(mapStateToProps)(App);
