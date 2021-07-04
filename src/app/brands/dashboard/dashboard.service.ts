import { Injectable } from '@angular/core';
import { InterceptorService } from 'src/app/shared/services/interceptor.service';
import { environment } from 'src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private readonly trainCampaignURL = environment.baseUrl + environment.apiEndPoints.trainCampaign
  private readonly wipeCampaignURL = environment.baseUrl + environment.apiEndPoints.wipeCampaign
  private readonly generateCSVURL = environment.baseUrl + environment.apiEndPoints.generateCSV
  private readonly getSuggesitonURL = environment.baseUrl + environment.apiEndPoints.getSuggestions

  constructor(private interceptorService:InterceptorService) { }

  getUserName(){
    return localStorage.getItem('loggedInBrandUsername')
  }

  logoutSession(){
    localStorage.removeItem('isLoggedInBrand')
    localStorage.removeItem('loggedInBrandUsername')
  }

  trainData(){
    return this.interceptorService.singleApiCall(this.trainCampaignURL, 'GET')
  }

  wipeData(){
    return this.interceptorService.singleApiCall(this.wipeCampaignURL, 'GET')
  }

  generateCSV(){
    return this.interceptorService.singleApiCall(this.generateCSVURL, 'GET')
  }

  getSuggestions(){
    const brandUsername = this.getUserName();
    return this.interceptorService.singleApiCall(this.getSuggesitonURL, 'GET', brandUsername, null, true)
  }
}
