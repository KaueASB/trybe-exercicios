const connection = require('./connection');

// Converte o nome dos campos de snake_case para camelCase
const serialize = (authorData) => ({
	id: authorData.id,
	firstName: authorData.first_name,
	middleName: authorData.middle_name,
	lastName: authorData.last_name});

// Busca todas as pessoas autoras do banco.
const getAuthors = async () => {
	const [authors] = await connection.execute( // ou connection.query => é a mesma coisa
		'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
	);
	return authors.map(serialize);
};

const getAuthorById = async (id) => {
	const queryById = 'select * from model_example.authors where id = ?'
	const [author] = await connection.query(queryById, [id]);

	if(author.length < 1) return null;
	return author.map(serialize).map(getNewAuthor);
}

const newAuthor = async (firstName, middleName, lastName) => {

	const sqlInsert = 'insert into model_example.authors (first_name, middle_name, last_name) values (?, ?, ?)'
	await connection.query(sqlInsert, [firstName, middleName, lastName]);

	const sqlGet = 'SELECT * from model_example.authors where first_name = ? and last_name = ?';
	const [ author ] = await connection.query(sqlGet, [ firstName, lastName ]);
	return author.map(serialize);
}

module.exports = {
	getAuthors,
	getAuthorById,
	newAuthor,
};