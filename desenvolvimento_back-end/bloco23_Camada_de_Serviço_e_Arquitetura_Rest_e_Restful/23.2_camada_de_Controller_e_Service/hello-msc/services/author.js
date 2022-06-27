const { getAuthors, getAuthorById, newAuthor } = require('../models/author');

const getNewAuthor = ({id, firstName, middleName, lastName}) => {
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

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
};

const getAll = async () => {
  const authors = await getAuthors();
  return authors.map(getNewAuthor);
};

const findById = async (id) => {
  const author = await getAuthorById(id);
  if (!author) return null;
  return getNewAuthor(author);
};

const createAuthor = async (firstName, middleName, lastName) => {
  const validAuthor = isValid(firstName, middleName, lastName);
  if (!validAuthor) return false;
  const author = await newAuthor(firstName, middleName, lastName);
  return author;
};

module.exports = {
  getAll,
  findById,
  createAuthor,
};