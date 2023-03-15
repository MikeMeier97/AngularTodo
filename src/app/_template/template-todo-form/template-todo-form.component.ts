import { Component } from '@angular/core';
import { Todo } from 'src/app/_interface/todo';

@Component({
  selector: 'bm-template-todo-form',
  templateUrl: './template-todo-form.component.html',
  styleUrls: ['./template-todo-form.component.sass']
})
export class TemplateTodoFormComponent {
  public todo$: Todo; 
  
  public createToDo(event?: any): void {

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
