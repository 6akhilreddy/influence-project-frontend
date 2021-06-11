import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationMainComponent } from './authentication-main/authentication-main.component';

const routes: Routes = [
  { path: '', component: AuthenticationMainComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthenticationRoutingModule { }
