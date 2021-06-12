import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../campaign.service';


@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.scss']
})
export class CreateCampaignComponent implements OnInit {

  interests: any = ['music', 'fashion', 'fitness', 'food', 'health', 'photograph', 'travel', 'lifestyle', 'tech', 'dance']

  editedData: any = {
    campaign_interests : []
  }

  success:boolean = false

  constructor(private campaignService: CampaignService){}

  ngOnInit():void {}

  resetData(){
    this.editedData= {
      campaign_interests : []
    }
  }

  checkInterest(data: any){
    let index = this.editedData.campaign_interests.findIndex((itm: any) => itm===data)
    if (index !== -1){
      return true
    }else{
      return false
    }
  }

  //Checkbox Change detecting function
  getCheckboxValues(ev: any, data: any) {

    if(ev.target.checked){
      // Pushing the object into array
      this.editedData.campaign_interests.push(data);

    }else {
      let removeIndex = this.editedData.campaign_interests.findIndex((itm: any) => itm===data);

      if(removeIndex !== -1)
      this.editedData.campaign_interests.splice(removeIndex,1);
    }
  }

  createCampaign(){
    this.campaignService.createCampaign(this.editedData).subscribe((resp: any) => {
      this.resetData();
      this.success=true
      setTimeout(() => {
        this.success = false
      }, 3000)
    }, (err:any) => {
      console.log(err)
    })
  }

}
