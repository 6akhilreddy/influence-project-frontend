import { Injectable } from '@angular/core';
import { InterceptorService } from 'src/app/shared/services/interceptor.service';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly signInURL = environment.baseUrl + environment.apiEndPoints.brandSignIn
  private readonly signUpURL = environment.baseUrl + environment.apiEndPoints.brandSignUp

  constructor(private interceptorService: InterceptorService) { }

  signIn(siginObj: any){
    return this.interceptorService.singleApiCall(this.signInURL, 'POST', siginObj)
  }

  signUp(signupObj: any){
    return this.interceptorService.singleApiCall(this.signUpURL, 'POST', signupObj)
  }

  setupLoginSession(username:string){
    localStorage.setItem('isLoggedInBrand', 'yes');
    localStorage.setItem('loggedInBrandUsername', username);
  }

  getLoginSession(){
    return localStorage.getItem('isLoggedInBrand')
  }
}
