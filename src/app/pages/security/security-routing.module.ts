import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityComponent } from './security/security.component';
import { UpdateSecurityComponent } from './update-security/update-security.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';

const routes: Routes = [
  { path: '', component: SecurityComponent },
  { path: 'update/:id', component: UpdateSecurityComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), NzTableModule, NzIconModule],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }