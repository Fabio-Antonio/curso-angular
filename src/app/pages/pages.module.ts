import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressIsComponent } from './progress/progress-is.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShareModule } from '../share/share.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    DashboardComponent,
    ProgressIsComponent,
    Grafica1Component,
    PagesComponent,
  ],
  exports:[
    DashboardComponent,
    ProgressIsComponent,
    Grafica1Component,
    PagesComponent,
  ],
    imports: [
    CommonModule,
    ShareModule,
    AppRoutingModule
  
  ]
})
export class PagesModule { }
