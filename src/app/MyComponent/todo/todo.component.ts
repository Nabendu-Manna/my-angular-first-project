import { Component, OnInit } from '@angular/core';
import {Todo} from '../../Todo';
// import {Todo} from '../../Todo';
import {NgbConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[];
  constructor() {

    let JSONDatas: Todo[] = [
      {
        no: 1,
        title: "1st todo",
        time: 60,
        status:true
      },{
        no: 2,
        title: "2st todo",
        time: 30,
        status:true
      },{
        no: 3,
        title: "3st todo",
        time: 10,
        status:true
      }

    ];

    console.log("hi");

    localStorage.setItem("todos", JSON.stringify(JSONDatas));

    let todoa: any;
    todoa = localStorage.getItem("todos");
    todoa = JSON.parse(todoa);
    console.log(todoa);
    this.todos = todoa;

    /* localStorage.setItem("key", JSON.stringify(JSONDatas));
    localStorage.removeItem("key"); */

    /*this.todos = [
      {
        no: 1,
        title: "1st todo",
        time: 60,
        status:true
      },{
        no: 2,
        title: "2st todo",
        time: 30,
        status:true
      },{
        no: 3,
        title: "3st todo",
        time: 10,
        status:true
      }
    ];*/
  }

  ngOnInit(): void {
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    console.log("---  add todo---");
  }

}
