import { v4 } from 'uuid';

export default class Task {
  id: string = v4();

  title: string;

  order: number;

  description: string;

  userId: string | null;

  boardId: string;

  columnId: string;

  constructor(title: string, order: number, description: string, userId: string | null, boardId: string, columnId: string) {
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}
