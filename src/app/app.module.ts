import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { FundComponent } from './pages/fund/fund.component';
// import { ManagerComponent } from './pages/manager/manager.component';
// import { PositionComponent } from './pages/position/position.component';
// import { SecurityComponent } from './pages/security/security.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HomeComponent } from './pages/home/home.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

registerLocaleData(en);

@NgModule({
  declarations: [					
    AppComponent,
      // FundComponent,
      // ManagerComponent,
      // PositionComponent,
      // SecurityComponent,
      // HomeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule, IconsProviderModule, NzLayoutModule, NzMenuModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
