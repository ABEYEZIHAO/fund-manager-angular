import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PositionRoutingModule } from './position-routing.module';

import { PositionComponent } from './position.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { CommonModule } from '@angular/common';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';


@NgModule({
  imports: [PositionRoutingModule, NzTableModule, NzDividerModule, CommonModule, NzDropDownModule, FormsModule, NzIconModule, NzBreadCrumbModule],
  declarations: [PositionComponent],
  exports: [PositionComponent]
})
export class PositionModule { }
