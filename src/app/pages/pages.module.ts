import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressIsComponent } from './progress/progress-is.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShareModule } from '../share/share.module';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProgressIsComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent,
  ],
  exports:[
    DashboardComponent,
    ProgressIsComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingsComponent
  ],
    imports: [
    CommonModule,
    ShareModule,
    AppRoutingModule,
    FormsModule,
    ComponentsModule
  
  ]
})
export class PagesModule { }
