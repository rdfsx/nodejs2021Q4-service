import * as tasksRepo from './task.memory.repository';
import Task from './task.model';

export const getAll = (boardId: string) => tasksRepo.getAll(boardId);
export const create = (task: Task) => tasksRepo.create(task);
export const getById = (id: string) => tasksRepo.getById(id);
export const update = (id: string, task: Task) => tasksRepo.update(id, task);
export const delete_ = (id: string) => tasksRepo.delete_(id);
