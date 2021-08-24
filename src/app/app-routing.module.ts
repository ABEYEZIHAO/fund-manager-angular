import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundComponent } from './fund/fund.component';
import { HomeComponent } from './home/home.component';
import { ManagerComponent } from './manager/manager.component';
import { PositionComponent } from './position/position.component';
import { SecurityComponent } from './security/security.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fund', component: FundComponent },
  { path: 'manager', component: ManagerComponent },
  { path: 'security', component: SecurityComponent },
  { path: 'position', component: PositionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
