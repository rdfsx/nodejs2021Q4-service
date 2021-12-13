const columnsRepo = require('./column.memory.repository');

const getAll = () => columnsRepo.getAll();
const create = (column) => columnsRepo.create(column);
const getById = (id) => columnsRepo.getById(id);
const update = (id, column) => columnsRepo.update(id, column);
const delete_ = (id) => columnsRepo.delete_(id);

module.exports = { getAll, create, getById, update, delete_ };