import { NgModule } from '@angular/core';

import { PositionRoutingModule } from './position-routing.module';

import { PositionComponent } from './position.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [PositionRoutingModule, NzTableModule, NzDividerModule, CommonModule],
  declarations: [PositionComponent],
  exports: [PositionComponent]
})
export class PositionModule { }
