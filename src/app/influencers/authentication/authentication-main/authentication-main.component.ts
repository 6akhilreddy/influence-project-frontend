import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication-main',
  templateUrl: './authentication-main.component.html',
  styleUrls: ['./authentication-main.component.scss']
})
export class AuthenticationMainComponent implements OnInit {

  signUpErrorMsg:string = ''
  signInErrorMsg: string = ''

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    if(this.authenticationService.getLoginSession() === 'yes'){
      this.router.navigate(['/influencerDashboard'])
    }
  }

  toggleForm(){
    const container: any = document.querySelector('.container');
    container.classList.toggle('active');
  };

  validateEmptyFields(validateObj: any){
    let areFieldsEmpty: boolean = false
    for (const key in validateObj){
      if (validateObj[key] === ''){
        areFieldsEmpty = true
      }
    }
    return areFieldsEmpty
  }

  onSubmitSignIn(siginObj: any){
    const areFieldsEmpty = this.validateEmptyFields(siginObj);
    if (areFieldsEmpty){
      this.signInErrorMsg = "All the fields are required"
    }else{
      this.authenticationService.signIn(siginObj).subscribe((resp: any) => {
        this.authenticationService.setupLoginSession(siginObj.username)
        this.router.navigate(['/influencerDashboard'])
      }, (err: any) => {
        console.log(err)
        this.signInErrorMsg = err.error.body
      })
    }
  }

  onSubmitSignUp(signupObj: any){
    const areFieldsEmpty = this.validateEmptyFields(signupObj);
    if (areFieldsEmpty){
      this.signInErrorMsg = "All the fields are required"
    }else{
      if(signupObj.password === signupObj.confirmPassword){
        delete signupObj.confirmPassword
        this.authenticationService.signUp(signupObj).subscribe((resp: any) => {
          this.toggleForm()
        }, (err: any) => {
          this.signUpErrorMsg = err.error.body
        })
      }else{
        this.signInErrorMsg = "Password and Confirm Password should match"
      }
    }
  }

}
