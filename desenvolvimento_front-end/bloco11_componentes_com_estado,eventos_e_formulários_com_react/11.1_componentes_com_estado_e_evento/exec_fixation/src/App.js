import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      buttonOneClicks: 0,
      buttonTwoClicks: 0,
      buttonThreeClicks: 0,
    }

    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);
  }

  handleButtonOne() {
    console.log(this.colorButton(this.state.buttonOneClicks));
    this.setState((previousState, _props) => ({
      buttonOneClicks: previousState.buttonOneClicks + 1
    }))

  }
  
  handleButtonTwo() {
    // console.log('"this" do botão 2 :', this);
    this.setState((previousState, _propos) => ({
      buttonTwoClicks: previousState.buttonTwoClicks + 1
    }))
  }
  
  handleButtonThree() {
    // console.log('"this" do botão 3 :', this);
    this.setState((previousState, _propos) => ({
      buttonThreeClicks: previousState.buttonThreeClicks + 1
    }))
  }

  colorButton (num) {
    return num % 2 === 0 ? 'green' : 'white'
  }

  render() {
    return (
      <div>

        {/*💡 Se você quisesse chamar, no elemento, um evento passando um parâmetro, você deveria trocar a sintaxe <button onClick{this.minhaFuncao} ...> por <button onClick={() => this.minhaFuncao('meu parametro')} . Basicamente, substitua a função do evento por uma chamada à mesma feita via callback! Experimente! */}

        <button onClick={ this.handleButtonOne }
        style={{ backgroundColor: this.colorButton(this.state.buttonOneClicks)} }
        >Botão 1 | Count = {this.state.buttonOneClicks}</button>
        <button onClick={ this.handleButtonTwo }>Botão 2 | Count = {this.state.buttonTwoClicks}</button>
        <button onClick={ this.handleButtonThree }>Botão 3 | Count = {this.state.buttonThreeClicks}</button>
      </div>
    );
  }
}

export default App;
