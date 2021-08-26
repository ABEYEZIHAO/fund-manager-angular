import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMessageModule } from 'ng-zorro-antd/message';

import { TodoRoutingModule } from './todo-routing.module';

import { TodoComponent } from './todo.component';

@NgModule({
  imports: [TodoRoutingModule, NzMessageModule, NzListModule, CommonModule],
  declarations: [TodoComponent],
  exports: [TodoComponent]
})
export class TodoModule { }