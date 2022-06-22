const validUsers = [
  { username: 'MestreCuca', password: 'MinhaSenhaSuperSeguraSqn' },
  // { username: 'McRonald', password: 'Senha123Mudar' },
  // { username: 'Burger Queen', password: 'Senha123Mudar' },
  // { username: 'UpWay', password: 'Senha123Mudar' },
];

const authMiddleware = (req, res, next) => {
  const { username, password } = req.headers;

  // verifica se o usuário e senha estão vazios
  if (!username || !password) {
    return res.status(401).json({ message: 'Username or password can`t be blank!' });
  }

  // verifica se os dados do usuário estão corretos
  if (username !== validUsers[0].username || password !== validUsers[0].password) {
    return res.status(401).json({ message: 'Invalid credentials!' });
    
  }

  // verifica se o usuário existe
  const foundUser = validUsers.find((user) => user.username === username);

  // return de erro caso o usuário não exista
  if (!foundUser) return res.status(401).json({ message: 'Invalid credentials!' });

  // return de erro casso o usuário ou senha estejam incorretos
  if (!(username === foundUser.username  && password === foundUser.password)) {
    return res.status(401).json({ message: 'Invalid credentials!' });
  }

  // Aqui estamos passando o usuário encontrado para o próximo middleware.
  req.user = foundUser;

  next();
};

module.exports = authMiddleware;