const Users = require('./Users.json');

const mockCreate = (currUsers, newUser) => {
  if(!newUser){
    return;
  }

  const newData = newUser;
  if(!!currUsers[0].id) {
    newData.id = Date.now();
  }
  currUsers.push(newData);
  return newData;
};

const User = {
  create: async (newUser) => mockCreate(Users, newUser),
  findAll: async () => Users,
};

module.exports = {
  User,
};