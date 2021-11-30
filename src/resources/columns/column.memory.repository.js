const Column = require('./column.model');

const columns = [];

const getAll = async () => columns;
const create = async (column) => {
  const columnDb = new Column(column);
  columns.push(columnDb);
  return columnDb;
};
const getById = async (id) => columns.find((column) => column.id === id);
const update = async (id, column) => {
  const index = columns.findIndex((c) => c.id === id);
  return Object.assign(columns[index], column);
};
const delete_ = async (id) => {
  const index = columns.findIndex((c) => c.id === id);
  columns.splice(index, 1);
  return true;
};

module.exports = { getAll, create, getById, update, delete_ };