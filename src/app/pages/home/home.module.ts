import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';


@NgModule({
  imports: [HomeRoutingModule, NzCarouselModule, CommonModule, NzIconModule, NzBreadCrumbModule, NzDividerModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
