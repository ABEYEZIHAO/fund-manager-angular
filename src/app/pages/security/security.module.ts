import { NgModule } from '@angular/core';

import { SecurityRoutingModule } from './security-routing.module';

import { SecurityComponent } from './security.component';
import { NzTableModule } from 'ng-zorro-antd/table';


@NgModule({
  imports: [SecurityRoutingModule, NzTableModule],
  declarations: [SecurityComponent],
  exports: [SecurityComponent]
})
export class SecurityModule { }