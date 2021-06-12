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
    this.getApplicationStatus()
  }

  getApplicationStatus(){
    this.campaignService.getApplicationStatus().subscribe((resp: any) => {
      this.applications = resp.body
    }, (err: any) => console.log(err))
  }

}
