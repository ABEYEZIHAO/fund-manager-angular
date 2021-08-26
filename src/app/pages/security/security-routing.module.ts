import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityComponent } from './security/security.component';
import { CreateSecurityComponent } from './create-security/create-security.component';
import { UpdateSecurityComponent } from './update-security/update-security.component';
import { NzTableModule } from 'ng-zorro-antd/table';

const routes: Routes = [
  { path: '', component: SecurityComponent },
  { path: 'add', component: CreateSecurityComponent },
  { path: 'update/:id', component: UpdateSecurityComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), NzTableModule],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }