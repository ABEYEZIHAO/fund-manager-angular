import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'fund', loadChildren: () => import('./pages/fund/fund.module').then(m => m.FundModule) },
  { path: 'manager', loadChildren: () => import('./pages/manager/manager.module').then(m => m.ManagerModule) },
  { path: 'security', loadChildren: () => import('./pages/security/security.module').then(m => m.SecurityModule) },
  { path: 'position', loadChildren: () => import('./pages/position/position.module').then(m => m.PositionModule) },
  { path: 'todo', loadChildren: () => import('./pages/todo/todo.module').then(m => m.TodoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' }),FormsModule],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
