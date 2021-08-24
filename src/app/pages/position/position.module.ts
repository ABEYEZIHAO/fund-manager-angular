import { NgModule } from '@angular/core';

import { PositionRoutingModule } from './position-routing.module';

import { PositionComponent } from './position.component';


@NgModule({
  imports: [PositionRoutingModule],
  declarations: [PositionComponent],
  exports: [PositionComponent]
})
export class PositionModule { }
