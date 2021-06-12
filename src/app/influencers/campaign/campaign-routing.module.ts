import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import  { CampaignMainComponent } from './campaign-main/campaign-main.component'

const routes: Routes = [
  { path: '', component: CampaignMainComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CampaignRoutingModule { }
