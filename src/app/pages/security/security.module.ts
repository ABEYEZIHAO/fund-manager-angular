import { NgModule } from '@angular/core';

import { SecurityRoutingModule } from './security-routing.module';

import { SecurityComponent } from './security.component';


@NgModule({
  imports: [SecurityRoutingModule],
  declarations: [SecurityComponent],
  exports: [SecurityComponent]
})
export class SecurityModule { }