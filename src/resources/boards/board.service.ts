import * as boardsRepo from './board.memory.repository';
import Board from './board.model';

export const getAll = () => boardsRepo.getAll();
export const create = (board: Board) => boardsRepo.create(board);
export const getById = (id: string) => boardsRepo.getById(id);
export const update = (id: string, board: Board) => boardsRepo.update(id, board);
export const delete_ = (id: string) => boardsRepo.delete_(id);
