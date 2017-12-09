import { Injectable } from '@angular/core';
import { TodoListStorageService } from './todo-list-storage.service';


@Injectable()
export class TodoListService {
  private todoList = [
    { title: 'install NodeJS' },
    { title: 'install Angular CLI' },
    { title: 'create new app' },
    { title: 'serve app' },
    { title: 'develop app' },
    { title: 'deploy app' },
  ];
  constructor(private localStorage:TodoListStorageService) {
    
   };

  getTodoList() {
    return this.localStorage.get();
  }

  addItem(item) { 
    return this.localStorage.post(item);
  }
  removeItem(item) {
    return this.localStorage.destroy(item);
  }
  
}
