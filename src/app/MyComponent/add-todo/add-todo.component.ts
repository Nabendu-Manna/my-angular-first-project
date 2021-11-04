import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { EventEmitter } from 'stream';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();

  title!: string;
  time!: number;

  constructor() { }

  ngOnInit(): void {}

  onSubmit(){
    let todo = {
      no: 1,
      title: this.title,
      time: this.time,
      status: true
    };
    // console.log("--- submit --");


    this.addTodo.emit(todo);
  }
}
