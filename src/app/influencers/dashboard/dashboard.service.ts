import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  getUserName(){
    return localStorage.getItem('loggedInInfluencerUsername')
  }

  logoutSession(){
    localStorage.removeItem('isLoggedInInfluencer')
    localStorage.removeItem('loggedInInfluencerUsername')
  }
}
