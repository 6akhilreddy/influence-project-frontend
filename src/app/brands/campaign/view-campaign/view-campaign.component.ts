import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../campaign.service';

@Component({
  selector: 'app-view-campaign',
  templateUrl: './view-campaign.component.html',
  styleUrls: ['./view-campaign.component.scss']
})
export class ViewCampaignComponent implements OnInit {

  constructor(private campaignService:CampaignService) { }

  liveCampaigns: any = []

  ngOnInit(): void {
    this.getCampaigns()
  }

  getCampaigns(){
    this.campaignService.getCampaignData().subscribe((resp: any) => {
      this.liveCampaigns = resp.body
    }, (err: any) => console.log(err))
  }

  deleteCampaign(campaign: any) {
    this.campaignService.deleteCampaign(campaign._id).subscribe((resp: any) => {
      this.liveCampaigns = this.liveCampaigns.filter((liveCampaign: any) => liveCampaign._id !== campaign._id)
    }, (err: any) => console.log(err))
  }

}
