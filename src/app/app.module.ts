import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SpinnerService } from './shared/services/spinner.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [SpinnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
