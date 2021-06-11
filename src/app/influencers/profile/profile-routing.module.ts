import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import  { ProfileMainComponent } from './profile-main/profile-main.component'

const routes: Routes = [
  { path: '', component: ProfileMainComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProfileRoutingModule { }
