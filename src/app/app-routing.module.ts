import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './View/Authentification/login/login.component';
import { ErrorPageComponent } from './View/error-page/error-page.component';
import { HomeComponent } from './View/home/home.component';

const routes: Routes = [
  {path: '', redirectTo:'/home',pathMatch:'full'},
  {path:'/home', component: HomeComponent},
  {path:'/login', component: LoginComponent},
  {path: '**',component:ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
