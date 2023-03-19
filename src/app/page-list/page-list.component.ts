import { Component, OnInit } from '@angular/core';
import { Todo } from '../_interface/todo';
import { Eventping } from '../_interface/eventping';

@Component({
  selector: 'bm-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.sass'],
})
export class PageListComponent implements OnInit {
  public toDoDoneShow: boolean;
  public toDoShow: boolean;
  public $todos: Todo[];
  public $todosDone: Todo[];
  public $todosLength: any;
  ngOnInit(): void {
    
  }
  constructor() {
    this.toDoShow = true;
    this.toDoDoneShow = false;
    this.$todos = [];
    this.$todosDone = [];
    this.$todosLength = 0; 
    this.loadTodosFromStorage();
  }
  public loadTodosFromStorage(): void {
    const storedTodos = localStorage.getItem('todos');
    const storedTodosDone = localStorage.getItem('todosDone')
    if (storedTodos !== null) {
      const parsedTodos = JSON.parse(storedTodos) as Todo[];
      this.$todos.push(...parsedTodos);
    }
    if (storedTodosDone !== null) {
      const parsedTodosDone = JSON.parse(storedTodosDone) as Todo[];
      this.$todosDone.push(...parsedTodosDone);
    }
  }

  public pushInStorage(): void {
    const todosAsString = JSON.stringify(this.$todos);
    const todosDoneAsString = JSON.stringify(this.$todosDone);
    localStorage.setItem('todos', todosAsString);
    localStorage.setItem('todosDone', todosDoneAsString);
  }

  public create(event: Todo): void {
    event.position = this.$todosLength;
    this.$todosLength++;
    this.$todos.push(event);
    this.pushInStorage();
  }
  public update(event: Eventping) {
    if ('check' === event.label) {
      if (!event.object.status) {
        this.$todosDone.splice(this.$todosDone.indexOf(event.object), 1);
        this.$todos.push(event.object);
      } else {
        this.$todos.splice(this.$todos.indexOf(event.object), 1);
        this.$todosDone.push(event.object);
      }
    }
    if ('delete' === event.label) {
      if (event.object.status) {
        this.$todosDone.splice(this.$todosDone.indexOf(event.object), 1);
      } else {
        this.$todos.splice(this.$todos.indexOf(event.object), 1);
      }
    }
    if ('label' === event.label) {
      if (event.object.status) {
        this.$todosDone.forEach((toDo: Todo) => {
          if (toDo.id === event.object.id) {
            toDo.label = event.object.label;
          }
        });
      }
    }
    this.pushInStorage();
  }
}
