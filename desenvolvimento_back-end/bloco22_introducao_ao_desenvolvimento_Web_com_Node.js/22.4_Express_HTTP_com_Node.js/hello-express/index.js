/*  const express = require ('express');

// 1 Criar uma nova aplicação Express;
const app = express(); 

// 2 Dizer ao Express que, quando uma requisição com método GET for recebida no caminho /hello, a função handleHelloWorldRequest deve ser chamada;
app.get('/hello', handleHelloWorldRequest); 

// ou app.get('/hello', (_req, res) => { res.send('Hello World') });

// 3 Pedir ao Express que crie um servidor HTTP e escute por requisições na porta 3001;
app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
}); 

// 4 Ao tratar uma requisição com método GET no caminho /hello, enviar o status HTTP 200 que significa OK e a mensagem 'Hello World!'.
function handleHelloWorldRequest(req, res) {
  res.status(200).send('Hello World!'); 
} */

////////////////////////////////////////////////////////////

const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/recipes', function (_req, res) {
  // res.json no lugar de res.send
  res.json(recipes);
});

  // query string: utilizado para filtrar os dados, barras de pesquisas
app.get('/recipes/search', function (req, res) {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name?.includes(name) && r.price < Number(maxPrice));
  res.status(200).json(filteredRecipes);
})

  // parametros da rota "/:id"
app.put('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

////////////////////////////////////////////////////////////
