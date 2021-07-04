import { Component, Input, NgZone, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { StrategiesService } from '../strategies.service';

@Component({
  selector: 'app-strategies-details',
  templateUrl: './strategies-details.component.html',
  styleUrls: ['./strategies-details.component.scss']
})
export class StrategiesDetailsComponent implements OnInit {

  @Input() keyword: string = 'instagram trends'
  strategiesData: any = []

  constructor(private strategiesService:StrategiesService, private spinner: SpinnerService, private ngZone: NgZone) { }

  ngOnInit(): void {
    this.getStrategies(this.keyword)
  }

  getStrategies(keyword: string){
    this.ngZone.run(() => {
      this.spinner.show();
    })
    this.strategiesService.getInfluencerStrategiesData(keyword).subscribe((resp: any) => {
      this.ngZone.run(() => {
        this.spinner.hide();
      })
      this.strategiesData = resp
    },(err: any) => {
      this.ngZone.run(() => {
        this.spinner.hide();
      })
      console.log(err)
    })
  }

}
