import React from 'react';
// import logo from './logo.svg';
import './App.css';

/* uma maneira mais simples de fazer, porém, dá acusa alguns erros no console */
// const Task = () => {
//   const myArray = ['goiaba', 'maracujá', 'banana', 'maça' ]
//   return (
//     myArray.map((fruta) => <ul><li>{fruta}</li></ul>)
//   );
// }

// function App() {
//   return ( 
//     <Task />
//   );
// }

//////////////////////////////////////////////////////////////////////////

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const myArray = ['goiaba', 'maracujá', 'banana', 'maça' ]

class App extends React.Component {
  render() {
    return (
      <ul>{ myArray.map(fruta => Task(fruta)) }</ul>
    );
  }
}

export default App;
