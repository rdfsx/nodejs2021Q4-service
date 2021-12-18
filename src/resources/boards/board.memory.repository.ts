import Board from './board.model';
import { tasks } from '../tasks/task.memory.repository';

const boards: Array<Board> = [];

export const getAll = async () => boards;
export const create = async (board: Board) => {
  const boardDb = new Board(board.title, board.columns);
  boards.push(boardDb);
  return boardDb;
};
export const getById = async (id: string) => boards.find((board) => board.id === id);
export const update = async (id: string, board: Board) => {
  const index = boards.findIndex((b) => b.id === id);
  boards[index] = board;
  return board;
};
export const delete_ = async (id: string) => {
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
