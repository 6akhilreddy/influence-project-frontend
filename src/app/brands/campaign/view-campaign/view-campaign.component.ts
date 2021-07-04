import { Component, NgZone, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { CampaignService } from '../campaign.service';

@Component({
  selector: 'app-view-campaign',
  templateUrl: './view-campaign.component.html',
  styleUrls: ['./view-campaign.component.scss']
})
export class ViewCampaignComponent implements OnInit {

  constructor(private campaignService:CampaignService, private spinner: SpinnerService, private ngZone: NgZone) { }

  liveCampaigns: any = []

  ngOnInit(): void {
    this.getCampaigns()
  }

  getCampaigns(){
    this.ngZone.run(() => {
      this.spinner.show();
    })
    this.campaignService.getCampaignData().subscribe((resp: any) => {
      this.ngZone.run(() => {
        this.spinner.hide();
      })
      this.liveCampaigns = resp.body
    }, (err: any) => {
      this.ngZone.run(() => {
        this.spinner.hide();
      });
      console.log(err)
    })
  }

  deleteCampaign(campaign: any) {
    this.campaignService.deleteCampaign(campaign._id).subscribe((resp: any) => {
      this.liveCampaigns = this.liveCampaigns.filter((liveCampaign: any) => liveCampaign._id !== campaign._id)
    }, (err: any) => console.log(err))
  }

}
