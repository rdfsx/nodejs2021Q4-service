const User = require('./user.model');

const users = [];

const getAll = async () => users;
const createUser = async (user) => {
  const userDb = new User(user);
  users.push(userDb);
  return userDb;
};
const getUserById = async (id) => users.find((user) => user.id === id);
const updateUser = async (id, user) => {
  const index = users.findIndex((u) => u.id === id);
  return Object.assign(users[index], user);
};
const deleteUser = async (id) => {
  const index = users.findIndex((u) => u.id === id);
  users.splice(index, 1);
  return true;
};

module.exports = { getAll, createUser, getUserById, updateUser, deleteUser };
