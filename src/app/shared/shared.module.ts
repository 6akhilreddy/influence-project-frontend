import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HeaderComponent} from './components/header/header.component'
import {HomePageComponent} from './components/home-page/home-page.component'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
