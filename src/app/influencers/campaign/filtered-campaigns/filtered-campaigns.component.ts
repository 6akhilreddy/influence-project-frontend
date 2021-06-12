import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/shared/services/subject.service';
import { CampaignService } from '../campaign.service';

@Component({
  selector: 'app-filtered-campaigns',
  templateUrl: './filtered-campaigns.component.html',
  styleUrls: ['./filtered-campaigns.component.scss']
})
export class FilteredCampaignsComponent implements OnInit {

  filteredCampaigns: any = []

  constructor(private campaignService:CampaignService, private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.getFilteredCampaigns();
  }

  getFilteredCampaigns(){
    this.campaignService.getFilterCampaignData().subscribe((resp: any) => {
      this.filteredCampaigns = resp.body
    }, (err: any) => console.log(err))
  }

  applyCampaign(campaign: any){
    this.campaignService.applyCampaign(campaign).subscribe((resp: any) => {
      // check and change for optimization
      this.getFilteredCampaigns();
    }, (err: any) => {
      const params = {
        open: true,
        modalName: '#warningModal',
        modalBody: 'You will not able able to apply to this campaign as you did not met the eligibility criteria',
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
