import * as usersRepo from './user.memory.repository';
import User from './user.model';

export const getAll = () => usersRepo.getAll();
export const create = (user: User) => usersRepo.create(user);
export const getById = (id: string) => usersRepo.getById(id);
export const update = (id: string, user: User) => usersRepo.update(id, user);
export const delete_ = (id: string) => usersRepo.delete_(id);
