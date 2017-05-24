import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MdTabsModule } from '@angular/material';

import { HomeComponent } from './home.component';
import { SlideStaticComponent } from './slide-static/slide-static.component';

import { homeRoutes } from './home.routes';

@NgModule({
  imports: [
    CommonModule,
    MdTabsModule,
    RouterModule.forChild(homeRoutes)
  ],
  declarations: [SlideStaticComponent,HomeComponent],
  exports: [MdTabsModule],
  providers: []
})
export class HomeModule { }
