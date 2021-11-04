import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './MyComponent/todo/todo.component';
import { AppTodoItemComponent } from './MyComponent/app-todo-item/app-todo-item.component';
import { TodoItemComponent } from './MyComponent/todo-item/todo-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AddTodoComponent } from './MyComponent/add-todo/add-todo.component';
import { AllTodoComponent } from './MyComponent/all-todo/all-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AppTodoItemComponent,
    TodoItemComponent,
    AddTodoComponent,
    AllTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
