import { Injectable } from '@angular/core';
import { InterceptorService } from 'src/app/shared/services/interceptor.service';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  private readonly createCampaignURL = environment.baseUrl + environment.apiEndPoints.createCampaign
  private readonly getCampaignUrl = environment.baseUrl + environment.apiEndPoints.getCampaignForbrand
  private readonly getApplicationsURL = environment.baseUrl + environment.apiEndPoints.getApplications
  private readonly acceptApplicationURL = environment.baseUrl + environment.apiEndPoints.acceptApplication
  private readonly rejectApplicationURL = environment.baseUrl + environment.apiEndPoints.rejectApplication
  private readonly deleteCampaignURL = environment.baseUrl + environment.apiEndPoints.deleteCampaign

  constructor(private interceptorService:InterceptorService) { }

  createCampaign(campaignData: any){
    const username = this.getUserName();

    campaignData.brand_username = username
    campaignData.campaign_minage = Number(campaignData.campaign_minage)
    campaignData.campaign_maxage = Number(campaignData.campaign_maxage)
    campaignData.campaign_followers = Number(campaignData.campaign_followers)
    campaignData.campaign_posts = Number(campaignData.campaign_posts)

    console.log(campaignData)

    return this.interceptorService.singleApiCall(this.createCampaignURL, 'POST', campaignData)
  }

  getCampaignData(){
    const username = this.getUserName();
    return this.interceptorService.singleApiCall(this.getCampaignUrl, 'GET', username, null, true)
  }

  getApplications(){
    const username = this.getUserName();
    return this.interceptorService.singleApiCall(this.getApplicationsURL, "GET", username, null, true)
  }

  getUserName(){
    return localStorage.getItem('loggedInBrandUsername')
  }

  acceptApplication(campaignId: string, influencerUsername: string){
    const params = {
      campaignId,
      influencerUsername
    }
    return this.interceptorService.singleApiCall(this.acceptApplicationURL, 'POST', params)
  }

  rejectApplication(campaignId: string, influencerUsername: string){
    const params = {
      campaignId,
      influencerUsername
    }
    return this.interceptorService.singleApiCall(this.rejectApplicationURL, 'POST', params)
  }

  deleteCampaign(campaignId: string){
    return this.interceptorService.singleApiCall(this.deleteCampaignURL, "DELETE", campaignId, null, true)
  }


}
