import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from './../shared/shared.module';
import { BannComponent } from './components/bann/bann.component';

@NgModule({
  declarations: [HomeComponent, BannerComponent, BannComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}