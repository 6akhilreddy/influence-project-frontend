import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  getUserName(){
    return localStorage.getItem('loggedInBrandUsername')
  }

  logoutSession(){
    localStorage.removeItem('isLoggedInBrand')
    localStorage.removeItem('loggedInBrandUsername')
  }
}
