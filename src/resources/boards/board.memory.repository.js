const Board = require('./board.model');

const boards = [];

const getAll = async () => boards;
const create = async (board) => {
  const boardDb = new Board(board);
  boards.push(boardDb);
  return boardDb;
};
const getById = async (id) => boards.find((board) => board.id === id);
const update = async (id, board) => {
  const index = boards.findIndex((b) => b.id === id);
  return Object.assign(boards[index], board);
};
const delete_ = async (id) => {
  const index = boards.findIndex((b) => b.id === id);
  boards.splice(index, 1);
  return true;
};

module.exports = { getAll, create, getById, update, delete_ };