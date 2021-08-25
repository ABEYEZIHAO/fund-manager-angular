import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityComponent } from './security.component';
import { NzTableModule } from 'ng-zorro-antd/table';

const routes: Routes = [
  { path: '', component: SecurityComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), NzTableModule],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }