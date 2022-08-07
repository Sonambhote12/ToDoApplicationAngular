import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[] =[];
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.todos = this.dataService.getAllToDos();
  }

}
