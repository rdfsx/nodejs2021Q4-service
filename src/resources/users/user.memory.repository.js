const User = require('./user.model');
const { tasks } = require('../tasks/task.memory.repository');

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
  tasks.forEach((task) => {
    if (task.userId === id) {
      Object.assign(task, { userId: null });
    }
  });
  users.splice(index, 1);
  return true;
};

module.exports = { getAll, create, getById, update, delete_ };
