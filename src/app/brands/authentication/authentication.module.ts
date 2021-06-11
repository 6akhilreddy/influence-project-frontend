import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationMainComponent } from './authentication-main/authentication-main.component';
import { AuthenticationRoutingModule } from './authentication-routing.module'
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AuthenticationMainComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class AuthenticationModule { }
