import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/_interface/todo';
import { Eventping } from 'src/app/_interface/eventping';
@Component({
  selector: 'bm-template-todo-form',
  templateUrl: './template-todo-form.component.html',
  styleUrls: ['./template-todo-form.component.sass']
})
export class TemplateTodoFormComponent {
  public todo$: Todo; 
  @Output() ping: EventEmitter<Todo> = new EventEmitter<Todo>();
  
  public createToDo(event?: any): void {
    this.ping.emit(this.todo$);
    this.todo$ = {
      id: undefined,
      label: undefined, 
      status: false,
      position: undefined
    }
  }

  constructor() {
    this.todo$ = {
      id: undefined,
      label: undefined, 
      status: false,
      position: undefined
    }
  }

}
