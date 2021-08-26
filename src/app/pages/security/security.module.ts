import { NgModule } from '@angular/core';

import { SecurityRoutingModule } from './security-routing.module';

import { SecurityComponent } from './security/security.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { CommonModule } from '@angular/common';
import { UpdateSecurityComponent } from './update-security/update-security.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [SecurityRoutingModule, NzTableModule, NzDividerModule, CommonModule, NzIconModule, NzModalModule, NzFormModule, FormsModule, ReactiveFormsModule],
  declarations: [SecurityComponent, UpdateSecurityComponent],
  exports: [SecurityComponent]
})
export class SecurityModule { }