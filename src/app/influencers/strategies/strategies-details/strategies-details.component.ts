import { Component, Input, OnInit } from '@angular/core';
import { StrategiesService } from '../strategies.service';

@Component({
  selector: 'app-strategies-details',
  templateUrl: './strategies-details.component.html',
  styleUrls: ['./strategies-details.component.scss']
})
export class StrategiesDetailsComponent implements OnInit {

  @Input() keyword: string = 'instagram trends'
  strategiesData: any = []

  constructor(private strategiesService:StrategiesService) { }

  ngOnInit(): void {
    this.getStrategies(this.keyword)
  }

  getStrategies(keyword: string){
    this.strategiesService.getInfluencerStrategiesData(keyword).subscribe((resp: any) => {
      this.strategiesData = resp
    },(err: any) => {
      console.log(err)
    })
  }

}
