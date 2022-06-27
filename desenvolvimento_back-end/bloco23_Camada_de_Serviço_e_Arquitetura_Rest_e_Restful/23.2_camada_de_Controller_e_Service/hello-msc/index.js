const { getAuthor, getAuthorById, createNewAuthor } = require('./controller/author');

const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());

app.get('/authors', getAuthor);

app.get('/authors/:id', getAuthorById);

app.post('/authors', createNewAuthor);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`to chegante no dir hello-msc ${PORT}`);
});