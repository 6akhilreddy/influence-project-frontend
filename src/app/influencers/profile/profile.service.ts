import { Injectable } from '@angular/core';
import { InterceptorService } from 'src/app/shared/services/interceptor.service';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private readonly getInfluencerProfileURL = environment.baseUrl + environment.apiEndPoints.getInfluencerProfile
  private readonly updateInfluencerProfileURL = environment.baseUrl + environment.apiEndPoints.updateInfluencerProfile

  constructor(private interceptorService:InterceptorService) { }

  getInfluencerProfileData(){
    const username = this.getUserName();
    return this.interceptorService.singleApiCall(this.getInfluencerProfileURL, 'GET', username, null, true)
  }

  updateInfluencerProfileData(influencerObj: any){
    return this.interceptorService.singleApiCall(this.updateInfluencerProfileURL, 'PUT', influencerObj)
  }

  getUserName(){
    return localStorage.getItem('loggedInInfluencerUsername')
  }

}
