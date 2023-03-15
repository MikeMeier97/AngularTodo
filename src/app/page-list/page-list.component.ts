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
      label: 'test', 
      status: false, 
      position: 1,
      }
    ]
    this.$todosDone = [
      {
      id: 1, 
      label: 'test', 
      status: false, 
      position: 1,
      }
    ]
  }

}
