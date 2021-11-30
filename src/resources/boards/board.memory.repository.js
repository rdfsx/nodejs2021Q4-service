const Board = require('./board.model');

const boards = [];

const getAll = async () => boards;
const createBoard = async (board) => {
  const boardDb = new Board(board);
  boards.push(boardDb);
  return boardDb;
};
const getBoardById = async (id) => boards.find((board) => board.id === id);
const updateBoard = async (id, board) => {
  const index = boards.findIndex((b) => b.id === id);
  return Object.assign(boards[index], board);
};
const deleteBoard = async (id) => {
  const index = boards.findIndex((b) => b.id === id);
  boards.splice(index, 1);
  return true;
};

module.exports = { getAll, createBoard, getBoardById, updateBoard, deleteBoard };