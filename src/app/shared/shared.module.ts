import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HeaderComponent} from './components/header/header.component'
import {HomePageComponent} from './components/home-page/home-page.component'
import { RouterModule } from '@angular/router';
import { PopupComponent } from './components/popup/popup.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { CoursesComponent } from './components/courses/courses.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomePageComponent,
    PopupComponent,
    AvatarComponent,
    CoursesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    PopupComponent,
    AvatarComponent
  ]
})
export class SharedModule { }
