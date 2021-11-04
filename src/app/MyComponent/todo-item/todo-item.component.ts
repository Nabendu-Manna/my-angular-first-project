import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';
import {NgbConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!:Todo;
  constructor() { }

  ngOnInit(): void {
  }

  deleteItem(status: boolean){
    this.todo.status = status;
    // console.log("-----delete------", this.todo.status);
  }

}
