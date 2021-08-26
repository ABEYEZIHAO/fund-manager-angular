import { NgModule } from '@angular/core';

import { PositionRoutingModule } from './position-routing.module';

import { PositionComponent } from './position/position.component';
// import { UpdatePositionComponent } from './update-position/update-position.component';
// import { CreatePositionComponent } from './create-position/create-position.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [PositionRoutingModule,NzTableModule, NzDividerModule,CommonModule],
  declarations: [PositionComponent],
  exports: [PositionComponent]
})
export class PositionModule { }
