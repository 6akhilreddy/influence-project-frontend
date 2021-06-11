import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  getUserName(){
    return localStorage.getItem('loggedInUsername')
  }

  logoutSession(){
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('loggedInUsername')
  }
}
