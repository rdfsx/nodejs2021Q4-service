const Task = require('./task.model');

const tasks = [];

const getAll = async () => tasks;
const create = async (task) => {
  const taskDb = new Task(task);
  tasks.push(taskDb);
  return taskDb;
};
const getById = async (id) => tasks.find((task) => task.id === id);
const update = async (id, task) => {
  const index = tasks.findIndex((c) => c.id === id);
  return Object.assign(tasks[index], task);
};
const delete_ = async (id) => {
  const index = tasks.findIndex((t) => t.id === id);
  tasks.splice(index, 1);
  return true;
};

module.exports = { getAll, create, getById, update, delete_ };