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
export const getById = async (id: string) => users.find((user: User) => user.id === id);
export const update = async (id: string, user: User) => {
  const userDb = users.find((u) => u.id === id);
  const index = users.findIndex((u) => u.id === id);
  if (userDb) {
    userDb.name = user.name;
    userDb.login = user.login;
    userDb.password = user.password;
    users[index] = userDb;
    return userDb;
  }
};
export const delete_ = async (id: string) => {
  const index = users.findIndex((u) => u.id === id);
  tasks.forEach((task: Task) => {
    if (task.userId === id) {
      tasks[tasks.indexOf(task)].userId = null;
    }
  });
  users.splice(index, 1);
  return true;
};
