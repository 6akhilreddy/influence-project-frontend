import { Component, OnInit } from '@angular/core';
import { StrategiesService } from '../strategies.service';

@Component({
  selector: 'app-strategies-main',
  templateUrl: './strategies-main.component.html',
  styleUrls: ['./strategies-main.component.scss']
})
export class StrategiesMainComponent implements OnInit {

  constructor(private strategiesService: StrategiesService) { }

  interests = []

  ngOnInit(): void {
    this.getInfluencerInterests();
  }

  getInfluencerInterests(){
    this.strategiesService.getInfluencerData().subscribe((resp: any) => {
      this.interests = resp.body.interests === undefined ? [] : resp.body.interests
      console.log(this.interests, resp)
    }, (err: any) => console.log(err))
  }

  checkInterestIsPresent(interest: any){
    let present = false;
    this.interests.forEach((value: any) => {
      if(value === interest){
        present = true
      }
    })
    return present
  }

}
