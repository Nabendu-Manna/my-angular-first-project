import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './MyComponent/add-todo/add-todo.component';
import { AllTodoComponent } from './MyComponent/all-todo/all-todo.component';
import { TodoComponent } from './MyComponent/todo/todo.component';



const routes: Routes = [
  { path: 'all-todo', component: AllTodoComponent },
  { path: 'todo', component: TodoComponent},
  { path: 'add-todo', component: AddTodoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
