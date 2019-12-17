import { Injectable } from '@angular/core';
import {Todo} from '../Model/todo';
import {LoggerService} from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];
  constructor(
    private loggerService: LoggerService
  ) { }
  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
  getTodos() {
    return this.todos;
  }
  logTodos() {
    this.loggerService.logger(this.todos);
  }
}
