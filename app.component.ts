import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';

  isHomePage = true;

  todos: {title: string, id:number }[]=[
    {title: 'todo1', id: 1},
    {title: 'todo2', id: 2},
    {title: 'todo3', id: 3},
    {title: 'todo4', id: 4},
    {title: 'todo5', id: 5},
    {title: 'todo6', id: 6},
    {title: 'todo7', id: 7},
    {title: 'todo8', id: 8},
]

todoTitle : string = "";
addTodo() {
  const todo = {
    title : this.todoTitle,
    id : new Date().getTime()
  }
  this.todos.push(todo);
  this.todoTitle="";
}

deleteTodo(id : number){
  const todoIndex = this.todos.findIndex(todo => todo.id == id);
  if(todoIndex > -1){
    this.todos.splice(todoIndex, 1)
  }
}



}

