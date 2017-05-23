import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { homeRoutes } from './home.routes';
import { SlideStaticComponent } from './slide-static/slide-static.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes)
  ],
  declarations: [SlideStaticComponent],
  exports: [],
  providers: []
})
export class HomeModule { }
