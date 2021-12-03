const Board = require('./board.model');
const { tasks } = require('../tasks/task.memory.repository');

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
  let i = 0;
  while (i < tasks.length) {
    if (tasks[i].boardId === id) {
      tasks.splice(i, 1);
    } else {
      i += 1;
    }
  }
  return true;
};

module.exports = { getAll, create, getById, update, delete_ };