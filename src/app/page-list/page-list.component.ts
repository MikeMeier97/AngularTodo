import { Component } from '@angular/core';

@Component({
  selector: 'bm-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.sass']
})
export class PageListComponent {
  $todos: string = '';
  public toDoDoneShow: boolean;
  public toDoShow: boolean;
  constructor()  {
    this.toDoShow = true;
    this.toDoDoneShow = false;
  }

}
