import { NgModule } from '@angular/core';

import { FundRoutingModule } from './fund-routing.module';

import { FundComponent } from './fund.component';


@NgModule({
  imports: [FundRoutingModule],
  declarations: [FundComponent],
  exports: [FundComponent]
})
export class FundModule { }
