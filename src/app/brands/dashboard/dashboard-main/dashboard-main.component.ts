import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss']
})
export class DashboardMainComponent implements OnInit {

  constructor(private dashboardService: DashboardService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogout(){
    this.dashboardService.logoutSession();
    this.router.navigate(['/brandAuth']);
  }

}
