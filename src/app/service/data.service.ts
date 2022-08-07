import { Injectable } from '@angular/core';
import { Todo } from '../Todo';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  todos : Todo[] =[
   {task:'Complete homework', completed:true},
   {task:'Read new book', completed:false},
   {task:'Get a job', completed:false},
  ]
  constructor() { }
  getAllToDos(){
    return this.todos;
  }
  // adToDo(todo:Todo){
  //   this.todos.push(todo)
  // }
  // updateTodo(index:number, updateTodo:Todo){
  //   this.todos[index] = updateTodo;
  // }
  // deleteTodo(index:number){
  //   this.todos.splice(index,1)
  // }
}
