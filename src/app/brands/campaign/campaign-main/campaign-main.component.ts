import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaign-main',
  templateUrl: './campaign-main.component.html',
  styleUrls: ['./campaign-main.component.scss']
})
export class CampaignMainComponent implements OnInit {

  campaignType: string = "create"

  constructor() { }

  ngOnInit(): void {
  }

  changeCampaign(type: string){
    this.campaignType = type
  }

}
