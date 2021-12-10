import { v4 } from 'uuid';


export default class User {
  id: string = v4();

  name: string;

  login: string;

  password: string;

  constructor(name: string, login: string, password: string) {
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user: User) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}
