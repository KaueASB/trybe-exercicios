const connection = require('./connection');

// Cria uma string com o nome completo do autor
const getNewAuthor = ({id, firstName, middleName, lastName}) => {

	// Note que `Boolean` é uma função que recebe um parâmetro e retorna true ou false
	// nesse caso, se middle_name for `undefined` ou uma string vazia o retorno será `false`
		const fullName = [firstName, middleName, lastName]
			.filter(Boolean)
			.join(' ');
	
		return {
		id,
		firstName,
		middleName,
		lastName,
		fullName,
		};
	};

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
	return authors.map(serialize).map(getNewAuthor);
};

const getAuthorById = async (id) => {
	const queryById = 'select * from model_example.authors where id = ?'
	const [author] = await connection.query(queryById, [id]);

	if(author.length < 1) return null;
	return author.map(serialize).map(getNewAuthor);
}

const newAuthor = async ({ firstName, middleName, lastName}) => {
	if (!firstName || typeof firstName !== 'string') return false;
	if (!lastName || typeof lastName !== 'string') return false;

	const queryAdd = 'insert into model_example.authors (first_name, middle_name, last_name) values (?, ?, ?)'
	await connection.query(queryAdd, [firstName, middleName, lastName]);

	const [ author ] = await connection.execute('SELECT * from model_example.authors where first_name = ? and last_name = ?',
	[ firstName, lastName ]);
	return author.map(serialize).map(getNewAuthor);
}

module.exports = {
	getAuthors,
	getAuthorById,
	newAuthor,
};