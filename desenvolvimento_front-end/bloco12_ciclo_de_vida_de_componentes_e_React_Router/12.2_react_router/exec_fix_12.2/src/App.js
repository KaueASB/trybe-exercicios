import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Users from './components/Users';
import StrictAcess from './StrictAccess';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/strict-access">Strict Access</Link></li>
        </nav>
        <Switch>
            <Route
            exact
            path="/users/:id"
            render={ (props) => <Users {...props} greetingsMessage="Good Morning" /> }
          />
          <Route path="/about" component={About} />
          <Route
            path="/strict-access"
            render={ () => (
              <StrictAcess user={{ username: 'joao', password: '1234' }} />
            )}
          />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
