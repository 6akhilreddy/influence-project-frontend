import { Injectable } from '@angular/core';
import { InterceptorService } from 'src/app/shared/services/interceptor.service';
import { environment } from 'src/environments/environment';
import { ProfileService } from '../profile/profile.service';

@Injectable({
  providedIn: 'root'
})
export class StrategiesService {

  private readonly getStrategiesURL = environment.baseUrl + environment.apiEndPoints.getInfluencerStrategies

  constructor(private interceptorService:InterceptorService, private profileService: ProfileService) { }

  getInfluencerStrategiesData(keyword: string){
    const keywordObj = {
      keyword
    }
    return this.interceptorService.singleApiCall(this.getStrategiesURL, 'POST', keywordObj)
  }

  getInfluencerData(){
    return this.profileService.getInfluencerProfileData()
  }
}
