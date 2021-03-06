import { Component, NgZone, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { SubjectService } from 'src/app/shared/services/subject.service';
import { CampaignService } from '../campaign.service';

@Component({
  selector: 'app-view-campaign',
  templateUrl: './view-campaign.component.html',
  styleUrls: ['./view-campaign.component.scss']
})
export class ViewCampaignComponent implements OnInit {

  constructor(private campaignService:CampaignService, private subjectService: SubjectService, private spinner: SpinnerService, private ngZone: NgZone) { }

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

  applyCampaign(campaign: any){
    this.campaignService.applyCampaign(campaign).subscribe((resp: any) => {
      // check and change for optimization
      this.getCampaigns();
    }, (err: any) => {
      const params = {
        open: true,
        modalName: '#warningModal',
        modalBody: 'You will not able able to apply to this campaign as you did not met the eligibility criteria. Please update your profile.',
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
