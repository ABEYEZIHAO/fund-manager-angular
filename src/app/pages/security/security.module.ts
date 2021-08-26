import { NgModule } from '@angular/core';

import { SecurityRoutingModule } from './security-routing.module';

import { SecurityComponent } from './security/security.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { CommonModule } from '@angular/common';
import { UpdateSecurityComponent } from './update-security/update-security.component';


@NgModule({
  imports: [SecurityRoutingModule, NzTableModule, NzDividerModule, CommonModule],
  declarations: [SecurityComponent, UpdateSecurityComponent],
  exports: [SecurityComponent]
})
export class SecurityModule { }