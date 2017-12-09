import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
  <p class="todo-item">
  <input type="checkbox" (click)="completeItem()"/>
      <span class="todo-title">{{todoItem.title}}</span>
      <button class="btn-red" (click)="removeItem()">
      remove
    </button>
  </p>
  
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() todoItem: any;
  @Output() remove:EventEmitter<any> = new EventEmitter();

  isComplete: boolean = false;
  
  completeItem() {
    this.isComplete = !this.isComplete;
  }
  
  constructor() { }

  ngOnInit() {
  }

  removeItem() {
    this.remove.emit(this.todoItem);
  }
}
