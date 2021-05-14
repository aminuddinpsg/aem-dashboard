import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing.module';
import { BarChartComponent } from './component/bar-chart/bar-chart.component';
import { DonutChartComponent } from './component/donut-chart/donut-chart.component';
import { TableListComponent } from './component/table-list/table-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    BarChartComponent,
    DonutChartComponent,
    TableListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
