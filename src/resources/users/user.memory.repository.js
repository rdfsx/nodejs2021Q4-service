const User = require('./user.model');

const users = [];

const getAll = async () => users;
const create = async (user) => {
  const userDb = new User(user);
  users.push(userDb);
  return userDb;
};
const getById = async (id) => users.find((user) => user.id === id);
const update = async (id, user) => {
  const index = users.findIndex((u) => u.id === id);
  return Object.assign(users[index], user);
};
const delete_ = async (id) => {
  const index = users.findIndex((u) => u.id === id);
  users.splice(index, 1);
  return true;
};

module.exports = { getAll, create, getById, update, delete_ };
