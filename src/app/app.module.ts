import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FundComponent } from './fund/fund.component';
import { ManagerComponent } from './manager/manager.component';
import { PositionComponent } from './position/position.component';
import { SecurityComponent } from './security/security.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [					
    AppComponent,
      FundComponent,
      ManagerComponent,
      PositionComponent,
      SecurityComponent,
      HomeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
