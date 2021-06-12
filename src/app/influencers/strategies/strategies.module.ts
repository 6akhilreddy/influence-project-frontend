import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrategiesMainComponent } from './strategies-main/strategies-main.component';
import { StrategiesRoutingModule } from './strategies-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab.component';
import { StrategiesDetailsComponent } from './strategies-details/strategies-details.component';



@NgModule({
  declarations: [
    StrategiesMainComponent,
    TabsComponent,
    TabComponent,
    StrategiesDetailsComponent
  ],
  imports: [
    CommonModule,
    StrategiesRoutingModule,
    SharedModule
  ]
})
export class StrategiesModule { }
