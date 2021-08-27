import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMessageModule } from 'ng-zorro-antd/message';

import { TodoRoutingModule } from './todo-routing.module';

import { TodoComponent } from './todo.component';

@NgModule({
  imports: [TodoRoutingModule, NzMessageModule, NzListModule, CommonModule, NzBreadCrumbModule, NzIconModule, NzBreadCrumbModule],
  declarations: [TodoComponent],
  exports: [TodoComponent]
})
export class TodoModule { }