import { Injectable } from '@angular/core';
import { InterceptorService } from 'src/app/shared/services/interceptor.service';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private readonly getBrandProfileURL = environment.baseUrl + environment.apiEndPoints.getBrandProfile
  private readonly updateBrandProfileURL = environment.baseUrl + environment.apiEndPoints.updateBrandProfile

  constructor(private interceptorService:InterceptorService) { }

  getInfluencerProfileData(){
    const username = this.getUserName();
    return this.interceptorService.singleApiCall(this.getBrandProfileURL, 'GET', username, null, true)
  }

  updateInfluencerProfileData(brandObj: any){
    return this.interceptorService.singleApiCall(this.updateBrandProfileURL, 'PUT', brandObj)
  }

  getUserName(){
    return localStorage.getItem('loggedInBrandUsername')
  }


}
