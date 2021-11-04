import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-all-todo',
  templateUrl: './all-todo.component.html',
  styleUrls: ['./all-todo.component.css']
})
export class AllTodoComponent implements OnInit {

  // @Input() todos!: Todo[];
  todos: Todo[];
  constructor() {
    this.todos = [
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
  }

  ngOnInit(): void {
  }

}
