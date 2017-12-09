import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'todo-list-manager',
  template: 
  `
  <div class="todo-app">
  <todo-input class="todo-add" (submit)="addItem($event)"></todo-input>
      <ul>
        <li *ngFor="let item of todoList">
          <todo-item [todoItem]="item" (remove)="removeItem($event)"></todo-item>
        </li>
      </ul>  
  </div>
  `,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  title = 'Todo List';
  todoList = [];
  constructor(private todoListService:TodoListService) { }

  addItem(title:string): void { 
    this.todoList = this.todoListService.addItem({ title }); 
  }

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }
  removeItem(item) {
    this.todoList = this.todoListService.removeItem(item);
  }
}
