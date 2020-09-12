import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TrainingComponent } from './training/training.component';
import { DataStorageService } from './data.storage.service';
import { DashboardComponent } from './training/dashboard/dashboard.component';
import { PrepareComponent } from './training/dashboard/prepare/prepare.component';
import { StatisticComponent } from './training/dashboard/statistic/statistic.component';
import { MenuComponent } from './training/dashboard/menu/menu.component';
import { StartComponent } from './training/dashboard/start/start.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './home/auth.service';
import { WeclomeComponent } from './training/dashboard/welcome/weclome.component';
import { LoadingSpinnerComponent } from './home/loading-spinner/loading-spinner.component';
import { BmiComponent } from './training/dashboard/bmi/bmi.component';
import { AuthGuardService } from './home/auth-guard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoginAuthGuard } from './home/login-guard';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { SliderCarouselModule } from 'slider-carousel';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [
    AppComponent,
    LoadingSpinnerComponent,
    HomeComponent,
    TrainingComponent,
    DashboardComponent,
    PrepareComponent,
    StatisticComponent,
    MenuComponent,
    StartComponent,
    PageNotFoundComponent,
    WeclomeComponent,
    BmiComponent,
  ],
  // tslint:disable-next-line: max-line-length
  imports: [
    SliderCarouselModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    DragDropModule,
    MatButtonModule,
    HttpClientModule,
  ],
  // tslint:disable-next-line: max-line-length
  providers: [
    DataStorageService,
    AuthService,
    AuthGuardService,
    LoginAuthGuard,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
