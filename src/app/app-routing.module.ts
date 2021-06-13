import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './shared/components/courses/courses.component';
import { HomePageComponent } from './shared/components/home-page/home-page.component'

let redirectUrl = '/home';

const routes: Routes = [
  { path: '', redirectTo: redirectUrl, pathMatch: 'full' },
  { path: 'home', component: HomePageComponent},
  { path: 'courses', component: CoursesComponent},

  { path: 'influencerAuth', loadChildren: () => import(`./influencers/authentication/authentication.module`).then(
    module => module.AuthenticationModule )},
  { path: 'brandAuth', loadChildren: () => import(`./brands/authentication/authentication.module`).then(
    module => module.AuthenticationModule )},
  { path: 'influencerDashboard', loadChildren: () => import(`./influencers/dashboard/dashboard.module`).then(
    module => module.DashboardModule )},
  { path: 'brandDashboard', loadChildren: () => import(`./brands/dashboard/dashboard.module`).then(
    module => module.DashboardModule )},
  { path: 'influencerProfile', loadChildren: () => import(`./influencers/profile/profile.module`).then(
    module => module.ProfileModule )},
  { path: 'brandProfile', loadChildren: () => import(`./brands/profile/profile.module`).then(
    module => module.ProfileModule )},
  { path: 'influencerStrategies', loadChildren: () => import(`./influencers/strategies/strategies.module`).then(
    module => module.StrategiesModule )},
  { path: 'brandCampaign', loadChildren: () => import(`./brands/campaign/campaign.module`).then(
    module => module.CampaignModule )},
  { path: 'influencerCampaign', loadChildren: () => import(`./influencers/campaign/campaign.module`).then(
    module => module.CampaignModule )},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
