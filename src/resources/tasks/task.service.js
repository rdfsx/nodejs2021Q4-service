const tasksRepo = require('./task.memory.repository');

const getAll = (boardId) => tasksRepo.getAll(boardId);
const create = (task) => tasksRepo.create(task);
const getById = (id) => tasksRepo.getById(id);
const update = (id, task) => tasksRepo.update(id, task);
const delete_ = (id) => tasksRepo.delete_(id);

module.exports = { getAll, create, getById, update, delete_ };