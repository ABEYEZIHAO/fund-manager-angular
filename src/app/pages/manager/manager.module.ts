import { NgModule } from '@angular/core';

import { ManagerRoutingModule } from './manager-routing.module';

import { ManagerComponent } from './manager.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [ManagerRoutingModule, NzTableModule, NzDividerModule, CommonModule],
  declarations: [ManagerComponent],
  exports: [ManagerComponent]
})
export class ManagerModule { }
