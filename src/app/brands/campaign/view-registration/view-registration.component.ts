import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../campaign.service';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.scss']
})
export class ViewRegistrationComponent implements OnInit {

  constructor(private campaignService:CampaignService) { }

  applications: any = []

  ngOnInit(): void {
    this.getApplications()
  }

  getApplications(){
    this.campaignService.getApplications().subscribe((resp: any) => {
      this.applications = resp.body
    }, (err: any) => console.log(err))
  }

  acceptApplication(campaignId: string, influencerUsername: string){
    this.campaignService.acceptApplication(campaignId, influencerUsername).subscribe((resp: any) => {
      // check and optimize
      this.getApplications()
    }, (err: any) => console.log(err))
  }

  rejectApplication(campaignId: string, influencerUsername: string){
    this.campaignService.rejectApplication(campaignId, influencerUsername).subscribe((resp: any) => {
      // check and optimize
      this.getApplications()
    }, (err: any) => console.log(err))
  }

}
