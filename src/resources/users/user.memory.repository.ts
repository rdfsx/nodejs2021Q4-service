import User from './user.model';
import { tasks } from '../tasks/task.memory.repository';
import Task from '../tasks/task.model';

export const users: Array<User> = [];

/**
 * Returns all users from memory
 * @returns Array<User>
 */
export const getAll = async () => users;
/**
 * Create and return a new user
 * @param user - User
 * @returns User
 */
export const create = async (user: User) => {
  const userDb = new User(user.name, user.login, user.password);
  users.push(userDb);
  return userDb;
};
/**
 * Returns a user by id
 * @param id - User id string
 * @returns User
 */
export const getById = async (id: string) => users.find((user: User) => user.id === id);
/**
 * Update a user by id
 * @param id - User id string
 * @param user - User
 * @returns User or undefined if not found
 */
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
  return undefined;
};
/**
 * Delete a user by id
 * @param id - User id string
 * @returns User
 */
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
