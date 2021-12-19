import { v4 } from 'uuid';

export default class Column {
  id: string = v4();

  title: string;

  order: number;

  constructor(title: string, order: number) {
    this.title = title;
    this.order = order;
  }
}
