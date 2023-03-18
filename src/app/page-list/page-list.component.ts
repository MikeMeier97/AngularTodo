import { Component } from '@angular/core';
import { Todo } from '../_interface/todo';
import { Eventping } from '../_interface/eventping';

@Component({
  selector: 'bm-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.sass']
})
export class PageListComponent {
  public toDoDoneShow: boolean;
  public toDoShow: boolean;
  public $todos: Todo[];
  public $todosDone: Todo[];
  constructor()  {
    this.toDoShow = true;
    this.toDoDoneShow = false;
    this.$todos = [
      {
      id: 1, 
      label: 'Rechnungen schreiben', 
      status: false, 
      position: 1,
      },
      {
        id: 1, 
        label: 'Kochen', 
        status: false, 
        position: 1,
        }
    ];
    this.$todosDone = [
      {
      id: 1, 
      label: 'Einkaufen', 
      status: false, 
      position: 1,
      }
    ];
  }
  public create(event: Todo): void {
    event.position = this.$todos.length + 1; 
    this.$todos.push(event);
  }
  public update(event: Eventping) {
    if('check' === event.label) {
      if(!event.object.status) {
        this.$todosDone.splice(this.$todosDone.indexOf(event.object), 1);
        this.$todos.push(event.object);
      } else {
        this.$todos.splice(this.$todos.indexOf(event.object), 1);
        this.$todosDone.push(event.object);
      }
    }
    if('delete' === event.label) {
      if(event.object.status) {
        this.$todosDone.splice(this.$todosDone.indexOf(event.object), 1);
      } else {
        this.$todos.splice(this.$todos.indexOf(event.object), 1);
      }
    }
    if('label' === event.label) {
      if(event.object.status) {
        this.$todosDone.forEach((toDo: Todo) => {
          if(toDo.id === event.object.id) {
            toDo.label = event.object.label;
          }
        });
      } else {
        this.$todos.forEach((todo: Todo) => {
          if(todo.id === event.object.id) {
            todo.label = event.object.label;
          }
        });
      }
    }
  }
}
