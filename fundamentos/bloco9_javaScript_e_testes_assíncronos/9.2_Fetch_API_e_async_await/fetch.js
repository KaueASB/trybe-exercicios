// Ao rodar esse código você vai perceber que no console foi impresso Promise { <pending> } ao invés da piada. Como foi explicado no tópico de Promises, se o fluxo assíncrono não for controlado, ela vai retornar o seu estado e não o dado requisitado.

// const fetch = require('node-fetch');

// const fetchJoke = () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   console.log(fetch(url));
// }

// fetchJoke();

//=================================================================================

// Agora vamos corrigir esse problema:

// const fetch = require('node-fetch');

// const fetchJoke = () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data.value));
// }

// fetchJoke();

//===================================================================================

// Ok, mas e ser der erro em alguma requisição? O que você pode fazer em relação a isso? Agora entra o .catch() ! Vamos adicioná-lo ao código:

const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
}

fetchJoke();

// Algo deu errado :( 
// TypeError: Only absolute URLs are supported