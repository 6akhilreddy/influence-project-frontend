import { Injectable } from '@angular/core';
import { InterceptorService } from 'src/app/shared/services/interceptor.service';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly signInURL = environment.baseUrl + environment.apiEndPoints.influencerSignIn
  private readonly signUpURL = environment.baseUrl + environment.apiEndPoints.influencerSignUp

  constructor(private interceptorService: InterceptorService) { }

  signIn(siginObj: any){
    return this.interceptorService.singleApiCall(this.signInURL, 'POST', siginObj)
  }

  signUp(signupObj: any){
    return this.interceptorService.singleApiCall(this.signUpURL, 'POST', signupObj)
  }

  setupLoginSession(username:string){
    localStorage.setItem('isLoggedInInfluencer', 'yes');
    localStorage.setItem('loggedInInfluencerUsername', username);
  }

  getLoginSession(){
    return localStorage.getItem('isLoggedInInfluencer')
  }
}
