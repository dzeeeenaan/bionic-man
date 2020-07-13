import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { TrainingComponent } from './training/training.component';
import { PrepareComponent } from './training/dashboard/prepare/prepare.component';
import { StatisticComponent } from './training/dashboard/statistic/statistic.component';
import { StartComponent } from './training/dashboard/start/start.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { WeclomeComponent } from './training/dashboard/welcome/weclome.component';
import { BmiComponent } from './training/dashboard/bmi/bmi.component';
import { AuthGuardService } from './home/auth-guard';
import { LoginAuthGuard } from './home/login-guard';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    canActivate: [LoginAuthGuard],
    component: HomeComponent,
    pathMatch: 'prefix',
  },
  {
    path: 'something',
    component: PageNotFoundComponent,
  },
  {
    path: 'train',
    canActivate: [AuthGuardService],
    component: TrainingComponent,
    children: [
      { path: '', redirectTo: 'welcome', pathMatch: 'prefix' },
      { path: 'prepare', component: PrepareComponent },
      { path: 'bmi', component: BmiComponent },
      { path: 'welcome', component: WeclomeComponent },
      { path: 'statistic', component: StatisticComponent },
      { path: 'start', component: StartComponent },
    ],
  },
  {
    path: '**',
    redirectTo: '/something',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
