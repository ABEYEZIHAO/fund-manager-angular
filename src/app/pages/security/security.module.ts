import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SecurityRoutingModule } from './security-routing.module';

import { SecurityComponent } from './security.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { CommonModule } from '@angular/common';


@NgModule({
  imports: [SecurityRoutingModule, NzTableModule, NzDividerModule, CommonModule, NzDropDownModule, FormsModule, NzIconModule],
  declarations: [SecurityComponent],
  exports: [SecurityComponent]
})
export class SecurityModule { }