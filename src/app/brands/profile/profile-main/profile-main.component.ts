import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-main',
  templateUrl: './profile-main.component.html',
  styleUrls: ['./profile-main.component.scss']
})
export class ProfileMainComponent implements OnInit {

  initalFromUsername = ''
  brandData: any = {}
  allowEdit = false
  editedData: any = {}

  industries: any = ['music', 'fashion', 'fitness', 'food', 'health', 'photograph', 'travel', 'lifestyle', 'tech', 'dance']

  constructor(
    private profileService:ProfileService
  ) { }

  ngOnInit(): void {
    this.getInfluencers();
  }

  toggleEdit(){
    this.editedData = {...this.brandData}
    this.allowEdit = true
  }

  getInfluencers(){
    this.profileService.getInfluencerProfileData().subscribe( (resp: any) =>{
      this.brandData = resp.body
      this.initalFromUsername = this.brandData.username.slice(0, 2)
      this.brandData.industries = this.brandData.industries === undefined ? [] : this.brandData.industries
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
    let index = this.editedData.industries.findIndex((itm: any) => itm===data)
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
      this.editedData.industries.push(data);

    }else {
      let removeIndex = this.editedData.industries.findIndex((itm: any) => itm===data);

      if(removeIndex !== -1)
      this.editedData.industries.splice(removeIndex,1);
    }
  }

}
