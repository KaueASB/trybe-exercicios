const express = require('express');
const {getAuthors, getAuthorById, newAuthor } = require('./models/author')
const { getBooks, getByAuthorId, getBookById, newBook } = require('./models/book')

const app = express();
app.use(express.json())

app.get('/authors/:id', async (req, res) => {
	const { id } = req.params;
	const author = await getAuthorById(id);

	!author ? res.status(404).json({ message: 'Id not found' })
	: res.status(200).json(author);
});

app.get('/books/:id', async (req, res) => {
	const { id } = req.params;
	const book = await getBookById(id);
	
	!book ? res.status(404).json({ message: 'Id not found' })
	: res.status(200).json(book);
})

app.get('/authors', async (_req, res) => {
	const authors = await getAuthors();
	
	return res.status(200).json(authors);
});

app.get('/books', async (req, res) => {
	const { author_id } = req.query;

	const books = (author_id)
	? await getByAuthorId(author_id)
	: await getBooks();

	res.status(200).json(books);
});

app.post('/authors', async (req, res) => {
	const authorNew = req.body;
	const add = await newAuthor(authorNew);

	if(!add) return res.status(404).json({ message: 'Invalid Data'});
	return res.status(202).json(add);
});

app.post('/books', async (req, res) => {
	const bookNew = req.body;
	const add = await newBook(bookNew);

	if(!add) return res.status(404).json({ message: 'Invalid Data'});
	return res.status(202).json(add);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});