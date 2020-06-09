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

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'train', component: TrainingComponent },
  { path: 'train/prepare', component: PrepareComponent },
  { path: 'train/statistic', component: StatisticComponent },
  { path: 'train/quotes', component: QuotesComponent },
  { path: 'train/start', component: StartComponent },
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
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
