const connection = require('./connection');
const { getAuthorById } = require('./author')

const getBooks = async () => {
	const [books] = await connection.query('SELECT * FROM model_example.books;');
	return books.map(({ id, title, author_id}) => ({
    id: id,
    title: title,
    authorId: author_id
  }));
};

const getByAuthorId = async (authorId) => {
  const query = 'SELECT * FROM model_example.books WHERE author_id=?;';

  const [books] = await connection.execute(query, [authorId]);

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
};

const getBookById = async (id) => {
  const query = 'SELECT * FROM model_example.books WHERE id = ?;';

  const [book] = await connection.query(query, [id]);

	if(book.length < 1) return null;

  return book.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));

};

const newBook = async ({ title, authorId }) => {
	if (!title || typeof title !== 'string' || title.length < 3) return false;
  const isValidAuthorId = await getAuthorById(authorId);
	if (!authorId || typeof authorId !== 'number' || !isValidAuthorId) return false;

	const queryAdd = 'insert into model_example.books (title, author_Id) values (?, ?)'
	await connection.query(queryAdd, [title, authorId]);

	const [ book ] = await connection.execute('SELECT * from model_example.books where title = ? and author_Id = ?',
	[title, authorId]);
	return book.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
}

module.exports = {
  getBooks,
  getByAuthorId,
  getBookById,
  newBook,
};