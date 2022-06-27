const { getAll, findById, createAuthor } = require('../services/author');

const getAuthor = async (_req, res) => {
  const authors = await getAll();

  res.status(200).json(authors);
};

const getAuthorById =  async (req, res) => {
  const { id } = req.params;

  const author = await findById(id);

  if (!author) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(author);
};

const createNewAuthor =  async (req, res) => {
  const { firstName, middleName, lastName } = req.body;

  const addAuthor = await createAuthor(firstName, middleName, lastName);
	if(!addAuthor) return res.status(404).json({ message: 'Invalid Data'});

  res.status(201).json(addAuthor);
};

module.exports = {
  getAuthor,
  getAuthorById,
  createNewAuthor
}