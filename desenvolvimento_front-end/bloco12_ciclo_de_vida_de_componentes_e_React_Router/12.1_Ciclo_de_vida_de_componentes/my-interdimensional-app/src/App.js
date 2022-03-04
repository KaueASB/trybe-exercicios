import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        characters: [],
    };
  }

  //primeira maneira chamando a função do fetch dentro do componentDidMount:
  fetchCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      this.setState({characters: data.results})
    })
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  //  Segunda maneira fazendo o fetch direto no componentDidMount:
  // componentDidMount() {
  //   fetch('https://rickandmortyapi.com/api/character')
  //   .then(response => response.json())
  //   .then(data => {
  //     this.setState({characters: data.results})
  //   })
  // }

  //terceiraa maneira de fazer com o async/await
  // fetchCharacters = async () => {
  //   const url = 'https://rickandmortyapi.com/api/character';
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   this.setState({
  //     characters: data.results
  //   })
  // }

  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
          <body className="body">
            {characters.map(({ name, image }) => {
              return (
                <main className="container" key={name}>
                  <h3>{name}</h3>
                  <img src={image} alt={name}/>
                </main>
              )
            })}
          </body>
      </div>
    );
  }
}

export default App;
