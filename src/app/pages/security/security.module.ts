import { NgModule } from '@angular/core';

import { SecurityRoutingModule } from './security-routing.module';

import { SecurityComponent } from './security/security.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { CommonModule } from '@angular/common';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';


@NgModule({
  imports: [SecurityRoutingModule, NzTableModule, NzDividerModule, CommonModule, NzIconModule, NzModalModule, 
            NzFormModule, FormsModule, ReactiveFormsModule, NzMessageModule, NzPopconfirmModule],
  declarations: [SecurityComponent],
  exports: [SecurityComponent]
})
export class SecurityModule { }