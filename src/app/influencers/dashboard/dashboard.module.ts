import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { DashboardRoutingModule } from './dashboard-routing.module'
import { SharedModule } from 'src/app/shared/shared.module';
import { SuggestionsComponent } from './suggestions/suggestions.component';

@NgModule({
  declarations: [
    DashboardMainComponent,
    SuggestionsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
