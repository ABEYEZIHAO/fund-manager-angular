import { NgModule } from '@angular/core';

import { SecurityRoutingModule } from './security-routing.module';

import { SecurityComponent } from './security.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [SecurityRoutingModule, NzTableModule, NzDividerModule, CommonModule],
  declarations: [SecurityComponent],
  exports: [SecurityComponent]
})
export class SecurityModule { }