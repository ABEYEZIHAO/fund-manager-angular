import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';


@NgModule({
  imports: [HomeRoutingModule, NzCarouselModule, CommonModule, NzIconModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
