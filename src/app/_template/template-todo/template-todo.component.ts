import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Eventping } from 'src/app/_interface/eventping';
import { Todo } from 'src/app/_interface/todo';
@Component({
  selector: 'bm-template-todo',
  templateUrl: './template-todo.component.html',
  styleUrls: ['./template-todo.component.sass']
})
export class TemplateTodoComponent {
  @Input() $todo: Todo;
  @Output() ping: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
    this.$todo = {
      id: 1, 
      label: 'Wasser Kaufen',
      status: false,
      position: 1
    }
  }
  public changeCheck(event?: any): void {
    this.$todo.status = !this.$todo.status;
    const eventObject: Eventping = {
      label: 'check',
      object: this.$todo
    };
    this.ping.emit(eventObject);
  }
  public changeLabel(event?: any): void {
    const eventObject: Eventping = {
      label: 'label',
      object: this.$todo
    };
    this.ping.emit(eventObject);
  }
  public deletTodo(event?: any): void {
    const eventObject: Eventping = {
      label: 'delete',
      object: this.$todo
    };
    this.ping.emit(eventObject);
  }
}
