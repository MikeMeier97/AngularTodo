import { Component } from '@angular/core';
import { Todo } from 'src/app/_interface/todo';
@Component({
  selector: 'bm-template-todo',
  templateUrl: './template-todo.component.html',
  styleUrls: ['./template-todo.component.sass']
})
export class TemplateTodoComponent {
  public todo$: Todo;
  constructor() {
    this.todo$ = {
      id: 1, 
      label: 'Wasser Kaufen',
      status: false,
      position: 1
    }
  }
  public changeCheck(event?: any): void {
    this.todo$.status = !this.todo$.status;
  }
  public changeLabel(event?: any): void {
    //TODO
  }
  public deletTodo(event?: any): void {
    //TODO
  }
}
