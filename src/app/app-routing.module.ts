import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { TrainingComponent } from './training/training.component';
import { PrepareComponent } from './training/dashboard/prepare/prepare.component';
import { StatisticComponent } from './training/dashboard/statistic/statistic.component';
import { QuotesComponent } from './training/dashboard/quotes/quotes.component';
import { StartComponent } from './training/dashboard/start/start.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';

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
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
