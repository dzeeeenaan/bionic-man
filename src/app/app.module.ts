import { setUpComponent } from './training/setUp/setUp.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { TrainingComponent } from './training/training.component';
import { UserService } from './user.service';
import { DashboardComponent } from './training/dashboard/dashboard.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'train', component: TrainingComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrainingComponent,
    setUpComponent,
    DashboardComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
