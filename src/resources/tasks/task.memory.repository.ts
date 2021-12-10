import Task from './task.model';

export const tasks: Array<Task> = [];

export const getAll = async (boardId: string) => tasks.filter(task => task.boardId === boardId);
export const create = async (task: Task) => {
  const taskDb = new Task(task.title, task.order, task.description, task.userId, task.boardId, task.columnId);
  tasks.push(taskDb);
  return taskDb;
};
export const getById = async (id: string) => tasks.find((task) => task.id === id);
export const update = async (id: string, task: Task) => {
  const index = tasks.findIndex((c) => c.id === id);
  return Object.assign(tasks[index], task);
};
export const delete_ = async (id: string) => {
  const index = tasks.findIndex((t) => t.id === id);
  tasks.splice(index, 1);
  return true;
};
