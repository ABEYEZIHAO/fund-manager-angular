import { NgModule } from '@angular/core';

import { ManagerRoutingModule } from './manager-routing.module';

import { ManagerComponent } from './manager.component';


@NgModule({
  imports: [ManagerRoutingModule],
  declarations: [ManagerComponent],
  exports: [ManagerComponent]
})
export class ManagerModule { }
