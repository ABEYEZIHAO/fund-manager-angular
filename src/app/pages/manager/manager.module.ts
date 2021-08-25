import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ManagerRoutingModule } from './manager-routing.module';

import { ManagerComponent } from './manager.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { CommonModule } from '@angular/common';


@NgModule({
  imports: [ManagerRoutingModule, NzTableModule, NzDividerModule, CommonModule, NzDropDownModule, FormsModule, NzIconModule],
  declarations: [ManagerComponent],
  exports: [ManagerComponent]
})
export class ManagerModule { }
