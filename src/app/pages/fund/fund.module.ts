import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FundRoutingModule } from './fund-routing.module';

import { FundComponent } from './fund.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { CommonModule } from '@angular/common';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';


@NgModule({
  imports: [FundRoutingModule, NzTableModule, NzDividerModule, CommonModule, NzDropDownModule, FormsModule, NzIconModule, NzBreadCrumbModule],
  declarations: [FundComponent],
  exports: [FundComponent]
})
export class FundModule { }
