import { AppRoutingModule } from './app-routing.module';
import { setUpComponent } from './training/setUp/setUp.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { TrainingComponent } from './training/training.component';
import { UserService } from './user.service';
import { DashboardComponent } from './training/dashboard/dashboard.component';
import { PrepareComponent } from './training/dashboard/prepare/prepare.component';
import { StatisticComponent } from './training/dashboard/statistic/statistic.component';
import { QuotesComponent } from './training/dashboard/quotes/quotes.component';
import { MenuComponent } from './training/dashboard/menu/menu.component';
import { StartComponent } from './training/dashboard/start/start.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'something',
    component: PageNotFoundComponent,
  },
  {
    path: 'train',
    component: TrainingComponent,
    children: [
      { path: 'prepare', component: PrepareComponent },
      { path: 'statistic', component: StatisticComponent },
      { path: 'quotes', component: QuotesComponent },
      { path: ':start', component: StartComponent },
    ],
  },
  {
    path: '**',
    redirectTo: '/something',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrainingComponent,
    setUpComponent,
    DashboardComponent,
    PrepareComponent,
    StatisticComponent,
    QuotesComponent,
    MenuComponent,
    StartComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
