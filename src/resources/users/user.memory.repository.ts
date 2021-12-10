import User from './user.model';
import { tasks } from '../tasks/task.memory.repository';
import Task from '../tasks/task.model';

export const users: Array<User> = [];

export const getAll = async () => users;
export const create = async (user: User) => {
  const userDb = new User(user.name, user.login, user.password);
  users.push(userDb);
  return userDb;
};
export const getById = async (id: string) => users.find((user) => user.id === id);
export const update = async (id: string, user: User) => {
  const index = users.findIndex((u) => u.id === id);
  return Object.assign(users[index], user);
};
export const delete_ = async (id: string) => {
  const index = users.findIndex((u) => u.id === id);
  tasks.forEach((task: Task) => {
    if (task.userId === id) {
      Object.assign(task, { userId: null });
    }
  });
  users.splice(index, 1);
  return true;
};
