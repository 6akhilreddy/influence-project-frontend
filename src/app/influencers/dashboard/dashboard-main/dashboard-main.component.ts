import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectService } from 'src/app/shared/services/subject.service';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss']
})
export class DashboardMainComponent implements OnInit {

  constructor(private dashboardService: DashboardService, private router: Router, private subjectService: SubjectService) { }

  ngOnInit(): void {
    const params = {
      open: true,
      modalName: '#infoModal',
      modalBody: 'Please update the Profile details for better suggestions and faster reach to brands',
      modalTitle: 'Update Profile'
    }
    // this.subjectService.confirmSubject.next(params)
  }

  onLogout(){
    this.dashboardService.logoutSession();
    this.router.navigate(['/influencerAuth']);
  }

}
