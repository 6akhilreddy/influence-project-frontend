import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { SubjectService } from 'src/app/shared/services/subject.service';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss']
})
export class DashboardMainComponent implements OnInit {

  influencers: any = []

  constructor(private dashboardService: DashboardService, private router: Router, private spinner: SpinnerService, private ngZone: NgZone) { }

  ngOnInit(): void {
    this.getSuggestions();
  }

  getSuggestions(){
    this.ngZone.run(() => {
      this.spinner.show();
    })
    this.dashboardService.getSuggestions().subscribe((resp: any) => {
      this.ngZone.run(() => {
        this.spinner.hide();
      })
      this.influencers = resp.body
    }, (err: any) => {
      this.ngZone.run(() => {
        this.spinner.hide();
      })
      console.log(err)
    })
  }

  onLogout(){
    this.dashboardService.logoutSession();
    this.router.navigate(['/brandAuth']);
  }

  onTrain(){
    this.ngZone.run(() => {
      this.spinner.show();
    })
    this.dashboardService.trainData().subscribe((resp: any) => {
      this.ngZone.run(() => {
        this.spinner.hide();
      })
      this.getSuggestions();
      console.log(resp)
    }, (err: any) => {
      this.ngZone.run(() => {
        this.spinner.hide();
      })
      console.log(err)
    })
  }

  onWipe(){
    this.ngZone.run(() => {
      this.spinner.show();
    })
    this.dashboardService.wipeData().subscribe((resp: any) => {
      this.ngZone.run(() => {
        this.spinner.hide();
      })
      this.getSuggestions();
      console.log(resp)
    }, (err: any) => {
      this.ngZone.run(() => {
        this.spinner.hide();
      })
      console.log(err)
    })
  }

  generateCsv(){
    this.ngZone.run(() => {
      this.spinner.show();
    })
    this.dashboardService.generateCSV().subscribe((resp: any) => {
      this.ngZone.run(() => {
        this.spinner.hide();
      })
      console.log(resp)
    }, (err: any) => {
      this.ngZone.run(() => {
        this.spinner.hide();
      })
      console.log(err)
    })
  }

}
