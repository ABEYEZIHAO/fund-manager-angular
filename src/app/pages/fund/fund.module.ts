import { NgModule } from '@angular/core';

import { FundRoutingModule } from './fund-routing.module';

import { FundComponent } from './fund.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [FundRoutingModule, NzTableModule, NzDividerModule, CommonModule],
  declarations: [FundComponent],
  exports: [FundComponent]
})
export class FundModule { }
