import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from '../pages/pages.component';
import { ProgressIsComponent } from './progress/progress-is.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {path:'dashboard',component:PagesComponent,canActivate:[AuthGuard], children:[
    {path:'',component:DashboardComponent, data:{titulo:'Dashboard'}},
  {path:'grafica1',component:Grafica1Component , data:{titulo:'Gráfica'}},
  {path:'progress',component:ProgressIsComponent , data:{titulo:'Progress'}},
  {path:'account-settings',component:AccountSettingsComponent , data:{titulo:'Ajustes'}},
  {path:'promesas',component:PromesasComponent , data:{titulo:'Promesas'}},
  {path:'rxjs',component:RxjsComponent , data:{titulo:'Rxjs'}},
  ]},  

 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
