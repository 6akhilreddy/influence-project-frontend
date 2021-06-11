import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-main',
  templateUrl: './profile-main.component.html',
  styleUrls: ['./profile-main.component.scss']
})
export class ProfileMainComponent implements OnInit {

  initalFromUsername = ''
  influencerData: any = {}
  allowEdit = false
  editedData: any = {}

  interests: any = ['music', 'fashion', 'fitness', 'food', 'health', 'photograph', 'travel', 'lifestyle', 'tech', 'dance']

  constructor(
    private profileService:ProfileService
  ) { }

  ngOnInit(): void {
    this.getInfluencers();
  }

  toggleEdit(){
    this.editedData = {...this.influencerData}
    this.allowEdit = true
  }

  getInfluencers(){
    this.profileService.getInfluencerProfileData('akhil').subscribe( (resp: any) =>{
      this.influencerData = resp.body
      this.initalFromUsername = this.influencerData.username.slice(0, 2)
      this.influencerData.interests = this.influencerData.interests === undefined ? [] : this.influencerData.interests
    },(err: any) => console.log(err))
  }

  onSubmit(){
    this.profileService.updateInfluencerProfileData(this.editedData).subscribe((resp: any) => {
      this.getInfluencers();
      this.allowEdit = false
    }, (err: any) => {
      console.log(err)
    })
  }

  onCancel(){
    this.allowEdit = false
  }

  checkInterest(data: any){
    let index = this.editedData.interests.findIndex((itm: any) => itm===data)
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
      this.editedData.interests.push(data);

    }else {
      let removeIndex = this.editedData.interests.findIndex((itm: any) => itm===data);

      if(removeIndex !== -1)
      this.editedData.interests.splice(removeIndex,1);
    }
  }

}
