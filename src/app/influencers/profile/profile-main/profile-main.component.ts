import { Component, NgZone, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
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

  // interests: any = ['music', 'fashion', 'fitness', 'food', 'health', 'photography', 'travel', 'lifestyle', 'tech', 'dance']
  interests: any = ['music', 'fashion', 'photography']

  constructor(
    private profileService:ProfileService, private spinner: SpinnerService, private ngZone: NgZone
  ) { }

  ngOnInit(): void {
    this.getInfluencers();
  }

  toggleEdit(){
    this.editedData = {...this.influencerData}
    this.allowEdit = true
  }

  getInfluencers(){
    this.ngZone.run(() => {
      this.spinner.show();
    })
    this.profileService.getInfluencerProfileData().subscribe( (resp: any) =>{
      this.ngZone.run(() => {
        this.spinner.hide();
      })
      this.influencerData = resp.body
      this.initalFromUsername = this.influencerData.username.slice(0, 2)
      this.influencerData.interests = this.influencerData.interests === undefined ? [] : this.influencerData.interests
    },(err: any) => {
      this.ngZone.run(() => {
        this.spinner.hide();
      });
      console.log(err)
    })
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
