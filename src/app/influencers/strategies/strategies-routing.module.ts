import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import  { StrategiesMainComponent } from './strategies-main/strategies-main.component'

const routes: Routes = [
  { path: '', component: StrategiesMainComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class StrategiesRoutingModule { }
