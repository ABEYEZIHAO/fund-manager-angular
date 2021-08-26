import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PositionComponent } from './position/position.component';
import { UpdatePositionComponent } from './update-position/update-position.component';
import { CreatePositionComponent } from './create-position/create-position.component';
import { NzTableModule } from 'ng-zorro-antd/table';

const routes: Routes = [
  { path: '', component: PositionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), NzTableModule],
  exports: [RouterModule]
})
export class PositionRoutingModule { }
