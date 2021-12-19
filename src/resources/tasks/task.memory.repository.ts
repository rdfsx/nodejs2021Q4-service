import Task from './task.model';

export const tasks: Array<Task> = [];

/**
 * Returns all tasks by given board id
 * @param boardId - Board id string
 * @returns Array<Task>
 */
export const getAll = async (boardId: string) => tasks.filter(task => task.boardId === boardId);
/**
 * Creates new task and returns it
 * @param task - Task object
 * @returns Task
 */
export const create = async (task: Task) => {
  const taskDb = new Task(task.title, task.order, task.description, task.userId, task.boardId, task.columnId);
  tasks.push(taskDb);
  return taskDb;
};
/**
 * Gets task by given id
 * @param id - Task id string
 * @returns Task
 */
export const getById = async (id: string) => tasks.find((task) => task.id === id);
/**
 * Updates task by given id
 * @param id - Task id string
 * @param task - Task object
 * @returns Task
 */
export const update = async (id: string, task: Task) => {
  const index = tasks.findIndex((c) => c.id === id);
  tasks[index] = task;
  return tasks[index];
};
/**
 * Deletes task by given id
 * @param id - Task id string
 * @returns true if task was deleted
 */
export const delete_ = async (id: string) => {
  const index = tasks.findIndex((t) => t.id === id);
  tasks.splice(index, 1);
  return true;
};
