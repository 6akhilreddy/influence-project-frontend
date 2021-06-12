import { Injectable } from '@angular/core';
import { InterceptorService } from 'src/app/shared/services/interceptor.service';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  private readonly getAllCampaignsURL = environment.baseUrl + environment.apiEndPoints.getAllCampaigns
  private readonly getFilteredCampaignsURL = environment.baseUrl + environment.apiEndPoints.getFilteredCampaigns
  private readonly applyCampaignURL = environment.baseUrl + environment.apiEndPoints.applyCampaign
  private readonly getApplicationStatusURL = environment.baseUrl + environment.apiEndPoints.getApplicationStatus

  constructor(private interceptorService:InterceptorService) { }

  getCampaignData(){
    return this.interceptorService.singleApiCall(this.getAllCampaignsURL, 'GET')
  }

  getFilterCampaignData(){
    const username = this.getUserName()
    return this.interceptorService.singleApiCall(this.getFilteredCampaignsURL, 'GET', username, null, true)
  }

  applyCampaign(campaign: any){
    const username = this.getUserName()
    const params = {
      username,
      campaignId:campaign._id
    }
    return this.interceptorService.singleApiCall(this.applyCampaignURL, 'POST', params)
  }

  getApplicationStatus(){
    const username = this.getUserName()
    return this.interceptorService.singleApiCall(this.getApplicationStatusURL, 'GET', username, null, true)
  }

  getUserName(){
    return localStorage.getItem('loggedInInfluencerUsername')
  }


}
