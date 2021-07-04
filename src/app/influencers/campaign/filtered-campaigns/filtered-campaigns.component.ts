import { Component, NgZone, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { SubjectService } from 'src/app/shared/services/subject.service';
import { CampaignService } from '../campaign.service';

@Component({
  selector: 'app-filtered-campaigns',
  templateUrl: './filtered-campaigns.component.html',
  styleUrls: ['./filtered-campaigns.component.scss']
})
export class FilteredCampaignsComponent implements OnInit {

  filteredCampaigns: any = []

  constructor(private campaignService:CampaignService, private subjectService: SubjectService, private spinner: SpinnerService, private ngZone: NgZone) { }

  ngOnInit(): void {
    this.getFilteredCampaigns();
  }

  getFilteredCampaigns(){
    this.ngZone.run(() => {
      this.spinner.show();
    })
    this.campaignService.getFilterCampaignData().subscribe((resp: any) => {
      this.ngZone.run(() => {
        this.spinner.hide();
      })
      this.filteredCampaigns = resp.body
    }, (err: any) => {
      this.ngZone.run(() => {
        this.spinner.hide();
      });
      console.log(err)
    })
  }

  applyCampaign(campaign: any){
    this.campaignService.applyCampaign(campaign).subscribe((resp: any) => {
      // check and change for optimization
      this.getFilteredCampaigns();
    }, (err: any) => {
      const params = {
        open: true,
        modalName: '#warningModal',
        modalBody: 'You will not able able to apply to this campaign as you did not met the eligibility criteria. please update your profile',
        modalTitle: 'Not Applicable'
      }
      this.subjectService.confirmSubject.next(params)
    })
  }

  checkIfApplied(campaign: any){
    let influencerPresent = false
    const username = this.campaignService.getUserName();
    if (campaign.hasOwnProperty('influencers_applied')){
      campaign.influencers_applied.forEach((influencer: any) => {
        if (influencer === username){
          influencerPresent = true
        }
      })
    }
    return influencerPresent
  }

}
