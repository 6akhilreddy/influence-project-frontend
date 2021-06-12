import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignMainComponent } from './campaign-main/campaign-main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CampaignRoutingModule } from './campaign-routing.module';
import { ViewCampaignComponent } from './view-campaign/view-campaign.component';
import { ViewRegistrationComponent } from './view-registration/view-registration.component';
import { FormsModule } from '@angular/forms';
import { FilteredCampaignsComponent } from './filtered-campaigns/filtered-campaigns.component';


@NgModule({
  declarations: [
    CampaignMainComponent,
    ViewCampaignComponent,
    ViewRegistrationComponent,
    FilteredCampaignsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CampaignRoutingModule,
    FormsModule
  ]
})
export class CampaignModule { }
