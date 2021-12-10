import { v4 } from 'uuid';
import Column from '../columns/column.model';

export default class Board {
  id: string = v4();

  title: string;

  columns: Array<Column> = [];

  constructor(title: string, columns: Array<Column>) {
    this.title = title;
    this.columns = columns;
  }
}
