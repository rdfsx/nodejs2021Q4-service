import Board from './board.model';
import { tasks } from '../tasks/task.memory.repository';

const boards: Array<Board> = [];

/**
 * Returns all boards from memory
 * @returns Array<Board>
 */
export const getAll = async () => boards;
/**
 * Create and return a new board
 * @param board - Board to create
 * @returns Board
 */
export const create = async (board: Board) => {
  const boardDb = new Board(board.title, board.columns);
  boards.push(boardDb);
  return boardDb;
};
/**
 * Returns a board by id
 * @param id - Board id string
 * @returns Board
 */
export const getById = async (id: string) => boards.find((board) => board.id === id);
/**
 * Update a board
 * @param id - Board id string
 * @param board - Board to update
 * @returns Board
 */
export const update = async (id: string, board: Board) => {
  const index = boards.findIndex((b) => b.id === id);
  boards[index] = board;
  return board;
};
/**
 * Delete a board
 * @param id - Board id string
 * @returns Board
 */
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
