import { Component, NgZone, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { CampaignService } from '../campaign.service';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.scss']
})
export class ViewRegistrationComponent implements OnInit {

  constructor(private campaignService:CampaignService, private spinner: SpinnerService, private ngZone: NgZone) { }

  applications: any = []

  ngOnInit(): void {
    this.getApplicationStatus()
  }

  getApplicationStatus(){
    this.ngZone.run(() => {
      this.spinner.show();
    })
    this.campaignService.getApplicationStatus().subscribe((resp: any) => {
      this.ngZone.run(() => {
        this.spinner.hide();
      })
      this.applications = resp.body
    }, (err: any) => {
      this.ngZone.run(() => {
        this.spinner.hide();
      });
      console.log(err)
    })
  }

}
